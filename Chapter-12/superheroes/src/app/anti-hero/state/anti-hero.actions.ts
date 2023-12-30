import { createAction, props } from '@ngrx/store';
import { AntiHero } from '../models/anti-hero.interface';




export enum AntiHeroActions {
  // Used to describe the action
  GET_ANTI_HERO_LIST = '[Anti-Hero] Get Anti-Hero list',
  SET_ANTI_HERO_LIST = '[Anti-Hero] Set Anti-Hero list',

}

// Return actions
export const getAntiHeroList =
    // define action -> create action with not additional data
    createAction(
  AntiHeroActions.GET_ANTI_HERO_LIST,
);

export const setAntiHeroList = createAction(
AntiHeroActions.SET_ANTI_HERO_LIST,
// include payload using the props function, the payload is an object with a property antiHeroes of type ReadonlyArray
props<{ antiHeroes: ReadonlyArray<AntiHero> }>(),
);

 
