export interface GuideStep {
  id: string;
  title: string;
  description: string;
  content: string[];
  codeExample?: string;
  tips?: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

export const GUIDE_STEPS: GuideStep[] = [
  {
    id: '1',
    title: 'Find a Project',
    description: 'Discover open-source projects that match your interests and skill level',
    content: [
      'Browse events like Hacktoberfest, GSoC, or GSSoC to find participating projects',
      'Look for repositories with "good first issue" or "beginner-friendly" labels',
      'Check the project\'s README and CONTRIBUTING.md files to understand their needs',
      'Ensure the project is actively maintained (recent commits, responsive maintainers)',
    ],
    tips: [
      'Start with projects in languages you\'re comfortable with',
      'Look for projects with clear documentation',
      'Join the project\'s community channels (Discord, Slack, etc.)',
    ],
  },
  {
    id: '2',
    title: 'Set Up Your Environment',
    description: 'Prepare your development environment and tools',
    content: [
      'Install Git on your computer and configure it with your details',
      'Create a GitHub account if you don\'t have one',
      'Fork the repository to your GitHub account',
      'Clone your forked repository to your local machine',
      'Set up the project according to the README instructions',
    ],
    codeExample: `# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Fork and clone
git clone https://github.com/YOUR-USERNAME/PROJECT-NAME.git
cd PROJECT-NAME

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/PROJECT-NAME.git`,
    tips: [
      'Use a good code editor like VS Code, WebStorm, or Vim',
      'Install recommended extensions for the project\'s language',
      'Test that the project runs successfully before making changes',
    ],
  },
  {
    id: '3',
    title: 'Choose an Issue',
    description: 'Select an issue to work on and communicate with maintainers',
    content: [
      'Browse the project\'s issue tracker for open issues',
      'Look for issues labeled "good first issue", "help wanted", or "beginner-friendly"',
      'Read the issue description carefully and ask questions if anything is unclear',
      'Comment on the issue to express your interest in working on it',
      'Wait for maintainer approval before starting work',
    ],
    tips: [
      'Don\'t work on issues already assigned to someone else',
      'Start small - your first contribution doesn\'t need to be complex',
      'Read through past issues and PRs to understand the project\'s standards',
    ],
  },
  {
    id: '4',
    title: 'Make Your Changes',
    description: 'Write clean code following the project\'s guidelines',
    content: [
      'Create a new branch for your work (never work directly on main)',
      'Make your changes following the project\'s coding style and conventions',
      'Write clear, descriptive commit messages',
      'Test your changes thoroughly',
      'Update documentation if your changes require it',
    ],
    codeExample: `# Create a new branch
git checkout -b fix-issue-123

# Make your changes, then stage and commit
git add .
git commit -m "Fix: Description of what you fixed (closes #123)"

# Push to your fork
git push origin fix-issue-123`,
    tips: [
      'Keep commits focused on a single logical change',
      'Use present tense in commit messages ("Fix bug" not "Fixed bug")',
      'Run tests and linters before committing',
    ],
  },
  {
    id: '5',
    title: 'Submit a Pull Request',
    description: 'Create a pull request and work with maintainers on review',
    content: [
      'Push your changes to your forked repository',
      'Go to the original repository and create a new pull request',
      'Fill out the PR template completely and clearly',
      'Reference the issue number your PR addresses',
      'Be patient and responsive to feedback from maintainers',
      'Make requested changes promptly and professionally',
    ],
    tips: [
      'Write a clear PR title and description',
      'Add screenshots or videos if your changes are visual',
      'Don\'t be discouraged by change requests - they\'re part of the process',
      'Celebrate when your PR is merged!',
    ],
  },
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Do I need to be an expert programmer to contribute?',
    answer: 'Not at all! Open source welcomes contributors of all skill levels. You can start with documentation improvements, bug reports, or simple code fixes. Many projects specifically label issues for beginners.',
  },
  {
    id: '2',
    question: 'What if my pull request gets rejected?',
    answer: 'Don\'t take it personally! Rejections are common and often come with valuable feedback. Learn from the comments, improve your approach, and try again. Every rejection is a learning opportunity.',
  },
  {
    id: '3',
    question: 'How do I find time to contribute?',
    answer: 'Start small! Even 30 minutes a week can make a difference. Many contributors work on open source during weekends or set aside specific time blocks. The key is consistency, not quantity.',
  },
  {
    id: '4',
    question: 'What if I make a mistake?',
    answer: 'Mistakes are normal and expected! That\'s why we have code review and testing. Maintainers understand you\'re learning. Just be open to feedback, fix issues when they arise, and keep improving.',
  },
  {
    id: '5',
    question: 'Can I contribute to multiple projects at once?',
    answer: 'Yes, but it\'s better to focus on one or two projects initially. This helps you understand each project\'s culture and standards deeply. As you gain experience, you can contribute to more projects.',
  },
  {
    id: '6',
    question: 'What if maintainers don\'t respond to my PR?',
    answer: 'Be patient - maintainers are often volunteers with limited time. Wait at least a week before politely following up. If there\'s still no response after multiple attempts, it\'s okay to move on to other projects.',
  },
];

export const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'GitHub Docs - Contributing to Projects',
    description: 'Official GitHub guide on forking, cloning, and contributing to repositories',
    url: 'https://docs.github.com/en/get-started/quickstart/contributing-to-projects',
    category: 'Getting Started',
  },
  {
    id: '2',
    title: 'First Contributions',
    description: 'Hands-on tutorial that walks you through making your first contribution',
    url: 'https://github.com/firstcontributions/first-contributions',
    category: 'Getting Started',
  },
  {
    id: '3',
    title: 'Good First Issues',
    description: 'Curated list of projects with good first issues for new contributors',
    url: 'https://goodfirstissue.dev/',
    category: 'Finding Projects',
  },
  {
    id: '4',
    title: 'Up For Grabs',
    description: 'List of projects with tasks specifically for new contributors',
    url: 'https://up-for-grabs.net/',
    category: 'Finding Projects',
  },
  {
    id: '5',
    title: 'How to Write a Git Commit Message',
    description: 'Comprehensive guide to writing clear, effective commit messages',
    url: 'https://chris.beams.io/posts/git-commit/',
    category: 'Best Practices',
  },
  {
    id: '6',
    title: 'Open Source Guide',
    description: 'Collection of resources about running and contributing to open source',
    url: 'https://opensource.guide/',
    category: 'Best Practices',
  },
];
