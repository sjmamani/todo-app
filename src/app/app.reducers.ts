import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/models/todo.model';
import { todoReducer } from './todo/todo.reducer';
import { FiltroReducer } from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: FiltroReducer
};
