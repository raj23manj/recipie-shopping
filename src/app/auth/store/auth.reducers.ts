export interface State {
  token: string,
  authenticated: boolean
}

const intialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = intialState, action) {
  return state;
}
