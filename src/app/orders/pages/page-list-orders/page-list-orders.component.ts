import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public collection!: Order[];
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list of orders';
    this.headers = [
      'type',
      'client',
      'nbJours',
      'tjmHt',
      'totol HT',
      'total TTC',
      'state',
    ];

    this.ordersService.collection$.subscribe(
      (data) => (this.collection = data)
    );
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'le titre a changé';
  }
}
