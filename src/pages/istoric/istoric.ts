import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-history',
  templateUrl: 'istoric.html',
})

export class HistoryPage {
  objJSON:string="";
  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.objJSON = JSON.stringify(this.navParams.get('name'));
  }

}
