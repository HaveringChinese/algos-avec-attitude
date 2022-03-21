// function getDigit(num, place){
//     let reversed = [];
//     let stringed = num.toString();
//     for(let i = stringed.length; i > 0; i--){
//         reversed.push(stringed[i]);
//     }    
//     console.log(reversed);
//     reversed.join();
//     return parseInt(reversed[place]);
// } 

const getDigitCleanly = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const digitCount = (num) => num.toString().length === 1 ? 1 : Math.ceil(Math.abs(num) / 10).toString().length + 1; 

function maxDigits(array){
    let max = 0;
    for(let i = 0; i < array.length; i++){
        max = Math.max(max, digitCount(array[i]));
    }
    return max;
}

function radixSort(array){

    for(let k = 0; k < maxDigits(array); k++){
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < array.length; i++){
            let currentDigit = getDigitCleanly(array[i], k);
            buckets[currentDigit].push(array[i]);
        }
        array = buckets.flat()
    }
    return array;
}

radixSort([1415,2,34234,33,55,12456236,2423143,4524,52343,23342]);