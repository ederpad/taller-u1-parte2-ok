input.onButtonPressed(Button.A, function () {
    Temperatura_promedio()
    if (Promedio >= 30) {
        music.playTone(523, music.beat(BeatFraction.Double))
        music.playTone(131, music.beat(BeatFraction.Double))
    } else {
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.pause(200)
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.B, function () {
    Temperatura_promedio()
    if (Promedio >= 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(5000)
})
function Temperatura_promedio () {
    T1 = input.temperature()
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
    basic.pause(5000)
    T2 = input.temperature()
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.pause(5000)
    T3 = input.temperature()
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    basic.pause(5000)
    Promedio = (T1 + (T2 + T3)) / 3
    basic.pause(5000)
}
let T3 = 0
let T2 = 0
let T1 = 0
let Promedio = 0
Promedio = 0
T1 = 0
T2 = 0
T3 = 0
