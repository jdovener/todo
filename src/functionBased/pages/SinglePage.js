import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
    console.log(useParams())
    const aboutData = [
        {
          slug: "about-app",
          title: "About the App",
          description:
          "This app was created by myself with the help of a React tutorial. It is a To-Do app which has the ability to add, edit and delete To-Do items. Through this project, I furthered my understanding of React and practiced concepts such as: Persisting data in browser local storage, using React Hooks, using SVG icons and adding a hamburger menu.",
        },
      ]
    const { slug } = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const { title, description } = aboutContent
    return (
        <div className="main__content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )
}
export default SinglePage