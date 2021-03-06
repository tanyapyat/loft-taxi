import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { authSaga } from './sagas/authSaga';
import { regSaga } from './sagas/regSaga';
import { cardSaga } from './sagas/cardSaga';
import { addressListSaga } from './sagas/addressListSaga';
import { routeSaga } from './sagas/routeSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const SagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(SagaMiddleware))); 

SagaMiddleware.run(authSaga);
SagaMiddleware.run(regSaga);
SagaMiddleware.run(cardSaga);
SagaMiddleware.run(addressListSaga);
SagaMiddleware.run(routeSaga);
