describe("Test greet values", function () {
  it("it shoud take in input name and return greeting the name", function () {
    const greetingTest = greetingTest();

    greetingTest.setName("Bjorn");
    assert.equal("hello, Bjorn", greetingTest.callName());

    greetingTest.setName("Jason");
    assert.equal("hello, Jason", greetingTest.callName());
  });

  it("it should take in a name and english language and return english greeting", function () {
    const greetingtest = greetingTest();

    greetingtest.setLanguage("english");
    greetingtest.setName("bjorn");

    assert.equal("hello, bjorn", greetingtest.getLanguage());
  });

  it("should take in name and return french greeting", function () {
    const greetingtest = greetingTest();

    greetingtest.setLanguage("french");
    greetingtest.setName("kat");

    assert.equal("bonjour, kat", greetingtest.getLanguage());
  });

  it("should take in name and return castilian greeting", function () {
    const greetingtest = greeting();

    greetingtest.setLanguage("castilian");
    greetingtest.setName("john");

    assert.equal("Saludo, john", greetingtest.getLanguage());
  });
});


describe("test numbers", function() {
    it("It should test number of greetings", function() {
        const greetingTest = greeting();

        greetingTest.setLanguage("castilian");
        greetingTest.setName("bjorn")
        greetingTest.setLanguage("french");
        greetingTest.setName("john")
        greetingTest.setName("mark")
        greetingTest.setName("nick")

        assert.equal(4, greetingTest.getNameCount())
    })
})
