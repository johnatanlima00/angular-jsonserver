import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertaComponent } from './oferta/oferta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'ofertas', component: OfertasComponent  },
    { path: 'oferta', component: OfertasComponent  },
    { path: 'oferta/:id', component: OfertaComponent  },
    { path: 'categorias', component: OfertasComponent  },
    { path: 'categorias/:categoria', component: CategoriasComponent  },
    { path: 'carrinho', component: CarrinhoComponent  }
]