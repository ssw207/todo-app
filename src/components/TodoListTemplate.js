import React from 'react';
import './TodoListTemplate.css';
 
function TodoListTemplate({form, children}) {
    return (
        <div>
            <main className="todo-list-template">
                <div className="title">
                    오늘 할 일 ({process.env.REACT_APP_TITLE})
                </div>
                
                {/* 입력폼 랜더링 */}
                <section className="form-wrapper">
                    {form}
                </section>
                
                {/* 자식요소 랜더링 */}
                <section className="form-wrapper">
                    {children}
                </section>
            </main>
        </div>
    );
}

export default TodoListTemplate;
