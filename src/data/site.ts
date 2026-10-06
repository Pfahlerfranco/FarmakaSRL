import {
  IconBarcode,
  IconBox,
  IconClipboard,
  IconHeartPulse,
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
  //   mantiene "afiliado por afiliado" en una sola línea al hacer wrap.
  title: 'El eslabón que sostiene cada tratamiento oncológico y de alta complejidad, afiliado por afiliado.',
  lead: 'Distribución mayorista: entrega a obras sociales, prepagas, clínicas y farmacias en todo el país, con trazabilidad completa desde el depósito habilitado hasta el mostrador.',
  primaryCta: { label: 'Ver servicios', href: '#servicios' },
  secondaryCta: { label: 'Hablar con ventas', href: '#contacto' },
} as const

export const stats: Stat[] = [
  { value: '+12', label: 'años operando' },
  { value: '100%', label: 'pedidos trazados' },
  { value: '24/7', label: 'cadena de frío monitoreada' },
  { value: '+500', label: 'clientes atendidos' },
]

export const services: Service[] = [
  {
    id: 'atencion-paciente',
    title: 'Atención al paciente y afiliado',
    description:
      'Seguimiento de pedidos y atención constante para que la medicación se reciba en tiempo y forma.',
    Icon: IconHeartPulse,
  },
  {
    id: 'distribucion',
    title: 'Distribución mayorista',
    description: 'Entrega a obras sociales, prepagas, clínicas y farmacias en todo el país.',
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
    showOnHome: false,
  },
  {
    id: 'deposito',
    title: 'Depósito habilitado',
    description: 'Almacenamiento propio con Disposición ANMAT vigente y auditorías periódicas.',
    Icon: IconWarehouse,
  },
  {
    id: 'atencion',
    title: 'Atención a obras sociales',
    description: 'Comunicación cercana y coordinación con la institución y sus referentes.',
    Icon: IconUser,
  },
]

export const about = {
  eyebrow: 'Quiénes somos',
  title: 'Una droguería que pone al afiliado en el centro de cada tratamiento.',
  paragraphs: [
    'Trabajamos con obras sociales y financiadores de salud en la provisión y gestión de medicamentos de alta complejidad —oncológicos, HIV, diabetes y otras terapias especiales— con una propuesta orientada a dar respuesta, seguimiento y acompañamiento durante todo el circuito de atención.',
    'Entendemos que detrás de cada tratamiento hay una persona que necesita una respuesta clara, oportuna y humana. Por eso priorizamos la atención del afiliado, facilitando la coordinación entre la institución, los profesionales y el paciente.',
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
    description:
      'Cada lote se controla al ingresar y al salir del depósito, también en los tratamientos de alta complejidad.',
  },
  {
    index: '02',
    title: 'Puntualidad',
    description:
      'Ventanas de entrega cumplidas, con aviso ante cualquier demora, para que la institución y el afiliado puedan planificar.',
  },
  {
    index: '03',
    title: 'Respuesta',
    description:
      'Un mismo interlocutor resuelve consultas e incidencias, sin pasar por un call center distinto cada vez.',
  },
]

export const contact: ContactInfo = {
  // A pedido del cliente se publica sólo el barrio, no la dirección exacta del depósito.
  address: 'Mataderos, CABA',
  mapQuery: 'Mataderos, Ciudad Autónoma de Buenos Aires, Argentina',
  phones: ['(011) 4687-3488', '(011) 4687-7583'],
  email: 'administracion@farmaka.com.ar',
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
