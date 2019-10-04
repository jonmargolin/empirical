import {Component, Input, OnInit} from '@angular/core';
import {Timer} from "../../types/type";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
@Input()timer: Timer;
  constructor() { }

  ngOnInit() {
  }

}
