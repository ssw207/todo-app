import React, { Component } from "react";
import "./Form.css";
//redux
import { connect } from "react-redux";
import { addTodo } from "../actions";

export class Form extends Component {
  state = {
    input: ""
  };
  handleChange = e => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  };
  handleCreate = () => {
    //App에 전달된 redux store객체를 props로 전달받고 store객체에 저장된 reducer
    this.props.addTodo({
      text: this.state.input,
      checked: false
    });
    this.setState({ input: "" });
  };

  handleKeyPress = e => {
    // 눌려짂 키가 Enter 이면 handleCreate 호출
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const {input} = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;

    return (
      <div className="form">
        <input value={input} onChange={handleChange} onKeyPress={handleKeyPress} />
        <div className="create-button" onClick={handleCreate}>
          추가
        </div>
      </div>
    );
  }
}

//redux에 addTodo action 객체를 전달하고 결과값을 props에 받아 Form컴포넌트로 전달한다?
//초기값은 필요없으니 null세팅
export default connect(null, { addTodo })(Form);