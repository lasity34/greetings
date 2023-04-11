

describe("Test greet values", function() {
    it("it shoud take in input name and return string", function() {
        const greetingTest = greeting()

        greetingTest.callName("Bjorn")

        assert.equal("hello, Bjorn", callName())
    })
})