/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    let lastBookInEachShelf = [];
    let lastBookHeight = [];
    let thickOfFirstBookInShelf = [];
    thickOfFirstBookInShelf.push(books[0][0]);
    let thickOfLastBookInShelf = [];
    let maxHeightInShelf = [];
    let maxHeightInThisShelf = 0;
    let maxHeightInShelfIndex = 0;
    let freeSpacePerShelf = [];
    let bookSpaceInShelf = 0;
    for (let i = 0; i<books.length; i++) {
        let bookThick = books[i][0];
        if (bookSpaceInShelf + bookThick < shelfWidth) {
            bookSpaceInShelf+= bookThick;
            if(books[i][1]>maxHeightInThisShelf) {
                maxHeightInThisShelf = books[i][1];
                maxHeightInShelfIndex = i;
            }

        }
        else {
            
            lastBookInEachShelf.push(i-1);
            lastBookHeight.push(books[i-1][1])
            thickOfLastBookInShelf.push(books[i-1][0])
            freeSpacePerShelf.push(shelfWidth-bookSpaceInShelf)

            maxHeightInShelf.push(maxHeightInThisShelf);
            maxHeightInThisShelf = books[i][1]
            maxHeightInShelfIndex = i;

            bookSpaceInShelf = bookThick;
            thickOfFirstBookInShelf.push(books[i][0])

        }

    }
    
    lastBookInEachShelf.push(books.length - 1);
    thickOfLastBookInShelf.push(books[books.length-1][0])
    freeSpacePerShelf.push(shelfWidth-bookSpaceInShelf)
    maxHeightInShelf.push(maxHeightInThisShelf);
    lastBookHeight.push(books[books.length-1][1])

    console.log("lastBookInEachShelf", lastBookInEachShelf)
    console.log("thickOfFirstBookInShelf", thickOfFirstBookInShelf)
    console.log("thickOfLastBookInShelf", thickOfLastBookInShelf)
    console.log("freeSpacePerShelf", freeSpacePerShelf)
    console.log("maxHeightInShelf", maxHeightInShelf)
    console.log("lastBookHeight", lastBookHeight)
};
