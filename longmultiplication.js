let startTime = performance.now();
const args = process.argv.slice(2);

LongMultiplication();

function LongMultiplication() {

    var FirstArr = parseInt(args[1]) > parseInt(args[0]) ? args[0].split("") : args[1].split("");
    var SecondArr = parseInt(args[1]) > parseInt(args[0]) ? args[1].split("") : args[0].split("");
    var TempArr = [];
    var ResultArr = [];
    var Repeats = 0;
    var Result = 0;

    for(var i = FirstArr.length-1; i >= 0; i--) {
        for(var l = SecondArr.length-1; l >= 0; l--) {

            var Temp = FirstArr[i] * SecondArr[l]

            if(TempArr.length == 0) {
                TempArr[0] = Temp%10;
                TempArr[1] = Math.floor(Temp/10);
            } else {
                TempArr[TempArr.length-1] += Temp%10;
                TempArr[TempArr.length] = Math.floor(Temp/10);
            }
        }
        for(x in TempArr) {
            if(TempArr[x] >= 10) {
                var TempHolder = parseInt(x);
                TempArr[TempHolder+1] += Math.floor(TempArr[TempHolder]/10)
                TempArr[x] = TempArr[x] % 10;
            }
        }
        if(TempArr[TempArr.length-1] == 0) {
            TempArr.splice(TempArr.length-1, 1);
        }
        TempArr.reverse();
        for(var x = 0; x < Repeats; x++) {
            TempArr.push(0);
        }
        ResultArr.push(TempArr);
        TempArr = [];
        Repeats++;
    }
    for(y in ResultArr) {
        Result += parseInt(ResultArr[y].join(""));
    }
    console.log(FirstArr.join("") + " * " + SecondArr.join("") + " = " + Result);
}

let FinalTime = performance.now() - startTime;
console.log("Runtime: " + FinalTime.toFixed(3) + "ms");