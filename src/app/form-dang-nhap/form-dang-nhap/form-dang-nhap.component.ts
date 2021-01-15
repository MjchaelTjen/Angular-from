import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dang-nhap',
  templateUrl: './form-dang-nhap.component.html',
  styleUrls: ['./form-dang-nhap.component.scss']
})
export class FormDangNhapComponent implements OnInit {
  name: string = "Văn Tiến"
  status: boolean = false
  thongbao: string = ""
  constructor() { }
  DangXuat() {
    this.status = false
    this.thongbao ="Đã đăng xuất !!!"
  }
  DangNhap(user: string, pass: string) {
    if (user === "Tien" && pass === "tien123") {
      this.status = true
    } else {
      this.status = false
      this.thongbao = "User hoặc pass chưa chính xác !!!"
    }
  }
  ngOnInit(): void {
  }

}
