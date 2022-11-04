import {useParams} from "react-router-dom"
function Invoice() {
    let params = useParams();
    return (
      <div style={{ padding: "1rem 0" }}>
        <h2>Invoice Detail</h2>
        <p>Invoice: {params.invoiceId}</p>
      </div>
    );
  }
  export default Invoice