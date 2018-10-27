import { Injectable } from '@angular/core';
import { pureFunction1 } from '@angular/core/src/render3/pure_function';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  pocoDetails()
  {
   return [{"phone":"POCO F1 (GRAPHITE BLACK,128GB)", "ram":"6gb ram","seller":"Vision star","price":"₹ 23,999"}]; 
  }
  vivoDetails()
  {
   return [{"phone":"Vivo V11 Pro (Dazzling Gold, 64 GB)", "ram":"6 GB RAM","seller":"Gada Electronics","price":"₹29,990"}]; 
  }
}
