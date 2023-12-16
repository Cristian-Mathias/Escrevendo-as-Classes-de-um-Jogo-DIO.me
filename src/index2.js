console.log("Escrevendo as classes de um Jogo")
console.log("--------------------------------")

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        const ataque = {
            mago: "usou magia",
            guerreiro: "usou espada",
            monge: "artes marciais",
            ninja: "usou shuriken"
        }

        let mensagem = " "

        switch (this.tipo) {
            case "mago":
                mensagem = (`O ${this.tipo} atacou usando ${ataque.mago}`)
                break
            case "guerreiro":
                mensagem = (`O ${this.tipo} atacou usando ${ataque.guerreiro}`)
                break
            case "monge":
                mensagem = (`O ${this.tipo} atacou usando ${ataque.monge}`)
                break
            case "ninja":
                mensagem = (`O ${this.tipo} atacou usando ${ataque.ninja}`)
                break
            default:
                mensagem = ('Herói não foi encontrado')
                break
        }

        console.log(mensagem)
    }
}

const nomeIdadeTipo = new Heroi("MMMMMM", "50", "monge");
nomeIdadeTipo.atacar();
console.log(nomeIdadeTipo);