// votre code ici

function checkAge(age) {
  if (age < 18) {
    return "Vous etes mineur";
  } else if (age >= 18 && age < 65) {
    return "Vous etes majeur";
  } else {
    return "Vous etes senior";
  }
}

export default checkAge;
