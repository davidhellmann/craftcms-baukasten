describe('News', () => {
  it('should pass the audits', function () {
    cy.visit('/news');
    cy.runAudit();
  });
});

describe('News → News', () => {
  it('should pass the audits', function () {
    cy.visit('/news');

    // Click the first article
    cy.get('a.article-card').first().click();

    cy.runAudit();
  });
});
