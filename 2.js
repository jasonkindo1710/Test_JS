//cau 2
function numberOfItems(arr, item) {
    // Write the code that goes here
    let flat = arr.flat(Infinity); // lam phang mang ko gioi han
    let count = 0;
    for (let i = 0; i < flat.length; i++){
        if (flat[i] == item){
            count++;
        }
    }
    return count;
  }
  
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));