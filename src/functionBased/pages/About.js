import React from "react"
import SinglePage from "./SinglePage"
import { Link, useRouteMatch, Route } from "react-router-dom"

const About = () => {
    const { url, path } = useRouteMatch()
    return (
        <div className="about__content">
          <ul className="about__list">
            <li className="main__content">
              <Link to={`${url}/about-app`}>Click here for info</Link>
            </li>
          </ul>
          <Route path={`${path}/:slug`}>
            <SinglePage />
          </Route>
        </div>
    )
}
export default About