import Dialog from '../Dialog'
import { Typography } from '@material-ui/core'

export default function ContactUsDialog(props) {
    return (
        <Dialog {...props} closeText={'סָגור'}>
            <Typography color="primary" variant="h4" component="h4">
                צרו קשר
            </Typography>
            <p style={{textAlign: 'center'}}>
                יש לכם רעיון מגניב?
            </p>
            <p style={{textAlign: 'center'}}>
                מצאתם טעות מחרידה?
            </p>
            <p style={{textAlign: 'center'}}>
                רוצים להוסיף אפליקציה משלכם?
            </p>
            <br />
            <p style={{textAlign: 'center'}}>
                מוזמנים לפנות אלינו בכתובת
            </p>
            <p style={{textAlign: 'center'}}>
                <a href="mailto:betaknesset@gmail.com">
                    betaknesset@gmail.com
                </a>
            </p>
        </Dialog>
    )
}