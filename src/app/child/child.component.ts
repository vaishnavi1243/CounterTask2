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
@Output() counter_value=new EventEmitter;
 increment(){
  this.count++;
   this.counter_value.emit(this.count);
 }
 reset(){
  this.count=0;
   this.counter_value.emit(this.count);
 }
 decrement(){
  this.count--;
   this.counter_value.emit(this.count);
 }
}