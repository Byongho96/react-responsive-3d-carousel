# Contributing Guidelines

Thank you for considering contributing to this project! Contributions are welcome, whether you're raising an issue or creating a pull request.

## Rasing issues

Please use the "Issues" section to report bugs or suggest improvements. Providing detailed information will help in understanding the problem and making improvements.

## Creating pull requests

1. **Fork the Repository**  
   Start by forking this repository and cloning it locally.
2. **Make Changes**  
   After making changes, follow the steps below to ensure code quality.
3. **Push and Create a PR**  
   Push your changes to your forked repository and open a pull request.

### Setting Up the Development Environment

Use the Node version specified in the `.nvmrc` file. Recommend to use [nvm](https://github.com/nvm-sh/nvm)

- `nvm use [VERSION]`

Install dependencies

- `npm install`

Start storybook

- `npm run storybook`

Open storybook in browser. Once started, you can view Storybook at:

- `http://localhost:6006/`

### Coding Guidelines

There's no strict coding standard, but please follow these guidelines:

- **CSS unit**: Use `rem` for CSS length unit.

- **CSS Property Order**: Follow CSS order suggested by [9elements](https://9elements.com/css-rule-order/)

### Committing Changes

Check format

- `npm run test`

Run tests

- `npm run test`

Follow Conventional Commits. Use the [conventional-config](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

- Allowed types:  
  `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`

* Commit message format

  ```bash
  <type>[optional scope]: <description>

  [optional body]

  [optional footer(s)]
  ```
