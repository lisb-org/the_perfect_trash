await game.spawnItem("good", place.get("slot_1"));


place.get("slot_shelf").onOtherDrop(item => {
    if (item.itemName == "good") {
        //game.getSound("unlock").play();
        game.navigate("which_shelf")
    }
})

// 
//https://www.ara.at/recyclingguide
//