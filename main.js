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
        "Carnivoure": ["Ham", "Fish", "Lamb"],
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

// console.log(dinoGenerated);//? Remove this later | just for debugging
const helloMessage = `Hello my name is ${dinoGenerated.name} the ${dinoGenerated.type} and I am a ${dinoGenerated.group}. Please feed me...`;

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


const speech = document.getElementById("speech");
speech.innerText = helloMessage;
const dino = document.getElementById("dinoimg")

const modal = document.getElementById("modalId");
const closeModal = document.querySelector(".close-modal");

const foodMenu = document.getElementById("foodMenu");

const selectMeat = document.getElementById("meat");
const selectPlants = document.getElementById("plants");
const selectEggs = document.getElementById("eggs");

const currentFood = document.querySelector(".foodSelect");
const currentFoodIMG = document.querySelector(".foodSelect img");

const meatCount = document.getElementById("meatCount");
const plantsCount = document.getElementById("plantsCount");
const eggsCount = document.getElementById("eggsCount");

foodMenu.addEventListener("click", function() {
    if (this.id === "foodMenu") {
        return modal.style.display = "block";
    }

    if (this.id === "playAgain") {
        speech.innerText = "I'm hungry, find me some food...";

        meatCount.innerText = 0
        plantsCount.innerText = 0
        eggsCount.innerText = 0
    
        modal.style.display = "none";
    
        currentFood.id = "foodMenu";
        currentFoodIMG.src = "./icons/menu.png"
        currentFood.dataset.content = "FOOD MENU";
        currentFood.style.background = "#ebcffa";

        dino.src = "./img/dino_0.png"
    }
    
    const clone = currentFood.cloneNode(true);

    clone.classList.add("foodGhost");

    clone.addEventListener("animationend", (e) => {
        if (e.animationName === "feed") {
            clone.remove();
        }
    });

    document.querySelector("footer").appendChild(clone);

    if (correctFoodItem.includes(this.id) == false) {
        speech.innerText = "Ewwww...This tastes horrible, I want something else...";
        selectMenu();
    } else {
        speech.innerHTML = "Yum...This tastes good, Feed me some more..."
        meatCount.innerText = parseInt(meatCount.innerText) + 1;
        selectMenu();
        return checkMeatCounter();
    }

    // switch (this.id) {
    //     case "Ham":
    //         speech.innerText = helloMessage;
    //         meatCount.innerText = parseInt(meatCount.innerText) + 1;
    //         selectMenu();
    //         return checkMeatCounter()
    //     case "Leaves":
    //         speech.innerText = "Ewwww...This tastes horrible, I want something else...";
    //         plantsCount.innerText = parseInt(plantsCount.innerText) + 1;
    //!         return selectMenu();
    //     case "Eggs":
    //         speech.innerText = "Ewwww...This tastes horrible, I want something else...";
    //         eggsCount.innerText = parseInt(eggsCount.innerText) + 1;
    //         return selectMenu();
    //     default:
    //         break
//     };
});

function updateCurrentFood(id, src, content, background, meatCount) {
    currentFood.id = id;
    currentFoodIMG.src = src;
    currentFood.dataset.content = content;
    currentFood.style.background = backgroundColor;
}

// SELECT MEAT
selectMeat.addEventListener("click", () => {
    modal.style.display = "none";
    speech.innerText = "You found Meat, click on it to feed me.";

    currentFood.id = "Ham";
    currentFoodIMG.src = "./icons/meat.png"
    currentFood.dataset.content = "FEED MEAT";
    currentFood.style.background = "#f2dbc2";
});

// SELECT PLANTS
selectPlants.addEventListener("click", () => {
    modal.style.display = "none";
    speech.innerText = "You found Plants, click on it to feed me.";

    currentFood.id = "Leaves";
    currentFoodIMG.src = "./icons/plant.png"
    currentFood.dataset.content = "FEED PLANTS";
    currentFood.style.background = "#c8f2bd";
});

// SELECT EGGS
selectEggs.addEventListener("click", () => {
    modal.style.display = "none";
    speech.innerText = "You found Eggs, click on it to feed me.";

    currentFood.id = "Eggs";
    currentFoodIMG.src = "./icons/egg.png"
    currentFood.dataset.content = "FEED EGGS";
    currentFood.style.background = "#f7f3c3";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function selectMenu() {
    modal.style.display = "none";

    currentFood.id = "foodMenu";
    currentFoodIMG.src = "./icons/menu.png"
    currentFood.dataset.content = "FOOD MENU";
    currentFood.style.background = "#ebcffa";
}

function checkMeatCounter() {
    if (meatCount.innerText >= 3) {
        //* Final Output Message
        const randomSuggenstion = Math.floor(Math.random() * data.Message.length);
        speech.innerText = [
            generalMessage,
            data.Message[randomSuggenstion].Main,
            data.Message[randomSuggenstion].Why,
            `So...${data.Message[randomSuggenstion].Action}`,
            // "- Saving the fish by reusing plastic bags",
            "Press play to continue..."
        ].join("\n\n");

        currentFood.id = "playAgain";
        currentFoodIMG.src = "./icons/play.png"
        currentFood.dataset.content = "PLAY AGAIN";
        currentFood.style.background = "#c2ddff";
    }

    if (meatCount.innerText == 1) {
        dino.src="./img/dino_1.png"
    } else if (meatCount.innerText == 2) {
        dino.src="./img/dino_2.png"
    } else if (meatCount.innerText == 3) {
        dino.src="./img/dino_3.png"
    } else {
        dino.src = "./img/dino_0.png"
    }
}