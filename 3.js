function findShortest(vectors) {
    // Write the code that goes here
    let shortest = [];
    let a = vectors[0];
    let b = vectors[1];
    let c = vectors[2];

    let length1 = Math.sqrt(vectors[0][0] * vectors[0][0] + vectors[0][1] * vectors[0][1] + vectors[0][2] * vectors[0][2]);
    let length2 = Math.sqrt(vectors[1][0] * vectors[1][0] + vectors[1][1] * vectors[1][1] + vectors[1][2] * vectors[1][2]);
    let length3 = Math.sqrt(vectors[2][0] * vectors[2][0] + vectors[2][1] * vectors[2][1] + vectors[2][2] * vectors[2][2]);
    if (length1 < length2){
        shortest.push(a);
    }
    else if( length2 < length3){
        shortest.push(b);
    }
    else {shortest.push(c)}
    return shortest;

  }
  
  var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
  var shortest = findShortest(vectors);
  console.log(shortest);
  