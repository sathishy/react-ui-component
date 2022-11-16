import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson  from "./package.json";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                plugins: [autoprefixer()],
                sourceMap: true,
                extract: true,
                minimize: true
            }),
            terser(),
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];