// Code your solution in this file!
const hqStreet = 42

function distanceFromHqInBlocks(streetNumber) {
  //returns the number of blocks given a value  
  return Math.abs(streetNumber-hqStreet)
}

function distanceFromHqInFeet(streetNumber) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return 264 * distanceFromHqInBlocks(streetNumber);
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination-start)*264
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start,destination) < 2000) {
       return (distanceTravelledInFeet(start,destination)-400)*.02
    }
    else if (distanceTravelledInFeet(start,destination) < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
  }