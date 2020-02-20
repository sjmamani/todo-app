import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[Todo] Agregar todo';
export const TOGGLE_TODO = '[Todo] Toggle todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle All todo';
export const EDITAR_TODO = '[Todo] Editar todo';
export const ELIMINAR_TODO = '[Todo] Eliminar todo';
export const ELIMINAR_COMPLETADOS_TODO = '[Todo] Eliminar Completados todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string) {}
}

export class EliminarTodoAction implements Action {
  readonly type = ELIMINAR_TODO;

  constructor(public id: number) {}
}

export class EliminarCompletadosAction implements Action {
  readonly type = ELIMINAR_COMPLETADOS_TODO;
}

export type Acciones =
  | AgregarTodoAction
  | ToggleTodoAction
  | ToggleAllTodoAction
  | EditarTodoAction
  | EliminarTodoAction
  | EliminarCompletadosAction;
