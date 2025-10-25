import { useState } from 'react'
import styles from './PaymentsForm.module.css'

function PaymentsForm({ setPayments }) {
    const [formData, setFormData] = useState({
        type: 'Bill',
        category: '',
        amount: '',
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
            'Tipo': formData.type,
            'Categoría': formData.category,
            'Cantidad': formData.amount,
            'Fecha de Pago': formatDate(formData.date),
            Notas: formData.notes
        }

        setPayments(prev => [...prev, newItem])

        // Reset form
        setFormData({
            type: 'Bill',
            category: '',
            amount: '',
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

export default PaymentsForm