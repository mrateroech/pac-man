let pac_man = game.createSprite(0, 4)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
janaria.set(LedSpriteProperty.Brightness, 10)
janaria.set(LedSpriteProperty.Blink, 100)
janaria.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
    basic.pause(400)
    if (input.acceleration(Dimension.X) > 200) {
        pac_man.move(1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pac_man.move(-1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < 200) {
        pac_man.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pac_man.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})
