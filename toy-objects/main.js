const toys = [
    {
    id: 1,
    name: "doll",
    creepy: true,
    weight: 420.69,
    price: 20
},
{
    id: 2,
    name: "ball",
    creepy: false,
    weight: 5.2,
    price: 5
}
]

const puzzle={
    id: 3,
    name: "puzzle",
    creepy: false,
    weight: 1.2,
    price: 10
}

const lego={
    id: 4,
    name: "lego",
    creepy: false,
    weight: 3.4,
    price: 25
}

toys.push(puzzle);
toys.push(lego)
/*
for(const toy of toys){
    toy.price= toy.price * 1.05;
    console.log(`the ${toy.name} costs ${toy.price} dollars`)
}
*/
const toyToFind = 1
for(const toy of toys){
    if(toy.id === toyToFind){
        console.log(`The ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
    }
    if(toy.creepy === true){
        console.log(`The ${toy.name} is creepy`)
    }
}