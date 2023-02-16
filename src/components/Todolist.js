import cross from "../images/icon-cross.svg";
import React, { useState } from "react";

function Todolist(props) {
let {id} = props

  return (
    <>
      <div
        className="todo-item"
        style={{ backgroundColor: props.mode ? "white" : "hsl(235, 24%, 19%)" }}
      >
        <div className={props.isCompleted ? "round2" : "round3"}>
          <input type="checkbox" checked id="checkbox" />

          <label
            htmlFor="checkbox"
            style={{
              background: props.isCompleted
                ? "linear-gradient(169deg, #0BA9F9 0%, #F308E3 100%)"
                :"transparent",
            }}
            onClick={() => props.complete(id)}
          ></label>
        </div>
        {props.mode ? (
          <p
            style={{
              textDecoration: props.isCompleted ? "line-through" : "none",
              color: props.isCompleted ?  "hsl(236, 9%, 61%)" : "hsl(235, 19%, 35%)" ,
            }}
          >
            {props.todo}
          </p>
        ) : (
          <p
            style={{
              textDecoration: props.isCompleted ? "line-through": "none" ,
              color: props.isCompleted ? "hsl(236, 9%, 61%)" : "hsl(236, 33%, 92%)" ,
            }}
          >
            {props.todo}
          </p>
        )}
        <img
          src={cross}
          alt=""
          onClick={() => {
            props.delete(props.id);
          }}
          style={{cursor: "pointer"}}
        />
      </div>

   
    </>
  );
}

export default Todolist;
