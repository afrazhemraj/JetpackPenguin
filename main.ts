namespace SpriteKind {
    export const Platform = SpriteKind.create()
    export const Platform2 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
    if (mySprite.y <= 30 && mySprite.y > 20) {
        info.changeScoreBy(1)
        if (info.score() % 3 == 1) {
            scene.setBackgroundImage(img`
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
                fffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffff1111111111111111111ffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffff1111111111111111111111ffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffff
                fffffffffffffffffff11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffff
                ffffffffffffffffff111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffff
                fffffffffffffffff1111111111111111fffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff111111111111fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1111111111111ffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1111111111111ffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff111111111111fffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffff11111111111111111fff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffff1111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                ffffffffffffffffffffff111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                ffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                ffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
                fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffff555fffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
            tiles.setTilemap(tiles.createTilemap(hex`100032000000000000000000000000000000000000000000000000000000000000000000000003030303030000000000000000000000000000000000000000000000000000000000000000000003030303000000000000000000000000000000000000000000000000000000000000000000000000000303030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003030303030000000000000000000000000000000000000000030303030000000000000000000000000000000000000000000000000000000000000000000003030000000000000000000000000000000000000000000000000003030300000000000000000000000000000000000000000000000000000000000000000000000000030303000000000000000000000000000000000000000000000000000000000000000000000000000303030300000000000000000000000000000000000000000000000000000000000000000000000003030300000000000000000000000000000000000000000000030000000000000000000000000000000000000000000303030000000000000000000000000000000000000000000000000000000000000000000000000000030303000000000000000000000000000000000000000000030303000000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000303000000000000000000000000000000000000000303000000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000000000000000000000000000000000000000000000003030303000000000000000000000000000000000000000303030000000000000000000000000000000000000303000000000000000000000000000000000000000000000000030303030000000000000303030000000000000000000000000000000000000000000000000000000207070107020707020707010707020704010602060606060106060206060105`, img`
                ................
                ................
                ..22222.........
                ................
                .........2222...
                ................
                ................
                ..2222..........
                ................
                ................
                .........22222..
                ................
                ..2222..........
                ................
                ........22......
                ................
                ...222..........
                ................
                ...........222..
                ................
                ................
                ...2222.........
                ................
                ...........222..
                ................
                ....2...........
                ..........222...
                ................
                ................
                ...222..........
                ...........222..
                ................
                .......222......
                ................
                ..222...........
                .......22.......
                ............22..
                ................
                .......222......
                ................
                ................
                ..2222..........
                .........222....
                ..............22
                ................
                ........2222....
                ..222...........
                ................
                ................
                ................
                `, [myTiles.transparency16,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth], TileScale.Sixteen))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 48))
        } else {
            if (info.score() % 3 == 2) {
                tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000020202020200000000000000000000000000000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020200000000000000000000000000000000000000000202020200000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101`, img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 2 2 2 2 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 2 2 2 2 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 2 2 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 2 2 2 2 2 . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 2 2 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, [myTiles.transparency16,sprites.builtin.crowd3,sprites.castle.rock0], TileScale.Sixteen))
            } else {
                if (info.score() % 3 == 0) {
                    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020000000002020200000000000000000000000000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000000000000000000000000000000000000000000202020000000000000202020200000000000000000000000000000000000001010101010101010101010101010101`, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . 2 2 2 2 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 2 2 2 2 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . 2 2 2 2 . . . 
                        . 2 2 2 . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 2 2 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . 2 2 2 . . . . . . 2 2 2 2 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0], TileScale.Sixteen))
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    otherSprite.destroy()
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 16), randint(1, 25)))
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
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
tiles.setTilemap(tiles.createTilemap(hex`100032000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202000000000202020000000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000020202020000000000000000000000000000000000000000000000020200000000000000000000000000000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000202020200000000000000000000000000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000000202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000020202000000000000000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000020202000000000000000000000000000000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000000000000000000000202020000000000000000000000000000000000000000000000000000000101030103010101030103010101030103010103010103010303010103010101`, img`
    ................
    ................
    .........2222...
    ................
    ...2222.........
    ................
    ................
    .........2222...
    .222............
    ................
    .....2222.......
    ................
    ................
    .222......2222..
    ................
    .....22.........
    ................
    .........2222...
    ................
    ..2222..........
    ................
    .......2222.....
    ................
    .222............
    ................
    ................
    ...2222.........
    ...........222..
    ................
    ................
    ...2222.........
    ................
    ...........222..
    ................
    ....222.........
    ................
    ..........2222..
    ................
    ...2222.........
    ................
    ..........2222..
    ................
    ....222.........
    ................
    ..........2222..
    ................
    ..222...........
    ................
    ................
    ................
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2], TileScale.Sixteen))
mySprite2 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ...........ffff.........
    ..........fff1ff........
    ..........fffff555......
    ...........ffff.........
    ..........fffffff.......
    .........fff555fff......
    .........ff11111ff......
    ........ff1111111ff.....
    .......ffff11111ffff....
    ......fff.f11111f.fff...
    ......ff..f11111f..ff...
    .....ff...ff111ff...ff..
    ..........fffffff.......
    ...........fffff........
    ..........444..444......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Food)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 48))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(1, 16), randint(3, 25)))
tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 16), randint(26, 48)))
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
