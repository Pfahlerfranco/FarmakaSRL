import {
  IconBarcode,
  IconBox,
  IconClipboard,
  IconSnowflake,
  IconUser,
  IconWarehouse,
} from '@/components/ui/icons'
import type { ContactInfo, NavItem, Service, Stat, Value } from '@/types'

/**
 * Todo el contenido editable del sitio vive acá.
 * Para cambiar textos, datos de contacto o servicios no hace falta tocar componentes.
 */

export const company = {
  legalName: 'Farmaka S.R.L.',
  brand: 'Farmaka',
  tagline: 'Droguería',
  claim: 'Droguería habilitada · Disp. ANMAT',
} as const

export const navItems: NavItem[] = [
  { id: 'inicio', index: '01', label: 'Inicio', href: '#inicio' },
  { id: 'servicios', index: '02', label: 'Servicios', href: '#servicios' },
  { id: 'nosotros', index: '03', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', index: '04', label: 'Contacto', href: '#contacto' },
]

export const hero = {
  eyebrow: 'Droguería habilitada · Disp. ANMAT',
  //   mantiene "lote por lote" en una sola línea al hacer wrap.
  title: 'El eslabón que sostiene la cadena de frío, lote por lote.',
  lead: 'Farmaka abastece a farmacias, clínicas y centros de salud con trazabilidad completa: desde el depósito habilitado hasta el mostrador.',
  primaryCta: { label: 'Ver servicios', href: '#servicios' },
  secondaryCta: { label: 'Hablar con ventas', href: '#contacto' },
} as const

export const stats: Stat[] = [
  { value: '+12', label: 'años operando' },
  { value: '100%', label: 'pedidos trazados' },
  { value: '24/7', label: 'cadena de frío monitoreada' },
  { value: '+180', label: 'farmacias abastecidas' },
]

export const services: Service[] = [
  {
    id: 'distribucion',
    title: 'Distribución mayorista',
    description: 'Entrega a farmacias, clínicas y centros de salud en todo el país.',
    Icon: IconBox,
  },
  {
    id: 'cadena-frio',
    title: 'Cadena de frío',
    description: 'Transporte y almacenamiento entre 2 °C y 8 °C con monitoreo continuo.',
    Icon: IconSnowflake,
  },
  {
    id: 'trazabilidad',
    title: 'Trazabilidad ANMAT',
    description:
      'Seguimiento por lote adherido al Sistema Nacional de Trazabilidad de Medicamentos.',
    Icon: IconBarcode,
  },
  {
    id: 'pedidos',
    title: 'Gestión de pedidos',
    description: 'Plataforma de pedidos con confirmación y seguimiento en tiempo real.',
    Icon: IconClipboard,
  },
  {
    id: 'deposito',
    title: 'Depósito habilitado',
    description: 'Almacenamiento propio con Disposición ANMAT vigente y auditorías periódicas.',
    Icon: IconWarehouse,
  },
  {
    id: 'atencion',
    title: 'Atención a farmacias',
    description: 'Asesoramiento comercial dedicado y reposición programada.',
    Icon: IconUser,
  },
]

export const about = {
  eyebrow: 'Quiénes somos',
  title: 'Una droguería que conoce cada eslabón del camino.',
  paragraphs: [
    'Somos un equipo de farmacéuticos, logística y comercio exterior dedicado a que el medicamento correcto llegue en tiempo, forma y temperatura. Trabajamos con protocolos de Buenas Prácticas de Distribución y auditorías internas mes a mes.',
    'Acompañamos a farmacias independientes y cadenas regionales con stock permanente, reposición programada y un canal directo de atención para pedidos urgentes.',
  ],
  badges: [
    'Disposición ANMAT vigente',
    'RNE habilitado',
    'Buenas prácticas de distribución',
  ],
} as const

export const values: Value[] = [
  {
    index: '01',
    title: 'Seguridad',
    description: 'Cada lote se controla al ingresar y al salir del depósito.',
  },
  {
    index: '02',
    title: 'Puntualidad',
    description: 'Ventanas de entrega cumplidas, con aviso ante cualquier demora.',
  },
  {
    index: '03',
    title: 'Transparencia',
    description: 'El cliente ve el estado de su pedido de punta a punta.',
  },
]

export const contact: ContactInfo = {
  // A pedido del cliente se publica sólo el barrio, no la dirección exacta del depósito.
  address: 'Mataderos, CABA',
  mapQuery: 'Mataderos, Ciudad Autónoma de Buenos Aires, Argentina',
  phones: ['(011) 4687-3488', '(011) 4687-7583'],
  email: 'admin@farmaka.com.ar',
  // TODO: reemplazar por el número real de WhatsApp de la empresa.
  whatsapp: '5491146873488',
  hours: 'Lunes a viernes de 8:30 a 16:30 h',
}

export const contactSection = {
  eyebrow: 'Hablemos',
  title: 'Pedí tu alta como cliente o hacé una consulta.',
} as const

/** Link listo para usar en los CTA de WhatsApp. */
export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola Farmaka, quisiera hacer una consulta.',
)}`
