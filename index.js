const prompt = require('prompt-sync')()

function goOn(){
  let letsGetIt = prompt(`Would you like to continue? (Yes/No)> `)
  if (letsGetIt == "Yes"){
    console.log("good")
  }else if(letsGetIt == "No"){
    
  } 
  return
}
goOn()

// Get started!
const name = prompt("What is your name?")
console.log("your name is " + name + "?")
console.log(`Welcome to my game, ${name}.`)

let age = prompt("What is your age?") 
age = parseInt(age)
console.log("Your age is:", age + ",", name + ", right?")

let role = prompt(`What role do you want, ${name} (Mage, Fighter, Bard)`)
console.log(`Okay, ${name}, your role is now ${role}.`)

let powerLevel = Math.floor(Math.random() * 10)
console.log("Your power level", typeof powerLevel + " is:", powerLevel)



let gamerProfile = {
name: name,
age: age,
powerLevel: powerLevel ,
role: role
};


function gamePathFunc(){
    if (role == "Mage"){
  let powersMage = prompt(`What ELEMENTAL POWERS do you want, Mage ${name}; (Fire, Water, Air, Earth)`)
  
   if (powersMage == "Fire"){
   let pathMage = prompt(`You're a Mage, ${name}. Your ELEMENTAL POWER is Fire.`)
  }else if (powersMage == "Water"){
   let pathMage = prompt(`You're a Mage, ${name}. Your ELEMENTAL POWER is Water.`)
  }else  if (powersMage == "Air"){
   let pathMage = prompt(`You're a Mage, ${name}. Your ELEMENTAL POWER is Air.`)
  }else if (powersMage == "Earth"){
   let pathMage = prompt(`You're a Mage, ${name}. Your ELEMENTAL POWER is Earth.`)
  }
  }
  
  if (role == "Fighter"){
  let powersFighter = prompt(`What FIGHTING STYLE do you want, Fighter ${name}; (Judo, MMA, Street, Tai Chi)`)
   
    if (powersFighter == "Judo"){
   let pathFighter = prompt(`You're a Fighter, ${name}. Your FIGHTING STYLE is Judo.`)
  }else if (powersFighter == "MMA"){
   let pathFighter = prompt(`You're a Fighter, ${name}. Your FIGHTING STYLE is MMA.`)
  }else if (powersFighter == "Street"){
   let pathFighter = prompt(`You're a Fighter, ${name}. Your FIGHTING STYLE is Street.`)
  }else if (powersFighter == "Tai Chi"){
   let pathFighter = prompt(`You're a Fighter, ${name}. Your FIGHTING STYLE is Tai Chi.`)
  }
  }
      
  if (role == "Bard"){
  let powersBard = prompt(`What ART STYLE do you want, Bard ${name}; (Music, Dance, Actung, Makeup)`)
    
    if (powersBard == "Music"){
   let pathBard = prompt(`You're a Bard, ${name}. Your ART STYLE is Music.`)
  }else if (powersBard == "Dance"){
   let pathBard = prompt(`You're a Bard, ${name}. Your ART STYLE is Dance.`)
  }else if (powersBard == "Acting"){
   let pathBard = prompt(`You're a Bard, ${name}. Your ART STYLE is Acting.`)
  }else if (powersBard == "Makeup"){
   let pathBard = prompt(`You're a Bard, ${name}. Your ART STYLE is Makeup.`)
  }
 }
}
console.log(gamePathFunc())

function goON(){
  let Continue = prompt(`Would you like to continue,${role} ${name}? (Yes/No)`)
  if (Continue == "Yes"){
    console.log("good")
  }else if(Continue == "No"){
    return
  }
}









//let Continue = (`Would you like to continue,${role} ${name}? (Yes/No)`)
  //if (Continue == "Yes"){
  //  console.log("good")
 // }else if(Continue == "No"){
 //   return
  //}

















































































































































































































