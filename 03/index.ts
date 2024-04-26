import { escreverArquivo, lerArquivo } from "../01/index";
import { Usuario } from "../02/index";

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario | string => {

    const atualizar = lerArquivo() as Usuario[];

    const usuario = atualizar.find((usuario) => {
        return cpf === usuario.cpf;
    });

    if (!usuario) {
        return "Usuário não encontrado";
    }

    Object.assign(usuario, dados);
    escreverArquivo(atualizar);

    return dados;
};

const detalharUsuario = (cpf: string): Usuario | string => {

    const detalhar = lerArquivo() as Usuario[];

    const usuario = detalhar.find((usuario) => {
        return cpf === usuario.cpf;
    });

    return usuario ? usuario : "Usuário não encontrado";
};


const dadosUsuario = {
    nome: 'Guido',
    email: 'guido@email.com',
    cpf: '11122233399',
    profissao: 'Professor',
    endereco: {
        cep: '00112233',
        rua: 'Rua abcd',
        complemento: 'casa',
        bairro: 'abcd',
        cidade: 'abcd'
    }
}

console.log(detalharUsuario('11122233399'));
console.log(atualizarUsuario('11122233399', dadosUsuario));