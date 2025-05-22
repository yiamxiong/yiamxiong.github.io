// Fishing Calculator

function fishingCalculator() {
  // declare variables
  var typeFish = [];
  var lengthFish = [];
  var weightFish = [];
  var moreFish;
  
  // get data from user
  while (true) {
    var fishType = prompt("What kind of fish did you catch?");
    typeFish.push(fishType);

    var fishLength = Number(prompt("How long is the fish in inches?"));
    if (!isNaN(fishLength)) {
      lengthFish.push(fishLength);
    } else {
      alert("Please enter a valid number for fish length.");
      continue;
    }

    var fishWeight = Number(prompt("How much does the fish weigh in lbs?"));
    if (!isNaN(fishWeight)) {
      weightFish.push(fishWeight);
    } else {
      alert("Please enter a valid number for fish weight.");
      continue;
    }
    
    moreFish = prompt("Did you catch another fish? (yes/no)");
    if (moreFish === 'no') {
      break;
    }
  }
  
  // prompt user for start and end times of fishing
  var startTime = Number(prompt("Enter the start time of fishing (in hours):"));
  var endTime = Number(prompt("Enter the end time of fishing (in hours):"));

  // initialize variables for fish data
  var fishCounts = {};
  var fishLengthSum = {};
  var fishWeightSum = {};
  var totalFish = typeFish.length;

  // Calculations
  for (var index = 0; index < typeFish.length; index++) {
    var fishType = typeFish[index];
    fishCounts[fishType] = (fishCounts[fishType] || 0) + 1;
    fishLengthSum[fishType] = (fishLengthSum[fishType] || 0) + lengthFish[index]; 
    fishWeightSum[fishType] = (fishWeightSum[fishType] || 0) + weightFish[index];
  }

  // Display fish data
  document.write("Fish Data:" + "\n");
  for (var fishType in fishCounts) {
    var averageLength = fishLengthSum[fishType] / fishCounts[fishType];
    var averageWeight = fishWeightSum[fishType] / fishCounts[fishType];
    var fishPerHour = totalFish / (endTime - startTime);
    document.write("Type: " + fishType + "\n");
    document.write("\n");
    document.write("Length: " + averageLength.toFixed(2) + " inches" + "\n");
    document.write("\n");
    document.write("Weight: " + averageWeight.toFixed(2) + " lbs" + "\n");
    document.write("\n");
    document.write("Fish per hour: " + fishPerHour.toFixed(2) + "\n");
    document.write("\n");
  }
}

// Call the fishingCalculator function to run the program
fishingCalculator();
