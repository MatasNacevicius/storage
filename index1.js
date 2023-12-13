import { duomenys } from "./data1.js";

// console.log(data)

const patikra = localStorage.getItem("countries");
//console.log(patikra);

const sal = patikra === null ? [] : JSON.parse(patikra);
//console.log(sal)

duomenys.forEach((el, index) => {
  if (!el.hasOwnProperty(`capital`)) {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: "data not found",
    };
    console.log(country);
    sal.push(country)
  } else {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: el.capital[0],
    };
    console.log(country);
    sal.push(country)
  }
});
console.log(sal);
localStorage.setItem("countries", JSON.stringify(sal))

