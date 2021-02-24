import {Component} from "@angular/core";
import {NavController,ToastController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {HistoryPage} from './../istoric/istoric';
import {pagina} from "../trips/trips";
import {date} from "../trips/trips";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})

export class TripDetailPage {
  public trip: any;
  public date: any;
  constructor(public nav: NavController, public tripService: TripService, public toastCtrl: ToastController) {
    this.trip = tripService.getItem(pagina);
  }
  rezerva() {
    let toast = this.toastCtrl.create({
      message: 'Rezervarea a fost facuta cu succes.',
      duration: 2500,
      position: 'top',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
    let data = {
      name: 'Brasov'
    };
    this.nav.push(HistoryPage, data);
    }
}


