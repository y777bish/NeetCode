/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    result_s = s.split("").sort((a,b) => a.localeCompare(b)).join("");
    result_t = t.split("").sort((a,b) => a.localeCompare(b)).join("");
    if (result_s === result_t) {
        return true
    }
    else {
        return false
    }
};

s = "anagram"; 
t = "nagaram";
console.log(isAnagram(s, t))