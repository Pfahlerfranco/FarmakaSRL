import type { ContactFormErrors, ContactFormValues } from '@/types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const PHONE_RE = /^[+()\d\s-]{7,20}$/


export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const nombre = values.nombre.trim()
  if (nombre.length === 0) {
    errors.nombre = 'Ingresá tu nombre y el de la farmacia.'
  } else if (nombre.length < 3) {
    errors.nombre = 'El nombre es demasiado corto.'
  }

  
  const email = values.email.trim()
  if (email.length === 0) {
    errors.email = 'Necesitamos un email para responderte.'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Ingresá un email válido.'
  }

  
  const telefono = values.telefono.trim()
  if (telefono.length > 0 && !PHONE_RE.test(telefono)) {
    errors.telefono = 'Ingresá un teléfono válido.'
  }

  const mensaje = values.mensaje.trim()
  if (mensaje.length === 0) {
    errors.mensaje = 'Contanos brevemente qué necesitás.'
  } else if (mensaje.length < 10) {
    errors.mensaje = 'El mensaje es demasiado corto.'
  }

  return errors
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
