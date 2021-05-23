import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../../services/reservation.service';
import {LibraryReservationResponse} from '../../../models/reservation/library-reservation-response';

@Component({
  selector: 'app-reserve-shelf',
  templateUrl: './reserve-shelf.component.html',
  styleUrls: ['./reserve-shelf.component.scss']
})
export class ReserveShelfComponent implements OnInit {

  libraryReservationResponses: LibraryReservationResponse[];
  constructor(
    private reservationService: ReservationService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.reservationService.getLibraryReservations().subscribe(r => {
      this.libraryReservationResponses = r;
    });
  }

}
