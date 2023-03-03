const BomData = [
  {
    label: "Corp",
    code: "XXXXXXXX",
  },
  {
    label: "Dept",
    code: "XXXXXXXX",
  },
  {
    label: "Job",
    code: "XXXXXXXX",
  },
  {
    label: "GL",
    code: "XXXXXXXX",
  },
  {
    label: "Banch",
    code: "XXXXXXXX",
  },
  {
    label: "Section",
    code: "XXXXXXXX",
  },
  {
    label: "GP.",
    code: "XXXXXXXX",
  },
  {
    label: "Pro.",
    code: "XXXXXXXX",
  },
  {
    label: "Book",
    code: "XXXXXXXX",
  },
  {
    label: "Coo",
    code: "XXXXXXXX",
  },
  {
    label: "WH.",
    code: "XXXXXXXX",
  },
];
const InvoiceHeader = () => {
  return (
    <>
      <div className="grid grid-cols-7 gap-7">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">ID Company</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Company Name.</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Banch</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Department</span>
          </label>
          <select className="select select-bordered select-sm">
            <option>-</option>
            <option>A1</option>
            <option>A2</option>
            <option>D3</option>
            <option>D4</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Section</span>
          </label>
          <select className="select select-bordered select-sm">
            <option>-</option>
            <option>A1</option>
            <option>A2</option>
            <option>D3</option>
            <option>D4</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Job</span>
          </label>
          <select className="select select-bordered select-sm">
            <option>-</option>
            <option>A1</option>
            <option>A2</option>
            <option>D3</option>
            <option>D4</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">GL.</span>
          </label>
          <select className="select select-bordered select-sm">
            <option>-</option>
            <option>A1</option>
            <option>A2</option>
            <option>D3</option>
            <option>D4</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="col-span-2">
          <div className="grid grid-cols-4 gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">AC Book</span>
              </label>
              <select className="select select-bordered select-sm">
                <option>-</option>
                <option>A1</option>
                <option>A2</option>
                <option>D3</option>
                <option>D4</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">ออก Invoice ให้กับลูกค้า</span>
              </label>
              <select className="select select-bordered select-sm">
                <option>-</option>
                <option>A1</option>
                <option>A2</option>
                <option>D3</option>
                <option>D4</option>
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
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">WHOUSE</span>
              </label>
              <select className="select select-bordered select-sm">
                <option>-</option>
                <option>A1</option>
                <option>A2</option>
                <option>D3</option>
                <option>D4</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Group Product</span>
              </label>
              <select className="select select-bordered select-sm">
                <option>-</option>
                <option>A1</option>
                <option>A2</option>
                <option>D3</option>
                <option>D4</option>
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
              <select className="select select-bordered select-sm">
                <option>-</option>
                <option>A1</option>
                <option>A2</option>
                <option>D3</option>
                <option>D4</option>
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
              />
            </div>
          </div>
        </div>
        <div className="p-2 border-2 border-gray-400">
          <div className="grid grid-cols-4 gap-4">
            {BomData.map((i, x) => (
              <div key={x}>
                <h5 className="text-sm">
                  {i.label}:
                  <span className="badge bg-gray-400 badge-md">{i.code}</span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;
