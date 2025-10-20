import styles from './Dashboard.module.css'

function Dashboard() {
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

            <h2 className={styles.tableTitle}>Billes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Bill</th>
                        <th>Cantidad</th>
                        <th>Fecha Debida</th>
                        <th>Pagado</th>
                        <th>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Renta</td>
                        <td>$1,000</td>
                        <td>10/1/2025</td>
                        <td><input type="checkbox" className={styles.checkbox} /></td>
                        <td>Pago de renta</td>
                    </tr>
                    <tr>
                        <td>Renta</td>
                        <td>$1,000</td>
                        <td>10/1/2025</td>
                        <td><input type="checkbox" className={styles.checkbox} /></td>
                        <td>Pago de renta</td>
                    </tr>
                    <tr>
                        <td>Renta</td>
                        <td>$1,000</td>
                        <td>10/1/2025</td>
                        <td><input type="checkbox" className={styles.checkbox} /></td>
                        <td>Pago de renta</td>
                    </tr>
                </tbody>
            </table>

            <h2 className={styles.tableTitle}>Deudas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Deuda</th>
                        <th>Cantidad Minima</th>
                        <th>Fecha Debida</th>
                        <th>Pagado</th>
                        <th>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Renta</td>
                        <td>$1,000</td>
                        <td>10/1/2025</td>
                        <td><input type="checkbox" className={styles.checkbox} /></td>
                        <td>Pago de renta</td>
                    </tr>
                    <tr>
                        <td>Renta</td>
                        <td>$1,000</td>
                        <td>10/1/2025</td>
                        <td><input type="checkbox" className={styles.checkbox} /></td>
                        <td>Pago de renta</td>
                    </tr>
                    <tr>
                        <td>Renta</td>
                        <td>$1,000</td>
                        <td>10/1/2025</td>
                        <td><input type="checkbox" className={styles.checkbox} /></td>
                        <td>Pago de renta</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Dashboard
