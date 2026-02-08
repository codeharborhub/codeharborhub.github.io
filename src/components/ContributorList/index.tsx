import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import "./contributors.css";
import Translate from "@docusaurus/Translate";

type Contributor = {
  login: string;
  contributions: number;
  html_url: string;
  avatar_url: string;
};

// per page max 99 items
type ContibutorProps = {
  contributorsPerPage: number;
  contributorsIgnore: Array<string>;
};

const defaultIgnoreContributors: string[] = [
  "restyled-commits",
  "dependabot",
  "renovate",
];
const ContributorList: React.FC<ContibutorProps> = ({
  contributorsPerPage = 99,
  contributorsIgnore = defaultIgnoreContributors,
}: ContibutorProps) => {
  const [contributors, setContributors] = useState<Contributor>([]);
  useEffect(() => {
    const fetchContributors = async () => {
      const octokit = new Octokit();
      try {
        const response = await octokit.request(
          `GET /repos/{owner}/{repo}/contributors?per_page=${contributorsPerPage + contributorsIgnore.length}`,
          {
            owner: "codeharborhub",
            repo: "codeharborhub.github.io",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          },
        );
        const filteredContributors = response.data.filter(
          (contribuidor: Contributor) =>
            !contributorsIgnore.some((element) =>
              contribuidor.login.toLowerCase().includes(element.toLowerCase()),
            ),
        );

        setContributors(filteredContributors);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <>
      <div className="father-flex-div mb-6">
        <p className="intro">
          <Translate
            id="contributors.thankYouMessage"
            description="Thank you message for contributors"
            values={{
              projectName: (
                <a href="https://codeharborhub.github.io">
                  <i>CodeHarborHub</i>
                </a>
              ),
            }}
          >
            {`Our heartfelt thanks to the incredible contributors making {projectName} a premier destination for developers. From code to documentation, your expertise 
      shapes this harbor. Together, we're building a faster, better, and more 
      inclusive open-source ecosystem.`}
          </Translate>
        </p>
        <div className="grid">
          {[0, 1, 2].map((value) => {
            const middle = Math.ceil(contributors.length / 3);
            const start = value === 0 ? 0 : middle * value;
            const end =
              value === 0
                ? middle
                : value === 1
                  ? middle * 2
                  : contributors.length;

            return (
              <div className="grid-item fade-horizontal" key={value}>
                {contributors.slice(start, end).map((contributor) => (
                  <div className="circle">
                    <a
                      href={contributor.html_url}
                      target="_blank"
                      key={contributor.login}
                    >
                      <img
                        className="circle"
                        src={contributor.avatar_url}
                        alt={`${contributor.login}'s avatar`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContributorList;
