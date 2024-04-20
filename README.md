Framework-agnostic way to mark JavaScript modules as Server or Client only.

Inspired by [server-only](https://www.npmjs.com/package/server-only) and [client-only](https://www.npmjs.com/package/client-only).

> **Note**: If you're already using a React framework, there's no need of using this package, just use server-only or client-only as indicated here: [Rendering: Composition Patterns | Next.js - Keeping Server-only Code out of the Client Environment](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment)

### Usage

```bash
npm install server-only-module
# or
npm install client-only-module
```

Use it in your modules:

```javascript
import 'server-only-module';

// or

import 'client-only-module';

async function yourCode() {
    ...
}
```

### Running Tests

```bash
npm run test
```

### Publishing to npm

```bash
# Don't forget to bump the version first

npm run release:server-only
npm run release:client-only
```

### Minor Note

This package uses [Node.js' Conditional Exports](https://nodejs.org/api/packages.html#conditional-exports), hence the minimum required Node version is 12.
