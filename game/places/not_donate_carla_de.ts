place.get('next').onClick(() => {
    game.navigate('carla')
})

place.get('english').onClick(() => {
    game.navigate('not_donate_carla_en')
})

place.get('link').onClick(() => {
    window.open("https://www.carla-wien.at/fileadmin/storage/wien/shops-services/carla/Spenden-die-nicht-angenommen-werden-extern-202408.pdf");
})
