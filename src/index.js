const NUM_STEPS = 10;
const TRANSFORM_DURATION = 500;

let startingVal = 199;
let targetVal = 237;

const transition = (start, target, numSteps) => {
  let currentVal = start;
  let diff = target - start;
  let stepAmount = Math.floor(diff / numSteps);
  let remainder = diff % numSteps;
  console.log(remainder);

  let extra = 0;
  let accumulatedRemainder = 0;

  console.log("Starting Value:", start);
  console.log("Target Value:", target);

  for (let currentStep = 1; currentStep <= numSteps; currentStep += 1) {
    extra = 0;
    accumulatedRemainder += remainder;
    if (accumulatedRemainder >= numSteps) {
      extra = diff / Math.abs(diff);
      accumulatedRemainder -= numSteps;
    }
    currentVal += stepAmount + extra;
    console.log(`Step ${currentStep}: ${currentVal}`);
  }

  console.log("Ending Value:", currentVal);
  console.log("Target Value:", target);
};

console.log("________________________________");
transition(startingVal, targetVal, NUM_STEPS);
