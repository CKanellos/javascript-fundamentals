// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...

function removeEvens(lst) {
  // lst is an array of numbers
  // Returns a new list with all the even numbers of lst removed
  return lst.filter(function(x) {
    if (x % 2 === 1) return true;
    else return false;
  }); 
}

function keepLong(lst) {
  // lst is an array of strings
  // Returns a new list with all the elements of lst that are length greater than 5
  return lst.filter(function(x) {
    if (x.length > 5) return true;
    else return false;
  });
}

function greet(lst) {
  // lst is an array of strings
  // Adds "Hello " to every element of greet
  // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
  return lst.map(function(x) {
    return "Hello " + x;
  });
}

function greetLong(lst) {
  // lst is an array of strings
  // Only greet people who's names have length at least 4.
  // Otherwise ignore them completely.
  // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
  let longNames = lst.filter(function(x) {
    if (x.length >= 4) return true;
    else return false;
  });
  return longNames.map(function(x) {
    return "Hello " + x;
  });
}

function allLong(lst) {
  // lst is an array of strings
  // Returns true if every element of lst is of length at least 5. Otherwise returns false.
  return lst.every(function(x) {
    if (x.length >= 5) return true;
    else return false;
  });
}

module.exports = { removeEvens, keepLong, greet, greetLong, allLong };
