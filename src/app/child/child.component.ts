import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  count =0;
@Input() place1:string = '';
@Input() place2:string = '';
@Input() place3:string = '';
@Output() custoever=new EventEmitter;
 increment(){
  this.count++;
   this.custoever.emit(this.count);
 }
 reset(){
  this.count=0;
   this.custoever.emit(this.count);
 }
 decrement(){
  this.count--;
   this.custoever.emit(this.count);
 }
}