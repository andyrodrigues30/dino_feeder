const speech = document.getElementById("speech");
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
        speech.innerText = "I'm hungry, find me some food...,";

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
    switch (this.id) {
        case "feedMeat":
            speech.innerText = "Yum...It tastes sooo good, feed me some more...";
            meatCount.innerText = parseInt(meatCount.innerText) + 1;
            selectMenu();
            return checkMeatCounter()
        case "feedPlants":
            speech.innerText = "Ewwww...This tastes horrible, I want something else...";
            plantsCount.innerText = parseInt(plantsCount.innerText) + 1;
            return selectMenu();
        case "feedEggs":
            speech.innerText = "Ewwww...This tastes horrible, I want something else...";
            eggsCount.innerText = parseInt(eggsCount.innerText) + 1;
            return selectMenu();
        default:
            break
    };
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

    currentFood.id = "feedMeat";
    currentFoodIMG.src = "./icons/meat.png"
    currentFood.dataset.content = "FEED MEAT";
    currentFood.style.background = "#f2dbc2";
});

// SELECT PLANTS
selectPlants.addEventListener("click", () => {
    modal.style.display = "none";
    speech.innerText = "You found Plants, click on it to feed me.";

    currentFood.id = "feedPlants";
    currentFoodIMG.src = "./icons/plant.png"
    currentFood.dataset.content = "FEED PLANTS";
    currentFood.style.background = "#c8f2bd";
});

// SELECT EGGS
selectEggs.addEventListener("click", () => {
    modal.style.display = "none";
    speech.innerText = "You found Eggs, click on it to feed me.";

    currentFood.id = "feedEggs";
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
        speech.innerText = [
            "It's too late for me... but wait you can help other animals by...",
            "- Feeding the birds in your garden.",
            "- Helping the bees by planting flowers.",
            "- Saving the fish by reusing plastic bags",
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