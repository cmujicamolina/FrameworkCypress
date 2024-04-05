describe("Cart feature", () => {
  it("TC-001: BE | Add new product to cart", () => {
    cy.request("POST", "https://api.demoblaze.com/addtocart", {
      id: "2111d933-d0e2-de44-15d2-023e7ea94239",
      cookie: "user=8cde4534-5702-a4d9-20f7-32283d00ac6c",
      prod_id: 1,
      flag: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("TC-002: BE | Delete product to cart", () => {
    cy.request("POST", "https://api.demoblaze.com/deletecart", {
      cookie: "user=8cde4534-5702-a4d9-20f7-32283d00ac6c",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq("Item deleted.");
      cy.log(JSON.stringify(response.body));
    });
  });
});
