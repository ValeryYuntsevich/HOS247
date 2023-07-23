import { createFeatureSelector } from '@ngrx/store';
import { INode } from '../models';

export const selectBooks = createFeatureSelector<INode[]>('node');
