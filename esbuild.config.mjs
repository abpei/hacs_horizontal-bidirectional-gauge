import * as esbuild from "esbuild";

const watch = process.argv.includes("--watch");

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
  entryPoints: ["src/horizontal-bidirectional-gauge.ts"],
  bundle: true,
  format: "iife",
  target: "es2020",
  outfile: "horizontal-bidirectional-gauge.js",
  minify: true,
  sourcemap: false,
  logLevel: "info",
};

if (watch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log("[dev] watching for changes…");
} else {
  await esbuild.build(buildOptions);
}
