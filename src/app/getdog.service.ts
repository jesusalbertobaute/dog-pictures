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
}
