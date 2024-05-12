import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isAuth } = useContext(UserContext);

  const navigate = useNavigate()

  useEffect(() => {
    navigate(isAuth ? "Todos/" : "Login/")
  }, [])
}