import styles from './Table.module.css'

function Table({ title, columns, data = [] }) {
    return (
        <>
            <h2 className={styles.tableTitle}>{title}</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} style={{ textAlign: 'center', padding: '2rem' }}>
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Table
