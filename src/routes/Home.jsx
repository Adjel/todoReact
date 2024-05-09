import React, { useContext, useState } from "react";
import styled from "styled-components"
import { TodoContext } from "../../../providers/TodoProvider/TodoProvider";

export default function Home() {
  const { todos, handleTodoInput, } = useContext(TodoContext);
  const [title, setTile] = useState("")
  return <Wrapper>
    <div>{todos.map(({item}) => (
      <div>{item}</div>
    ))}</div>
    <Form>
      <label htmlFor="title">Title:</label>
      <input type="text" name="titme" id="title" required value={title} onChange={(event) => setTile(event.target.value)}></input>
      <button type="submit" onClick={(event) => setTodo(event, title)} >Create todo</button>
    </Form>
  </Wrapper>;

  function setTodo(event, title) {
    event.preventDefault();
    handleTodoInput(title)
  }
}

const Wrapper = styled.div``;

const Form = styled.form``;

