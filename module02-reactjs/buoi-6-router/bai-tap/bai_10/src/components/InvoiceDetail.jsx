import { useParams } from 'react-router-dom';
const InvoiceDetail = () => {
  const params = useParams();
  const { invoiceId } = params;

  let invoiceName;

  if (invoiceId == '1') {
    invoiceName = 'Google';
  } else {
    invoiceName = 'Apple';
  }
  return (
    <div>
      Invoice #{invoiceId} {invoiceName}
    </div>
  );
};

export default InvoiceDetail;
