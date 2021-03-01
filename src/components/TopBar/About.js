import Dialog from '../Dialog'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      placeContent: 'center',      
    },
    small: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
  }));

export default function AboutDialog(props) {
    const classes = useStyles();

    return (
        <Dialog {...props} closeText={'מגניב'}>
            <Typography color="primary" variant="h4" component="h4">
                אודות
            </Typography>
            <p>
                בטא מחוקקים הוא פרויקט קהילתי שהתחיל מהשאלה הפשוטה - <i>מה עושים חברי הכנסת?</i>
            </p>
            <p>
                כשגילינו ש<a href="https://main.knesset.gov.il/Activity/Info/pages/databases.aspx" rel="noreferrer" target="_blank">המידע של הכנסת זמין כבר מ-2016</a> ופתוח לכל,
                הבנו שיש פה הזדמנות לגשת להכל אחרת.
            </p>
            <ul>
                <li>
                 במקום לקבל פרפרזות מהתקשורת, אפשר לראות את <b>הציטוט האמיתי</b>.
                </li>
                <li>
                    במקום להקשיב להבטחות המפלגות בפריימריז ולקוות שיהיה טוב, אפשר לראות אם הם עמדו <b>בהבטחות הקודמות שלהם</b>.
                </li>
                <li>
                    במקום שרוב חברי הכנסת יהיו דמויות עלומות ולא מוכרות, אפשר לקרוא, לחקור ולהתעמק <b>במה שבאמת חשוב להם</b>.
                </li>
            </ul>
            <br/>
            <p style={{textAlign: 'center'}}>
                <b>פיתוח מערכת:</b>
            </p>
            <div className={classes.root}>
                <NamedAvatar
                    imageUrl={"https://media-exp1.licdn.com/dms/image/C5603AQEmKRy6pDIqjQ/profile-displayphoto-shrink_400_400/0/1555147899426?e=1620259200&v=beta&t=v7kE7eEtzYI7pg6tETY6zWDh2wI-q9fzLEoH2PV1Vzk"}
                    linkedinUrl={'https://www.linkedin.com/in/yoav-tepper-30283b131/'}
                    EngName={'Yoav Tepper'}
                    HebName={'יואב טפר'}
                />
                <NamedAvatar
                    imageUrl={"https://media-exp1.licdn.com/dms/image/C5603AQE2l3rAMobWBA/profile-displayphoto-shrink_400_400/0/1559466537360?e=1620259200&v=beta&t=tJrmtti9AeYneQWlAHuhoaufv8lohZA14t1eHmWR0yQ"}
                    linkedinUrl={'https://www.linkedin.com/in/omer-perry/'}
                    EngName={'Omer Perry'}
                    HebName={'עומר פרי'}
                />
            </div>
            <p style={{textAlign: 'center'}}>
                <b>אפליקציית סימולטור הצבעות:</b>
            </p>
            <div className={classes.root}>
                <NamedAvatar
                    imageUrl={"https://media-exp1.licdn.com/dms/image/C4E03AQHgTmfWmJ7JWA/profile-displayphoto-shrink_400_400/0/1611159700825?e=1620259200&v=beta&t=SSGMYljTmk2q3w0kjIHAuRYJPK3fOIyDUHGbQgcVnfg"}
                    linkedinUrl={'https://www.linkedin.com/in/or-lichter-687867129/'}
                    EngName={'Or Lichter'}
                    HebName={'אור ליכטר'}
                />
                <NamedAvatar
                    imageUrl={"https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/25758_1323071971059_4673155_n.jpg?_nc_cat=109&ccb=3&_nc_sid=de6eea&_nc_ohc=5y5DvXbRQOwAX_o4V8P&_nc_ht=scontent.ftlv2-1.fna&oh=78a437390f434868aee1dedcc2878fa5&oe=60616488"}
                    linkedinUrl={'https://www.linkedin.com/in/omer-perry/'}
                    EngName={'Shani Perl'}
                    HebName={'שני פרל'}
                />
            </div>
        </Dialog>
    )
}

function NamedAvatar({imageUrl, linkedinUrl, EngName, HebName }) {
    const classes = useStyles();

    return (
        <div style={{textAlign: 'center'}}>
            <IconButton href={linkedinUrl} target={'_blank'} style={{padding: '0px'}}>
                <Avatar className={classes.small} alt={EngName} src={imageUrl} />            
            </IconButton>
            <Typography variant='subtitle2'>{HebName}</Typography>
        </div>
    )
}