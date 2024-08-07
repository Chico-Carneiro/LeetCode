/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) return "Zero";
    const mapper = {
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        "10": "Ten",
        "11": "Eleven",
        "12": "Twelve",
        "13": "Thirteen",
        "14": "Fourteen",
        "15": "Fifteen",
        "16": "Sixteen",
        "17": "Seventeen",
        "18": "Eighteen",
        "19": "Nineteen",
        "20": "Twenty",
        "30": "Thirty",
        "40": "Forty",
        "50": "Fifty",
        "60": "Sixty",
        "70": "Seventy",
        "80": "Eighty",
        "90": "Ninety",
        "100": "Hundred",
        1000: "Thousand",
        2000: "Million",
        3000: "Billion"
    }
    const str = num.toString();

    const batches = Math.ceil(str.length / 3);
    let res = [];
    for (let i = batches - 1; i >= 0; i--) {
        let partialRes = [];
        const strAux = str.substring(str.length - (i + 1) * 3, str.length - i * 3);
        const aux = Array(3);
        for (let i = strAux.length; i >= 0; i--)
            aux.push(strAux[i]);
        for (let i = 0; i < 3 - strAux.length; i++)
            aux.push("0");
        const sub = aux.join('');
        if (sub[2] !== "0") {
            partialRes.push(mapper[sub[2]]);
            partialRes.push(mapper["100"]);
        }
        if (sub[1] === "1") {
            partialRes.push(mapper[sub[1] + sub[0]]);
        }
        else {
            if (sub[1] !== "0") {
                partialRes.push(mapper[sub[1] + "0"]);
                if (sub[0] !== "0")
                    partialRes.push(mapper[sub[0]]);
            }
            else {
                if (sub[0] !== "0")
                    partialRes.push(mapper[sub[0]]);
            }

        }
        res.push(...partialRes);
        if (i > 0 && sub !== "000") {
            res.push(mapper[i * 1000]);
        }
    }
    return res.join(' ')

};
