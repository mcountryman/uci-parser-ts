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
