const myLibrary = [{title:"Cat and the Hat",author: 'harry', pages:50, readStatus:'read'}, {title:"Story of My Life", author: 'bob', pages:45, readStatus:'Haven\'t started'}];
const container = document.querySelector('#container');

const dialog = document.querySelector('#dialog');
const myForm = document.querySelector('#myForm');
const confirm = document.querySelector('#confirmBtn');
const select = document.querySelector('select');

function Book(title, author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book){
    myLibrary.push(book);
    
}

function loopLibrary(){
    //clear container after each submit
    container.innerHTML ='';
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
    const formObj = new Book();
    //make array of obj name:value
    const form = document.querySelector('#myForm');
    const formData = new FormData(myForm);

    formData.forEach((value,key) => {
        console.log(`key: ${key} , value: ${value}`);
        formObj[key] = value;
        console.log(JSON.stringify(formObj));

    });
    dialog.close(JSON.stringify(formObj));
});

dialog.addEventListener("close",(event)=>{

    const bookObj = JSON.parse(dialog.returnValue);
    addBookToLibrary(bookObj);
    loopLibrary();
});

loopLibrary();