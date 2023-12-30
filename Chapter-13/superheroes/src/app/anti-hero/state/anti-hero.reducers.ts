import { createReducer, on } from '@ngrx/store';
import { AntiHero } from '../models/anti-hero.interface';
import { addAntiHeroState, modifyAntiHeroState, removeAllAntiHeroState, removeAntiHeroState, setAntiHeroList } from './anti-hero.actions';

export interface AntiHeroState {
    antiHeroes: ReadonlyArray<AntiHero>;
}

export const initialState: AntiHeroState = {
    antiHeroes: []
}

// Reducer for deleting data from our store
export const antiHeroReducer = createReducer(
  initialState,
  on(setAntiHeroList, (state, { antiHeroes }) => { return {...state, antiHeroes}}),
  // ID as string props mentioned from actions
  // If the reducer successfully modifies the value of the antiHeroes state, any selector subscribed to the changes of this state will emit new value in the component
  on(removeAntiHeroState, (state, { antiHeroId }) => {
    return {...state, antiHeroes: state.antiHeroes.filter(data => data.id != antiHeroId)}
  }),
  on(addAntiHeroState, (state, {antiHero}) => {
    return {...state, antiHeroes: [...state.antiHeroes, antiHero]}
  }),
  on(modifyAntiHeroState, (state, {antiHero}) => {
    return {...state, antiHeroes: state.antiHeroes.map(data => data.id === antiHero.id ? antiHero : data)}
  }),
  on(removeAllAntiHeroState, (state) => {
    return {...state, antiHeroes: []}
  }),
  );
