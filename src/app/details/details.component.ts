import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id! :number; 

  //injecter le service ActivatedRoute dans le service
  constructor(private ac :ActivatedRoute){
    console.log("je suis le constrocler ");
  }
  
  //initialiser le composant
  ngOnInit(){
    console.log("je suis ngOnInit ");
    
    //console.log(this.ac.snapshot.params['id']);
    this.ac.paramMap.subscribe(res =>{ 
      console.log(res.get('id'));
      this.id=Number(res.get('id'))
    });


//pour visualier object 
 /*   this.ac.paramMap.subscribe(res =>{ 
      console.log(res.get('id'));
      this.id=Number(console.log(res))
    });*/

    
    }
}
