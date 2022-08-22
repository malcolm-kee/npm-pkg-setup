# My npm package setup

---

## Why learn this?

Learn how package creation/publishing works, which would help greatly if you 

- interested to contribute/understand open source code on GitHub
- want to level up your JavaScript debugging skill 

<img src="node_modules_tweet.jpg" alt="Levels of Node.js mastery: (1) Newbie: node callbacks don't scaree you. (2) Expert: node_modules don't scare you. (3) God: node-gyp doesn't scare you" style="display: block; max-width: 600px; margin-inline: auto;" />

---

## Lifecycle of a npm package:

1. Create
1. Consume
1. Update

```mermaid
flowchart LR
    Create -- Publish --> Consume
    Consume -- Issues/Feedbacks --> Update
    Update -- Publish --> Consume
```

---

## Common pain points

1. Figure out how to publish to certain registry with the right permissions (not covered today)
1. Figure out how to configure the package so it can be consumed easily
1. Figure out how to update and preview package changes with minimal overhead

---

## Configure package

### Choosing a bundler

1. Use [`tsup`](https://tsup.egoist.dev/) if it is good enough for the use case.
1. Use [`rollup`](https://rollupjs.org/guide/en/) if advanced configuration is needed.

### Configure `package.json`

1. For single entry point, 
  a. `main` for CommonJS/UMD format
  b. `module` for ESM format
  c. `types` for typescript definition

2. For multiple entry points, use `exports` to define what are the entry points.

---

## Update and preview package changes

### Use monorepo

1. Use [`pnpm`](https://pnpm.io/) workspace by preview changes by adding a playground/example as another "package" of the workspace.
1. With monorepo, you may not even need to publish package at all!

### Use a local registry

1. Use [`Verdaccio`](https://verdaccio.org/) to preview the behavior without actually publishing it.

