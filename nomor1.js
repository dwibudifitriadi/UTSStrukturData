function longestConsecutiveSequence(nums){
    nums = nums.sort((a,b) => a - b);
    nTerbesar = 0;
    nSementara = 0;
    for (let i = 0; i< nums.length;i++){
        if (nums[i -1]=== undefined|| nums[i]-nums[i-1]==1) {
            nSementara++;
        } else{
            nTerbesar = 1;
        }
        nTerbesar = Math.max(nSementara, nTerbesar);
    }
    return nTerbesar;
}
console.log(longestConsecutiveSequence([100,4,200,1,3,2]))
console.log(longestConsecutiveSequence([11,12,13,14,15,1,2,3,4,5,111,222,333]))