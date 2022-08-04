// Como podemos melhorar o esse código usando TS? 

enum Cargo {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Cargo
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Cargo.Atriz
};

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Cargo.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Cargo.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Cargo.Padeiro
}