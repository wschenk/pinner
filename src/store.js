import { createStore } from 'redux';
import reducers from './reducers';

console.log( "Creating the store" );
const store = createStore( reducers )

export default store;
