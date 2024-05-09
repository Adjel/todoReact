import React, { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "../../../providers/TodoProvider/TodoProvider";

export default function Home() {
  const { handleTodoInput, } = useContext(TodoContext);
  return <Wrapper>Hello</Wrapper>;
}

const Wrapper = styled.div``;