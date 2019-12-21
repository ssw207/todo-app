import axios from "axios";

// const apiUrl = "http://localhost:4500/api/todos";
const apiUrl = process.env.REACT_APP_APIURL;

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";

//Todo 전체 목록조회
export const fetchAllTodos = () => {
  return dispatch => {
    axios
      .get(apiUrl)
      .then(res => {
        dispatch({
          // 요청이 성공하면, 서버 응답내용을 payload로 설정하여
          // FETCH_TODOS 액션을 디스패치 합니다.
          type: FETCH_TODOS,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

//Todo 추가
//Action type 정의
export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => {
  return dispatch => {
    axios
      .post(apiUrl, todo)
      .then(res => {
        dispatch({
          type: ADD_TODO,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

//Todo 삭제
//Action type 정의
export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = id => {
  return dispatch => {
    axios
      .delete(`${apiUrl}/${id}`)
      .then(res => {
        dispatch({
          type: REMOVE_TODO,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

//수정
//Action type 정의
export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = todo => {
  return dispatch => {
    axios
      .put(`${apiUrl}/${todo.id}`, todo)
      .then(res => {
        dispatch({
          type: TOGGLE_TODO,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};
