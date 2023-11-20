import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./accounts";

const store = configureStore({
  reducer: {
    account: accountReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;