import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'crushing-info',
  templateUrl: './crushing-info.page.html',
  styleUrls: ['./crushing-info.page.scss'],
})
export class CrushingInfoPage implements OnInit {
  crushing: any;
  key = 'Item 1';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    let curInfo = JSON.parse(localStorage.getItem(this.key));
    this.crushing = curInfo;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loadData(event);
    }, 2000);
  }

  loadData(event: any = null) {
    localStorage.removeItem(this.key);
    this.crushing = [];
    this.apiService.getCrushing().subscribe((res: any) => {
      localStorage.setItem(this.key, JSON.stringify(res.Data));
      this.crushing = res.Data;
      if (event) {
        event.target.complete();
      }
    });
  }
}
