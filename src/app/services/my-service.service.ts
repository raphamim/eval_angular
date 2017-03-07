import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  getDataFromJson(){
    console.log('Données a propos');
  };

}
