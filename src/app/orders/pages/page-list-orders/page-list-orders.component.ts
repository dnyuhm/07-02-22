import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public collection$: Observable<Order[]>;
  public states: string[];
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list of orders';
    this.collection$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
    this.headers = [
      'type',
      'client',
      'nb jours',
      'tjm Ht',
      'totol HT',
      'total TTC',
      'state',
    ];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'le titre a changé';
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService
      .changeState(item, state)
      .subscribe((data) => Object.assign(item, data));
  }
}
