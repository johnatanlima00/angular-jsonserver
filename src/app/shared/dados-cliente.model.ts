export class DadosCliente{
    constructor(
        public nome: string,
        public email: string,
        public endereco: string,
        public numero: string,
        public complemento: string,
        public cidade: string,
        public estado: string,
        public cep: string,
        public formaPagamento: string
    ) {}
}