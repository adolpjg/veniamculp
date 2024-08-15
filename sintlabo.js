let bStr = "abc123def456";
let bMatch = bStr.match(/\d+|\D+/g) || [];
console.log(bMatch);  // Output: ["abc", "123", "def", "456"]
