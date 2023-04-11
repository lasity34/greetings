

describe("Test greet values", function() {
    it("it shoud take in input name and return greeting the name", function() {
        const greetingTest = greeting()

        greetingTest.setName("Bjorn")
        assert.equal("hello, Bjorn", greetingTest.callName())

        greetingTest.setName("Jason")
        assert.equal("hello, Jason", greetingTest.callName())
    })

    it("should take in a language and name value and send back greeting in that language", function() {

        const greetingtest = greeting();

        greetingtest.setLanguage("english");
        greetingtest.setName("bjorn")

        assert.equal("hello, bjorn", greetingtest.callName())

        greetingtest.setLanguage("french");
        greetingtest.setName("kat")

        assert.equal("bonjour, kat", greetingtest.callName())
    })
})