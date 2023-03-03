import { nanoid } from "nanoid";

const generateID = () => {
  return nanoid(10);
};

const generateCompanyID = () => {
  let doc = [
    {
      seq: 0,
      id: nanoid(8),
      label: "-",
      tag: `Corp`,
    },
  ];
  let yearStart = 2020;
  for (let i = 0; i < 10; i++) {
    doc.push({
      seq: i + 1,
      id: nanoid(10),
      label: `${yearStart + i} (${yearStart + i + 543})`,
      tag: `Corp`,
    });
  }
  return doc;
};

const generateCompanyName = () => {
  return "วี.ซี.เอส. ประเทศไทย";
};

const generateBanch = () => {
  return [{ seq: 0, id: nanoid(8), label: `ฉะเชิงเทรา`, tag: `Banch` }];
};

const generateDepartment = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `Dep.` },
    { seq: 1, id: nanoid(8), label: `TEST`, tag: `Dep.` },
  ];
};

const generateSection = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `Sec.` },
    { seq: 1, id: nanoid(8), label: `TEST`, tag: `Sec.` },
  ];
};

const generateJob = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `Job.` },
    { seq: 1, id: nanoid(8), label: `TEST`, tag: `Job.` },
  ];
};

const generateGL = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `GL.` },
    { seq: 1, id: nanoid(8), label: `TEST`, tag: `GL.` },
  ];
};

const generateACBook = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `ACC.` },
    { seq: 1, id: nanoid(8), label: `TEST`, tag: `ACC.` },
  ];
};

const generateCustomer = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `COO.`, description: "-" },
    {
      seq: 1,
      id: nanoid(8),
      label: `CA`,
      tag: `COO.`,
      description: "Company A",
    },
    {
      seq: 2,
      id: nanoid(8),
      label: `CB`,
      tag: `COO.`,
      description: "Company B",
    },
    {
      seq: 3,
      id: nanoid(8),
      label: `CC`,
      tag: `COO.`,
      description: "Company C",
    },
  ];
};

const generateWHS = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `WH.` },
    { seq: 1, id: nanoid(8), label: `0000001`, tag: `WH.` },
    { seq: 2, id: nanoid(8), label: `0000002`, tag: `WH.` },
    { seq: 3, id: nanoid(8), label: `0000003`, tag: `WH.` },
    { seq: 4, id: nanoid(8), label: `0000004`, tag: `WH.` },
  ];
};

const generateGroupProduct = () => {
  return [
    { seq: 0, id: nanoid(8), label: `-`, tag: `GRP.` },
    { seq: 1, id: nanoid(8), label: `All`, tag: `GRP.` },
  ];
};

const generateProductNo = () => {
  let doc = [
    {
      seq: 0,
      id: "-",
      label: "-",
      description: "-",
    },
  ];
  let yearStart = 2022;
  for (let i = 0; i < 10; i++) {
    doc.push({
      seq: i + 1,
      id: nanoid(10),
      label: `${("0" + (yearStart + i)).slice(-10)}`,
      description: nanoid(10),
    });
  }
  return doc;
};

export {
  generateID,
  generateCompanyID,
  generateCompanyName,
  generateBanch,
  generateDepartment,
  generateSection,
  generateJob,
  generateGL,
  generateACBook,
  generateCustomer,
  generateWHS,
  generateGroupProduct,
  generateProductNo,
};
