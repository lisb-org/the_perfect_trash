place.get('bin').onClick(() => {
    game.navigate('bins')
})

place.get('away').onClick(() => {
    game.navigate('landfill')
})

place.get('buy').onClick(() => {
    game.navigate('consumption')
})