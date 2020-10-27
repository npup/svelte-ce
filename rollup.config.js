import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";


const plugins = [
    svelte({
        customElement: true,
        extensions: [ ".svelte" ],
    }),
    resolve({
        browser: true,
        dedupe: [ "svelte" ],
    }),
    commonjs(),
];


module.exports = {
    input: "src/Happy.svelte",
    output: {
        name: "bundle",
        file: "dist/bundle.js",
        sourcemap: true,
        format: "iife",
    },
    plugins,
};
