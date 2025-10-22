import Table from '../shared/Table'
import DebtsForm from '../features/DebtsForm'

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