

    function greeting() {

    let newName = "";
    let newLanguage = "";

    function setName(name) {
        newName = name
    }


    function callName() {
        return `hello, ${newName}`
    }

    function setLanguage(language) {
        newLanguage = language
    }

    return {
        setName,
        callName,
        setLanguage
    }

    }