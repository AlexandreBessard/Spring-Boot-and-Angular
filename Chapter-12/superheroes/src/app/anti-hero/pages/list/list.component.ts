import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { TableActions } from '../../enums/table-actions.enum';
import { AntiHero } from '../../models/anti-hero.interface';
import { AntiHeroActions } from '../../state/anti-hero.actions';
import { selectAntiHeroes } from '../../state/anti-hero.selectors';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // sample data of anti hero
  antiHeroes: ReadonlyArray<AntiHero> = [];
  // Observable, get the array from the state
  antiHeroes$ = this.store.select(selectAntiHeroes());

  headers: {headerName: string, fieldName: keyof AntiHero}[] = [
    {headerName: "First Name", fieldName: "firstName"},
    {headerName: "Last Name", fieldName: "lastName"},
    {headerName: "House", fieldName: "house"},
    {headerName: "Known As", fieldName: "knownAs"},
  ]

  constructor(
    private router: Router,
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    // When something happens in your Angular application (like a user interaction), you dispatch an action
    // Invoked the endpoint
    this.store.dispatch({type: AntiHeroActions.GET_ANTI_HERO_LIST});
    this.assignAntiHeroes();
  }

  assignAntiHeroes() {
    this.antiHeroes$.subscribe((data) => {
      // get data from the state
      this.antiHeroes = data;
    });
  }

  selectAntiHero(data: {antiHero: AntiHero, action: TableActions}) {
    this.router.navigate(['anti-heroes', 'form', data.antiHero.id]);
  }

  executeCommandBarAction(action: CommandBarActions) {
    switch(action) {
      case CommandBarActions.Create: {
        this.router.navigate(["anti-heroes", "form"]);
        return;
      }
      case CommandBarActions.DeleteAll: {
        return;

      }
      default: ""

    }
  }

}
