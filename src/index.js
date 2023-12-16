console.log("Escrevendo as classes de um Jogo")
console.log("--------------------------------")

class Herói{
    constructor(nome,idade,tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    atacar(){
        return{
            mago:"magia",
            guerreiro:"espada",
            monge:"artes marciais",
            ninja:"shuriken"
        }
    }
        obterAtaques(){
        let ataques = this.atacar()
        let ataque = ataques[this.tipo]
            if (ataque) {
                console.log(`O ${this.tipo} atacou usando ${ataque}.`)
            } else {
                console.log('Herói não foi encontrado.');
            }
        }
}
let nomeIdadeTipo = new Herói("Cristian","40","monge")
nomeIdadeTipo.obterAtaques()
console.log(nomeIdadeTipo)
