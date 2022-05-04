//cau 1
function filterNumbersFromArray(arr) {
    // Write the code that goes here
    for (let i = arr.length - 1; i >= 0; i--) {
      if (typeof arr[i] === "string") {
        arr.splice(i, 1);
      }
    }
  }
  
  var arr = [1, "a", "b", 2];
  filterNumbersFromArray(arr);
  // At this point, arr should have been modified in place
  // and contain only 1 and 2.
  for (var i = 0; i < arr.length; i++) console.log(arr[i]);