import { useEffect, useState } from "react";
import { Loading } from "..";

const InvoiceInfomation = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <table className="table w-full mt-2 table-compact">
            <thead>
              <tr>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                  RECNO.
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                  PARTNO.
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                  PARTNAME
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                  Quanlity
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                  Price
                </th>
                <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                  Sum Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, e) => (
                <tr key={e}>
                  <td>{e + 1}</td>
                  <td>{i.partno}</td>
                  <td>{i.partname}</td>
                  <td>{i.qty}</td>
                  <td>{i.price}</td>
                  <td>{i.sum_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <>
            <table className="table w-full mt-2 table-compact">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                    PDS.
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase">
                    PARTNO.
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td colSpan={2}>
                    <Loading />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </>
          <>
            <table className="table w-full mt-2 table-compact">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase ">
                    หมายเหตุ
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td colSpan={2}>
                    <Loading />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </>
        </div>
      </div>
    </>
  );
};

export default InvoiceInfomation;
