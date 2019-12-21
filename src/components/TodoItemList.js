import React, { Component } from "react";
import TodoItem from "./TodoItem";

//redux
import { connect } from "react-redux";
import { fetchAllTodos } from "../actions";

export class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  // DoM이 완성된후 마운트 될때 실행.
  componentDidMount() {
    this.props.fetchAllTodos(); // 전달받은 매서드 실행
  }

  render() {
    const { todos } = this.props;

    // TODO 한줄을 만든다.
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

// state를 props로 전달
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// redux에 저장된 정보가 변경될 경우 props로 전달
// fetchAllTodos 함수를 실행해 서버의 정보를 가져오고 mapStateToProps 함수를 활용해서 state를 props로 변경한뒤 TodoItemList 컴포넌트에 전달??
export default connect(mapStateToProps, { fetchAllTodos })(TodoItemList);
