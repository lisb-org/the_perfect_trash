


place.get('carla').onClick(() => {
    window.open("https://www.carla-wien.at/");
});

place.get('not').onClick(() => {
    game.navigate('not_donate_carla_en')
    //window.open("https://www.wien.gv.at/umwelt/muelltrennung");
    //window.open("https://www.carla-wien.at/fileadmin/storage/wien/shops-services/carla/Spenden-die-nicht-angenommen-werden-extern-202408.pdf");
});

place.get('next').onClick(() => {
    game.navigate('which_shelf')
})


place.get('donations').onClick(() => {
    window.open("https://www.carla-wien.at/sachspenden/");
})