//primeiro criar o nosso personagem padrao
//


const defaultCharacter = {
    name: '',
    life:1,
    masLife:1,
    attack:0,
    defense:0
}

//criar factorys pra conseguirmos criar um guerreiro por exemplo. o objeto padrao como ele nao é criado na pratica ele vai ser usado só como modelo ele nao precisa de um factory pra ele.
// ja os outros seria legal a gente criar um factory
//voce pode usar o const ou o function, o bonieky prefere usar o const, entao vamos fazer const creatKnight

const creatKnight = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life:100,
        maxLife:100,
        attack:10,
        defense:8,
    }
}

// ou podemos fazer já eu prefiro a segunda.
function createKnight(name) {
    return {
      ...defaultCharacter,
      name: name,
      life: 100,
      maxLife: 100,
      attack: 10,
      defense: 8,
    };
  }


  function createSorcerer(name) {
    return {
      ...defaultCharacter,
      name: name,
      life: 50,
      maxLife: 50,
      attack: 14,
      defense: 3,
    };
  }

  //apartir das instruções acima(feito o template para guerreiro kinght e mago sorcerer) podemos criar o nosso guerreiro la em script.

  //vamos criar os monstros agora

  function createLittleMonster() {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife:40,
        attack:4,
        defense:4
    }
  }

  function createBigMonster() {
    return {
        ...defaultCharacter,
        name: 'Big monster',
        life: 120,
        maxLife:120,
        attack:16,
        defense:6
    }
  }

