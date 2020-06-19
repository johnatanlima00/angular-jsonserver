export class Carrinho{
    constructor(
        public id: number,
        public titulo: string,
        public descricao: string,
        public quantidade: number,
        public valor: number,
        public imagem: object
    ){}
}