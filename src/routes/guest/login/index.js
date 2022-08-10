import React, { useState } from "react"
import Button from "../../../components/button"
import Textfield from "../../../components/textfield"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState("")

  const goToHomepage = () => {
    navigate("/homepage")
  }

  const handleName = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <Textfield value={name} onChange={handleName} />
      <Button text="Giriş" onClick={goToHomepage} />
    </div>
  )
}
