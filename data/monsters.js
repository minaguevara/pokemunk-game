const embyImage = new Image()
embyImage.src = './img/embySprite.png'

const draggleImage = new Image()
draggleImage.src = './img/frogSprite2.png'

const montsers = {
    Emby: {
        position: {
            x: 280,
            y: 325
        },
        image: {
            src: './img/embySprite.png'
        },
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        name: 'Flam',
        attacks: [attacks.Tackle, attacks.Fireball]
    },

    Draggle: {
        position: {
            x: 690,
            y: 200
        },
        image: {
            src: './img/frogSprite3.png'
        },
        frames: {
            max: 5,
            hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Frogora',
        attacks: [attacks.Tackle, attacks.Poison]
    },
}