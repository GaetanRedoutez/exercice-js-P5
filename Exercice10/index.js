//votre code ici

const printNumbers = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    string += i + " ";
  }
  return string.trim();
};

export default printNumbers;
