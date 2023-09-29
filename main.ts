let Zufallszahl = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zufallszahl = randint(1, 3)
    if (Zufallszahl == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (Zufallszahl == 2) {
        basic.showLeds(`
            . . # # .
            . # # # #
            # # # # #
            # # # # .
            . # # . .
            `)
    }
    if (Zufallszahl == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
