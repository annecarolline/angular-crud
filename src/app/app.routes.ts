import { Routes } from '@angular/router';

import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{
    path: '', component: HomeComponent,
}, 
{
    path: 'produto', component: ProdutoListComponent,
}, 
{
    path: 'produto/edit/:id', component: ProdutoFormComponent,
}, 
{
    path: 'produto/create', component: ProdutoFormComponent,
}];