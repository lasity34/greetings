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

  function setRadioValue(radio) {
    radioItem = radio;
  }

  function getRadioValue() {
    return radioItem;
  }

  function callNameCount() {
    if (greetedObj[newName] === undefined && newName && newLanguage) {
      greetCount++;

      greetedObj[newName] = 0;
    }
  }

  function getNameCount() {
    return greetCount;
  }

  function callAlert() {
    if (!getRadioValue() && !newName) {
      newAlert = "please select language and fill in your name";
    } else if (!newName) {
      newAlert = "please fill in your name";
    } else if (!getRadioValue()) {
      newAlert = "please select language";
    }
  }

  console.log(greetedObj)
  function getAlert() {
    return newAlert;
  }

 

  function clear() {
    newName = "";
    newLanguage = "";
    newAlert = "";
    greetCount = 0;
    greetedObj = {};
    radioItem = "";
  }

  return {
    setName,
    callName,
    setLanguage,
    getLanguage,
    setRadioValue,
    callNameCount,
    getNameCount,
    callAlert,
    getAlert,
    clear,
 
  };
}
