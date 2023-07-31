// I am assuming the space character is valid here.
function firstNonRepeated(s: string) {
    const EMPTY_STRING = "";

    // Here we store characters in a hashmap with their freq
    // then check that hm at the end for the first non-repeated char
    var hm = new Map<string, boolean>();

    for (var i = 0; i < s.length; i ++){
        if (hm.has(s[i])) {
            hm.set(s[i], false);
        } else {
            hm.set(s[i], true);
        }
    }

    // return first non-repeated char
    var nonRepeatedChar = EMPTY_STRING;
    // to flag first occurance
    var flag = true;
    hm.forEach((isNotRepeated: boolean, key: string) => {
        if (flag && isNotRepeated) {
            flag = false;
            nonRepeatedChar = key;
        }
    });

    return nonRepeatedChar;
}