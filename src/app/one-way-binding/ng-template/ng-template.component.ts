import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  name: string = "Văn Tiến";
  status: boolean = false
  statuss: boolean = false

  color: string = "red"
  constructor() { }
  DangXuat() {
    this.status = false
  }
  DangNhap() {
    this.status = true
  }
  DoiMau() {
    this.statuss = false
  }
  Default() {
    this.statuss = true
  }
  ngOnInit(): void {
  }

}
