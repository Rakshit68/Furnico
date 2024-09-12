import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
