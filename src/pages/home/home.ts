import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Brasov",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Brasov";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Brasov"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }
}
