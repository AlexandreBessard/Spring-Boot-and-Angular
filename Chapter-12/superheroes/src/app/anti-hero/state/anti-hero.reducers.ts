import { createReducer, on } from '@ngrx/store';
import { AntiHero } from '../models/anti-hero.interface';
import { setAntiHeroList } from './anti-hero.actions';

export interface AntiHeroState {
    antiHeroes: ReadonlyArray<AntiHero>;
}

export const initialState: AntiHeroState = {
    // Initial state
    antiHeroes: []
}

// Mutate value of our state
export const antiHeroReducer = createReducer(
  initialState,
  on(
      // Actions, modify antiHeroes state
      setAntiHeroList,
      // Initial state              holds the list of antiHero objects from the API
      (state, { antiHeroes }) => {
          // modify the antiHeroes state with the retrieved list, we have returned {…state, antiHeroes}
          return {...state, antiHeroes}}),

  );
