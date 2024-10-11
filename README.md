
# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Envs
- Staging: https://apidocs-staging.aplazame.org
- Production: https://aplazame.dev

### Installation
```shell
yarn
```

### Requirements
Node >=16.14

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
yarn run start --locale es
yarn run start --locale en
```

or
```shell
npm run start -- --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build translations
This command generate pending translations:

```
yarn run write-translations --locale en
```

The docusaurus write-translations command will statically analyze all React code files used in your site, extract calls to these APIs, and aggregate them in the code.json file. [More info](https://docusaurus.io/docs/i18n/tutorial)

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

### Search bar
https://github.com/praveenn77/docusaurus-lunr-search

### Testing

#### Open Cypress App
```shell
npx cypress open
```

#### Run Cypress tests (with Chrome)
```shell
cypress run --browser chrome
```

### Deployment

https://docusaurus.io/docs/deployment 

(Done by Jenkins)
