describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation E2E Test', () => {
  it('allows navigation using next and previous buttons', () => {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide-active').invoke('text').then((initialText) => {
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').invoke('text').should((newText) => {
        expect(newText).not.to.equal(initialText);
      });

      cy.get('.swiper-button-prev').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').invoke('text').should('equal', initialText);
    });
  });
});