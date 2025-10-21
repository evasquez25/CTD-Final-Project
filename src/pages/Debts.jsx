import Table from '../shared/Table'

function Debts({ debtList, debtColumns }) {
    return (
        <div>
            <Table
                title="Debts"
                columns={debtColumns}
                data={debtList}
                showCheckboxColumn={true}
            />
        </div>
    )
}

export default Debts