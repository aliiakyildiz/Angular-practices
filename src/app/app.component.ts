import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- //Two-Way Data Binding
  <input type="text" [(ngModel)]="name" (ngModelChange)="onCh($event)"><br>
  <input type="text" [(ngModel)]="name"><br>
  {{name}}
  {{person?.surname}} -->

  <!-- //*ngFor
  <ul>
    <li *ngFor="let name1 of names;index as i">{{name1}} {{i}}</li>
  </ul> -->

<!-- //*ngIf
<div *ngIf="visible; else elseContent"> İçerik 1</div>
<ng-template #elseContent>
İçerik 2
</ng-template> -->

<!-- //Directive 
  <div appExample color="darkblue">
  Merhaba
</div> -->

<!-- 
  //Structural Directive if
<div *appCustomif=true>
Merhaba
</div>     -->

//Structural Directive for
<!-- <ul>
  <li *appCustomfor="5; let i"> List {{i}}</li>
</ul> -->

<ul>
  <li *appCustomfor="names; let name; let index=index">{{index | currency}} index numaralı değer {{name}}</li>
</ul>

<div>asd {{30.11.1994 | date}} date pipe</div>

<div> Slice Pipe: {{['a','l','i','a','k','y','i','l','d','i','z'] | slice:0:5}}</div>

<div> Slice Pipe: {{"AliAkyıldız" | slice:0:5}}</div>

<div> Json Pipe: {{{name,surName} | json}}</div>

<div> Upper Case: {{surName | uppercase}}</div>
<div> Lower Case: {{name | lowercase}}</div>
<div> Title Case: {{"bu bir başlıktır" | titlecase}}</div>
<div> Parcent Pipe: {{50|percent}}</div>

<ul>
  <li *ngFor="let name of mappedNames | keyvalue">{{name.key}} - {{name.value}}</li>
</ul>
  `,
  styleUrls: ['./app.component.scss']


})
export class AppComponent {
  title = 'proj1';

  visible: boolean = false;

  names: string[] = ["Ali", "Veli", "Ahmet", "Mehmet"];
  name: string = "Ali";
  surName: string = "Akyıldız";
  person: { name: string, surname: string }
  mappedNames: Map<number, string> = new Map([[1, "Ali"], [2, "Veli"], [3, "Ahmet"], [4, "Mehmet"]])

  onCh($event) {
    console.log("Tetiklendi");
  }
}
