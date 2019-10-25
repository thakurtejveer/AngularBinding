import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
  Welcome {{name}}
  </h1>
  <h2>{{2+2}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{"Welcome "+name+ " to Inter IIT Sports Meet"}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{a}}</h2>
  <h2>{{siteUrl}}</h2>
  <input [id]="myId" type="text" value="tezaaa">
  <input [disabled]="isDisabled" id ="{{myId}}" type="text" value="singh">
  <input bind-disabled="isDisabled" id ="{{myId}}" type="text" value="singh">


  `,
  styleUrls: []
})
export class TestComponent implements OnInit {
  public name="Tejveer Singh";
  public a=5+6;
  public siteUrl=window.location.href;
  public myId="testId";
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return this.name +" All the best for your upcoming events";
  }

}
