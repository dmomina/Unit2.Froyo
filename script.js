const userInputString = prompt(
    "Please enter your froyo flavors, seprated by a comma.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

const stringArray = userInputString.split(",");

const flavorCounts = [];
for (let i = 0; i < stringArray.length; i++) {
    const flavor = stringArray[i];
    if (flavorCounts[flavor]){
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
}

console.log(flavorCounts);



