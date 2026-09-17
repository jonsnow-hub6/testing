# NX Testing Monorepo

A complete NX monorepo workspace with 4 npm packages for testing and development purposes.

## Project Structure

```
├── apps/
│   ├── app-one/        # Application 1
│   └── app-two/        # Application 2
├── packages/
│   ├── shared-util/    # Shared utility functions
│   └── math-util/      # Math utility functions
├── nx.json             # NX configuration
├── tsconfig.base.json  # Base TypeScript configuration
└── package.json        # Root workspace configuration
```

## Packages Overview

### Applications (apps/)
- **app-one**: Demo application that imports and uses utilities
- **app-two**: Demo application that imports and uses utilities

### Libraries (packages/)
- **shared-util**: Provides `getGreeting()` function
- **math-util**: Provides math utilities (`add`, `subtract`, `multiply`, `divide`)

## Installation

```bash
npm install
```

## Available Commands

### Build
```bash
# Build all packages
npm run build:all

# Build a specific package
npx nx build <package-name>

# Build affected packages
npm run affected:build
```

### View Project Graph
```bash
npm run graph
```

### Release Management
The workspace includes changelog support using NX release:
```bash
npm run release
```

This will:
- Generate changelogs based on conventional commits
- Update version numbers for each package
- Create release tags

## Project Groups

The workspace is organized into two groups:

### **apps** (Fixed Relationship)
- App packages that depend on library packages
- Include: `app-one`, `app-two`

### **packages** (Independent)
- Reusable library packages
- Include: `shared-util`, `math-util`

## Build Status

✅ All 4 packages build successfully with NX
✅ Workspace recognizes all projects and groups
✅ Changelog/release configuration is in place
✅ Path mappings configured in tsconfig.base.json

## Testing

All packages have been verified to:
1. Compile without TypeScript errors
2. Build with NX successfully
3. Support the defined export structure
4. Work with the monorepo path mappings

## Version

- **NX**: ^23.2.1
- **TypeScript**: ^5.2.2
- **Node Types**: Latest (@types/node)

## License

MIT
