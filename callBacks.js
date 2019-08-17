// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     this.date = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.hour = this.date.getHours();
//     this.minute = this.date.getMinutes();
//     this.second = this.date.getSeconds();
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals.  
//     setInterval(() => { this._tick(); } , 1000);
//   }

//   printTime() {
//     // Format the time in HH:MM:SS
//     let arr = [this.hour, this.minute, this.second];
//     arr.forEach((el, i) => {
//       if (el < 10) {
//         arr[i] = "0" + el;
//       } else {
//         arr[i] = el.toString();
//       }
//     });
//     let time = `${arr[0]}:${arr[1]}:${arr[2]}`;
//     // Use console.log to print it.
//     console.log(time);
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     let curSec = this.second + 1;
//     if (curSec === 60) {
//       this.second = 0;
//       let curMin = this.minute + 1;
//       if (curMin === 60) {
//         this.minute = 0;
//         let curHour = this.hour + 1;
//         if (curHour === 24) {
//           this.hour = 0;
//           this.minute = 0;
//           this.second = 0;
//         } else {
//           this.hour++;
//         }
//       } else {
//         this.minute++;
//       }
//     } else {
//       this.second++;
//     }

//     // 2. Call printTime.
//     this.printTime();
//   }
// }

// const clock = new Clock();


// ________________________________________________


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// function completionCallback(sum) {
//   console.log(`Total Sum: ${sum}`);
//   reader.close();
// }

// function addNumbers(sum, numsLeft, completionCallback) {
//   let res = "Your input";

//   if (numsLeft > 0) {
//     reader.question("Input a number: ", (num) => {
//       console.log(`${res} ${num}`);
//       let curNum = parseInt(num);
//       sum += curNum;
//       console.log(`Current Sum: ${sum}`);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//   }
// }

// addNumbers(0, 5, completionCallback);

// ________________________________________________

function askIfGreaterThan(el1, el2, cb) {
  reader.question(`${el1} > ${el2}?`, (res) => {
    if (res == "yes") {
      cb(true);
    } else if (res == "no") {
      cb(false);
    }
  });
}

// askIfGreaterThan(2, 3);

// askIfGreaterThan(el1, el2)


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } 

  askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
    if (isGreaterThan) {
      [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
      madeAnySwaps = true;
    } 
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
}


function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}


function sortCompletionCallback(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
}


absurdBubbleSort([3, 2, 1], sortCompletionCallback);

// ________________________________________________

Function.prototype.myBind = (object) => {
  let func = this;
  () => {
    Function.prototype.apply()
  }
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"