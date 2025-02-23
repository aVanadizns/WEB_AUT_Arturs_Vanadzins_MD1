import { SelectablePage } from "../PageObject/selectable.page"

describe('Arturs Vanadzins MD1', () => {

  context("selectable scenario", () => {	
    beforeEach(() => {
      SelectablePage.visit();
    });

    it('work, work, work', () => {

      // Click on the "Grid" tab
      SelectablePage.selectGrid.click();

      // Click on the “Two”, “Four”, “Six”, “Eight”
      SelectablePage.getTwo.click();
      SelectablePage.getFour.click();
      SelectablePage.getSix.click();
      SelectablePage.getEight.click();
      
      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.getTwo.should('have.class', 'active');
      SelectablePage.getFour.should('have.class', 'active');
      SelectablePage.getSix.should('have.class', 'active');
      SelectablePage.getEight.should('have.class', 'active');

      //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectablePage.getOne.should('not.have.class', 'active');
      SelectablePage.getThree.should('not.have.class', 'active');
      SelectablePage.getFive.should('not.have.class', 'active');
      SelectablePage.getSeven.should('not.have.class', 'active');
      SelectablePage.getNine.should('not.have.class', 'active');
    });

  });
    
});