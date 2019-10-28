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
  <h2 [ngClass]="'messageClasses'" >Hey there, I won the race.. hurraaaaah</h2>
  <h2 [style.color]="'orange'">Now, Next goal is Indian Air Force</h2>
  <h2 [style.color]="hashError ?'green' :'red'">Are you excited?</h2>
  <h2 [style.color]="answerColor">Yess!!</h2>
  <h2 [ngStyle]="hurra">Congratulations!!!, Call from AFSB Gandhinagar</h2>



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
  public hashError=true;
  public isSpecial=true;
  public messageClasses ={
    "text-special" :this.isSpecial,
    "text-success":!this.hashError,
    "text-danger" :!this.hashError

  }
  public answerColor="blue";
  public hurra ={
    color:"green",
    fontStyle:"italic"

  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return this.name +" All the best for your upcoming events";
  }

}
