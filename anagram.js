function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
       count[char]--;
    }
    return true;
}
console.log(`1: anagram - nagaram = ${isAnagram("anagram", "nagaram")}`);
console.log(`2: rat - car = ${isAnagram("rat", "car")}`);