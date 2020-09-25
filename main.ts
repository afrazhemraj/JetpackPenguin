enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Platform = SpriteKind.create()
    export const Platform2 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
        animation.setAction(mySprite, ActionKind.Jumping)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . b . . . . c c c c c c . . . 
            . b 2 b . . c c c c c c c c . . 
            b 2 9 2 b c c c c c 1 1 c c c . 
            2 3 9 2 2 c c c c c 1 f c c c . 
            2 3 9 2 2 a c c c c 9 f c c c . 
            2 3 3 3 2 a c c c c a a c c c . 
            2 2 9 2 2 a 1 d d c c c c 4 4 4 
            . 2 3 2 2 a 1 d d d d d 1 2 4 4 
            . 2 3 2 2 a 1 1 d d d d 1 1 c . 
            . 2 3 2 2 a 1 1 d d d d 1 1 a . 
            . 2 9 2 2 a c 1 1 d d d 1 1 a . 
            2 3 9 3 2 a c 1 1 1 d 1 1 1 a . 
            2 3 9 3 2 a c 1 1 1 1 1 1 1 a . 
            2 . 2 3 2 c c c 1 1 1 1 c c a . 
            . . . . . 1 4 4 c c 1 c 4 a a . 
            . . . . . . 4 4 4 4 c c 4 4 4 4 
            `,img`
            . . b . . . . c c c c c c . . . 
            . b 2 b . . c c c c c c c c . . 
            b 2 5 2 b c c c c c 1 1 c c c . 
            2 3 5 2 2 c c c c c 1 f c c c . 
            2 3 5 2 2 a c c c c 9 f c c c . 
            2 3 3 3 2 a c c c c a a c c c . 
            2 2 5 2 2 a 1 d d c c c c 4 4 4 
            . 2 3 2 2 a 1 d d d d d 1 2 4 4 
            . 2 3 2 2 a 1 1 d d d d 1 1 c . 
            . 2 3 2 2 a 1 1 d d d d 1 1 a . 
            . 2 5 2 2 a c 1 1 d d d 1 1 a . 
            2 3 5 3 2 a c 1 1 1 d 1 1 1 a . 
            2 3 5 3 2 a c 4 1 1 1 1 1 1 a . 
            2 5 2 3 2 c c 4 1 1 1 1 4 c a . 
            5 1 5 1 5 1 . 4 4 c 1 c 4 4 a . 
            . 5 . 5 . . . . . . c c . . . . 
            `],
        200,
        false
        )
    }
    if (mySprite.y <= 30 && mySprite.y > 20) {
        info.changeScoreBy(1)
        if (info.score() % 3 == 1) {
            scene.setBackgroundImage(img`
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                44444444ccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                444444ccccccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                44444ccccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                44444ccccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                4444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111144444444444444444444444444444444444444444
                4444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111114444444444444444444444444444444444444444
                4444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444411111111111444444444444444444444444444444444444444
                ccccccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                ccccccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                ccccccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                ccccccccccccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                cccccccccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                cccccccccccccbccccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                cccccccccccccbbbbcccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111144444444444444444444444444444444444444
                ccccccccccccccbbbbcccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444411111111111444444444444444444444444444444444444444
                ccccccccccccccbbbbbbccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111114444444444444444444444444444444444444444
                cccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111144444444444444444444444444444444444444444
                cccccccccccccccbbbbbbbcccccc44444444444444444444444444444444444444444ffff4444444ffffff44444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccbbbbbbbcccccc44444444444444444444444444444444444444fff44ff44444f444444f4444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccbbbbbbccccccc444444444444444444444444444444444444ff444444f444f4444444ff444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccbbbbbbbcccccc44444444444444444444444444444444444ff44444444fff444444444f444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccbbbbbbccccccc444444444444444444444444444444444444444444444f44444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccbbbbbbbcccccc444444444444444444444444444444444444444444444f44444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccbbbbbbbbcccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbbbbcccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbbbbcccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbbbbccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbbbbbcccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbbbbbcccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbcccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbbcccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccbbbbbccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbbccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbbccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbbccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccbbbbccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbbccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbbccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccbbbcccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccbbccccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccbbbcccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccbccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                ccccccccccccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                cccccccccccccccccccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccccccccccc4444444444444444444444
                cccccccccccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccccccccccccccc44444444444444444444
                cccccccccccccccccbcccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccccccccccccccccccc444444444444444444
                cccccccccccccccccbbccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbbccccccccccccc44444ccccccccccc4
                ccccccccccccccccbbbccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbbbbbbbbbbccccccc44cccccccccccccc
                ccccccccccccccccbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbc
                ccccccccccccccccbbbccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbccc
                ccccccccccccccccbbbccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbbbbbcccccccccccccccccccbbbbcccccccc
                ccccccccccccccccbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccccbbbbbbbbcccccccccccccccccccbbbcccccccccc
                cccccccccccccccbbbbcccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbbbcccccccccccccccccccccbcccccccccccc
                cccccccccccccccbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccccbbbbbcccccccccccccccccccccccbcccccccccccc
                ccccccccccccccbbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccccbbbbccccccccccccccccccccccccccccccccccccc
                ccccccccccccccbbbccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccbbbbbcccccccccccccccccccccccccccccccccccccc
                ccccccccccccccbbbcccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccccbbbbccccccccccccccccccccccccccccccccccccccc
                cccccccccccccbbbbcccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccccbbbcccccccccccccccccccccccccccccccccccccccc
                ccccccccccccbbbbcccc4444444444ccccccccccccc444444444444444444444444444444444444444444444444444444444444444444cccccccbbbbcccccccccccccccccccccccccccccccccccccccc
                cccccccccccbbbbcccc444444444ccccccccccccccccc444444444444444444444444444444444444444444444444444444cccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccc
                cccccccccccbcbccccc4444444ccccccccccccccccccccc44444444444444444444444444444444444444444444444444cccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccc44444ccccccccccccccccccccccccc44444444444444444444444444444444444444444444444ccccccccbbbbbbbcccccbbbccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccc444cccccccccbbbbbccccccccccccc444444444444444444444444444444444444444444444ccccccbbbbbbbbbbbccccbbcccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccc44cccccbbbbbbbbbbbbbbcccccccccc4444444444444444444444444444444444444444444ccccbbbbbbbbbbbcccccccbbcccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccc4ccccbbbbbbbbbbbbbbbbbbccccccccc44444444444444444444444444444444444444444cccccbbbbbbbcccccccccccbbcccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccbbbbbbbbccccbbbbbbbbccccccccc4444444444444444444444444444444444444444ccccbbbbbbcccccccccccccbbcccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccbbbbbcccccccccccbbbbbbccccccccc44444444444444444444444444444444444444cccccbbbccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccbbccccccccccccccccbbbbbccccccc44444444444444444444444444444444444444ccccbbccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccbbbcccccccc44444444444444444444444444444444444ccccccbbccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccbbccccccc4444444444444444444444444444444444cccccccbcccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccc4ccccccccccccccccccccccccccccbbccccccc4444444444444444444444444444444ccccccccbccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccbccccccc4444444444444444444444444cccccccbccccccbccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccc4cccccccccccccccccbbbbbbbccccccccccccccc4444444444444444444cccccccccccbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccddddbdddddddbdccccccccccccc4444444444444444ccccccccccccbbbcccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccdddddddddddbdddddddddbdddccccccccccccccccc44cccccccccccccccbbbbbcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccc4
                ccccccccccccccccccccdddddddddddddddddddddddddddddddddddcccccccccccccccbbbbbbbbbbbbbbcccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccc4444444444444444
                cccccccccccccccddddddddddddddddddddddddddddddddddddddddddddcccccccccccbbbbbbbbcccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccc44444444444444444
                cccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccc444444444444444444
                cccccdddddddddddddddddddddddddddddddddddddddddddddddddbbbddddbccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444ccccccccccccccccc44444444444444444444
                cccccccccddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbcccccccc4444444444444444444cccccccccccccccccccc44444444444444ccccccccccccc4444444444444444444444
                ccccccccccccddddcccccddddddddddddddddddddddddddddddddcccccbbbbbbbcccccccc444444444444444444444444ccccccccccccc44444444444444444444444444444444444444444444444444
                ccccccccccccccccccccccccdcccbbddddddddddddddddddddccccccccccbbbbbbcccccccc4444444444444444444444444ccccccccc4444444444444444444444444444444444444444444444444444
                cccccccccccccddddccccccdddbbddddddddddddddddddccccccccccccccccbbbbbccccccc44444444444444444ccccccccccccc44444444444444444444444444444444444444444444444444444444
                cccccccccccddddddddddddddbddddddddddddddd4bccccccccccccccccccccbbbbcccccccc44444444444444ccccccccccccccccc444444444444444444444444444444444444444444444444444444
                cccccccccddddddddddddddddddddddddddddddddbccccccccccccccccccccccbbbbccccccc444444444444ccccccccccccccccccccc4444444444444444444444444444444444444444444444444444
                ccccccccdddddddddddddddddddddddddddddddddddcccccbbbbbbbcccccccccbbbbcccccccc444444444ccccccccccccccccccccccccc44444444444444444444444444444444444444444444444444
                cccccddddddddddddddddddddddddddddddddddddddddcbbdddddddbbccccccccbbbbccccccc44444444ccccccccccccccccccccccccccc4444444444444444444444444444444444444444444444444
                ccccdddddddddddddddddddddddddddddddddddddddddddddddddddddbccccccccbbbcccccccc444444ccccccccccccccccccccccccccccc444444444444444444444444444444444444444444444444
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccbbbbccccccc44444ccccccccccccccccccccccccccccccc44444444444444444444444444444444444444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbccccccc4444ccccccccccccccccccccccccccccccccc4444444444444444444444444444444444444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbbbccccccc444ccccccccccccccccccccccccccccccccccc444444444444444444444444444444444444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbccccccc444ccccccccccccccccccccccccccccccccccc444444444444444444444444444444444444444444444
                4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbdcccccccccccccccccccccccccccc44444444444444444444444444444444444444444444
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddbdccccccccccccccccccccccccccc44444444444444444444444444444444444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddcccccccccccccccccccccccccc4444444ccccccccc444444444444444444444444444
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcdddccccccccccccccccccccccc44444ccccccccccccc4444444444444444444444444
                cccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccc444ccccccccccccccc444444444444444444444444
                cccccccccccccccccccddddddbddddddddddddddcccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccc44ccccccccccccccccc44444444444444444444444
                cccccccccccbbbbbbbbbcccccddddddddddddbbcccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddccccccccccccccccccc4444444444444444444444
                cccccccccbbdddddddddbbccccccbbbbbbbbb4ccccccccccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccc444444444444444444444
                ccccccccbdddddddddddddbccccccccccccc444ccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccc444444444444444444444
                cccddddddddddddddddddddbccccccccccc4c44ccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccc44444444444444444444
                dddddddddddddddddddddddddccccccccccccc44cccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccc44444444444444444444
                dddddddddddddddddddddddddddcccccccccddd4cccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccc44444444444444444444
                dddddddddddddddddddddddddddddccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccc44444444444444444444
                ddddddddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccc44444444444444444444
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccc44444444444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccc44444444444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccdddddddddbdddddddddddddddddddddddddddddddddddddddddddddccccc4444444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccdddddddddddddddddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddcccccccc444444444
                dddddddddddddddddddddddddddddddddddddddddddddddddccccdddddddddddddddddddddddddddddddddccccccccccccccbbddddddddddddddddddddddddddddddddddddddccccccccccccc4444444
                dddddddddddddddddddddddddddddddddddddddddddddddddbccddddddddddddddddddddddddddddddddddddccccccccccccccbbbbbbbccddddddddddccccccccccccccccccccccccccccccccc444444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddcccdddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444
                dddddddddccbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccc4ccccccccccccccccccccccccccccccccccccccccccc444
                ccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbddddddccccccccccccccccccccccccccccccccccccccc44
                cccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddccccccccccccccccccccccccccccccccccccc44
                cccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddcccccccccccccccccccccccccccccccccc44
                ccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bddddddddddddccddccccccccccccccccccccccccccccccccc4
                cccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcddddcccccccccccccccccccccccccccccc4
                ccccccddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccbddddddddddddddcdddddddddddddddddcccccccccccccccccc4
                cccccdddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccbddddddddddddddcccdddddddddddddddddddddcccccccccccc4
                cccccccccccccccccccccccccccccddcccddcbbbbbdddbddddccccccccccccccccdddddddddddddddddddddddddddddddddddddddcccbddddddddddddddccccdddddddddddddddddddddddccccccccc4
                ccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccbbdddddddddbbccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccc4
                ccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddcccccbbbbbbbbbccccccccccddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddcc4
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc4
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccc4
                cccccccccccccc44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccc4
                ccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddcccccccc44
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddccccccccccccccccccccccccdddddddddddddddddddcccccccccccc44
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddbbddbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc4
                ccc4cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccc4
                c44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccc4
                444cccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccc4
                44ccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccc4
                44ccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccc4
                4cccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccc4
                4ccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccc44
                4cccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccc44
                cccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccc44
                cccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccc444
                cccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccc444
                cccccccccccccccccccccccccccccccccccdddddccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccc4444
                cccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccc4444
                cccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccc44444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddd4444
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccdddddddddddddddddddddddddc444444
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccc4444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44ccccccccccccccc444444444444444ccccccc44444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccc444444444444444444444ccc444444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444cccccccc44444444444444444444444ccc444444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444ccccc4444444444444444444444ccccccc4444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444cc444444444444444444444cccccccccc444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444cccccc444444444444444cccccccccccccc44444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444ccccccccccccccccccccccccccccccccccccc4444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444ccccccccccccccccccccccccccccccccccccccc444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccc44444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccc4444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccc4444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44ccccccccccccccccccccccccccccccccccccccccccccc444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4c4ccccccccccccccccccccccccccccccccccccccccccccc44
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4ccccccccccccccccccccccccccccccccccccccccccccccc44
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4cccccccccccccccccccccccccccccccccccccccccccccccccc4
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44ccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444cccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444c4ccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444c4ccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444c4ccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444c4ccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444c44ccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444c44ccccccccccccccccccccccccccccccccccccccccccccccccccc
                4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444c444ccccccccccccccccccccccccccccccccccccccccccccccccccc
                4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444c444ccccccccccccccccccccccccccccccccccccccccccccccccccc
                4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444c444ccccccccccccccccccccccccccccccccccccccccccccccccccc
                44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444c44444ccccccccccccccccccccccccccccccccccccccccccccccccc4
                44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444c44444ccccccccccccccccccccccccccccccccccccccccccccccccc4
                444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444c444444ccccccccccccccccccccccccccccccccccccccccccccccccc4
                444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444c4444444ccccccccccccccccccccccccccccccccccccccccccccccc44
                4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44c44444444ccccccccccccccccccccccccccccccccccccccccccccccc44
                4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44c444444444ccccccccccccccccccccccccccccccccccccccccccccc444
                44444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4c44444444444ccccccccccccccccccccccccccccccccccccccccccc4444
                444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444444444ccccccccccccccccccccccccccccccccccccccccccc4444
                444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444444ccccccccccccccccccccccccccccccccccccccccc44444
                4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444444444ccccccccccccccccccccccccccccccccccccccc444444
                44444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4c444444444444444ccccccccccccccccccccccccccccccccccccc4444444
                444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44c4444444444444444ccccccccccccccccccccccccccccccccccc44444444
                444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444c4444444444444444ccccccccccccccccccccccccccccccccc444444444
                4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444c44444444444444444ccccccccccccccccccccccccccccccc4444444444
                44444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444c444444444444444444ccccccccccccccccccccccccccc444444444444
                444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444c4444444444444444444ccccccccccccccccccccccccc4444444444444
                4444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444444c44444444444444444444ccccccccccccccccccccc444444444444444
                c4444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444444c4444444444444444444444ccccccccccccccc444444444444444444
                4cc444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444444c444444444444444444444444444444444c44444444444444444444
                444cc44444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444444444444444c4444444444444444444444444444444c444444444444444444444
                44444cc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444444444444c44444444444444444444444444444c4444444444444444444444
                4444444cc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444444444444444c444444444444444444444444444c44444444444444444444444
                `)
            tiles.setTilemap(tilemap`level`)
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(8, 50))
            mySprite2 = sprites.create(img`
                . . . . . . . . c c c c c . . . 
                . . . . . . c c 2 2 2 2 2 c . . 
                . . . . . c 2 2 2 2 2 2 2 2 c . 
                . . . . c b b b b b b 2 2 2 c . 
                . . . . c 9 9 b b 9 b b c c . . 
                . . . c 9 9 9 b b 9 9 9 c . . . 
                . . . c 9 9 9 9 b 9 9 9 c . c c 
                . . . c 2 9 9 9 b 9 9 9 b b 2 c 
                . . c c 2 9 c 9 b 9 b 9 2 2 2 c 
                . c c 2 2 9 9 9 9 9 b 9 b b 2 c 
                f 2 2 2 9 9 9 9 9 b b 9 f . c c 
                f f f 9 9 9 9 9 9 b b b f . . . 
                . . . f f 9 9 9 b b b 2 2 f . . 
                . . . . . f f f 2 2 2 2 2 f . . 
                . . . . . . . . f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            mySprite3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . c c c c . . . 
                . . . . . . . c c d d d d c . . 
                . . . . . c c c c c c d d c . . 
                . . . c c c 7 7 7 7 d c c c c c 
                . . c 7 7 1 7 7 7 7 7 1 c c 7 f 
                . c 7 7 7 7 1 7 7 7 7 d 1 f 7 f 
                f 7 7 7 7 7 1 7 7 7 7 7 1 f 7 f 
                f 7 7 f 7 7 1 7 c f 7 7 1 7 7 f 
                f 7 7 7 7 7 1 c 7 f 7 7 1 f f f 
                . f 7 7 7 7 1 7 7 f 7 7 d f . . 
                . . f 7 7 1 7 c c 7 7 d f . . . 
                . . . f d 7 7 7 7 7 7 c f . . . 
                . . . . f f 7 7 7 7 c d b c . . 
                . . . . . . f f f f d d d c . . 
                . . . . . . . . . . c c c . . . 
                `, SpriteKind.Food)
            mySprite4 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c c c c . . . 
                . . . . . . c 5 5 5 5 5 c c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c b b b b b b 5 5 5 c . 
                . . . . c b b b b 1 b b c c . . 
                . . . . c 1 1 b b 1 1 1 c . . . 
                . . . c 1 1 1 1 b 1 1 1 c . . . 
                . . . c 1 1 1 1 b 1 1 1 b b c c 
                . . c c d 1 1 1 b 1 b 1 5 5 5 c 
                . . c c d 1 c 1 1 1 b 1 b b 5 c 
                . c c d d 1 1 1 1 1 b 1 f b 5 c 
                f d d d 1 1 1 1 1 b b b f . c c 
                f f f f f 1 1 1 b b 5 5 5 f . . 
                . . . . . f f f 5 5 5 5 5 f . . 
                . . . . . . . . f f f f f f . . 
                `, SpriteKind.Food)
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c c c . . . . 
                . . . . . . c c d d d d c . . . 
                . . . . . c c c c c c d c . . . 
                . . . . c c 4 4 4 4 d c c . . . 
                . . . c 4 d 4 4 4 4 4 1 c . c c 
                . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
                . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
                f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
                f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
                f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
                . f 4 4 4 4 1 c 4 f 4 d f f f f 
                . . f f 4 d 4 4 f f 4 c f c . . 
                . . . . f f 4 4 4 4 c d b c . . 
                . . . . . . f f f f d d d c . . 
                . . . . . . . . . . c c c . . . 
                `, SpriteKind.Food)
            mySprite6 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c c c . . . . 
                . . . . . . c d d d d d c . . . 
                . . . . . . c c c c c d c . . . 
                . . . . . c 5 5 5 5 d c c . . . 
                . . . . c d 5 5 5 5 5 1 c . . . 
                . . . c 5 5 1 5 5 5 5 5 1 c . . 
                . . c 5 5 5 5 1 5 5 5 5 1 c c c 
                . c 5 5 5 5 5 1 c c 5 5 1 5 5 c 
                . c 5 5 5 5 5 1 5 5 f 5 1 f 5 f 
                f 5 5 5 5 f 5 1 c 5 f 5 d f 5 f 
                f 5 5 5 5 5 5 1 5 f f 5 f f 5 f 
                . f 5 5 5 5 1 5 5 5 5 c b c f f 
                . . f f f d 5 5 5 5 c d d c . . 
                . . . . . f f f f f c c c . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 47))
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
            tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
            tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
            tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
            tiles.placeOnTile(mySprite6, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
        } else {
            if (info.score() % 3 == 2) {
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffff66666688888888888886699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999666666666666699999fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999996666699999999668ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999996666888866666666688ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86666666668888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888886ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888666688888866ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff6668888888888888888866688886669ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966688888888888888888888866999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9996666668888888888888888869999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999996666668888888888866666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999966666888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6699999999996666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8666666666666888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff6668888888888868888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6966888888888696666688888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff69666666688869999966666666688fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66699999966686666699999999668fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff866699999966888866666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888666666996688888888886666ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888666968888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888666888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff1fffffffffff1ffffffffffffffffffffffff888888666668888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888669996666888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888666699966888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88886666968ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffdddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddfffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffddddddddbbdddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffbbdddddddddbbbdddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffbbbbbdddddddddbbbddddddddddddddddddddfffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff1ffffffffffffffcccbbbbdddddddddddbddddddddbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffccccccbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffccccccccbbbbbbbddddddddddbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffccccccccccbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffccccccccccccbbbbbbbbdddddddddddddddbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffdddcccccccccccccccbbbbbbbddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffddddddddccccccccccccccbbbbbbbbbbddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffdddddddddccccccccccccccccccbbbbbbbbbbddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffdddddddddcccccccccccccccccccccbbbbbbbbbbbbbdddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffddddddddddccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbfffffddddddddddcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffddddddddddccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbfffddddddddddcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffdddddddddcccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbfdddddddddddddccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffdddddddddccccccccccccccccccccccccccccccccccccccccbbbbbbbddddddddddddddcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffddddddddcccccccbbccccccccccccccccccccccccccccccccccccccdddddddddddddddccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffddddddddcccccccbbbcccccccccccccccccccccccccccccccccccccdddddddddddddddccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffdddddccccccccccbbbbbccccccccccccccccccccccccccccccccccddddddddddddddddcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffcccccccccccccbdddbbbbbbbccccccccccccccccccccccccccccdddddddddddddddddccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffcccccccccccccbbbbddbbbbbbbbbccccccccccccccccccccccccdddddddddddddddddccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffcccccccccccbbbbbbbddbbbbbbbbbbbbbccccccccccccccccccddddddddddddddddcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffddcccccccdddbbbbbbbbdddbbbbbbbbbbbbbbccccccccccccccdddddddddddddddccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffdddddddbbbdddbbbbbbbbbddddbbbbbbbbbbbbbccccccccccccdddddddddddddddccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffdddddddddbbddddbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbcccccddddddddddddddcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffcdddddddddbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbddddddddddddddcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffccddddddddddbbddddbbbbbbbbbbbbbbbddbbbbbbbbcccbbbbbddddddddddddddcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffbcccdddddddddbbbdddbbbbbbbbbbbbbbbbdddddddcccccddddddddddddddddcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffcbcccddddddddddbbddddbbbbbbbbbbbbbbbbbbbbbcccccbbbbddddddddddddcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffcbbcccddddddddddbbddddddbbbbbbbbbbbbbbbbbbcccccbbbbdddddddddddccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffff2fffffffffccbcccccdddddddddbbdddddddbbbbbbbbbbbbbbbbcccccbbbbbddddddddcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffcbbcccccdddddddddbbbddddddddbbbbbbbbbbbbbccccccbbbbbdddddccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffcbbbccccccdddddddddbbbddddddddddbbbbbbbbcccccccbbbbbddcccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffccbbbccccccdddddddddddbbbbddddddddddddddccccccddddddddccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffccbbbbccccccdddddddddddddbbbbdddddddddddcccddddddddffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffcccbbbbcccccccdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffcccbbbbbcccccccddddddddddddddddddddddddddddddddddffffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffccccbbbbddbcccccccdddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffccccbbbdddbcccccccccdddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffcccccbddddbcccccccccccdddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffccccccddddbbbcccccccccccccddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffccccccdddbbbbbcccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffcccccddddbbbbbbbcccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffcccccddccccbbbbbbbbbbccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffdccccccccccccbbbbbbbbbbbcccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddcccccccccccccbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffdddcccccccccccccccbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddddcccccccccccccccccccccccfffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffddddddcccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffddddddddddccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                tiles.setTilemap(tilemap`level_0`)
                tiles.placeOnTile(myEnemy, tiles.getTileLocation(8, 50))
                mySprite2 = sprites.create(img`
                    . . . . . . . . c c c c c . . . 
                    . . . . . . c c 2 2 2 2 2 c . . 
                    . . . . . c 2 2 2 2 2 2 2 2 c . 
                    . . . . c b b b b b b 2 2 2 c . 
                    . . . . c 9 9 b b 9 b b c c . . 
                    . . . c 9 9 9 b b 9 9 9 c . . . 
                    . . . c 9 9 9 9 b 9 9 9 c . c c 
                    . . . c 2 9 9 9 b 9 9 9 b b 2 c 
                    . . c c 2 9 c 9 b 9 b 9 2 2 2 c 
                    . c c 2 2 9 9 9 9 9 b 9 b b 2 c 
                    f 2 2 2 9 9 9 9 9 b b 9 f . c c 
                    f f f 9 9 9 9 9 9 b b b f . . . 
                    . . . f f 9 9 9 b b b 2 2 f . . 
                    . . . . . f f f 2 2 2 2 2 f . . 
                    . . . . . . . . f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Food)
                mySprite3 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . c c c c . . . 
                    . . . . . . . c c d d d d c . . 
                    . . . . . c c c c c c d d c . . 
                    . . . c c c 7 7 7 7 d c c c c c 
                    . . c 7 7 1 7 7 7 7 7 1 c c 7 f 
                    . c 7 7 7 7 1 7 7 7 7 d 1 f 7 f 
                    f 7 7 7 7 7 1 7 7 7 7 7 1 f 7 f 
                    f 7 7 f 7 7 1 7 c f 7 7 1 7 7 f 
                    f 7 7 7 7 7 1 c 7 f 7 7 1 f f f 
                    . f 7 7 7 7 1 7 7 f 7 7 d f . . 
                    . . f 7 7 1 7 c c 7 7 d f . . . 
                    . . . f d 7 7 7 7 7 7 c f . . . 
                    . . . . f f 7 7 7 7 c d b c . . 
                    . . . . . . f f f f d d d c . . 
                    . . . . . . . . . . c c c . . . 
                    `, SpriteKind.Food)
                mySprite4 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c c c c . . . 
                    . . . . . . c 5 5 5 5 5 c c . . 
                    . . . . . c 5 5 5 5 5 5 5 5 c . 
                    . . . . c b b b b b b 5 5 5 c . 
                    . . . . c b b b b 1 b b c c . . 
                    . . . . c 1 1 b b 1 1 1 c . . . 
                    . . . c 1 1 1 1 b 1 1 1 c . . . 
                    . . . c 1 1 1 1 b 1 1 1 b b c c 
                    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
                    . . c c d 1 c 1 1 1 b 1 b b 5 c 
                    . c c d d 1 1 1 1 1 b 1 f b 5 c 
                    f d d d 1 1 1 1 1 b b b f . c c 
                    f f f f f 1 1 1 b b 5 5 5 f . . 
                    . . . . . f f f 5 5 5 5 5 f . . 
                    . . . . . . . . f f f f f f . . 
                    `, SpriteKind.Food)
                mySprite5 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c c c . . . . 
                    . . . . . . c c d d d d c . . . 
                    . . . . . c c c c c c d c . . . 
                    . . . . c c 4 4 4 4 d c c . . . 
                    . . . c 4 d 4 4 4 4 4 1 c . c c 
                    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
                    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
                    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
                    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
                    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
                    . f 4 4 4 4 1 c 4 f 4 d f f f f 
                    . . f f 4 d 4 4 f f 4 c f c . . 
                    . . . . f f 4 4 4 4 c d b c . . 
                    . . . . . . f f f f d d d c . . 
                    . . . . . . . . . . c c c . . . 
                    `, SpriteKind.Food)
                mySprite6 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c c c . . . . 
                    . . . . . . c d d d d d c . . . 
                    . . . . . . c c c c c d c . . . 
                    . . . . . c 5 5 5 5 d c c . . . 
                    . . . . c d 5 5 5 5 5 1 c . . . 
                    . . . c 5 5 1 5 5 5 5 5 1 c . . 
                    . . c 5 5 5 5 1 5 5 5 5 1 c c c 
                    . c 5 5 5 5 5 1 c c 5 5 1 5 5 c 
                    . c 5 5 5 5 5 1 5 5 f 5 1 f 5 f 
                    f 5 5 5 5 f 5 1 c 5 f 5 d f 5 f 
                    f 5 5 5 5 5 5 1 5 f f 5 f f 5 f 
                    . f 5 5 5 5 1 5 5 5 5 c b c f f 
                    . . f f f d 5 5 5 5 c d d c . . 
                    . . . . . f f f f f c c c . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Food)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 47))
                tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
                tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
                tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
                tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
                tiles.placeOnTile(mySprite6, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
            } else {
                if (info.score() % 3 == 0) {
                    game.over(true)
                }
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . 2 . . . 2 2 . . . . . . 
        . . . 2 2 1 2 1 1 1 . . . . . . 
        . . 2 2 2 1 2 1 2 2 2 . . . . . 
        . . . 2 2 1 2 1 1 1 . . . . . . 
        . . . . 2 . . . 2 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 2 . . . 2 . . . . . . . . 
        . . 1 1 1 2 1 2 2 . . . . . . . 
        . 2 2 2 1 2 1 2 2 2 . . . . . . 
        . . 1 1 1 2 1 2 2 . . . . . . . 
        . . 2 2 . . . 2 . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    otherSprite.destroy()
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    game.over(false)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999dddddddddd99
    dd999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd999999999999999999999999999999999999999999999999ddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    ddddddd999999999999999999999999999999999ddd9999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999dd7777777777777dddddddd
    ddddddd999999999999999999999999999999ddddddd999999999999999999999999999999999999999dddddddddd999999999999999999999999999999999999999977777777777777777777ddddddd
    ddddddd9999999999999999999999999999ddddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999777777777777777777777777dddddd
    ddddddd99999999999999999999999999dddddddddddd99999999999999999999999999999999999999ddddddddddd999999999999977777777777777777777777777777777777777777777777dddddd
    ddddddd9999999999999999999999999ddddddddddddd9999999999999999999999999999999999999dddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd999999999999999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd999999999997999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd999997777777799999999999dddddddddddddd999999999999999999999999dd999999999dddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd997777777777799999999999ddddddddddddddd9999999999999999999999ddddddd9999ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd77777777777779999999999dddddddddddddddd999999999999999999999dddddddddd99ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd77777777777779999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd77777777777777999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddd7777777777777777999999999dddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    dddd77777777777777777999999ddddddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    dddd77777777777777777ddddddddddddddddddddddddd99ddd999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    ddd777777777777777777ddddddddddddddddddddddddd99dddd99999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    ddd777777777777777777dddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
    dd7777777777777777777ddddddddddddddddddddddddddddddddd999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
    dd7777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
    d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777ddddd
    d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddd
    d77777777777777777777dddddddddddd77777dddddddddddddddd99999999999dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777dddd
    7777777777777777777777ddddddddddd7777777dddddddddddddd99999999999ddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777dddddddddd77777777dddddddddddddd9999999999dddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777ddddddd77777777777dddddddddddddddddddddd9dddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777dddd777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777dddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777dddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setTilemap(tilemap`level_2`)
mySprite = sprites.create(img`
    . . b . . . c c c c c c c . . . 
    . b 2 b . c c c c c c c c c . . 
    b 2 2 3 b c c c c c 1 1 c c c . 
    2 3 9 2 3 c c c c c 1 f c c c . 
    2 3 9 2 2 c c c c c 9 f c c c . 
    2 3 9 2 2 a c c c c a a c c c . 
    2 3 3 3 2 a 1 1 d c c c c 4 4 4 
    . 2 9 2 2 a 1 1 d d d d 1 2 4 4 
    . 2 3 2 2 a 1 1 d d d d 1 1 c . 
    . 2 3 2 2 a 1 1 d d d d 1 1 a . 
    . 2 3 2 2 a c 1 1 d d d 1 1 a . 
    2 3 9 3 2 a c 1 1 1 d d 1 1 a . 
    2 3 9 3 2 a c 1 1 1 1 1 1 1 a . 
    2 . 2 3 2 c c c 1 1 1 1 c c a . 
    . . . . . 1 4 4 c c 1 c 4 a a . 
    . . . . . . 4 4 4 4 c c 4 4 4 4 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 2 2 2 2 2 c . . 
    . . . . . c 2 2 2 2 2 2 2 2 c . 
    . . . . c b b b b b b 2 2 2 c . 
    . . . . c 9 9 b b 9 b b c c . . 
    . . . c 9 9 9 b b 9 9 9 c . . . 
    . . . c 9 9 9 9 b 9 9 9 c . c c 
    . . . c 2 9 9 9 b 9 9 9 b b 2 c 
    . . c c 2 9 c 9 b 9 b 9 2 2 2 c 
    . c c 2 2 9 9 9 9 9 b 9 b b 2 c 
    f 2 2 2 9 9 9 9 9 b b 9 f . c c 
    f f f 9 9 9 9 9 9 b b b f . . . 
    . . . f f 9 9 9 b b b 2 2 f . . 
    . . . . . f f f 2 2 2 2 2 f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 7 7 7 7 d c c c c c 
    . . c 7 7 1 7 7 7 7 7 1 c c 7 f 
    . c 7 7 7 7 1 7 7 7 7 d 1 f 7 f 
    f 7 7 7 7 7 1 7 7 7 7 7 1 f 7 f 
    f 7 7 f 7 7 1 7 c f 7 7 1 7 7 f 
    f 7 7 7 7 7 1 c 7 f 7 7 1 f f f 
    . f 7 7 7 7 1 7 7 f 7 7 d f . . 
    . . f 7 7 1 7 c c 7 7 d f . . . 
    . . . f d 7 7 7 7 7 7 c f . . . 
    . . . . f f 7 7 7 7 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Food)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, SpriteKind.Food)
mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Food)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 5 5 5 5 d c c . . . 
    . . . . c d 5 5 5 5 5 1 c . . . 
    . . . c 5 5 1 5 5 5 5 5 1 c . . 
    . . c 5 5 5 5 1 5 5 5 5 1 c c c 
    . c 5 5 5 5 5 1 c c 5 5 1 5 5 c 
    . c 5 5 5 5 5 1 5 5 f 5 1 f 5 f 
    f 5 5 5 5 f 5 1 c 5 f 5 d f 5 f 
    f 5 5 5 5 5 5 1 5 f f 5 f f 5 f 
    . f 5 5 5 5 1 5 5 5 5 c b c f f 
    . . f f f d 5 5 5 5 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
myEnemy = sprites.create(img`
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444442222222222222244444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444442222222222222222222222222222222222444444444444444444444444444444444444444444222222222222222222222222222222244444444444444444444444444444444444444444444444444444444444444444444444422222222222
    44222222222222222222444444444444444444444444444444444444444444444444444444444444442222222222222222222222222222222224444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222244444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444442222222222222222222222222222222222222222
    22222222222222222222222444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222224444444444444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444442222222222222222222222222222222222222222222222222
    22222222222222222222222222222244444444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222222222
    22222222222222222222222222222222244444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444444222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444422222222222222222222222222222222244444444444444444222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444442222222222222222222222222222222444444444444444444422222222222222222222222222444444422222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444422222222222222222222222222222222222222222222222222444444422222222222222222222222222222222222222222222222224444444442222222222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222224444444442222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222244444444444222222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222244444444444222222222
    22222222222222222222222222222222222222222222222444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444444222222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222224444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444444444422222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222244444444444444444222222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222244444444444222222222222222222444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444444444422222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222244444444444444444222222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222244444444444222222222222222244444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222244444444444222222222222222444444444444422222222222222222222222222222222222222222222222444444422222222222222222222222222222222222222222222222222222222444444444444444444444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222444444444444444444422222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222244444444444222222222222222444444444444422222222222222222222222222222222222222222222224444444442222222222222222222222222222222444444422222222222222222444444444444444444444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222222222222222222222222222222224444444442222222222222222222222222222222444444444444444444422222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222244444444444222222222222224444444444444442222222222222222222222222222222222222222222244444444444222222222222222222222222222224444444442222222222222222444444444444444444444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222224444444222222222222222222222444444422222222222222222444444422222222244444444444444444222222222222222222222222444444444444422222222
    22222222222222222222222222222222222222222222244444444444222222222222224444444444444442222222222222222222222222222222222222222222444444444444422222222222222222222222222224444444442222222222222222444444444444444444444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222244444444422222222222222222222222222222222222222222244444444444222222244444444444444444222222222222222222222222244444444444222222222
    22222222222222222222222222222222222222222222244444444444222222222222224444444444444442222222222222222222222222222222222222222222444444444444422222222222222222222222222224444444442222222222222222444444444444444444444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222244444444422222222222222222222222222222222222222222444444444444422222224444444444444442222222222222222222222222224444444442222222222
    22222222222222222222222222222222222222222222224444444442222222222222224444444444444442222222222222222222222222222222222222222222444444444444422222222222222222222222222224444444442222222222222222444444444444444444444442222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222244444444422222222222222222222222222222222222222222444444444444422222222444444444444422222222222222222222222222222444444422222222222
    22222222222222222222222222222222222222222222222444444422222222222222224444444444444442222222222222222222222222222222222222222222444444444444422222222222222222222222222224444444442222222222222222444444444444444444444442222222222222222222222222222244444442222222444444444444422222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222244444444422222222222222222222222222222222222222224444444444444442222222224444444442222222222222222222222222222222222222222222222222
    22222222222222222222244444442222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222444444444444422222222222222222222222222224444444442222222222222222444444444444444444444442222222222222222222222222222444444444222222244444444444222222222222222222222222222222222222222222444444444444444444422222222222222222222222222222222222244444444422222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222444444444222222222222222222222222222222222222222224444444444444442222222444444422222222222222222222222222222444444444444422222222222222222222222222224444444442222222222222222244444444444444444444422222222222222222222222222222444444444222222222444444422222222222222222222222224444422222222222222244444444444444444222222222222222222222222222222222222244444444422222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222224444444444422222222222222222222222222222222222222222444444444444422222244444444444222222222222222222222222222444444444444422222222222222222222222222222444444422222222222222222244444444444444444444422222222222222222222222222222444444444222222222222222222222222222222222222222244444442222222222222244444444444444444222222222222222222222222222222222222244444444422222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222444444444444422222444444444444422222222222222222222222222244444444444222222222222222222222222222222222222222222222222222222224444444444444444444222222222222222222222222222222444444444222222222222222222222222222222222222222244444442222222222222224444444444444442222222222222222222222222222222222222224444444222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222244444444444222222444444444444422222222222222222222222222224444444442222222222222222222222222222222222222222222222222222222222444444444444444442222222222222222222222222222222444444444222222222222222222222222222222222222222244444442222222222222222444444444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222222444444422222224444444444444442222222222222222222222222222444444422222222222222222222222222222222222222222222222222222222222244444444444444422222222222222222222222222222222444444444222222222222222222222222222222222222222244444442222222222222222224444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444222222222222222222222222222222222444444444222222222222222222222222222222222222222244444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444422222222222222222222222222222222222244444442222222222222222222222222222222222222222224444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444422222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444222222222222222222222222222222244444442222222222222222222222222222222
    22222222222222222244444444444442222222222222222222222222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444422222222222222222222222222222222444444444222222222222222222222222222222
    22222222222222222224444444444422222222222222222244422222222222222222222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444222222222222222222222222222222
    22222222222222222222444444444222222222222222222244422222222222222222222222224444422222224444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444222222222222222222222222222222
    22222222222222222222244444442222222222222222222244422222222222222222222222224444422222222444444444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222224444422222222444444444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444222222222444444444222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222224444422222222244444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444444422222222444444444222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222224444422222222222444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222244422222222222222222222222222222222244444222222222222222222222222222222222222444444422222222444444444222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224442222222222222222222222222222222222222222422222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222244422222222222222222222222222222222244444222222222222222222222222222222222222444444422222222244444442222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224442222222222222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222222242222222222222222222444442222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222244422222222222222222222222222222222244444222222222222222222222222222222222222444444422222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224442222222222222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444222222222222222222222222222222222222444444422222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444222222222222222222222222222222222222244444222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    `, SpriteKind.Enemy)
myEnemy.setVelocity(0, -10)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 47))
tiles.placeOnTile(myEnemy, tiles.getTileLocation(8, 50))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
tiles.placeOnTile(mySprite6, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
