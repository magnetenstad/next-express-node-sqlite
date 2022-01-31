
describe('Main page', () => {
  it('should have a working Numbers component', () => {

    cy.visit('http://localhost:3000/');

    cy.get('p').contains('Loading...');
    
    cy.wait(500);
    
    cy.get('h1').contains('Numbers:');
    cy.get('button').contains('Insert number');
    cy.get('button').contains('Clear numbers');

  })
})
