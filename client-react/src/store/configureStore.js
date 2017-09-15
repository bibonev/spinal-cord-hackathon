import {compose, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    let finalCreateStore = compose(applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f)(createStore);

    return finalCreateStore(rootReducer);;
}