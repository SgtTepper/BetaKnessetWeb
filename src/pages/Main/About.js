import Dialog from '../../components/Dialog'
import { Typography } from '@material-ui/core'

export default function AboutDialog(props) {
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
            <p style={{ textIndent: 10 }}>
            במקום לקבל פרפרזות מהתקשורת, אפשר לראות את <b>הציטוט האמיתי</b>.
            </p>
            <p style={{ textIndent: 10 }}>
            במקום להקשיב להבטחות המפלגות בפריימריז ולקוות שיהיה טוב, אפשר לראות אם הם עמדו <b>בהבטחות הקודמות שלהם</b>.
            </p>
            <p style={{ textIndent: 10 }}>
            במקום שרוב חברי הכנסת יהיו דמויות עלומות ולא מוכרות, אפשר לקרוא, לחקור ולהתעמק <b>במה שבאמת חשוב להם</b>.
            </p>
        </Dialog>
    )
}