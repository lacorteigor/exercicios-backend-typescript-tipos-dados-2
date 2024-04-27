import { escreverArquivo, lerArquivo } from "../01/index";
import { Usuario } from "../02/index";

const excluirUsuario = (cpf: string): Usuario | string => {

    const excluir = lerArquivo() as Usuario[];

    const usuario = excluir.find((usuario) => {
        return cpf === usuario.cpf;
    });

    if (usuario) {
        const resultado = excluir.filter((usuario) => {
            return cpf !== usuario.cpf;
        });

        escreverArquivo(resultado);
        return usuario;
    }

    return "Usuário não encontrado";
};

console.log(excluirUsuario('11122233399'));