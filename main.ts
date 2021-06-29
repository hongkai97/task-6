basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P1))
    basic.pause(500)
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        music.setVolume(127)
        soundExpression.sad.play()
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
