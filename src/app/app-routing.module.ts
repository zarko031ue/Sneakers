import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSneakersComponent } from './sneakers/edit-sneakers/edit-sneakers.component';
import { SelectSneakersComponent } from './sneakers/select-sneakers/select-sneakers.component';
import { SneakersDetailsComponent } from './sneakers/sneakers-details/sneakers-details.component';
import { SneakersComponent } from './sneakers/sneakers.component';

const routes: Routes = [
  { path: '', redirectTo: '/sneakers', pathMatch: 'full'},
  { path: 'sneakers', component: SneakersComponent, children: [
    { path: '', component: SelectSneakersComponent},
    { path: 'new', component: EditSneakersComponent},
    { path: ':id', component: SneakersDetailsComponent},
    { path: ':id/edit', component: EditSneakersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
