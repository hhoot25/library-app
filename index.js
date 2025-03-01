const myLibrary = [{author: 'harry', pages:50, readStatus:true}, {author: 'bob', pages:45, readStatus:true}];
const container = document.querySelector('#container');

function Book(author,pages,readStatus){
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(author,pages,readStatus){
    let book = new Book(author,pages,readStatus);
    myLibrary.push(book);
}

function loopLibrary(){
    myLibrary.forEach(function(item){
        const book = document.createElement("div");
        book.className += " book";
        book.innerHTML=item.author;

        container.appendChild(book);
    });
}

loopLibrary();