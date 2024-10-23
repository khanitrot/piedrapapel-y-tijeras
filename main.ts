radio.onReceivedNumber(function (receivedNumber) {
    respostaaltre = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(1)
    resposta = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(2)
    resposta = 2
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    radio.sendNumber(3)
    resposta = 3
})
let respostaaltre = 0
let resposta = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
radio.setGroup(4)
resposta = 0
respostaaltre = 0
basic.forever(function () {
    if (resposta != 0 && respostaaltre != 0) {
        if (respostaaltre == 1) {
            if (resposta == 1) {
                basic.showIcon(IconNames.Asleep)
            }
            if (resposta == 2) {
                basic.showIcon(IconNames.Happy)
            }
            if (resposta == 3) {
                basic.showIcon(IconNames.Sad)
            }
        }
        if (respostaaltre == 2) {
            if (resposta == 1) {
                basic.showIcon(IconNames.Sad)
            }
            if (resposta == 2) {
                basic.showIcon(IconNames.Asleep)
            }
            if (resposta == 3) {
                basic.showIcon(IconNames.Happy)
            }
        }
        if (respostaaltre == 3) {
            if (resposta == 1) {
                basic.showIcon(IconNames.Happy)
            }
            if (resposta == 2) {
                basic.showIcon(IconNames.Sad)
            }
            if (resposta == 3) {
                basic.showIcon(IconNames.Asleep)
            }
        }
        basic.pause(2000)
        resposta = 0
        respostaaltre = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
