import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Carrinho } from '../shared/carrinho.model';
import { CarrinhoService } from '../carrinho.service';
import { Pedido } from '../shared/pedido.model';
import { DadosCliente } from '../shared/dados-cliente.model';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  providers: [ OrdemCompraService ]
})
export class CarrinhoComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    "primeiroNome": new FormControl(null,  [ Validators.required ]),
    "ultimoNome": new FormControl(null, [ Validators.required ]),
    "email": new FormControl(null, [ Validators.required ]),
    "senha": new FormControl(null, [ Validators.required ]),
    "address": new FormControl(null, [ Validators.required ]),
    "city": new FormControl(null, [ Validators.required ]),
    "province": new FormControl(null, [ Validators.required ]),
    "cep": new FormControl(null, [ Validators.required ])
  })

  public itensCarrinho: Carrinho[]
  public dadosCliente: DadosCliente
  public pedido: Pedido

  constructor(
    private carrinhoService: CarrinhoService,
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.obterItensCarrinho()
  }

  public confirmarCompra(): void{
    console.log(this.formulario.status)

    //this.formulario.markAllAsTouched()
    this.formulario.get("primeiroNome").markAsTouched()
 
    // Resgatar os dados do cliente do Reactive Form
    this.dadosCliente = new DadosCliente(
      this.formulario.get('primeiroNome').value,
      this.formulario.get('email').value,
      this.formulario.get('address').value,
      '10',
      '',
      this.formulario.get('city').value,
      this.formulario.get('province').value,
      this.formulario.get('cep').value,
      'A VISTA'
    )

    this.pedido = new Pedido(
      this.itensCarrinho,
      this.dadosCliente
    )

    this.ordemCompraService.confirmarCompra(this.pedido)
        .subscribe((idPedido: number) => console.log(idPedido))
  }

}
