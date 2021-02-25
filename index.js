#!/usr/bin/env node

const landtree = require('./src/landtree');

const badArgs =
  "Landtree requires exactly 2 command line arguments: --mode=from_root, and a known company ID";

try {
  const args = process.argv.slice(2);
  if (args.length !== 2) throw badArgs;

  if (args[0] === "--mode=from_root" && args[1])
    return landtree(args[1]);
  if (args[0] === "--mode=expand") throw "Exapanded not implemented yet";

  throw badArgs;
} catch (error) {
  console.error(error);
  process.exit(1);
}
