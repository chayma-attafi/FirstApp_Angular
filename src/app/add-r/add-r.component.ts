import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceServiceService } from '../Service/residence-service.service';

@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
})
export class AddRComponent {

  //injecter service
  constructor(private rs:ResidenceServiceService){}

  myForm!: FormGroup ;
  ngOnInit(){
    this.myForm= new FormGroup({
      groupe1: new FormGroup ({
      name:new FormControl('', [Validators.required,Validators.minLength(7)]), //required : champ obligatoire 
      address:new FormControl('test',[Validators.required]),
      }),
      image:new FormControl('',Validators.required),
    });
  }

  get name(){
    return this.myForm.get('groupe1').get('name')
  }
  get address(){
    return this.myForm.get('groupe1').get('address')
  }
  get image(){
    return this.myForm.get('image');
  }
  get groupe1(){
    return this.myForm.get('groupe1');
  }


   addR(){
    let r = new Residence();
r.name=this.name.value;
r.address=this.address.value;
r.image=this.image.value;

    console.log(this.myForm.value);
   // this.rs.addResidance(r).subscribe();
    this.rs.addResidance(r).subscribe(()=>this.myForm.reset()); //pour supprimer le continue apres l'ajjout
}


}
