import Dialog from '../Dialog'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import YoavImage from '../../static/images/Yoav.jpg';
import OmerImage from '../../static/images/Omer.jpg';
import OrImage from '../../static/images/Or.jpg';
import ShaniImage from '../../static/images/Shani.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      placeContent: 'center',      
    },
    medium: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
  }));

export default function ContactUsDialog(props) {
    const classes = useStyles();

    return (
        <Dialog {...props} closeText={'סָגור'}>
            <Typography color="primary" variant="h4" component="h4">
                צרו קשר
            </Typography>
            <p style={{textAlign: 'center'}}>
                <b>פיתוח המערכת</b>
            </p>
            <div className={classes.root}>
                <NamedAvatar
                    classStyle={classes.medium}
                    imageUrl={YoavImage}
                    linkedinUrl={'https://www.linkedin.com/in/yoav-tepper-30283b131/'}
                    EngName={'Yoav Tepper'}
                    HebName={'יואב טפר'}
                />
                <NamedAvatar
                    classStyle={classes.medium}
                    imageUrl={OmerImage}
                    linkedinUrl={'https://www.linkedin.com/in/omer-perry/'}
                    EngName={'Omer Perry'}
                    HebName={'עומר פרי'}
                />
            </div>          
            <p style={{textAlign: 'center'}}>
                אם יש לכם <b>רעיון מגניב</b>,
            </p>
            <p style={{textAlign: 'center'}}>
                אם מצאתם <b>טעות מחרידה</b>,
            </p>
            <p style={{textAlign: 'center'}}>
                <p>
                    אם אתם רוצים <b>להוסיף אפליקציה</b>
                </p>
                <p>כמו <u><a href="https://betaknesset.com/apps/votes" rel="noreferrer" target="_blank">סימולטור ההצבעות</a></u> שיצרו</p>
            </p>
            <div className={classes.root}>
                <NamedAvatar
                    classStyle={classes.medium}
                    imageUrl={OrImage}
                    linkedinUrl={'https://www.linkedin.com/in/or-lichter-687867129/'}
                    EngName={'Or Lichter'}
                    HebName={'אור ליכטר'}
                />
                <NamedAvatar
                    classStyle={classes.medium}
                    imageUrl={ShaniImage}
                    linkedinUrl={'https://www.linkedin.com/in/shani-perl-886859191'}
                    EngName={'Shani Perl'}
                    HebName={'שני פרל'}
                />
            </div>
            <p style={{textAlign: 'center'}}>
                אתם מוזמנים לפנות אלינו בכתובת
            </p>
            <p style={{textAlign: 'center'}}>
                <a href="mailto:betaknesset@gmail.com">
                    <u>betaknesset@gmail.com</u>
                </a>
            </p>            
        </Dialog>
    )
}


function NamedAvatar({classStyle, imageUrl, linkedinUrl, EngName, HebName }) {
    return (
        <div style={{textAlign: 'center'}}>
            <IconButton href={linkedinUrl} target={'_blank'} style={{padding: '0px'}}>
                <Avatar className={classStyle} alt={EngName} src={imageUrl} />            
            </IconButton>
            <Typography style={{fontFamily: 'Varela Round'}} variant='subtitle2'><a href={linkedinUrl} rel="noreferrer" target="_blank"><b>{HebName}</b></a></Typography>
        </div>
    )
}