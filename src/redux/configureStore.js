import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant()))
    );
}

const store = configureStore();

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;