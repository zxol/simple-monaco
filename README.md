# uwu simple-monaco components

These are components that wrap Microsoft's great Monaco editor (from vscode!)
for the primary web UI frameworks, with a unified API.

Scroll down for generic docs, all props are reactive, comes with typescript defs/source when applicable.

## Packages
| pkg    | src                                                                                 | npm                                                |
|--------|-------------------------------------------------------------------------------------|----------------------------------------------------|
| react  | [packages/react](https://github.com/uwu/simple-monaco/tree/master/packages/react)   | [@uwu/monaco-react](https://npm.im/monaco-react)   |
| vue    | [packages/vue](https://github.com/uwu/simple-monaco/tree/master/packages/vue)       | [@uwu/monaco-vue](https://npm.im/monaco-vue)       |
| svelte | [packages/svelte](https://github.com/uwu/simple-monaco/tree/master/packages/svelte) | [@uwu/monaco-svelte](https://npm.im/monaco-svelte) |
| solid  | [packages/solid](https://github.com/uwu/simple-monaco/tree/master/packages/solid)   | [@uwu/monaco-solid](https://npm.im/monaco-solid)   |

## Important notes

You may use any theme from [*here*](https://github.com/brijeshb42/monaco-themes/tree/master/themes) by name.

You can use monaco from an npm package by passing it as `noCDN`.
This will only do anything on the first render of any `<Monaco>`, and will apply to all later uses of the component.

If you do not do this, monaco will just be loaded from jsDelivr.

## API

A UI component for the relevant framework is default exported. It does not take children and has the following props:

### value (REQUIRED)
The current text value of the editor.

| framework | type               | notes                  |
|-----------|--------------------|------------------------|
| react     | `string`           |                        |
| vue       | N/A                | use `v-model`          |
| svelte    | `Writable<string>` | must be a svelte store |
| solid     | `string`           |                        |

### valOut
The setter of the state/signal.

| framework | type               | notes               |
|-----------|--------------------|---------------------|
| react     | `(string) => void` |                     |
| vue       | N/A                | use `v-model`       |
| svelte    | N/A                | use the value store |
| solid     | `Setter<string>`   |                     |

### lang (REQUIRED)
The programming language to use. Influences highlighting, completion, etc.

| type     | notes |
|----------|-------|
| `string` |       |

### theme
The colour theme to use to highlight code.
As mentioned before, a theme from [here](https://github.com/brijeshb42/monaco-themes/tree/master/themes) by name

| type     | notes |
|----------|-------|
| `string` |       |

### readonly
When set, the user cannot edit the contents of the editor. Setting value works fine.

| type      | notes |
|-----------|-------|
| `boolean` |       |

### height
Sets the height of the monaco editor.

| type     | notes             |
|----------|-------------------|
| `string` | defaults to 30rem |

### width
Sets the height of the monaco editor.

| type     | notes             |
|----------|-------------------|
| `string` | defaults to 20rem |

### otherCfg
Other configuration options to pass to the monaco editor (eg autolayout)

| type                                   | notes          |
|----------------------------------------|----------------|
| `IStandaloneEditorConstructionOptions` | defaults to {} |
