import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import {
  cartReducer,
  CART_FEATURE_KEY,
  initialState as cartInitialState,
} from './+state/cart.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(CART_FEATURE_KEY, cartReducer, {
      initialState: cartInitialState,
    }),
    CommonModule,
  ],
})
export class SharedCartStateModule {}
