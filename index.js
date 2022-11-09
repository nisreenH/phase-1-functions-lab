// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if(someValue >= 42){
    return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(someValue){
 return distanceFromHqInBlocks(someValue) * 264;
}

console.log(distanceFromHqInBlocks(50))

function distanceTravelledInFeet(start, destination) {
    if(destination >= start){
    return (destination - start)* 264
    } else{
        return (start - destination)* 264
    }
  }

function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start, destination);
    let charge;
    if(x <= 400){
        return 0
    }
    else if(x > 400 && x <= 2000){
       return 0.02 * (x - 400)
    } else if(x > 2000 && x<= 2500){
        return 25
    } else {
        return "cannot travel that far"
    }
}