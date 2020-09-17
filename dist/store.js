import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
var store = createStore(reducers, composeWithDevTools());
export default store;
//# sourceMappingURL=store.js.map