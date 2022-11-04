class e2ePage {

    addProdutoCar( produto, tamanho, cor, quantidade){
       
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]')
        
            .contains(produto).click()
            cy.get('.button-variable-item-'+ tamanho).click()
            cy.get('.button-variable-item-'+cor).click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
    }


editarcheckout(nome, sobrenome, empresa, pais, endereço, complemento, cidade, estado, cep, telefone,email){

    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereço)
        cy.get('#billing_address_2').clear().type(complemento)

        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()

      

}



}

export default new e2ePage ()