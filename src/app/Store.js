import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from 'app/reducers';
//import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
  key: 'root',
  //whitelist: ['Auth'],
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
 );

export default store;
export const persistor = persistStore(store);
