function greetingFactory() {
  let newName = "";
  let newLanguage = "";
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
    if (greetedObj[newName] === undefined) {
      greetCount++;

      greetedObj[newName] = 0;

      
    }
  }



  function getNameCount() {
    return greetCount;
  }

  return {
    setName,
    callName,
    setLanguage,
    getLanguage,
    callNameCount,
    getNameCount,
  };
}
