import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { ROUTES } from './app.routes';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HttpClientModule } from '@angular/common/http';
import { OfertaComponent } from './oferta/oferta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from './carrinho.service';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    OfertasComponent,
    OfertaComponent,
    CategoriasComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
