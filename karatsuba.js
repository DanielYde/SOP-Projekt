let startTime = performance.now();
const args = process.argv.slice(2);
console.log(args[0] + " * " + args[1] + " = " + karatsuba(args[0], args[1]));
let FinalTime = performance.now() - startTime;

console.log("Runtime: " + FinalTime.toFixed(3) + "ms");

function karatsuba(x, y) {
    if(x < 10 || y < 10) {
        return x * y;
    } else if(x >= 10 && y >= 10) {
        let n_x = x.toString().length; 
        let n_y = y.toString().length;
        let HalfOfString = n_x > n_y ? Math.floor(n_x/2) : Math.floor(n_y/2);
        let a = Math.floor(x / (10 ** HalfOfString));
        let b = x % (10 ** HalfOfString);
        let c = Math.floor(y / (10**HalfOfString));
        let d = y % (10 ** HalfOfString);
        let ac = karatsuba(a, c);
        let bd = karatsuba(b, d);
        let ad_plus_bc = karatsuba(a+b, c+d)-ac-bd;
        return ac * (10 ** (2*HalfOfString)) + (ad_plus_bc * (10 ** HalfOfString)) + bd;
    }
}