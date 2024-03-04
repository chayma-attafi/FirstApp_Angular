import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartements';
import { Residence } from 'src/app/models/residence';
import { ResidenceServiceService } from 'src/app/Service/residence-service.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  //injecter le service Router dans le servuce
constructor (private _router:Router, private rs:ResidenceServiceService){}


  //listResidences:Residence[]=[];
  listResidences!:Residence[];
  listApartments:Apartment[]=[];
  //listResidences!:any; // type de retour ngOnInit est de type list et type getAllResidance type object c pour cela on ajouter return au niveau de  getAllResidance dans le service (type de retourne observebal)

  ngOnInit(){

    this.rs.getAllResidance().subscribe(res=>this.listResidences=res);
    this.rs.getAllAppartement().subscribe(res=>this.listApartments=res);
  }




    


      list: Apartment[]=[]
    show(id:number){
    //initialiser list
    this.list=[];
        for(let a of this.listApartments){
          if(a.residence.id == id)
          this.list.push(a);
        }
        console.log(this.list);
    }
       goTo(){
        this._router.navigateByUrl("test");
       }

       

       deleteResidence(id:number){
        this.rs.deletResidance(id).subscribe(

        ()=>this.rs.getAllResidance().subscribe(
          res=>this.listResidences=res)
          );
       }

}
