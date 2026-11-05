import type { Localized } from '@/types';

export type LegalDocId = 'privacy' | 'terms' | 'refund';

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
}

export const legalDocuments: Record<LegalDocId, Localized<LegalDocument>> = {
  privacy: {
    es: {
      title: 'Política de privacidad',
      updated: 'Noviembre de 2026',
      intro: [
        'En Viaje Conecta nos comprometemos a proteger la privacidad y seguridad de los datos personales que nos proporciones a través de nuestro sitio web, formularios de contacto, solicitudes de cotización, reservaciones y demás medios de comunicación relacionados con nuestros servicios turísticos y de entretenimiento.',
        'La presente Política de Privacidad tiene como finalidad informarte sobre qué datos personales recabamos, para qué los utilizamos, cómo los protegemos y cuáles son tus derechos respecto de dichos datos.',
      ],
      sections: [
        {
          title: '1. Responsable del tratamiento de los datos personales',
          blocks: [
            { type: 'p', text: 'El responsable del tratamiento y protección de tus datos personales es:' },
            {
              type: 'ul',
              items: [
                'Nombre comercial: Viaje Conecta',
                'Domicilio: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
                'Correo electrónico: atencion@viajeconecta.com',
                'Teléfono: +52 1 55 5662 5469',
              ],
            },
            {
              type: 'p',
              text: 'Para cualquier asunto relacionado con esta Política de Privacidad o con el tratamiento de tus datos personales, puedes comunicarte con nosotros a través del correo electrónico atencion@viajeconecta.com.',
            },
          ],
        },
        {
          title: '2. Datos personales que podemos recabar',
          blocks: [
            {
              type: 'p',
              text: 'Dependiendo de la interacción que tengas con nosotros, podremos recabar las siguientes categorías de datos personales:',
            },
            { type: 'h3', text: 'Datos de identificación y contacto' },
            {
              type: 'ul',
              items: [
                'Nombre completo.',
                'Correo electrónico.',
                'Número telefónico.',
                'Dirección o ubicación (cuando aplique).',
                'Información proporcionada voluntariamente mediante formularios de contacto, chat o canales de comunicación directa.',
              ],
            },
            { type: 'h3', text: 'Datos relacionados con la experiencia o servicio' },
            {
              type: 'p',
              text: 'Cuando solicites una cotización, diseñemos una experiencia o contrates alguno de nuestros servicios, podremos solicitar información necesaria para preparar y prestar la experiencia, como:',
            },
            {
              type: 'ul',
              items: [
                'Fechas tentativas del servicio o evento.',
                'Destinos o sedes de interés.',
                'Preferencias y requerimientos de la experiencia.',
                'Tipo de servicio o paquete solicitado.',
                'Número de participantes o visitantes.',
                'Presupuesto estimado.',
                'Información necesaria para coordinar y realizar la reservación correspondiente.',
              ],
            },
            {
              type: 'p',
              text: 'Únicamente solicitaremos los datos que resulten necesarios para atender tu solicitud, preparar una propuesta, gestionar una reservación o prestar los servicios contratados.',
            },
          ],
        },
        {
          title: '3. Datos personales sensibles',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta no solicita de manera ordinaria datos personales sensibles a través del sitio web.',
            },
            {
              type: 'p',
              text: 'En caso de que, para la adecuada prestación de un servicio, resulte indispensable conocer algún dato que pueda considerarse sensible conforme a la legislación aplicable (como especificaciones médicas, de movilidad o restricciones alimentarias para la realización de una actividad), se solicitará el consentimiento correspondiente cuando éste sea legalmente necesario y se utilizará únicamente para la finalidad específica para la cual fue recabado.',
            },
            {
              type: 'p',
              text: 'Te recomendamos no proporcionar mediante formularios de contacto información sensible que no sea necesaria para la atención de tu solicitud.',
            },
          ],
        },
        {
          title: '4. Finalidades del tratamiento',
          blocks: [
            {
              type: 'p',
              text: 'Los datos personales que nos proporciones podrán ser utilizados para las siguientes finalidades:',
            },
            { type: 'h3', text: 'Finalidades primarias' },
            {
              type: 'p',
              text: 'Son aquellas necesarias para atender tu solicitud y proporcionar nuestros servicios:',
            },
            {
              type: 'ul',
              items: [
                'Atender preguntas, comentarios y solicitudes de información.',
                'Responder solicitudes de cotización.',
                'Diseñar, personalizar y gestionar las experiencias y servicios solicitados.',
                'Conocer tus intereses, fechas tentativas y presupuesto para elaborar propuestas ajustadas.',
                'Gestionar reservaciones, accesos y confirmaciones de agenda.',
                'Dar seguimiento a las propuestas realizadas.',
                'Coordinar la prestación operativa de los servicios.',
                'Mantener comunicación contigo antes, durante y después de la prestación del servicio.',
                'Proporcionar atención, soporte y asistencia técnica o logística.',
                'Gestionar pagos, facturación y comprobantes fiscales cuando corresponda.',
                'Cumplir obligaciones legales y contractuales.',
                'Atender aclaraciones, cancelaciones, devoluciones o solicitudes relacionadas con los servicios contratados.',
                'Mantener registros administrativos y operativos necesarios.',
              ],
            },
            { type: 'h3', text: 'Finalidades secundarias' },
            {
              type: 'p',
              text: 'De manera adicional, podremos utilizar tus datos para:',
            },
            {
              type: 'ul',
              items: [
                'Enviar información sobre nuevas experiencias, promociones, paquetes y servicios.',
                'Realizar encuestas de satisfacción y calidad en el servicio.',
                'Solicitar opiniones o comentarios sobre la experiencia.',
                'Mejorar nuestros servicios y la atención al cliente.',
                'Elaborar estadísticas internas y análisis de uso del sitio.',
                'Enviar comunicaciones comerciales y publicitarias.',
              ],
            },
            {
              type: 'p',
              text: 'Si no deseas que tus datos sean utilizados para alguna de las finalidades secundarias, podrás manifestarlo en cualquier momento enviando un correo electrónico a atencion@viajeconecta.com.',
            },
            {
              type: 'p',
              text: 'La negativa para el uso de tus datos personales para finalidades secundarias no será motivo para negar los servicios o productos que hayas solicitado o contratado.',
            },
          ],
        },
        {
          title: '5. Base legal para el tratamiento',
          blocks: [
            {
              type: 'p',
              text: 'El tratamiento de tus datos personales se realizará conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y demás legislación mexicana aplicable.',
            },
            {
              type: 'p',
              text: 'Dependiendo de la finalidad, trataremos tus datos con base en:',
            },
            {
              type: 'ul',
              items: [
                'Tu consentimiento expreso o tácito.',
                'La necesidad de ejecutar o preparar un contrato o la prestación de un servicio solicitado.',
                'El cumplimiento de obligaciones legales y administrativas.',
                'Nuestro interés legítimo para la mejora y seguridad de los servicios, respetando en todo momento tus derechos y libertades.',
              ],
            },
          ],
        },
        {
          title: '6. Uso de formularios del sitio web',
          blocks: [
            {
              type: 'p',
              text: 'Nuestro sitio web viajeconecta.com cuenta con formularios mediante los cuales puedes proporcionar datos como nombre, correo electrónico, teléfono y mensaje para solicitar información, cotizaciones o atención personalizada.',
            },
            {
              type: 'p',
              text: 'Los datos proporcionados mediante dichos formularios serán utilizados para:',
            },
            {
              type: 'ul',
              items: [
                'Identificar y contactar al solicitante.',
                'Atender la consulta o requerimiento específico.',
                'Preparar y enviar cotizaciones o propuestas.',
                'Dar seguimiento oportuno a las solicitudes.',
              ],
            },
            {
              type: 'p',
              text: 'No deberás proporcionar información personal de terceros sin contar previamente con la autorización correspondiente del titular.',
            },
          ],
        },
        {
          title: '7. Transferencia de datos personales',
          blocks: [
            {
              type: 'p',
              text: 'Para poder diseñar, coordinar y ejecutar determinadas experiencias o servicios, podremos compartir los datos estrictamente necesarios con proveedores y socios comerciales que participen en la operación de los servicios contratados.',
            },
            {
              type: 'p',
              text: 'Estos terceros pueden incluir, según el tipo de servicio:',
            },
            {
              type: 'ul',
              items: [
                'Operadores logísticos y de experiencias.',
                'Guías, instructores o personal operativo de las actividades.',
                'Proveedores de transporte o accesos a recintos/instalaciones.',
                'Establecimientos de hospedaje, alimentos o experiencias complementarias.',
                'Plataformas de gestión e intermediarios de servicios turísticos o de entretenimiento.',
              ],
            },
            {
              type: 'p',
              text: 'Cuando exista una transferencia de datos, procuraremos compartir únicamente la información indispensable para cumplir con la finalidad correspondiente y exigiremos a los terceros mantener las medidas de seguridad administrativas, técnicas y físicas adecuadas conforme a la ley.',
            },
            {
              type: 'p',
              text: 'Asimismo, se podrán realizar transferencias sin requerir consentimiento cuando sean requeridas por autoridad competente conforme a derecho o sea necesario para el cumplimiento de una obligación legal.',
            },
          ],
        },
        {
          title: '8. Proveedores de servicios tecnológicos',
          blocks: [
            {
              type: 'p',
              text: 'Para operar nuestro sitio web viajeconecta.com y gestionar nuestras operaciones digitales, podemos recurrir a terceros prestadores de servicios tecnológicos (servidores de alojamiento web, plataformas de correo electrónico, herramientas de análisis de datos, sistemas CRM y pasarelas de pago).',
            },
            {
              type: 'p',
              text: 'Estos proveedores tendrán acceso a la información únicamente en la medida necesaria para prestar sus servicios a Viaje Conecta y bajo compromisos de confidencialidad y protección de datos.',
            },
          ],
        },
        {
          title: '9. Pagos y datos financieros',
          blocks: [
            {
              type: 'p',
              text: 'Cuando realices un pago relacionado con nuestros servicios a través de medios digitales, los datos financieros y de tarjetas bancarias serán procesados directamente por las plataformas de pago electrónicas autorizadas.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta no almacena ni conserva directamente números completos de tarjetas de crédito o débito en sus servidores web. Conservaremos únicamente la información contable y comprobantes necesarios para la acreditación de pagos, facturación y cumplimiento fiscal aplicable.',
            },
          ],
        },
        {
          title: '10. Cookies y tecnologías similares',
          blocks: [
            {
              type: 'p',
              text: 'Nuestro sitio web utiliza cookies, balizas (beacons) y tecnologías similares para facilitar la navegación, personalizar el contenido, analizar el tráfico del sitio y mejorar tu experiencia como usuario.',
            },
            {
              type: 'p',
              text: 'Estas tecnologías permiten recopilar información como:',
            },
            {
              type: 'ul',
              items: [
                'Dirección IP y tipo de navegador.',
                'Sistema operativo y tipo de dispositivo.',
                'Páginas visitadas dentro del sitio y tiempo de permanencia.',
                'Enlaces consultados y origen de la visita.',
              ],
            },
            {
              type: 'p',
              text: 'Puedes configurar o desactivar el uso de cookies directamente desde la configuración de tu navegador web. Toma en cuenta que la desactivación de ciertas cookies podría afectar la funcionalidad o el correcto despliegue de algunas secciones de viajeconecta.com.',
            },
          ],
        },
        {
          title: '11. Conservación de los datos personales',
          blocks: [
            {
              type: 'p',
              text: 'Conservaremos tus datos personales únicamente durante el tiempo que sea necesario para cumplir con las finalidades para las que fueron recabados, así como para cumplir con las obligaciones legales, contables, fiscales y administrativas correspondientes.',
            },
            {
              type: 'p',
              text: 'Una vez concluidos los plazos legales o la finalidad del tratamiento, la información será eliminada, bloqueada o anonimizada conforme a la normativa vigente.',
            },
          ],
        },
        {
          title: '12. Medidas de seguridad',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta implementa y mantiene medidas de seguridad administrativas, técnicas y físicas diseñadas para proteger tus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.',
            },
            {
              type: 'p',
              text: 'El acceso a la información personal está restringido exclusivamente al personal y colaboradores autorizados que requieran conocerla para desempeñar sus funciones relativas a las finalidades señaladas.',
            },
          ],
        },
        {
          title: '13. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)',
          blocks: [
            {
              type: 'p',
              text: 'Como titular de los datos personales, tienes derecho a ejercer tus derechos ARCO conforme a la legislación aplicable:',
            },
            {
              type: 'ul',
              items: [
                'Acceso: Conocer qué datos personales tenemos registrados, para qué los utilizamos y las condiciones de su uso.',
                'Rectificación: Solicitar la corrección de tu información personal en caso de que esté desactualizada, sea inexacta o esté incompleta.',
                'Cancelación: Solicitar la eliminación de tus datos de nuestros registros cuando consideres que no están siendo utilizados conforme a los principios y deberes legales.',
                'Oposición: Oponerte al uso de tus datos personales para finalidades específicas (por ejemplo, fines mercadotécnicos).',
              ],
            },
            {
              type: 'p',
              text: 'Para ejercer cualquiera de los derechos ARCO, deberás enviar una solicitud formal al correo electrónico: atencion@viajeconecta.com.',
            },
            { type: 'p', text: 'La solicitud deberá incluir:' },
            {
              type: 'ul',
              items: [
                'Nombre completo del titular y medio de contacto para notificar la respuesta (correo electrónico).',
                'Documento de identificación oficial que acredite la identidad del titular o la representación legal.',
                'Descripción clara y precisa de los datos personales respecto de los cuales se busca ejercer alguno de los derechos ARCO.',
                'Cualquier elemento o documento que facilite la localización de los datos.',
              ],
            },
            {
              type: 'p',
              text: 'Atenderemos y resolveremos tu solicitud conforme a los plazos establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
            },
          ],
        },
        {
          title: '14. Revocación del consentimiento',
          blocks: [
            {
              type: 'p',
              text: 'Puedes revocar en cualquier momento el consentimiento que nos hayas otorgado para el tratamiento de tus datos personales enviando un correo a atencion@viajeconecta.com.',
            },
            {
              type: 'p',
              text: 'Es importante considerar que la revocación del consentimiento no tiene efectos retroactivos y que en ciertos casos no podremos concluir el tratamiento de forma inmediata si existe alguna obligación legal o contractual que nos exija conservar la información.',
            },
          ],
        },
        {
          title: '15. Limitación del uso o divulgación',
          blocks: [
            {
              type: 'p',
              text: 'Si deseas limitar el uso o divulgación de tus datos personales para dejar de recibir publicidad, avisos promocionales o boletines por correo electrónico, puedes enviarnos tu solicitud a atencion@viajeconecta.com o hacer uso del enlace de cancelación de suscripción incluido en la parte inferior de los correos electrónicos informativos que te enviemos.',
            },
          ],
        },
        {
          title: '16. Protección de menores de edad',
          blocks: [
            {
              type: 'p',
              text: 'Los servicios ofertados a través de nuestro sitio web no están dirigidos de manera directa e independiente a menores de edad.',
            },
            {
              type: 'p',
              text: 'En los casos en que se recaben datos de menores para la logística o contratación de una experiencia solicitada por un padre, madre, tutor o representante legal, dicha información será tratada con estricta confidencialidad y únicamente para las finalidades del servicio contratado.',
            },
          ],
        },
        {
          title: '17. Modificaciones a esta Política de Privacidad',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones a la presente Política de Privacidad para la atención de novedades legislativas, jurisprudenciales, políticas internas o nuevos requerimientos para la prestación de nuestros servicios.',
            },
            {
              type: 'p',
              text: 'Cualquier cambio o actualización estará disponible para su consulta permanente en el sitio web: https://viajeconecta.com/',
            },
          ],
        },
        {
          title: '18. Consentimiento',
          blocks: [
            {
              type: 'p',
              text: 'Al navegar en nuestro sitio web, enviar formularios de contacto, solicitar cotizaciones o contratar los servicios ofrecidos por Viaje Conecta, reconoces haber leído y comprendido la presente Política de Privacidad y manifiestas tu conformidad con los términos y condiciones aquí establecidos.',
            },
          ],
        },
        {
          title: '19. Medios de contacto',
          blocks: [
            {
              type: 'p',
              text: 'Si tienes dudas, comentarios o deseas ejercer tus derechos relacionados con la protección de tus datos personales, puedes contactar al área responsable en:',
            },
            {
              type: 'ul',
              items: [
                'Viaje Conecta',
                'Dirección: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
                'Correo electrónico: atencion@viajeconecta.com',
                'Teléfono: +52 1 55 5662 5469',
                'Sitio web: viajeconecta.com',
              ],
            },
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      updated: 'November 2026',
      intro: [
        'At Viaje Conecta we are committed to protecting the privacy and security of the personal data you provide to us through our website, contact forms, quotation requests, bookings and other communication channels related to our tourism and entertainment services.',
        'The purpose of this Privacy Policy is to inform you about what personal data we collect, what we use it for, how we protect it and what your rights are with respect to that data.',
      ],
      sections: [
        {
          title: '1. Data controller',
          blocks: [
            { type: 'p', text: 'The party responsible for processing and protecting your personal data is:' },
            {
              type: 'ul',
              items: [
                'Trade name: Viaje Conecta',
                'Address: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Mexico City, CDMX',
                'Email: atencion@viajeconecta.com',
                'Phone: +52 1 55 5662 5469',
              ],
            },
            {
              type: 'p',
              text: 'For any matter related to this Privacy Policy or the processing of your personal data, you can contact us by email at atencion@viajeconecta.com.',
            },
          ],
        },
        {
          title: '2. Personal data we may collect',
          blocks: [
            {
              type: 'p',
              text: 'Depending on how you interact with us, we may collect the following categories of personal data:',
            },
            { type: 'h3', text: 'Identification and contact data' },
            {
              type: 'ul',
              items: [
                'Full name.',
                'Email address.',
                'Telephone number.',
                'Address or location (where applicable).',
                'Information provided voluntarily through contact forms, chat or direct communication channels.',
              ],
            },
            { type: 'h3', text: 'Data related to the experience or service' },
            {
              type: 'p',
              text: 'When you request a quotation, we design an experience or you contract any of our services, we may request information necessary to prepare and deliver the experience, such as:',
            },
            {
              type: 'ul',
              items: [
                'Tentative dates of the service or event.',
                'Destinations or venues of interest.',
                'Preferences and requirements for the experience.',
                'Type of service or package requested.',
                'Number of participants or visitors.',
                'Estimated budget.',
                'Information necessary to coordinate and make the corresponding booking.',
              ],
            },
            {
              type: 'p',
              text: 'We will only request the data necessary to respond to your request, prepare a proposal, manage a booking or provide the contracted services.',
            },
          ],
        },
        {
          title: '3. Sensitive personal data',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta does not ordinarily request sensitive personal data through the website.',
            },
            {
              type: 'p',
              text: 'If, for the proper provision of a service, it is essential to know any data that may be considered sensitive under applicable law (such as medical information, mobility needs or dietary restrictions for an activity), the corresponding consent will be requested where legally required, and the data will be used solely for the specific purpose for which it was collected.',
            },
            {
              type: 'p',
              text: 'We recommend that you do not provide sensitive information through contact forms that is not necessary to handle your request.',
            },
          ],
        },
        {
          title: '4. Purposes of processing',
          blocks: [
            {
              type: 'p',
              text: 'The personal data you provide to us may be used for the following purposes:',
            },
            { type: 'h3', text: 'Primary purposes' },
            {
              type: 'p',
              text: 'These are those necessary to handle your request and provide our services:',
            },
            {
              type: 'ul',
              items: [
                'Respond to questions, comments and information requests.',
                'Respond to quotation requests.',
                'Design, customise and manage the experiences and services requested.',
                'Understand your interests, tentative dates and budget in order to prepare tailored proposals.',
                'Manage bookings, access and schedule confirmations.',
                'Follow up on proposals made.',
                'Coordinate the operational provision of services.',
                'Maintain communication with you before, during and after the provision of the service.',
                'Provide customer service, support and technical or logistical assistance.',
                'Manage payments, invoicing and tax receipts where applicable.',
                'Comply with legal and contractual obligations.',
                'Handle clarifications, cancellations, returns or requests related to contracted services.',
                'Maintain necessary administrative and operational records.',
              ],
            },
            { type: 'h3', text: 'Secondary purposes' },
            {
              type: 'p',
              text: 'In addition, we may use your data to:',
            },
            {
              type: 'ul',
              items: [
                'Send information about new experiences, promotions, packages and services.',
                'Conduct satisfaction and service quality surveys.',
                'Request opinions or comments about the experience.',
                'Improve our services and customer service.',
                'Prepare internal statistics and website usage analysis.',
                'Send commercial and advertising communications.',
              ],
            },
            {
              type: 'p',
              text: 'If you do not wish your data to be used for any of the secondary purposes, you may state this at any time by sending an email to atencion@viajeconecta.com.',
            },
            {
              type: 'p',
              text: 'Refusal to allow the use of your personal data for secondary purposes will not be grounds for denying the services or products you have requested or contracted.',
            },
          ],
        },
        {
          title: '5. Legal basis for processing',
          blocks: [
            {
              type: 'p',
              text: 'Your personal data will be processed in accordance with the Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP) and other applicable Mexican legislation.',
            },
            {
              type: 'p',
              text: 'Depending on the purpose, we will process your data on the basis of:',
            },
            {
              type: 'ul',
              items: [
                'Your express or implied consent.',
                'The need to perform or prepare a contract or the provision of a requested service.',
                'Compliance with legal and administrative obligations.',
                'Our legitimate interest in improving and securing the services, while always respecting your rights and freedoms.',
              ],
            },
          ],
        },
        {
          title: '6. Use of website forms',
          blocks: [
            {
              type: 'p',
              text: 'Our website viajeconecta.com has forms through which you can provide data such as your name, email address, telephone number and message to request information, quotations or personalised attention.',
            },
            {
              type: 'p',
              text: 'The data provided through these forms will be used to:',
            },
            {
              type: 'ul',
              items: [
                'Identify and contact the requester.',
                'Handle the specific query or request.',
                'Prepare and send quotations or proposals.',
                'Provide timely follow-up on requests.',
              ],
            },
            {
              type: 'p',
              text: 'You must not provide personal information about third parties without the prior authorisation of the data subject.',
            },
          ],
        },
        {
          title: '7. Transfer of personal data',
          blocks: [
            {
              type: 'p',
              text: 'In order to design, coordinate and carry out certain experiences or services, we may share the strictly necessary data with suppliers and business partners involved in the operation of the contracted services.',
            },
            {
              type: 'p',
              text: 'These third parties may include, depending on the type of service:',
            },
            {
              type: 'ul',
              items: [
                'Logistics and experience operators.',
                'Guides, instructors or operational staff for the activities.',
                'Transport providers or venue/facility access providers.',
                'Accommodation, food or complementary experience establishments.',
                'Management platforms and tourism or entertainment service intermediaries.',
              ],
            },
            {
              type: 'p',
              text: 'Where a data transfer takes place, we will endeavour to share only the information essential to fulfil the corresponding purpose and will require third parties to maintain appropriate administrative, technical and physical security measures in accordance with the law.',
            },
            {
              type: 'p',
              text: 'Transfers may also be made without consent where required by a competent authority in accordance with the law or where necessary to comply with a legal obligation.',
            },
          ],
        },
        {
          title: '8. Technology service providers',
          blocks: [
            {
              type: 'p',
              text: 'To operate our website viajeconecta.com and manage our digital operations, we may use third-party technology service providers (web hosting servers, email platforms, data analytics tools, CRM systems and payment gateways).',
            },
            {
              type: 'p',
              text: 'These providers will have access to information only to the extent necessary to provide their services to Viaje Conecta and under confidentiality and data protection commitments.',
            },
          ],
        },
        {
          title: '9. Payments and financial data',
          blocks: [
            {
              type: 'p',
              text: 'When you make a payment related to our services through digital means, financial and bank card data will be processed directly by authorised electronic payment platforms.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta does not directly store or keep complete credit or debit card numbers on its web servers. We will retain only the accounting information and receipts necessary for payment recording, invoicing and applicable tax compliance.',
            },
          ],
        },
        {
          title: '10. Cookies and similar technologies',
          blocks: [
            {
              type: 'p',
              text: 'Our website uses cookies, beacons and similar technologies to facilitate browsing, personalise content, analyse site traffic and improve your experience as a user.',
            },
            {
              type: 'p',
              text: 'These technologies collect information such as:',
            },
            {
              type: 'ul',
              items: [
                'IP address and browser type.',
                'Operating system and device type.',
                'Pages visited within the site and time spent.',
                'Links consulted and source of the visit.',
              ],
            },
            {
              type: 'p',
              text: 'You can configure or disable the use of cookies directly in your web browser settings. Please note that disabling certain cookies may affect the functionality or correct display of some sections of viajeconecta.com.',
            },
          ],
        },
        {
          title: '11. Retention of personal data',
          blocks: [
            {
              type: 'p',
              text: 'We will retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, as well as to comply with the corresponding legal, accounting, tax and administrative obligations.',
            },
            {
              type: 'p',
              text: 'Once the legal periods or the purpose of the processing have ended, the information will be deleted, blocked or anonymised in accordance with applicable regulations.',
            },
          ],
        },
        {
          title: '12. Security measures',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta implements and maintains administrative, technical and physical security measures designed to protect your personal data against damage, loss, alteration, destruction, and unauthorised use, access or processing.',
            },
            {
              type: 'p',
              text: 'Access to personal information is restricted exclusively to authorised staff and collaborators who need to know it in order to perform their duties relating to the purposes indicated.',
            },
          ],
        },
        {
          title: '13. ARCO rights (Access, Rectification, Cancellation and Objection)',
          blocks: [
            {
              type: 'p',
              text: 'As the data subject, you have the right to exercise your ARCO rights in accordance with applicable legislation:',
            },
            {
              type: 'ul',
              items: [
                'Access: To know what personal data we hold about you, what we use it for and the conditions of its use.',
                'Rectification: To request correction of your personal information if it is out of date, inaccurate or incomplete.',
                'Cancellation: To request the deletion of your data from our records when you consider that it is not being used in accordance with legal principles and duties.',
                'Objection: To object to the use of your personal data for specific purposes (for example, marketing purposes).',
              ],
            },
            {
              type: 'p',
              text: 'To exercise any of the ARCO rights, you must send a formal request by email to: atencion@viajeconecta.com.',
            },
            { type: 'p', text: 'The request must include:' },
            {
              type: 'ul',
              items: [
                'Full name of the data subject and a contact method for notification of the response (email address).',
                'Official identification document proving the identity of the data subject or legal representation.',
                'A clear and precise description of the personal data in respect of which any of the ARCO rights is being exercised.',
                'Any element or document that facilitates locating the data.',
              ],
            },
            {
              type: 'p',
              text: 'We will handle and resolve your request in accordance with the periods established by the Federal Law on the Protection of Personal Data Held by Private Parties.',
            },
          ],
        },
        {
          title: '14. Revocation of consent',
          blocks: [
            {
              type: 'p',
              text: 'You may revoke at any time the consent you have granted us for the processing of your personal data by sending an email to atencion@viajeconecta.com.',
            },
            {
              type: 'p',
              text: 'It is important to note that revocation of consent does not have retroactive effects and that in certain cases we may not be able to immediately cease processing if there is a legal or contractual obligation requiring us to retain the information.',
            },
          ],
        },
        {
          title: '15. Limitation of use or disclosure',
          blocks: [
            {
              type: 'p',
              text: 'If you wish to limit the use or disclosure of your personal data in order to stop receiving advertising, promotional notices or newsletters by email, you may send your request to atencion@viajeconecta.com or use the unsubscribe link included at the bottom of the informative emails we send you.',
            },
          ],
        },
        {
          title: '16. Protection of minors',
          blocks: [
            {
              type: 'p',
              text: 'The services offered through our website are not directly and independently aimed at minors.',
            },
            {
              type: 'p',
              text: 'In cases where minors’ data is collected for the logistics or contracting of an experience requested by a parent, mother, guardian or legal representative, such information will be treated with strict confidentiality and solely for the purposes of the contracted service.',
            },
          ],
        },
        {
          title: '17. Amendments to this Privacy Policy',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta reserves the right to make modifications or updates to this Privacy Policy at any time in response to legislative or jurisprudential developments, internal policies or new requirements for the provision of our services.',
            },
            {
              type: 'p',
              text: 'Any change or update will be available for permanent consultation on the website: https://viajeconecta.com/',
            },
          ],
        },
        {
          title: '18. Consent',
          blocks: [
            {
              type: 'p',
              text: 'By browsing our website, submitting contact forms, requesting quotations or contracting the services offered by Viaje Conecta, you acknowledge having read and understood this Privacy Policy and express your agreement with the terms and conditions set out herein.',
            },
          ],
        },
        {
          title: '19. Contact details',
          blocks: [
            {
              type: 'p',
              text: 'If you have questions, comments or wish to exercise your rights relating to the protection of your personal data, you can contact the responsible area at:',
            },
            {
              type: 'ul',
              items: [
                'Viaje Conecta',
                'Address: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Mexico City, CDMX',
                'Email: atencion@viajeconecta.com',
                'Phone: +52 1 55 5662 5469',
                'Website: viajeconecta.com',
              ],
            },
          ],
        },
      ],
    },
  },
  terms: {
    es: {
      title: 'Términos y condiciones',
      updated: 'Noviembre de 2026',
      intro: [
        'Bienvenido a Viaje Conecta. Al acceder, navegar o utilizar nuestro sitio web viajeconecta.com, así como al solicitar, reservar o contratar cualquiera de nuestros servicios turísticos y de entretenimiento, aceptas los presentes Términos y Condiciones.',
        'Te recomendamos leerlos detenidamente antes de realizar cualquier solicitud, reservación o contratación.',
      ],
      sections: [
        {
          title: '1. Información general',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta ofrece servicios relacionados con la planeación, diseño, coordinación y comercialización de experiencias, viajes y actividades turísticas o de entretenimiento.',
            },
            {
              type: 'p',
              text: 'Entre los servicios que podemos ofrecer se encuentran:',
            },
            {
              type: 'ul',
              items: [
                'Diseño de itinerarios personalizados.',
                'Experiencias culturales, temáticas y turísticas.',
                'Visitas a sitios históricos y arqueológicos.',
                'Actividades de ecoturismo y aventura.',
                'Experiencias de playa y actividades acuáticas.',
                'Experiencias gastronómicas.',
                'Rutas de vino y catas.',
                'Experiencias artísticas y eventos culturales.',
                'Actividades urbanas y de entretenimiento.',
                'Coordinación logística de servicios turísticos y experiencias personalizadas.',
              ],
            },
            {
              type: 'p',
              text: 'La disponibilidad y características de cada servicio dependerán de la experiencia, destino, fecha, proveedores participantes y condiciones específicas de la contratación.',
            },
          ],
        },
        {
          title: '2. Aceptación de los Términos y Condiciones',
          blocks: [
            {
              type: 'p',
              text: 'Al utilizar este sitio web o contratar cualquiera de nuestros servicios, declaras que:',
            },
            {
              type: 'ul',
              items: [
                'Has leído y comprendido estos Términos y Condiciones.',
                'Aceptas quedar sujeto a ellos en su totalidad.',
                'Proporcionas información verdadera, exacta y actualizada.',
                'Tienes plena capacidad legal para contratar los servicios solicitados.',
                'En caso de realizar una contratación en nombre de terceros o de un grupo de viajeros/participantes, cuentas con la autorización legal previa correspondiente.',
              ],
            },
            {
              type: 'p',
              text: 'Si no estás de acuerdo con alguno de estos términos, deberás abstenerte de utilizar el sitio o contratar nuestros servicios.',
            },
          ],
        },
        {
          title: '3. Información del sitio web',
          blocks: [
            {
              type: 'p',
              text: 'Procuramos que la información publicada en nuestro sitio web viajeconecta.com sea clara, actualizada y precisa.',
            },
            {
              type: 'p',
              text: 'Sin embargo, las fotografías, descripciones, horarios, precios, disponibilidad y características de determinadas experiencias pueden estar sujetas a cambios debido a condiciones operativas, climáticas, de temporada, disponibilidad de proveedores u otras circunstancias ajenas a nuestro control.',
            },
            {
              type: 'p',
              text: 'La información mostrada en el sitio web tiene carácter orientativo e informativo y no constituye necesariamente una confirmación definitiva de reserva. La contratación se considerará confirmada únicamente cuando Viaje Conecta emita y comunique expresamente la confirmación correspondiente.',
            },
          ],
        },
        {
          title: '4. Cotizaciones',
          blocks: [
            {
              type: 'p',
              text: 'Las solicitudes realizadas a través del sitio web, correo electrónico, teléfono u otros medios de contacto podrán generar una cotización personalizada.',
            },
            {
              type: 'p',
              text: 'Las cotizaciones dependerán de factores como:',
            },
            {
              type: 'ul',
              items: [
                'Número de participantes o viajeros.',
                'Fechas programadas para la experiencia o viaje.',
                'Destino o sede.',
                'Tipo de experiencia o paquete seleccionado.',
                'Disponibilidad.',
                'Servicios incluidos y adicionales solicitados.',
                'Proveedores participantes.',
                'Temporada alta/baja.',
                'Condiciones de transporte, hospedaje, accesos u otros servicios.',
              ],
            },
            {
              type: 'p',
              text: 'Una cotización no constituye por sí misma una reservación confirmada. Los precios y condiciones indicados en una cotización tendrán la vigencia señalada en la misma. Si no se indica una vigencia específica, estarán sujetos a disponibilidad y podrán modificarse antes de la confirmación formal de la reserva.',
            },
          ],
        },
        {
          title: '5. Reservaciones',
          blocks: [
            {
              type: 'p',
              text: 'Una reservación se considerará confirmada una vez que el cliente haya cumplido expresamente con las condiciones indicadas en la cotización o comprobante de confirmación.',
            },
            {
              type: 'p',
              text: 'Dependiendo del servicio, se podrá requerir:',
            },
            {
              type: 'ul',
              items: [
                'El pago total del servicio.',
                'El pago de un anticipo o depósito de garantía.',
                'La confirmación de datos de identificación de los participantes.',
                'La aceptación expresa de las condiciones particulares de la experiencia.',
                'El cumplimiento de requisitos específicos establecidos por proveedores finales.',
              ],
            },
            {
              type: 'p',
              text: 'El envío de una solicitud mediante formularios o correo electrónico no garantiza la reserva del cupo o fecha hasta su oportuna confirmación e ingreso de pago.',
            },
          ],
        },
        {
          title: '6. Precios y pagos',
          blocks: [
            {
              type: 'p',
              text: 'Los precios de nuestros servicios se indicarán en la cotización, página del servicio o medio de contratación correspondiente.',
            },
            {
              type: 'p',
              text: 'Los precios pueden variar dependiendo de la fecha, disponibilidad, número de participantes, temporada y condiciones de los proveedores involucrados.',
            },
            {
              type: 'p',
              text: 'Cuando una experiencia requiera pago anticipado, la validez de la reservación quedará sujeta a la recepción y validación del pago correspondiente por parte del departamento financiero de Viaje Conecta.',
            },
            {
              type: 'p',
              text: 'El cliente es responsable de proporcionar información correcta para procesar el pago y de conservar sus comprobantes. Cuando el pago sea procesado mediante pasarelas externas, se aplicarán también los términos y condiciones de dicha plataforma de pago.',
            },
          ],
        },
        {
          title: '7. Servicios incluidos y no incluidos',
          blocks: [
            {
              type: 'p',
              text: 'Cada experiencia o itinerario contará con especificaciones particulares respecto de los servicios incluidos. El cliente debe revisar detalladamente la propuesta o cotización antes de confirmar la contratación.',
            },
            {
              type: 'p',
              text: 'Salvo que se indique de manera explícita en la confirmación por escrito, se entienden como gastos NO incluidos:',
            },
            {
              type: 'ul',
              items: [
                'Gastos personales de cualquier índole.',
                'Propinas para guías, chóferes o personal de servicio.',
                'Alimentos y bebidas no especificados explícitamente en el programa.',
                'Entradas a atracciones, recintos o actividades adicionales no listadas.',
                'Servicios adicionales solicitados con posterioridad a la contratación.',
                'Gastos derivados de modificaciones al itinerario solicitadas por el cliente.',
                'Costos adicionales ocasionados por retrasos, cancelaciones o faltas atribuibles al cliente.',
              ],
            },
          ],
        },
        {
          title: '8. Cambios solicitados por el cliente',
          blocks: [
            {
              type: 'p',
              text: 'El cliente podrá solicitar modificaciones o cambios en su reservación o itinerario programado.',
            },
            {
              type: 'p',
              text: 'La factibilidad de aplicar dichos cambios estará sujeta a la disponibilidad técnica, operativa y a las políticas de los proveedores involucrados. Cualquier cambio puede generar costos adicionales, penalizaciones o diferencias de tarifa que deberán ser cubiertos en su totalidad por el cliente antes de la prestación del servicio.',
            },
          ],
        },
        {
          title: '9. Cancelaciones por parte del cliente',
          blocks: [
            {
              type: 'p',
              text: 'Las condiciones y cargos aplicables por cancelación dependerán del tipo de servicio contratado y de los términos de los proveedores involucrados.',
            },
            {
              type: 'p',
              text: 'Al momento de confirmar la reserva, se informarán las condiciones específicas de cancelación, reembolso o reprogramación. Si la cancelación genera penalizaciones o gastos no reembolsables por parte de terceros (hoteles, transportistas, parques, etc.), dichos montos se descontarán del importe que pudiera corresponder a devolución.',
            },
            {
              type: 'p',
              text: 'Toda solicitud de cancelación deberá enviarse por escrito al correo electrónico: atencion@viajeconecta.com',
            },
          ],
        },
        {
          title: '10. Reembolsos',
          blocks: [
            {
              type: 'p',
              text: 'Cuando resulte procedente un reembolso, este se tramitará conforme a las condiciones de la reservación y a las políticas de los proveedores externos que intervengan.',
            },
            {
              type: 'p',
              text: 'No todos los servicios turísticos o de entretenimiento son reembolsables. Los tiempos de procesamiento del reembolso dependerán del medio de pago utilizado, pasarelas y tiempos operativos de las instituciones financieras. Las comisiones bancarias o transaccionales generadas por el pago o devolución no serán reembolsables salvo disposición legal en contrario.',
            },
          ],
        },
        {
          title: '11. Cancelaciones o cambios por parte de Viaje Conecta',
          blocks: [
            {
              type: 'p',
              text: 'En circunstancias extraordinarias o de fuerza mayor, Viaje Conecta o los proveedores operativos podrán modificar, reprogramar o cancelar una experiencia.',
            },
            { type: 'p', text: 'Esto puede ocurrir debido a:' },
            {
              type: 'ul',
              items: [
                'Condiciones climáticas adversas o riesgos meteorológicos.',
                'Fenómenos naturales o contingencias ambientales.',
                'Situaciones de seguridad local o nacional.',
                'Cierres imprevistos de sitios turísticos, recintos o carreteras.',
                'Fallas técnicas u operativas no previsibles.',
                'Circunstancias de fuerza mayor o caso fortuito.',
              ],
            },
            {
              type: 'p',
              text: 'En estos casos, se informará oportunamente al cliente y se priorizará la reprogramación del servicio o la sustitución por una alternativa de valor similar. En caso de cancelación definitiva sin alternativa viable, se aplicarán los criterios de reembolso correspondientes conforme a las condiciones del servicio.',
            },
          ],
        },
        {
          title: '12. Proveedores externos',
          blocks: [
            {
              type: 'p',
              text: 'Para la prestación integral de ciertas experiencias, Viaje Conecta actúa como intermediario o coordinador frente a proveedores externos especializados (como hoteles, restaurantes, transportistas, guías locales, parques temáticos y operadores de aventura).',
            },
            {
              type: 'p',
              text: 'Dichos terceros cuentan con sus propios términos de servicio, reglamentos internos y medidas de seguridad, los cuales deben ser acatados por los participantes durante el desarrollo de la experiencia.',
            },
          ],
        },
        {
          title: '13. Responsabilidad del viajero o usuario',
          blocks: [
            { type: 'p', text: 'El usuario o cliente se compromete a:' },
            {
              type: 'ul',
              items: [
                'Proporcionar información verídica, exacta y completa para la gestión de su reserva.',
                'Presentarse con puntualidad en los puntos de encuentro y horarios establecidos.',
                'Portar la documentación oficial requerida durante todo el trayecto o experiencia.',
                'Seguir en todo momento las recomendaciones e instrucciones del personal a cargo, guías e instructores.',
                'Respetar las normas de conducta, instalaciones y patrimonio de las zonas o sitios visitados.',
                'Notificar con oportunidad cualquier condición médica o requerimiento especial.',
              ],
            },
            {
              type: 'p',
              text: 'La falta de puntualidad, la ausencia de documentación requerida o la inobservancia de las normas de seguridad pueden resultar en la pérdida de la actividad sin derecho a compensación o reembolso.',
            },
          ],
        },
        {
          title: '14. Documentación y requisitos de viaje',
          blocks: [
            {
              type: 'p',
              text: 'Es responsabilidad exclusiva del participante contar con la documentación oficial vigente (identificación oficial, pasaportes, visas, permisos o certificados sanitarios) que sea exigida por las autoridades para la realización de la experiencia o traslado.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta podrá brindar orientación general sobre los requisitos, pero no asumirá responsabilidad por la denegación de accesos o abordajes derivados del incumplimiento de requisitos por parte del cliente.',
            },
          ],
        },
        {
          title: '15. Actividades de aventura y actividades físicas',
          blocks: [
            {
              type: 'p',
              text: 'Ciertas experiencias pueden involucrar la práctica de deportes, caminatas, actividades acuáticas o de aventura que conllevan un riesgo inherente.',
            },
            {
              type: 'p',
              text: 'Al participar en estas actividades, el cliente declara encontrarse en condiciones físicas y de salud adecuadas para su desarrollo y se compromete a cumplir rigurosamente con el uso del equipo de protección y con los protocolos de seguridad. Viaje Conecta o el operador a cargo podrán restringir la participación de un usuario si se determina que su condición compromete su seguridad o la del grupo.',
            },
          ],
        },
        {
          title: '16. Pertenencias personales',
          blocks: [
            {
              type: 'p',
              text: 'El cliente es responsable del cuidado y custodia de sus pertenencias personales, dispositivos electrónicos, equipaje y objetos de valor durante la realización de los servicios o traslados.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta no se hace responsable por extravíos, robos, olvidos o daños en los objetos personales de los usuarios durante el desarrollo de las actividades, salvo cuando exista responsabilidad directa imputable por negligencia grave comprobada conforme a la legislación aplicable.',
            },
          ],
        },
        {
          title: '17. Fuerza mayor y caso fortuito',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta no será responsable del incumplimiento o retraso en las obligaciones contraídas cuando este sea causado por eventos fuera de su control razonable, tales como desastres naturales, eventos meteorológicos graves, huelgas, bloqueos viales, emergencias sanitarias, actos de autoridades o fallas generales en redes de transporte y servicios públicos.',
            },
          ],
        },
        {
          title: '18. Propiedad intelectual',
          blocks: [
            {
              type: 'p',
              text: 'Todo el contenido visual, textual, marcas, logotipos, elementos gráficos, diseño del sitio, fotografías y código fuente de viajeconecta.com son propiedad exclusiva de Viaje Conecta o cuentan con la debida licencia de uso.',
            },
            {
              type: 'p',
              text: 'Queda estrictamente prohibida la reproducción, copia, distribución o comercialización de cualquier elemento del sitio web sin la autorización previa y por escrito de Viaje Conecta.',
            },
          ],
        },
        {
          title: '19. Uso adecuado del sitio web',
          blocks: [
            {
              type: 'p',
              text: 'El usuario se obliga a utilizar el sitio web de conformidad con la ley y la moral. Queda prohibido ingresar virus, realizar ataques cibernéticos, extraer datos masivos mediante scraping, o utilizar los formularios para el envío de información falsa, engañosa o spam.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta se reserva el derecho de restringir o bloquear el acceso al sitio a cualquier usuario que haga un uso indebido de la plataforma.',
            },
          ],
        },
        {
          title: '20. Enlaces a terceros',
          blocks: [
            {
              type: 'p',
              text: 'Nuestro sitio web puede contener enlaces hacia páginas o plataformas operadas por terceros. Viaje Conecta no ejerce control sobre los contenidos, términos o políticas de privacidad de dichos sitios externos, por lo que el acceso a los mismos queda bajo la responsabilidad del usuario.',
            },
          ],
        },
        {
          title: '21. Protección de datos personales',
          blocks: [
            {
              type: 'p',
              text: 'La recolección y tratamiento de tus datos personales a través del sitio web o durante la contratación de nuestros servicios se rige por lo dispuesto en nuestra Política de Privacidad.',
            },
          ],
        },
        {
          title: '22. Comunicaciones',
          blocks: [
            {
              type: 'p',
              text: 'Toda comunicación formal relacionada con cotizaciones, aclaraciones, reservaciones, cambios o cancelaciones deberá realizarse por escrito a través del correo electrónico atencion@viajeconecta.com o mediante los canales oficiales señalados en el sitio.',
            },
            {
              type: 'p',
              text: 'Es responsabilidad del cliente mantener sus datos de contacto actualizados para recibir notificaciones sobre sus servicios contratados.',
            },
          ],
        },
        {
          title: '23. Modificaciones de los Términos y Condiciones',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta se reserva el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento sin previo aviso para adaptarlos a novedades legislativas, jurisprudenciales o de operación comercial.',
            },
            {
              type: 'p',
              text: 'La versión actualizada estará siempre disponible en el sitio web viajeconecta.com. Las modificaciones no afectarán las condiciones de servicios que hayan sido previamente confirmados, salvo por disposiciones legales o causas de fuerza mayor.',
            },
          ],
        },
        {
          title: '24. Legislación aplicable y jurisdicción',
          blocks: [
            {
              type: 'p',
              text: 'Los presentes Términos y Condiciones se rigen e interpretan conforme a las leyes vigentes de los Estados Unidos Mexicanos. Para la solución de cualquier controversia derivada del uso del sitio web o de la prestación de nuestros servicios, las partes acuerdan someterse expresamente a la jurisdicción de los tribunales competentes en la Ciudad de México, renunciando a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.',
            },
          ],
        },
        {
          title: '25. Datos de contacto',
          blocks: [
            {
              type: 'p',
              text: 'Para cualquier duda, aclaración o comentario relacionado con los presentes Términos y Condiciones, puedes ponerte en contacto con nosotros:',
            },
            {
              type: 'ul',
              items: [
                'Viaje Conecta',
                'Dirección: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
                'Correo electrónico: atencion@viajeconecta.com',
                'Teléfono: +52 1 55 5662 5469',
                'Sitio web: viajeconecta.com',
              ],
            },
          ],
        },
      ],
    },
    en: {
      title: 'Terms and Conditions',
      updated: 'November 2026',
      intro: [
        'Welcome to Viaje Conecta. By accessing, browsing or using our website viajeconecta.com, as well as by requesting, booking or contracting any of our tourism and entertainment services, you accept these Terms and Conditions.',
        'We recommend that you read them carefully before making any request, booking or contracting any service.',
      ],
      sections: [
        {
          title: '1. General information',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta offers services related to the planning, design, coordination and commercialisation of tourism or entertainment experiences, trips and activities.',
            },
            {
              type: 'p',
              text: 'The services we may offer include:',
            },
            {
              type: 'ul',
              items: [
                'Design of tailor-made itineraries.',
                'Cultural, themed and tourism experiences.',
                'Visits to historical and archaeological sites.',
                'Ecotourism and adventure activities.',
                'Beach experiences and water activities.',
                'Food experiences.',
                'Wine routes and tastings.',
                'Artistic experiences and cultural events.',
                'Urban and entertainment activities.',
                'Logistical coordination of tourism services and tailor-made experiences.',
              ],
            },
            {
              type: 'p',
              text: 'The availability and characteristics of each service will depend on the experience, destination, date, participating suppliers and the specific conditions of the contracting.',
            },
          ],
        },
        {
          title: '2. Acceptance of the Terms and Conditions',
          blocks: [
            {
              type: 'p',
              text: 'By using this website or contracting any of our services, you declare that:',
            },
            {
              type: 'ul',
              items: [
                'You have read and understood these Terms and Conditions.',
                'You accept to be bound by them in full.',
                'You provide truthful, accurate and up-to-date information.',
                'You have full legal capacity to contract the requested services.',
                'If you make a booking on behalf of third parties or a group of travellers/participants, you have the corresponding prior legal authorisation.',
              ],
            },
            {
              type: 'p',
              text: 'If you do not agree with any of these terms, you must refrain from using the site or contracting our services.',
            },
          ],
        },
        {
          title: '3. Website information',
          blocks: [
            {
              type: 'p',
              text: 'We strive to ensure that the information published on our website viajeconecta.com is clear, up to date and accurate.',
            },
            {
              type: 'p',
              text: 'However, photographs, descriptions, schedules, prices, availability and characteristics of certain experiences may be subject to change due to operational, weather or seasonal conditions, supplier availability or other circumstances beyond our control.',
            },
            {
              type: 'p',
              text: 'The information shown on the website is indicative and informative and does not necessarily constitute a definitive booking confirmation. The contracting will be considered confirmed only when Viaje Conecta issues and expressly communicates the corresponding confirmation.',
            },
          ],
        },
        {
          title: '4. Quotations',
          blocks: [
            {
              type: 'p',
              text: 'Requests made through the website, email, telephone or other contact channels may generate a tailor-made quotation.',
            },
            {
              type: 'p',
              text: 'Quotations will depend on factors such as:',
            },
            {
              type: 'ul',
              items: [
                'Number of participants or travellers.',
                'Dates scheduled for the experience or trip.',
                'Destination or venue.',
                'Type of experience or package selected.',
                'Availability.',
                'Included and additional services requested.',
                'Participating suppliers.',
                'High/low season.',
                'Transport, accommodation, access or other service conditions.',
              ],
            },
            {
              type: 'p',
              text: 'A quotation does not in itself constitute a confirmed booking. The prices and conditions indicated in a quotation will remain valid for the period stated therein. If no specific validity period is indicated, they will be subject to availability and may be modified before formal confirmation of the booking.',
            },
          ],
        },
        {
          title: '5. Bookings',
          blocks: [
            {
              type: 'p',
              text: 'A booking will be considered confirmed once the client has expressly complied with the conditions indicated in the quotation or confirmation voucher.',
            },
            {
              type: 'p',
              text: 'Depending on the service, the following may be required:',
            },
            {
              type: 'ul',
              items: [
                'Full payment for the service.',
                'Payment of a deposit or guarantee deposit.',
                'Confirmation of the participants’ identification details.',
                'Express acceptance of the particular conditions of the experience.',
                'Compliance with specific requirements established by final suppliers.',
              ],
            },
            {
              type: 'p',
              text: 'Sending a request through forms or email does not guarantee reservation of the place or date until it is duly confirmed and payment is received.',
            },
          ],
        },
        {
          title: '6. Prices and payments',
          blocks: [
            {
              type: 'p',
              text: 'The prices of our services will be indicated in the quotation, service page or corresponding contracting channel.',
            },
            {
              type: 'p',
              text: 'Prices may vary depending on the date, availability, number of participants, season and conditions of the suppliers involved.',
            },
            {
              type: 'p',
              text: 'When an experience requires advance payment, the validity of the booking will be subject to receipt and validation of the corresponding payment by the Viaje Conecta finance department.',
            },
            {
              type: 'p',
              text: 'The client is responsible for providing correct information to process the payment and for keeping their receipts. Where payment is processed through external gateways, the terms and conditions of that payment platform will also apply.',
            },
          ],
        },
        {
          title: '7. Included and excluded services',
          blocks: [
            {
              type: 'p',
              text: 'Each experience or itinerary will have particular specifications regarding the services included. The client must carefully review the proposal or quotation before confirming the contracting.',
            },
            {
              type: 'p',
              text: 'Unless expressly stated in the written confirmation, the following are understood to be NOT included:',
            },
            {
              type: 'ul',
              items: [
                'Personal expenses of any kind.',
                'Tips for guides, drivers or service staff.',
                'Food and drinks not explicitly specified in the programme.',
                'Tickets to attractions, venues or additional activities not listed.',
                'Additional services requested after contracting.',
                'Expenses arising from itinerary changes requested by the client.',
                'Additional costs caused by delays, cancellations or faults attributable to the client.',
              ],
            },
          ],
        },
        {
          title: '8. Changes requested by the client',
          blocks: [
            {
              type: 'p',
              text: 'The client may request modifications or changes to their booking or scheduled itinerary.',
            },
            {
              type: 'p',
              text: 'The feasibility of applying such changes will be subject to technical and operational availability and to the policies of the suppliers involved. Any change may generate additional costs, penalties or rate differences that must be fully covered by the client before the service is provided.',
            },
          ],
        },
        {
          title: '9. Cancellations by the client',
          blocks: [
            {
              type: 'p',
              text: 'The conditions and charges applicable for cancellation will depend on the type of service contracted and the terms of the suppliers involved.',
            },
            {
              type: 'p',
              text: 'At the time of confirming the booking, the specific cancellation, refund or rescheduling conditions will be communicated. If the cancellation generates penalties or non-refundable expenses on the part of third parties (hotels, transport providers, parks, etc.), such amounts will be deducted from any amount that may be eligible for a refund.',
            },
            {
              type: 'p',
              text: 'All cancellation requests must be sent in writing to the email address: atencion@viajeconecta.com',
            },
          ],
        },
        {
          title: '10. Refunds',
          blocks: [
            {
              type: 'p',
              text: 'Where a refund is applicable, it will be processed in accordance with the booking conditions and the policies of the external suppliers involved.',
            },
            {
              type: 'p',
              text: 'Not all tourism or entertainment services are refundable. Refund processing times will depend on the payment method used, gateways and the operational times of financial institutions. Bank or transaction commissions generated by the payment or refund will not be refundable unless otherwise provided by law.',
            },
          ],
        },
        {
          title: '11. Cancellations or changes by Viaje Conecta',
          blocks: [
            {
              type: 'p',
              text: 'In extraordinary circumstances or force majeure, Viaje Conecta or the operating suppliers may modify, reschedule or cancel an experience.',
            },
            { type: 'p', text: 'This may occur due to:' },
            {
              type: 'ul',
              items: [
                'Adverse weather conditions or meteorological risks.',
                'Natural phenomena or environmental contingencies.',
                'Local or national security situations.',
                'Unforeseen closures of tourist sites, venues or roads.',
                'Unforeseeable technical or operational failures.',
                'Force majeure or unforeseen events.',
              ],
            },
            {
              type: 'p',
              text: 'In these cases, the client will be informed in a timely manner and priority will be given to rescheduling the service or replacing it with an alternative of similar value. In the event of definitive cancellation without a viable alternative, the corresponding refund criteria will apply in accordance with the conditions of the service.',
            },
          ],
        },
        {
          title: '12. External suppliers',
          blocks: [
            {
              type: 'p',
              text: 'For the integral provision of certain experiences, Viaje Conecta acts as an intermediary or coordinator with specialised external suppliers (such as hotels, restaurants, transport providers, local guides, theme parks and adventure operators).',
            },
            {
              type: 'p',
              text: 'Such third parties have their own terms of service, internal regulations and safety measures, which must be observed by participants during the experience.',
            },
          ],
        },
        {
          title: '13. Traveller or user responsibility',
          blocks: [
            { type: 'p', text: 'The user or client undertakes to:' },
            {
              type: 'ul',
              items: [
                'Provide truthful, accurate and complete information for managing their booking.',
                'Arrive punctually at the established meeting points and times.',
                'Carry the required official documentation throughout the journey or experience.',
                'Follow at all times the recommendations and instructions of the staff in charge, guides and instructors.',
                'Respect the rules of conduct, facilities and heritage of the areas or sites visited.',
                'Notify in a timely manner of any medical condition or special requirement.',
              ],
            },
            {
              type: 'p',
              text: 'Lack of punctuality, absence of required documentation or failure to observe safety rules may result in loss of the activity without the right to compensation or refund.',
            },
          ],
        },
        {
          title: '14. Documentation and travel requirements',
          blocks: [
            {
              type: 'p',
              text: 'It is the sole responsibility of the participant to hold valid official documentation (official identification, passports, visas, permits or health certificates) required by the authorities for the experience or transfer.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta may provide general guidance on the requirements, but will not assume responsibility for denial of access or boarding resulting from the client’s failure to comply with requirements.',
            },
          ],
        },
        {
          title: '15. Adventure and physical activities',
          blocks: [
            {
              type: 'p',
              text: 'Certain experiences may involve sports, hiking, water or adventure activities that carry inherent risk.',
            },
            {
              type: 'p',
              text: 'By participating in these activities, the client declares that they are in adequate physical and health conditions for their development and undertakes to strictly comply with the use of protective equipment and safety protocols. Viaje Conecta or the operator in charge may restrict a user’s participation if it is determined that their condition compromises their safety or that of the group.',
            },
          ],
        },
        {
          title: '16. Personal belongings',
          blocks: [
            {
              type: 'p',
              text: 'The client is responsible for the care and safekeeping of their personal belongings, electronic devices, luggage and valuables during the provision of services or transfers.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta is not responsible for loss, theft, forgetfulness or damage to users’ personal objects during the activities, except where there is direct liability attributable to proven gross negligence in accordance with applicable legislation.',
            },
          ],
        },
        {
          title: '17. Force majeure and unforeseen events',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta will not be liable for non-performance or delay in the obligations undertaken where this is caused by events beyond its reasonable control, such as natural disasters, severe weather events, strikes, road blockades, health emergencies, acts of authorities or general failures in transport and public service networks.',
            },
          ],
        },
        {
          title: '18. Intellectual property',
          blocks: [
            {
              type: 'p',
              text: 'All visual and textual content, trademarks, logos, graphic elements, site design, photographs and source code of viajeconecta.com are the exclusive property of Viaje Conecta or are duly licensed for use.',
            },
            {
              type: 'p',
              text: 'The reproduction, copying, distribution or commercialisation of any element of the website without the prior written authorisation of Viaje Conecta is strictly prohibited.',
            },
          ],
        },
        {
          title: '19. Proper use of the website',
          blocks: [
            {
              type: 'p',
              text: 'The user undertakes to use the website in accordance with the law and morality. It is prohibited to introduce viruses, carry out cyber-attacks, extract mass data through scraping, or use the forms to send false, misleading or spam information.',
            },
            {
              type: 'p',
              text: 'Viaje Conecta reserves the right to restrict or block access to the site for any user who misuses the platform.',
            },
          ],
        },
        {
          title: '20. Third-party links',
          blocks: [
            {
              type: 'p',
              text: 'Our website may contain links to pages or platforms operated by third parties. Viaje Conecta does not exercise control over the content, terms or privacy policies of such external sites, so access to them is the responsibility of the user.',
            },
          ],
        },
        {
          title: '21. Personal data protection',
          blocks: [
            {
              type: 'p',
              text: 'The collection and processing of your personal data through the website or during the contracting of our services is governed by the provisions of our Privacy Policy.',
            },
          ],
        },
        {
          title: '22. Communications',
          blocks: [
            {
              type: 'p',
              text: 'All formal communication related to quotations, clarifications, bookings, changes or cancellations must be made in writing by email to atencion@viajeconecta.com or through the official channels indicated on the site.',
            },
            {
              type: 'p',
              text: 'It is the client’s responsibility to keep their contact details up to date in order to receive notifications about their contracted services.',
            },
          ],
        },
        {
          title: '23. Amendments to the Terms and Conditions',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta reserves the right to update or modify these Terms and Conditions at any time without prior notice in order to adapt them to legislative, jurisprudential or commercial operation developments.',
            },
            {
              type: 'p',
              text: 'The updated version will always be available on the website viajeconecta.com. The modifications will not affect the conditions of services that have been previously confirmed, except for legal provisions or force majeure.',
            },
          ],
        },
        {
          title: '24. Applicable law and jurisdiction',
          blocks: [
            {
              type: 'p',
              text: 'These Terms and Conditions are governed and interpreted in accordance with the laws in force in the United Mexican States. For the resolution of any dispute arising from the use of the website or the provision of our services, the parties agree to expressly submit to the jurisdiction of the competent courts in Mexico City, waiving any other jurisdiction that may correspond to them by reason of their present or future domiciles.',
            },
          ],
        },
        {
          title: '25. Contact details',
          blocks: [
            {
              type: 'p',
              text: 'For any questions, clarifications or comments related to these Terms and Conditions, you can contact us:',
            },
            {
              type: 'ul',
              items: [
                'Viaje Conecta',
                'Address: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Mexico City, CDMX',
                'Email: atencion@viajeconecta.com',
                'Phone: +52 1 55 5662 5469',
                'Website: viajeconecta.com',
              ],
            },
          ],
        },
      ],
    },
  },
  refund: {
    es: {
      title: 'Política de devoluciones y reembolsos',
      updated: 'Noviembre de 2026',
      intro: [
        'En Viaje Conecta buscamos brindar experiencias turísticas y de entretenimiento de alta calidad, con una planeación clara y atención personalizada durante todo el proceso. Debido a la naturaleza de los servicios, las condiciones de cancelación, modificación y reembolso pueden variar dependiendo del tipo de experiencia, la fecha de reservación y los proveedores involucrados.',
        'La presente Política de Reembolsos y Devoluciones establece las condiciones aplicables a las solicitudes de cancelación, modificación y reembolso de los servicios contratados con Viaje Conecta.',
      ],
      sections: [
        {
          title: '1. Alcance de la política',
          blocks: [
            {
              type: 'p',
              text: 'Esta política aplica a todos los servicios y experiencias contratados a través de Viaje Conecta, incluyendo itinerarios personalizados, tours, actividades culturales, experiencias de naturaleza y aventura, actividades acuáticas, experiencias gastronómicas, catas, eventos urbanos y demás servicios turísticos u operativos ofrecidos.',
            },
            {
              type: 'p',
              text: 'Cada reservación podrá estar sujeta a condiciones particulares que serán comunicadas al cliente antes de confirmar el servicio.',
            },
          ],
        },
        {
          title: '2. Condiciones generales',
          blocks: [
            {
              type: 'p',
              text: 'Todos los servicios están sujetos a disponibilidad al momento de realizar la reservación.',
            },
            {
              type: 'p',
              text: 'Debido a que determinadas experiencias requieren la contratación o coordinación de proveedores externos (como transportistas, recintos, guías o establecimientos de hospedaje), las condiciones de cancelación y reembolso dependen en gran medida de las políticas establecidas por dichos terceros.',
            },
            {
              type: 'p',
              text: 'Antes de realizar un pago o confirmar una reservación, se recomienda revisar detalladamente las condiciones específicas indicadas en la cotización o confirmación del servicio. La aceptación de una cotización y el pago correspondiente implican la aceptación implícita de las condiciones particulares aplicables a la experiencia contratada.',
            },
          ],
        },
        {
          title: '3. Solicitudes de cancelación',
          blocks: [
            {
              type: 'p',
              text: 'Todas las solicitudes de cancelación deberán realizarse formalmente por escrito mediante el correo electrónico: atencion@viajeconecta.com',
            },
            { type: 'p', text: 'La solicitud deberá incluir los siguientes datos:' },
            {
              type: 'ul',
              items: [
                'Nombre completo de la persona que realizó la reservación.',
                'Número o referencia de la reservación o cotización.',
                'Fecha programada para la experiencia.',
                'Servicio o paquete contratado.',
                'Motivo de la cancelación.',
                'Datos de contacto para dar seguimiento a la solicitud.',
              ],
            },
            {
              type: 'p',
              text: 'La fecha y hora en que Viaje Conecta reciba la solicitud por correo electrónico será la considerada oficialmente para determinar la procedencia y los porcentajes o cargos de cancelación aplicables.',
            },
          ],
        },
        {
          title: '4. Cancelaciones con derecho a reembolso',
          blocks: [
            {
              type: 'p',
              text: 'Cuando las condiciones particulares de la experiencia permitan una cancelación con reembolso, el importe correspondiente será determinado de acuerdo con:',
            },
            {
              type: 'ul',
              items: [
                'La anticipación con la que se solicite la cancelación previa a la fecha del servicio.',
                'El tipo de servicio o paquete contratado.',
                'Las condiciones informadas expresamente en la cotización o confirmación.',
                'Los gastos administrativos o de gestión ya realizados.',
                'Los importes no reembolsables retenidos por proveedores externos.',
              ],
            },
            {
              type: 'p',
              text: 'Cuando corresponda un reembolso parcial, se descontarán los importes, cargos por servicio, comisiones bancarias o penalizaciones que no sean recuperables.',
            },
          ],
        },
        {
          title: '5. Servicios no reembolsables',
          blocks: [
            {
              type: 'p',
              text: 'Algunos servicios pueden ser total o parcialmente no reembolsables debido a compromisos contractuales con terceros o a la naturaleza de cupo limitado de la experiencia.',
            },
            { type: 'p', text: 'Entre ellos pueden encontrarse:' },
            {
              type: 'ul',
              items: [
                'Entradas a parques, recintos, sitios históricos o atracciones turísticas.',
                'Actividades con cupo limitado o reservación de fecha exclusiva.',
                'Experiencias gastronómicas o catas con insumos preparados con anticipación.',
                'Servicios de transporte privado contratados bajo demanda.',
                'Reservaciones de hospedaje bajo tarifas no reembolsables.',
                'Actividades acuáticas o de aventura con instructores o guías dedicados.',
                'Servicios adquiridos bajo promociones, descuentos o tarifas especiales.',
                'Cualquier concepto señalado expresamente como "no reembolsable" en la cotización o confirmación.',
              ],
            },
          ],
        },
        {
          title: '6. Cambios de fecha y reprogramación',
          blocks: [
            {
              type: 'p',
              text: 'El cliente podrá solicitar un cambio de fecha para su experiencia. La viabilidad de realizar el cambio dependerá de:',
            },
            {
              type: 'ul',
              items: [
                'Disponibilidad de cupo y fechas en la agenda para la nueva fecha solicitada.',
                'Condiciones y políticas de reprogramación de los proveedores participantes.',
                'Tipo de servicio o tarifa contratada.',
                'La anticipación con la que se envíe la solicitud.',
                'Diferencias de precio o tarifa aplicables según la temporada.',
              ],
            },
            {
              type: 'p',
              text: 'Los cambios solicitados por el cliente podrán generar cargos adicionales o nivelación de tarifas cuando resulten aplicables. Un cambio de fecha no se considerará confirmado hasta que Viaje Conecta lo comunique expresamente por escrito al cliente.',
            },
          ],
        },
        {
          title: '7. Ajustes en el itinerario',
          blocks: [
            {
              type: 'p',
              text: 'Los itinerarios pueden ajustarse antes o durante la prestación del servicio debido a razones climáticas, logísticas, operativas, de seguridad o causas de fuerza mayor.',
            },
            {
              type: 'p',
              text: 'Cuando sea necesario realizar una modificación en el itinerario, se procurará mantener el objetivo principal de la experiencia y ofrecer una alternativa equivalente. Los cambios o adiciones solicitados directamente por el cliente durante el desarrollo de la experiencia generarán costos adicionales que deberán ser cubiertos por el cliente.',
            },
          ],
        },
        {
          title: '8. Cancelación por condiciones climáticas',
          blocks: [
            {
              type: 'p',
              text: 'Ciertas experiencias al aire libre, en entornos naturales, acuáticos o de aventura dependen directamente de las condiciones del clima.',
            },
            {
              type: 'p',
              text: 'Cuando las condiciones meteorológicas representen un riesgo para la integridad de los participantes o impidan la realización segura de la actividad, Viaje Conecta o el operador a cargo podrán modificar, reprogramar o cancelar la experiencia.',
            },
            {
              type: 'p',
              text: 'En estos casos, se priorizará la reprogramación de la actividad en una fecha posterior. Si no fuera posible la reprogramación y correspondiera un reembolso conforme a las condiciones de los proveedores involucrados, se informará al cliente sobre el saldo a favor o el procedimiento de devolución aplicable.',
            },
          ],
        },
        {
          title: '9. Cancelación por fuerza mayor o caso fortuito',
          blocks: [
            {
              type: 'p',
              text: 'Una experiencia podrá ser modificada, reprogramada o cancelada debido a circunstancias fuera del control razonable de Viaje Conecta, tales como desastres naturales, emergencias sanitarias, restricciones gubernamentales, cierres viales o de recintos, manifestaciones, o fallas graves en la infraestructura local.',
            },
            {
              type: 'p',
              text: 'En tales situaciones, Viaje Conecta brindará la asistencia posible para ofrecer alternativas de reprogramación, créditos a favor o soluciones coordinadas con los proveedores directos.',
            },
          ],
        },
        {
          title: '10. Cancelaciones por parte de Viaje Conecta',
          blocks: [
            {
              type: 'p',
              text: 'En circunstancias excepcionales, Viaje Conecta podrá cancelar una experiencia cuando no sea posible garantizar la prestación segura o con los estándares de calidad correspondientes.',
            },
            { type: 'p', text: 'De presentarse esta situación, se notificará de inmediato al cliente y se le ofrecerá:' },
            {
              type: 'ul',
              items: [
                'Reprogramación de la experiencia para otra fecha sin costo adicional.',
                'Sustitución por una experiencia o paquete alternativo de valor equivalente.',
                'Crédito a favor para ser utilizado en futuros servicios.',
                'Reembolso del importe pagado sujeto a la recuperación de los fondos comprometidos con terceros.',
              ],
            },
          ],
        },
        {
          title: '11. Inasistencia del cliente (No Show)',
          blocks: [
            {
              type: 'p',
              text: 'Si el cliente o los participantes no se presentan en el punto de encuentro, lugar y horario establecidos en la confirmación del servicio, la reservación se considerará como utilizada (No Show).',
            },
            {
              type: 'p',
              text: 'La inasistencia no dará derecho a reembolso, devolución ni reprogramación del servicio, dado que los recursos, personal y logística quedan reservados de forma exclusiva para el grupo o participante. Se recomienda presentarse con al menos 15 minutos de anticipación al horario pactado.',
            },
          ],
        },
        {
          title: '12. Retrasos por parte del cliente',
          blocks: [
            {
              type: 'p',
              text: 'Los retrasos ocasionados por el cliente pueden afectar el desarrollo del itinerario programado.',
            },
            {
              type: 'p',
              text: 'Si un retraso provoca la pérdida de una actividad, reservación, entrada a un recinto o servicio de transporte, los costos adicionales que se generen para la reestructuración del servicio serán responsabilidad exclusiva del cliente. El personal operativo no estará obligado a extender la duración del servicio para compensar el tiempo perdido por retraso del usuario.',
            },
          ],
        },
        {
          title: '13. Gastos no reembolsables',
          blocks: [
            {
              type: 'p',
              text: 'En ningún caso serán objeto de reembolso o devolución los siguientes conceptos:',
            },
            {
              type: 'ul',
              items: [
                'Gastos personales de cualquier índole realizados durante el viaje o actividad.',
                'Propinas para guías, chóferes o personal de servicio.',
                'Alimentos, bebidas o compras no incluidos de origen en el paquete contratado.',
                'Entradas o actividades adicionales contratadas por cuenta del cliente fuera del programa.',
                'Gastos de transportación hacia el punto de encuentro inicial cuando este no forme parte del servicio contratado.',
                'Comisiones de pago, transferencias o diferencias cambiarias cobradas por instituciones bancarias.',
              ],
            },
          ],
        },
        {
          title: '14. Reembolsos por servicios de terceros',
          blocks: [
            {
              type: 'p',
              text: 'Cuando un servicio sea prestado total o parcialmente por un proveedor externo, el reembolso estará sujeto a las condiciones y tiempos de respuesta de dicho tercero. Viaje Conecta actuará como intermediario para gestionar la solicitud de devolución, pero el tiempo de resolución final dependerá de los procesos internos de cada empresa proveedora.',
            },
          ],
        },
        {
          title: '15. Método y tiempos de reembolso',
          blocks: [
            {
              type: 'p',
              text: 'Cuando proceda un reembolso, este se procesará preferentemente a través del mismo método de pago utilizado para la compra original (transferencia bancaria o tarjeta de crédito/débito).',
            },
            {
              type: 'p',
              text: 'El tiempo reflejado en la cuenta o estado de cuenta del cliente dependerá de la institución financiera o pasarela de pago correspondiente. Viaje Conecta no asumirá responsabilidad por los plazos de acreditación que dependan de los bancos emisores.',
            },
          ],
        },
        {
          title: '16. Procedimiento para solicitudes de reembolso',
          blocks: [
            {
              type: 'p',
              text: 'Toda solicitud formal de reembolso debe enviarse a: atencion@viajeconecta.com',
            },
            {
              type: 'p',
              text: 'Una vez recibida la información completa, nuestro equipo evaluará el caso en un plazo razonable y notificará al cliente por escrito la procedencia de la solicitud, desglosando, en su caso, los montos a devolver y los conceptos aplicados.',
            },
          ],
        },
        {
          title: '17. Modificaciones a esta política',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta se reserva el derecho de modificar o actualizar la presente Política de Reembolsos y Devoluciones en cualquier momento para reflejar cambios en nuestras operaciones, alianzas con proveedores o actualizaciones legislativas.',
            },
            {
              type: 'p',
              text: 'La versión vigente estará disponible en todo momento para su consulta en: https://viajeconecta.com/',
            },
          ],
        },
        {
          title: '18. Aceptación',
          blocks: [
            {
              type: 'p',
              text: 'Al realizar una reservación, anticipo o contratación con Viaje Conecta, el cliente reconoce haber leído, entendido y aceptado en su totalidad las condiciones de cancelación, modificación y reembolso aquí establecidas.',
            },
          ],
        },
        {
          title: '19. Canales de contacto',
          blocks: [
            {
              type: 'p',
              text: 'Para cualquier duda, aclaración, solicitud de cancelación o gestión de reembolso, puedes ponerte en contacto con nuestro equipo de atención:',
            },
            {
              type: 'ul',
              items: [
                'Viaje Conecta',
                'Dirección: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX',
                'Correo electrónico: atencion@viajeconecta.com',
                'Teléfono: +52 1 55 5662 5469',
                'Sitio web: viajeconecta.com',
              ],
            },
          ],
        },
      ],
    },
    en: {
      title: 'Return and Refund Policy',
      updated: 'November 2026',
      intro: [
        'At Viaje Conecta we aim to provide high-quality tourism and entertainment experiences, with clear planning and personalised attention throughout the entire process. Due to the nature of the services, cancellation, modification and refund conditions may vary depending on the type of experience, the booking date and the suppliers involved.',
        'This Return and Refund Policy sets out the conditions applicable to requests for cancellation, modification and refund of services contracted with Viaje Conecta.',
      ],
      sections: [
        {
          title: '1. Scope of this policy',
          blocks: [
            {
              type: 'p',
              text: 'This policy applies to all services and experiences contracted through Viaje Conecta, including tailor-made itineraries, tours, cultural activities, nature and adventure experiences, water activities, food experiences, tastings, urban events and any other tourism or operational services offered.',
            },
            {
              type: 'p',
              text: 'Each booking may be subject to particular conditions, which will be communicated to the client before the service is confirmed.',
            },
          ],
        },
        {
          title: '2. General conditions',
          blocks: [
            {
              type: 'p',
              text: 'All services are subject to availability at the time of booking.',
            },
            {
              type: 'p',
              text: 'Because certain experiences require the contracting or coordination of external suppliers (such as transport providers, venues, guides or accommodation establishments), the cancellation and refund conditions depend to a large extent on the policies established by those third parties.',
            },
            {
              type: 'p',
              text: 'Before making a payment or confirming a booking, you should carefully review the specific conditions indicated in the quotation or service confirmation. Accepting a quotation and making the corresponding payment imply implicit acceptance of the particular conditions applicable to the contracted experience.',
            },
          ],
        },
        {
          title: '3. Cancellation requests',
          blocks: [
            {
              type: 'p',
              text: 'All cancellation requests must be made formally in writing by email to: atencion@viajeconecta.com',
            },
            { type: 'p', text: 'The request must include the following information:' },
            {
              type: 'ul',
              items: [
                'Full name of the person who made the booking.',
                'Booking or quotation number or reference.',
                'Scheduled date of the experience.',
                'Service or package contracted.',
                'Reason for cancellation.',
                'Contact details for follow-up on the request.',
              ],
            },
            {
              type: 'p',
              text: 'The date and time on which Viaje Conecta receives the request by email will be the one officially considered to determine the applicable validity and cancellation percentages or charges.',
            },
          ],
        },
        {
          title: '4. Cancellations eligible for a refund',
          blocks: [
            {
              type: 'p',
              text: 'When the particular conditions of the experience allow a cancellation with refund, the corresponding amount will be determined in accordance with:',
            },
            {
              type: 'ul',
              items: [
                'How far in advance the cancellation is requested before the service date.',
                'The type of service or package contracted.',
                'The conditions expressly stated in the quotation or confirmation.',
                'Administrative or management costs already incurred.',
                'Non-refundable amounts retained by external suppliers.',
              ],
            },
            {
              type: 'p',
              text: 'When a partial refund applies, amounts, service charges, bank commissions or penalties that are not recoverable will be deducted.',
            },
          ],
        },
        {
          title: '5. Non-refundable services',
          blocks: [
            {
              type: 'p',
              text: 'Some services may be fully or partially non-refundable due to contractual commitments with third parties or the limited-capacity nature of the experience.',
            },
            { type: 'p', text: 'These may include:' },
            {
              type: 'ul',
              items: [
                'Tickets to parks, venues, historical sites or tourist attractions.',
                'Activities with limited capacity or exclusive-date reservations.',
                'Food experiences or tastings with ingredients prepared in advance.',
                'Private transport services contracted on demand.',
                'Accommodation bookings under non-refundable rates.',
                'Water or adventure activities with dedicated instructors or guides.',
                'Services purchased under promotions, discounts or special rates.',
                'Any item expressly designated as “non-refundable” in the quotation or confirmation.',
              ],
            },
          ],
        },
        {
          title: '6. Date changes and rescheduling',
          blocks: [
            {
              type: 'p',
              text: 'The client may request a date change for their experience. Whether the change is possible will depend on:',
            },
            {
              type: 'ul',
              items: [
                'Availability of places and dates in the schedule for the new requested date.',
                'The rescheduling conditions and policies of the participating suppliers.',
                'The type of service or rate contracted.',
                'How far in advance the request is sent.',
                'Price or rate differences applicable according to the season.',
              ],
            },
            {
              type: 'p',
              text: 'Changes requested by the client may generate additional charges or rate adjustments where applicable. A date change will not be considered confirmed until Viaje Conecta expressly communicates it to the client in writing.',
            },
          ],
        },
        {
          title: '7. Itinerary adjustments',
          blocks: [
            {
              type: 'p',
              text: 'Itineraries may be adjusted before or during the provision of the service due to weather, logistical, operational or security reasons, or force majeure.',
            },
            {
              type: 'p',
              text: 'When an itinerary modification is necessary, every effort will be made to preserve the main purpose of the experience and to offer an equivalent alternative. Changes or additions requested directly by the client during the experience will generate additional costs, which must be covered by the client.',
            },
          ],
        },
        {
          title: '8. Cancellation due to weather conditions',
          blocks: [
            {
              type: 'p',
              text: 'Certain outdoor, nature, water or adventure experiences depend directly on weather conditions.',
            },
            {
              type: 'p',
              text: 'When weather conditions pose a risk to the safety of participants or prevent the activity from being carried out safely, Viaje Conecta or the operator in charge may modify, reschedule or cancel the experience.',
            },
            {
              type: 'p',
              text: 'In these cases, priority will be given to rescheduling the activity for a later date. If rescheduling is not possible and a refund is applicable in accordance with the conditions of the suppliers involved, the client will be informed of the credit balance or the applicable return procedure.',
            },
          ],
        },
        {
          title: '9. Cancellation due to force majeure or unforeseen events',
          blocks: [
            {
              type: 'p',
              text: 'An experience may be modified, rescheduled or cancelled due to circumstances beyond the reasonable control of Viaje Conecta, such as natural disasters, health emergencies, government restrictions, road or venue closures, demonstrations, or serious failures in local infrastructure.',
            },
            {
              type: 'p',
              text: 'In such situations, Viaje Conecta will provide all possible assistance to offer rescheduling alternatives, credits in favour of the client or solutions coordinated with the direct suppliers.',
            },
          ],
        },
        {
          title: '10. Cancellations by Viaje Conecta',
          blocks: [
            {
              type: 'p',
              text: 'In exceptional circumstances, Viaje Conecta may cancel an experience when it is not possible to guarantee safe provision or the corresponding quality standards.',
            },
            { type: 'p', text: 'If this situation arises, the client will be notified immediately and offered:' },
            {
              type: 'ul',
              items: [
                'Rescheduling of the experience for another date at no additional cost.',
                'Replacement with an alternative experience or package of equivalent value.',
                'A credit in favour of the client to be used on future services.',
                'A refund of the amount paid, subject to recovery of the funds committed to third parties.',
              ],
            },
          ],
        },
        {
          title: '11. Client no-show',
          blocks: [
            {
              type: 'p',
              text: 'If the client or the participants do not appear at the meeting point, place and time established in the service confirmation, the booking will be considered used (No Show).',
            },
            {
              type: 'p',
              text: 'A no-show will not give rise to a refund, return or rescheduling of the service, since the resources, staff and logistics are reserved exclusively for the group or participant. Participants are advised to arrive at least 15 minutes before the agreed time.',
            },
          ],
        },
        {
          title: '12. Delays by the client',
          blocks: [
            {
              type: 'p',
              text: 'Delays caused by the client may affect the development of the scheduled itinerary.',
            },
            {
              type: 'p',
              text: 'If a delay causes the loss of an activity, reservation, entry to a venue or transport service, the additional costs generated by restructuring the service will be the sole responsibility of the client. Operational staff will not be obliged to extend the duration of the service to compensate for time lost due to the user’s delay.',
            },
          ],
        },
        {
          title: '13. Non-refundable expenses',
          blocks: [
            {
              type: 'p',
              text: 'Under no circumstances will the following items be subject to refund or return:',
            },
            {
              type: 'ul',
              items: [
                'Personal expenses of any kind incurred during the trip or activity.',
                'Tips for guides, drivers or service staff.',
                'Food, drinks or purchases not originally included in the contracted package.',
                'Additional tickets or activities contracted by the client outside the programme.',
                'Transport costs to the initial meeting point when this is not part of the contracted service.',
                'Payment commissions, transfers or exchange-rate differences charged by banking institutions.',
              ],
            },
          ],
        },
        {
          title: '14. Refunds for third-party services',
          blocks: [
            {
              type: 'p',
              text: 'When a service is provided wholly or partly by an external supplier, the refund will be subject to that third party’s conditions and response times. Viaje Conecta will act as an intermediary to manage the return request, but the final resolution time will depend on each supplier company’s internal processes.',
            },
          ],
        },
        {
          title: '15. Refund method and timescales',
          blocks: [
            {
              type: 'p',
              text: 'Where a refund applies, it will preferably be processed through the same payment method used for the original purchase (bank transfer or credit/debit card).',
            },
            {
              type: 'p',
              text: 'The time reflected in the client’s account or statement will depend on the corresponding financial institution or payment gateway. Viaje Conecta will not be liable for crediting periods that depend on issuing banks.',
            },
          ],
        },
        {
          title: '16. Procedure for refund requests',
          blocks: [
            {
              type: 'p',
              text: 'All formal refund requests must be sent to: atencion@viajeconecta.com',
            },
            {
              type: 'p',
              text: 'Once the complete information has been received, our team will assess the case within a reasonable period and notify the client in writing of the outcome of the request, itemising, where applicable, the amounts to be returned and the concepts applied.',
            },
          ],
        },
        {
          title: '17. Amendments to this policy',
          blocks: [
            {
              type: 'p',
              text: 'Viaje Conecta reserves the right to modify or update this Return and Refund Policy at any time to reflect changes in our operations, supplier partnerships or legislative updates.',
            },
            {
              type: 'p',
              text: 'The current version will be available for consultation at all times at: https://viajeconecta.com/',
            },
          ],
        },
        {
          title: '18. Acceptance',
          blocks: [
            {
              type: 'p',
              text: 'By making a booking, deposit or contracting with Viaje Conecta, the client acknowledges having read, understood and fully accepted the cancellation, modification and refund conditions set out herein.',
            },
          ],
        },
        {
          title: '19. Contact channels',
          blocks: [
            {
              type: 'p',
              text: 'For any questions, clarifications, cancellation requests or refund management, you may contact our customer service team:',
            },
            {
              type: 'ul',
              items: [
                'Viaje Conecta',
                'Address: Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Mexico City, CDMX',
                'Email: atencion@viajeconecta.com',
                'Phone: +52 1 55 5662 5469',
                'Website: viajeconecta.com',
              ],
            },
          ],
        },
      ],
    },
  },
};
