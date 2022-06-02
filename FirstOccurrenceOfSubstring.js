// var strStr = function(haystack, needle) {
//     if(haystack.length === 0) return 0;
//     let slow = 0, index = 0;
//     for (index; index < haystack.length; index++) {
//         if(haystack[index] === needle[slow]){
//             slow++;
//         } else {
//             slow = 0;
//         }
//         if(slow === needle.length) return (index + 1) - slow;
//     }
//     return -1;
// };

// Runtime: 76 ms, faster than 54.92% of JavaScript online submissions for Implement strStr().
// Memory Usage: 44.9 MB, less than 5.19% of JavaScript online submissions for Implement strStr().
var strStr = function(haystack, needle) {
    if(haystack.length === 0) return 0;
    let first = needle[0], instances = [];
    for (let index = 0; index < haystack.length; index++){
        if(haystack[index] === first){
            instances.push(index);
        }
    }
    console.log(instances);
    if(instances.length === 0) return -1;
    for (let j = 0; j < instances.length; j++) {
        if(haystack.slice(instances[j], instances[j] + needle.length) === needle) return instances[j];
    }
    return -1;
}
// strStr("power ");
// strStr("mississippi", "issippi");
strStr("aaa", "aaaa");