# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation
```shell
yarn
```

### Local Development

```shell
yarn start
```

Start with `en` locale:
```shell
yarn start --locale en
```
or 

```shell
npx docusaurus start
```

```shell
yarn run start -- --locale es
yarn run start -- --locale en
```


```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build translations
This command generate pending translations:
```
yarn run write-translations --locale en
```

### Build
The build generate content for all the languages and check internal links:
```
yarn build
```

To test your build locally.
```shell
npm run serve
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

To Do...
