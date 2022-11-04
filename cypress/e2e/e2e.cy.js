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
            cy.login(dados.usuario,dados.senha)
        })

    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

      
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('0')
        cy.get('.single_add_to_cart_button').click()



    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Usando dados customizados ', () => {

        cy.adde2e('Arcadio Gym Short', 32, 'Red', 3)


    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Usando dados customizados', () => {

        cy.e2e('Atlas Fitness Tank', 'XS', 'Blue', 4)


    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta- Usando Page objects', () => {
        e2ePage.addProdutoCar('Ajax Full-Zip Sweatshir', 'S', 'Green', 5)


    });


    it('Deve fazer chekout com sucesso - Usando arquivo de dados ', () => {
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

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });


})




