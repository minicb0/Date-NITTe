import { makeStyles } from '@material-ui/core/styles'

const shadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

export const useStyles = makeStyles((theme) => ({
  bgimg: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    bottom: 0,
    left: 0,
    zIndex: -100
  },
  paper: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '2pt'
  },
  form: {
    backdropFilter: 'blur(20px) saturate(160%)',
    backgroundColor: 'rgba(252, 252, 252, 0.45)',
    borderRadius: '5px',
    border: '2px solid rgba(9, 8, 8, 0.04)',
    boxShadow: '0 4px 8px 0 rgba(248, 216, 103, 0.27), 0 6px 20px 0 rgb(0, 0, 0)',
    padding: '5%',
  },
  submit: {
    color: 'rgba(255, 255, 255, 0.95)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: theme.spacing(2, 0, 2),
    boxShadow: shadow,
    width: '100%'
  },
  inputfields: {
    margin: theme.spacing(3, 0, 1)
  },
  heading: {
      color: '#FE6B8B'
  }
}))
