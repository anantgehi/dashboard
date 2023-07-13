import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap"

const tableData = [
	{
		Ticketid: "SL1",
		Documentid: "D123",
		DcoumentType: "Loan",
		Garnishee: "Bank",
		Debtor: "Kartick A",
		Creditor: "HSBC Bank",
		DebtorBank: "Barclays Bank",
		DebtorAccount: "123456",
		CreditorBank: "HSBC Bank",
		CreditorAccount: "567890",
		Amount: "500",
		Currency: "EUR",
		Protection: "No",
		Status: "Stored",
		DateTime: "13-07-2023  13:00:01",
		PDFDocument: "",
	},
	{
		Ticketid: "SL1",
		Documentid: "D123",
		DcoumentType: "Loan",
		Garnishee: "Bank",
		Debtor: "Kartick A",
		Creditor: "HSBC Bank",
		DebtorBank: "Barclays Bank",
		DebtorAccount: "123456",
		CreditorBank: "HSBC Bank",
		CreditorAccount: "567890",
		Amount: "500",
		Currency: "EUR",
		Protection: "No",
		Status: "Stored",
		DateTime: "13-07-2023  13:00:01",
		PDFDocument: "",
	},
]

const columns = [
	"Ticket id",
	"Document id",
	"Dcoument Type",
	"Garnishee",
	"Debtor",
	"Creditor",
	"Debtor Bank",
	"Debtor Account",
	"Creditor Bank",
	"Creditor Account",
	"Amount",
	"Currency",
	"Protection",
	"Status",
	"Date Time",
	"PDF Document",
]

const ProjectTables = () => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle tag="h5">Document Listing</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						Overview of the documents
					</CardSubtitle>

					<Table className="no-wrap mt-3 align-middle" responsive borderless>
						<thead>
							<tr>
								{columns.map((column) => {
									return <th key={column}>{column}</th>
								})}
							</tr>
						</thead>
						<tbody>
							{tableData.map((tdata, index) => (
								<tr key={index} className="border-top">
									<td>{tdata.Ticketid}</td>
									<td>{tdata.Documentid}</td>
									<td>{tdata.DcoumentType}</td>
									<td>{tdata.Garnishee}</td>
									<td>{tdata.Debtor}</td>
									<td>{tdata.Creditor}</td>
									<td>{tdata.DebtorBank}</td>
									<td>{tdata.DebtorAccount}</td>
									<td>{tdata.CreditorBank}</td>
									<td>{tdata.CreditorAccount}</td>
									<td>{tdata.Amount}</td>
									<td>{tdata.Currency}</td>
									<td>{tdata.Protection}</td>
									<td>{tdata.Status}</td>
									<td>{tdata.DateTime}</td>
									<td>{tdata.PDF}</td>
									<td>{tdata.Document}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</div>
	)
}

export default ProjectTables
