import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options= [];

  constructor() {
      this.options= [
         {"code":"all","value":"Todos"},
         {"code":"retriever/golden","value":"Golden"},
         {"code":"malamute","value":"Malamute"},
         {"code":"terrier/american","value":"Terrier"}
      ]
  }

}
