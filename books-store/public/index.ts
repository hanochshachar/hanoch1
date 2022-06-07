

let html = "";
async function handleUpBook(ev){
   const image = ev.target.element.bookImage.value
   const name = ev.target.element.namOfBook.value
   const price = ev.target.element.price.value

   const {data} = await axios.post('/books/booksStore')
   console.log(data)


}