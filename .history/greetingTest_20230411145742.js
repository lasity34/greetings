

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

    function getLanguage() {
        if (newLanguage === "english") {
            return `hello, ${newName}`
        } else if (newLanguage === "french") {
            return `bonjour, ${newName}`
        } else if (newLanguage === "castilian") {
            return `Saludom ${newName}`
        }
    }

    return {
        setName,
        callName,
        setLanguage,
        getLanguage
    }

    }