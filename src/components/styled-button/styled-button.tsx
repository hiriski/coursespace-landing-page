import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ButtonProps } from '@mui/material/Button'
import { fontFamily } from '@/config/theme/typography'

interface BaseButtonProps extends Pick<ButtonProps, 'onClick' | 'type' | 'startIcon' | 'endIcon'> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'default' | 'primary' | 'secondary' | 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
  disableHoverEffect?: boolean
}
interface StyledButtonRootProps extends BaseButtonProps {
  theme?: Theme
}

const StyledButtonRoot = styled('button', {
  shouldForwardProp: (prop) =>
    prop !== 'variant' && prop !== 'color' && prop !== 'size' && prop !== 'disableHoverEffect',
})<StyledButtonRootProps>(({ theme, color, variant, size, disableHoverEffect }) => ({
  fontFamily,
  cursor: 'pointer',
  minWidth: 40,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 1,
  borderRadius: Number(theme.shape.borderRadius) * 3,

  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  transform: 'unset',
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
  verticalAlign: 'middle',
  outline: 'none !important',
  transition: theme.transitions.create(['transform']),

  // hover
  '&:hover': {
    ...(!disableHoverEffect && {
      transform: 'translateY(-3px)',
    }),
  },

  '& svg': {
    fontSize: 20,
  },

  // sizes and variants
  ...(size === 'small' &&
    variant === 'outlined' && {
      padding: '4px 10px',
    }),
  ...(size === 'medium' &&
    variant === 'outlined' && {
      padding: '6px 14px',
    }),
  ...(size === 'large' &&
    variant === 'outlined' && {
      padding: '10px 18px',
      fontSize: 15,
    }),

  ...(size === 'small' &&
    variant !== 'outlined' && {
      padding: '6px 12px',
    }),
  ...(size === 'medium' &&
    variant !== 'outlined' && {
      padding: '8px 16px',
    }),
  ...(size === 'large' &&
    variant !== 'outlined' && {
      padding: '12px 20px',
      fontSize: 15,
    }),

  // variants
  ...(variant !== 'contained' && {
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
  }),

  // colors & varians
  ...(color === 'default' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'primary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: '0 6px 22px 0 rgb(18 124 113 / 12%)',
    }),
  ...(color === 'secondary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'dark' &&
    variant === 'contained' && {
      backgroundColor: '#313d56',
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'light' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.text.primary,
    }),

  ...(color === 'primary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    }),
  ...(color === 'secondary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    }),
  ...(color === 'dark' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: '#313d56',
    }),
  ...(color === 'light' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: `#313d56`,
    }),

  ...(color === 'primary' &&
    variant === 'text' && {
      color: theme.palette.primary.main,
    }),
  ...(color === 'secondary' &&
    variant === 'text' && {
      color: theme.palette.secondary.main,
    }),
  ...(color === 'dark' &&
    variant === 'text' && {
      color: '#313d56',
    }),
  ...(color === 'light' &&
    variant === 'text' && {
      color: theme.palette.primary.contrastText,
    }),
}))

interface Props extends BaseButtonProps {
  children: ReactNode
}

const StyledButton: FC<Props> = (props: Props) => {
  const { children, onClick, disableHoverEffect, startIcon, endIcon, ...rest } = props
  return (
    <StyledButtonRoot onClick={onClick} disableHoverEffect={disableHoverEffect} {...rest}>
      {startIcon && (
        <Box component="span" sx={{ display: 'inherit', mr: 1, ml: -0.5 }}>
          {startIcon}
        </Box>
      )}
      <Box component="span">{children}</Box>
      {endIcon && (
        <Box component="span" sx={{ display: 'inherit', ml: 1, mr: -0.5 }}>
          {endIcon}
        </Box>
      )}
    </StyledButtonRoot>
  )
}

StyledButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  disableHoverEffect: false,
}

export default StyledButton
