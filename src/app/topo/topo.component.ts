import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public carrinhoVazio: number
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    
    this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if (termo.trim() === ''){
          return of<Oferta[]>([])
        }else{
          return this.ofertasService.obterOfertasPesquisadas(termo)
        }
      })
    )
      .subscribe((oferta: Oferta[]) => console.log(oferta))
  }

  public pesquisa(event: Event): void {
    this.subjectPesquisa.next((<HTMLInputElement>event.target).value)
  }

}
