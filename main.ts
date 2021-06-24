OLED.init(128, 64)
basic.forever(function () {
    if (Environment.ReadSoilHumidity(AnalogPin.P1) < 40) {
        music.setVolume(127)
        music.playMelody("C5 B A G F E D C ", 120)
        OLED.writeStringNewLine("Please water me")
        basic.pause(5000)
        OLED.clear()
    }
})
