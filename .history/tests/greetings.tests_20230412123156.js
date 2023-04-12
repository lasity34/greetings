describe("Test greet values", function () {
  it("it shoud take in input name and return greeting the name", function () {
    const greetingTest = greetingFactory();

    greetingTest.setName("Bjorn");
    assert.equal("hello, Bjorn", greetingTest.callName());

    greetingTest.setName("Jason");
    assert.equal("hello, Jason", greetingTest.callName());
  });

  it("it should take in a name and english language and return english greeting", function () {
    const greetingtest = greetingFactory();

    greetingtest.setLanguage("english");
    greetingtest.setName("bjorn");

    assert.equal("hello, bjorn", greetingtest.getLanguage());
  });

  it("should take in name and return french greeting", function () {
    const greetingtest = greetingFactory()

    greetingtest.setLanguage("french");
    greetingtest.setName("kat");

    assert.equal("bonjour, kat", greetingtest.getLanguage());
  });

  it("should take in name and return castilian greeting", function () {
    const greetingtest = greetingFactory();

    greetingtest.setLanguage("castilian");
    greetingtest.setName("john");

    assert.equal("Saludo, john", greetingtest.getLanguage());
  });
});


describe("test value input", function() {
    it("It should test if number comes back when name and language is called", function() {
        const greetingTest = greetingFactory();

        greetingTest.setLanguage("castilian");
        greetingTest.setName("bjorn")
   
        greetingTest.callNameCount()
        assert.equal(1, greetingTest.getNameCount())

       
    })
    it("It should test to see if number is not added if name is called twice", function() {
        const greetingTest = greetingFactory();

        greetingTest.setLanguage("castilian");
        greetingTest.setName("bjorn")
        greetingTest.callNameCount()
        assert.equal(1, greetingTest.getNameCount())

        greetingTest.setLanguage("french");
        greetingTest.setName("bjorn")
        greetingTest.setName("john")
        greetingTest.callNameCount()
        assert.equal(2, greetingTest.getNameCount())
    })
})


describe("Test alert messages for invalid input", function() {
    it("alert should pop up when there is no input", function() {
        const greetingTest = greetingFactory();

        greetingTest.setLanguage("french");
        greetingTest.setName("");
        greetingTest.callAlert()

        assert.equal("please fill in your name", greetingTest.getAlert())
    })
    it("alert should pop up when there is no input or button selected", function() {
        const greetingTest = greetingFactory();

        greetingTest.setLanguage("");
        greetingTest.setName("");
        greetingTest.callAlert()

        assert.equal("please select language and fill in name your name", greetingTest.getAlert())
    })

})
