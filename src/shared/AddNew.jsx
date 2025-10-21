import { useState } from 'react'
import styles from './Allocations.module.css'

function Allocations({ billList, setBillList, debtList, setDebtList }) {
    const [formData, setFormData] = useState({
        type: 'Bill',
        category: '',
        amount: '',
        minAmount: '',
        date: '',
        notes: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Format date from YYYY-MM-DD to MM/DD/YYYY
        const formatDate = (dateString) => {
            const date = new Date(dateString)
            return date.toLocaleDateString('en-US') // "10/2/2025"
        }

        const newItem = formData.type === 'Bill' ? {
            'Nombre': formData.category,
            'Cantidad Mensual': formData.amount,
            'Cantidad Quincenal': formData.amount / 2,
            'Fecha Debida': formatDate(formData.date),
            'Pagado?': '❌',
            Notas: formData.notes
        } : {
            'Nombre': formData.category,
            'Total': formData.amount,
            'Total Pagado': 0,
            'Restante': formData.amount,
            'Pago Minimo': formData.minAmount,
            'Fecha Debida': formatDate(formData.date),
            'Pagado?': '❌',
            Notas: formData.notes
        }

        if (formData.type === 'Bill') {
            setBillList([...billList, newItem])
        } else {
            setDebtList([...debtList, newItem])
        }

        // Reset form
        setFormData({
            type: 'Bill',
            category: '',
            amount: '',
            minAmount: '',
            date: '',
            notes: ''
        })
    }

    return (
        <div>
            <h2 className={styles.formTitle}>Agregar Nueva Entrada</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formItem}>
                    <label htmlFor="type">Tipo</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                    >
                        <option value="Bill">Bill</option>
                        <option value="Deuda">Deuda</option>
                    </select>
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="category">Categoría</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="Ej: Renta, Electricidad, etc."
                        required
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="amount">Cantidad</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        required
                        className={styles.smallInput}
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="minAmount">Pago Minimo (Opcional)</label>
                    <input
                        type="number"
                        id="minAmount"
                        name="minAmount"
                        value={formData.minAmount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className={styles.smallInput}
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="date">Fecha Debida</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="notes">Notas</label>
                    <input
                        type="text"
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Notas adicionales..."
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default Allocations