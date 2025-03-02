# Adventure Engine Over MUD

## Prerequisites

- Node.js ^18
- pnpm ^8 || ^9
- Foundry (automatically installed during setup)

## Quick Start

Create a new adventure engine project using either:

```bash
npm create adventure-engine <project-name>
# or
pnpm create adventure-engine <project-name>
```


## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the project
pnpm build

# Run tests
pnpm test
```

## Smart Contract Integration

The project includes a built-in Adventure Layer System with the following core functions:

- `adventureHeatbeat()`: Manages game state updates
- `adventureAccountLogin()`: Handles player authentication
- `adventureStartGame()`: Initializes game sessions
- `adventureEndGame()`: Manages game completion

