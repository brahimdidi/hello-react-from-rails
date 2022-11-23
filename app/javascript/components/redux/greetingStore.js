const apiUrl = "http://localhost:3000/api//messages";

const GREET_RANDOM = "/greeting/GREET_RANDOM";

export const greetRandom = (data) => ({
    type: GREET_RANDOM,
    data,
});

export const fetchGreeting = () => (dispatch) => {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(greetRandom(json)));
};

const greetingReducer = (state = [], action) => {
    switch (action.type) {
        case GREET_RANDOM:
            return action.data;
        default:
            return state;
    }
};

export default greetingReducer;