describe('Filtro por categorias', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('TC-009: FE | Filtrar por la categoria: phones', () => {
        cy.contains('Phones').click();
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').should("be.visible").should("exist");
    });

    it('TC-010: FE | Filtrar por la categoria: laptops', () => {
        cy.contains('Laptops').click();
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').should("be.visible").should("exist");
    });

    it('TC-011: FE | Filtrar por la categoria: monitors', () => {
        cy.contains('Monitors').click();
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').should("be.visible").should("exist");
        
    });
    
});