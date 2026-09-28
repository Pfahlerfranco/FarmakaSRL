import type { ContactFormValues } from '@/types'

interface FormspreeError {
  field?: string
  message?: string
}

interface FormspreeErrorResponse {
  errors?: FormspreeError[]
  error?: string
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as FormspreeErrorResponse

    if (body.errors?.length) {
      return body.errors.map((item) => item.message).filter(Boolean).join(' ')
    }
    if (body.error) return body.error
  } catch {
    
  }

  return `El servidor respondió ${response.status}`
}

export async function sendContactMessage(
  values: ContactFormValues,
  gotcha = '',
): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

  const payload = {
    email: values.email.trim(),
    nombre: values.nombre.trim(),
    telefono: values.telefono.trim() || 'No indicado',
    mensaje: values.mensaje.trim(),
    habilitada: values.habilitada ? 'Sí' : 'No',
    // Campos especiales de Formspree.
    _subject: `Consulta web — ${values.nombre.trim()}`,
    _gotcha: gotcha,
  }

  if (!endpoint) {
    console.info('[contacto] Sin VITE_CONTACT_ENDPOINT configurado. Payload:', payload)
    await new Promise((resolve) => setTimeout(resolve, 700))
    return
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(await readErrorMessage(response))
  }
}
