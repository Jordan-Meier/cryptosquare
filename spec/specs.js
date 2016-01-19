describe("simplifyText", function () {
  it("makes text lower case", function () {
    expect(simplifyText("Hi")).to.equal("hi");
  });

  it("removes spaces from text", function () {
    expect(simplifyText(" ")).to.equal("");
  });

  it("removes special characters from string", function() {
    expect(simplifyText("won't")).to.equal("wont");
  });
});

describe("gridText", function () {
  it("it measures the length of the text and then takes the square root of the total characters in the text.", function () {
    expect(gridText("flapjacks")).to.equal(3);
  });
});
