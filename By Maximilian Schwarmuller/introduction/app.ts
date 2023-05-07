function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }

  return n1 + n2;
}
const num1 = 2;
const num2 = 5;
const printResult = true;
const resultPhrase = "Result is : ";

add(num1, num2, printResult, resultPhrase);
