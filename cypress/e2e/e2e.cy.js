/// <reference types="cypress" />
import e2ePage from '../support/page_objects/e2e.page'
const dadose2e = require('../fixtures/e2e.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {


        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click()
        cy.adde2e('Hero Hoodie', 'S', 'Gray', 3)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click()
        cy.adde2e('Oslo Trek Hoodie', 'XS', 'Brown', 2)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click()
        cy.adde2e('Grayson Crewneck Sweatshirt','XL','Orange', 3)
      
        cy.get('.dropdown-toggle > .mini-cart-items').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        
        e2ePage.editarcheckout(
            dadose2e[0].nome,
            dadose2e[0].sobrenome,

            dadose2e[0].empresa,
            dadose2e[0].pais,
            dadose2e[0].endereço,
            dadose2e[0].complemento,
            dadose2e[0].cidade,
            dadose2e[0].estado,
            dadose2e[0].cep,
            dadose2e[0].telefone,
            dadose2e[0].email
        )

        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain','Obrigado.Seu pedido foi recebibo')

   
        






    });









})




