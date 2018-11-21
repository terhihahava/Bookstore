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

function createFancyBox() {


    var fancyBoxcontainer = document.getElementById("bookLibrary");
    
    for (var i = 0; i < allBooks.length; i++) {
    
     <a href="bookCoverArray[i]" data-fancybox="gallery" data-caption="Caption">
            <img src="thumbnail_1.jpg" alt="" />
        </a>


    var row = tablebody1.insertRow();

    row.insertCell().innerHTML = "Democrats";
    


}
