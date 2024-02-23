export const useChecker = () => {
  const patterns = {
    password: "[a-zA-Z0-9\-.!?]{10,12}",
    email: "[a-zA-Z0-9._\-]{1,30}[@]{1}[a-zA-Z0-9._\-]{4,12}[.]{1}[a-zA-Z]{2,4}"
  };

  if (type == "password") {
    const newRegExp = new RegExp(patterns.password, "g");
  } 

  if(type == "email"){
    const newRegExp = new RegExp(patterns.email, "g")
  }

  const checker = (somethingToCheck, type) => {
    return newRegExp.test(somethingToCheck)
  }

  return {
    checker
  };
};
