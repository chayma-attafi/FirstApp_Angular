import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRComponent } from './add-r/add-r.component';
import { ChaymaComponent } from './chayma/chayma.component';
import { ResidenceComponent } from './core/residence/residence.component';
import { DetailsComponent } from './details/details.component';
import { EditRComponent } from './edit-r/edit-r.component';
import { NotFoComponent } from './not-fo/not-fo.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"",redirectTo:"residence", pathMatch:"full"},
  {path: "residence",component:ResidenceComponent, children:[ {path:"details/:id",component:DetailsComponent}]},
  
  {path: "test",component:TestComponent, children:[
    {path: "chayma",component:ChaymaComponent}
  ]},
  {path: "addR", component:AddRComponent},
  
  { path: "editR/:id", component: EditRComponent },

 
  {path: "**", component:NotFoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
