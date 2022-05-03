import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Logo } from '@/components/logo'
import { Navigation, AuthNavigation } from '@/components/navigation'

const Header: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Navigation />
          <AuthNavigation />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
