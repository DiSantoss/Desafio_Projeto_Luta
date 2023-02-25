//criação dos personagens 1 e 2.

const char = creatKnight('Bonieky');

const monster = createLittleMonster();

console.log(char.name);
console.log(char.life);
console.log(monster.name)


//dando inicio ao jogo
stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);