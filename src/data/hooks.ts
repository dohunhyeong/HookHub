export interface Hook {
  id: string;
  name: string;
  description: string;
  category: Category;
  repoUrl: string;
  author: string;
}

export const CATEGORIES = [
  "All",
  "Security",
  "Formatting",
  "Testing",
  "Notifications",
  "Workflow",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const hooks: Hook[] = [
  {
    id: "block-dangerous-commands",
    name: "Block Dangerous Commands",
    description:
      "Prevents execution of destructive shell commands like rm -rf /, DROP TABLE, and other dangerous operations before they run.",
    category: "Security",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
  },
  {
    id: "auto-prettier",
    name: "Auto Prettier",
    description:
      "Automatically runs Prettier on files after Claude edits them, ensuring consistent code formatting without manual intervention.",
    category: "Formatting",
    repoUrl: "https://github.com/johnlindquist/claude-hooks",
    author: "johnlindquist",
  },
  {
    id: "pre-commit-tests",
    name: "Pre-Commit Test Runner",
    description:
      "Runs your test suite before Claude finishes a task, catching regressions early and ensuring code quality.",
    category: "Testing",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
  },
  {
    id: "desktop-notifications",
    name: "Desktop Notifications",
    description:
      "Sends native desktop notifications when Claude completes long-running tasks so you can step away and stay informed.",
    category: "Notifications",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
  },
  {
    id: "env-context-injection",
    name: "Environment Context Injection",
    description:
      "Automatically injects environment variables and project context at session start so Claude understands your setup.",
    category: "Workflow",
    repoUrl: "https://github.com/johnlindquist/claude-hooks",
    author: "johnlindquist",
  },
  {
    id: "python-validation",
    name: "Python Syntax Validator",
    description:
      "Validates Python files for syntax errors after every edit, preventing broken code from accumulating during a session.",
    category: "Testing",
    repoUrl: "https://github.com/decider/claude-hooks",
    author: "decider",
  },
  {
    id: "protected-files",
    name: "Protected File Guard",
    description:
      "Blocks modifications to critical files like .env, lock files, and CI configs, preventing accidental changes to sensitive resources.",
    category: "Security",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg",
  },
  {
    id: "eslint-autofix",
    name: "ESLint Auto-Fix",
    description:
      "Runs ESLint with auto-fix on changed files after edits, keeping your code compliant with project linting rules automatically.",
    category: "Formatting",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
  },
  {
    id: "slack-notifications",
    name: "Slack Notifications",
    description:
      "Posts updates to a Slack channel when Claude completes tasks, perfect for team visibility on AI-assisted development.",
    category: "Notifications",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
  },
  {
    id: "git-auto-stage",
    name: "Git Auto-Stage",
    description:
      "Automatically stages changed files in git after Claude edits them, streamlining the commit workflow.",
    category: "Workflow",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg",
  },
  {
    id: "typescript-check",
    name: "TypeScript Type Checker",
    description:
      "Runs tsc --noEmit after edits to catch type errors immediately, ensuring type safety throughout the session.",
    category: "Testing",
    repoUrl: "https://github.com/johnlindquist/claude-hooks",
    author: "johnlindquist",
  },
  {
    id: "prompt-logger",
    name: "Prompt Logger",
    description:
      "Logs all prompts and responses to a local file for auditing, debugging, and reviewing what Claude did during a session.",
    category: "Other",
    repoUrl: "https://github.com/decider/claude-hooks",
    author: "decider",
  },
];
