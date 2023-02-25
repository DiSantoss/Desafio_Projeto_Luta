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


  // cenario abaixo, oque o cenario precisa pra começar? o lutador 1, o lutador 2, onde está o elemento das informações de lutador 1 e lutador 2. esse é o básico, tendo ela a gente ja consegue exibir as informações etc.

  const stage = {
      fighter1:null,
      fighter2:null,
      fighterElement1:null,
      fighterElement2:null,
      //aqui criaremos uma função que ira iniciar o cenário chamada start. ela meio que fara uma função de construtor
      //ela tem que receber as 4 coisas que a gente precisa
       //pronto o passo 1 do start está feito,são 3 que precisamos pra ele :1°- pegar as inf. dos dois lutadores e os elementos deles e armazenar 2°- adicionar o evento do botão atacar pra 1 e pro outro e 3° fazer o update das informações. preencher visualmente as informações(dados)do lutador1 e 2.PODEMOS CRIAR UMA FUNÇÃO dentro do objeto para fazer esse update. //nao vai acontecer nada até voce ir rodar na aba script 
      start(fighter1,fighter2,fighterElement1,fighterElement2) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighterElement1 = fighterElement1;
        this.fighterElement2 = fighterElement2;
        //adicionar o evento do botão atacar pra 1 e pra outro
        this.fighterElement1.querySelector('.attackButton').addEventListener('click',() => {this.doAttack(this.fighter1, this.fighter2)});
        this.fighterElement2.querySelector('.attackButton').addEventListener('click',() => {this.doAttack(this.fighter2, this.fighter1)});
        // update 
        this.update();
      },

      update() {
          //fighter 1
          this.fighterElement1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
          //atualizando update
          let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100 ;
          this.fighterElement1.querySelector('.bar').style.width = `${f1Pct}`
          //fighter 2
          this.fighterElement2.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
           //atualizando update
           let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100 ;
          this.fighterElement2.querySelector('.bar').style.width = `${f2Pct}`


      },

      
      //função de atacar, que vai receber quem está atacando e quem recebe o ataque
      doAttack(attacking,attacked) {
          console.log(`${attacking.name} está atacando ${attacked.name}`);

          //sempre que houver um ataque, a ultima instrução é this.update pra atualizar
          this.update();
      }
      

  }

 
//agora terminar o update