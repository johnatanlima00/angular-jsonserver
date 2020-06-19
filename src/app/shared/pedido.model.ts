import { Carrinho } from './carrinho.model'
import { DadosCliente }  from './dados-cliente.model'

export class Pedido{
    constructor(
        public itensCarrinho: Array<Carrinho>,
        public dadosCliente: DadosCliente
    ){}
}