basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P1))
    basic.pause(500)
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        music.setVolume(127)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
