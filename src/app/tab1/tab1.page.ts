import { Component } from '@angular/core';
import axios from 'axios';
import { LoadingController } from '@ionic/angular';
import {InfiniteScrollCustomEvent} from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private loadingCtrl: LoadingController) {}
  teacher: any = [];
  ngOnInit() {
    /* this.loadteacher(); */
  }
  /* async loadteacher(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando',
      spinner: 'bubbles',
    });
    await loading.present();
    const response = await axios({
      method: 'get',
      url: 'http://attendancedb.test/teacher',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        this.teacher = response.data;
        event?.target.complete();
        console.log(this.teacher);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    loading.dismiss();
  }

  onIonInfinite(ev:any) {
    this.loadteacher();
    setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
} */
}
