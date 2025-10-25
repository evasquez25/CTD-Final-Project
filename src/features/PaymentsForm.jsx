import { useState, useEffect } from 'react'
import styles from './PaymentsForm.module.css'

const paymentsUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_PAYMENTS_TABLE}`
const debtsUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_DEBTS_TABLE}`
const token = `Bearer ${import.meta.env.VITE_PAT}`

function PaymentsForm({ setPayments }) {
    const [debts, setDebts] = useState([])  // [{id, name}]
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

    const addPayment = async () => {
        const payload = {
            records: [
                {
                    fields: {
                        'Type': formData.type,
                        'Name': formData.category,
                        'Amount': formData.amount,
                        'Date': formData.date,
                        'Notes': formData.notes
                    }
                }
            ]
        }
        
        const options = {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        try {
            const response = await fetch(paymentsUrl, options)
            if (!response.ok) {
                throw new Error('Eror posting data: ' + response.message)
            }

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    // Get payments to display
    useEffect(() => {
        const fetchPayments = async () => {
            const options = {
                method: 'GET',
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            }

            try {
                const resp = await fetch(encodeURI(paymentsUrl), options)
                if (!resp.ok) {
                throw new Error(resp.message)
                }

                const data = await resp.json()
                console.log(data)

                const fetchedPayments = data.records.map((record) => {
                    const payment = {
                        'Tipo': record.fields.Type,
                        'Categoría': record.fields.Name,
                        'Cantidad': record.fields.Amount,
                        'Fecha de Pago': record.fields.Date,
                        'Notas': record.fields.Name
                    }
                    return payment
                })
                setPayments(fetchedPayments)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPayments()
    }, [setPayments])

    // Get debts to display
    useEffect(() => {
        const fetchDebts = async () => {
            const options = {
                method: 'GET',
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            }

            try {
                const resp = await fetch(encodeURI(debtsUrl), options)
                if (!resp.ok) {
                throw new Error(resp.message)
                }

                const data = await resp.json()
                console.log(data)

                const fetchedDebts = data.records.map((record) => {
                    const debt = {
                        id: record.id,
                        name: record.fields.Name
                    }
                    return debt
                })
                setDebts(fetchedDebts)
            } catch(err) {
                console.error(err)
            }
        }
        fetchDebts()
    }, [setDebts])

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
            'Notas': formData.notes
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

                {formData.type === 'Deuda' ? (
                    <div className={styles.formItem}>
                        <label htmlFor="debtId">Deuda</label>
                        <select
                            id="debtId"
                            onChange={handleInputChange}
                        >
                            {debts.map((debt) => (
                                <option key={debt.id} value={debt.id}>
                                    {debt.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className={styles.formItem}>
                        <label htmlFor="category">Categoría</label>
                        <select>
                            <option>Coming Soon!</option>
                        </select>
                    </div>
                )}

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