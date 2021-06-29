basic.forever(function () {
    basic.pause(500)
    if (pins.analogReadPin(AnalogPin.P1) < 50) {
        music.setVolume(127)
        music.playTone(349, music.beat(BeatFraction.Whole))
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
