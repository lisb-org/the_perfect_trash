await game.spawnItem("jacket", place.get("slot_1"));


place.get("pile").onOtherDrop(item => {
    if (item.itemName == "jacket") {
        game.navigate("which_shelf")
    }
})

place.get('swap').onClick(() => { 
    window.open("https://www.youtube.com/watch?v=H-xR6HCN1Wg");
})