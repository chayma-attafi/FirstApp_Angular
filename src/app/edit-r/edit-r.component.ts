import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../models/residence';
import { ResidenceServiceService } from '../Service/residence-service.service';

@Component({
  selector: 'app-edit-r',
  templateUrl: './edit-r.component.html',
  styleUrls: ['./edit-r.component.css']
})
export class EditRComponent {
  ResidenceForm: Residence = {
    id: 0,
    name: '',
    address: '',    
    image:'', 
    age:0, 
    
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service: ResidenceServiceService
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.service.getResidanceById(id).subscribe((data) => {
      this.ResidenceForm = data;
    });
  }
 
  update() {
    this.service.updateResidance(this.ResidenceForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/residence"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
