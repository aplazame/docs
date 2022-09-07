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
  onBrokenLinks: 'warn', // https://docusaurus.io/docs/api/docusaurus-config#onBrokenLinks
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/aplazame/webapp-documentation/tree/master/',
          editLocalizedFiles: true,
        },

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
            docId: 'checkout-process/checkout-process',
            position: 'left',
            label: 'Docs',
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
                label: 'Contactar',
                href: 'https://aplazame.com/negocios/contactar/',
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
      },
    }),
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    path: 'i18n',
    /*localeConfigs: {
      es: {
        label: 'Español',
        htmlLang: 'es-ES',
        calendar: 'gregory',
        path: '/',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },*/
  },
};

module.exports = config;
