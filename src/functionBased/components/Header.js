import React from "react"

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <h1
        className="headerbox"
        style={{
          fontSize: "6em",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#100",
          textAlign: "center",
        }}
      >
        To-dos
      </h1>
    </header>
  )
}

export default Header