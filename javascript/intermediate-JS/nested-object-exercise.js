// part 1

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
      console.log(this)
        this.snacks.push(snack);
        return this;
    }
  }
}

// 1
let primeNos = nestedData.innerData.numberData.primeNumbers
for (let i = 0; i < primeNos.length; i++) {
  console.log(primeNos[i]);
}

// 2
let fib = nestedData.innerData.numberData.fibonnaci
for (let i = 0; i < fib.length; i++) {
  if (fib[i] % 2 === 0) {
    console.log(fib[i]);
  }
}

// 3
console.log(nestedData.innerData.order[1])

// 4
nestedData.innerData.addSnack("chocolate");

// 5
// The this keyword with the function refers to the object in which the function is invoked. That is the innerData object

// PART 2
let nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

// 1
const addSpeaker = speaker => nestedObject.speakers.push({name: speaker})
addSpeaker("Ade");
// console.log(nestedObject.speakers)

// 2
const addLanguage = (lang, greet) => nestedObject.data.languages[lang] = {hello : greet};

addLanguage("yoruba", "kaaro")
// console.log(nestedObject.data.languages);

// 3
const addCountry = (country, capital, population) => nestedObject.data.continents.europe.countries[country] = {
  capital,
  population
}
addCountry("Austria", "Vienna", 54000000)
// console.log(nestedObject.data.continents.europe)