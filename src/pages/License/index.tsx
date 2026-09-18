import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  FileCode2,
  GitBranch,
  Info,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

const permissions = [
  "Use the software",
  "Copy the software",
  "Modify the software",
  "Merge the software",
  "Publish the software",
  "Distribute the software",
  "Sublicense the software",
  "Sell copies of the software",
];

const licenseConditions = [
  "Include the original copyright notice.",
  "Include the MIT License permission notice.",
  "Keep the notices in copies or substantial portions of the Software.",
];

const disclaimerItems = [
  "No warranty is provided.",
  'The Software is provided "AS IS".',
  "The authors make no guarantees regarding merchantability.",
  "The authors make no guarantees regarding fitness for a particular purpose.",
  "The authors are not liable for claims, damages, or other liability arising from the Software.",
];

export default function LicensePage(): React.JSX.Element {
  const copyLicense = async () => {
    const licenseText = `MIT License

Copyright (c) 2024 CodeHarborHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`;

    try {
      await navigator.clipboard.writeText(licenseText);
    } catch {
      // Clipboard access may be unavailable in some browser contexts.
    }
  };

  return (
    <Layout
      title="License"
      description="CodeHarborHub licensing information and MIT License terms."
    >
      <main className={styles.page}>
        {/* Breadcrumb */}
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <span>License</span>
          </nav>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <Scale size={15} />
                  Open source licensing
                </div>

                <h1>
                  CodeHarborHub is
                  <span> MIT licensed.</span>
                </h1>

                <p>
                  This project is licensed under the MIT License. You are free
                  to use, copy, modify, publish, distribute, sublicense, and
                  sell the software, subject to the terms of the license.
                </p>

                <div className={styles.heroActions}>
                  <a
                    className={styles.primaryButton}
                    href="https://github.com/CodeHarborHub/codeharborhub.github.io/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LICENSE file
                    <ExternalLink size={16} />
                  </a>

                  <Link className={styles.secondaryButton} to="/contributing/">
                    Contribute
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* License Visual */}
              <div className={styles.licenseVisual}>
                <div className={styles.visualGlow} />

                <div className={styles.licenseCard}>
                  <div className={styles.licenseCardTop}>
                    <div className={styles.licenseIcon}>
                      <Scale size={25} />
                    </div>

                    <span>Open Source</span>
                  </div>

                  <div className={styles.licenseName}>MIT</div>

                  <div className={styles.licenseMeta}>
                    <div>
                      <span>Copyright</span>
                      <strong>2024 CodeHarborHub</strong>
                    </div>

                    <div>
                      <span>Permissions</span>
                      <strong>Broad</strong>
                    </div>
                  </div>

                  <div className={styles.licenseCode}>
                    <Code2 size={15} />
                    <span>LICENSE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className={styles.summarySection}>
          <div className="container">
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCard}>
                <div className={styles.summaryIcon}>
                  <Check size={18} />
                </div>
                <div>
                  <strong>Use freely</strong>
                  <span>Personal and commercial use is permitted.</span>
                </div>
              </div>

              <div className={styles.summaryCard}>
                <div className={styles.summaryIcon}>
                  <GitBranch size={18} />
                </div>
                <div>
                  <strong>Modify & distribute</strong>
                  <span>You can adapt and distribute the Software.</span>
                </div>
              </div>

              <div className={styles.summaryCard}>
                <div className={styles.summaryIcon}>
                  <FileCode2 size={18} />
                </div>
                <div>
                  <strong>Keep the notice</strong>
                  <span>Include the copyright and license notice.</span>
                </div>
              </div>

              <div className={styles.summaryCard}>
                <div className={styles.summaryIcon}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>No warranty</strong>
                  <span>The Software is provided without warranty.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentLayout}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <span className={styles.sidebarTitle}>On this page</span>

                  <a href="#overview">Overview</a>
                  <a href="#permissions">Permissions</a>
                  <a href="#conditions">Conditions</a>
                  <a href="#disclaimer">Disclaimer</a>
                  <a href="#full-license">Full license</a>
                </div>
              </aside>

              {/* Article */}
              <article className={styles.article}>
                <section id="overview" className={styles.articleSection}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.headingIcon}>
                      <Info size={19} />
                    </div>

                    <div>
                      <span>01</span>
                      <h2>Licensing</h2>
                    </div>
                  </div>

                  <p>
                    Welcome to CodeHarborHub. This project is licensed under the
                    MIT License. This page outlines the terms of the license and
                    provides details on how you can use, modify, and distribute
                    our project.
                  </p>

                  <div className={styles.infoBox}>
                    <Sparkles size={18} />

                    <div>
                      <strong>What this means</strong>
                      <p>
                        The MIT License is a permissive open-source license that
                        allows broad use of the Software while requiring
                        preservation of the copyright and license notice.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="permissions" className={styles.articleSection}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.headingIcon}>
                      <Check size={19} />
                    </div>

                    <div>
                      <span>02</span>
                      <h2>What you can do</h2>
                    </div>
                  </div>

                  <p>
                    Under the MIT License, permission is granted to deal with
                    the Software without restriction, subject to the license
                    conditions.
                  </p>

                  <div className={styles.permissionGrid}>
                    {permissions.map((permission) => (
                      <div className={styles.permissionItem} key={permission}>
                        <Check size={16} />
                        <span>{permission}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="conditions" className={styles.articleSection}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.headingIcon}>
                      <FileCode2 size={19} />
                    </div>

                    <div>
                      <span>03</span>
                      <h2>License conditions</h2>
                    </div>
                  </div>

                  <p>
                    The MIT License contains a small number of conditions that
                    must be followed when using or distributing the Software.
                  </p>

                  <div className={styles.conditionList}>
                    {licenseConditions.map((condition, index) => (
                      <div className={styles.conditionItem} key={condition}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{condition}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="disclaimer" className={styles.articleSection}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.headingIcon}>
                      <ShieldCheck size={19} />
                    </div>

                    <div>
                      <span>04</span>
                      <h2>Warranty & liability</h2>
                    </div>
                  </div>

                  <p>
                    The Software is provided &quot;AS IS&quot;, without warranty
                    of any kind, express or implied.
                  </p>

                  <div className={styles.disclaimerBox}>
                    <div className={styles.disclaimerHeader}>
                      <ShieldCheck size={19} />
                      <strong>No warranty is provided</strong>
                    </div>

                    <div className={styles.disclaimerList}>
                      {disclaimerItems.map((item) => (
                        <div key={item}>
                          <span />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Full License */}
                <section id="full-license" className={styles.articleSection}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.headingIcon}>
                      <Scale size={19} />
                    </div>

                    <div>
                      <span>05</span>
                      <h2>MIT License</h2>
                    </div>
                  </div>

                  <div className={styles.licenseHeader}>
                    <div>
                      <strong>MIT License</strong>
                      <span>Copyright (c) 2024 CodeHarborHub</span>
                    </div>

                    <button
                      type="button"
                      className={styles.copyButton}
                      onClick={copyLicense}
                      aria-label="Copy MIT License"
                      title="Copy license"
                    >
                      <Copy size={16} />
                      Copy
                    </button>
                  </div>

                  <div className={styles.licenseText}>
                    <pre>
                      <code>
                        {`MIT License

Copyright (c) 2024 CodeHarborHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`}
                      </code>
                    </pre>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* Repository CTA */}
        <section className={styles.repositorySection}>
          <div className="container">
            <div className={styles.repositoryCard}>
              <div className={styles.repositoryIcon}>
                <Code2 size={21} />
              </div>

              <div className={styles.repositoryContent}>
                <span>Open source</span>
                <h2>Explore the source code</h2>
                <p>
                  CodeHarborHub is developed openly. Explore the repository,
                  review the source, report issues, and contribute improvements.
                </p>
              </div>

              <a
                className={styles.repositoryButton}
                href="https://github.com/CodeHarborHub/codeharborhub.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className={styles.relatedSection}>
          <div className="container">
            <div className={styles.relatedHeader}>
              <span>Continue exploring</span>
              <h2>CodeHarborHub resources</h2>
            </div>

            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} to="/contributing/">
                <GitBranch size={20} />

                <div>
                  <h3>Contributing</h3>
                  <p>Learn how to contribute to CodeHarborHub.</p>
                </div>

                <ArrowRight size={17} />
              </Link>

              <Link className={styles.relatedCard} to="/code-of-conduct/">
                <ShieldCheck size={20} />

                <div>
                  <h3>Code of Conduct</h3>
                  <p>Help us maintain a respectful community.</p>
                </div>

                <ArrowRight size={17} />
              </Link>

              <Link className={styles.relatedCard} to="/privacy-policy/">
                <Scale size={20} />

                <div>
                  <h3>Privacy Policy</h3>
                  <p>Learn how CodeHarborHub handles information.</p>
                </div>

                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.finalSection}>
          <div className="container">
            <div className={styles.finalCard}>
              <div className={styles.finalBadge}>
                <Scale size={16} />
                MIT License
              </div>

              <h2>Build, learn, modify, and contribute.</h2>

              <p>
                Use CodeHarborHub as a foundation for learning and building,
                while following the terms of the MIT License.
              </p>

              <div className={styles.finalActions}>
                <Link className={styles.primaryButton} to="/tutorials/">
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link className={styles.secondaryButton} to="/contributing/">
                  Contribute to CodeHarborHub
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
