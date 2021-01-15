import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  name: string = "Văn Tiến";
  status: boolean = true
  constructor() { }
  handleChangeHiden() {
    this.status = false
  }
  handleChangeShow() {
    this.status = true
  }
  ngOnInit(): void {
  }

}
