import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from './reducer';

const reducer = combineReducers(reducers);
const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
	return createStore(
		reducer,
		preloadedState,
		applyMiddleware(
			loggerMiddleware,
		),
	);
}
