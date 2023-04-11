

describe("Test greet values", function() {
    it("it shoud take in input name and return greeting the name", function() {
        const greetingTest = greeting()

        greetingTest.setName("Bjorn")
        assert.equal("hello, Bjorn", greetingTest.callName())

        greetingTest.setName("Jason")
        assert.equal("hello, Jason", greetingTest.callName())
    })

    it("it should take in a name and english lanuage and return english greeting", function() {

        const greetingtest = greeting();

        greetingtest.setLanguage("english");
        greetingtest.setName("bjorn")

        assert.equal("hello, bjorn", greetingtest.getLanguage())


    })

    it("should take in name and return french greeting", function() {

        const greetingtest = greeting();

    

        greetingtest.setLanguage("french");
        greetingtest.setName("kat")

        assert.equal("bonjour, kat", greetingtest.getLanguage())
    })

    it("should take in name and return castilian greeting", function() {

        const greetingtest = greeting();

    

        greetingtest.setLanguage("castilian");
        greetingtest.setName("john")

        assert.equal("Saludo, john", greetingtest.getLanguage())
    })
})