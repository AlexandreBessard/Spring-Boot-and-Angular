import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AntiHero } from '../models/anti-hero.interface';
import { AntiHeroState } from './anti-hero.reducers';


// Select the antiHeroState
export const selectAntiHeroState = createFeatureSelector<AntiHeroState>('antiHeroState')

// Selecting antiHeroes
export const selectAntiHeroes = () => createSelector(
    selectAntiHeroState,
    (state: AntiHeroState) => state.antiHeroes
)

// Selecting antiHeroes based on a specific id
export const selectAntiHero = (id: string) => createSelector(
    selectAntiHeroState,
    (state: AntiHeroState) => state.antiHeroes.find(d => d.id === id)
)
