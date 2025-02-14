# Create Adventure Engine Over MUD

This project provides a framework for creating adventure games using the MUD (Multi-User Dungeon) framework. It includes a heartbeat mechanism that integrates with [Adventure Layer Shards](https://github.com/AdventureGoldDao/adventure-layer-shards/) for real-time game state management.

> Created by [create-create-app](https://github.com/uetchy/create-create-app).

## Features

- **Multiple Templates**: Supports various game development frameworks:
  - React
  - React ECS
  - Phaser
  - ThreeJS
  - Vanilla JavaScript
- **Modular Design**: Easy to integrate and extend functionalities
- **Heartbeat Mechanism**: Ensures real-time system reliability
- **Integration with Adventure Layer Shards**: Enhances project capabilities and flexibility
- **Smart Contract Integration**: Built-in support for blockchain interactions
- **TypeScript Support**: Full TypeScript support for type safety

## Prerequisites

- Node.js ^18
- pnpm ^8 || ^9
- Foundry (will be installed automatically)

## Installation

To create a new adventure engine project, use one of the following commands:

```bash
npm create adventure-engine <project-name>
# or
pnpm create adventure-engine <project-name>
```

## Project Structure

The generated project follows a monorepo structure:

```
packages/
  ├── contracts/         # Smart contracts and blockchain logic
  ├── client/           # Frontend application
  └── common/           # Shared utilities and types
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
