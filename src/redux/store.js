import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

const rootReducer = combineSlices({
  filters: filtersReducer,
  contacts: contactsReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});