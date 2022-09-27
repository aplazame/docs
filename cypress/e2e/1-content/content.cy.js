/// <reference types="cypress" />

describe('Check documentation content', () => {

  const titles = {
    ES: {
      '1-checkout-process': 'Proceso de checkout',
      '1-1-installment-payment': 'Pago a plazos',
      '1-2-pay-later-payment': 'Pago en 15 días',
      '1-3-pay-in-4-payment': 'Pago en 4',
      '2-entorno-de-pruebas': 'Entorno de pruebas',
      '2-1-test-mode': 'Modo de pruebas',
      '2-2-test-data': 'Datos de prueba',
      '3-api-reference': 'Peticiones a la API',
      '4-checkout-creation': 'Creación del checkout',
      '5-sdk-javascript': 'SDK Javascript',
      '5-1-checkout-postmessage': 'Integración vía postMessage',
      '6-sdk-ios': 'SDK iOS',
      '7-sdk-android': 'SDK Android',
      '8-checkout-confirmation': 'Confirmación del pedido',
      '9-checkout-capture': 'Captura del pedido',
      '10-widget': 'Integración del widget',
      '10-1-installment-payment': 'Paga a plazos',
      '10-2-pay-later': 'Paga en 15 días',
      '10-3-pay-in-4': 'Paga en 4',
      '10-4-custom-styles': 'Personalización CSS del Widget',
      '10-5-widget-v4': 'Nuevo widget v4',
      '11-api-orders': 'API de pedidos',
      '12-api-campaigns': 'API de campañas',
      '13-checkout-offline': 'Integración POS',
    },
    EN: {
      '1-checkout-process': 'Checkout process',
      '1-1-installment-payment': 'Installment payment',
      '1-2-pay-later-payment': 'Pay in 15 days',
      '1-3-pay-in-4-payment': 'Pay in 4',
      '2-entorno-de-pruebas': 'Entorno de pruebas',
      '2-1-test-mode': 'Test mode',
      '2-2-test-data': 'Test data',
      '3-api-reference': 'API Requests',
      '4-checkout-creation': 'Checkout creation',
      '5-sdk-javascript': 'SDK Javascript',
      '5-1-checkout-postmessage': 'Integration via postMessage',
      '6-sdk-ios': 'SDK iOS',
      '7-sdk-android': 'SDK Android',
      '8-checkout-confirmation': 'Checkout confirmation',
      '9-checkout-capture': 'Capture of the order',
      '10-widget': 'Widget integration',
      '10-1-installment-payment': 'Instalments payment',
      '10-2-pay-later': 'Pay in 15 days',
      '10-3-pay-in-4': 'Pay in 4',
      '10-4-custom-styles': 'CSS customization of the Widget',
      '10-5-widget-v4': 'New widget v4',
      '11-api-orders': 'API Orders',
      '12-api-campaigns': 'API Campaigns',
      '13-checkout-offline': 'POS Integration',
    }
  }

  ;['ES', 'EN'].forEach(lang => {

    context(`${lang} documentation`, () => {
      beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test

        lang === 'EN' ? cy.visit('http://localhost:3000/en/') : cy.visit('http://localhost:3000/')
      })

      it('check sidebar first level length', () => {
        cy.get('.theme-doc-sidebar-menu > li')
          .should('have.length', 13)
      })

      it('root redirects to first documentation page (checkout process)', () => {
        cy.get('h1').should('have.length', 1)
        cy.get('h1').should('have.text', titles[lang]['1-checkout-process'])

        const childs = cy.get('.menu__link').contains(titles[lang]['1-checkout-process']).parent().siblings('ul').children('li')
        childs.should('have.length', 3)
      })

      it('check content 1 /checkout-process', () => {
        const link = cy.get('.menu__link').contains(titles[lang]['1-checkout-process'])
        link.click()

        cy.get('h1').should('have.text', titles[lang]['1-checkout-process'])

        const childs = link.parent().siblings('ul').children('li')
        childs.should('have.length', 3)
      })

      it('check content 1-1 /checkout-process/installment-payment', () => {
        cy.get('.menu__link').contains(titles[lang]['1-1-installment-payment']).click()

        cy.get('h1').should('have.text', titles[lang]['1-1-installment-payment'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 4)
      })

      it('check content 1-2 /checkout-process/pay-later-payment', () => {
        cy.get('.menu__link').contains(titles[lang]['1-2-pay-later-payment']).click()

        cy.get('h1').should('have.text', titles[lang]['1-2-pay-later-payment'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 5)
      })

      it('check content 1-3 /checkout-process/pay-in-4-payment', () => {
        cy.get('.menu__link').contains(titles[lang]['1-3-pay-in-4-payment']).click()

        cy.get('h1').should('have.text', titles[lang]['1-3-pay-in-4-payment'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 4)
      })

      it('check content 2 /category/entorno-de-pruebas', () => {
        cy.get('.menu__link').contains(titles[lang]['2-entorno-de-pruebas']).click()

        cy.get('h1').should('have.text', titles[lang]['2-entorno-de-pruebas'])
        cy.get('h2').should('have.length', 2)
        cy.get('h3').should('have.length', 0)
        cy.get('.card').should('have.length', 2)
      })

      it('check content 2-1 /test-environment/test-mode', () => {
        cy.get('.menu__link').contains(titles[lang]['2-entorno-de-pruebas']).siblings('button').click()
        cy.get('.menu__link').contains(titles[lang]['2-1-test-mode']).click()

        cy.get('h1').should('have.text', titles[lang]['2-1-test-mode'])
      })

      it('check content 2-2 /test-environment/test-data', () => {
        cy.get('.menu__link').contains(titles[lang]['2-entorno-de-pruebas']).siblings('button').click()
        cy.get('.menu__link').contains(titles[lang]['2-2-test-data']).click()

        cy.get('h1').should('have.text', titles[lang]['2-2-test-data'])
      })

      it('check content 3 /api-reference/', () => {
        cy.get('.menu__link').contains(titles[lang]['3-api-reference']).click()

        cy.get('h1').should('have.text', titles[lang]['3-api-reference'])
        cy.get('h2').should('have.length', 7)
        cy.get('h3').should('have.length', 8)
      })

      it('check content 4 /checkout-creation/', () => {
        cy.get('.menu__link').contains(titles[lang]['4-checkout-creation']).click()

        cy.get('h1').should('have.text', titles[lang]['4-checkout-creation'])
        cy.get('h2').should('have.length', 6)
        cy.get('h3').should('have.length', 7)
        cy.get('table').should('have.length', 11)
      })

      it('check content 5 /sdk-javascript/', () => {
        cy.get('.menu__link').contains(titles[lang]['5-sdk-javascript']).click()

        cy.get('h1').should('have.text', titles[lang]['5-sdk-javascript'])
        cy.get('h2').should('have.length', 7)
        cy.get('h3').should('have.length', 0)
        cy.get('table').should('have.length', 3)
      })

      it('check content 5-1 /sdk-javascript/checkout-postmessage/', () => {
        cy.get('.menu__link').contains(titles[lang]['5-sdk-javascript']).siblings('button').click()
        cy.get('.menu__link').contains(titles[lang]['5-1-checkout-postmessage']).click()

        cy.get('h1').should('have.text', titles[lang]['5-1-checkout-postmessage'])
        cy.get('h2').should('have.length', 2)
        cy.get('h3').should('have.length', 3)
        cy.get('table').should('have.length', 0)
      })

      it('check content 6 /sdk-ios/', () => {
        cy.get('.menu__link').contains(titles[lang]['6-sdk-ios']).click()

        cy.get('h1').should('have.text', titles[lang]['6-sdk-ios'])
        cy.get('h2').should('have.length', 4)
        cy.get('h3').should('have.length', 0)
        cy.get('table').should('have.length', 1)
      })

      it('check content 7 /sdk-android/', () => {
        cy.get('.menu__link').contains(titles[lang]['7-sdk-android']).click()

        cy.get('h1').should('have.text', titles[lang]['7-sdk-android'])
        cy.get('h2').should('have.length', 4)
        cy.get('h3').should('have.length', 0)
        cy.get('table').should('have.length', 1)
      })

      it('check content 8 /checkout-confirmation/', () => {
        cy.get('.menu__link').contains(titles[lang]['8-checkout-confirmation']).click()

        cy.get('h1').should('have.text', titles[lang]['8-checkout-confirmation'])
        cy.get('h2').should('have.length', 4)
        cy.get('h3').should('have.length', 1)
        cy.get('table').should('have.length', 2)
      })

      it('check content 9 /checkout-capture/', () => {
        cy.get('.menu__link').contains(titles[lang]['9-checkout-capture']).click()

        cy.get('h1').should('have.text', titles[lang]['9-checkout-capture'])
        cy.get('h2').should('have.length', 2)
        cy.get('h3').should('have.length', 2)
        cy.get('table').should('have.length', 5)
      })

      it('check content 10 /widget/', () => {
        const link = cy.get('.menu__link').contains(titles[lang]['10-widget'])
        link.click()

        cy.get('h1').should('have.text', titles[lang]['10-widget'])
        cy.get('h2').should('have.length', 4)
        cy.get('h3').should('have.length', 0)
        cy.get('table').should('have.length', 3)

        const childs = link.parent().siblings('ul').children('li')
        childs.should('have.length', 5)
      })

      it('check content 10-1 /widget/installment-payment', () => {
        cy.get('.menu__link').contains(titles[lang]['1-checkout-process']).siblings('button').click() // Close first dropdown
        const link = cy.get('.menu__link').contains(titles[lang]['10-widget'])
        link.siblings('button').click() // Open widget dropdown

        const child = link.parent().siblings('ul').children('li').eq(0)
        child.click()

        cy.get('h1').should('have.text', titles[lang]['10-1-installment-payment'])
        cy.get('h2').should('have.length', 2)
        cy.get('h3').should('have.length', 2)
        cy.get('table').should('have.length', 2)
        cy.get('.form-configurator').should('have.length', 1)
      })

      it('check content 10-2 /widget/pay-later', () => {
        cy.get('.menu__link').contains(titles[lang]['1-checkout-process']).siblings('button').click() // Close first dropdown
        const link = cy.get('.menu__link').contains(titles[lang]['10-widget'])
        link.siblings('button').click() // Open widget dropdown

        const child = link.parent().siblings('ul').children('li').eq(1)
        child.click()

        cy.get('h1').should('have.text', titles[lang]['10-2-pay-later'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 1)
        cy.get('table').should('have.length', 1)
        cy.get('.form-configurator').should('have.length', 1)
      })

      it('check content 10-3 /widget/pay-in-4', () => {
        cy.get('.menu__link').contains(titles[lang]['1-checkout-process']).siblings('button').click() // Close first dropdown
        const link = cy.get('.menu__link').contains(titles[lang]['10-widget'])
        link.siblings('button').click() // Open widget dropdown

        const child = link.parent().siblings('ul').children('li').eq(2)
        child.click()

        cy.get('h1').should('have.text', titles[lang]['10-3-pay-in-4'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 1)
        cy.get('table').should('have.length', 1)
        cy.get('.widget-container').should('have.length', 1)
      })

      it('check content 10-4 /widget/custom-styles', () => {
        cy.get('.menu__link').contains(titles[lang]['10-widget']).siblings('button').click() // Open widget dropdown
        cy.get('.menu__link').contains(titles[lang]['10-4-custom-styles']).click()

        cy.get('h1').should('have.text', titles[lang]['10-4-custom-styles'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 1)
        cy.get('table').should('have.length', 0)
        cy.get('.form-configurator').should('have.length', 1)
      })

      it('check content 10-5 /widget/widget-v4', () => {
        cy.get('.menu__link').contains(titles[lang]['10-widget']).siblings('button').click()
        cy.get('.theme-doc-sidebar-item-link-level-2 .menu__link').contains(titles[lang]['10-5-widget-v4']).click()

        cy.get('h1').should('have.text', titles[lang]['10-5-widget-v4'])
        cy.get('h2').should('have.length', 1)
        cy.get('h3').should('have.length', 1)
        cy.get('table').should('have.length', 1)
        cy.get('.form-configurator').should('have.length', 1)
      })

      it('check content 11 /api-orders/', () => {
        const link = cy.get('.menu__link').contains(titles[lang]['11-api-orders'])
        link.click() // go to the page

        cy.get('h1').should('have.text', titles[lang]['11-api-orders'])
        cy.get('h2').should('have.length', 3)
        cy.get('h3').should('have.length', 1)
        cy.get('table').should('have.length', 1)

        const childs = link.parent().siblings('ul').children('li')
        childs.should('have.length', 9)
      })

      it('check content 12 /api-campaigns/', () => {
        const link = cy.get('.menu__link').contains(titles[lang]['12-api-campaigns'])
        link.click() // go to the page

        cy.get('h1').should('have.text', titles[lang]['12-api-campaigns'])
        cy.get('h2').should('have.length', 0)
        cy.get('h3').should('have.length', 0)
        cy.get('table').should('have.length', 0)

        const childs = link.parent().siblings('ul').children('li')
        childs.should('have.length', 6)
      })

      it('check content 13 /checkout-offline/', () => {
        cy.get('.menu__link').contains(titles[lang]['13-checkout-offline']).click()

        cy.get('h1').should('have.text', titles[lang]['13-checkout-offline'])
        cy.get('h2').should('have.length', 3)
        cy.get('h3').should('have.length', 4)
        cy.get('table').should('have.length', 6)
      })
    })
  })
})
