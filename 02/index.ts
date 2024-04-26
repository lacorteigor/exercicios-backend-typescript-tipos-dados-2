import { escreverArquivo, lerArquivo } from "../01/index";

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
};

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
};

const cadastrarUsuarios = (usuario: Usuario): Usuario => {

    const cadastro = lerArquivo() as Usuario[];
    cadastro.push(usuario);
    escreverArquivo(cadastro);
    return usuario;
};

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[];
};

const usuario = {
    nome: 'Guido',
    email: 'guido@email.com',
    cpf: '11122233399',
    profissao: 'Professor',
    endereco: null
};

console.log(cadastrarUsuarios(usuario));
console.log(listarUsuarios());
