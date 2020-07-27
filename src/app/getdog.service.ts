import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDogService {
  private API_RANDOM_DOG='https://dog.ceo/api/breeds/image/random';

  constructor(private httpClient:HttpClient) { }

  public getRandomDog(){
     return this.httpClient.get(this.API_RANDOM_DOG);
  }

  public getRandomOnlyDog(raza:string){
     let api= 'https://dog.ceo/api/breed/' + raza + '/images/random';
     return this.httpClient.get(api);   
  }
}
