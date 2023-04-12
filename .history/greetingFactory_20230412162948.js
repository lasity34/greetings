function greetingFactory() {
  let newName = "";
  let newLanguage = "";
  let newAlert = "";
  let greetCount = 0;
  let greetedObj = {};

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
    if (!newLanguage && !newName) {
    newAlert = "please select language and fill in name your name"
    }
   else if (!newName) {
    newAlert =  "please fill in your name"
    } else if (newLanguage === null) {
    newAlert =  "please select language"
    }
  }

  function getAlert() {
    alert(newAlert)
  }

  return {
    setName,
    callName,
    setLanguage,
    getLanguage,
    callNameCount,
    getNameCount,
    callAlert,
    getAlert
  };
}
