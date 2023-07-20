import { createFeatureSelector } from '@ngrx/store';

export const selectBooks = createFeatureSelector<any[]>('node');
