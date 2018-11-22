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
//        createFilteredBooks(allBooks)

        //        createPopUp(allBooks)



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

    //    console.log(bookCoverArray)
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

    //    console.log(bookTitleArray)
}


function createBookCoverDetailedArray(allBooks) {

    bookCoverDetailedArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        bookCoverDetailedArray.push(allBooks[i].detalle)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    //    console.log(bookTitleDetailedArray)
}

function createBookDescriptionArray(allBooks) {

    bookDescriptionArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        bookDescriptionArray.push(allBooks[i].descripcion)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    //    console.log(bookDescriptionArray)
}

function createLanguageArray(allBooks) {

    languageArray = [];

    for (var i = 0; i < allBooks.length; i++) {

        languageArray.push(allBooks[i].idioma)

        //    bookTitleArray.push(allBooks.map((allBooks => {
        //        return bookTitle;
        //    })))
    }

    //    console.log(languageArray)
}

function createImage(allBooks) {

    var flipCardContainer = document.getElementById("allMyBooks");
    //    console.log(flipCardContainer)

    for (var i = 0; i < allBooks.length; i++) {
        var flipCard = document.createElement("div");
        flipCard.setAttribute("class", "flip-card");


        var flipCardInner = document.createElement("div");
        flipCardInner.setAttribute("class", "flip-card-inner");
        flipCard.appendChild(flipCardInner);

        flipCardFront = document.createElement("div");
        flipCardFront.setAttribute("class", "flip-card-front");
        flipCardInner.appendChild(flipCardFront);


        var bookImage = document.createElement("IMG");
        bookImage.setAttribute('src', bookCoverArray[i]);
        flipCardFront.appendChild(bookImage);


        flipCardBack = document.createElement("div");
        flipCardBack.setAttribute("class", "flip-card-back");
        flipCardInner.appendChild(flipCardBack);

        var bookTitle = document.createElement("h1");
        bookTitle.innerHTML = bookTitleArray[i];
        bookTitle.setAttribute("class", "book-title");
        flipCardBack.appendChild(bookTitle);

        var bookDescription = document.createElement("p");
        bookDescription.innerHTML = bookDescriptionArray[i];
        bookTitle.setAttribute("class", "book-description");
        flipCardBack.appendChild(bookDescription);

        var button = document.createElement("button");
        button.innerHTML = "Read more";
        button.setAttribute("class", "myButton");
        flipCardBack.appendChild(button);

        flipCardContainer.appendChild(flipCard);
    }



}


function createFilteredBooks(allBooks) {

    let bookCoverResults = [];
    let bookCoverDetailedResults = [];
    let bookTitleResults = [];
    let bookDescriptionResults = [];
    let bookLanguageResults = [];

    let searchButton = document.getElementById("search-button")
    searchButton.addEventListener("click", function (e) {

        const searchField = document.forms["search-bar"].querySelector("input");
        const term = searchField.value.toLowerCase();

        console.log(term)


        for (var i = 0; i < allBooks.length; i++) {


            if (bookTitleArray[i].toLowerCase().indexOf(term) != -1 || bookDescriptionArray[i].toLowerCase().indexOf(term) != -1) {

                bookCoverResults.push(bookCoverArray[i]);
                bookCoverDetailedResults.push(bookCoverDetailedArray[i]);
                bookTitleResults.push(bookTitleArray[i]);
                bookDescriptionResults.push(bookDescriptionArray[i]);

            }
        }
        console.log(bookTitleResults)

        for (var i = 0; i < bookDescriptionResults.length; i++) {

            //            console.log(bookDescriptionResults[i])


            var flipCardContainer = document.getElementById("allMyBooks");

            var flipCard = document.createElement("div");
            flipCard.setAttribute("class", "flip-card");


            var flipCardInner = document.createElement("div");
            flipCardInner.setAttribute("class", "flip-card-inner");
            flipCard.appendChild(flipCardInner);

            flipCardFront = document.createElement("div");
            flipCardFront.setAttribute("class", "flip-card-front");
            flipCardInner.appendChild(flipCardFront);


            var bookImage = document.createElement("IMG");
            bookImage.setAttribute('src', bookCoverResults[i]);
            flipCardFront.appendChild(bookImage);

            flipCardBack = document.createElement("div");
            flipCardBack.setAttribute("class", "flip-card-back");
            flipCardInner.appendChild(flipCardBack);

            var bookTitle = document.createElement("h1");
            bookTitle.innerHTML = bookTitleResults[i];
            flipCardBack.appendChild(bookTitle);

            var bookDescription = document.createElement("p");
            bookDescription.innerHTML = bookDescriptionResults[i];
            bookTitle.setAttribute("class", "book-description");
            flipCardBack.appendChild(bookDescription);

            var button = document.createElement("button");
            button.innerHTML = "Read more";
            button.setAttribute("class", "myButton");
            flipCardBack.appendChild(button);

            flipCardContainer.appendChild(flipCard);

        }

    })
}

//function createPopUp(allBooks) {
//
//    var myPopUp = document.createElement("div");
//    myPopUp.setAttribute("class", "my-pop-up");
//
//    var myPopUpContent = document.createElement("div");
//    myPopUpContent.setAttribute("class", "my-pop-up-content");
//    myPopUp.appendChild(myPopUpContent);
//
//    var bookImageDetailed = document.createElement("IMG");
//    bookImageDetailed.setAttribute('src', bookCoverDetailedArray[i]);
//    myPopUpContent.appendChild(bookImageDetailed);
//
//    var closePopUp = document.createElement("span");
//    closePopUp.setAttribute("class", "close");
//    myPopUpContent.appendChild(closePopUp);
//
//    imageButton.appendChild(myPopUp)
//
//    let imageButton = document.getElementById("myButton")
//    imageButton.addEventListener("click", function () {
//        
//        myPopUp.style.display = "block";
//
//
//    })
//}
//
//
//btn.onclick = function () {
//    modal.style.display = "block";
//}



//function createPopUp(allBooks) { 
//    
//    let imageButton = document.getElementById("myButton")
//    imageButton.addEventListener("click", function (e) { 
//        
//    imageButton.classList.toggle("show")}
//                                 )
//    
//    
//}








//                function searchForKeyWords(allBooks) {
//
//                    let searchButton = document.getElementById("search-button")
//                    searchButton.addEventListener("click", function (e) {
//
//                            const searchField = document.forms["search-bar"].querySelector("input");
//                            const term = searchField.value.toLowerCase();
//
//                            console.log(term)
//
//                            for (var i = 0; i < allBooks.length; i++) {
//
//                                if (bookTitleArray[i].toLowerCase().indexOf(term) != -1) {
//                                    bookImage.style.display = ""
//                                };
//
//                                //             else {allBooks[i]style.display="none"}
//                            }
//
//
//
//                        }
//
//
//                    )




//        allBooks.forEach(function (book) {
//            const title = bookTitleArray.textContent;
//
//            if (title.toLowerCase().indexOf(term) != -1) {
//                book.style.display = ""
//            };
//            //                else {
//            //                    book.style.display = "none"
//            //                }
//        })

//    })



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
