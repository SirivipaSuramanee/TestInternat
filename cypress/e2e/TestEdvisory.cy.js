/// <reference types="cypress" />
import 'cypress-file-upload';
// // const { faker } = require("@faker-js/faker");

describe("loginQChargeActivity", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("File Upload", () => {
    cy.contains('File Upload')
      .click()
      .get("input[type=file]").eq(0)
      .attachFile("Sirivipa Suramanee-Resume.pdf")
      .wait(1000)
      .get("#file-submit")
      .click()
  });

  it("Multiple Windows", () => {
    cy.contains('Multiple Windows')
      .click()
      .get(".example")
      .contains('Click Here')
      .click()
  });

  it.only("Sortable Data Tables for Table1", () => {
    cy.contains("Sortable Data Tables")
      .click()
      .wait(1000)
      .get('.tablesorter').eq(0)
      .click()
      .contains("Last Name")
      .click()
  });
});
