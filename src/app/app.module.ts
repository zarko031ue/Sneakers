import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { SneakersListComponent } from './sneakers/sneakers-list/sneakers-list.component';
import { SneakersItemComponent } from './sneakers/sneakers-list/sneakers-item/sneakers-item.component';
import { SelectSneakersComponent } from './sneakers/select-sneakers/select-sneakers.component';
import { SneakersDetailsComponent } from './sneakers/sneakers-details/sneakers-details.component';
import { EditSneakersComponent } from './sneakers/edit-sneakers/edit-sneakers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { SortPipe } from './shared/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SneakersComponent,
    SneakersListComponent,
    SneakersItemComponent,
    SelectSneakersComponent,
    SneakersDetailsComponent,
    EditSneakersComponent,
    FilterPipe,
    SortPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
