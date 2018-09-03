import styled from 'react-emotion'

const CenterCard = styled.div({
  backgroundColor: 'white',
  borderRadius: '2px',
  width: '40%',
  padding: '48px 48px 12px 48px',
  maxWidth: '600px',
  '@media (max-width: 768px)': {
    width: '80%'
  },

  '@media (max-width: 620px)': {
    width: '70%'
  }
})

export default CenterCard
