import { Box, Card, Grid, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useMutation } from 'react-query'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

import { particlesConfig } from 'utils'
import { MainTypography, SecondaryTypography } from './styles'

const fullDiv = {
  width: '100%',
  height: '100%'
}
const useStyles = makeStyles((theme: Theme) => ({
  particles: {
    ...fullDiv,
    backgroundColor: '#1B2327',
    position: 'absolute',
    boxSizing: 'border-box',
    zIndex: -1,
    overflow: 'hidden'
  },
  wrapper: {
    overflow: 'hidden',
    marginTop: 44,
    zIndex: 40,
    width: '100%',
    height: 'calc(100% - 44px)',
    display: 'grid',
    placeContent: 'center'
  },
  cardContainer: {
    flex: '0 1 700px',
    margin: 'auto',
    borderRadius: 16,
    backgroundColor: '#3e3e3e',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%'
    }
  },
  card: {
    position: 'relative',
    borderRadius: 16
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 18px',
    backgroundColor: '#4d4d4d',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  cardHeaderLeft: {
    marginRight: 'auto'
  },
  cardHeaderRight: {
    display: 'flex'
  },
  cardHeaderButton: {
    display: 'inline-block',
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  cardHeaderEllipsis: {
    width: 3,
    height: 3,
    marginLeft: 2,
    borderRadius: 8,
    backgroundColor: '#999'
  },
  cardBody: {
    display: 'flex',
    margin: 0,
    width: 'auto'
  },
  cardBodyContent: {
    padding: '28px 48px',
    [theme.breakpoints.down('md')]: {
      padding: '24px 32px'
    }
  },
  cardBodyContentLeft: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardBodyTitle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: '#f2f0f0',
    fontSize: 26,
    fontFamily: 'Nunito, sans-serif',
    '&:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      left: 0,
      bottom: -10,
      width: 25,
      height: 4,
      backgroundColor: '#f2f0f0'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 24
    }
  },
  cardBodyContact: {
    marginTop: 'auto',
    fontSize: 8,
    color: '#888'
  },
  cardFormGroup: {
    marginBottom: 16
  },
  cardFormControl: {
    width: '100%',
    padding: '10px 0',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #666',
    color: '#ddd',
    fontSize: 14,
    textTransform: 'uppercase',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontWeight: 700,
    '&::placeholder': {
      color: '#666'
    },
    '&:focus': {
      borderBottomColor: '#ddd'
    }
  },
  cardFormControlMessage: {
    marginTop: 40
  },
  cardFormControlButtonContainer: {
    marginBottom: 0,
    textAlign: 'right'
  },
  cardFormControlButton: {
    background: 'none',
    border: 'none',
    color: '#f2f0f0',
    fontSize: 14,
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      color: '#626262'
    }
  }
}))

type ContactUsBody = {
  name: string
  mail: string
  phone: string
  message: string
  subject: string
}

const Contact = () => {
  const classes = useStyles()
  // eslint-disable-next-line no-unused-vars
  const mutation = useMutation((body: ContactUsBody) =>
    fetch(`${import.meta.env.VITE_BACKEND_URL}/contactUs`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'api-key': `Bearer ${import.meta.env.VITE_BACKEND_API_KEY}`
      }
    }).then(res => res.json())
  )
  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        userSelect: 'none',
        position: 'fixed'
      }}
    >
      <Particles
        init={particlesInit}
        className={classes.particles}
        params={particlesConfig}
      />
      <div className={classes.wrapper}>
        <Card sx={{ minHeight: 360 }} className={classes.cardContainer}>
          <Box className={classes.card}>
            <Box className={classes.cardHeader}>
              <Box className={classes.cardHeaderLeft}>
                <Box
                  className={classes.cardHeaderButton}
                  style={{ backgroundColor: '#ed1c6f' }}
                />
                <Box
                  className={classes.cardHeaderButton}
                  style={{ backgroundColor: '#e8e925' }}
                />
                <Box
                  className={classes.cardHeaderButton}
                  style={{ backgroundColor: '#74c54f' }}
                />
              </Box>
              <Box className={classes.cardHeaderRight}>
                <Box className={classes.cardHeaderEllipsis} />
                <Box className={classes.cardHeaderEllipsis} />
                <Box className={classes.cardHeaderEllipsis} />
              </Box>
            </Box>
            <Grid container spacing={2} className={classes.cardBody}>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={`${classes.cardBodyContent} ${classes.cardBodyContentLeft}`}
              >
                <Box className={classes.cardBodyTitle}>
                  <MainTypography>CONTÁCTENOS</MainTypography>
                </Box>
                <Box className={classes.cardBodyContact}>
                  <SecondaryTypography>
                    EMAIL INFO: acecom@uni.edu.pe
                  </SecondaryTypography>
                </Box>
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={classes.cardBodyContent}
              >
                <Box className={classes.cardFormGroup}>
                  <input
                    className={classes.cardFormControl}
                    placeholder='NOMBRE'
                  />
                </Box>
                <Box className={classes.cardFormGroup}>
                  <input
                    className={classes.cardFormControl}
                    placeholder='CORREO'
                  />
                </Box>
                <Box className={classes.cardFormGroup}>
                  <input
                    className={classes.cardFormControl}
                    placeholder='CELULAR'
                  />
                </Box>
                <Box
                  className={`${classes.cardFormGroup} ${classes.cardFormControlMessage}`}
                >
                  <input
                    className={classes.cardFormControl}
                    placeholder='MENSAJE'
                  />
                </Box>
                <Box
                  className={`${classes.cardFormGroup} ${classes.cardFormControlButtonContainer}`}
                >
                  <button className={classes.cardFormControlButton}>
                    ENVIAR
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
        {/* <button
          // style={{ marginTop: 50 }}
          onClick={() => {
            mutation.mutate({
              mail: 'anthony.luzquinos@gmail.com',
              message: 'Testing',
              name: 'Anthony',
              subject: 'Test mail api',
              phone: '12345'
            })
          }}
        >
          Contact
        </button> */}
      </div>
    </div>
  )
}

export { Contact }
// https://swapi.dev/api/people/11/
/**
POST https://api.acecom.dev/api/contactUs
Content-Type: applicaion/json
api-key: Bearer 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

{
  "lastName": "Luzquiños",
  "mail": "anthony.luzquinos@gmail.com",
  "message": "Testing",
  "name": "Anthony",
  "subject": "Test mail api"
}

 */
