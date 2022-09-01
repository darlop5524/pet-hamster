input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Health += -5
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
let Health = 10
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (Health == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . # . #
            `)
        basic.pause(2000)
        basic.showString("YOU FAILED")
    }
})
basic.forever(function () {
    Health += -1
    basic.pause(2000)
})
