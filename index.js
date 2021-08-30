/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let sm = nums1
    let lg = nums2
    if (nums1.length>nums2.length){
        sm = nums2
        lg = nums1
    }
    const result = []
    sm.forEach(num => {
    if (lg.filter(el => el===num).length>0 && result.filter(el => el===num).length<lg.filter(el => el===num).length){
        result.push(num)
        }
    })
    return result
};