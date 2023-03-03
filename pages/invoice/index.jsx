import { InvoiceHeader, InvoiceInfomation, MainLayOut } from "@/components";

const KSCPage = () => {
  return (
    <MainLayOut>
      <InvoiceHeader />
      <div className="divider" />
      <InvoiceInfomation />
    </MainLayOut>
  );
};

export default KSCPage;
