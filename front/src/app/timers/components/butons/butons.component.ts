import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-butons',
  templateUrl: './butons.component.html',
  styleUrls: ['./butons.component.css']
})
export class ButonsComponent implements OnInit {
@Output() submit: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
   onSubmit(event: KeyboardEvent) {
    this.submit.emit( (event.target as HTMLInputElement).value);
   }
}
