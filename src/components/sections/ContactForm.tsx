import { useId, useState, type ChangeEvent, type FormEvent } from 'react'
import { sendContactMessage } from '@/services/contactService'
import type { ContactFormErrors, ContactFormValues, SubmitStatus } from '@/types'
import { hasErrors, validateContactForm } from '@/utils/validation'
import buttons from '@/styles/buttons.module.css'
import styles from './Contacto.module.css'

const EMPTY_FORM: ContactFormValues = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
  habilitada: false,
}

export function ContactForm() {
  const id = useId()
  const [values, setValues] = useState<ContactFormValues>(EMPTY_FORM)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  // Campo trampa: invisible para personas, tentador para bots.
  const [gotcha, setGotcha] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target
    const nextValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value

    setValues((current) => ({ ...current, [name]: nextValue }))
    // Limpia el error del campo apenas el usuario lo corrige.
    setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)
    if (hasErrors(nextErrors)) return

    setStatus('sending')
    try {
      await sendContactMessage(values, gotcha)
      setStatus('success')
      setValues(EMPTY_FORM)
    } catch (error) {
      console.error('[contacto] No se pudo enviar la consulta', error)
      setStatus('error')
    }
  }

  const fieldId = (name: string) => `${id}-${name}`
  const errorId = (name: string) => `${id}-${name}-error`

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId('nombre')}>
          Nombre y farmacia
        </label>
        <input
          className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`}
          type="text"
          id={fieldId('nombre')}
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          placeholder="Ej: Juan Pérez — Farmacia Central"
          autoComplete="name"
          aria-invalid={Boolean(errors.nombre)}
          aria-describedby={errors.nombre ? errorId('nombre') : undefined}
        />
        {errors.nombre && (
          <p className={styles.error} id={errorId('nombre')}>
            {errors.nombre}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId('email')}>
            Email
          </label>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            type="email"
            id={fieldId('email')}
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="nombre@farmacia.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId('email') : undefined}
          />
          {errors.email && (
            <p className={styles.error} id={errorId('email')}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId('telefono')}>
            Teléfono <span className={styles.optional}>(opcional)</span>
          </label>
          <input
            className={`${styles.input} ${errors.telefono ? styles.inputError : ''}`}
            type="tel"
            inputMode="tel"
            id={fieldId('telefono')}
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            placeholder="(011) 4000-0000"
            autoComplete="tel"
            aria-invalid={Boolean(errors.telefono)}
            aria-describedby={errors.telefono ? errorId('telefono') : undefined}
          />
          {errors.telefono && (
            <p className={styles.error} id={errorId('telefono')}>
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId('mensaje')}>
          Mensaje
        </label>
        <textarea
          className={`${styles.textarea} ${errors.mensaje ? styles.inputError : ''}`}
          id={fieldId('mensaje')}
          name="mensaje"
          value={values.mensaje}
          onChange={handleChange}
          placeholder="Contanos qué necesitás abastecer y con qué frecuencia."
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? errorId('mensaje') : undefined}
        />
        {errors.mensaje && (
          <p className={styles.error} id={errorId('mensaje')}>
            {errors.mensaje}
          </p>
        )}
      </div>

      <label className={styles.check} htmlFor={fieldId('habilitada')}>
        <input
          type="checkbox"
          id={fieldId('habilitada')}
          name="habilitada"
          checked={values.habilitada}
          onChange={handleChange}
        />
        Soy una farmacia o droguería habilitada por ANMAT
      </label>

      
      <div className={styles.honeypot} aria-hidden>
        <label htmlFor={fieldId('gotcha')}>No completar este campo</label>
        <input
          type="text"
          id={fieldId('gotcha')}
          name="_gotcha"
          value={gotcha}
          onChange={(event) => setGotcha(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button className={buttons.submit} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className={`${styles.feedback} ${styles.feedbackOk}`}>
            ¡Gracias! Recibimos tu consulta y te respondemos dentro de las próximas 24 h hábiles.
          </p>
        )}
        {status === 'error' && (
          <p className={`${styles.feedback} ${styles.feedbackError}`}>
            No pudimos enviar tu consulta. Probá de nuevo o escribinos por WhatsApp.
          </p>
        )}
      </div>
    </form>
  )
}
