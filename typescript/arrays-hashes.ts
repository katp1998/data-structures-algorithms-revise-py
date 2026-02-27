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
        if(s.length === t.length){
            let sArr = s.split('').sort().join();
            let tArr = t.split('').sort().join();
            return sArr == tArr;
        }
        return false;
   }

   /**
    * 
    * 3. Two Sum
    Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

    You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

    Return the answer with the smaller index first.

    Example 1:

    Input: 
    nums = [3,4,5,6], target = 7
    Output: [0,1]

    Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

    Example 2:

    Input: nums = [4,5,6], target = 10
    Output: [0,2]

    Example 3:

    Input: nums = [5,5], target = 10
    Output: [0,1]

    Constraints:

    2 <= nums.length <= 1000
    -10,000,000 <= nums[i] <= 10,000,000
    -10,000,000 <= target <= 10,000,000
    Only one valid answer exists.
    * 
    */
   twoSum(nums:number[], target: number): number[] {
        let arr: number[] = [];
        for(let i = 0; i<nums.length; i++){
            for (let j = i+1; j<nums.length; j++){
                if(nums[i]+nums[j] == target){
                    arr.push(i,j);
                }
                arr.sort();
            }
        }
        return arr;
   }
}

//creating an instance to call over the solution methods:
const solInstance = new Solution();

solInstance.hasDuplicate([1,2,3,4,4,1])
solInstance.isAnagram('racecar', 'carrace');
