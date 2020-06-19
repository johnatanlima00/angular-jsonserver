import { Carrinho } from './shared/carrinho.model';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';

export class CarrinhoService{

    private carrinho: Carrinho[] = []

    constructor(){}

    public obterItensCarrinho(): Carrinho[]{
        return this.carrinho
    }

    public incluirCarrinho(item: Oferta): void{
        let itemCarrinho: Carrinho = new Carrinho (
            item.id,
            item.titulo,
            item.descricao_oferta,
            1,
            item.valor,
            item.imagens[0]
        )
        
        let existeCarrinho = (this.carrinho.find((item: Carrinho) => item.id == itemCarrinho.id))

        if (existeCarrinho){
            existeCarrinho.quantidade += 1
        } else{
            this.carrinho.push(itemCarrinho)
        }
    }

    public incluirQuantidade(aumentarItem: number): void{
        let existeCarrinho = this.carrinho.find((item: Carrinho) => item.id == aumentarItem)

        existeCarrinho.quantidade += 1
    }
  
    public removerQuantidade(diminuirItem: number): void{
        let existeCarrinho = this.carrinho.find((item: Carrinho) => item.id == diminuirItem)

        existeCarrinho.quantidade -= 1
        if(existeCarrinho.quantidade === 0){
            this.carrinho.splice(this.carrinho.indexOf(existeCarrinho), 1)
        }
    }

    public obterValorCarrinho(): number{
        let valorCarrinho: number = 0
        this.carrinho.map((item: Carrinho) => valorCarrinho += (item.valor * item.quantidade))
        return valorCarrinho
    }
}