

    function greeting() {

    let newName = ""

    function setName(name) {
        newName = name
    }

    function callName() {
        return `hello, ${newName}`
    }

    return {
        setName,
        callName
    }

    }