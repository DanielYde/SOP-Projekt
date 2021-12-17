let startTime = performance.now();
const args = process.argv.slice(2);

let Result = 0;
let SmallestArg = args[1] < args[0] ? args[1] : args[0];
for(var i = 0; i < parseInt(SmallestArg); i++) {
    Result += parseInt(args[0]);
}

console.log(args[0] + " * " + args[1] + " = " + Result);

let FinalTime = performance.now() - startTime;
console.log("Runtime: " + FinalTime.toFixed(3) + "ms");