const fs = require('fs');

export const escreverArquivo = (info: any): void => {

    fs.writeFileSync('../bd.json', JSON.stringify(info));
};

export const lerArquivo = (): unknown => {

    return JSON.parse(fs.readFileSync('../bd.json'));
};