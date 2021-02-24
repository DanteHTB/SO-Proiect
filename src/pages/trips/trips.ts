import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})

export class TripsPage {
  public id: any;
  public name: any;
  public trips: any;
  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trips = tripService.getAll();
    this.name = tripService.getAll();
  }
  // view trip detail
  viewDetail(id) {
    pagina=id;
    this.nav.push(TripDetailPage, {id: id});
  }
  viewName(name) {
    date=name;
    this.nav.push(TripDetailPage, {name: name});
  }
}
export var pagina;
export var date;
