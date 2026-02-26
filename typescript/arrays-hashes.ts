class Solution {
    /* 
    1. Contains Duplicate | EASY

    Given an integer array nums, return true if any value appears more than once in the array, 
    otherwise return false.

    Example 1:

    Input: nums = [1, 2, 3, 3]
    Output: true

    Example 2:

    Input: nums = [1, 2, 3, 4]
    Output: false

    */
    hasDuplicate(nums: number[]): boolean {
        //TIME: O(n) | SPACE: O(n)
        let numSet = new Set<number>();  //set takes up the same space as the i/p

        //looping through the VALUES of the nums array
        for(const n of nums){

            //check if the numSet has the same value, if it does, return true
            if(numSet.has(n)){
                return true;
            }

            //if it does not, add the value to the numSet set
            numSet.add(n);
        }
        return false;
    }

    /*
    2. Valid Anagram

    Given two strings s and t, return true if the two strings are anagrams of each other, 
    otherwise return false.

    An anagram is a string that contains the exact same characters as another string, 
    but the order of the characters can be different.

    Example 1:

    Input: s = "racecar", t = "carrace"
    Output: true

    Example 2:

    Input: s = "jar", t = "jam"
    Output: false

    Constraints:
    s and t consist of lowercase English letters.
    */
   isAnagram(s: string, t: string): boolean {
        return true;    
   }
}

//creating an instance to call over the solution methods:
const solInstance = new Solution();

solInstance.hasDuplicate([1,2,3,4,4,1])
solInstance.isAnagram('racecar', 'carrace');
