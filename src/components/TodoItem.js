import React, { Component } from "react";
import "./TodoItem.css";
//redux
import { connect } from "react-redux";
import { removeTodo, toggleTodo} from "../actions";

export class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  handleRemove = id => {
    // 여기스 props는 redux의 state를 props로 매핑해서 가져온 값이다. action에 정의된 함수를 실행에 서버에 삭제요청을 한다.
    this.props.removeTodo(id);
  };

  handleToggle = todo => {
    todo.checked = !todo.checked;
    this.props.toggleTodo(todo);
  };

  render() {
    const { handleRemove, handleToggle } = this;
    const { text, checked, id } = this.props;

    return (
      <div className="todo-item" onClick={() => handleToggle({ text, checked, id })}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            handleRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default connect(null, { removeTodo, toggleTodo })(TodoItem); // reducer가 action함수를 감지하면 TodoItem에 변경된 결과를 props로 알려줌?
