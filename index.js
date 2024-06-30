// Code your solution in this file!
// Define the returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define the returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define the selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define the createFareMultiplier function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Define the fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Define the fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // Define the selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
  };
  
  // Test cases to verify the implementations
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
  
  console.log(returnFirstTwoDrivers(drivers)); // ['Sally', 'Bob']
  console.log(returnLastTwoDrivers(drivers)); // ['Freddy', 'Claudia']
  console.log(selectingDrivers[0](drivers)); // ['Sally', 'Bob']
  console.log(selectingDrivers[1](drivers)); // ['Freddy', 'Claudia']
  console.log(createFareMultiplier(4)(10)); // 40
  console.log(fareDoubler(10)); // 20
  console.log(fareTripler(10)); // 30
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Sally', 'Bob']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Freddy', 'Claudia']
  
  