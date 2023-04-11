

    function greeting() {

    let newName = ""

    function setName(name) {
        newName = name
    }

    function callName() {
        return `Hello, ${name}`
    }

    return {
        callName
    }

    }