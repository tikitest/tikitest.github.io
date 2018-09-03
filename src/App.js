import React from 'react'
import { Header, CenterCard, Container, ContactIcons } from './components'

function App() {
  console.log('function app')

  return (
    <Container className="container">
      <CenterCard>
        <Header>Hi, I'm Teresa Do.</Header>
        <p>
          I'm a front end engineer who loves sensible, but fun user interfaces. I enjoy bringing
          ideas to life in the browser. With 3 years of experience in web development, I've built
          mobile-responsive apps on screen sizes from 320px to 1440px and beyond, with consistency
          in mind.
        </p>
        <p>
          <strong>Front-end: </strong> HTML5, CSS3, Javascript/ES6, AngularJS, React, jQuery, CSS in
          JS, SASS
        </p>
        <p style={{ marginBottom: 60 }}>
          <strong>Workflow & Tools: </strong> Agile, Gulp, Webpack, Git, JIRA, NPM/Yarn
        </p>
        <ContactIcons />
      </CenterCard>
    </Container>
  )
}

export default App
