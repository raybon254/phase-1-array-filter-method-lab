// Code your solution here
// Function to find matching drivers by name (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to fuzzy match drivers by the beginning of their names
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to match drivers by name in an array of driver objects
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }