import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Pedido } from './shared/pedido.model'
import { Observable } from 'rxjs'

@Injectable()
export class OrdemCompraService{
    constructor(private http: HttpClient){}

    public confirmarCompra(pedido: Pedido): Observable<number>{
        const headers = new HttpHeaders()
        headers.append('Accept', 'application/json')

        return this.http.post(
            'http://localhost:3000/pedidos',
            pedido,
            {headers: headers}
        )
        .pipe(
            map((resposta: any) => resposta.id )
        )
    }
}