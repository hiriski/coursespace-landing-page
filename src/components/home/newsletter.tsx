import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 10 }}>
      <Container>
        <Box sx={{ backgroundColor: 'secondary.main', borderRadius: 10, py: 10, px: 8, textAlign: 'center' }}>
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: 42 }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: { xs: '90%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{ backgroundColor: 'background.paper', borderRadius: 3, width: '100%', height: 48, px: 2, mr: 3 }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large">
                Subscribe
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
