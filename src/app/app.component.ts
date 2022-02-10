import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string;
  private obs: Observable<any>;
  private subj: Subject<any>;
  private behav: BehaviorSubject<any>;
  // private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.obs = new Observable<any>((listX) => {
      listX.next(Math.random());
    });
    this.subj = new Subject();
    this.behav = new BehaviorSubject('toto');
    // unsubscribe
    // this.sub = this.behav.subscribe((data) => console.log(data));

    // OBSERVABLE(froid)[unicast]>plusieurs instances du même flux de données
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));

    // SUBJECT(chaud)[multicast]>une seule instance du même flux de données
    // this.subj.next('toto');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.next('titi');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('tata');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());

    // this.behav.next('tutu');
    // this.behav.subscribe((data) => console.log(data));
    // this.behav.next(Math.random());
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
