function greetingFactory() {
  let newName = "";
  let newLanguage = "";
  let newAlert = "";
  let greetCount = 0;
  let greetedObj = {};
  let radioItem = "";

  function setName(name) {
    newName = name;
  }

  function callName() {
    return `hello, ${newName}`;
  }

  function setLanguage(language) {
    newLanguage = language;
  }

  function getLanguage() {
    if (newLanguage === "english") {
      return `hello, ${newName}`;
    }
    if (newLanguage === "french") {
      return `bonjour, ${newName}`;
    }
    if (newLanguage === "castilian") {
      return `Saludo, ${newName}`;
    } 
  }

  function setRadio(radio) {
    radioItem = radio
  }

  function getRadio() {
    return radioItem
  }

  function callNameCount() {
    if (greetedObj[newName] === undefined && newName && newLanguage) {
      greetCount++;
      greetedObj[newName] = 0;
    }
  }

  function setLocalStorage() {
    localStorage.setItem("numItem", JSON.stringify(greetCount));
  }

  function getLocalStorage() {
    greetCount = Number(localStorage.getItem("numItem"));
  }

  function callAlert() {
    if ( !getRadio() && !newName) {
      newAlert = "please select language and fill in your name";
    } else if (!newName) {
      newAlert = "please fill in your name";
    } else if ( !getRadio()) {
      newAlert = "please select language";
    } 
  }

  function callErrorMessage() {
    
    if (greetedObj[newName] = 0) {
      newAlert = "username already used"
    }
  }


  function getAlert() {
    callAlert();
    return newAlert;
  }

  function clear() {
    localStorage.clear();
    newName = "";
    newLanguage = "";
    newAlert = "";
    greetCount = 0;
    greetedObj = {};
    radioItem = "";
  }

  function getNameCount() {
    return greetCount;
  }

 

  return {
    setName,
    callName,
    setLanguage,
    getLanguage,
    setLocalStorage,
    getLocalStorage,
    callNameCount,
    getNameCount,
    callAlert,
    getAlert,
    clear,
    setRadio,
    getRadio,
    callErrorMessage
  };
}



