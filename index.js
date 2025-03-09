const myLibrary = [];
const container = document.querySelector('#container');

const dialog = document.querySelector('#dialog');
const myForm = document.querySelector('#myForm');
const confirm = document.querySelector('#confirmBtn');
const select = document.querySelector('select');

let index = 0;
//restructured to class
// function Book(title, author,pages,readStatus){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
// }

class Book{
    constructor(title, author,pages,readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

}

Book.prototype.changeStatus = function() {
    if (this.readStatus === "Read") {
        this.readStatus = "Unread";

    } else if (this.readStatus === "Unread") {
        this.readStatus = "Currently Reading";
    } else {
        this.readStatus = "Read";
    }
    loopLibrary();
};

function addBookToLibrary(book){
    myLibrary.push(book);
    
}

function loopLibrary(){
    //clear container after each submit
    container.innerHTML ='';
    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement("div");
        book.className += " book";
        item = myLibrary[i];

        const title = document.createElement("div");
        title.className += "title";
        title.innerHTML = `Title: ${item.title}`;

        const author = document.createElement("div");
        author.className += "author";
        author.innerHTML = `Author: ${item.author}`;

        const pages = document.createElement("div");
        pages.className += "pages";
        pages.innerHTML = `Pages: ${item.pages}`;


        const read = document.createElement("btn");
        if (item.readStatus === "Read") {
            read.className += "read";
        }
        if (item.readStatus === "Unread") {
            read.className += "unread";
        }
        if (item.readStatus === "Currently Reading"){
            read.className += "current";
        }
        read.innerHTML = `${item.readStatus}`;

        const del = document.createElement("btn");
        del.className += "delete";
        del.innerHTML = "x";

        book.dataset.index = i;

        del.addEventListener("click",() => {
            myLibrary.splice(parseInt(book.dataset.index),1);
            loopLibrary();

        });

        read.addEventListener("click",()=>{
            myLibrary[i].changeStatus();
        });

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(del);

        container.appendChild(book);
    };

    const goForm = document.createElement("div");
    goForm.id = "goForm";
    goForm.innerHTML="+";
    container.appendChild(goForm);

    //clicking + sign opens dialog
    goForm.addEventListener("click",() => {
        dialog.showModal();
    });


}


//get rid of default submit and send select value to close event listener
confirmBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    // Collect form data properly
    const formData = new FormData(myForm);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const readStatus = formData.get("readStatus");

    // Create a new Book instance with correct arguments
    const bookObj = new Book(title, author, pages, readStatus);

    dialog.close(JSON.stringify(bookObj));
});

dialog.addEventListener("close", (event) => {
    const bookObj = JSON.parse(dialog.returnValue);
    
    // Convert plain object to a Book instance
    const book = new Book(bookObj.title, bookObj.author, bookObj.pages, bookObj.readStatus);
    
    addBookToLibrary(book);
    loopLibrary();
});

loopLibrary();