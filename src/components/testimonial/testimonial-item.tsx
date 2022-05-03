import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Testimonial } from '@/interfaces/testimonial'

interface Props {
  item: Testimonial
}

const TestimonialItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Box sx={{ mb: 2 }}>
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          {item.title}
        </Typography>
        <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.content}</Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 270,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            height: 52,
            width: 52,
            overflow: 'hidden',
            mr: 2,

            '& img': {
              width: '100%',
            },
          }}
        >
          <Image
            src={`/images/avatars/${item.user.photo}`}
            width={100}
            height={100}
            quality={97}
            alt={item.user.name}
          />
        </Box>
        <Box>
          <Typography variant="h6">{item.user.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {item.user.professional}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default TestimonialItem
