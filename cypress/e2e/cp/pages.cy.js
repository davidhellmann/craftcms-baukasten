describe('Pages', () => {
  beforeEach(function () {
    cy.cpLogin();
  });

  it(`shows an error when trying to save an empty page`, function () {
    cy.cpVisit('/entries/pages/new');

    cy.get('#action-buttons button[type=submit]').click();

    cy.get('#notifications .notification.error').contains('Couldn’t create entry.');
  });
});
