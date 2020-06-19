import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [ OfertasService ]
})
export class CategoriasComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //console.log("Aqui: " + this.route.snapshot.params['categoria'])
    this.route.params.subscribe((params: Params) => {

      this.ofertasService.obterOfertasCategoria(params.categoria)
        .subscribe((oferta: Oferta[]) => this.ofertas = oferta)
    })
  }

}
