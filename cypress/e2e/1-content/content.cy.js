/// <reference types="cypress" />

describe('Check documentation content', () => {

  context('ES documentation', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/')
    })

    it('check sidebar first level length', () => {
      cy.get('.theme-doc-sidebar-menu > li')
        .should('have.length', 13)
    })

    it('root redirects to first documentation page (checkout process)', () => {
      cy.get('h1').should('have.length', 1)
      cy.get('h1').should('have.text', 'Proceso de checkout')

      const childs = cy.get('.menu__link').contains('Proceso de checkout').parent().siblings('ul').children('li')
      childs.should('have.length', 3)
    })

    it('check content 1 /checkout-process', () => {
      const link = cy.get('.menu__link').contains('Proceso de checkout')
      link.click()

      cy.get('h1').should('have.text', 'Proceso de checkout')

      const childs = link.parent().siblings('ul').children('li')
      childs.should('have.length', 3)
    })

    it('check content 1-1 /checkout-process/installment-payment', () => {
      cy.get('.menu__link').contains('Pago a plazos').click()

      cy.get('h1').should('have.text', 'Pago a plazos')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 4)
    })

    it('check content 1-2 /checkout-process/pay-later-payment', () => {
      cy.get('.menu__link').contains('Pago en 15 días').click()

      cy.get('h1').should('have.text', 'Pago en 15 días')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 5)
    })

    it('check content 1-3 /checkout-process/pay-in-4-payment', () => {
      cy.get('.menu__link').contains('Pago en 4').click()

      cy.get('h1').should('have.text', 'Pago en 4')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 4)
    })

    it('check content 2 /category/entorno-de-pruebas', () => {
      cy.get('.menu__link').contains('Entorno de pruebas').click()

      cy.get('h1').should('have.text', 'Entorno de pruebas')
      cy.get('h2').should('have.length', 2)
      cy.get('h3').should('have.length', 0)
      cy.get('.card').should('have.length', 2)
    })


    it('check content 2-1 /test-environment/test-mode', () => {
      cy.get('.menu__link').contains('Entorno de pruebas').siblings('button').click()
      cy.get('.menu__link').contains('Modo de pruebas').click()

      cy.get('h1').should('have.text', 'Modo de pruebas')
    })

    it('check content 2-2 /test-environment/test-data', () => {
      cy.get('.menu__link').contains('Entorno de pruebas').siblings('button').click()
      cy.get('.menu__link').contains('Datos de prueba').click()

      cy.get('h1').should('have.text', 'Datos de prueba')
    })

    it('check content 3 /api-reference/', () => {
      cy.get('.menu__link').contains('Peticiones a la API').click()

      cy.get('h1').should('have.text', 'Peticiones a la API')
      cy.get('h2').should('have.length', 7)
      cy.get('h3').should('have.length', 8)
    })

    it('check content 4 /checkout-creation/', () => {
      cy.get('.menu__link').contains('Creación del checkout').click()

      cy.get('h1').should('have.text', 'Creación del checkout')
      cy.get('h2').should('have.length', 6)
      cy.get('h3').should('have.length', 7)
      cy.get('table').should('have.length', 11)
    })

    it('check content 5 /sdk-javascript/', () => {
      cy.get('.menu__link').contains('SDK Javascript').click()

      cy.get('h1').should('have.text', 'SDK Javascript')
      cy.get('h2').should('have.length', 7)
      cy.get('h3').should('have.length', 0)
      cy.get('table').should('have.length', 3)
    })

    it('check content 5-1 /sdk-javascript/checkout-postmessage/', () => {
      cy.get('.menu__link').contains('SDK Javascript').siblings('button').click()
      cy.get('.menu__link').contains('Integración vía postMessage').click()

      cy.get('h1').should('have.text', 'Integración vía postMessage')
      cy.get('h2').should('have.length', 2)
      cy.get('h3').should('have.length', 3)
      cy.get('table').should('have.length', 0)
    })

    it('check content 6 /sdk-ios/', () => {
      cy.get('.menu__link').contains('SDK iOS').click()

      cy.get('h1').should('have.text', 'SDK iOS')
      cy.get('h2').should('have.length', 4)
      cy.get('h3').should('have.length', 0)
      cy.get('table').should('have.length', 1)
    })

    it('check content 7 /sdk-android/', () => {
      cy.get('.menu__link').contains('SDK Android').click()

      cy.get('h1').should('have.text', 'SDK Android')
      cy.get('h2').should('have.length', 4)
      cy.get('h3').should('have.length', 0)
      cy.get('table').should('have.length', 1)
    })

    it('check content 8 /checkout-confirmation/', () => {
      cy.get('.menu__link').contains('Confirmación del checkout').click()

      cy.get('h1').should('have.text', 'Confirmación del pedido')
      cy.get('h2').should('have.length', 4)
      cy.get('h3').should('have.length', 1)
      cy.get('table').should('have.length', 2)
    })

    it('check content 9 /checkout-capture/', () => {
      cy.get('.menu__link').contains('Captura del pedido').click()

      cy.get('h1').should('have.text', 'Captura del pedido')
      cy.get('h2').should('have.length', 2)
      cy.get('h3').should('have.length', 2)
      cy.get('table').should('have.length', 5)
    })


    it('check content 10 /widget/', () => {
      const link = cy.get('.menu__link').contains('Integración del widget')
      link.click()

      cy.get('h1').should('have.text', 'Integración del widget')
      cy.get('h2').should('have.length', 4)
      cy.get('h3').should('have.length', 0)
      cy.get('table').should('have.length', 3)

      const childs = link.parent().siblings('ul').children('li')
      childs.should('have.length', 5)
    })

    it('check content 10-1 /widget/installment-payment', () => {
      cy.get('.menu__link').contains('Proceso de checkout').siblings('button').click() // Close first dropdown
      cy.get('.menu__link').contains('Integración del widget').siblings('button').click() // Open widget dropdown
      cy.get('.menu__link').contains('Paga a plazos').click() // go to the page

      cy.get('h1').should('have.text', 'Pago a plazos')
      cy.get('h2').should('have.length', 2)
      cy.get('h3').should('have.length', 2)
      cy.get('table').should('have.length', 2)
      cy.get('.form-configurator').should('have.length', 1)
    })

    it('check content 10-2 /widget/pay-later', () => {
      cy.get('.menu__link').contains('Proceso de checkout').siblings('button').click() // Close first dropdown
      cy.get('.menu__link').contains('Integración del widget').siblings('button').click() // Open widget dropdown
      cy.get('.menu__link').contains('Paga en 15 días').click() // go to the page

      cy.get('h1').should('have.text', 'Pago en 15 días')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 1)
      cy.get('table').should('have.length', 1)
      cy.get('.form-configurator').should('have.length', 1)
    })

    it('check content 10-3 /widget/pay-in-4', () => {
      cy.get('.menu__link').contains('Proceso de checkout').siblings('button').click() // Close first dropdown
      cy.get('.menu__link').contains('Integración del widget').siblings('button').click() // Open widget dropdown
      cy.get('.menu__link').contains('Paga en 4').click() // go to the page

      cy.get('h1').should('have.text', 'Pago en 4')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 1)
      cy.get('table').should('have.length', 1)
      cy.get('.widget-container').should('have.length', 1)
    })

    it('check content 10-4 /widget/custom-styles', () => {
      cy.get('.menu__link').contains('Integración del widget').siblings('button').click() // Open widget dropdown
      cy.get('.menu__link').contains('Personalización CSS del Widget').click()

      cy.get('h1').should('have.text', 'Personalización CSS del Widget')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 1)
      cy.get('table').should('have.length', 0)
      cy.get('.form-configurator').should('have.length', 1)
    })

    it('check content 10-5 /widget/widget-v4', () => {
      cy.get('.menu__link').contains('Integración del widget').siblings('button').click()
      cy.get('.theme-doc-sidebar-item-link-level-2 .menu__link').contains('Nuevo widget v4').click()

      cy.get('h1').should('have.text', 'Nuevo widget v4')
      cy.get('h2').should('have.length', 1)
      cy.get('h3').should('have.length', 1)
      cy.get('table').should('have.length', 1)
      cy.get('.form-configurator').should('have.length', 1)
    })

    it('check content 11 /api-orders/', () => {
      const link = cy.get('.menu__link').contains('API de pedidos')
      link.click() // go to the page

      cy.get('h1').should('have.text', 'API de pedidos')
      cy.get('h2').should('have.length', 3)
      cy.get('h3').should('have.length', 1)
      cy.get('table').should('have.length', 1)

      const childs = link.parent().siblings('ul').children('li')
      childs.should('have.length', 9)
    })

    it('check content 12 /api-campaigns/', () => {
      const link = cy.get('.menu__link').contains('API de campañas')
      link.click() // go to the page

      cy.get('h1').should('have.text', 'API de campañas')
      cy.get('h2').should('have.length', 0)
      cy.get('h3').should('have.length', 0)
      cy.get('table').should('have.length', 0)

      const childs = link.parent().siblings('ul').children('li')
      childs.should('have.length', 6)
    })

    it('check content 13 /checkout-offline/', () => {
      cy.get('.menu__link').contains('Integración POS').click()

      cy.get('h1').should('have.text', 'Integración POS')
      cy.get('h2').should('have.length', 3)
      cy.get('h3').should('have.length', 4)
      cy.get('table').should('have.length', 6)
    })
  })
})
