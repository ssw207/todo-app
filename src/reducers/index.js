import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions"; // 리듀서가 action을 분기할수 있도록하는 역할, actions폴더 하위의 파일에서 탐색
// 초기값 세팅
const initialState = {
  todos: [
    {
      id: 0,
      text: "",
      checked: false
    }
  ]
};

// Todo 리듀서 함수 정의
export const toDoReducer = (state = initialState, action) => {
  // state 객체가 없으면 초기값 initialstate 객체 할당
  switch (action.type) {
    case FETCH_TODOS:
      return Object.assign({}, state, { todos: action.payload }); //기존의 state 객체에 axios로 가져온 서버의 데이터를 합침
    case ADD_TODO:
      return Object.assign({}, state, { todos: action.payload }); // 저장후 arr를 반환하므로 todos arr를 전체 변경해준다.
    case REMOVE_TODO:
      return Object.assign({}, state, { todos: action.payload });
    case TOGGLE_TODO:
      return Object.assign({}, state, { todos: action.payload });
    default:
      return state;
  }
};
