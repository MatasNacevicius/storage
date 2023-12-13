"use strict";
// let cat = "tom";

// localStorage.setItem("katukas", cat)
// sessionStorage.setItem("katukas", cat)

// let fromLS=localStorage.getItem("katukas")
// let fromSS=sessionStorage.getItem("katukas")
// console.log(fromLS)
// console.log(fromSS)

// let dog = "pluto"

// localStorage.setItem("doggy", dog)
// sessionStorage.setItem("doggy", dog)

// const cats={
//     cat1: "tom",
//     cat2: "garfield",
//     cat3: "pukis"
// };

// localStorage.setItem("catsArray", JSON.stringify(cats))
// sessionStorage.setItem("catsArray", JSON.stringify(cats))
// let catsFromLS = JSON.parse(localStorage.getItem("catsArray"))
// // paiima visus
// console.log(catsFromLS)
// // paiima viena
// console.log(catsFromLS.cat2)

// const dog2=[
//     {
//         cat1: "tom",
//         cat2: "garfield",
//         cat3: "pukis"
//     },
//     {
//         cat1: "tom",
//         cat2: "garfield",
//         cat3: "pukis"
//     },
//     {
//         cat1: "tom",
//         cat2: "garfield",
//         cat3: "pukis"
//     }
// ]

// localStorage.setItem("dog2array", JSON.stringify(dog2))
// sessionStorage.setItem("dog2array", JSON.stringify(dog2))
// let dog2FromLS = JSON.parse(localStorage.getItem("dog2array"))
// console.log(dog2FromLS)
// console.log(dog2FromLS[1].cat2);

// localStorage.removeItem("doggy")
// sessionStorage.removeItem("doggy")
// // localStorage.clear();

// const dataFromLS = localStorage.getItem("persons");
// // console.log(dataFromLS)

// const data = dataFromLS === null ? [] : JSON.parse(dataFromLS);
// // console.log(data)

// const person = {
//   name: "john",
//   lastname: "Doe",
// };

// data.push(person);
// // console.log(data)

// localStorage.setItem("persons", JSON.stringify(data));
// const dataFromLS1 = JSON.parse(localStorage.getItem("persons"));

// const data1 = dataFromLS1 === null ? [] : dataFromLS1;
// // console.log(data1)

// data1.push(person);
// localStorage.setItem("persons", JSON.stringify(data1));

// const dataFromLS2 = JSON.parse(localStorage.getItem("persons"));
// console.log(dataFromLS2);

// const newArray = dataFromLS2.find(
//   (elementas) => elementas.name==="john" && elementas.lastname==="Doe"
// );
// console.log(newArray);

// const person1 = {
//   name: "jane",
//   lastname: "Doever"
// }

// if (newArray) {
//   alert("toks jau yra")
// }
// else {
//   dataFromLS2.push(person1)
//   localStorage.setItem("persons", JSON.stringify(dataFromLS2));
//   alert("naujas irasas isaugotas")
// }

// const duomenys = localStorage.getItem("persons")

// const atsakymas = duomenys === null ? [] : JSON.parse(duomenys)

// const person = {
//     name: "John",
//     lastname: "Doe"
// }

// const ieskomas = atsakymas.find((el) => el.name === person.name && el.lastname === person.lastname)
// console.log(ieskomas)

// if (ieskomas){
//     alert("toks jau yra")
// } else {
//     atsakymas.push(person)
//     localStorage.setItem("persons", JSON.stringify(atsakymas))
//     alert("naujas irasas patalpintas i LS")
// }

// const duomenysIsLS=JSON.parse(localStorage.getItem("persons"))

// const person1 = {
//     name: "Jane",
//     lastname: "Doe"
// }

// const ieskomas1 = duomenysIsLS.find((el) => el.name === person1.name && el.lastname === person1.lastname)
// console.log(ieskomas1)

// if (ieskomas1){
//     alert("toks jau yra")
// } else {
//     duomenysIsLS.push(person1)
//     localStorage.setItem("persons", JSON.stringify(duomenysIsLS))
// }

// import { result } from "./data.js"

// console.log(result)

// const infoIsLS = localStorage.getItem("favorites");
// const favorites = infoIsLS === null ? [] : JSON.parse(infoIsLS)
// console.log(favorites)

// const getMovie = (id) =>{
//     const filmas = result.find((el)=> el.id === id)
//     // console.log(filmas)
//     return filmas
// }
// getMovie(436270)

// const myMovies = (id) =>{
// const filmai ={
//     id: getMovie(id).id,
//     title: getMovie(id).title
// }
// const newFavorites = favorites.find((el)=> el.id === filmai.id)
// if (newFavorites){
//     alert("movie already exist")
// } else {
//     favorites.push(filmai)
//     localStorage.setItem("favorites", JSON.stringify(favorites))
//     alert("movie inserted")
// }
// }

// const print = () =>{
//     const fromLS = JSON.parse(localStorage.getItem("favorites"))
//     // console.log(fromLS)

//     fromLS.forEach((el) => console.log(`id: ${el.id}, title: ${el.title}`))
// }
// print()

// const trinimas = (id) => {
//     const fromLS = JSON.parse(localStorage.getItem("favorites"))

//     const movieIndex = fromLS.findIndex((movie) => movie.id === id)
//     // console.log(movieIndex)
//     if (movieIndex>-1){
//         alert(`istrintas filmas ${fromLS[movieIndex].title}`)
//         fromLS.splice(movieIndex, 1)
//         localStorage.setItem("favorites", JSON.stringify(fromLS))
//     }
//     else {
//         alert("movie not found")
//     }
// }
// myMovies(436270)
// trinimas(436270)

import { duomenys } from "./data1.js";

const infoIsLS = localStorage.getItem("salys");
const salys = infoIsLS === null ? [] : JSON.parse(infoIsLS);
duomenys.forEach((country, index) => {
  const isCountryInLS = salys.some(
    (savedCountry) => savedCountry.name === country.name.common
  );
  if (!isCountryInLS) {
    const addCountry = {
      name: country.name.common,
      capital:
        country.capital && country.capital.length > 0
          ? country.capital[0]
          : "Data not found",
    };
    salys.push(addCountry);
    console.log(`${index + 1} data: `);
    console.log(`country name: ${addCountry.name}`);
    console.log(`capital: ${addCountry.capital}`);
    console.log("-----------------------------");
  }
});
localStorage.setItem("salys", JSON.stringify(salys));
// kai nebeloadina:
// localStorage.clear()
