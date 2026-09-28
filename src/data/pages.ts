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
      id: 'distribucion',
      title: 'Distribución mayorista',
      description:
        'Entregamos a farmacias, clínicas y centros de salud con rutas y frecuencias acordadas de antemano, para que la reposición deje de ser una urgencia y pase a ser rutina.',
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
        'Procedimiento de contingencia documentado ante cortes o desvíos',
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
        'Respaldo documental disponible ante auditorías o inspecciones',
        'Gestión de retiros de mercado sobre los lotes involucrados',
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
        'Historial de compras a disposición de la farmacia',
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
      title: 'Atención a farmacias',
      description:
        'Una persona que conoce la farmacia, su consumo y sus tiempos. No un call center distinto cada vez.',
      bullets: [
        'Ejecutivo de cuenta asignado',
        'Reposición programada en función del consumo real',
        'Asesoramiento ante faltantes y alternativas disponibles',
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
  title: 'Una droguería que conoce cada eslabón del camino.',
  intro:
    'Farmaka nació para resolver un problema concreto: que la farmacia independiente pueda abastecerse con la misma previsibilidad que una cadena grande, sin perder trato directo.',
  historia: [
    'Somos un equipo de farmacéuticos, logística y comercio exterior dedicado a que el medicamento correcto llegue en tiempo, forma y temperatura. Trabajamos con protocolos de Buenas Prácticas de Distribución y auditorías internas mes a mes.',
    'Acompañamos a farmacias independientes y cadenas regionales con stock permanente, reposición programada y un canal directo de atención para pedidos urgentes.',
    'Con los años aprendimos que la mayoría de los problemas de abastecimiento no son de stock sino de información: un pedido que nadie confirmó, una entrega sin aviso, un faltante que se comunica tarde. Por eso el foco no está sólo en el depósito, sino en que la farmacia sepa en todo momento qué va a recibir y cuándo.',
  ],
  valores: [
    {
      index: '01',
      title: 'Seguridad',
      description:
        'Cada lote se controla al ingresar y al salir del depósito. Lo que no pasa el control no se despacha, aunque implique demorar una entrega.',
    },
    {
      index: '02',
      title: 'Puntualidad',
      description:
        'Las ventanas de entrega se cumplen. Y cuando algo se demora, el aviso llega antes que el reclamo: la farmacia necesita poder planificar.',
    },
    {
      index: '03',
      title: 'Transparencia',
      description:
        'El cliente ve el estado de su pedido de punta a punta, incluyendo lo que no está disponible. Preferimos informar un faltante a mandar un reemplazo que nadie pidió.',
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
