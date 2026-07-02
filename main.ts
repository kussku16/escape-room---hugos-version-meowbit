namespace SpriteKind {
    export const Friend = SpriteKind.create()
    export const Object = SpriteKind.create()
    export const enemyBoss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.showLongText("Congrats! You found the exit!!!", DialogLayout.Full)
    game.gameOver(true)
    game.setGameOverEffect(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    if (askFinal == false) {
        finalQuestion = game.askForString("What name is spelt with the big letters in each room?", 4)
        if (finalQuestion == "Hugo") {
            game.splash("Correct!")
            askFinal = true
            tiles.setWallAt(tiles.getTileLocation(26, 42), false)
            tiles.setWallAt(tiles.getTileLocation(27, 42), false)
        } else {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(26, 39))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast1, function (sprite, location) {
    if (askWord == false) {
        answerWord = game.askForString("Can you order the message? No spaces, no capitals", 15)
        if (answerWord == "marcsescaperoom") {
            game.splash("Correct!")
            askWord = true
            tiles.setWallAt(tiles.getTileLocation(7, 12), false)
            tiles.setWallAt(tiles.getTileLocation(8, 12), false)
        } else {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 15))
        }
    }
})
scene.onOverlapTile(SpriteKind.Friend, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(28, 29), false)
    tiles.setWallAt(tiles.getTileLocation(29, 29), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    snakeMove = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sharkAttack == true) {
        music.setVolume(50)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        projectile = sprites.createProjectileFromSprite(img`
            ...........ccccc66666...........
            ........ccc4444444444666........
            ......cc444444444bb4444466......
            .....cb4444bb4444b5b444444b.....
            ....eb4444b5b44444b44444444b....
            ...ebb44444b4444444444b444446...
            ..eb6bb444444444bb444b5b444446..
            ..e6bb5b44444444b5b444b44bb44e..
            .e66b4b4444444444b4444444b5b44e.
            .e6bb444444444444444444444bb44e.
            eb66b44444bb444444444444444444be
            eb66bb444b5b44444444bb44444444be
            fb666b444bb444444444b5b4444444bf
            fcb666b44444444444444bb444444bcf
            .fbb6666b44444444444444444444bf.
            .efbb66666bb4444444444444444bfe.
            .86fcbb66666bbb44444444444bcc688
            8772effcbbbbbbbbbbbbbbbbcfc22778
            87722222cccccccccccccccc22226678
            f866622222222222222222222276686f
            fef866677766667777776667777fffef
            fbff877768f86777777666776fffffbf
            fbeffeefffeff7766688effeeeefeb6f
            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
            f66ddfffffeeeffeffeeeeeffeedb46e
            .c66ddd4effffffeeeeeffff4ddb46e.
            .fc6b4dddddddddddddddddddb444ee.
            ..ff6bb444444444444444444444ee..
            ....ffbbbb4444444444444444ee....
            ......ffebbbbbb44444444eee......
            .........fffffffcccccee.........
            ................................
            `, mySprite, 0, 0)
        projectile.setScale(0.5, ScaleAnchor.Middle)
        projectile.follow(shark)
        pause(500)
        sprites.destroy(projectile)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    if (hugoSinspiration == false) {
        mySprite.sayText("Hugo's idea!", 2000, true)
        hugoSinspiration = true
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    mySprite.sayText("mar", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 0), assets.tile`chestOpen`)
    mySprite.sayText("I found a key!!!!", 3000, true)
    keyFound = true
    tiles.setWallAt(tiles.getTileLocation(25, 6), false)
    tiles.setTileAt(tiles.getTileLocation(24, 10), assets.tile`lightOne`)
    tiles.setTileAt(tiles.getTileLocation(14, 0), sprites.castle.tilePath5)
    tiles.setTileAt(tiles.getTileLocation(15, 0), sprites.castle.tilePath5)
    tiles.setTileAt(tiles.getTileLocation(27, 6), sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    mySprite.sayText("You need a friend to pass through!", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Friend, function (sprite, otherSprite) {
    if (sayHello == true) {
        mySprite2.sayText("\"Hi! What's your name? It's okay, you can tell me later. ", 5000, true)
        sayHello = false
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    mySprite.sayText("I need a key!", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTileup`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(19, 2), assets.tile`switchDown`)
    tiles.setTileAt(tiles.getTileLocation(14, 2), assets.tile`lightsOn`)
    tiles.setTileAt(tiles.getTileLocation(15, 2), assets.tile`lightsOn`)
    tiles.setTileAt(tiles.getTileLocation(25, 6), assets.tile`lightLeft`)
    tiles.setTileAt(tiles.getTileLocation(14, 0), assets.tile`lightsOn`)
    tiles.setTileAt(tiles.getTileLocation(15, 0), assets.tile`lightsOn`)
    tiles.setWallAt(tiles.getTileLocation(14, 2), false)
    tiles.setWallAt(tiles.getTileLocation(15, 2), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (askTiles == false) {
        answerTile = game.askForNumber("How many identical tiles are there in this room?", 2)
        if (answerTile == 47) {
            game.splash("Correct!")
            askTiles = true
            tiles.setWallAt(tiles.getTileLocation(7, 33), false)
            tiles.setWallAt(tiles.getTileLocation(8, 33), false)
        } else {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 35))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel2, function (sprite, location) {
    mySprite.sayText("caper", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    snakeMove = true
    followFriend = true
    mySprite2.sayText("You came for me!!! ")
    mySprite2.follow(mySprite, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyBoss, function (sprite, otherSprite) {
    shark.sayText("Did you think it was that easy? HAHAHAHA", 2000, true)
    sharkAttack = true
    info.changeLifeBy(-1)
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel5, function (sprite, location) {
    mySprite.sayText("It says: \"Follow the two lights!\"", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    mySprite.sayText("cses", 2000, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemyBoss, function (sprite, otherSprite) {
    sprites.destroy(shark, effects.spray, 500)
    mySprite.sayText("Yes! Yes! Yes!", 2000, true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel3, function (sprite, location) {
    mySprite.sayText("oom", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lightOne`, function (sprite, location) {
    mySprite.sayText("It says: \"Then, follow the one light!\"", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let followFriend = false
let answerTile = 0
let projectile: Sprite = null
let answerWord = ""
let askWord = false
let finalQuestion = ""
let askFinal = false
let hugoSinspiration = false
let sharkAttack = false
let sayHello = false
let askTiles = false
let snakeMove = false
let keyFound = false
let shark: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`escape`)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
info.setLife(5)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
controller.moveSprite(mySprite, 100, 100)
let snake = sprites.create(img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(snake, sprites.builtin.forestTiles0)
mySprite2 = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 4 4 4 4 4 4 4 e f 
    . f e 4 4 b b 4 4 e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Friend)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 26))
shark = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.enemyBoss)
tiles.placeOnRandomTile(shark, sprites.dungeon.floorDark3)
keyFound = false
snakeMove = false
askTiles = false
sayHello = true
sharkAttack = false
let askFinalQuestion = false
hugoSinspiration = false
pause(500)
game.splash("Welcome to Marc's Escape Room!")
forever(function () {
    if ((controller.down.isPressed() || controller.up.isPressed()) && snakeMove == true) {
        snake.follow(mySprite, 120)
        animation.runImageAnimation(
        snake,
        [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `,img`
            . . . . . . . c c c c c c . . . 
            . . . . . . c 6 7 7 7 7 6 c . . 
            . . . . . c 7 7 7 7 7 7 7 7 c . 
            . . . . c 6 7 7 7 7 7 7 7 7 6 c 
            . . . . c 7 7 7 c 6 6 6 6 c 7 c 
            . . . . f 7 7 7 6 f 6 6 f 6 7 f 
            . . . . f 7 7 7 7 7 7 7 7 7 7 f 
            . . . . f 6 7 7 c 6 7 7 7 7 f . 
            . . c c c f 6 7 7 c c c c f . . 
            . c 7 7 7 c c f 7 7 7 2 6 c . . 
            c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
            c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
            . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
            . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
            . . c c 6 6 7 1 1 1 1 1 6 c . . 
            . . . c c c c c c c c c c . . . 
            `],
        500,
        false
        )
    } else {
        snake.unfollow()
    }
})
