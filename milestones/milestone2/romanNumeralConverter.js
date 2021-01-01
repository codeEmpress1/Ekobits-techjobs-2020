function convertToRoman(num) {
    const romanStore = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let resultStore = "";
    for (let romanKey in romanStore) {
        let romanValue = romanStore[romanKey]
        while (num >= romanValue) {
            num -= romanValue;
            resultStore += romanKey;
        }
    }
    return resultStore;
}