import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {


  bien: string = "Tiến";

  constructor() { }
  handleClick(name: any) {
    console.log(name.getAttribute("inputName"));
    this.bien = name.value
  }
  ngOnInit(): void {
  }

}
