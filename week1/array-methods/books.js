const books = [
    {
        title: 'The Poppy War',
        author: 'R. F. Kuang',
        published: 2018,
        pages: 545,
        rating: 4.17,
        genre: new Set(['historical-fiction', 'high-fantasy', 'dark'])
    },
    {
        title: 'Alchemised',
        author: 'SenLinYu',
        published: 2025,
        pages: 976,
        rating: 4.68,
        genre: new Set(['dark-fantasy', 'romance', 'fiction'])
    },
    {
        title: 'The Secret History',
        author: 'Donna Tartt',
        published: 1992,
        pages: 576,
        rating: 4.17,
        genre: new Set(['dark-academia', 'literary-fiction', 'mystery'])
    },
    {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        published: 2012,
        pages: 422,
        rating: 4.14,
        genre: new Set(['mystery', 'thriller', 'fiction'])
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        published: 2008,
        pages: 384,
        rating: 4.34,
        genre: new Set(['young-adult', 'dystopian', 'science-fiction'])
    },
    {
        title: 'Anne of Green Gables',
        author: 'L. M. Montgomery',
        published: 1908,
        pages: 336,
        rating: 4.32,
        genre: new Set(['classic', 'children\'s-literature', 'fiction'])
    },
    {
        title: 'Pride & Prejudice',
        author: 'Jane Austen',
        published: 1813,
        pages: 448,
        rating: 4.29,
        genre: new Set(['classic', 'literary-fiction', 'romance'])
    },
    {
        title: 'The Handmaid\'s Tale',
        author: 'Margaret Atwood',
        published: 1985,
        pages: 368,
        rating: 4.14,
        genre: new Set(['classic', 'dystopian', 'literary-fiction'])
    },
    {
        title: 'The Invisible Life of Addie LaRue',
        author: 'V. E. SCHWAB',
        published: 2020,
        pages: 448,
        rating: 4.18,
        genre: new Set(['fiction', 'historical-fantasy', 'literary'])
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        published: 1945,
        pages: 152,
        rating: 4.00,
        genre: new Set(['classic', 'literary-fiction', 'dystopian'])
    }
]


// 'filter' method -- filters out the books with at least 550 pages
const longBooks = books.filter((book) => {
    return book.pages >= 550
})
console.log('Books with 550+ pages: ', longBooks)


// 'map' method -- returns an array with each book's title and author
const namesOfBooks = books.map((book) => {
    return book.title + ' by ' + book.author
})
console.log('\nList of all books: ', namesOfBooks)


// 'find' method -- finds a book called Alchemised by SenLinYu
const findBook = books.find((book) => {
    return book.title === 'Alchemised' && book.author === 'SenLinYu'
})
if(findBook) {
    console.log('\nBook found: ', findBook, '\n')
} else {
    console.log('\nBook not found.\n')
}


// 'forEach' method -- prints out the published year for each book
books.forEach((book) => {
    console.log(book.title, 'was published in', book.published)
})


// 'some' method -- checks if there are any classics in the array of books
const classics = books.some((book) => {
    return book.genre.has('classic')
})
console.log('\nSome classics in the array:', classics)


// 'every' method -- checks if every book has a rating of at least 4.00
const highlyRatedBooks = books.every((book) => {
    return book.rating >= 4.00
})
console.log('\nEvery book is rated 4.00+:', highlyRatedBooks)


// 'reduce' method -- sums up the pages of all the books in the array
const totalPages = books.reduce((currPages, book) => {
    return currPages + book.pages
}, 0)
console.log('\nTotal number of pages:', totalPages)


// 'includes' method -- checks if the array includes the book 'Atonement' by Ian McEwan
const includesBook = books.includes((book) => {
    return book.title === 'Atonement' && book.author === 'Ian McEwan'
})
console.log('\nThe array includes Atonement by Ian McEwan:', includesBook)
