// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  noIndex: false, //
  title: 'Integración técnica de Aplazame',
  tagline: 'Trabajamos para que la integración de Aplazame en tu plataforma de comercio electrónico sea rápida, ágil y fácil, tanto si tu tienda es de desarrollo propio como si usas una de las plataformas más populares del mercado.',
  url: 'https://aplazame.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw', // https://docusaurus.io/docs/api/docusaurus-config#onBrokenLinks
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aplazame', // Usually your GitHub org/user name.
  projectName: 'webapp-documentation', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/aplazame/webapp-documentation/tree/master/',
          editLocalizedFiles: true,
          // routeBasePath: '/', // Set this value to '/' to remove /docs/ prefix.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  scripts: [
    {
      src: 'https://cdn.aplazame.com/aplazame.js?public_key=12093289b594f50d3971e4719eedd5c314ceb6ba&sandbox=true',
      async: true,
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'aplazame, documentation, docs, integrations'}],
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_light.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/checkout-process/checkout-process',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'plugins/intro/intro',
            position: 'left',
            label: 'Plugins',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Clientes',
            items: [
              {
                label: 'Favoritos',
                href: 'https://aplazame.com/favoritos/',
              },
              {
                label: 'Compra ahora, paga después',
                href: 'https://aplazame.com/pagar-despues/',
              },
              {
                label: 'La app de Aplazame',
                href: 'https://aplazame.com/app/',
              },
              {
                label: 'Atención al cliente',
                href: 'https://aplazame.com/ayuda/atencion-al-cliente/',
              },
              {
                label: 'Directorio de tiendas',
                href: 'https://aplazame.com/tiendas-aplazame/',
              },
              {
                label: 'Colecciones',
                href: 'https://aplazame.com/colecciones/',
              },
            ],
          },
          {
            title: 'Negocios',
            items: [
              {
                label: 'Vende con Aplazame',
                href: 'https://aplazame.com/negocios/',
              },
              {
                label: 'Pago a plazos',
                href: 'https://aplazame.com/negocios/pago-a-plazos/',
              },
              {
                label: 'Divide en 4 pagos',
                href: 'https://aplazame.com/negocios/pago-en-4/',
              },
              {
                label: 'Pago en 15 días',
                href: 'https://aplazame.com/negocios/pago-15-dias/',
              },
              {
                label: 'Financiación en Punto de Venta',
                href: 'https://aplazame.com/negocios/financiacion-punto-venta/',
              },
              {
                label: 'Integraciones',
                href: 'https://aplazame.com/integraciones/',
              },
              {
                label: 'Pide una demo',
                href: 'https://aplazame.com/negocios/pide-una-demo/',
              },
              {
                label: 'Precios',
                href: 'https://aplazame.com/negocios/precios/',
              },
            ],
          },
          {
            title: 'Recursos para comercios',
            items: [
              {
                label: 'Casos de éxito',
                href: 'https://aplazame.com/negocios/recursos/historias/',
              },
              {
                label: 'eBooks, informes y guías',
                href: 'https://aplazame.com/negocios/recursos/guias/',
              },
              {
                label: 'Blog',
                href: 'https://aplazame.com/blog/',
              },
              {
                label: 'Buenas prácticas',
                href: 'https://ayuda.aplazame.com/hc/es-es/sections/360004278740-Buenas-pr%C3%A1cticas',
              },
            ],
          },
          {
            title: 'Sobre Aplazame',
            items: [
              {
                label: 'Equipo',
                href: 'https://aplazame.com/equipo/',
              },
              {
                label: 'Trabaja con nosotros',
                href: 'https://aplazame.com/trabaja-con-nosotros/',
              },
              {
                label: 'Servicio At. Cliente',
                href: 'https://aplazame.com/reclamaciones-y-defensa-del-cliente/',
              },
            ],
          },
        ],
        copyright: `Aplazame © ${new Date().getFullYear()} una marca de Wizink Bank S.A.U., Calle Ulises 16-18, 28043 Madrid`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['http', 'powershell', 'php', 'csharp', 'python', 'swift', 'java'],
      },
    }),
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    path: 'i18n',
  },
  plugins: [
    ['docusaurus2-dotenv',
    {
      path: "./.env", // The path to your environment variables.
      safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
      systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
      silent: false, //  If true, all warnings will be suppressed
      expand: false, // Allows your variables to be "expanded" for reusability within your .env file
      defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
    }],
    [require.resolve('docusaurus-lunr-search'), {
    languages: ['es', 'en'] // language codes
  }]],
};

module.exports = config;
