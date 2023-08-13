radio.onReceivedValue(function (name, value) {
    // X Y is the rocker value 
    if (name == "x") {
        direction = value
    }
    if (name == "y") {
        speed = value
    }
})
let speed = 0
let direction = 0
radio.setGroup(1)
direction = 250
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, Math.constrain(direction, 225, 315))
basic.pause(1000)
direction = 290
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Math.constrain(direction, 225, 315))
basic.pause(1000)
speed = 100
direction = 270
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Math.constrain(direction, 225, 315))
music.setVolume(255)
music.play(music.stringPlayable("C - - - - - - - ", 500), music.PlaybackMode.InBackground)
basic.forever(function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, speed)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Math.constrain(direction, 230, 310))
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) < 5 && sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) != 0) {
        music.play(music.stringPlayable("C F - - - - - - ", 500), music.PlaybackMode.InBackground)
    }
})
