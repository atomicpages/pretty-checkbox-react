import { glob } from "glob";
import { defineConfig } from "tsup";
import type { Options } from "tsup";

const entry = glob.sync("src/**/*.{ts,tsx}", {
  ignore: ["**/__tests__/**", "**/tests/**"],
});

const shared = {
  entry,
  sourcemap: true,
  clean: true,
  dts: true,
} satisfies Options;

export default defineConfig([
  {
    ...shared,
    format: "cjs",
    outDir: "dist/cjs",
  },
  {
    ...shared,
    format: "esm",
    outDir: "dist/esm",
  },
  {
    ...shared,
    entry: ["src/index.ts"],
    bundle: true,
    minify: true,
    format: "iife",
    outDir: "dist/umd",
  },
]);
