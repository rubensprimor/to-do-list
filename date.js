//console.log(module)
//poderá enxergar o objeto module

module.exports.getDate = getDate
//exports.getDate = getDate  //não precisa do module.

function getDate() {

  //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  let options = {
    weekday: 'long',
    //year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  let today  = new Date();

  let day = today.toLocaleDateString("pt-BR", options)

  return day;
}

module.exports.getDate = getDate

// //Organizando as funções:
// function getDate() = function() {
//
//   let today  = new Date();
//   let options = {
//     weekday: 'long',
//     //year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   };
//
//   return today.toLocaleDateString("pt-BR", options)
// }

module.exports.getDay = getDay

function getDay() {

  let today  = new Date();

  let options = {
    weekday: 'long',
  };

  let day = today.toLocaleDateString("pt-BR", options)

  return day;
}
