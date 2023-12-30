import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AntiHero } from '../models/anti-hero.interface';
import { AntiHeroService } from '../services/anti-hero.service';
import { AntiHeroActions } from './anti-hero.actions';


/*
Responsible for calling our external APIs
 */
@Injectable()
export class AntiHeroEffects {
 
  // get list of anti heroes in the external API
  // set retrieved anti hero list in the state
  getAntiHeroes$ = createEffect(() => {
    return this.actions$.pipe(
        // if GET_ANTI_HERO_LIST is dispatched, this effect will be called
        ofType(AntiHeroActions.GET_ANTI_HERO_LIST),
        // call the endpoint
        mergeMap(() => this.antiHeroService.getAntiHeroes()
            // dispatch another action that sets the anti-heroes list in our state
          .pipe(
            map(antiHeroes => ({ type: AntiHeroActions.SET_ANTI_HERO_LIST,
                // payload
                antiHeroes })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  
 
  constructor(
    private actions$: Actions,
    private antiHeroService: AntiHeroService,
    private router: Router
  ) {}
}
