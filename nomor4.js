function groupAnagrams(words){
    let recordStr ={};
    let hasil = [];
    for(let i = 0; i<words.length;i++){
        let str = words[i].toLowerCase().split('').sort().join('');
        if (recordStr[str]!==undefined) {
            hasil[recordStr[str]].push(words[i]);
        } else {
            hasil.push([words[i]]);
            recordStr[str] = hasil.length - 1;
        }
    }
    return hasil;

}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))