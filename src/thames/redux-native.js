import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from "../redux/rootReducer"
import {decrement, increment, asyncIncrement, changeTheme} from "../redux/actions";

const counter = document.getElementById('counter');
const btnAdd = document.getElementById('add');
const btnSub = document.getElementById('sub');
const btnAsync = document.getElementById('async');
const btnTheme = document.getElementById('theme');

const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

btnAdd.addEventListener('click', () => {
    store.dispatch(increment())
})
btnSub.addEventListener('click', () => {
    store.dispatch(decrement())
})
btnAsync.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})
btnTheme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

})

store.dispatch({type: '_INIT_'});
