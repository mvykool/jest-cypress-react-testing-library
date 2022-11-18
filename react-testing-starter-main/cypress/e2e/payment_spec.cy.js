describe('payment', () => {
  it("user can make payment", () => {
      //login
      cy.visit('/')

      cy.findByRole('textbox', { name: /username/i}).type("johndoe");
      cy.findByLabelText(/password/i).type("s3cret");
      cy.findByRole('button', { name: /sign in/i}).click()
      //check account balance
      //click on pay buttoncy
      //search for user
      //add amount and note and click pay
      //return to transactions
      //go to personal payments
      //click on payment
      //verify if payment was made
      //verify if the right amount was deducted
  })
});
