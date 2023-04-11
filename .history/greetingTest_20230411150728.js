

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
        } 
         if (newLanguage === "french") {
            return `bonjour, ${newName}`
        } 
         if (newLanguage === "castilian") {
            return `Saludo, ${newName}`
        }
    }

    return {
        setName,
        callName,
        setLanguage,
        getLanguage
    }

    }