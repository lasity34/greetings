

describe("Test greet values", function() {
    it("it shoud take in input name and return greeting the name", function() {
        const greetingTest = greeting()

        greetingTest.setName("Bjorn")
        assert.equal("hello, Bjorn", greetingTest.callName())

        greetingTest.setName("Jason")
        assert.equal("hello, Jason", greetingTest.callName())
    })

    it("should take in a language value such as english, french or castilian", function() {

    })
})