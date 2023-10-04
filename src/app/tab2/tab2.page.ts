//code 
import { Component } from '@angular/core';
import axios from 'axios';
import { LoadingController } from '@ionic/angular';
import {InfiniteScrollCustomEvent} from '@ionic/angular'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	//Constru
  constructor(private loadingCtrl: LoadingController) {}
  //array
  code: any = [];
  //on init
  ngOnInit() {
    this.loadcode();
  }
  //funcion asincrona
  async loadcode(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando',
      spinner: 'bubbles',
    });
    await loading.present();
    const response = await axios({
      method: 'get',
      url: 'http://attendancedb.test/code',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        this.code = response.data;
        event?.target.complete();
        console.log(this.code);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    loading.dismiss();
  }

//   onIonInfinite(ev:any) {
//     this.loadteacher();
//     setTimeout(() => {
//         (ev as InfiniteScrollCustomEvent).target.complete();
//     }, 500);
// }
}
