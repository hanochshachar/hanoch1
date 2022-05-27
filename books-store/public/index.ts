interface Book{
    image: File,
    name: string,
    price: number,
    serialNo: string
}

let addBook:Array <Book> = [];

let html = "";
function handleUpBook(ev){
   const image = ev.target.element.image.value
   const name = ev.target.element.namOfBook.value
   const price = ev.target.element.price.value
   

}