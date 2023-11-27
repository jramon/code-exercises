/* 
    Write a function that reverses a string. The input string is given as an array of characters s.

    Example 1:

    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]
    Example 2:

    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

    Constraints:

    1 <= s.length <= 105
    s[i] is a printable ascii character

    Follow up:  Do not allocate extra space for another array. 
                You must do this by modifying the input array in-place with O(1) extra memory.
*/


const reverseString = function(s) {
    let right = s.length -1,
        left = 0,
        aux
    
    while(left < right) {
        aux = s[right]

        s[right] = s[left]
        s[left] = aux
        
        right--
        left++
    }
};

const hello = ['h', 'e', 'l', 'i', 'o' ];
console.log(reverseString(hello));


