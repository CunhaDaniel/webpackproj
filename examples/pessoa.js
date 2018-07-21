class Pessoa{
    constructor(nome){ //Equal anothers LP 
        this.nome = nome
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }

    changeName(name){
        this.name = name
        console.log("Nome alterado com sucesso")
    }
}

export default Pessoa