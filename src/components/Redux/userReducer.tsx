interface Action {
    type: string;
    payload: any;
  }
  
  interface State {
    selectedUser: any;
  }
  
  const initialState: State = {
    selectedUser: null
  };
  
  const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
      case 'SELECT_USER':
        return {
          ...state,
          selectedUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  