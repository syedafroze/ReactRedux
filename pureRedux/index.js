const redux = require("redux");
const createStore = redux.createStore;

//State
const initialState = {
  count: 5,
};

//action creator /action generator

const INC = () => {
  return {
    type: "INCREMENT",
  };
};

const DEC = () => {
  return {
    type: "DECREMENT",
  };
};

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

//Store
const store = createStore(reducer);

let UNSUBSCRIBE = store.subscribe(() => console.log(store.getState()));
store.dispatch(INC());
store.dispatch(INC());
store.dispatch(DEC());

UNSUBSCRIBE();

store.dispatch(DEC());
