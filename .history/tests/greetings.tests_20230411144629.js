

describe("Test greet values", function() {
    it("it shoud take in input name and return string", function() {
        const greetingTest = greeting()

        greetingTest.setName("Bjorn")

        assert.equal("hello, Bjorn", greetingTest.callName())
    })
})