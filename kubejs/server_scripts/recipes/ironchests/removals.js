ServerEvents.recipes(event => {
    const zuEntfernen = [
        'ironchest:dirt_chest',
        'ironchest:trapped_dirt_chest'
    ]

    zuEntfernen.forEach(item => {
        event.remove({ output: item })
    })
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    const zuVerstecken = [
        'ironchest:dirt_chest',
        'ironchest:trapped_dirt_chest'
    ]
    zuVerstecken.forEach(item => event.remove(item))
})
