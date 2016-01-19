describe("simplifyText", function () {
  it("makes text lower case", function () {
    expect(simplifyText("Hi")).to.equal("hi");
  });

  it("removes spaces from text", function () {
    expect(simplifyText(" ")).to.equal("");
  });
});
