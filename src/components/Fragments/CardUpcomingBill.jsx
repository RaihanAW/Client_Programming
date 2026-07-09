import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function formatDateParts(item) {
  const rawDate = item.date || item.due_date || item.dueDate || item.billDate;

  if (item.month && item.date && Number.isNaN(Number(item.date)) === false && String(item.date).length <= 2) {
    return { month: item.month, date: item.date };
  }

  if (rawDate) {
    const parsed = new Date(rawDate);
    if (!Number.isNaN(parsed.getTime())) {
      return {
        month: parsed.toLocaleString("en-US", { month: "short" }),
        date: parsed.getDate(),
      };
    }
  }

  return { month: item.month || "-", date: item.date || "-" };
}

function CardUpcomingBill(props) {
  const { data } = props;
  const isLoading = data === null || data === undefined;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          isLoading ? (
            <div className="flex flex-col justify-center items-center h-full text-primary">
              <CircularProgress color="inherit" size={50} />
              Loading Data
            </div>
          ) : (
            <div className="flex flex-col justify-around h-full">
              {data.length === 0 && (
                <div className="text-center text-gray-03">Tidak ada tagihan mendatang</div>
              )}
              {data.map((item) => {
                const { month, date } = formatDateParts(item);
                return (
                  <div key={item.id} className="flex justify-between pt-3 pb-3">
                    <div className="flex">
                      <div className="bg-special-bg dark:bg-gray-700 p-4 rounded-lg flex flex-col">
                        <span className="text-xs">{month}</span>
                        <span className="text-2xl font-bold">{date}</span>
                      </div>
                      <div className="ms-10">
                        {item.icon || <Icon.Bill />}
                        <span className="font-bold">{item.name || item.title}</span>
                        <br />
                        <span className="text-xs">
                          Last Charge - {item.lastCharge || item.last_charge || "-"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="py-2 px-4 border border-gray-05 dark:border-gray-600 rounded-lg font-bold">
                        ${item.amount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;
