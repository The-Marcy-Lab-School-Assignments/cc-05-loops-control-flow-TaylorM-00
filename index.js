const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
  return "done";
};
console.log(multiplesOfSixAndNine());

const greaterNum = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) {
      return "both integers are equal";
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return "Null";
  }
};
