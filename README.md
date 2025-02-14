# Adventure Engine Over MUD

A framework for creating adventure games using the MUD (Multi-User Dungeon) framework with integrated blockchain capabilities. It includes a heartbeat mechanism that integrates with [Adventure Layer Shards](https://github.com/AdventureGoldDao/adventure-layer-shards/) for real-time game state management.

## Core Features

- **Multiple Game Development Templates**:
  - React (Basic React template with MUD integration)
  - React ECS (Entity Component System based)
  - Phaser (2D game development)
  - ThreeJS (3D game development)
  - Vanilla JavaScript

- **Built-in Smart Contract Integration**
  - Heartbeat mechanism for real-time state updates
  - Player authentication system
  - Game session management
  - Blockchain state synchronization

- **Technical Features**
  - Modular architecture for easy extension
  - Full TypeScript support
  - Real-time state synchronization
  - Integrated blockchain interactions

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

## Project Structure

The generated project follows a monorepo structure:

```
packages/
  ├── create-adventure-engine/ # The CLI for creating new adventure engine projects
  └── common/           # Shared utilities and types
templates/
  ├── react/            # React template
  ├── phaser/           # Phaser template
  ├── threejs/          # ThreeJS template
  └── vanilla/          # Vanilla JavaScript template
```

## Available Templates

1. **React**: Basic React template with MUD integration
2. **React ECS**: Entity Component System based React template
3. **Phaser**: 2D game development with Phaser.js
4. **ThreeJS**: 3D game development with Three.js
5. **Vanilla**: Basic JavaScript template without framework

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

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Support

For support and questions, please [open an issue](https://github.com/AdventureGoldDao/adventure-engine/issues) on our GitHub repository.
