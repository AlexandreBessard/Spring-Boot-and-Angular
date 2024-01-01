import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AuthState } from './auth.reducers';

/*
Use Selector in a Component or Service:
Import the selectors and use them in your Angular components or services where you need to access the state.
 */

// Specific feature named: 'authState' of type AuthState
export const selectAuthState = createFeatureSelector<AuthState>('authState')
// Create another selector, focused on extracting the 'error' property from the 'AuthState'
export const selectError = () => createSelector(
    selectAuthState,
    (state: AuthState) => state.error
)
