await game.spawnItemOnce("trash", place.get("slot_1"));


place.get("slot_can").onOtherDrop(item => {
    if (item.itemName == "trash") {
        //game.getSound("unlock").play();
        game.navigate("away")
    }
})