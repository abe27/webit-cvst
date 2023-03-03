import { useState } from "react";
import { InvoiceHeader, InvoiceInfomation, MainLayOut } from "@/components";

const InvoicePage = () => {
  const [item, setItem] = useState([]);
  const handleSave = (data) => {
    console.dir(data);
    let isFound = false;
    const newState = item.map((obj) => {
      if (obj.partname.indexOf(data.partname) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: data.id,
          qty: data.qty + obj.qty,
          sum_price: data.sum_price + obj.sum_price,
        };
      }
      return obj;
    });

    if (isFound) {
      setItem(newState);
    } else {
      setItem([...item, data]);
    }
  };
  return (
    <MainLayOut>
      <InvoiceHeader handleSave={handleSave} />
      <div className="divider" />
      <InvoiceInfomation data={item} />
    </MainLayOut>
  );
};

export default InvoicePage;
