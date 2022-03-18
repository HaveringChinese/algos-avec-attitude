//first successful getDigit helper function -- felt good about this one until I saw the solution could be reached
//with only 3 lines of code, 1/3rd of mine. Still, I refused to let myself be discouraged and instead pushed on, making note of how
//this kind of shit is part of parcel of our universe, and should be seen as a fun challenge rather than a source of 
//discouragement
// function getDigit(num, place){
//     let stringified = num.toString();
//     let reversed = [];
//     for(let i = stringified.length - 1; i >= 0; i--){
//         reversed.push(stringified[i]);
//     }
//     let joined = reversed.join('');
//     return joined[place];
// }

const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// getDigit(24569, 2);

//and then sure enough, because of my new winning attitude and the wisdom which that required
//I was able to push on to the next challenge where I ABSOLUTELY TROUNCED THE INSTRUCTOR, coming up with a solution in 1 line of code.
//which is 1/3rd of the instructor's. I will not relent!

const digitCount = (num) => (num.toString()).length === 1 ? 1 : Math.ceil(Math.abs(num) / 10).toString().length + 1;

// digitCount(22000);

function mostDigits(arr){
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}
// mostDigits([12,134,1566,123532]);

function radix(array){
    for(let k = 0; k < mostDigits(array); k++){
        // let buckets = [[], [], [], [], [], [], [], [], [], []];
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < array.length; i++){
            buckets[getDigit(array[i], k)].push(array[i]); 
        }
        array = buckets.flat();
    }
        return array;
}

radix([12,12456, 1245, 124, 1212, 1534534, 12561636, 21342, 2452354, 2145234]);