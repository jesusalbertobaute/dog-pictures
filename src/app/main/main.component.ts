import { Component, OnInit,Input } from '@angular/core';
import { GetDogService } from '../getdog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() dogOptions= [];

  public imageDogUrl="";

  public dogSelected: any;

  constructor(private getDogService:GetDogService) { }

  ngOnInit(): void {
    this.reloadDog();
  }

  public reloadDog(): void{
    if (this.dogSelected && this.dogSelected=='all'){
      this.getDogService.getRandomDog().subscribe((response: any) => {
            this.imageDogUrl= response.message;
      })
    }else if (this.dogSelected && this.dogSelected!='all'){
      this.getDogService.getRandomOnlyDog(this.dogSelected).subscribe((response: any) => {
        this.imageDogUrl= response.message;
      })
    }else{
      this.getDogService.getRandomDog().subscribe((response: any) => {
        this.imageDogUrl= response.message;
      })
    }
  }

  public selectedDog(event) : void{
     this.dogSelected = event.target.value;
  }

}
