import { Component } from '@angular/core';

//decorrateur de class
@Component({
  selector: 'app-root', //nom du selector 
  templateUrl: './app.component.html', //ficher html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';

  f(){
    alert('je suis f')
  }
  f2(n:string){
    alert('je suis f'+n)
  }
  

}
