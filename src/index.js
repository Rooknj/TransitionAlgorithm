const NUM_STEPS = 59;
const TRANSFORM_DURATION = 500;

let startingVal = 255;
let targetVal = 230;

const transition = (start, target, numSteps) => {
  let currentVal = start;
  let diff = target - start;
  let stepAmount = Math.trunc(diff / numSteps); // How much to change by each step
  let remainder = Math.abs(diff % numSteps); // The extra bit cut off by integer division
  let extra = 0;
  let accumulatedRemainder = 0;

  console.log(`diff: ${diff}, Step: ${stepAmount}, remainder: ${remainder}`);
  console.log("Starting Value:", start);
  console.log("Target Value:", target);

  for (let currentStep = 1; currentStep <= numSteps; currentStep += 1) {
    extra = 0;

    // start accumulating the remainder, if it gets to be larger than the number of steps, take a bigger step by 1
    accumulatedRemainder += remainder;
    if (accumulatedRemainder >= numSteps) {
      extra = diff / Math.abs(diff); // 1 if diff is positive, -1 if diff is negative
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
