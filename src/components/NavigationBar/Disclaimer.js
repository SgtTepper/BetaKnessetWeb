import React from "react";
import Typography from "@material-ui/core/Typography";
import Dialog from "../Dialog";

export default function DisclaimerDialog(props) {
    return (
        <Dialog {...props} closeText={"אישור"}>
            <Typography color="primary" variant="h4" component="h4">
                גילוי נאות
            </Typography>
            <p>
                <b>לתשומת לב הגולשים</b>
            </p>
            <p>
                האתר מתבסס על{" "}
                <a
                    href="https://main.knesset.gov.il/Activity/Info/pages/databases.aspx"
                    rel="noreferrer"
                    target="_blank"
                >
                    <u>מאגרי המידע הפתוחים של הכנסת</u>
                </a>
                , וזאת בהתאם לתקנות המתירות פיתוח יישומים ומערכות על בסיס מידע
                זה.
            </p>
            <p>
                באתר זה מוצגים פריטים שהינם תוצאה של אלגוריתמים לעיבוד מידע אשר
                אינם חפים מטעויות. יתכן למשל שהתוכנה שלנו תבצע טעות בזיהוי
                דובר/ת, בפירוש הטקסט, או במדידת ערכים הקשורים בטקסט.
            </p>
            <p>
                למען הסר ספק, המידע האמין והמדויק ביותר הינו זה שמקורו במאגרי
                המידע של הכנסת ובמסמכי הפרוטוקולים שמפורסמים באתר הכנסת והם מקור
                המידע המכריע.
            </p>
            <p>
                הנהלת האתר אינה נושאת באחריות על טעויות שייתכנו. השימוש באתר
                ושיתוף המידע שבאתר הוא באחריות המשתמש בלבד.
            </p>
            <p>
                התמונות באתר לקוחות{" "}
                <a
                    href="https://main.knesset.gov.il/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <u>מאתר הכנסת</u>
                </a>
                .
            </p>
        </Dialog>
    );
}
