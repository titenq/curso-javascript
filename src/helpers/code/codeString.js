const codeString = 
`// const array = [1, 3, 9, 1, 9, 9, 5, 6, 3, 1];

const array = ['a', 'b', 'a', 'c', 'd', 'b'];

const getDuplicates = array => {
  const tempArray = [...array].sort();
  let duplicate = [];
  
  tempArray.map((_, i) => tempArray[i + 1] === tempArray[i] && duplicate.push(tempArray[i]));
  
  duplicate = new Set(duplicate);
  duplicate = [...duplicate];

  return duplicate;
};

console.log(getDuplicates(array));

const numbersArray = ['1, 3, 5, 9, 14', '1, 2, 5, 8, 14'];

console.log();

console.log(getDuplicates(numbersArray.reduce((acc, curr) => {
  const currArray = curr.split(', ');

  return [...acc, ...currArray];
}, [])));
`;

export default codeString;
