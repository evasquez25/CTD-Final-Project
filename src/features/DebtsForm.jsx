import { useState } from 'react'
import styles from './DebtsForm.module.css'

function DebtsForm({ setDebtList }) {
    const [formData, setFormData] = useState({
        category: '',
        amount: '',
        minPayment: '',
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
            return date.toLocaleDateString('en-US')
        }

        const newItem = {
            'Nombre': formData.category,
            'Total': formData.amount,
            'Total Pagado': 0,
            'Restante': formData.amount,
            'Pago Minimo': formData.minPayment,
            'Fecha de Pago': formatDate(formData.date),
            'Pagado?': '❌',
            Notas: formData.notes
        }

        setDebtList(prev => [...prev, newItem])

        // Reset form
        setFormData({
            category: '',
            amount: '',
            minPayment: '',
            date: '',
            notes: ''
        })
    }

    return (
        <div>
            <h2 className={styles.formTitle}>Agregar Nueva Deuda</h2>
            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.formItem}>
                    <label htmlFor="category">Nombre</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="Ej: Amazon Credit Card"
                        required
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="amount">Total</label>
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
                    <label htmlFor="minPayment">Pago Minimo</label>
                    <input
                        type="number"
                        id="minPayment"
                        name="minPayment"
                        value={formData.minPayment}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className={styles.smallInput}
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="date">Fecha de Pago</label>
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

export default DebtsForm