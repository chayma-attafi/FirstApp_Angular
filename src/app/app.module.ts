import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { ResidenceComponent } from './core/residence/residence.component';
import { NotFoComponent } from './not-fo/not-fo.component';
import { ChaymaComponent } from './chayma/chayma.component';
import { DetailsComponent } from './details/details.component';
import { AddRComponent } from './add-r/add-r.component';
import { EditRComponent } from './edit-r/edit-r.component';



//c v dire c'est le class initial
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResidenceComponent,
    NotFoComponent,
    ChaymaComponent,
    DetailsComponent,
    AddRComponent,
    EditRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // importation du app-routing.module.ts si je l'ecrit manuellement
    FormsModule, // pour que je utilise ngModule et trvaille avec twoWay ts <---> html
    HttpClientModule,
    ReactiveFormsModule //pour que je trvail avec FormGroupeDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//json-server --watch db.json : pour open fakedata