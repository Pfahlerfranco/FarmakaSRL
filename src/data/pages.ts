export interface DetailBlock {
  id: string
  title: string
  description: string
  bullets: string[]
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const serviciosPage = {
  eyebrow: 'Servicios',
  title: 'Cómo trabajamos cada eslabón de la cadena.',
  intro:
    'Cada servicio está pensado para que la farmacia reciba lo que pidió, cuando lo pidió y en las condiciones en que el producto debe viajar. Abajo, el detalle de qué incluye cada uno.',
  detalle: [
    {
      id: 'atencion-paciente',
      title: 'Atención al paciente y afiliado',
      description:
        'Acompañamos al paciente o afiliado durante todo el circuito, con seguimiento constante para que la medicación llegue en tiempo y forma.',
      bullets: [
        'Atención directa al paciente o afiliado durante todo el circuito',
        'Seguimiento del pedido hasta la entrega de la medicación',
        'Comunicación constante ante cualquier demora o faltante',
        'Coordinación con la institución, el profesional y el paciente',
      ],
    },
    {
      id: 'distribucion',
      title: 'Distribución mayorista',
      description:
        'Entregamos a obras sociales, prepagas, clínicas y farmacias con rutas y frecuencias acordadas de antemano, para que la reposición deje de ser una urgencia y pase a ser rutina.',
      bullets: [
        'Entregas programadas por zona, con día y franja acordados',
        'Cobertura en CABA y Gran Buenos Aires, y envíos al interior por transporte habilitado',
        'Remito y comprobante de entrega en cada despacho',
        'Pedidos urgentes con despacho en el día, sujeto a disponibilidad',
      ],
    },
    {
      id: 'cadena-frio',
      title: 'Cadena de frío',
      description:
        'Los productos que requieren entre 2 °C y 8 °C viajan y se almacenan bajo control de temperatura continuo, con registro que acompaña al envío.',
      bullets: [
        'Cámaras con monitoreo permanente y alarmas ante desvíos',
        'Conservadoras y acumuladores acondicionados para cada tipo de envío',
        'Registro de temperatura disponible para el cliente',
      ],
    },
    {
      id: 'trazabilidad',
      title: 'Trazabilidad ANMAT',
      description:
        'Los productos alcanzados por el Sistema Nacional de Trazabilidad de Medicamentos se informan en cada movimiento, de modo que la farmacia recibe su transacción confirmada.',
      bullets: [
        'Informe de movimientos por GTIN, lote y número de serie',
        'Confirmación de las transacciones que corresponden a cada entrega',
      ],
    },
    {
      id: 'pedidos',
      title: 'Gestión de pedidos',
      description:
        'Un solo canal para pedir, confirmar y seguir. Sin depender de que alguien atienda el teléfono en el momento justo.',
      bullets: [
        'Pedidos por WhatsApp, email o teléfono',
        'Confirmación de stock y precio antes de cerrar el pedido',
        'Seguimiento del estado hasta la entrega',
      ],
    },
    {
      id: 'deposito',
      title: 'Depósito habilitado',
      description:
        'Almacenamiento propio, con áreas separadas según el estado de la mercadería y control de ingreso y egreso por lote.',
      bullets: [
        'Áreas diferenciadas para cuarentena, aprobado, rechazado y devoluciones',
        'Control de lote y vencimiento en cada recepción',
        'Rotación por vencimiento (FEFO) en la preparación de pedidos',
        'Limpieza y control de plagas con registro documentado',
      ],
    },
    {
      id: 'atencion',
      title: 'Atención a obras sociales',
      description:
        'Comunicación cercana con la institución y sus referentes, coordinando cada tratamiento entre los profesionales, la droguería y el afiliado.',
      bullets: [
        'Ejecutivo de cuenta asignado para cada institución',
        'Coordinación con profesionales y referentes de la institución',
        'Orientación y resolución de consultas e incidencias vinculadas con la provisión',
        'Gestión de devoluciones y notas de crédito',
      ],
    },
  ] satisfies DetailBlock[],
  proceso: {
    eyebrow: 'El recorrido',
    title: 'De la recepción al mostrador.',
    steps: [
      {
        index: '01',
        title: 'Recepción',
        description:
          'Se controla cada entrega contra el remito del laboratorio: producto, cantidad, lote, vencimiento y estado del embalaje.',
      },
      {
        index: '02',
        title: 'Control y cuarentena',
        description:
          'Hasta que el control no se completa, la mercadería permanece en un área separada y no se puede preparar para despacho.',
      },
      {
        index: '03',
        title: 'Almacenamiento',
        description:
          'Cada producto va a la condición que le corresponde: ambiente controlado o refrigerado, con su ubicación registrada.',
      },
      {
        index: '04',
        title: 'Preparación',
        description:
          'El pedido se arma por vencimiento más próximo y se verifica antes de cerrarlo, para que lo que sale sea lo que se pidió.',
      },
      {
        index: '05',
        title: 'Despacho',
        description:
          'Los refrigerados se acondicionan con registro de temperatura. Todo sale con remito y comprobante de entrega.',
      },
      {
        index: '06',
        title: 'Entrega',
        description:
          'Se confirma la recepción en destino y se informan las transacciones de trazabilidad que correspondan.',
      },
    ] satisfies ProcessStep[],
  },
} as const

export const nosotrosPage = {
  eyebrow: 'Nosotros',
  title: 'Una droguería que pone al afiliado en el centro de cada tratamiento.',
  intro:
    'Farmaka trabaja con obras sociales y financiadores de salud para que cada afiliado reciba su tratamiento en tiempo, forma y con el acompañamiento que necesita, desde medicación de alta complejidad hasta el seguimiento diario del circuito.',
  historia: [
    'Somos un equipo de farmacéuticos, logística y comercio exterior con experiencia en la provisión y gestión de medicamentos de alta complejidad: tratamientos oncológicos, HIV, diabetes y otras patologías de alto costo, según las necesidades de cada institución.',
    'Entendemos que detrás de cada tratamiento hay una persona que necesita una respuesta clara, oportuna y humana. Por eso nuestra propuesta prioriza la atención y el acompañamiento del afiliado, facilitando la coordinación entre la institución, los profesionales, la droguería y el paciente.',
    'Nuestro objetivo es construir una relación de trabajo de largo plazo con cada institución, aportando una gestión profesional y cercana que contribuya a mejorar la experiencia del afiliado y la continuidad de sus tratamientos.',
  ],
  valores: [
    {
      index: '01',
      title: 'Seguridad',
      description:
        'Cada lote se controla al ingresar y al salir del depósito. Lo que no pasa el control no se despacha, aunque implique demorar una entrega — más aún en tratamientos de alta complejidad.',
    },
    {
      index: '02',
      title: 'Puntualidad',
      description:
        'Las ventanas de entrega se cumplen. Y cuando algo se demora, el aviso llega antes que el reclamo: la institución y el afiliado necesitan poder planificar el tratamiento.',
    },
    {
      index: '03',
      title: 'Respuesta',
      description:
        'Cada consulta o incidencia la resuelve la misma persona que conoce el pedido, no un call center distinto cada vez. Preferimos avisar un faltante a mandar un reemplazo que nadie pidió.',
    },
  ] satisfies ProcessStep[],
  cumplimiento: {
    eyebrow: 'Habilitaciones',
    title: 'Operamos bajo marco regulatorio.',
    intro:
      'La distribución de medicamentos está regulada y auditada. Estas son las condiciones bajo las que trabajamos:',
    items: [
      {
        title: 'Disposición ANMAT vigente',
        description:
          'La actividad se desarrolla bajo la habilitación correspondiente de la Administración Nacional de Medicamentos, Alimentos y Tecnología Médica.',
      },
      {
        title: 'RNE habilitado',
        description:
          'El establecimiento cuenta con Registro Nacional de Establecimiento para las actividades que realiza.',
      },
      {
        title: 'Buenas Prácticas de Distribución',
        description:
          'Procedimientos escritos para recepción, almacenamiento, preparación, transporte y devoluciones, con registros que permiten reconstruir cada operación.',
      },
      {
        title: 'Dirección técnica',
        description:
          'La operación cuenta con dirección técnica farmacéutica responsable de los aspectos que la normativa le asigna.',
      },
    ],
  },
} as const
