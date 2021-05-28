import AppWrapper from "components/_common/app-wrapper";

export default function loan() {
  return (
    <AppWrapper nav>
      <div className="mt-4 ml-4 pr-4">
        <h1 style={{ fontSize: "1.5rem" }}>Power Sports - Nov 23, 2021</h1>
        <h2 style={{ fontSize: "1rem" }}>
          Congratulations! Your MoneyMoves loan has been approved
          </h2>
      </div>

      <table
        className="table table-bordered mt-4"
        style={{ borderRadius: "12rem", width: "90%" }}
      >
        <tbody>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Approved loan amount</b>
            </td>
            <td>
              <b>$50,000</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Administration Fee</b>
            </td>
            <td>
              <b>$399,00</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Total Loan</b>
            </td>
            <td>
              <b>$50,399</b>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        className="table table-bordered"
        style={{ borderRadius: "12rem", width: "90%" }}
      >
        <tbody style={{ borderRadius: "12rem" }}>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Monthly payment</b>
            </td>
            <td>
              <b>$199,00</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Interesa Rate</b>
            </td>
            <td>
              <b>14.99%</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>APR</b>
            </td>
            <td>
              <b>19,99%</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Term</b>
            </td>
            <td>
              <b>60 months</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Amortization Period</b>
            </td>
            <td>
              <b>120 months</b>
            </td>
          </tr>
          <tr>
            <td className="bg-gray border-gray" style={{ width: "70%" }}>
              <b>Ballon payment</b>
            </td>
            <td>
              <b>$5000</b>
            </td>
          </tr>
        </tbody>
      </table>
    </AppWrapper>
  );
}
