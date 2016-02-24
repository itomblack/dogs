// filters is an object of arrays where each key is
// a property in the dogData.
const filters = {
  category: [],
  sized: [],
  grooming: [],
}
​
// when adding a filter for category, you add it to filters.category
// similarly how you're doing it at the moment
​
var dogData = [
    {
        breed: "Border Collie",
        category: "Herding",
        intelligence: 100,
        lifespan: 12.52,
        purchaseCost: 622,
        foodCost: 324,
        grooming: "Weekly",
        childOK: "Poor",
        sized: "Med"
    },
    {
        breed: "Border Terrier",
        category: "Terrier",
        intelligence: 70,
        lifespan: 14,
        purchaseCost: 833,
        foodCost: 324,
        grooming: "Weekly",
        childOK: "Good",
        sized: "Sml"
    },
    {
        breed: "Border Terrier Senior",
        category: "Terrier",
        intelligence: 70,
        lifespan: 14,
        purchaseCost: 833,
        foodCost: 324,
        grooming: "Weekly",
        childOK: "Good",
        sized: "Med"
    },
];
​
​
function filterData (filters) {
  const filteredDogs = dogData.filter(dog => {
    // !filters.category.length = true if the array is empty
    // if the array is not empty, it continues after the || (which means or)
    // which checks that the index of the selected category is not -1 (which
    // means it is not in the array)
    const inCategory = !filters.category.length || filters.category.indexOf(dog.category) !== -1;
    // same here
    const inSized = !filters.sized.length || filters.sized.indexOf(dog.sized) !== -1;
    // ... repeat for multiple filters
​
    // here check that they are all true with &&
    if (inCategory && inSized) {
      return dog;
    }
  });
  return filteredDogs;
}
​
// apply two filters
filters.category = ['Terrier'];
filters.sized = ['Med', 'Sml'];
​
// log the results
console.log(filterData(filters));
