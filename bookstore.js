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
        createBookTitleArray(allBooks)
        createBookCoverDetailedArray(allBooks)
        createBookDescriptionArray(allBooks)
        createLanguageArray(allBooks)

        createImage(allBooks)



    })



function createBookCoverArray(allBooks) {


    //    console.log(allBooks)
    //    console.log(allBooks[0])
    //    console.log(allBooks[0].portada)
    //    console.log(allBooks[1].portada)


    bookCoverArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        bookCoverArray.push(allBooks[i].portada)

        //    bookCoverArray.push(allBooks.map((allBooks => {
        //        return bookCover;
        //    })))

    }

    console.log(bookCoverArray)
}

//createBookCoverArray()


function createBookTitleArray(allBooks) {

    bookTitleArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        bookTitleArray.push(allBooks[i].titulo)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    console.log(bookTitleArray)
}


function createBookCoverDetailedArray(allBooks) {

    bookTitleDetailedArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        bookTitleDetailedArray.push(allBooks[i].detalle)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    console.log(bookTitleDetailedArray)
}

function createBookDescriptionArray(allBooks) {

    bookDescriptionArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        bookDescriptionArray.push(allBooks[i].descripcion)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    console.log(bookDescriptionArray)
}

function createLanguageArray(allBooks) {

    languageArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        languageArray.push(allBooks[i].idioma)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    console.log(languageArray)
}

function createImage(allBooks) {

    for (var i = 0; i < allBooks.length; i++) {

        var imageContainer = document.getElementById("bookLibrary");
        var bookImage = document.createElement("IMG");
        bookImage.setAttribute('src', bookCoverArray[i]);
        imageContainer.appendChild(bookImage);

    }
}


//
//function createFancyBox(allBooks) {
//    
//    $("img").fancybox();
//    //document.querySelectorAll("img")
//
//
//    var imageContainer = document.getElementById("bookLibrary");
//
//    for (var i = 0; i < allBooks.length; i++) {
//
//        var bookImage = document.createElement("IMG");
//        bookImage.setAttribute('src', bookCoverArray[i]);
//        bookImage.setAttribute("data-fancybox", "gallery");
//        bookImage.setAttribute("alt", "bookTitleArray")
//        fancyBoxcontainer.appendChild(bookImage);
//
//        var a = document.createElement("a");
//        a.setAttribute('href', bookCoverArray[i]);
//        bookImage.appendChild(a);
//
//        //             <a href="bookCoverArray[i]" data-fancybox="gallery" data-caption="Caption">
//        //                    <img src="thumbnail_1.jpg" alt="" />
//        //                </a>
//
//
//    }
//

