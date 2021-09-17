import React from 'react';

const TodoDetail = (props) => {
    return (
        <div className="TodoDetail">
            <div className="row">
                <div className="left">
                    Name:
                </div>
                <div className="right">
                    {props.title}
                </div>
            </div>
            <div className="row">
                <div className="left">
                    Content:
                </div>
                <div className="right">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default TodoDetail;