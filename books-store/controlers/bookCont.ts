

interface Book{
  image: File,
  name: string,
  price: number,
  description: string,
  serialNo: string
}

let addBook:Array <Book> = [];



export function postBook(req, res) {
  try {
    const { image, name, price, description } = req.body;
    if (!image) throw new Error("image is required");
    if (!name) throw new Error("name is required");
    if (!price) throw new Error("price is required");
    

    const bookDetail = { image, name, price, description,  serialNo:uid() };
    addBook.push(bookDetail);
    res.send({ addBook });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export function getBook(req, res){
  try {
     res.send({addBook}) 
  } catch (error) {
      res.send({ error: error.message }); 
  }
}

function uid(){
  const id = "id" + Math.random().toString(16).slice(2)
  return id
}



