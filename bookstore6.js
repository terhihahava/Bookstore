var url = "https://api.myjson.com/bins/udbm5";

fetch(url)
    .then(function (response) {
        //    console.log(response) ("Request succeeded")
        return response.json();
    })
    .then(json => {

        //    console.log(json.books)

        let allBooks = json.books

        let bookCover = allBooks.portada
        let bookCoverDetailed = allBooks.detalle
        let bookTitle = allBooks.titulo
        let bookDescription =
            allBooks.descripcion
        let language = allBooks.idioma



        //                createImage(allBooks)
        createFilteredBooks(allBooks)


    })



function createImage(allBooks) {

    var flipCardContainer = document.getElementById("allMyBooks");

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
        bookImage.setAttribute('src', allBooks[i].portada);
        flipCardFront.appendChild(bookImage);


        flipCardBack = document.createElement("div");
        flipCardBack.setAttribute("class", "flip-card-back");
        flipCardInner.appendChild(flipCardBack);

        var bookTitle = document.createElement("h1");
        bookTitle.innerHTML = allBooks[i].titulo;
        bookTitle.setAttribute("class", "book-title");
        flipCardBack.appendChild(bookTitle);

        var bookDescription = document.createElement("p");
        bookDescription.innerHTML = allBooks[i].descripcion;
        bookTitle.setAttribute("class", "book-description");
        flipCardBack.appendChild(bookDescription);

        var button = document.createElement("button");
        button.setAttribute("class", "myButton");
        flipCardBack.appendChild(button);

        var a = document.createElement("a");
        a.setAttribute("class", "fancybox");
        a.setAttribute("data-fancybox", "gallery");
        a.setAttribute("href", allBooks[i].detalle);
        a.setAttribute("src", allBooks[i].detalle);
        a.innerHTML = "Read more";
        button.appendChild(a);

        console.log(a)


        flipCardContainer.appendChild(flipCard);
    }



}


function createFilteredBooks(allBooks) {


    let searchButton = document.getElementById("search-button")
    searchButton.addEventListener("click", function (e) {

        const searchField = document.forms["search-bar"].querySelector("input");
        const term = searchField.value.toLowerCase();

        console.log(term)

        var flipCardContainer = document.getElementById("allMyBooks");
        
        flipCardContainer.innerHTML=null;


        for (var i = 0; i < allBooks.length; i++) {


            if (allBooks[i].titulo.toLowerCase().includes(term) || allBooks[i].descripcion.toLowerCase().includes(term)) {
                
                console.log(allBooks[i].titulo)

                var flipCard = document.createElement("div");
                flipCard.setAttribute("class", "flip-card");


                var flipCardInner = document.createElement("div");
                flipCardInner.setAttribute("class", "flip-card-inner");
                flipCard.appendChild(flipCardInner);

                flipCardFront = document.createElement("div");
                flipCardFront.setAttribute("class", "flip-card-front");
                flipCardInner.appendChild(flipCardFront);


                var bookImage = document.createElement("IMG");
                bookImage.setAttribute('src', allBooks[i].portada);
                flipCardFront.appendChild(bookImage);


                flipCardBack = document.createElement("div");
                flipCardBack.setAttribute("class", "flip-card-back");
                flipCardInner.appendChild(flipCardBack);

                var bookTitle = document.createElement("h1");
                bookTitle.innerHTML = allBooks[i].titulo;
                bookTitle.setAttribute("class", "book-title");
                flipCardBack.appendChild(bookTitle);

                var bookDescription = document.createElement("p");
                bookDescription.innerHTML = allBooks[i].descripcion;
                bookTitle.setAttribute("class", "book-description");
                flipCardBack.appendChild(bookDescription);

                var button = document.createElement("button");
                button.setAttribute("class", "myButton");
                flipCardBack.appendChild(button);

                var a = document.createElement("a");
                a.setAttribute("class", "fancybox");
                a.setAttribute("data-fancybox", "gallery");
                a.setAttribute("href", allBooks[i].detalle);
                a.setAttribute("src", allBooks[i].detalle);
                a.innerHTML = "Read more";
                button.appendChild(a);


                flipCardContainer.appendChild(flipCard);
            }
        }
    })
}









//            var flipCardContainer = document.getElementById("allMyBooks");
//
//            var flipCard = document.createElement("div");
//            flipCard.setAttribute("class", "flip-card");
//
//
//            var flipCardInner = document.createElement("div");
//            flipCardInner.setAttribute("class", "flip-card-inner");
//            flipCard.appendChild(flipCardInner);
//
//            flipCardFront = document.createElement("div");
//            flipCardFront.setAttribute("class", "flip-card-front");
//            flipCardInner.appendChild(flipCardFront);
//
//
//            var bookImage = document.createElement("IMG");
//            bookImage.setAttribute('src', bookCoverResults[i]);
//            flipCardFront.appendChild(bookImage);
//
//            flipCardBack = document.createElement("div");
//            flipCardBack.setAttribute("class", "flip-card-back");
//            flipCardInner.appendChild(flipCardBack);
//
//            var bookTitle = document.createElement("h1");
//            bookTitle.innerHTML = bookTitleResults[i];
//            flipCardBack.appendChild(bookTitle);
//
//            var bookDescription = document.createElement("p");
//            bookDescription.innerHTML = bookDescriptionResults[i];
//            bookTitle.setAttribute("class", "book-description");
//            flipCardBack.appendChild(bookDescription);
//
//            var button = document.createElement("button");
//            button.innerHTML = "Read more";
//            button.setAttribute("class", "myButton");
//            flipCardBack.appendChild(button);
//           
//
//            flipCardContainer.appendChild(flipCard);

//        }
//
//    })
//
//
//}


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
