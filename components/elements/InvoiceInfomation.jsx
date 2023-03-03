import { useEffect, useState } from "react";
import { Loading } from "..";

const InvoiceInfomation = () => {
  const [productData, setProductData] = useState([]);
  const [pdsData, setPdsData] = useState([]);

  const FetchProduct = () => {
    console.dir("Loading FetchProduct Data");
  };

  const FetchPds = () => {
    console.dir("Loading FetchPds Data");
  };

  useEffect(() => {
    const fetPro = setTimeout(() => {
      FetchProduct();
    }, 1500);

    const fetPds = setTimeout(() => {
      FetchPds();
    }, 1500);

    return () => {
      clearTimeout(fetPro);
      clearTimeout(fetPds);
    };
  }, []);

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
              <tr>
                <td colSpan={6}>
                  <Loading />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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
                <tr>
                  <td colSpan={2}>
                    <Loading />
                  </td>
                </tr>
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
                <tr>
                  <td colSpan={2}>
                    <Loading />
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        </div>
      </div>
    </>
  );
};

export default InvoiceInfomation;
