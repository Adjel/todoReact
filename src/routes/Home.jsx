import React, { useContext, useState } from "react";
import styled from "styled-components"
import { TodoContext } from "../../../providers/TodoProvider/TodoProvider";

export default function home() {
  const { todos, handleTodoInput, } = useContext(TodoContext);
  const [title, setTitle] = useState("")
  return <Wrapper>
    <div>
      {todos.map(({id, title, createdAt, completed}) => (
        <div key={id}>{title}{completed}</div>
      ))}
    </div>
    <Form>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" required value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <Button type="submit" onClick={(event) => setTodo(event, title)} >Create todo</Button>
    </Form>
  </Wrapper>;

  function setTodo(event, title) {
    event.preventDefault();
    handleTodoInput(title)
  }
}

const Wrapper = styled.div``;

const Form = styled.form``;

const Button = styled.button``

