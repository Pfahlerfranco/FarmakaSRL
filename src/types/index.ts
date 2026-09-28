import type { ComponentType, SVGProps } from 'react'


export type SectionId = 'inicio' | 'servicios' | 'nosotros' | 'contacto'

export interface NavItem {
  id: SectionId
  index: string
  label: string
  href: `#${SectionId}`
}

export interface Stat {
  value: string
  label: string
}

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface Service {
  id: string
  title: string
  description: string
  Icon: IconComponent
}

export interface Value {
  index: string
  title: string
  description: string
}

export interface ContactInfo {
  address: string
  mapQuery: string
  phones: string[]
  email: string
  whatsapp: string
  hours: string
}

export interface ContactFormValues {
  nombre: string
  email: string
  telefono: string
  mensaje: string
  habilitada: boolean
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

export type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'
