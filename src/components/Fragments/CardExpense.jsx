import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

const categoryIconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  entertainment: Icon.Gamepad,
  shopping: Icon.Shopping,
  others: Icon.Other,
};

function getCategoryIcon(category = "") {
  const IconComponent = categoryIconMap[category.toLowerCase()] || Icon.Other;
  return <IconComponent />;
}

function CardExpense({ data }) {
  const { category, amount, percentage, trend, detail = [] } = data;

  return (
    <Card
      title={
        <div className="flex items-center gap-3">
          <div className="bg-special-bg dark:bg-gray-700 text-gray-02 dark:text-gray-200 p-3 rounded-lg">
            {getCategoryIcon(category)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm capitalize">{category}</span>
            <span className="font-bold text-xl">${amount}</span>
            <div className="flex items-center gap-1">
              <div className={trend === "up" ? "text-special-red" : "text-special-green"}>
                {trend === "up" ? <Icon.ArrowUp size={16} /> : <Icon.ArrowDown size={16} />}
              </div>
              <span className="text-xs text-gray-02 dark:text-gray-300">
                {percentage}% Compare to the last month
              </span>
            </div>
          </div>
        </div>
      }
      desc={
        <div className="flex flex-col divide-y divide-gray-500 dark:divide-gray-700">
          {detail.length === 0 && (
            <span className="text-xs text-gray-03">Belum ada transaksi</span>
          )}
          {detail.map((d, index) => (
            <div key={index} className="flex justify-between text-sm py-3 first:pt-0 last:pb-0">
              <span>{d.item}</span>
              <div className="text-right">
                <div className="font-bold">${d.amount}</div>
                <div className="text-xs text-gray-03">{d.date}</div>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export default CardExpense;
