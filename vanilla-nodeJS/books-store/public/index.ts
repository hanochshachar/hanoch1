interface Book {
  image: String,
  name: string,
  description: string,
  price: any,
  serialNo: string
}




async function handleUpBook(ev) {
  ev.preventDefault();
  try {
    console.log('handleUpBook', ev.target.elements);
    const image = ev.target.elements.bookImg.value;
    const name = ev.target.elements.name.value;
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.value;

    //@ts-ignore
    const { data } = await axios.post("/booksStore", { image, name, description, price });
    console.log('booksStore', data);
    const { addBook } = data;
    renderBook(addBook)

    ev.target.reset()
  } catch (error) {
    console.log('error', error);
  }
}

function renderBook(books: Array<Book>) {

  const htmlBooksHolder = document.querySelector("#books");
  let html = "";
  books.forEach(book => {
    html += `<div class='book'>
    <img src="${book.image}"  id="bookImg">  
    <p>${book.name} </p> 
     <p class="des" >description: ${book.description} </p>  <button class="des" onclick="handleUpdateDesc( '${book.serialNo}')" class="buttonUp">update</button> <br>
   <p class="price" >price: ${book.price} nis </p> <button class="price" onclick="handleUpdatePrice( '${book.serialNo}')" class="buttonUp">update</button>  <br>
   <button onclick="handleDeleteBook('${book.serialNo}')"  class="buttonUp">delete</button>
   </div>`
  });

  htmlBooksHolder.innerHTML = html;
}

async function getBook() {

  try {


    //@ts-ignore
    const { data } = await axios.get("/booksStore");
    console.log(data);
    const { addBook, error } = data;
    if (error) throw new Error(error.message)
    if (addBook) {
      renderBook(addBook)
    }
  } catch (error) {
    console.log(error)
  }
}

async function handleUpdateDesc(serialNo) {
  try {
    const description: string = prompt("pleas enter description!");
    //@ts-ignore
    const { data } = await axios.put('/updateDesc', { serialNo, description })
    const { addBook } = data;
    renderBook(addBook)




  } catch (error) {
    console.log(error)
  }

}

async function handleUpdatePrice(serialNo) {
  try {
    const price = prompt("pleas enter price!");
    //@ts-ignore
    const { data } = await axios.put('/updatePrice', { serialNo, price })
    console.log(data)
    const { addBook } = data;
    console.log(addBook)
    renderBook(addBook)




  } catch (error) {
    console.log(error)
  }
}

async function handleDeleteBook(serialNo) {
  try {
    //@ts-ignore
    const { data } = await axios.delete('/deleteBook', { data: { serialNo } });
    const { addBook, error } = data
    if (error) throw new Error(error);
    console.log(addBook)
    renderBook(addBook)


  } catch (error) {
    console.log(error)
  }
}






async function renderClientBook(books: Array<Book>) {
  try {
    const client = document.querySelector('#clientBody');
    //@ts-ignore

    let html1 = "";
    books.forEach(book => {
      html1 += `<div id="wrapperClient" >
         <img src="${book.image}" alt="" id="imgClient">
      <h1>${book.name}</h1>
      <p>description:${book.description} </p>
      <h1>price: ${book.price} nis</h1>
      <button onclick="handleCart('${book.serialNo}')">add to cart</button>
      </div>`


    })

    

    client.innerHTML = html1;


  } catch (error) {
    console.log(error)
  }
}

async function getClientList(ev) {
  try {
    ev.preventDefault();
    //@ts-ignore
    const { data: { addBook } } = await axios.get('/clientGet');
    renderClientBook(addBook)



  } catch (error) {
    console.log(error, 'an error occurred');
  }

}


function renderCart(clientCart: Array<Book>) {
  try {
    console.log(clientCart)
    const cartBody = document.querySelector('#cartBody')
    let html = "<div class='cartGrid'>";
    clientCart.forEach(book => {
      console.log(book)
      html += `<div id="clientCart">
      <img src="${book.image}" alt="" id="imgCart">
      <h1>${book.name}</h1>
      <p>description: ${book.description}</p>
      <h1>price: ${book.price}</h1>
      <button onclick="deleteFromCart('${book.serialNo}')">delete from cart</button>

  </div>`
    })
    html +='</div>'
    const total = clientCart.reduce((acc, item) => !isNaN(item.price) ? acc + parseFloat(item.price) : acc, 0);
    html += ` <br> <br> <br> <h1>total to pay ${total} nis</h1>`
    cartBody.innerHTML = html;

   


  } catch (error) {
    console.log(error)
  }
}

async function handleCart(serialNo) {
  console.log(serialNo)

  try {
    //@ts-ignore
    const { data } = await axios.post('/clientCart', { serialNo })
    console.log(data)
    const { ok, clientCart, message } = data;
    if (ok === true) {
      alert('The Item is in the cart')
    } else {
      alert(message)
    }

  } catch (error) {
    console.log(error)
  }
}

async function cartGet() {
  try {
    //@ts-ignore
    const { data } = await axios.get('/clientCart')
    const { clientCart } = data;
    renderCart(clientCart);

  } catch (error) {
    console.log(error)

  }
}

async function deleteFromCart(serialNo){

  try {
    //@ts-ignore
    const {data} = await axios.delete('/deleteCart', { data:{serialNo}})
    const {clientCart , error} = data;
    if (error) throw new Error(error);
    renderCart(clientCart)


  } catch (error) {
    console.log(error);
    
    
  }
}

