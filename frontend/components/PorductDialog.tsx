import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { createStyles, DialogActions, Theme, useMediaQuery, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import { TransitionProps } from '@material-ui/core/transitions'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      backgroundColor: theme.palette.common.white,
    },
    dialogWrapper: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    imgContainer: {
      width: '50%',
      maxWidth: '50%',
      display: ' flex',
      alignItems: ' center',
      justifyContent: ' center',
      position: 'relative',
      padding: '30px 60px',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    descContainer: {
      width: '50%',
      maxWidth: '50%',
      borderLeft: '1px solid rgb(243, 243, 243)',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: '100%',
      },
    },
    desc: {
      padding: '50px',
    },
    descTitle: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: '10px',
    },
    title: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '21px',
      fontWeight: 600,
      color: 'rgb(13,17, 54)',
      lineHeight: '1.5',
      display: 'flex',
    },
    about: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '15px ',

      fontWeight: 400,
      color: 'rgb(66, 69, 97)',
      lineHeight: 2,
      marginTop: '30px  ',
    },
    descQty: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '13px',
      fontWeight: 400,
      color: 'rgb(119, 121, 140)',
    },
    descPrice: {
      display: 'flex',
      flexDirection: 'row',
      WebkitBoxPack: 'justify',
      justifyContent: 'space-between',
      marginTop: 30,
      marginBottom: 15,
    },
  })
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
export default function MaxWidthDialog({
  showModal,
  onHide,
  data,
}: {
  showModal: boolean
  onHide: Function
  data: any
}) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(showModal)
  const smMatches = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
    onHide()
  }

  return (
    <React.Fragment>
      {smMatches ? (
        <Dialog fullScreen open={showModal} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
              <IconButton edge="start" onClick={handleClose} aria-label="close">
                <CloseIcon color="primary" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className={classes.dialogWrapper}>
            <div className={classes.imgContainer}>
              <img src={data?.image?.formats?.large.url || data.image.url} alt="product" />
            </div>
            <div className={classes.descContainer}>
              <div className={classes.desc}>
                <div className={classes.descTitle}>
                  <h1 className={classes.title}>{data.name}</h1>
                </div>
                <div className={classes.descQty}>{data.Stock} in stock</div>
                <p className={classes.about}>{data.description}</p>
                <div className={classes.descPrice}>
                  <Button size="small" color="primary">
                    {data.price}
                  </Button>
                  <div>
                    <Button size="small" color="primary" variant="contained">
                      Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      ) : (
        <Dialog
          maxWidth="md"
          open={showModal}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <div className={classes.dialogWrapper}>
            <div className={classes.imgContainer}>
              <img src={data?.image?.formats?.large.url || data.image.url} alt="product" />
            </div>
            <div className={classes.descContainer}>
              <div className={classes.desc}>
                <div className={classes.descTitle}>
                  <h1 className={classes.title}>{data.name}</h1>
                </div>
                <div className={classes.descQty}>{data.Stock} in stock</div>
                <p className={classes.about}>{data.description}</p>
                <div className={classes.descPrice}>
                  <Button size="large">
                    <div className="text-xl font-bold">Rs. {data.price}</div>
                  </Button>
                  <div>
                    <Button size="small" color="secondary" variant="contained">
                      Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              <div className="text-lg font-bold">Close</div>
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  )
}
