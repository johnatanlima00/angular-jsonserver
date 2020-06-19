import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ofertasService.obterOfertasId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => this.oferta = oferta)
  }

  public incluirItemCarrinho(): void{
    this.carrinhoService.incluirCarrinho(this.oferta)
  }

}
