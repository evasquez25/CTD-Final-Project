import styles from './Dashboard.module.css'
import Table from '../shared/Table'

function Dashboard() {
    const billsColumns = ['Bill', 'Cantidad', 'Fecha Debida', 'Pagado?', 'Notas']
    const billsData = [
        { Bill: 'Renta', Cantidad: '$1,000', 'Fecha Debida': '10/1/2025', Pagado: "❌", Notas: 'Pago de renta' },
        { Bill: 'Renta', Cantidad: '$1,000', 'Fecha Debida': '10/1/2025', Pagado: "❌", Notas: 'Pago de renta' },
        { Bill: 'Renta', Cantidad: '$1,000', 'Fecha Debida': '10/1/2025', Pagado: "❌", Notas: 'Pago de renta' }
    ]

    const debtsColumns = ['Deuda', 'Cantidad Minima', 'Fecha Debida', 'Pagado?', 'Notas']
    const debtsData = [
        { Deuda: 'Renta', 'Cantidad Minima': '$1,000', 'Fecha Debida': '10/1/2025', Pagado: "❌", Notas: 'Pago de renta' },
        { Deuda: 'Renta', 'Cantidad Minima': '$1,000', 'Fecha Debida': '10/1/2025', Pagado: "❌", Notas: 'Pago de renta' },
        { Deuda: 'Renta', 'Cantidad Minima': '$1,000', 'Fecha Debida': '10/1/2025', Pagado: "❌", Notas: 'Pago de renta' }
    ]

    return (
        <>
            <div className={styles.topContainer}>
                <div className={styles.dateContainer}>
                    <div className={styles.month}>
                        <label htmlFor="month">Mes:</label>
                        <select id="month">
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </div>
                    <div className={styles.year}>
                        <label htmlFor="year">Año:</label>
                        <select id="year">
                            <option value="2025">2025</option>
                        </select>
                    </div>
                </div>
                <h2>Cantidad a ahorrar: $1,000</h2>
            </div>

            <Table
                title="Bills"
                columns={billsColumns}
                data={billsData}
                showCheckboxColumn={true}
            />

            <Table
                title="Deudas"
                columns={debtsColumns}
                data={debtsData}
                showCheckboxColumn={true}
            />
        </>
    )
}

export default Dashboard
