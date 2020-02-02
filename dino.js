const data = {
    "Dinosaurs": [
        {
            "type": "Trex",
            "name": "Tommy",
            "group": "Carnivoure",
            "Image": "trex.jpg"
        },
        {
            "type": "Pterodactyl",
            "name": "Terry",
            "group": "Carnivoure",
            "Image": "pterodactyl.jpg"
        },
        {
            "type": "Brachiosaurus",
            "name": "Barry",
            "group": "Herbivoure",
            "Image": "brachiosaurus.jpg"
        },
        {
            "type": "Triceratops",
            "name": "Tess",
            "group": "Herbivoure",
            "Image": "triceratops.jpg"
        },
        {
            "type": "Stegosaurus",
            "name": "Sophie",
            "group": "Herbivoure",
            "Image": "stegosaurus.jpg"
        }
    ],

    "Food": {
        "Carnivoure": ["Ham", "Fish", "Lamb", "Eggs"],
        "Herbivoure": ["Leaves", "Palm Trees"]
    },

    "Message": [
        {
            "Animal": "Bees",
            "Image": "",
            "Main": "Save the bees by planting a flower.",
            "Why": "Bees need nectar and pollen from flowers. The nectar is used by bees as food and an energy. Without flowers bees wont be able to gain energy and will die. Flowers need bees to survive and bees need flowers to survive and reproduce.",
            "Action": "Plant a flower and save the bees."
        },
        {
            "Animal": "Birds",
            "Image": "",
            "Main": "Help the birds by giving them food.",
            "Why": "If birds are not fed they will die and since some plants rely on birds to polinate some plants will also die out.",
            "Action": "Feed the birds."
        },
        {
            "Animal": "Marine Life",
            "Image": "",
            "Main": "Save marine life by recycling plastics.",
            "Why": "When plastic aren't disposed of properly and end up in the oceans, marine animals die by eating or getting caught in plastic.",
            "Action": "Recycle plastics properly."
        }
    ]
};

const generalMessage = "Us dino's died out due to distruptions in the earth's atmosphere and changes in the climate as it interrupted the our food supply. It's too late for us, but wait... you can prevent another extinction event by protecting your planet."

//* Generate Random Dino
// const dinoGenerated = data.Dinosaurs[Math.floor(Math.random() * data.Dinosaurs.length)];
const dinoGenerated = data.Dinosaurs[0];

//? Remove this later | just for debugging
console.log(dinoGenerated);
console.log(`Hello my name is ${dinoGenerated.name} the ${dinoGenerated.type} and I am a ${dinoGenerated.group}. Please feed me...`)

// Initiate correct food list
let correctFoodItem = []

// Check for correct food items
if (dinoGenerated.group == "Carnivoure") {
    for (item = 0; item < data.Food.Carnivoure.length; item++) {
        correctFoodItem.push(data.Food.Carnivoure[item]);
    }
} else {
    for (item = 0; item < data.Food.Herbivoure.length; item++) {
        correctFoodItem.push(data.Food.Herbivoure[item]);
    }
}

console.log(correctFoodItem);

//* Loop through food items and output all food
console.log("Food Options:")

for (item = 0; item < data.Food.Carnivoure.length; item++) {
    console.log(`- ${data.Food.Carnivoure[item]}`);
}

for (item = 0; item < data.Food.Herbivoure.length; item++) {
    console.log(`- ${data.Food.Herbivoure[item]}`);
}

//TODO: Check if the selected food is in the list of correct foods
let selectedFood = "Ham"
if (correctFoodItem.includes(selectedFood) == false) {
    console.log(`I hate ${selectedFood}!`);
} else{
    //* Final Output Message
    console.log(`${generalMessage}\n`);

    const randomSuggenstion = Math.floor(Math.random() * data.Message.length)

    console.log(`${data.Message[randomSuggenstion].Main}\n`);
    console.log(`${data.Message[randomSuggenstion].Why}\n`);
    console.log(`So...${data.Message[randomSuggenstion].Action}`);
}
