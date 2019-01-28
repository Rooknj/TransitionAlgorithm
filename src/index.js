const NUM_STEPS = 59;
let startingVal = 255;
let targetVal = 6;

const transition = (start, target, numSteps) => {
  start = Math.trunc(start);
  target = Math.trunc(target);
  numSteps = Math.trunc(numSteps);
  let currentVal = start;
  let diff = target - start;
  let stepAmount = Math.trunc(diff / numSteps); // How much to change by each step
  let remainder = Math.abs(diff % numSteps); // The extra bit cut off by integer division
  let extra = 0;

  console.log(`diff: ${diff}, Step: ${stepAmount}, remainder: ${remainder}`);
  console.log("Starting Value:", start);
  console.log("Target Value:", target);

  for (let currentStep = 1; currentStep <= numSteps; currentStep += 1) {
    extra =
      Math.trunc((currentStep * remainder) / numSteps) >
      Math.trunc(((currentStep - 1) * remainder) / numSteps)
        ? diff / Math.abs(diff) // 1 if diff is positive, -1 if diff is negative
        : 0;
    currentVal += stepAmount + extra;
    console.log(`Step ${currentStep}: ${currentVal}`);
  }

  console.log("Ending Value:", currentVal);
  console.log("Target Value:", target);
};

console.log("________________________________");
transition(startingVal, targetVal, NUM_STEPS);
