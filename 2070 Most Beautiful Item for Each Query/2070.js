/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    if (queries.length < 13) {
        //13 is < log2(10^5) so it may be better than sorting
        for (let i = 0; i<queries.length; i++) {
        const p = queries[i];
        let maxBeauty = 0;
        for (let [price, beauty] of items) {
            if(price <= p) {
                if (beauty > maxBeauty)
                    maxBeauty = beauty;
            }
        }
        queries[i] = maxBeauty;
        }
        return queries;

    }


    const priceToMaxBeauty = new Map();
    let maxBeauty = 0;
    let priceOfMaxBeauty = Infinity;

    for (let [price, beauty] of items) {
        if (beauty > maxBeauty) {
            maxBeauty = beauty;
            priceOfMaxBeauty = price;
        }
        else if (beauty === maxBeauty) {
            if (price < priceOfMaxBeauty) {
                maxBeauty = beauty;
                priceOfMaxBeauty = beauty;
            }
        }
        if (price <= priceOfMaxBeauty) {
            if (priceToMaxBeauty.has(price)) {
                priceToMaxBeauty.set(
                    price,
                    Math.max(priceToMaxBeauty.get(price), beauty)
                );
            }
            else {
                priceToMaxBeauty.set(price, beauty);
            }
        }
    }


    const sorted = [...priceToMaxBeauty.entries()]
        .filter(a => a[0] <= priceOfMaxBeauty)
        .sort((a, b) => a[0] - b[0]);


    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i][1] < sorted[i - 1][1])
            sorted[i][1] = sorted[i - 1][1];
    }


    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        if (q >= priceOfMaxBeauty) {
            queries[i] = maxBeauty;
        }
        else if (q < sorted[0][0]) {
            queries[i] = 0;
        }
        else {
            let a = 0;
            let b = sorted.length - 1;
            queries[i] = sorted[bisect(sorted, a, b, q)][1];
        }
    }

    return queries;

};

function bisect(arr, a, b, q) {
    while (b >= a) {
        mid = Math.floor((a + b) / 2);
        if (q === arr[mid][0]) {
            return mid;
        }
        else if (q < arr[mid][0]) {
            b = mid - 1;
        }
        else {
            a = mid + 1;
        }
    }
    return a - 1;
}
