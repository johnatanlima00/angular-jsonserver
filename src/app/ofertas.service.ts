import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { Observable } from 'rxjs'

import { map } from 'rxjs/operators'


@Injectable()
export class OfertasService{
    constructor(private http: HttpClient){}

    public obterOfertas(): Promise<Oferta[]>{
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((oferta: Oferta[]) => oferta)
    }

    public obterOfertasDestaque(): Promise<Oferta[]>{
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((oferta: Oferta[]) => oferta)
    }

    public obterOfertasId(id: number): Promise<Oferta>{
        return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
            .toPromise()
            .then((oferta: Oferta) => oferta[0])
    }

    public obterOfertasCategoria(categoria: string): Observable<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`).pipe(
            map((oferta: Oferta[]) => oferta)
        )
    }

    public obterOfertasPesquisadas(termo: string): Observable<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?titulo_like=${termo}`).pipe(
            map((oferta: Oferta[]) => oferta)
        )
    }
        
}