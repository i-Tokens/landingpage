# UI Kit

This repository contains shared styles, UI components, icons, and other design assets used across multiple projects. The goal is to ensure consistent visual branding and styling across our projects.

## Features

- **Tailwind CSS Configuration**: A common Tailwind CSS setup to provide consistent styling.
- **Assets**: Includes logos, icons, and other visual assets used throughout our projects.

## Usage

To use the UI Kit in your project, add this repository as a subtree:

```sh
git subtree add --prefix=ui-kit <repository-url> main --squash
```

After adding the UI Kit, link the Tailwind CSS configuration and include the shared assets as needed.

## Updating

To pull in the latest changes from the UI Kit:

```sh
git subtree pull --prefix=ui-kit <repository-url> main --squash
```

## License

This project is licensed under the MIT License.
