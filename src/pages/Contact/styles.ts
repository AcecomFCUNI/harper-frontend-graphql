import { Typography, styled } from '@mui/material'

const MainTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 700,
  fontSize: 28,
  [theme.breakpoints.down('md')]: {
    fontSize: 24
  }
}))

const SecondaryTypography = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 400,
  fontSize: 12
})

export { MainTypography, SecondaryTypography }
