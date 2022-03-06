describe('User', () => {
    it('is making an order.', () => {
        // log in and going to the main page
        cy.login();

        // search input "chiffon"
        cy.get('#search_query_top').type('chiffon') //typing
        cy.get('[name="submit_search"]').click() // search button onclick
        cy.contains('Showing 1 - 2 of 2 items') // check results

        // choose a product 
        cy.get('[href="http://automationpractice.com/index.php?id_product=7&controller=product&search_query=chiffon&results=2"][title="View"]').click() 
       
        // select "M" size
        cy.get('#group_1').select('2') 

        // select color green
        cy.get('#color_15').click()

        // add product to a cart
        cy.get('[name="Submit"]').click()

        // go to the cart
        cy.get('[title="Proceed to checkout"]').click() 
        
        // check if the cart includes only one product and if values are correct
        cy.get('[name="quantity_7_38_0_646302"]').invoke('attr', 'value').should('eq', '1')
        cy.get('#total_product').should("have.text", "$16.40")
        cy.get('#total_shipping').should("have.text", "$2.00")
        cy.get('#total_price_without_tax').should("have.text", "$18.40")
        cy.get('#total_tax').should("have.text", "$0.00")
        cy.get('#total_price').should("have.text", "$18.40")

        // change quantity to 2
        cy.get('[title="Add"]').click()
        cy.get('[name="quantity_7_38_0_646302"]').invoke('attr', 'value').should('eq', '2')

        // check if values are correct
        cy.get('#total_product').should("have.text", "$32.80")
        cy.get('#total_shipping').should("have.text", "$2.00")
        cy.get('#total_price_without_tax').should("have.text", "$34.80")
        cy.get('#total_tax').should("have.text", "$0.00")
        cy.get('#total_price').should("have.text", "$34.80")

        // go to the "Address" tab
        cy.get('[title="Proceed to checkout"].standard-checkout').click() 

        // add a message to the order
        cy.get('[name="message"]').type('If I am not at home, the courier can leave my order in front of the door.')

        // go to the "Shipping" tab
        cy.get('[name="processAddress"]').click()

        // agree to the terms of service
        cy.get('[name="cgv"]').click()

        // go to the "Payment" tab
        cy.get('[name="processCarrier"]').click()

        // choose payment method
        cy.get('[title="Pay by bank wire"]').click()

        // confirm the order
        cy.get('#cart_navigation').find('[type="submit"]').click()
        cy.contains('Your order on My Store is complete.')
    })
})
