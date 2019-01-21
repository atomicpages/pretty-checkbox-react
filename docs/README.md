Building The Docs
=================

The docs use [`react-scripts`](https://www.npmjs.com/package/react-scripts) to develop and build our static assets.

### Setup

```bash
yarn # or
npm install
```

serve using the following command:

```bash
yarn start # or
npm run start
```


### Prop Type Data
`react-docgen` doesn't support following `composes` so we have to do this manually (for now). If you're contributing, be sure to add any prop type changes under `src/data/props.json`.
