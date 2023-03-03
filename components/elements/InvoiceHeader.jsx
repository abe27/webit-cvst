import {
  generateACBook,
  generateBanch,
  generateCompanyID,
  generateCompanyName,
  generateCustomer,
  generateDepartment,
  generateGL,
  generateGroupProduct,
  generateJob,
  generateProductNo,
  generateSection,
  generateWHS,
} from "@/hook";
import {
  ArrowUpOnSquareIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const InvoiceHeader = ({ handleSave }) => {
  const inputRef = useRef(null);
  const [bomData, setBomData] = useState([]);
  const [companyID, setCompanyID] = useState("-");
  const [companyData, setCompanyData] = useState([]);
  const [companyName, setCompanyName] = useState(null);
  const [banchName, setBanchName] = useState(null);
  const [banchData, setBanchData] = useState([]);
  const [departmentID, setDepartmentID] = useState(null);
  const [departmentData, setDepartmentData] = useState([]);
  const [sectionID, setSectionID] = useState(null);
  const [sectionData, setSectionData] = useState([]);
  const [jobID, setJobID] = useState(null);
  const [jobData, setJobData] = useState([]);
  const [glID, setGLID] = useState(null);
  const [glData, setGLData] = useState([]);
  const [accBook, setAccBook] = useState(null);
  const [accBookData, setAccBookData] = useState([]);
  const [customerID, setCustomerID] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const [customerDescription, setCustomerDescription] = useState(null);
  const [whsID, setWHSID] = useState(null);
  const [whsData, setWHSData] = useState([]);
  const [groupProductID, setGroupProductID] = useState(null);
  const [groupProductData, setGroupProductData] = useState([]);
  const [productNoID, setProductNoID] = useState(null);
  const [productNoData, setProductNoData] = useState([]);
  const [productDescription, setProductDescription] = useState(null);

  const fetchCompanyID = () => {
    let year = generateCompanyID();
    setCompanyData(year);
  };

  const fetchBanchID = () => {
    let b = generateBanch();
    setBanchData(b);
  };

  const fetchBanchName = () => {
    let data = generateCompanyName();
    setCompanyName(data);
  };

  const fetchDepartmentID = () => {
    let data = generateDepartment();
    setDepartmentData(data);
  };

  const fetchSectionID = () => {
    let data = generateSection();
    setSectionData(data);
  };

  const fetchJobID = () => {
    let data = generateJob();
    setJobData(data);
  };

  const fetchGLID = () => {
    let data = generateGL();
    setGLData(data);
  };

  const fetchACBookID = () => {
    let data = generateACBook();
    setAccBookData(data);
  };

  const fetcCustomterID = () => {
    let data = generateCustomer();
    setCustomerData(data);
  };

  const fetchWHS = () => {
    let data = generateWHS();
    setWHSData(data);
  };

  const fetchGroupProduct = () => {
    let data = generateGroupProduct();
    setGroupProductData(data);
  };

  const fetchProduct = () => {
    let data = generateProductNo();
    setProductNoData(data);
  };

  const selectCompanyID = (e) => {
    setCompanyID(e.target.value);
    let s = companyData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectDepartmentID = (e) => {
    setDepartmentID(e.target.value);
    let s = departmentData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectSectionID = (e) => {
    setSectionID(e.target.value);
    let s = sectionData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectJobID = (e) => {
    setJobID(e.target.value);
    let s = jobData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectGLID = (e) => {
    setGLID(e.target.value);
    let s = glData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectAcBookID = (e) => {
    setAccBook(e.target.value);
    let s = accBookData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectCustomerID = (e) => {
    setCustomerID(e.target.value);
    let s = customerData[e.target.value];
    setCustomerDescription(s.description);
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectWHSID = (e) => {
    setWHSID(e.target.value);
    let s = whsData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectGroupProductID = (e) => {
    setGroupProductID(e.target.value);
    let s = groupProductData[e.target.value];
    let isFound = false;
    const newState = bomData.map((obj) => {
      if (obj.tag.indexOf(s.tag) >= 0) {
        isFound = true;
        return {
          ...obj,
          id: s.id,
        };
      }
      return obj;
    });
    if (!isFound) {
      setBomData([...bomData, s]);
    } else {
      setBomData(newState);
    }
  };

  const selectProductNo = (e) => {
    let data = productNoData[e.target.value];
    setProductNoID(data.seq);
    setProductDescription(data.description);
  };

  const clearAllInput = () => {
    setBomData([]);
    setCompanyID("-");
    setCompanyName("-");
    setBanchName("-");
    setDepartmentID("-");
    setSectionID("-");
    setJobID("-");
    setGLID("-");
    setAccBook("-");
    setCustomerID("-");
    setCustomerDescription("-");
    setWHSID("-");
    setGroupProductID("-");
    setProductNoID("-");
    setProductDescription("-");
  };

  const AddNewIttem = () => {
    if (productNoID && productNoID !== "-") {
      let doc = {
        partno: productNoID,
        partname: productDescription,
        qty: 100,
        price: 12,
        sum_price: 20,
      };
      handleSave(doc);
    }
    clearAllInput();
  };

  const handleFileChange = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
  };

  const UploadData = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    fetchCompanyID();
    fetchBanchID();
    fetchBanchName();
    fetchDepartmentID();
    fetchSectionID();
    fetchJobID();
    fetchGLID();
    fetchACBookID();
    fetcCustomterID();
    fetchWHS();
    fetchGroupProduct();
    fetchProduct();
  }, []);

  return (
    <>
      <div className="grid grid-cols-7 gap-7">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">ID Company</span>
          </label>
          <select
            className="select select-bordered select-sm"
            defaultValue={companyID}
            onChange={(e) => selectCompanyID(e)}
          >
            {companyData.map((i, e) => (
              <option key={e} value={i.seq}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Company Name.</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Banch</span>
          </label>
          <select
            className="select select-bordered select-sm"
            defaultValue={banchName}
            onChange={(e) => setBanchName(e.target.value)}
          >
            {banchData.map((i, e) => (
              <option key={e} value={i.seq}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Department</span>
          </label>
          <select
            className="select select-bordered select-sm"
            defaultValue={departmentID}
            onChange={(e) => selectDepartmentID(e)}
          >
            {departmentData.map((i, e) => (
              <option key={e} value={i.seq}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Section</span>
          </label>
          <select
            className="select select-bordered select-sm"
            defaultValue={sectionID}
            onChange={(e) => selectSectionID(e)}
          >
            {sectionData.map((i, e) => (
              <option key={e} value={i.seq}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Job</span>
          </label>
          <select
            className="select select-bordered select-sm"
            defaultValue={jobID}
            onChange={(e) => selectJobID(e)}
          >
            {jobData.map((i, e) => (
              <option key={e} value={i.seq}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">GL.</span>
          </label>
          <select
            className="select select-bordered select-sm"
            defaultValue={glID}
            onChange={(e) => selectGLID(e)}
          >
            {glData.map((i, e) => (
              <option key={e} value={i.seq}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="col-span-2">
          <div className="grid grid-cols-4 gap-4">
            <div className="form-control w-40 max-w-xs">
              <label className="label">
                <span className="label-text">AC Book</span>
              </label>
              <select
                className="select select-bordered select-sm"
                defaultValue={accBook}
                onChange={(e) => selectAcBookID(e)}
              >
                {accBookData.map((i, e) => (
                  <option key={e} value={i.seq}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">ออก Invoice ให้กับลูกค้า</span>
              </label>
              <select
                className="select select-bordered select-sm"
                defaultValue={customerID}
                onChange={(e) => selectCustomerID(e)}
              >
                {customerData.map((i, e) => (
                  <option key={e} value={i.seq}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">รายละเอียด</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs input-sm"
                value={customerDescription}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">WHOUSE</span>
              </label>
              <select
                className="select select-bordered select-sm"
                defaultValue={whsID}
                onChange={(e) => selectWHSID(e)}
              >
                {whsData.map((i, e) => (
                  <option key={e} value={i.seq}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-40 max-w-xs">
              <label className="label">
                <span className="label-text">Group Product</span>
              </label>
              <select
                className="select select-bordered select-sm"
                defaultValue={groupProductID}
                onChange={(e) => selectGroupProductID(e)}
              >
                {groupProductData.map((i, e) => (
                  <option key={e} value={i.seq}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Import CSV</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs input-sm"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">หมายเลขอ้างอิง</span>
              </label>
              <select
                className="select select-bordered select-sm"
                defaultValue={productNoID}
                onChange={(e) => selectProductNo(e)}
              >
                {productNoData.map((i, e) => (
                  <option key={e} value={i.seq}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">หมายเลขภายในเริ่ม:</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs input-sm"
                value={productDescription}
              />
            </div>
          </div>
        </div>
        <div className="p-2 border-2 border-gray-400">
          <div className="flex flex-wrap space-x-2">
            {bomData.map((i, x) => (
              <div key={x} className="mt-2">
                <h5 className="text-sm">
                  {i.tag}:
                  <span className="badge bg-gray-400 badge-md">{i.id}</span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex justify-end space-x-4">
          <button
            className="btn btn-ghost btn-sm text-white bg-orange-500 hover:bg-red-500"
            onClick={UploadData}
          >
            <ArrowUpOnSquareIcon className="w-6 h-6" />
            อัพโหลด
          </button>
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept=".csv,.xls,xlsx"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="btn btn-ghost btn-sm text-white bg-indigo-500 hover:bg-blue-500"
            onClick={() => AddNewIttem()}
          >
            <PlusCircleIcon className="w-6 h-6" />
            บันทึก
          </button>
          <button
            className="btn btn-ghost btn-sm text-white bg-red-500 hover:bg-orange-500"
            onClick={() => clearAllInput()}
          >
            <XCircleIcon className="w-6 h-6" />
            ยกเลิก
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;
