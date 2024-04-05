import {postAllBycatSchemaxNotebook,postAllBycatSchemaxPhone,postAllBycatSchemaxMonitor} from "../../schemas/post-all-bycat-schema";

describe("Bycat feature", () => {
  it("TC-004: BE | Filtrar los productos por phone", () => {
    cy.request("POST", "https://api.demoblaze.com/bycat", {
      cat: "phone",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.Items[0].cat).to.eq("phone");
      cy.validateSchema(postAllBycatSchemaxPhone, response.body);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("TC-005: BE | Filtrar los productos por notebook", () => {
    cy.request("POST", "https://api.demoblaze.com/bycat", {
      cat: "notebook",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.Items[0].cat).to.eq("notebook");
      cy.validateSchema(postAllBycatSchemaxNotebook, response.body);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("TC-006: BE | Filtrar los productos por monitor", () => {
    cy.request("POST", "https://api.demoblaze.com/bycat", {
      cat: "monitor",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.Items[0].cat).to.eq("monitor");
      cy.validateSchema(postAllBycatSchemaxMonitor, response.body);
      cy.log(JSON.stringify(response.body));
    });
  });
  
});
