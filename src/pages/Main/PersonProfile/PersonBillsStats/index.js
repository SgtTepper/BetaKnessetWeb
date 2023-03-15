import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import Explainer from "../../../../components/Explainer";
import config from "../../../../config";
import { useCancellableFetch } from "../../../../utils";

export default React.memo(function PersonBillsStats({
    personID,
    filter,
    setFilter,
}) {
    const [data, setData] = useState([]);
    const serverFetch = useCancellableFetch();

    useEffect(() => {
        setFilter(null);
        if (!personID) return;
        (async () => {
            const res = await serverFetch(
                `${config.server}/PersonBillsStats?personId=${personID}`
            );
            setData(res);
        })();
    }, [personID, setFilter, serverFetch]);

    const total = data?.map((d) => d.Counter).reduce((a, b) => a + b, 0);
    if (total === 0) return null;

    const doughnutData = {
        labels: data.map((d) => d.Desc),
        datasets: [
            {
                data: data.map((d) => d.Counter),
                backgroundColor: data.map((x) =>
                    getStatusColor(x.Desc, filter)
                ),
                hoverBackgroundColor: data.map((x) =>
                    getStatusColorHover(x.Desc)
                ),
                borderColor: data.map((x) =>
                    filter === x.Desc ? "white" : getStatusColor(x.Desc, filter)
                ),
                hoverBorderColor: data.map((x) =>
                    filter === x.Desc
                        ? "white"
                        : getStatusColorHover(x.Desc, filter)
                ),
                borderWidth: data.map((x) => (filter === x.Desc ? 5 : 0)),
                hoverBorderWidth: 5,
            },
        ],
    };

    const options = {
        legend: {
            display: false,
            position: "right",
        },
        plugins: {
            // Change options for ALL labels of THIS CHART
            datalabels: {
                color: "white",
                textAlign: "center",
                formatter: function (value, context) {
                    if (value / total < 0.05) return "";
                    return context.chart.data.labels[context.dataIndex];
                },
            },
        },
        onClick: function (evt, element) {
            if (element[0] && data[element[0]._index].Desc) {
                if (filter === data[element[0]._index].Desc) setFilter(null);
                else setFilter(data[element[0]._index].Desc);
            } else setFilter(null);
        },
    };

    return (
        <>
            <BillExplainer />
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    fontSize: "110%",
                    display: "flex",
                    placeItems: "center",
                    flexDirection: "column",
                    placeContent: "center",
                    color: "white",
                    fontFamily: "'Secular One', sans-serif",
                    pointerEvents: "none",
                }}
            >
                <div style={{ fontSize: "155%" }}>{total}</div>
                <div>הצעות חוק</div>
            </div>
            <Doughnut data={doughnutData} options={options} />
        </>
    );
});

function getStatusColor(status, filter) {
    if (status === filter) return getStatusColorHover(status);
    switch (status) {
        case "בתהליך":
            return "#FF9900";
        case "אושרה":
            return "#109618";
        case "נעצרה":
            return "#DC3912";
        default:
            return "#3366CC";
    }
}
function getStatusColorHover(status) {
    switch (status) {
        case "בתהליך":
            return "#FFaa22";
        case "אושרה":
            return "#30a638";
        case "נעצרה":
            return "#fC5932";
        default:
            return "#5386eC";
    }
}

function BillExplainer(props) {
    return (
        <Explainer {...props}>
            <p>ח"כים יכולים גם ליזום הצעות חוק וגם להצטרף להצעות חוק.</p>
            <p>
                ברשימה לפניכם אנו מציגים עבור כל ח"כ את רשימת החוקים אותם יזם
                באופן ישיר בתור "יוזם ראשון".
            </p>
            <p>
                פרטים נוספים על אודות שלבי החקיקה והליך החקיקה{" "}
                <u>
                    <a
                        href="https://main.knesset.gov.il/Activity/Legislation/Documents/Explanation2.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        תוכלו למצוא בקישור זה
                    </a>
                </u>
            </p>
        </Explainer>
    );
}
