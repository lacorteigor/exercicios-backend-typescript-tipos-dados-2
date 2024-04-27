import { lerArquivo } from "../01/index";
import { Usuario } from "../02/index";

const listarUsuarios = (profissao?: string): Usuario[] => {

    const filtro = lerArquivo() as Usuario[];

    if (profissao) {
        const resultado = filtro.filter((usuario) => {
            return profissao === usuario.profissao;
        });

        return resultado;
    }

    return filtro;
};

console.log(listarUsuarios());