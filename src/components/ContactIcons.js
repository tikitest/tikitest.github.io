import React from 'react'
import styled from 'react-emotion'

const ContactSection = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 24
})

const ContactIcons = () => (
  <ContactSection className="contact-section">
    <a href="mailto:teresado.21t@gmail.com" target="_blank">
      <i class="fa fa-envelope" />
    </a>
    <a href="https://linkedin.com/in/tdo21" target="_blank">
      <i class="fa fa-linkedin" />
    </a>
    <a href="https://github.com/tk21" target="_blank">
      <i class="fa fa-github-alt" />
    </a>

    <a href="https://github.com/tk21" target="_blank">
      <i class="fa fa-file" />
    </a>
  </ContactSection>
)

export default ContactIcons
