const fs = require('fs');

const escreverArquivo = (info: any): void => {

    fs.writeFileSync('../bd.json', JSON.stringify(info));
};

const lerArquivo = (): unknown => {

    return JSON.parse(fs.readFileSync('../bd.json'));
};