

    function greeting() {

    let newName = ""

    function setName(name) {
        newName = name
    }

    function callName() {
        return `Hello, ${newName}`
    }

    return {
        callName,
        setName
    }

    }