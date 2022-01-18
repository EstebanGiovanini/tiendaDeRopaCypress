describe('Search elements', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Search for elements with multiple results', ()=>{
       
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();

        })
        cy.fixture('results').then((results)=>{
            cy.get(results.titleResults).should('contain','dress');
        })
    })
    it('Search for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('Querty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('results').then((results)=>{
            cy.get(results.alertResults).should('contain','No results were found for your search');
        })  
    })

})