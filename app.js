const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")



const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"))

app.set('view engine', 'ejs'); //https://github.com/mde/ejs/wiki/Using-EJS-with-Express

let items = ["Lavar", "Dobrar", "Passar"]
let workItems = []

app.get("/", function(req, res){

  let day = date.getDate()
  // let day = date.getDay()  //testar outra função do módulo date.js


  //segundo parâmetro: javascript object
  res.render("list", {listTitle: day, newListItems: items})
})

app.post("/", function(req, res){
  let item = req.body.newItem

  if(req.body.list === "Work"){
    workItems.push(item)
    res.redirect("/work")
  } else {
    items.push(item)
    // Basicamente, após apertar o botão, entra no método post, no qual passamos o valor de newItem para a variável item
    // Em seguida, damos um redirect para a rota raíz -> "/", indo então para app.get, onde o newListItem poderá ser apresentado
    // pelo res.render, sendo passado como um dos parâmetros
    res.redirect("/")
  }
})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.get("/about", function(req, res){
  res.render("about")
})

app.listen(3100, function(){
  console.log("Server started and running on port 3100")
})


//será utilizada a forma do stack Overflow

// var currrentDay = today.getDay()
// var day = "";

// switch (currrentDay) {
//   case 0:
//     day = "Domingo"
//     break;
//   case 1:
//     day = "Segunda-Feira"
//     break;
//   case 2:
//     day = "Terça-Feira"
//     break;
//   case 3:
//     day = "Quarta-Feira"
//     break;
//   case 4:
//     day = "Quinta-Feira"
//     break;
//   case 5:
//     day = "Sexta-Feira"
//     break;
//   case 6:
//     day = "Sábado"
//     break;
//   default:
//   console.log("Error: currentDay is equal to " + currrentDay)
// }
