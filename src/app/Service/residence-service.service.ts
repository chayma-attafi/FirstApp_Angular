import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartements';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceServiceService {

  urlResidance : string ="http://localhost:3000/residences";
  urlApartement : string ="http://localhost:3000/apartments";

  constructor(private http:HttpClient) { }

  getAllResidance():Observable<Residence[]>{
return this.http.get<Residence[]>(this.urlResidance);
  }

  getAllAppartement():Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.urlApartement);
      }



      getResidanceById(id:number):Observable<Residence>{
        return this.http.get<Residence>(this.urlResidance+"/"+id)
      }

      getApartementById(id:number):Observable<Apartment>{
        return this.http.get<Apartment>(this.urlApartement+"/"+id)
      }


      addResidance(res:Residence):Observable<Residence>{
        return this.http.post<Residence>(this.urlResidance,res);
      }

      updateResidance(res:Residence):Observable<Residence>{
        return this.http.put<Residence>(this.urlResidance+"/"+res.id,res);
      }
      /*updateResidance(res:Residence){
        return this.http.put(`http://localhost:3000/residences/${res.id}`,res);
      }*/
     

      deletResidance(id:number):Observable<Residence>{
        return this.http.delete<Residence>(this.urlResidance+"/"+id);
      }



}


