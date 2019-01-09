import React from 'react'
import styled from 'react-emotion'

const ContactSection = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 24
})

const ContactIcons = () => (
  <ContactSection className="contact-section">
    <a href="mailto:teresado.21t@gmail.com" rel="noopener noreferrer" target="_blank">
      <i class="fa fa-envelope" />
    </a>
    <a href="https://linkedin.com/in/tdo21" rel="noopener noreferrer" target="_blank">
      <i class="fab fa-linkedin" />
    </a>
    <a href="https://github.com/tk21" rel="noopener noreferrer" target="_blank">
      <i class="fab fa-github-alt" />
    </a>

    <a href="https://codepen.io/tk21" rel="noopener noreferrer" target="_blank">
      <i class="fab fa-codepen" />
    </a>
  </ContactSection>
)

export default ContactIcons
