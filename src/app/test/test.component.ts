import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
  Welcome {{name}}
  </h1>
  <h2 class="text-success">{{"Your name in Upper Case is looks like :  "+name.toUpperCase()}}</h2>
  // <h2 [class]=successClass>{{name.length}}</h2>

  <h2 class="text-special" [class]=successClass>{{"Welcome "+name+ " to Inter IIT Sports Meet"}}</h2>
  <h2 [class.text-danger]="hashError">{{greetUser()}}</h2>
  <input [id]="myId" type="text" value="tezaaa">
  <input [disabled]="isDisabled" id ="{{myId}}" type="text" value="singh">
  <input bind-disabled="isDisabled" id ="{{myId}}" type="text" value="singh">
  <h2 [ngClass]="messageClasses" >Hey there, I won the race.. hurraaaaah</h2>


  `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
    color:blue;
  }
  `

  ]
})
export class TestComponent implements OnInit {
  public name="Tejveer Singh";
  public myId="testId";
  public isDisabled = false;
  public successClass="text-success";
  public hashError=false;
  public isSpecial=true;
  public messageClasses ={
    "text-special" :this.isSpecial,
    "text-success":!this.hashError,
    "text-danger" :!this.hashError

  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return this.name +" All the best for your upcoming events";
  }

}
