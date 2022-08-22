# uci-parser-ts

A [UCI](https://en.wikipedia.org/wiki/Universal_Chess_Interface) parser written in TypeScript.

## install

npm

```bash
npm i uci-parser-ts
```

yarn

```bash
yarn add uci-parser-ts
```

pnpm

```bash
pnpm i uci-parser-ts
```

cdn

- production: https://unpkg.com/uci-parser-ts@latest/umd/uci-parser-ts.production.js
- development: https://unpkg.com/uci-parser-ts@latest/umd/uci-parser-ts.development.js

## examples

> [stockfish.ts](examples/src/stockfish.ts)

```typescript
import { spawn } from "child_process";
import { createInterface } from "readline";
import { tryParseOne, UciOkCommand } from "uci-parser-ts";

/**
 * Spawns a Stockfish process and initializes the UCI mode.
 */
async function main() {
  const { stdin, stdout } = spawn("stockfish");
  const lines = createInterface({ input: stdout });

  stdin.write("uci");
  stdin.end();

  for await (const line of lines) {
    const command = tryParseOne(line);
    if (!command) {
      continue;
    }

    if (command instanceof UciOkCommand) {
      break;
    }
  }
}

void main();
```

> [cdn.html](examples/src/cdn.html)

```html
<html>
  <body>
    <script src="https://unpkg.com/uci-parser-ts@0.1.1/umd/uci-parser-ts.production.js"></script>
    <script>
      alert(JSON.stringify(uci.parseOne("bestmove e2e4")));
    </script>
  </body>
</html>
```
