var url = "https://api.myjson.com/bins/udbm5";

fetch(url)
    .then(function (response) {
        //    console.log(response) ("Request succeeded")
        return response.json();
    })
    .then(json => {

        let allBooks = json.books

        let bookCover = allBooks.portada
        let bookCoverDetailed = allBooks.detalle
        let bookTitle = allBooks.titulo
        let bookDescription =
            allBooks.descripcion
        let language = allBooks.idioma

//        console.log(allBooks[0].portada)

       createBookCoverArray(allBooks)

    })



function createBookCoverArray(allBooks) {
    
    let bookCover = allBooks[0].portada;
    bookCoverArray = [];
    
    bookCoverArray.push(allBooks.map((allBooks => {
            return bookCover;
        })))
                        
console.log(bookCoverArray)
}

//createBookCoverArray()
