import { Component, OnInit } from '@angular/core';
import { GetDogService } from '../getdog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public imageDogUrl="";

  constructor(private getDogService:GetDogService) { }

  ngOnInit(): void {
    this.reloadDog();
  }

  public reloadDog(): void{
    this.getDogService.getRandomDog().subscribe((response: any) => {
          this.imageDogUrl= response.message;
    })
  }

}
