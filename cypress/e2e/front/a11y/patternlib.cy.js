describe('Patternlib', () => {
  it('should pass the audits', function () {
    cy.visit('/hidden/patternlib');
    cy.runAudit();
  });
});

describe('Patternlib → First Comp', () => {
  it('should pass the audits', function () {
    cy.visit('/hidden/patternlib');

    // Click the first article
    cy.get('.pl_nav nav a').first().click();

    cy.runAudit();
  });
});
