# Adventure Engine Documentation

## System Requirements

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or 9.0.0+
- Foundry Framework (auto-installed during setup)

## Quick Start Guide

## Build and Publishing Process

### 1. Version Management

Before publishing, ensure proper version configuration in `package.json`:
- Verify the `version` field
- Confirm compliance with Semantic Versioning standards

### 2. Build Process

Execute the following command to build your project:

```bash
npm run build 
```

### 3. NPM Authentication

For first-time publishers:
1. Register an account at [NPM Official Website](https://www.npmjs.com/)
2. Authenticate via terminal:

```bash
npm login
```

### 4. Publication Workflow

#### Configuration
- For scoped packages: Ensure `publishConfig.access` is set to `public` in `package.json`
- For standard packages: Verify package name uniqueness in NPM registry

#### Execute Publication
```bash
npm publish --access public
```

### 5. Verify Successful Publication

After a successful publication, visit [NPM Package Page](https://www.npmjs.com/package/create-adventure-engine) to check if the latest version has been published successfully.




## Project Initialization

Create a new Adventure Engine project using either command:

```bash
# Using npm
npm create adventure-engine <project-name>

# Using pnpm
pnpm create adventure-engine <project-name>
```

## Development Guide

### Essential Commands

```bash
# Install dependencies
pnpm install

# Launch development server
pnpm dev

# Build project
pnpm build

# Execute test suite
pnpm test
```

## Smart Contract Integration

Adventure Layer System Core Components:

### Core Interfaces

| Interface Name | Description |
|---------------|-------------|
| `adventureHeatbeat()` | Game State Management System |
| `adventureAccountLogin()` | Player Authentication Handler |
| `adventureStartGame()` | Game Session Initializer |
| `adventureEndGame()` | Game Completion Processor |

