import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [ OfertasService ]
})
export class OfertasComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.obterOfertas()
      .then((oferta: Oferta[]) => this.ofertas = oferta)
  }

}
