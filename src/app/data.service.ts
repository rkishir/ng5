import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal from service', 'Another silly life goal from service']);
  goal = this.goals.asObservable();


  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)

  }
}
