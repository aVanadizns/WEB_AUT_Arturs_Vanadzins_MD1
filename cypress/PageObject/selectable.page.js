import { BasePage } from './base.page';

export class SelectablePage extends BasePage {

    static get url(){
        return '/selectable';
    }

    static get selectGrid(){
       return cy.get('[id="demo-tab-grid"]');
    }

    static get getOne(){
        return cy.get('[id="row1"] .list-group-item').contains("One");
    }

    static get getTwo(){
        return cy.get('[id="row1"] .list-group-item').contains("Two");
    }

    static get getThree(){
        return cy.get('[id="row1"] .list-group-item').contains("Three");
    }

    static get getFour(){
        return cy.get('[id="row2"] .list-group-item').contains("Four");
    }

    static get getFive(){
        return cy.get('[id="row2"] .list-group-item').contains("Five");
    }

    static get getSix(){
        return cy.get('[id="row2"] .list-group-item').contains("Six");
    }

    static get getSeven(){
        return cy.get('[id="row3"] .list-group-item').contains("Seven");
    }

    static get getEight(){
        return cy.get('[id="row3"] .list-group-item').contains("Eight");
    }

    static get getNine(){
        return cy.get('[id="row3"] .list-group-item').contains("Nine");
    }

}