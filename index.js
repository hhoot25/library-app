const myLibrary = [{title:"Cat and the Hat",author: 'harry', pages:50, readStatus:true}, {title:"Story of My Life", author: 'bob', pages:45, readStatus:true}];
const container = document.querySelector('#container');

function Book(title, author,pages,readStatus){
    this.title = title;
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

        const title = document.createElement("div");
        title.className += "title";
        title.innerHTML = `Title: ${item.title}`;

        const author = document.createElement("div");
        author.className += "author";
        author.innerHTML = `Author: ${item.author}`;

        const pages = document.createElement("div");
        pages.className += "pages";
        pages.innerHTML = `Pages: ${item.pages}`;


        const read = document.createElement("div");
        read.className += "read";
        read.innerHTML = `Read Status: ${item.readStatus}`;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);

        container.appendChild(book);
    });

    const form = document.createElement("div");
    form.id = "form";
    form.innerHTML="Open Form";
    container.appendChild(form);


}

loopLibrary();