export const observabilidadExtraida = {
  "documento": {
    "id": "observabilidad",
    "titulo": "Observabilidad",
    "fuente": "portal-antiguo",
    "capitulos": [
      {
        "id": "adopcion",
        "titulo": "Adopción",
        "resumenCapitulo": "Fundamentos de observabilidad, OpenTelemetry y su aplicación en el modelo corporativo.",
        "temas": [
          {
            "id": "fundamentos",
            "titulo": "Fundamentos de observabilidad",
            "bajada": "Propósito, alcance y alineación con los objetivos del negocio.",
            "modoLectura": "unico",
            "resumen": [],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Observabilidad como capacidad de ingeniería"
              },
              {
                "tipo": "parrafo",
                "texto": "**La observabilidad permite comprender el comportamiento interno de un sistema a partir de las señales que produce.** En una organización digital, esta capacidad conecta la operación técnica con la experiencia del cliente y los resultados del negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "Una operación puede atravesar múltiples servicios y dependencias. Para evaluar su resultado, el equipo necesita relacionar esas interacciones, identificar desviaciones y sustentar una decisión con evidencias. Este apartado establece el propósito, el alcance funcional y el papel de **OpenTelemetry (OTel)** en la adopción de observabilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Qué significa hacer observabilidad en la organización](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808138264) y [definición de OpenTelemetry](https://opentelemetry.io/docs/what-is-opentelemetry/)."
              },
              {
                "tipo": "acordeon",
                "titulo": "Comprender el servicio",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "El servicio se comprende a partir de sus consumidores, operaciones, responsables y dependencias.",
                    "caption": "El servicio se comprende a partir de sus consumidores, operaciones, responsables y dependencias.",
                    "src": "/images/observabilidad/adopcion/comprender-servicio.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Comprender el servicio implica establecer su propósito, sus límites y las condiciones bajo las cuales entrega el resultado esperado. Esta definición permite seleccionar señales relevantes y evaluar el impacto de una degradación sobre los consumidores y el negocio."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Propósito y alcance funcional**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Describir qué capacidad ofrece el servicio, quién la consume y qué resultado produce. Delimitar las funciones que controla directamente y aquellas que dependen de otros equipos o proveedores. Identificar los canales de entrada, las salidas y los ambientes incluidos en el análisis."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "El alcance debe permitir distinguir entre la disponibilidad técnica del componente y el cumplimiento de la función de negocio. Una respuesta HTTP satisfactoria, por ejemplo, puede confirmar la recepción de una solicitud sin demostrar que su procesamiento haya finalizado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Operaciones críticas y criterios de resultado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar las operaciones cuya interrupción, demora o resultado incorrecto afecta de forma relevante a los consumidores. Para cada una, documentar el evento de inicio, la condición de finalización y los resultados posibles: éxito, rechazo funcional, error técnico o procesamiento pendiente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Definir qué significa una ejecución correcta y dentro de qué condiciones se evalúa. Los objetivos de tiempo, disponibilidad o calidad deben acordarse con los responsables del servicio; no se deducen automáticamente de la instrumentación ni de umbrales genéricos."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Dependencias y límites de responsabilidad**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar las APIs, bases de datos, colas, procesos programados y servicios externos que participan en las operaciones críticas. Para cada dependencia, identificar su función, el equipo responsable y el efecto de una falla sobre el resultado final."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "En procesos asíncronos, distinguir recepción, procesamiento y confirmación. Considerar también reintentos, vencimientos y duplicados cuando correspondan al diseño. Esta descripción permite determinar qué evidencia se necesita en cada etapa y dónde puede perderse continuidad."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Contexto operativo e impacto**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar los patrones de demanda, períodos de mayor actividad y restricciones operativas relevantes. Describir cómo se manifiesta una degradación para el consumidor: operaciones incompletas, aumento de espera, resultados inconsistentes o indisponibilidad de una función."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Evaluar el impacto según las operaciones y usuarios afectados, la duración y la existencia de alternativas operativas. Mantener separados los hechos observados de las hipótesis sobre su causa."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Responsables y coordinación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar al responsable funcional, al equipo que mantiene el servicio y a los responsables de sus dependencias críticas. Aclarar quién interpreta los indicadores, quién coordina la atención de una degradación y quién verifica la recuperación del resultado de negocio."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Estas funciones deben corresponder al modelo operativo existente. La documentación de adopción registra la distribución acordada y sus canales de coordinación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**6. Evidencia necesaria para evaluar el servicio**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Relacionar cada operación crítica con las señales que permiten comprobar su resultado. Definir el significado del indicador, su origen, el período de evaluación y las dimensiones necesarias, como servicio y ambiente. La selección debe considerar la calidad, cobertura y tratamiento de los datos."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Aspecto a evaluar",
                      "Evidencia a definir"
                    ],
                    "filas": [
                      [
                        "Cumplimiento funcional",
                        "Operaciones iniciadas, finalizadas y rechazadas, con criterios de clasificación explícitos."
                      ],
                      [
                        "Tiempo de ejecución",
                        "Duración de la operación y de las dependencias relevantes, indicando dónde comienza y termina la medición."
                      ],
                      [
                        "Errores e interrupciones",
                        "Fallas técnicas diferenciadas de rechazos esperados y estados pendientes."
                      ],
                      [
                        "Procesamiento asíncrono",
                        "Estado de avance, antigüedad de pendientes y confirmación de finalización, cuando corresponda."
                      ],
                      [
                        "Impacto y recuperación",
                        "Alcance de la afectación y evidencia de que el resultado esperado se restableció."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una descripción compartida del servicio que reúna propósito, consumidores, operaciones críticas, criterios de resultado, dependencias, responsables y evidencias de evaluación. Esta información sirve como referencia para la instrumentación, la interpretación de señales y las decisiones operativas."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La descripción debe revisarse cuando cambien las funciones del servicio, sus dependencias o las condiciones acordadas con el negocio. Constituye una guía de análisis para la adopción; no establece nuevos requisitos corporativos ni una certificación de cumplimiento."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Relacionar las evidencias",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "Métricas, logs y trazas se relacionan mediante un contexto común; la correlación debe investigarse antes de atribuir causalidad.",
                    "caption": "Métricas, logs y trazas se relacionan mediante un contexto común; la correlación debe investigarse antes de atribuir causalidad.",
                    "src": "/images/observabilidad/adopcion/relacionar-evidencias.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Relacionar las evidencias consiste en integrar las señales disponibles para construir una explicación verificable del comportamiento del servicio. El análisis debe conectar el resultado de negocio con la ejecución técnica, identificar el alcance de una desviación y explicitar qué conclusiones pueden sostenerse con los datos observados."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La coincidencia temporal entre dos eventos no demuestra una relación causal. La interpretación requiere contexto compartido, cobertura suficiente y contraste entre fuentes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Delimitar la pregunta de análisis**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Definir qué se necesita explicar antes de consultar la telemetría: una variación en errores, una demora, una operación incompleta o una diferencia respecto del comportamiento esperado. Precisar el servicio, el ambiente, las operaciones afectadas y el período de investigación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Establecer un punto de comparación pertinente, como un período de demanda similar o un objetivo acordado. Registrar las diferencias de carga, configuración o versión que puedan afectar la comparación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Establecer un contexto común**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Comprobar que las fuentes utilizadas correspondan al mismo servicio, ambiente y ventana temporal. Revisar la zona horaria y distinguir la hora de ocurrencia de la hora de recepción cuando exista retraso en la entrega de señales."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Utilizar identificadores de traza y operación cuando estén disponibles y su propagación haya sido validada. En procesos asíncronos, comprobar que la relación entre recepción, procesamiento y finalización pueda reconstruirse. Si falta continuidad, registrar el límite de la correlación en lugar de asumir una asociación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Los identificadores empleados deben respetar los criterios de tratamiento de datos. Su utilidad para investigar una operación no justifica incorporarlos indiscriminadamente como dimensiones de métricas."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Combinar perspectivas complementarias**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Cada tipo de señal aporta una perspectiva distinta. El análisis debe contrastarlas según la pregunta planteada, evitando atribuir a una fuente un alcance que no tiene."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Evidencia",
                      "Aporte al análisis",
                      "Criterio de interpretación"
                    ],
                    "filas": [
                      [
                        "Métricas",
                        "Dimensionar frecuencia, duración y evolución del comportamiento.",
                        "Revisar definición, agregación, unidad, período y población medida."
                      ],
                      [
                        "Trazas",
                        "Examinar la ejecución y las dependencias de operaciones concretas.",
                        "Considerar cobertura de instrumentación y muestreo; una traza no representa todas las operaciones."
                      ],
                      [
                        "Logs",
                        "Aportar detalle sobre eventos y errores de una ejecución.",
                        "Comprobar contexto, severidad y relación con la operación; considerar duplicación o registros incompletos."
                      ],
                      [
                        "Eventos de negocio",
                        "Confirmar transiciones o resultados del dominio.",
                        "Verificar su significado funcional y el momento en que se emiten."
                      ],
                      [
                        "Experiencia de usuario",
                        "Contrastar el comportamiento técnico con lo observado desde el cliente.",
                        "Considerar el alcance de captura y las diferencias entre navegador, red y backend."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Evaluar calidad y cobertura**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Antes de concluir, comprobar si las señales cubren las operaciones investigadas. Considerar muestreo, filtros, retrasos de ingestión, pérdida de datos y diferencias entre versiones de instrumentación. Revisar también si los permisos o filtros de consulta restringen la evidencia visible."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La ausencia de un registro no demuestra por sí sola que una operación no haya ocurrido. Del mismo modo, una reducción de errores registrados puede reflejar un cambio de captura y no una mejora del servicio."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Formular y contrastar hipótesis**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Separar los hechos observados de las explicaciones posibles. Para cada hipótesis, indicar qué evidencia la respalda, qué observación la contradice y qué comprobación adicional permitiría evaluarla."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Contrastar la secuencia de ejecución, las dependencias y los cambios relevantes del servicio. Un despliegue o un cambio de configuración cercano al inicio de una degradación constituye un antecedente de investigación, no una confirmación automática de causa."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Cuando las fuentes presenten resultados diferentes, revisar primero su alcance, semántica y período de medición. Mantener explícitas las hipótesis alternativas y las incertidumbres que no hayan podido resolverse."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**6. Conservar trazabilidad del análisis**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar la pregunta investigada, las consultas utilizadas, los filtros, el período y las fuentes consultadas. Documentar los hallazgos, las limitaciones de cobertura y la conclusión obtenida, de forma que otro integrante del equipo pueda revisar el razonamiento."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Utilizar referencias a las evidencias y muestras sanitizadas cuando corresponda. Evitar trasladar credenciales o datos sensibles a documentos, conversaciones o tickets de seguimiento."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una síntesis que identifique el comportamiento observado, su alcance sobre el servicio, las dependencias involucradas y el grado de respaldo de la explicación. Debe distinguir hechos confirmados, hipótesis pendientes y evidencia faltante."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Esta síntesis proporciona la base para evaluar acciones operativas y comprobar posteriormente su resultado. Una explicación parcial debe presentarse como tal; el volumen de telemetría consultada no sustituye la calidad del razonamiento ni la validación de la conclusión."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Orientar una decisión",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "Las evidencias permiten comparar alternativas y seleccionar una acción vinculada a un resultado medible.",
                    "caption": "Las evidencias permiten comparar alternativas y seleccionar una acción vinculada a un resultado medible.",
                    "src": "/images/observabilidad/adopcion/orientar-decision.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Orientar una decisión consiste en utilizar la evidencia disponible para seleccionar una acción proporcional al impacto observado, al nivel de incertidumbre y a las responsabilidades del equipo. La observabilidad aporta fundamentos para decidir; la autorización y la ejecución corresponden al modelo operativo y de gestión de cambios aplicable."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una decisión debe expresar qué resultado se busca, por qué se elige una alternativa y cómo se comprobará su efecto. También debe reconocer las limitaciones del análisis y los riesgos que permanecen abiertos."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Definir el resultado que se necesita proteger**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Precisar la operación afectada y el efecto sobre los consumidores: interrupción, demora, resultado incorrecto o procesamiento pendiente. Establecer si la prioridad es contener el impacto, recuperar el servicio, resolver la causa o mejorar su comportamiento a mediano plazo."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Distinguir la recuperación técnica del restablecimiento funcional. Que un componente vuelva a responder no demuestra que las operaciones pendientes se hayan completado ni que la experiencia del consumidor se haya normalizado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Evaluar urgencia y suficiencia de la evidencia**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Considerar el alcance, la duración y la evolución de la afectación, junto con la existencia de alternativas operativas. Separar los hechos confirmados de las hipótesis y determinar qué información adicional podría cambiar la decisión."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Cuando la urgencia requiera actuar antes de confirmar la causa, documentar la incertidumbre y seleccionar una intervención cuyo efecto pueda observarse y controlarse. Si el impacto permite continuar el análisis, definir la comprobación pendiente y el momento de reevaluación. Esperar constituye una decisión explícita y requiere seguimiento."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Comparar alternativas de actuación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Evaluar las opciones según el beneficio esperado, el riesgo introducido, la reversibilidad y el tiempo necesario para verificar su efecto. Las acciones concretas dependen del diseño del servicio y deben seguir los procedimientos autorizados."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Alternativa",
                      "Propósito",
                      "Aspectos que deben evaluarse"
                    ],
                    "filas": [
                      [
                        "Contención",
                        "Limitar la propagación o el alcance de la afectación.",
                        "Funciones restringidas, consumidores afectados y duración prevista de la medida."
                      ],
                      [
                        "Recuperación",
                        "Restablecer el resultado esperado del servicio.",
                        "Dependencias, operaciones pendientes y evidencia de recuperación funcional."
                      ],
                      [
                        "Corrección",
                        "Resolver una causa suficientemente sustentada.",
                        "Validación del cambio, efectos secundarios y mecanismo de reversión."
                      ],
                      [
                        "Investigación adicional",
                        "Reducir incertidumbre antes de intervenir.",
                        "Evidencia faltante, costo de esperar y condición para escalar."
                      ],
                      [
                        "Mejora planificada",
                        "Reducir recurrencia o mejorar desempeño y eficiencia.",
                        "Prioridad, beneficio esperado y capacidad necesaria para implementarla."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La medida de menor tiempo de ejecución no necesariamente presenta el menor riesgo. Considerar su efecto sobre otros servicios, la integridad de las operaciones y la posibilidad de trasladar la afectación a otra dependencia."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Establecer responsables y condiciones de ejecución**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar quién decide, quién autoriza cuando corresponda, quién ejecuta y quién verifica el resultado. Coordinar con los responsables de las dependencias involucradas y utilizar los canales establecidos para comunicar alcance, estado y próximos pasos."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Antes de intervenir, definir el ámbito del cambio, las condiciones para detenerlo y el mecanismo de reversión o recuperación aplicable. Las recomendaciones generadas por herramientas de análisis deben someterse a la misma evaluación técnica y operativa que cualquier otra propuesta."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Definir cómo se verificará el resultado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Seleccionar indicadores vinculados al objetivo de la acción y registrar la situación previa. Acordar un período de observación pertinente al comportamiento del servicio, considerando demanda, retrasos de procesamiento y cobertura de las señales."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Dimensión",
                      "Criterio de verificación"
                    ],
                    "filas": [
                      [
                        "Resultado funcional",
                        "Las operaciones relevantes alcanzan la condición de finalización acordada."
                      ],
                      [
                        "Desempeño",
                        "La duración y los errores se evalúan frente a la referencia definida para el servicio."
                      ],
                      [
                        "Alcance",
                        "La mejora comprende los consumidores, ambientes y dependencias afectados."
                      ],
                      [
                        "Efectos secundarios",
                        "No se observan nuevas degradaciones atribuibles a la intervención en el ámbito evaluado."
                      ],
                      [
                        "Sostenibilidad",
                        "El comportamiento se mantiene durante el período de observación acordado."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una reducción de alertas no basta para declarar resuelto el problema. Contrastar el resultado con las operaciones de negocio y comprobar que la mejora no se deba a una pérdida de visibilidad o a un cambio en los filtros de captura."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**6. Registrar la decisión y revisar su efecto**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Documentar la evidencia utilizada, las alternativas consideradas, la justificación, los responsables y los criterios de éxito. Registrar la acción ejecutada, sus resultados y las desviaciones respecto de lo esperado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Si la acción no produce el efecto previsto, reevaluar las hipótesis y aplicar las condiciones de detención o recuperación definidas. Si el resultado es favorable, determinar si corresponde cerrar la actuación, mantener seguimiento o planificar una corrección adicional. Una mitigación exitosa puede restablecer el servicio sin eliminar la causa subyacente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una decisión trazable que vincule el problema observado con una acción, un responsable y un criterio verificable de resultado. El registro debe permitir comprender qué se sabía al decidir, qué incertidumbres existían y qué se confirmó después de ejecutar."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Los hallazgos deben alimentar las mejoras pertinentes en instrumentación, documentación operativa y prácticas del equipo. Este marco orienta el análisis y no sustituye las autorizaciones, los procedimientos de incidentes ni los controles de cambio vigentes."
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Alineación con los objetivos del negocio"
              },
              {
                "tipo": "parrafo",
                "texto": "**La adopción debe vincular la evidencia técnica con los resultados del servicio.** La disponibilidad individual de los componentes no garantiza el cumplimiento de una operación de extremo a extremo. El análisis considera las dependencias y su efecto sobre el resultado esperado."
              },
              {
                "tipo": "parrafo",
                "texto": "El marco de análisis comprende cuatro elementos: resultado esperado, desviación observada, dependencia involucrada y decisión verificable."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Principios de ingeniería](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055746)."
              },
              {
                "tipo": "acordeon",
                "titulo": "Resultado esperado",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "El resultado esperado corresponde a la operación completada y sus criterios de aceptación, no solo a la recepción de la solicitud.",
                    "caption": "El resultado esperado corresponde a la operación completada y sus criterios de aceptación, no solo a la recepción de la solicitud.",
                    "src": "/images/observabilidad/adopcion/resultado-esperado.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "El resultado esperado describe el valor que una operación debe entregar a su consumidor y las condiciones que permiten considerarla satisfactoria. Su definición establece una referencia compartida entre Producto, Ingeniería y los responsables de la operación para evaluar el comportamiento del servicio."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La referencia debe expresar un resultado funcional verificable. La disponibilidad de un proceso, la recepción de una solicitud o una respuesta técnica exitosa pueden ser evidencias intermedias, pero no necesariamente confirman que la operación de negocio haya concluido."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Definir el resultado funcional**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar qué solicita el consumidor, qué cambio de estado o respuesta espera y en qué momento se considera completada la operación. Delimitar el inicio y el final del proceso para evitar que distintos equipos midan etapas diferentes bajo un mismo indicador."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Cuando la operación atraviese varios servicios, distinguir el resultado de cada componente del resultado de extremo a extremo. En procesos asíncronos, registrar por separado la aceptación de la solicitud y la confirmación de su finalización."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Establecer criterios de aceptación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Acordar las condiciones que debe cumplir el resultado: integridad de la información, consistencia del estado, oportunidad de la respuesta y disponibilidad para el consumidor. Incluir las restricciones relevantes del servicio y las condiciones bajo las cuales se evalúan."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Los objetivos cuantitativos deben responder a necesidades del negocio y acuerdos del servicio. Los valores de referencia no deben inferirse de configuraciones predeterminadas de una herramienta ni establecerse sin identificar su ámbito y responsable."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Dimensión",
                      "Definición que debe acordarse"
                    ],
                    "filas": [
                      [
                        "Cumplimiento funcional",
                        "Estado o respuesta que demuestra que la operación entregó el resultado previsto."
                      ],
                      [
                        "Oportunidad",
                        "Tiempo de finalización o condición temporal aceptable, con inicio y fin de medición explícitos."
                      ],
                      [
                        "Integridad y consistencia",
                        "Datos y estados que deben conservarse correctamente durante la operación."
                      ],
                      [
                        "Alcance",
                        "Consumidores, canales, ambientes y tipos de operación incluidos en la evaluación."
                      ],
                      [
                        "Condiciones de operación",
                        "Demanda y restricciones bajo las cuales se interpreta el resultado."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Clasificar los resultados posibles**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Diferenciar éxito funcional, rechazo esperado, falla técnica y procesamiento pendiente. Un rechazo por una regla de negocio puede representar un comportamiento correcto del servicio, aunque no complete la intención del consumidor. Su clasificación debe quedar explícita para no confundirla con una falla de disponibilidad."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Definir cómo se interpretan resultados parciales, vencimientos, cancelaciones y reintentos cuando correspondan al diseño. Esta clasificación permite calcular indicadores con una población y un significado consistentes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Vincular el resultado con indicadores y evidencias**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Para cada criterio, identificar la señal que permite comprobarlo, su origen y el momento en que se genera. Precisar la unidad de medida, el período de evaluación y las exclusiones aplicables. Si se utiliza una proporción, definir tanto el numerador como el denominador."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Contrastar la evidencia técnica con el estado funcional de la operación. Las métricas permiten evaluar el comportamiento agregado; el detalle de las operaciones permite investigar desviaciones. La cobertura de instrumentación debe ser suficiente para sostener la interpretación del indicador."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Acordar responsables y mantener la referencia**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar quién valida el significado funcional del resultado, quién implementa su medición y quién revisa el comportamiento observado. Registrar los acuerdos y su fecha de revisión para que los equipos utilicen una referencia común."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Actualizar la definición cuando cambien las reglas del negocio, los consumidores, las dependencias o las condiciones operativas. Un cambio de criterio debe quedar identificado para evitar comparaciones históricas que mezclen definiciones distintas."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una definición por operación relevante que incluya propósito, consumidor, condición de inicio y finalización, criterios de aceptación, clasificación de resultados, indicadores, fuentes de evidencia y responsables."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Esta referencia permite reconocer una desviación y dimensionar su impacto. No constituye por sí sola un acuerdo de nivel de servicio ni reemplaza el proceso de aprobación de objetivos aplicable en la organización."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Desviación observada",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "La señal observada se compara con una referencia para delimitar cuándo ocurre la desviación y qué servicios afecta.",
                    "caption": "La señal observada se compara con una referencia para delimitar cuándo ocurre la desviación y qué servicios afecta.",
                    "src": "/images/observabilidad/adopcion/desviacion-observada.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una desviación observada es una diferencia verificable entre el resultado esperado y el comportamiento registrado del servicio. Puede manifestarse como operaciones incompletas, resultados incorrectos, aumento de duración, incremento de errores o cambios relevantes en el volumen procesado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La desviación describe qué cambió y cuál es su alcance. No constituye por sí sola una causa raíz ni debe atribuirse automáticamente al componente donde se detectó la primera señal."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Identificar la referencia de comparación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Comparar el comportamiento observado con una referencia explícita: el criterio funcional acordado, un objetivo de servicio vigente o un período comparable. Registrar la referencia utilizada y comprobar que conserva la misma definición, población y método de medición."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una comparación histórica debe considerar cambios de demanda, versión, configuración e instrumentación. Si la referencia no es equivalente, documentar la limitación y evitar presentar la diferencia como una degradación confirmada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Delimitar el alcance**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Precisar cuándo comenzó la desviación, si continúa activa y qué ambientes, servicios, operaciones y consumidores están afectados. Identificar si el comportamiento es continuo, intermitente o concentrado en una condición específica."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Dimensión",
                      "Información que debe registrarse"
                    ],
                    "filas": [
                      [
                        "Tiempo",
                        "Inicio estimado, duración, recurrencia y última observación disponible."
                      ],
                      [
                        "Ámbito técnico",
                        "Servicios, versiones, ambientes y dependencias relacionadas."
                      ],
                      [
                        "Ámbito funcional",
                        "Operaciones, canales y tipos de resultado afectados."
                      ],
                      [
                        "Consumidores",
                        "Grupos o segmentos alcanzados, sin incorporar datos personales innecesarios."
                      ],
                      [
                        "Magnitud",
                        "Volumen o proporción afectada y referencia utilizada para interpretarla."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Clasificar el comportamiento observado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Distinguir la naturaleza de la desviación para orientar la investigación y evitar mezclar fenómenos diferentes:"
                  },
                  {
                    "tipo": "lista",
                    "ordenada": false,
                    "items": [
                      "**Disponibilidad:** la operación no puede iniciarse o completarse.",
                      "**Corrección funcional:** la operación finaliza con un resultado distinto del esperado.",
                      "**Desempeño:** la operación se completa, pero fuera de las condiciones temporales acordadas.",
                      "**Capacidad:** el comportamiento cambia ante determinados niveles de demanda o utilización de recursos.",
                      "**Integridad o continuidad:** existen estados inconsistentes, duplicados, pérdidas o procesos pendientes.",
                      "**Visibilidad:** la evidencia es insuficiente o presenta cambios de cobertura que impiden evaluar el resultado."
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una misma situación puede abarcar más de una categoría. El registro debe indicar cuáles se confirmaron mediante evidencia y cuáles permanecen como hipótesis."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Verificar la calidad de la observación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Comprobar que el cambio no se origine únicamente en una modificación de dashboards, consultas, filtros, muestreo o instrumentación. Revisar retrasos de ingestión, ventanas de agregación, unidades y cobertura de las señales utilizadas."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Contrastar más de una fuente cuando sea pertinente. La ausencia de datos debe tratarse como una limitación de visibilidad hasta confirmar si representa falta de actividad, pérdida de telemetría o restricciones de consulta."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Dimensionar el impacto**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Relacionar la magnitud técnica con el resultado funcional. Evaluar cuántas operaciones no alcanzaron su condición esperada, durante cuánto tiempo y con qué consecuencias para los consumidores. Considerar la existencia de alternativas operativas, reprocesamiento o recuperación automática."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Evitar clasificar la relevancia únicamente por el número absoluto de errores. Un volumen reducido puede tener alto impacto si afecta una operación crítica; un volumen elevado puede corresponder a rechazos funcionales esperados."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**6. Construir una línea temporal verificable**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar los principales hitos: última observación normal, primera evidencia de desviación, cambios de versión o configuración, variaciones en dependencias y acciones realizadas. Utilizar marcas de tiempo consistentes y señalar cualquier diferencia de zona horaria o retraso de recepción."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La proximidad entre un cambio y el inicio de la desviación permite formular una hipótesis, pero no confirma causalidad. La línea temporal debe separar hechos registrados, inferencias y datos aún pendientes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**7. Comunicar y actualizar el estado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Presentar una descripción breve y estable que incluya resultado esperado, desviación, alcance, impacto, evidencia y nivel de certeza. Actualizarla cuando nuevas observaciones modifiquen el diagnóstico o la magnitud estimada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Evitar afirmar una causa antes de validarla. Cuando exista información incompleta, indicar qué falta, quién la está obteniendo y cuándo se revisará nuevamente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Un registro que indique qué comportamiento se apartó de la referencia, desde cuándo, con qué alcance e impacto, y mediante qué evidencias fue confirmado. Debe incluir las limitaciones de cobertura y distinguir claramente hechos, hipótesis y conclusiones."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Esta descripción proporciona una base común para investigar las dependencias y seleccionar una acción. No reemplaza la clasificación formal de incidentes ni los procedimientos corporativos de comunicación y escalamiento."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Dependencia involucrada",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "El análisis sigue las conexiones del servicio para investigar una dependencia sin asumir que constituye la causa raíz.",
                    "caption": "El análisis sigue las conexiones del servicio para investigar una dependencia sin asumir que constituye la causa raíz.",
                    "src": "/images/observabilidad/adopcion/dependencia-involucrada.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una dependencia involucrada es un componente interno o externo cuya participación puede influir en el resultado de una operación. Puede tratarse de una API, base de datos, cola, servicio de identidad, plataforma compartida, proveedor, infraestructura o proceso asíncrono."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar una dependencia en el recorrido permite orientar el análisis, pero no confirma que sea responsable de la desviación. La atribución requiere demostrar la relación entre su comportamiento y el resultado afectado, considerando también las condiciones del servicio consumidor."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Identificar el mapa de dependencias**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar las dependencias que participan en cada operación crítica, indicando su función y el punto del recorrido en que intervienen. Incluir llamadas síncronas, intercambios asíncronos, almacenamiento, resolución de identidad y capacidades compartidas necesarias para completar la operación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "El inventario debe representar el comportamiento efectivo del servicio. Revisarlo cuando cambien la arquitectura, las integraciones o los responsables. Una dependencia no documentada limita la investigación y dificulta establecer el impacto de una falla."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Definir el contrato de interacción**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Documentar qué solicita el servicio, qué respuesta o evento espera y qué condiciones representan éxito, rechazo o falla. Incluir los tiempos máximos relevantes, políticas de reintento y comportamiento ante respuestas parciales o indisponibilidad, cuando estén definidos por la implementación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "En interacciones asíncronas, distinguir publicación, recepción, procesamiento y confirmación. Definir cómo se identifican duplicados, mensajes vencidos y operaciones pendientes. Evitar asumir que la aceptación de un mensaje confirma su procesamiento final."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Aspecto",
                      "Información a documentar"
                    ],
                    "filas": [
                      [
                        "Función",
                        "Capacidad que aporta la dependencia a la operación."
                      ],
                      [
                        "Interfaz",
                        "API, evento, cola, consulta o mecanismo utilizado para interactuar."
                      ],
                      [
                        "Contrato de resultado",
                        "Respuestas, estados o eventos que indican éxito, rechazo y falla."
                      ],
                      [
                        "Condiciones temporales",
                        "Tiempo de espera, vencimiento y comportamiento de reintentos."
                      ],
                      [
                        "Degradación prevista",
                        "Respuesta del servicio cuando la dependencia está lenta, limitada o no disponible."
                      ],
                      [
                        "Responsable",
                        "Equipo o proveedor que mantiene la capacidad y canal de coordinación aplicable."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Evaluar criticidad e impacto**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Determinar si la dependencia es obligatoria para completar la operación o si existe una alternativa funcional. Identificar qué consumidores y resultados se ven afectados cuando presenta una falla, degradación o respuesta inconsistente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Considerar dependencias transitivas. Un servicio puede responder correctamente mientras una capacidad utilizada por él se encuentra degradada. El análisis debe conservar los límites de responsabilidad sin perder la visión de extremo a extremo."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Clasificar la criticidad con los criterios corporativos vigentes cuando existan. Esta sección aporta información para la evaluación y no asigna por sí sola una categoría oficial."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Establecer señales y contexto de correlación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Definir qué evidencias permiten observar la interacción: volumen, duración, errores, estados de procesamiento y disponibilidad declarada por la dependencia. Relacionar esas señales con la operación consumidora mediante contexto de traza, identificadores técnicos autorizados o marcas de tiempo consistentes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Separar la medición realizada por el consumidor de la telemetría producida por la dependencia. Una llamada puede fallar desde la perspectiva del consumidor aunque el proveedor no registre un error, por ejemplo debido a red, vencimiento o cancelación. Ambas perspectivas deben contrastarse."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Validar la relación con la desviación**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Formular una hipótesis concreta sobre cómo el comportamiento de la dependencia podría producir el resultado observado. Verificar la secuencia temporal, la coincidencia del alcance y el mecanismo técnico que conecta ambos comportamientos."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Buscar evidencia que pueda refutar la hipótesis: operaciones exitosas bajo las mismas condiciones, consumidores no afectados o dependencias alternativas con resultados equivalentes. La proximidad temporal o la presencia de errores aislados no demuestra causalidad."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Cuando no sea posible acceder a la telemetría de la dependencia, registrar esa limitación y utilizar evidencias observadas desde el consumidor. Solicitar la validación del equipo responsable mediante los canales establecidos."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**6. Revisar mecanismos de resiliencia**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Comprobar el comportamiento efectivo de tiempos de espera, reintentos, circuit breakers, colas y alternativas de servicio. Evaluar si estos mecanismos reducen el impacto o introducen efectos adicionales, como mayor latencia, duplicación, acumulación de pendientes o presión sobre otros componentes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "No asumir que un mecanismo está activo por aparecer en un patrón arquitectónico o una configuración de referencia. Su aplicación debe comprobarse en la versión y el ambiente investigados."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**7. Coordinar responsabilidades**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar al equipo consumidor y al responsable de la dependencia. El consumidor aporta el contexto de la operación y la evidencia observada desde su servicio; el responsable de la dependencia confirma su comportamiento, cambios y capacidad durante el período analizado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La coordinación debe compartir servicio, ambiente, intervalo, operación afectada e identificadores sanitizados. Evitar transferir datos sensibles o presentar una hipótesis como una atribución confirmada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Un registro de la dependencia que incluya función, contrato, criticidad, responsable, señales disponibles, mecanismos de resiliencia y evidencia de su relación con la desviación. Debe distinguir entre participación confirmada, causa validada e hipótesis pendiente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Esta información permite asignar correctamente las acciones de investigación y recuperación. No reemplaza los acuerdos formales entre equipos, los contratos con proveedores ni los procedimientos corporativos de escalamiento."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Decisión verificable",
                "contenido": [
                  {
                    "tipo": "imagen",
                    "alt": "La decisión se verifica comparando evidencias antes y después de la intervención, con criterios de reversión y un resultado documentado.",
                    "caption": "La decisión se verifica comparando evidencias antes y después de la intervención, con criterios de reversión y un resultado documentado.",
                    "src": "/images/observabilidad/adopcion/decision-verificable.png"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una decisión verificable establece una relación explícita entre la evidencia disponible, la acción seleccionada y el resultado que se espera obtener. Debe permitir comprobar si la intervención produjo el efecto previsto sobre la operación de negocio y si introdujo consecuencias adicionales."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La decisión no se considera completa al ejecutar una acción. Requiere una referencia previa, criterios de éxito, responsables y un período de observación que permita evaluar el resultado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**1. Formular la decisión**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar el problema que se busca resolver, la evidencia que lo sustenta y el resultado esperado de la intervención. Expresar la acción con un alcance específico, evitando formulaciones generales que no permitan identificar qué cambiará ni dónde se aplicará."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La formulación debe diferenciar la decisión de su implementación. También debe indicar si se trata de contención, recuperación, corrección, investigación adicional o mejora planificada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**2. Documentar las alternativas consideradas**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar las opciones evaluadas y los motivos para seleccionar o descartar cada una. Comparar beneficio esperado, tiempo de respuesta, riesgo, reversibilidad y dependencias necesarias para ejecutarlas."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Elemento",
                      "Contenido mínimo"
                    ],
                    "filas": [
                      [
                        "Alternativa",
                        "Acción evaluada y alcance propuesto."
                      ],
                      [
                        "Evidencia",
                        "Hechos que respaldan su relación con la desviación."
                      ],
                      [
                        "Beneficio esperado",
                        "Resultado funcional o técnico que se busca obtener."
                      ],
                      [
                        "Riesgo",
                        "Posibles efectos sobre consumidores, datos y dependencias."
                      ],
                      [
                        "Reversibilidad",
                        "Condiciones y mecanismo para detener o revertir la acción."
                      ],
                      [
                        "Decisión",
                        "Motivo documentado para seleccionar o descartar la alternativa."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La selección debe reflejar la información disponible en ese momento. Si existe incertidumbre relevante, registrarla junto con las comprobaciones que permitirán reducirla."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**3. Establecer criterios de aprobación y responsabilidad**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Identificar quién propone, quién evalúa, quién autoriza cuando corresponda, quién ejecuta y quién verifica. Los roles dependen del tipo de cambio, el impacto y los procedimientos corporativos aplicables."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Confirmar que la persona o equipo responsable dispone del acceso y la información necesarios. Las recomendaciones obtenidas mediante herramientas automáticas o asistentes deben ser revisadas y aprobadas bajo los mismos controles que cualquier otra propuesta."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**4. Definir una referencia previa**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar el estado anterior a la intervención mediante indicadores vinculados al problema: cumplimiento funcional, duración, errores, operaciones pendientes o alcance de consumidores afectados. Conservar el período, los filtros y las fuentes utilizadas para que la comparación sea reproducible."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Si no existe una referencia confiable, declarar la limitación y definir cómo se evaluará el efecto. Una percepción de mejora sin medición comparable no constituye una verificación suficiente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**5. Definir criterios de éxito y detención**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Establecer qué observaciones confirmarán que la acción produjo el resultado previsto, durante cuánto tiempo deben mantenerse y en qué ámbito serán evaluadas. Incluir también las condiciones que obligan a detener o revertir la intervención."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Dimensión",
                      "Criterio a definir"
                    ],
                    "filas": [
                      [
                        "Resultado funcional",
                        "Condición que demuestra la recuperación o mejora de la operación."
                      ],
                      [
                        "Magnitud",
                        "Cambio esperado respecto de la referencia utilizada."
                      ],
                      [
                        "Alcance",
                        "Servicios, ambientes y consumidores donde debe observarse el efecto."
                      ],
                      [
                        "Tiempo",
                        "Momento de evaluación y período mínimo de observación."
                      ],
                      [
                        "Seguridad",
                        "Ausencia de efectos que comprometan datos, accesos o controles aplicables."
                      ],
                      [
                        "Detención",
                        "Señal que obliga a suspender, revertir o escalar la acción."
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Los criterios deben acordarse antes de ejecutar cuando las condiciones lo permitan. Modificarlos después de observar el resultado requiere justificar el cambio y conservar la referencia original."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**6. Ejecutar de forma controlada**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Aplicar la acción dentro del alcance autorizado y registrar hora, responsable, versión o configuración afectada. Cuando sea posible, limitar inicialmente el ámbito para observar el efecto antes de extender la intervención."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Coordinar las dependencias necesarias y mantener disponible el mecanismo de reversión. Evitar introducir simultáneamente cambios no relacionados que dificulten atribuir el resultado a una acción concreta."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**7. Verificar el efecto**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Comparar el comportamiento posterior con la referencia y los criterios definidos. Validar tanto las señales técnicas como el resultado funcional, considerando volumen, cobertura de telemetría y retrasos de procesamiento."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Revisar efectos secundarios sobre otras operaciones y dependencias. Una disminución de errores registrados debe contrastarse con el volumen de actividad y la continuidad de la instrumentación para descartar una pérdida de visibilidad."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Clasificar el resultado como confirmado, parcial, sin efecto o adverso. Si la evidencia es insuficiente, mantener la decisión en observación y registrar la comprobación pendiente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**8. Cerrar, revertir o ajustar**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Cerrar la decisión cuando el resultado se mantenga durante el período acordado y no existan efectos relevantes pendientes. Si la intervención no cumple los criterios o introduce un riesgo no aceptable, ejecutar la detención o reversión definida y reevaluar las alternativas."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una mitigación puede resolver el impacto inmediato sin eliminar la causa. En ese caso, registrar por separado la recuperación del servicio y las acciones posteriores necesarias para completar la corrección."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**9. Conservar trazabilidad y aprendizaje**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Documentar la decisión, sus aprobaciones, la acción ejecutada, las evidencias anteriores y posteriores, el resultado y las tareas derivadas. Vincular los registros pertinentes sin reproducir datos sensibles."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Incorporar los aprendizajes en runbooks, instrumentación, alertas y documentación del servicio cuando corresponda. La revisión debe indicar qué señal permitió decidir y qué información faltó durante el análisis."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado documental esperado**"
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Un registro que permita responder qué se decidió, con qué evidencia, bajo qué autorización, quién ejecutó, cómo se midió el resultado y qué conclusión se obtuvo. Debe conservar las alternativas descartadas, los riesgos aceptados y las acciones pendientes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Este marco proporciona trazabilidad para evaluar decisiones técnicas y operativas. No sustituye los procesos corporativos de gestión de cambios, incidentes, seguridad o aprobación de riesgos."
                  }
                ]
              }
            ],
            "fuentes": [
              {
                "titulo": "Qué significa hacer observabilidad en la organización",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808138264"
              },
              {
                "titulo": "definición de OpenTelemetry",
                "url": "https://opentelemetry.io/docs/what-is-opentelemetry/"
              },
              {
                "titulo": "Principios de ingeniería",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055746"
              }
            ]
          },
          {
            "id": "senales",
            "titulo": "Señales y contexto",
            "bajada": "Tipos de señales, contexto y criterios de interpretación.",
            "modoLectura": "unico",
            "resumen": [],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Señales para comprender un sistema distribuido"
              },
              {
                "tipo": "parrafo",
                "texto": "**Métricas, trazas y logs aportan perspectivas complementarias.** Su utilidad depende de la pregunta que deben responder y de la calidad del contexto con el que se generan. La instrumentación debe permitir relacionar el comportamiento agregado con operaciones concretas."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Guía de logs, métricas y trazas](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1127677961)."
              },
              {
                "tipo": "acordeon",
                "titulo": "Métricas · alcance e impacto",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Describen mediciones agregadas, como tráfico, tasa de error y distribución de duración. Permiten identificar tendencias y dimensionar una desviación durante un período."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Un **Counter** registra acumulaciones; un **Gauge**, un valor actual; un **Histogram**, una distribución de mediciones. Los indicadores de actividad y resultado requieren una definición consistente de negocio."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "[Uso de métricas](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1156841607)."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Trazas · recorrido y dependencias",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Representan la ejecución de una operación mediante spans relacionados. Permiten examinar las dependencias entre servicios e identificar operaciones con demoras o errores."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Una traza muestreada describe una ejecución; las métricas agregadas permiten evaluar su alcance. La cobertura debe comprobarse según la instrumentación y el muestreo configurados."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "[Trazas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1394475023)."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Logs · detalle de ejecución",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Registran hechos técnicos relevantes, como un error o un tiempo de espera agotado. Una estructura consistente y el contexto de traza facilitan relacionar el registro con la operación investigada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La información debe ser pertinente y acotada. Se excluyen credenciales y payloads completos innecesarios."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "[Logs en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1338212357)."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Experiencia y hechos de negocio",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**RUM** complementa el análisis con la experiencia del usuario en el navegador. **Ægis Events** permite registrar y consultar hechos del dominio, como `OrdenPagada`, mediante un recorrido propio."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Estas capacidades se integran al análisis según su propósito; un evento de negocio y un log técnico tienen semánticas diferentes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "[Coralogix RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701) · [Implementación de eventos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417)."
                  }
                ]
              }
            ],
            "fuentes": [
              {
                "titulo": "Guía de logs, métricas y trazas",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1127677961"
              }
            ]
          },
          {
            "id": "opentelemetry",
            "titulo": "OpenTelemetry y modelo corporativo",
            "bajada": "Alcance de OpenTelemetry y responsabilidades de los componentes.",
            "modoLectura": "unico",
            "resumen": [],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "OpenTelemetry como base común de instrumentación"
              },
              {
                "tipo": "parrafo",
                "texto": "**OpenTelemetry es un proyecto de código abierto que proporciona APIs, SDKs, convenciones y herramientas para generar, recopilar y exportar telemetría.** Su enfoque independiente del proveedor facilita una instrumentación interoperable."
              },
              {
                "tipo": "parrafo",
                "texto": "OTel cubre la producción y el transporte de señales. El almacenamiento, la consulta y la visualización corresponden al backend de observabilidad elegido por la organización."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente técnica: [Qué es OpenTelemetry](https://opentelemetry.io/docs/what-is-opentelemetry/)."
              },
              {
                "tipo": "acordeon",
                "titulo": "Generación de señales",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Las APIs y los SDKs permiten instrumentar las aplicaciones. Las librerías de instrumentación aportan cobertura de frameworks y dependencias; los indicadores propios del negocio requieren una definición explícita del producto."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Contexto entre servicios",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "La propagación de contexto mantiene la relación entre operaciones que atraviesan procesos. Los identificadores de traza y span permiten vincular ejecuciones y, cuando la integración lo soporta, correlacionar logs."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La continuidad del contexto debe validarse entre servicios y en cada integración relevante."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "[Propagación de contexto en OpenTelemetry](https://opentelemetry.io/docs/concepts/context-propagation/)."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Convenciones y transporte",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Las convenciones semánticas establecen nombres comunes para atributos. OTLP define un protocolo de intercambio, y el Collector recibe, procesa y exporta señales según sus pipelines."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Alcance de la tecnología",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "La instrumentación proporciona la base técnica. La selección de indicadores, la interpretación de evidencias y las decisiones operativas corresponden a los equipos."
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Aplicación en el modelo corporativo"
              },
              {
                "tipo": "parrafo",
                "texto": "[Documentación técnica de Ægis — staging](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/)."
              },
              {
                "tipo": "parrafo",
                "texto": "Referencia de implementación: [Arquitectura y componentes](/docs/observabilidad/golden-path?tema=arquitectura)."
              },
              {
                "tipo": "parrafo",
                "texto": "**El modelo documentado articula OpenTelemetry con Ægis, OES y Coralogix.** Cada componente cumple una función diferenciada en la generación, el transporte o el análisis de señales."
              },
              {
                "tipo": "parrafo",
                "texto": "La siguiente secuencia representa la ruta conceptual de backend. La topología, los endpoints y las capacidades concretas deben verificarse por ambiente. RUM y Ægis Events mantienen recorridos complementarios propios."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Introducción a Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970) e [Introducción a OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228)."
              },
              {
                "tipo": "acordeon",
                "titulo": "Aplicación",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Define las operaciones e indicadores relevantes para el negocio. El equipo de producto establece el significado de las señales y los atributos necesarios para interpretarlas."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Ægis / OpenTelemetry",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Ægis facilita la instrumentación sobre el SDK de OpenTelemetry y las convenciones corporativas. La cobertura depende del lenguaje, el framework y la integración utilizada."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "OES Client",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Proporciona la captura local mediante Agent y Collector, con pipelines de recepción, procesamiento y exportación adecuados al entorno."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "OES Core",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Centraliza el procesamiento y la federación de señales mediante gateways. Plataforma mantiene la operación y capacidad de estos componentes compartidos."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Coralogix",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Permite explorar señales, analizar servicios y consultar dashboards y alertas en el backend descrito por la documentación corporativa."
                  }
                ]
              }
            ],
            "fuentes": [
              {
                "titulo": "Introducción a Ægis",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970"
              },
              {
                "titulo": "Introducción a OES",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228"
              }
            ]
          },
          {
            "id": "madurez",
            "titulo": "Evolución y madurez",
            "bajada": "Niveles de madurez y evolución de las prácticas operativas.",
            "modoLectura": "unico",
            "resumen": [],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Adopción progresiva de la capacidad"
              },
              {
                "tipo": "parrafo",
                "texto": "**La adopción se desarrolla progresivamente según la cobertura de los servicios y las prácticas operativas de los equipos.** El Charter describe cinco niveles de madurez que orientan esta evolución. Su lectura no constituye una certificación automática."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Modelo de madurez de la ingeniería](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809154049)."
              },
              {
                "tipo": "acordeon",
                "titulo": "Visibilidad",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Disponer de señales que permitan reconocer el comportamiento del servicio y sus principales desviaciones."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Comprensión",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Relacionar señales, contexto y dependencias para explicar el comportamiento observado y evaluar hipótesis."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Confiabilidad",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Utilizar indicadores y objetivos de servicio para orientar la operación y revisar la experiencia que Producto y SRE acuerdan proteger."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Optimización",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Aplicar las evidencias a mejoras de desempeño, consumo y decisiones de ingeniería, evaluando el valor de las señales conservadas."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Excelencia de ingeniería",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Consolidar prácticas repetibles y conocimiento compartido que permitan extender el aprendizaje a otros productos."
                  }
                ]
              }
            ],
            "fuentes": [
              {
                "titulo": "Modelo de madurez de la ingeniería",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809154049"
              }
            ]
          }
        ]
      },
      {
        "id": "gobierno",
        "titulo": "Gobierno",
        "resumenCapitulo": "Modelo de consumo, servicios, proveedores, cuentas y estándares compartidos de observabilidad.",
        "temas": [
          {
            "id": "servicios",
            "titulo": "Servicios y proveedores",
            "bajada": "Capacidades internas y proveedores del modelo.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Servicios y proveedores del modelo"
              },
              {
                "tipo": "parrafo",
                "texto": "**La plataforma combina capacidades internas con un proveedor de análisis de telemetría.** Esta organización permite distinguir qué servicio se consume, quién lo mantiene y qué dependencia se incorpora."
              },
              {
                "tipo": "parrafo",
                "texto": "El modelo se organiza en tres funciones principales: **generar señales con un estándar común, transportarlas mediante capacidades de plataforma y utilizarlas para analizar la operación**. RUM, eventos de negocio y análisis de costos complementan ese recorrido con propósitos específicos."
              },
              {
                "tipo": "parrafo",
                "texto": "Para interpretar el modelo conviene distinguir el **servicio de negocio observado**, la **capacidad interna que habilita su observabilidad** y el **proveedor tecnológico que recibe o permite analizar las señales**. Sus responsabilidades se relacionan, pero no son intercambiables."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Capa",
                  "Capacidad",
                  "Resultado que aporta al consumidor"
                ],
                "filas": [
                  [
                    "Instrumentación",
                    "Ægis sobre OpenTelemetry",
                    "Señales con identidad y contexto del servicio"
                  ],
                  [
                    "Transporte y procesamiento",
                    "OES Client y OES Core",
                    "Encaminamiento de telemetría mediante pipelines adecuados al entorno"
                  ],
                  [
                    "Análisis operativo",
                    "Coralogix",
                    "Consulta de señales, APM, dashboards y alertas según la habilitación de la cuenta"
                  ],
                  [
                    "Experiencia y negocio",
                    "RUM y Ægis Events",
                    "Visibilidad de la experiencia del usuario y de hechos de negocio"
                  ],
                  [
                    "Seguimiento de consumo",
                    "Coralogix Costs",
                    "Información para analizar el uso de la capacidad compartida"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios de gestión que siguen orientan la definición del servicio consumido; no establecen por sí mismos acuerdos de disponibilidad, tiempos de soporte ni condiciones comerciales."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970), [OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228), [guía de Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1335099470) y [migración desde New Relic](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1068957704)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Instrumentación · Ægis y OpenTelemetry",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Ægis es la librería corporativa que facilita la generación de telemetría sobre OpenTelemetry. OTel aporta APIs y convenciones abiertas; Ægis integra el uso corporativo de estas capacidades."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La instrumentación común reduce implementaciones divergentes entre productos. Los indicadores propios del negocio continúan siendo responsabilidad del equipo consumidor."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Alcance del servicio.** Facilitar la integración de telemetría en las aplicaciones mediante una base reutilizable. La cobertura efectiva depende del lenguaje, framework, versión e integración utilizados; debe comprobarse para el servicio que se incorpora."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad del equipo consumidor.** Identificar qué operaciones necesita observar, integrar la librería compatible, conservar la identidad del servicio y validar señales en escenarios de éxito y error. También le corresponde determinar qué atributos aportan contexto y evitar información sensible o dimensiones sin utilidad operativa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad sobre el estándar.** El mantenimiento de la capacidad compartida comprende su documentación, compatibilidad y evolución. Las necesidades comunes deben canalizarse hacia ese estándar para evitar que cada producto mantenga una implementación diferente del mismo comportamiento."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado verificable.** La aplicación emite señales interpretables, identificadas por servicio y ambiente, y permite seguir las operaciones relevantes. La instalación de la dependencia por sí sola no demuestra que la instrumentación sea suficiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterios de gestión.** Registrar la integración y versión adoptadas, el equipo responsable y las extensiones locales. Evaluar actualizaciones por compatibilidad y efecto operativo antes de promoverlas a producción."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Estándares de instrumentación y datos](/docs/observabilidad/gobierno?tema=estandares) · [Selección de la integración](/docs/observabilidad/golden-path?tema=seleccionar)."
                      }
                    ]
                  },
                  {
                    "titulo": "Transporte · OES",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "OES Client y OES Core proporcionan la recepción, el procesamiento y la exportación de señales. Son capacidades de plataforma cuya topología y configuración dependen del entorno."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "El producto debe confirmar la integración habilitada para su servicio. La operación del pipeline compartido y la calidad de las señales emitidas tienen responsabilidades diferentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**OES Client.** Representa la captura local mediante Agent y Collector y los pipelines adecuados al entorno. Su integración debe considerar dónde se ejecuta la aplicación, cómo entrega sus señales y qué configuración requiere para enviarlas al siguiente componente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**OES Core.** Concentra el procesamiento y la federación de señales mediante gateways. La operación y capacidad de estos componentes compartidos corresponden a plataforma; su funcionamiento debe distinguirse de la salud de cada aplicación emisora."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Acuerdo de integración.** Antes de habilitar un envío, identificar ambiente, destino, señales previstas, credenciales aplicables y responsables de configuración. La topología concreta se confirma para cada entorno; el recorrido conceptual no sustituye esa validación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Límite de responsabilidad.** El producto responde por el significado, contexto y volumen de las señales que genera. La capacidad de transporte responde por el tratamiento configurado en sus pipelines. Una señal ausente requiere determinar en qué punto dejó de estar disponible antes de asignar el problema a un equipo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Gestión de fallas y cambios.** Revisar el comportamiento ante interrupciones, saturación y reinicios según la configuración implementada. Los cambios de volumen, procesamiento o destino deben coordinarse con quienes operan la capacidad compartida."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado verificable.** Las señales del servicio llegan al destino previsto con su identidad y contexto. La validación incluye revisar errores o descartes y el efecto de la integración sobre los recursos de la aplicación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Arquitectura y componentes](/docs/observabilidad/golden-path?tema=arquitectura) · [Integración con OES](/docs/observabilidad/golden-path?tema=oes)."
                      }
                    ]
                  },
                  {
                    "titulo": "Análisis · Coralogix",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Coralogix es el proveedor de backend descrito en la documentación corporativa para explorar logs, métricas y trazas, utilizar APM y mantener dashboards y alertas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "El acceso y la ingesta se organizan por cuenta. La disponibilidad de una función del proveedor no implica que esté habilitada para todos los roles ni incluida en cualquier condición comercial."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Servicio consumido.** Disponer de un espacio de análisis donde el equipo pueda consultar las señales de su servicio y construir una visión operativa. La utilidad se concreta cuando las consultas, dashboards y alertas responden a preguntas del producto y permiten orientar una intervención."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad del consumidor.** Validar que consulta la cuenta y el ambiente correctos, mantener consultas y visualizaciones útiles y asignar responsables a las alertas. El equipo debe saber interpretar los datos y relacionarlos con el comportamiento del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Administración interna y proveedor.** La asignación interna de cuentas, usuarios y permisos se distingue de las capacidades y condiciones que ofrece el proveedor. Los compromisos de soporte, disponibilidad, conservación y capacidad deben consultarse en los acuerdos aplicables, sin inferirlos de la interfaz del producto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Información que debe quedar definida.** Cuenta de destino, ámbito organizacional, ambientes cubiertos, responsables de administración, perfiles de acceso y criterios de conservación y consumo. La configuración debe permitir atribuir las señales al servicio que las produce."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado verificable.** El equipo autorizado puede localizar su servicio, investigar una operación y consultar los indicadores necesarios para su función. Tener acceso al backend no sustituye la validación de que los datos sean completos y utilizables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Modelo de consumo y cuentas](/docs/observabilidad/gobierno?tema=consumo) · [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos)."
                      }
                    ]
                  },
                  {
                    "titulo": "Capacidades complementarias",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "RUM incorpora la experiencia de frontend. Ægis Events proporciona una ruta propia para hechos de negocio. Coralogix Costs consolida información de consumo para su análisis."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Cada capacidad tiene requisitos y alcance específicos; consumir una no habilita automáticamente las demás."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Capacidad",
                          "Necesidad que atiende",
                          "Definición a cargo del consumidor",
                          "Criterio de verificación"
                        ],
                        "filas": [
                          [
                            "RUM",
                            "Comprender el comportamiento y la experiencia en frontend",
                            "Aplicación, recorridos relevantes, ambiente y tratamiento de datos",
                            "La información permite analizar la experiencia prevista sin capturar datos innecesarios"
                          ],
                          [
                            "Ægis Events",
                            "Registrar hechos significativos para el negocio",
                            "Significado del evento, productor, estructura y momento de emisión",
                            "El evento representa el hecho de negocio acordado y puede verificarse en su destino"
                          ],
                          [
                            "Coralogix Costs",
                            "Analizar el consumo de observabilidad",
                            "Ámbito de seguimiento, responsables y preguntas de consumo",
                            "El equipo puede interpretar variaciones y relacionarlas con cambios del servicio"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de incorporación.** Seleccionar cada capacidad a partir de una necesidad concreta. Documentar quién la utilizará, qué información requiere y cómo se verificará su utilidad antes de ampliar su alcance."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Relación entre capacidades.** Las señales técnicas describen la ejecución; RUM aporta la perspectiva del frontend y los eventos expresan hechos definidos por el negocio. Sus resultados se complementan, pero no deben interpretarse como equivalentes sin revisar contexto y significado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Gestión del consumo.** Considerar el volumen adicional, la conservación, el acceso y la calidad de los datos de cada integración. El seguimiento de costos apoya estas decisiones, sin sustituir la evaluación del valor operativo de las señales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701) · [Ægis Events](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417) · [Coralogix Costs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639)."
                      }
                    ]
                  },
                  {
                    "titulo": "Proveedores y transición",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Las guías de New Relic se conservan como contexto de migración. La adopción de otro proveedor o una integración que altere el modelo compartido requiere evaluar interoperabilidad, operación y consecuencias económicas mediante el proceso de decisiones de ingeniería."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "OpenTelemetry facilita la portabilidad de la instrumentación. Las consultas, dashboards y condiciones contractuales también deben evaluarse en una transición."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Dimensiones de evaluación.** Una transición debe considerar tanto el envío de telemetría como la continuidad de su uso por los equipos."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Dimensión",
                          "Aspectos que deben evaluarse"
                        ],
                        "filas": [
                          [
                            "Instrumentación",
                            "Compatibilidad de señales, atributos, contexto y versiones utilizadas"
                          ],
                          [
                            "Transporte",
                            "Destinos, configuración, credenciales y capacidad del pipeline"
                          ],
                          [
                            "Análisis",
                            "Equivalencia de consultas, dashboards, alertas y flujos de investigación"
                          ],
                          [
                            "Operación",
                            "Responsables, canales de soporte, continuidad y procedimiento de reversión"
                          ],
                          [
                            "Datos y acceso",
                            "Conservación, disponibilidad del histórico, permisos y tratamiento de información"
                          ],
                          [
                            "Consumo",
                            "Volumen, duplicación temporal de envíos y condiciones económicas aplicables"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparación.** Inventariar servicios e integraciones afectados y definir criterios de aceptación. Si se necesita coexistencia, delimitar su alcance y duración para controlar duplicación de datos, alertas y costos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación.** Comprobar con operaciones representativas que el destino permite investigar los mismos casos relevantes. La llegada de datos es una condición necesaria, pero también deben validarse contexto, consultas y respuesta operativa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cierre.** Retirar la integración anterior cuando se hayan satisfecho los criterios acordados y se haya resuelto el acceso al histórico necesario. Registrar la decisión, sus responsables y las limitaciones que continúen vigentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Servicios y proveedores del modelo"
              },
              {
                "tipo": "parrafo",
                "texto": "**La plataforma combina capacidades internas con un proveedor de análisis de telemetría.** Esta organización permite distinguir qué servicio se consume, quién lo mantiene y qué dependencia se incorpora."
              },
              {
                "tipo": "parrafo",
                "texto": "El modelo se organiza en tres funciones principales: **generar señales con un estándar común, transportarlas mediante capacidades de plataforma y utilizarlas para analizar la operación**. RUM, eventos de negocio y análisis de costos complementan ese recorrido con propósitos específicos."
              },
              {
                "tipo": "parrafo",
                "texto": "Para interpretar el modelo conviene distinguir el **servicio de negocio observado**, la **capacidad interna que habilita su observabilidad** y el **proveedor tecnológico que recibe o permite analizar las señales**. Sus responsabilidades se relacionan, pero no son intercambiables."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Capa",
                  "Capacidad",
                  "Resultado que aporta al consumidor"
                ],
                "filas": [
                  [
                    "Instrumentación",
                    "Ægis sobre OpenTelemetry",
                    "Señales con identidad y contexto del servicio"
                  ],
                  [
                    "Transporte y procesamiento",
                    "OES Client y OES Core",
                    "Encaminamiento de telemetría mediante pipelines adecuados al entorno"
                  ],
                  [
                    "Análisis operativo",
                    "Coralogix",
                    "Consulta de señales, APM, dashboards y alertas según la habilitación de la cuenta"
                  ],
                  [
                    "Experiencia y negocio",
                    "RUM y Ægis Events",
                    "Visibilidad de la experiencia del usuario y de hechos de negocio"
                  ],
                  [
                    "Seguimiento de consumo",
                    "Coralogix Costs",
                    "Información para analizar el uso de la capacidad compartida"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios de gestión que siguen orientan la definición del servicio consumido; no establecen por sí mismos acuerdos de disponibilidad, tiempos de soporte ni condiciones comerciales."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970), [OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228), [guía de Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1335099470) y [migración desde New Relic](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1068957704)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Instrumentación · Ægis y OpenTelemetry"
              },
              {
                "tipo": "parrafo",
                "texto": "Ægis es la librería corporativa que facilita la generación de telemetría sobre OpenTelemetry. OTel aporta APIs y convenciones abiertas; Ægis integra el uso corporativo de estas capacidades."
              },
              {
                "tipo": "parrafo",
                "texto": "La instrumentación común reduce implementaciones divergentes entre productos. Los indicadores propios del negocio continúan siendo responsabilidad del equipo consumidor."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance del servicio.** Facilitar la integración de telemetría en las aplicaciones mediante una base reutilizable. La cobertura efectiva depende del lenguaje, framework, versión e integración utilizados; debe comprobarse para el servicio que se incorpora."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad del equipo consumidor.** Identificar qué operaciones necesita observar, integrar la librería compatible, conservar la identidad del servicio y validar señales en escenarios de éxito y error. También le corresponde determinar qué atributos aportan contexto y evitar información sensible o dimensiones sin utilidad operativa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad sobre el estándar.** El mantenimiento de la capacidad compartida comprende su documentación, compatibilidad y evolución. Las necesidades comunes deben canalizarse hacia ese estándar para evitar que cada producto mantenga una implementación diferente del mismo comportamiento."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado verificable.** La aplicación emite señales interpretables, identificadas por servicio y ambiente, y permite seguir las operaciones relevantes. La instalación de la dependencia por sí sola no demuestra que la instrumentación sea suficiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterios de gestión.** Registrar la integración y versión adoptadas, el equipo responsable y las extensiones locales. Evaluar actualizaciones por compatibilidad y efecto operativo antes de promoverlas a producción."
              },
              {
                "tipo": "parrafo",
                "texto": "[Estándares de instrumentación y datos](/docs/observabilidad/gobierno?tema=estandares) · [Selección de la integración](/docs/observabilidad/golden-path?tema=seleccionar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Transporte · OES"
              },
              {
                "tipo": "parrafo",
                "texto": "OES Client y OES Core proporcionan la recepción, el procesamiento y la exportación de señales. Son capacidades de plataforma cuya topología y configuración dependen del entorno."
              },
              {
                "tipo": "parrafo",
                "texto": "El producto debe confirmar la integración habilitada para su servicio. La operación del pipeline compartido y la calidad de las señales emitidas tienen responsabilidades diferentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**OES Client.** Representa la captura local mediante Agent y Collector y los pipelines adecuados al entorno. Su integración debe considerar dónde se ejecuta la aplicación, cómo entrega sus señales y qué configuración requiere para enviarlas al siguiente componente."
              },
              {
                "tipo": "parrafo",
                "texto": "**OES Core.** Concentra el procesamiento y la federación de señales mediante gateways. La operación y capacidad de estos componentes compartidos corresponden a plataforma; su funcionamiento debe distinguirse de la salud de cada aplicación emisora."
              },
              {
                "tipo": "parrafo",
                "texto": "**Acuerdo de integración.** Antes de habilitar un envío, identificar ambiente, destino, señales previstas, credenciales aplicables y responsables de configuración. La topología concreta se confirma para cada entorno; el recorrido conceptual no sustituye esa validación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Límite de responsabilidad.** El producto responde por el significado, contexto y volumen de las señales que genera. La capacidad de transporte responde por el tratamiento configurado en sus pipelines. Una señal ausente requiere determinar en qué punto dejó de estar disponible antes de asignar el problema a un equipo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Gestión de fallas y cambios.** Revisar el comportamiento ante interrupciones, saturación y reinicios según la configuración implementada. Los cambios de volumen, procesamiento o destino deben coordinarse con quienes operan la capacidad compartida."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado verificable.** Las señales del servicio llegan al destino previsto con su identidad y contexto. La validación incluye revisar errores o descartes y el efecto de la integración sobre los recursos de la aplicación."
              },
              {
                "tipo": "parrafo",
                "texto": "[Arquitectura y componentes](/docs/observabilidad/golden-path?tema=arquitectura) · [Integración con OES](/docs/observabilidad/golden-path?tema=oes)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Análisis · Coralogix"
              },
              {
                "tipo": "parrafo",
                "texto": "Coralogix es el proveedor de backend descrito en la documentación corporativa para explorar logs, métricas y trazas, utilizar APM y mantener dashboards y alertas."
              },
              {
                "tipo": "parrafo",
                "texto": "El acceso y la ingesta se organizan por cuenta. La disponibilidad de una función del proveedor no implica que esté habilitada para todos los roles ni incluida en cualquier condición comercial."
              },
              {
                "tipo": "parrafo",
                "texto": "**Servicio consumido.** Disponer de un espacio de análisis donde el equipo pueda consultar las señales de su servicio y construir una visión operativa. La utilidad se concreta cuando las consultas, dashboards y alertas responden a preguntas del producto y permiten orientar una intervención."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad del consumidor.** Validar que consulta la cuenta y el ambiente correctos, mantener consultas y visualizaciones útiles y asignar responsables a las alertas. El equipo debe saber interpretar los datos y relacionarlos con el comportamiento del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Administración interna y proveedor.** La asignación interna de cuentas, usuarios y permisos se distingue de las capacidades y condiciones que ofrece el proveedor. Los compromisos de soporte, disponibilidad, conservación y capacidad deben consultarse en los acuerdos aplicables, sin inferirlos de la interfaz del producto."
              },
              {
                "tipo": "parrafo",
                "texto": "**Información que debe quedar definida.** Cuenta de destino, ámbito organizacional, ambientes cubiertos, responsables de administración, perfiles de acceso y criterios de conservación y consumo. La configuración debe permitir atribuir las señales al servicio que las produce."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado verificable.** El equipo autorizado puede localizar su servicio, investigar una operación y consultar los indicadores necesarios para su función. Tener acceso al backend no sustituye la validación de que los datos sean completos y utilizables."
              },
              {
                "tipo": "parrafo",
                "texto": "[Modelo de consumo y cuentas](/docs/observabilidad/gobierno?tema=consumo) · [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Capacidades complementarias"
              },
              {
                "tipo": "parrafo",
                "texto": "RUM incorpora la experiencia de frontend. Ægis Events proporciona una ruta propia para hechos de negocio. Coralogix Costs consolida información de consumo para su análisis."
              },
              {
                "tipo": "parrafo",
                "texto": "Cada capacidad tiene requisitos y alcance específicos; consumir una no habilita automáticamente las demás."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Capacidad",
                  "Necesidad que atiende",
                  "Definición a cargo del consumidor",
                  "Criterio de verificación"
                ],
                "filas": [
                  [
                    "RUM",
                    "Comprender el comportamiento y la experiencia en frontend",
                    "Aplicación, recorridos relevantes, ambiente y tratamiento de datos",
                    "La información permite analizar la experiencia prevista sin capturar datos innecesarios"
                  ],
                  [
                    "Ægis Events",
                    "Registrar hechos significativos para el negocio",
                    "Significado del evento, productor, estructura y momento de emisión",
                    "El evento representa el hecho de negocio acordado y puede verificarse en su destino"
                  ],
                  [
                    "Coralogix Costs",
                    "Analizar el consumo de observabilidad",
                    "Ámbito de seguimiento, responsables y preguntas de consumo",
                    "El equipo puede interpretar variaciones y relacionarlas con cambios del servicio"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de incorporación.** Seleccionar cada capacidad a partir de una necesidad concreta. Documentar quién la utilizará, qué información requiere y cómo se verificará su utilidad antes de ampliar su alcance."
              },
              {
                "tipo": "parrafo",
                "texto": "**Relación entre capacidades.** Las señales técnicas describen la ejecución; RUM aporta la perspectiva del frontend y los eventos expresan hechos definidos por el negocio. Sus resultados se complementan, pero no deben interpretarse como equivalentes sin revisar contexto y significado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Gestión del consumo.** Considerar el volumen adicional, la conservación, el acceso y la calidad de los datos de cada integración. El seguimiento de costos apoya estas decisiones, sin sustituir la evaluación del valor operativo de las señales."
              },
              {
                "tipo": "parrafo",
                "texto": "[RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701) · [Ægis Events](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417) · [Coralogix Costs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Proveedores y transición"
              },
              {
                "tipo": "parrafo",
                "texto": "Las guías de New Relic se conservan como contexto de migración. La adopción de otro proveedor o una integración que altere el modelo compartido requiere evaluar interoperabilidad, operación y consecuencias económicas mediante el proceso de decisiones de ingeniería."
              },
              {
                "tipo": "parrafo",
                "texto": "OpenTelemetry facilita la portabilidad de la instrumentación. Las consultas, dashboards y condiciones contractuales también deben evaluarse en una transición."
              },
              {
                "tipo": "parrafo",
                "texto": "**Dimensiones de evaluación.** Una transición debe considerar tanto el envío de telemetría como la continuidad de su uso por los equipos."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Aspectos que deben evaluarse"
                ],
                "filas": [
                  [
                    "Instrumentación",
                    "Compatibilidad de señales, atributos, contexto y versiones utilizadas"
                  ],
                  [
                    "Transporte",
                    "Destinos, configuración, credenciales y capacidad del pipeline"
                  ],
                  [
                    "Análisis",
                    "Equivalencia de consultas, dashboards, alertas y flujos de investigación"
                  ],
                  [
                    "Operación",
                    "Responsables, canales de soporte, continuidad y procedimiento de reversión"
                  ],
                  [
                    "Datos y acceso",
                    "Conservación, disponibilidad del histórico, permisos y tratamiento de información"
                  ],
                  [
                    "Consumo",
                    "Volumen, duplicación temporal de envíos y condiciones económicas aplicables"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparación.** Inventariar servicios e integraciones afectados y definir criterios de aceptación. Si se necesita coexistencia, delimitar su alcance y duración para controlar duplicación de datos, alertas y costos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación.** Comprobar con operaciones representativas que el destino permite investigar los mismos casos relevantes. La llegada de datos es una condición necesaria, pero también deben validarse contexto, consultas y respuesta operativa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cierre.** Retirar la integración anterior cuando se hayan satisfecho los criterios acordados y se haya resuelto el acceso al histórico necesario. Registrar la decisión, sus responsables y las limitaciones que continúen vigentes."
              },
              {
                "tipo": "parrafo",
                "texto": "[Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
              }
            ],
            "fuentes": [
              {
                "titulo": "Ægis",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970"
              },
              {
                "titulo": "OES",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228"
              },
              {
                "titulo": "guía de Coralogix",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1335099470"
              },
              {
                "titulo": "migración desde New Relic",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1068957704"
              }
            ]
          },
          {
            "id": "consumo",
            "titulo": "Modelo de consumo y cuentas",
            "bajada": "Ámbitos organizacionales, cuentas y ambientes.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Modelo de consumo de observabilidad"
              },
              {
                "tipo": "parrafo",
                "texto": "**Los equipos consumen una capacidad compartida de instrumentación, transporte y análisis de telemetría.** Gobierno establece cómo se relacionan el servicio de negocio, la cuenta de destino, el estándar técnico y la responsabilidad sobre el consumo."
              },
              {
                "tipo": "parrafo",
                "texto": "El recorrido comienza cuando un producto necesita observabilidad y continúa durante toda su operación: identificar el alcance, utilizar las capacidades corporativas y revisar el valor de las señales conservadas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consumir observabilidad implica gestionar una relación entre necesidad, capacidad y responsabilidad.** El equipo de producto define qué necesita comprender de su servicio; las capacidades compartidas permiten generar, transportar y analizar esa información. La cuenta de destino organiza el consumo y los accesos, mientras que la revisión operativa permite comprobar si las señales aportan el valor esperado."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Etapa",
                  "Decisión principal",
                  "Resultado que debe quedar definido"
                ],
                "filas": [
                  [
                    "Identificar",
                    "Qué servicio necesita observabilidad y para qué",
                    "Alcance funcional, operaciones relevantes y equipo responsable"
                  ],
                  [
                    "Delimitar",
                    "Dónde se consumirá la capacidad y bajo qué condiciones",
                    "Cuenta, ambiente, accesos y capacidades previstas"
                  ],
                  [
                    "Integrar",
                    "Cómo producir y entregar señales dentro del estándar",
                    "Integración compatible y evidencias de funcionamiento"
                  ],
                  [
                    "Revisar",
                    "Qué valor aporta el consumo y qué debe ajustarse",
                    "Acciones sobre calidad, volumen, conservación y uso operativo"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios siguientes orientan la gestión del consumo. Las cuotas, tarifas, tiempos de atención y compromisos de disponibilidad deben confirmarse en los acuerdos aplicables; no se deducen de la habilitación técnica de una cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Modelo operativo](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807286351), [cuentas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112320) y [uso responsable](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Identificar el servicio consumidor",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Precisar producto, aplicación, servicio, ambiente y equipo responsable. El propósito de las señales debe corresponder a una necesidad de operación o negocio identificable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Delimitar la unidad de consumo.** Identificar el servicio que genera telemetría y su relación con el producto. Cuando un producto reúne varias aplicaciones o componentes, conservar una identidad diferenciada que permita investigar cada servicio y atribuir su consumo sin perder la visión del conjunto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Establecer el propósito.** Definir las preguntas que deben responder las señales: qué operaciones fallan, dónde aumenta la latencia, qué dependencia interviene o si se alcanza un resultado de negocio. Estas preguntas orientan la selección de señales y evitan recopilar información sin un uso previsto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Asignar responsabilidades.** Identificar quién mantiene la instrumentación, quién utiliza la información durante la operación y quién revisa el consumo. Estas funciones pueden recaer en el mismo equipo, pero deben poder distinguirse para gestionar cambios e incidentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Caracterizar la demanda.** Considerar ambientes, tráfico habitual, variaciones estacionales, procesos por lotes y eventos que puedan incrementar la emisión. Registrar las estimaciones como hipótesis de planificación y contrastarlas con mediciones después de habilitar la integración."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Información del servicio",
                          "Utilidad para el modelo de consumo"
                        ],
                        "filas": [
                          [
                            "Producto, aplicación y servicio",
                            "Relacionar telemetría, operación y ámbito de negocio"
                          ],
                          [
                            "Ambiente y ámbito organizacional",
                            "Orientar la asignación de cuenta y destino"
                          ],
                          [
                            "Equipo y referente responsable",
                            "Coordinar habilitación, cambios y seguimiento"
                          ],
                          [
                            "Operaciones y preguntas relevantes",
                            "Justificar señales, consultas e indicadores"
                          ],
                          [
                            "Señales e integraciones previstas",
                            "Identificar las capacidades necesarias"
                          ],
                          [
                            "Patrón de demanda conocido o estimado",
                            "Preparar la revisión de volumen y capacidad"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una definición del servicio consumidor que permita reconocer quién genera los datos, para qué se utilizarán y quién responde por su calidad y consumo. La identidad técnica debe corresponder con esa definición."
                      }
                    ]
                  },
                  {
                    "titulo": "Definir cuenta y alcance",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Ubicar el servicio en la cuenta correspondiente a su ámbito organizacional y ambiente. Confirmar accesos, destino de ingesta y condiciones aplicables antes de habilitar el envío."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Confirmar la asignación organizacional.** Utilizar la distribución documentada de cuentas como referencia y verificar cuál corresponde al servicio. La pertenencia a un producto o equipo no debe convertirse en una suposición sobre el destino de sus señales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Separar los ambientes.** Comprobar que las señales y credenciales corresponden al ambiente previsto. Esta delimitación permite interpretar correctamente los datos y evita que pruebas o integraciones temporales se confundan con operación productiva."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Precisar las capacidades a consumir.** Diferenciar el envío de señales de backend, la observación de frontend, los eventos de negocio y el seguimiento de costos. Cada capacidad requiere confirmar su alcance y habilitación; disponer de acceso a una cuenta no significa tener todas las integraciones disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Distinguir acceso humano e ingesta.** Los permisos de consulta y administración responden a funciones de las personas. Las credenciales de envío corresponden a las integraciones. Ambos deben quedar asociados al destino correcto y gestionarse mediante los mecanismos de seguridad aplicables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**5. Aclarar las condiciones de consumo.** Identificar los criterios de conservación, límites y condiciones económicas que correspondan a la cuenta. Cuando un dato no esté confirmado, dejarlo explícitamente pendiente en la definición del consumo en lugar de asumir una condición por defecto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una relación inequívoca entre servicio, ambiente, cuenta y capacidades previstas, con responsables identificados para administrar accesos y resolver dudas de habilitación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Organización de cuentas y ambientes](/docs/observabilidad/gobierno?tema=consumo) · [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) · [Seguridad](/docs/observabilidad/gobierno?tema=seguridad)."
                      }
                    ]
                  },
                  {
                    "titulo": "Consumir el estándar compartido",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Integrar la instrumentación mediante Ægis y las capacidades OES documentadas para el entorno. La habilitación técnica se complementa con indicadores y contexto definidos por el producto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Seleccionar una integración compatible.** Confirmar lenguaje, framework, entorno de ejecución y versión de la integración. Utilizar las guías del Golden Path para concretar la implementación y registrar las particularidades que requieran evaluación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Aplicar identidad y contexto.** Las señales deben permitir distinguir el servicio y el ambiente, así como relacionar la ejecución cuando corresponda. El equipo consumidor define los atributos de negocio necesarios y revisa que su contenido sea pertinente y seguro."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Coordinar la entrega de telemetría.** Confirmar cómo se conecta la aplicación con la capacidad OES habilitada y cuál es el destino final. El producto mantiene la calidad de lo que emite; la operación de los componentes compartidos se coordina con plataforma."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Validar de extremo a extremo.** Ejecutar operaciones representativas y comprobar que las señales se pueden consultar en la cuenta prevista. Revisar tanto escenarios exitosos como fallas y confirmar que la información permite responder las preguntas definidas al inicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**5. Preparar el uso operativo.** Identificar las consultas, dashboards o alertas que utilizará el equipo y sus responsables. Incorporar una integración al servicio incluye que sus operadores sepan encontrar e interpretar las evidencias."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Aspecto a validar",
                          "Evidencia esperada"
                        ],
                        "filas": [
                          [
                            "Identidad",
                            "El servicio y el ambiente se distinguen correctamente"
                          ],
                          [
                            "Entrega",
                            "Las señales están disponibles en el destino previsto"
                          ],
                          [
                            "Contexto",
                            "Las operaciones conservan los atributos y relaciones necesarios para investigarlas"
                          ],
                          [
                            "Calidad",
                            "Los datos son interpretables y no incluyen información innecesaria o sensible"
                          ],
                          [
                            "Impacto técnico",
                            "Se ha revisado el efecto de la integración sobre los recursos y comportamiento de la aplicación"
                          ],
                          [
                            "Uso operativo",
                            "El equipo puede ejecutar una consulta o investigación representativa"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una integración que produzca evidencia útil y pueda mantenerse durante la operación. Cualquier extensión que altere el modelo compartido se evalúa mediante el proceso de decisiones y excepciones."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Golden Path](/docs/observabilidad/golden-path) · [Estándares](/docs/observabilidad/gobierno?tema=estandares) · [Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
                      }
                    ]
                  },
                  {
                    "titulo": "Revisar consumo y resultado",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Relacionar el volumen y la conservación de señales con su utilidad. El seguimiento permite identificar desviaciones y priorizar mejoras de calidad, capacidad y costo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Establecer una referencia medida.** Una vez habilitado el servicio, observar su consumo bajo condiciones conocidas. Registrar el período analizado y relacionarlo con tráfico, despliegues y actividad de negocio para evitar comparaciones entre situaciones diferentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Revisar utilidad y calidad.** Determinar si las señales permiten investigar incidentes, reconocer desviaciones y verificar decisiones. El volumen por sí solo no demuestra cobertura ni valor; también deben revisarse vacíos de información, ruido y atributos que dificulten el análisis."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Explicar las variaciones.** Ante un aumento de consumo, distinguir crecimiento de demanda, incorporación de servicios, cambios de instrumentación, errores repetitivos y duplicación de envíos. La acción depende de la causa y de la utilidad de la información adicional."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Acordar ajustes.** Evaluar nivel de detalle, señales duplicadas, cardinalidad y conservación según la necesidad operativa. Los ajustes deben preservar la evidencia necesaria para investigar el servicio y respetar los criterios de seguridad aplicables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**5. Verificar el resultado del cambio.** Comparar consumo y capacidad de investigación antes y después del ajuste. Registrar qué se modificó, quién es responsable y qué evidencia demuestra que la reducción de volumen o la ampliación de cobertura logró su propósito."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Situación observada",
                          "Revisión sugerida"
                        ],
                        "filas": [
                          [
                            "El volumen crece junto con el tráfico",
                            "Comparar el consumo por operación y comprobar si el crecimiento es proporcional"
                          ],
                          [
                            "El volumen aumenta sin un cambio equivalente de demanda",
                            "Investigar despliegues, errores repetidos, duplicación o cambios de configuración"
                          ],
                          [
                            "Hay señales, pero no permiten explicar incidentes",
                            "Revisar contexto, cobertura y correlación antes de ampliar la ingesta"
                          ],
                          [
                            "Se conserva información sin un uso identificado",
                            "Revisar su propósito y conservación con los responsables correspondientes"
                          ],
                          [
                            "El servicio cambia de equipo o se retira",
                            "Actualizar responsables y revisar integraciones, credenciales, alertas y tratamiento del histórico"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Continuidad del modelo.** Acordar una frecuencia de revisión adecuada a la criticidad y variabilidad del servicio. Complementarla con revisiones ante cambios significativos de tráfico, arquitectura, instrumentación o responsabilidad operativa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Un consumo explicable, atribuible y revisable, con acciones que equilibren la capacidad de investigación y el uso responsable de los recursos compartidos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Consumo, capacidad y costos](/docs/observabilidad/gobierno?tema=costos)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Organización de cuentas y ambientes"
              },
              {
                "tipo": "parrafo",
                "texto": "**La organización de cuentas establece dónde se envía la telemetría, quién puede utilizarla y quién responde por su consumo.** El modelo corporativo debe permitir incorporar servicios de distintas unidades de negocio con criterios comunes de identificación, separación de ambientes y administración."
              },
              {
                "tipo": "parrafo",
                "texto": "La asignación considera cuatro dimensiones: **unidad responsable, ambiente de ejecución, sensibilidad de la información y propósito de uso**. Estas dimensiones orientan la selección de una cuenta existente o la evaluación de una separación adicional; no implican crear una cuenta por cada equipo o aplicación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Pregunta de asignación",
                  "Definición esperada"
                ],
                "filas": [
                  [
                    "Organización",
                    "¿Qué unidad y equipo responden por el servicio?",
                    "Responsables de operación y seguimiento del consumo"
                  ],
                  [
                    "Ambiente",
                    "¿El servicio opera en producción o en un entorno no productivo?",
                    "Destino y contexto de ambiente inequívocos"
                  ],
                  [
                    "Información",
                    "¿Qué restricciones de acceso y tratamiento aplican?",
                    "Permisos y condiciones de conservación pertinentes"
                  ],
                  [
                    "Propósito",
                    "¿Se observará la operación, la experiencia o un caso especializado?",
                    "Capacidades y alcance acordados"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Este apartado presenta criterios de organización corporativa. Los nombres de cuentas, permisos, límites y condiciones comerciales se verifican en el inventario y los acuerdos vigentes. La [distribución documentada de cuentas](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112320) conserva como referencia la implementación descrita para Digital Factory y otros ámbitos organizacionales; esa nomenclatura no define el estándar general."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Estructura organizacional y cuentas de consumo",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Función de la estructura organizacional.** Proporcionar un marco de administración que permita identificar las cuentas disponibles y sus responsables. La relación entre organización, cuentas y permisos depende de las capacidades y de la configuración del proveedor."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Función de una cuenta de consumo.** Delimitar el destino de señales y los recursos utilizados para consultarlas y operarlas. Cada servicio debe tener una asignación explícita; conocer la organización principal no basta para configurar la ingesta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identidad dentro de la cuenta.** Una cuenta puede reunir varios servicios cuando su alcance lo permita. En ese caso, la telemetría debe conservar la identidad del producto, servicio y ambiente para permitir consultas, atribución de consumo e investigación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de separación.** Evaluar cuentas diferenciadas cuando exista una necesidad de aislamiento, administración, tratamiento de datos o responsabilidad económica. Evitar que la creación de cuentas responda únicamente a preferencias de cada equipo, sin considerar el mantenimiento y la visibilidad del conjunto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro de asignación.** Mantener identificados el propósito de la cuenta, los servicios incluidos, los ambientes cubiertos y sus responsables. Los endpoints y las referencias a credenciales deben corresponder a esa asignación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo puede localizar el destino de su telemetría y conocer quién administra el ámbito donde se consume."
                      }
                    ]
                  },
                  {
                    "titulo": "Separación de ambientes y propósitos",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Producción.** El destino productivo debe permitir investigar operaciones reales y mantener las consultas y alertas utilizadas por los responsables del servicio. La identidad del ambiente debe estar presente en las señales y en los recursos de consulta pertinentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Ambientes no productivos.** Desarrollo, pruebas, integración y staging requieren una clasificación explícita. Si comparten cuenta, deben distinguirse mediante contexto consistente; compartir el destino no convierte sus datos en equivalentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Capacidades especializadas.** Los casos de seguridad u otros propósitos específicos pueden requerir un alcance diferenciado. La asignación se acuerda con sus responsables según la información y el uso previstos. Seguridad es un propósito de análisis, no un ambiente de despliegue."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Alcance",
                          "Objetivo",
                          "Aspecto que debe verificarse"
                        ],
                        "filas": [
                          [
                            "Productivo",
                            "Comprender y operar servicios en uso real",
                            "Consultas, alertas y accesos corresponden al entorno productivo"
                          ],
                          [
                            "No productivo",
                            "Validar integraciones y comportamiento antes de producción",
                            "Las señales de pruebas se distinguen y tienen un propósito de conservación"
                          ],
                          [
                            "Especializado",
                            "Atender necesidades con administración o tratamiento particular",
                            "El alcance y los responsables están definidos para el caso de uso"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Promoción entre ambientes.** Al desplegar una versión, revisar destino, configuración y referencias a secretos del ambiente receptor. Una validación en staging no confirma por sí sola que producción tenga habilitada la integración correcta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación operativa.** Ejecutar una operación representativa y localizar sus señales en el alcance previsto. Comprobar que las consultas y alertas no mezclen inadvertidamente actividad productiva con pruebas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Cada ambiente tiene un destino confirmado y una identidad reconocible, con separación acorde a sus necesidades de operación y acceso."
                      }
                    ]
                  },
                  {
                    "titulo": "Asignación por unidad y responsabilidad de consumo",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio organizacional.** Asociar el servicio con la unidad de negocio o dominio responsable y con el equipo que lo opera. El lenguaje, la infraestructura o el proveedor de alojamiento no determinan por sí solos su asignación organizacional."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad operativa.** Identificar quién mantiene la integración, quién utiliza las señales y quién coordina cambios de configuración. Cuando intervengan varios equipos, precisar la responsabilidad de cada uno sobre la aplicación y las capacidades compartidas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad de consumo.** Definir quién revisa el volumen, la conservación y las condiciones económicas aplicables. Utilizar una cuenta compartida no elimina la necesidad de atribuir consumo a los servicios que lo generan."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Habilitación y soporte.** Confirmar quién administra la cuenta y qué canal permite coordinar accesos, integración e incidentes. Los equipos pueden compartir estándares técnicos y tener condiciones de atención diferentes; estas deben quedar identificadas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Condiciones económicas.** Registrar la modalidad aplicable según los acuerdos vigentes. El nombre de una cuenta o la pertenencia a una unidad no permiten inferir tarifas, cuotas o cobertura contractual."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cambio de responsabilidad.** Ante una reorganización o transferencia de un servicio, revisar si la cuenta sigue siendo adecuada. Considerar acceso al histórico, credenciales, dashboards, alertas y atribución de consumo antes de modificar el destino. No toda transferencia de equipo requiere mover los datos a otra cuenta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Retiro del servicio.** Coordinar el cese del envío, revisar recursos y accesos que dejen de utilizarse y definir el tratamiento del histórico según las condiciones aplicables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La asignación de cuentas se mantiene alineada con la responsabilidad real de los servicios durante todo su ciclo de vida."
                      }
                    ]
                  },
                  {
                    "titulo": "Usuarios y credenciales por cuenta",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Cada cuenta tiene dominio, gestión de usuarios y API keys propios. El acceso humano y la credencial de ingesta deben corresponder al destino y ambiente previstos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Las claves privadas se gestionan como secretos. La clave pública específica de RUM tiene un propósito diferente y no sustituye credenciales de backend o administración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Acceso de personas.** Asignar permisos según la función que se necesita ejercer: consultar información, mantener recursos operativos o administrar la cuenta. Verificar el alcance efectivo en cada cuenta y revisar los accesos cuando una persona cambia de equipo o deja de necesitar esa función."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Credenciales de integración.** Asociar cada referencia a secreto con su propósito, cuenta, ambiente y responsable. Evitar reutilizar una credencial por comodidad entre destinos distintos. La configuración de la aplicación debe referenciar el mecanismo de secretos utilizado, sin incorporar claves privadas al código o a la documentación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Configuración coherente.** Revisar conjuntamente endpoint, cuenta, ambiente e identidad del servicio. Una credencial válida no demuestra que el envío corresponda al destino previsto; del mismo modo, poder consultar una cuenta no garantiza que la aplicación tenga habilitada la ingesta."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Elemento",
                          "Qué debe quedar identificado",
                          "Verificación"
                        ],
                        "filas": [
                          [
                            "Servicio consumidor",
                            "Producto, servicio y equipo responsable",
                            "Las señales permiten reconocer su origen"
                          ],
                          [
                            "Cuenta y ambiente",
                            "Destino acordado y entorno de ejecución",
                            "Una operación de prueba aparece en el alcance previsto"
                          ],
                          [
                            "Acceso humano",
                            "Personas o grupos y función requerida",
                            "Los permisos permiten realizar la tarea autorizada"
                          ],
                          [
                            "Credencial de integración",
                            "Propósito, referencia al secreto y responsable",
                            "La integración funciona sin exponer el valor de la clave"
                          ],
                          [
                            "Recursos operativos",
                            "Consultas, dashboards y alertas utilizados",
                            "Apuntan a la cuenta y al ambiente correspondientes"
                          ],
                          [
                            "Seguimiento",
                            "Responsable de revisar accesos y consumo",
                            "Existe una persona o equipo que puede gestionar cambios"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Ciclo de vida.** Revisar las credenciales ante cambios de integración, rotación o retiro del servicio. Coordinar la actualización y validar el envío antes de retirar una referencia anterior que aún pueda estar en uso. Ante una exposición, aplicar el procedimiento de seguridad correspondiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Trazabilidad administrativa.** Mantener el registro de asignación sin incluir valores secretos. Debe permitir responder qué cuenta utiliza un servicio, quién administra sus accesos, qué integración envía los datos y quién coordina una modificación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Personas e integraciones utilizan los permisos necesarios en el ámbito correcto, y los cambios pueden realizarse con responsables y evidencias identificables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Usuarios y permisos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329) · [RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Modelo de consumo de observabilidad"
              },
              {
                "tipo": "parrafo",
                "texto": "**Los equipos consumen una capacidad compartida de instrumentación, transporte y análisis de telemetría.** Gobierno establece cómo se relacionan el servicio de negocio, la cuenta de destino, el estándar técnico y la responsabilidad sobre el consumo."
              },
              {
                "tipo": "parrafo",
                "texto": "El recorrido comienza cuando un producto necesita observabilidad y continúa durante toda su operación: identificar el alcance, utilizar las capacidades corporativas y revisar el valor de las señales conservadas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consumir observabilidad implica gestionar una relación entre necesidad, capacidad y responsabilidad.** El equipo de producto define qué necesita comprender de su servicio; las capacidades compartidas permiten generar, transportar y analizar esa información. La cuenta de destino organiza el consumo y los accesos, mientras que la revisión operativa permite comprobar si las señales aportan el valor esperado."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Etapa",
                  "Decisión principal",
                  "Resultado que debe quedar definido"
                ],
                "filas": [
                  [
                    "Identificar",
                    "Qué servicio necesita observabilidad y para qué",
                    "Alcance funcional, operaciones relevantes y equipo responsable"
                  ],
                  [
                    "Delimitar",
                    "Dónde se consumirá la capacidad y bajo qué condiciones",
                    "Cuenta, ambiente, accesos y capacidades previstas"
                  ],
                  [
                    "Integrar",
                    "Cómo producir y entregar señales dentro del estándar",
                    "Integración compatible y evidencias de funcionamiento"
                  ],
                  [
                    "Revisar",
                    "Qué valor aporta el consumo y qué debe ajustarse",
                    "Acciones sobre calidad, volumen, conservación y uso operativo"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios siguientes orientan la gestión del consumo. Las cuotas, tarifas, tiempos de atención y compromisos de disponibilidad deben confirmarse en los acuerdos aplicables; no se deducen de la habilitación técnica de una cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Modelo operativo](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807286351), [cuentas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112320) y [uso responsable](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Identificar el servicio consumidor"
              },
              {
                "tipo": "parrafo",
                "texto": "Precisar producto, aplicación, servicio, ambiente y equipo responsable. El propósito de las señales debe corresponder a una necesidad de operación o negocio identificable."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Delimitar la unidad de consumo.** Identificar el servicio que genera telemetría y su relación con el producto. Cuando un producto reúne varias aplicaciones o componentes, conservar una identidad diferenciada que permita investigar cada servicio y atribuir su consumo sin perder la visión del conjunto."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Establecer el propósito.** Definir las preguntas que deben responder las señales: qué operaciones fallan, dónde aumenta la latencia, qué dependencia interviene o si se alcanza un resultado de negocio. Estas preguntas orientan la selección de señales y evitan recopilar información sin un uso previsto."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Asignar responsabilidades.** Identificar quién mantiene la instrumentación, quién utiliza la información durante la operación y quién revisa el consumo. Estas funciones pueden recaer en el mismo equipo, pero deben poder distinguirse para gestionar cambios e incidentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Caracterizar la demanda.** Considerar ambientes, tráfico habitual, variaciones estacionales, procesos por lotes y eventos que puedan incrementar la emisión. Registrar las estimaciones como hipótesis de planificación y contrastarlas con mediciones después de habilitar la integración."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Información del servicio",
                  "Utilidad para el modelo de consumo"
                ],
                "filas": [
                  [
                    "Producto, aplicación y servicio",
                    "Relacionar telemetría, operación y ámbito de negocio"
                  ],
                  [
                    "Ambiente y ámbito organizacional",
                    "Orientar la asignación de cuenta y destino"
                  ],
                  [
                    "Equipo y referente responsable",
                    "Coordinar habilitación, cambios y seguimiento"
                  ],
                  [
                    "Operaciones y preguntas relevantes",
                    "Justificar señales, consultas e indicadores"
                  ],
                  [
                    "Señales e integraciones previstas",
                    "Identificar las capacidades necesarias"
                  ],
                  [
                    "Patrón de demanda conocido o estimado",
                    "Preparar la revisión de volumen y capacidad"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una definición del servicio consumidor que permita reconocer quién genera los datos, para qué se utilizarán y quién responde por su calidad y consumo. La identidad técnica debe corresponder con esa definición."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Definir cuenta y alcance"
              },
              {
                "tipo": "parrafo",
                "texto": "Ubicar el servicio en la cuenta correspondiente a su ámbito organizacional y ambiente. Confirmar accesos, destino de ingesta y condiciones aplicables antes de habilitar el envío."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Confirmar la asignación organizacional.** Utilizar la distribución documentada de cuentas como referencia y verificar cuál corresponde al servicio. La pertenencia a un producto o equipo no debe convertirse en una suposición sobre el destino de sus señales."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Separar los ambientes.** Comprobar que las señales y credenciales corresponden al ambiente previsto. Esta delimitación permite interpretar correctamente los datos y evita que pruebas o integraciones temporales se confundan con operación productiva."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Precisar las capacidades a consumir.** Diferenciar el envío de señales de backend, la observación de frontend, los eventos de negocio y el seguimiento de costos. Cada capacidad requiere confirmar su alcance y habilitación; disponer de acceso a una cuenta no significa tener todas las integraciones disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Distinguir acceso humano e ingesta.** Los permisos de consulta y administración responden a funciones de las personas. Las credenciales de envío corresponden a las integraciones. Ambos deben quedar asociados al destino correcto y gestionarse mediante los mecanismos de seguridad aplicables."
              },
              {
                "tipo": "parrafo",
                "texto": "**5. Aclarar las condiciones de consumo.** Identificar los criterios de conservación, límites y condiciones económicas que correspondan a la cuenta. Cuando un dato no esté confirmado, dejarlo explícitamente pendiente en la definición del consumo en lugar de asumir una condición por defecto."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una relación inequívoca entre servicio, ambiente, cuenta y capacidades previstas, con responsables identificados para administrar accesos y resolver dudas de habilitación."
              },
              {
                "tipo": "parrafo",
                "texto": "[Organización de cuentas y ambientes](/docs/observabilidad/gobierno?tema=consumo) · [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) · [Seguridad](/docs/observabilidad/gobierno?tema=seguridad)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Consumir el estándar compartido"
              },
              {
                "tipo": "parrafo",
                "texto": "Integrar la instrumentación mediante Ægis y las capacidades OES documentadas para el entorno. La habilitación técnica se complementa con indicadores y contexto definidos por el producto."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Seleccionar una integración compatible.** Confirmar lenguaje, framework, entorno de ejecución y versión de la integración. Utilizar las guías del Golden Path para concretar la implementación y registrar las particularidades que requieran evaluación."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Aplicar identidad y contexto.** Las señales deben permitir distinguir el servicio y el ambiente, así como relacionar la ejecución cuando corresponda. El equipo consumidor define los atributos de negocio necesarios y revisa que su contenido sea pertinente y seguro."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Coordinar la entrega de telemetría.** Confirmar cómo se conecta la aplicación con la capacidad OES habilitada y cuál es el destino final. El producto mantiene la calidad de lo que emite; la operación de los componentes compartidos se coordina con plataforma."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Validar de extremo a extremo.** Ejecutar operaciones representativas y comprobar que las señales se pueden consultar en la cuenta prevista. Revisar tanto escenarios exitosos como fallas y confirmar que la información permite responder las preguntas definidas al inicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**5. Preparar el uso operativo.** Identificar las consultas, dashboards o alertas que utilizará el equipo y sus responsables. Incorporar una integración al servicio incluye que sus operadores sepan encontrar e interpretar las evidencias."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Aspecto a validar",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Identidad",
                    "El servicio y el ambiente se distinguen correctamente"
                  ],
                  [
                    "Entrega",
                    "Las señales están disponibles en el destino previsto"
                  ],
                  [
                    "Contexto",
                    "Las operaciones conservan los atributos y relaciones necesarios para investigarlas"
                  ],
                  [
                    "Calidad",
                    "Los datos son interpretables y no incluyen información innecesaria o sensible"
                  ],
                  [
                    "Impacto técnico",
                    "Se ha revisado el efecto de la integración sobre los recursos y comportamiento de la aplicación"
                  ],
                  [
                    "Uso operativo",
                    "El equipo puede ejecutar una consulta o investigación representativa"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una integración que produzca evidencia útil y pueda mantenerse durante la operación. Cualquier extensión que altere el modelo compartido se evalúa mediante el proceso de decisiones y excepciones."
              },
              {
                "tipo": "parrafo",
                "texto": "[Golden Path](/docs/observabilidad/golden-path) · [Estándares](/docs/observabilidad/gobierno?tema=estandares) · [Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Revisar consumo y resultado"
              },
              {
                "tipo": "parrafo",
                "texto": "Relacionar el volumen y la conservación de señales con su utilidad. El seguimiento permite identificar desviaciones y priorizar mejoras de calidad, capacidad y costo."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Establecer una referencia medida.** Una vez habilitado el servicio, observar su consumo bajo condiciones conocidas. Registrar el período analizado y relacionarlo con tráfico, despliegues y actividad de negocio para evitar comparaciones entre situaciones diferentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Revisar utilidad y calidad.** Determinar si las señales permiten investigar incidentes, reconocer desviaciones y verificar decisiones. El volumen por sí solo no demuestra cobertura ni valor; también deben revisarse vacíos de información, ruido y atributos que dificulten el análisis."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Explicar las variaciones.** Ante un aumento de consumo, distinguir crecimiento de demanda, incorporación de servicios, cambios de instrumentación, errores repetitivos y duplicación de envíos. La acción depende de la causa y de la utilidad de la información adicional."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Acordar ajustes.** Evaluar nivel de detalle, señales duplicadas, cardinalidad y conservación según la necesidad operativa. Los ajustes deben preservar la evidencia necesaria para investigar el servicio y respetar los criterios de seguridad aplicables."
              },
              {
                "tipo": "parrafo",
                "texto": "**5. Verificar el resultado del cambio.** Comparar consumo y capacidad de investigación antes y después del ajuste. Registrar qué se modificó, quién es responsable y qué evidencia demuestra que la reducción de volumen o la ampliación de cobertura logró su propósito."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Situación observada",
                  "Revisión sugerida"
                ],
                "filas": [
                  [
                    "El volumen crece junto con el tráfico",
                    "Comparar el consumo por operación y comprobar si el crecimiento es proporcional"
                  ],
                  [
                    "El volumen aumenta sin un cambio equivalente de demanda",
                    "Investigar despliegues, errores repetidos, duplicación o cambios de configuración"
                  ],
                  [
                    "Hay señales, pero no permiten explicar incidentes",
                    "Revisar contexto, cobertura y correlación antes de ampliar la ingesta"
                  ],
                  [
                    "Se conserva información sin un uso identificado",
                    "Revisar su propósito y conservación con los responsables correspondientes"
                  ],
                  [
                    "El servicio cambia de equipo o se retira",
                    "Actualizar responsables y revisar integraciones, credenciales, alertas y tratamiento del histórico"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Continuidad del modelo.** Acordar una frecuencia de revisión adecuada a la criticidad y variabilidad del servicio. Complementarla con revisiones ante cambios significativos de tráfico, arquitectura, instrumentación o responsabilidad operativa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Un consumo explicable, atribuible y revisable, con acciones que equilibren la capacidad de investigación y el uso responsable de los recursos compartidos."
              },
              {
                "tipo": "parrafo",
                "texto": "[Consumo, capacidad y costos](/docs/observabilidad/gobierno?tema=costos)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Organización de cuentas y ambientes"
              },
              {
                "tipo": "parrafo",
                "texto": "**La organización de cuentas establece dónde se envía la telemetría, quién puede utilizarla y quién responde por su consumo.** El modelo corporativo debe permitir incorporar servicios de distintas unidades de negocio con criterios comunes de identificación, separación de ambientes y administración."
              },
              {
                "tipo": "parrafo",
                "texto": "La asignación considera cuatro dimensiones: **unidad responsable, ambiente de ejecución, sensibilidad de la información y propósito de uso**. Estas dimensiones orientan la selección de una cuenta existente o la evaluación de una separación adicional; no implican crear una cuenta por cada equipo o aplicación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Pregunta de asignación",
                  "Definición esperada"
                ],
                "filas": [
                  [
                    "Organización",
                    "¿Qué unidad y equipo responden por el servicio?",
                    "Responsables de operación y seguimiento del consumo"
                  ],
                  [
                    "Ambiente",
                    "¿El servicio opera en producción o en un entorno no productivo?",
                    "Destino y contexto de ambiente inequívocos"
                  ],
                  [
                    "Información",
                    "¿Qué restricciones de acceso y tratamiento aplican?",
                    "Permisos y condiciones de conservación pertinentes"
                  ],
                  [
                    "Propósito",
                    "¿Se observará la operación, la experiencia o un caso especializado?",
                    "Capacidades y alcance acordados"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Este apartado presenta criterios de organización corporativa. Los nombres de cuentas, permisos, límites y condiciones comerciales se verifican en el inventario y los acuerdos vigentes. La [distribución documentada de cuentas](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112320) conserva como referencia la implementación descrita para Digital Factory y otros ámbitos organizacionales; esa nomenclatura no define el estándar general."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Estructura organizacional y cuentas de consumo"
              },
              {
                "tipo": "parrafo",
                "texto": "**Función de la estructura organizacional.** Proporcionar un marco de administración que permita identificar las cuentas disponibles y sus responsables. La relación entre organización, cuentas y permisos depende de las capacidades y de la configuración del proveedor."
              },
              {
                "tipo": "parrafo",
                "texto": "**Función de una cuenta de consumo.** Delimitar el destino de señales y los recursos utilizados para consultarlas y operarlas. Cada servicio debe tener una asignación explícita; conocer la organización principal no basta para configurar la ingesta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identidad dentro de la cuenta.** Una cuenta puede reunir varios servicios cuando su alcance lo permita. En ese caso, la telemetría debe conservar la identidad del producto, servicio y ambiente para permitir consultas, atribución de consumo e investigación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de separación.** Evaluar cuentas diferenciadas cuando exista una necesidad de aislamiento, administración, tratamiento de datos o responsabilidad económica. Evitar que la creación de cuentas responda únicamente a preferencias de cada equipo, sin considerar el mantenimiento y la visibilidad del conjunto."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro de asignación.** Mantener identificados el propósito de la cuenta, los servicios incluidos, los ambientes cubiertos y sus responsables. Los endpoints y las referencias a credenciales deben corresponder a esa asignación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo puede localizar el destino de su telemetría y conocer quién administra el ámbito donde se consume."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Separación de ambientes y propósitos"
              },
              {
                "tipo": "parrafo",
                "texto": "**Producción.** El destino productivo debe permitir investigar operaciones reales y mantener las consultas y alertas utilizadas por los responsables del servicio. La identidad del ambiente debe estar presente en las señales y en los recursos de consulta pertinentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Ambientes no productivos.** Desarrollo, pruebas, integración y staging requieren una clasificación explícita. Si comparten cuenta, deben distinguirse mediante contexto consistente; compartir el destino no convierte sus datos en equivalentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Capacidades especializadas.** Los casos de seguridad u otros propósitos específicos pueden requerir un alcance diferenciado. La asignación se acuerda con sus responsables según la información y el uso previstos. Seguridad es un propósito de análisis, no un ambiente de despliegue."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Alcance",
                  "Objetivo",
                  "Aspecto que debe verificarse"
                ],
                "filas": [
                  [
                    "Productivo",
                    "Comprender y operar servicios en uso real",
                    "Consultas, alertas y accesos corresponden al entorno productivo"
                  ],
                  [
                    "No productivo",
                    "Validar integraciones y comportamiento antes de producción",
                    "Las señales de pruebas se distinguen y tienen un propósito de conservación"
                  ],
                  [
                    "Especializado",
                    "Atender necesidades con administración o tratamiento particular",
                    "El alcance y los responsables están definidos para el caso de uso"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Promoción entre ambientes.** Al desplegar una versión, revisar destino, configuración y referencias a secretos del ambiente receptor. Una validación en staging no confirma por sí sola que producción tenga habilitada la integración correcta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación operativa.** Ejecutar una operación representativa y localizar sus señales en el alcance previsto. Comprobar que las consultas y alertas no mezclen inadvertidamente actividad productiva con pruebas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Cada ambiente tiene un destino confirmado y una identidad reconocible, con separación acorde a sus necesidades de operación y acceso."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Asignación por unidad y responsabilidad de consumo"
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio organizacional.** Asociar el servicio con la unidad de negocio o dominio responsable y con el equipo que lo opera. El lenguaje, la infraestructura o el proveedor de alojamiento no determinan por sí solos su asignación organizacional."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad operativa.** Identificar quién mantiene la integración, quién utiliza las señales y quién coordina cambios de configuración. Cuando intervengan varios equipos, precisar la responsabilidad de cada uno sobre la aplicación y las capacidades compartidas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad de consumo.** Definir quién revisa el volumen, la conservación y las condiciones económicas aplicables. Utilizar una cuenta compartida no elimina la necesidad de atribuir consumo a los servicios que lo generan."
              },
              {
                "tipo": "parrafo",
                "texto": "**Habilitación y soporte.** Confirmar quién administra la cuenta y qué canal permite coordinar accesos, integración e incidentes. Los equipos pueden compartir estándares técnicos y tener condiciones de atención diferentes; estas deben quedar identificadas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Condiciones económicas.** Registrar la modalidad aplicable según los acuerdos vigentes. El nombre de una cuenta o la pertenencia a una unidad no permiten inferir tarifas, cuotas o cobertura contractual."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cambio de responsabilidad.** Ante una reorganización o transferencia de un servicio, revisar si la cuenta sigue siendo adecuada. Considerar acceso al histórico, credenciales, dashboards, alertas y atribución de consumo antes de modificar el destino. No toda transferencia de equipo requiere mover los datos a otra cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Retiro del servicio.** Coordinar el cese del envío, revisar recursos y accesos que dejen de utilizarse y definir el tratamiento del histórico según las condiciones aplicables."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La asignación de cuentas se mantiene alineada con la responsabilidad real de los servicios durante todo su ciclo de vida."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Usuarios y credenciales por cuenta"
              },
              {
                "tipo": "parrafo",
                "texto": "Cada cuenta tiene dominio, gestión de usuarios y API keys propios. El acceso humano y la credencial de ingesta deben corresponder al destino y ambiente previstos."
              },
              {
                "tipo": "parrafo",
                "texto": "Las claves privadas se gestionan como secretos. La clave pública específica de RUM tiene un propósito diferente y no sustituye credenciales de backend o administración."
              },
              {
                "tipo": "parrafo",
                "texto": "**Acceso de personas.** Asignar permisos según la función que se necesita ejercer: consultar información, mantener recursos operativos o administrar la cuenta. Verificar el alcance efectivo en cada cuenta y revisar los accesos cuando una persona cambia de equipo o deja de necesitar esa función."
              },
              {
                "tipo": "parrafo",
                "texto": "**Credenciales de integración.** Asociar cada referencia a secreto con su propósito, cuenta, ambiente y responsable. Evitar reutilizar una credencial por comodidad entre destinos distintos. La configuración de la aplicación debe referenciar el mecanismo de secretos utilizado, sin incorporar claves privadas al código o a la documentación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Configuración coherente.** Revisar conjuntamente endpoint, cuenta, ambiente e identidad del servicio. Una credencial válida no demuestra que el envío corresponda al destino previsto; del mismo modo, poder consultar una cuenta no garantiza que la aplicación tenga habilitada la ingesta."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Elemento",
                  "Qué debe quedar identificado",
                  "Verificación"
                ],
                "filas": [
                  [
                    "Servicio consumidor",
                    "Producto, servicio y equipo responsable",
                    "Las señales permiten reconocer su origen"
                  ],
                  [
                    "Cuenta y ambiente",
                    "Destino acordado y entorno de ejecución",
                    "Una operación de prueba aparece en el alcance previsto"
                  ],
                  [
                    "Acceso humano",
                    "Personas o grupos y función requerida",
                    "Los permisos permiten realizar la tarea autorizada"
                  ],
                  [
                    "Credencial de integración",
                    "Propósito, referencia al secreto y responsable",
                    "La integración funciona sin exponer el valor de la clave"
                  ],
                  [
                    "Recursos operativos",
                    "Consultas, dashboards y alertas utilizados",
                    "Apuntan a la cuenta y al ambiente correspondientes"
                  ],
                  [
                    "Seguimiento",
                    "Responsable de revisar accesos y consumo",
                    "Existe una persona o equipo que puede gestionar cambios"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Ciclo de vida.** Revisar las credenciales ante cambios de integración, rotación o retiro del servicio. Coordinar la actualización y validar el envío antes de retirar una referencia anterior que aún pueda estar en uso. Ante una exposición, aplicar el procedimiento de seguridad correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Trazabilidad administrativa.** Mantener el registro de asignación sin incluir valores secretos. Debe permitir responder qué cuenta utiliza un servicio, quién administra sus accesos, qué integración envía los datos y quién coordina una modificación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Personas e integraciones utilizan los permisos necesarios en el ámbito correcto, y los cambios pueden realizarse con responsables y evidencias identificables."
              },
              {
                "tipo": "parrafo",
                "texto": "[Usuarios y permisos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329) · [RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701)."
              }
            ],
            "fuentes": [
              {
                "titulo": "Modelo operativo",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807286351"
              },
              {
                "titulo": "cuentas en Coralogix",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112320"
              },
              {
                "titulo": "uso responsable",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270"
              }
            ]
          },
          {
            "id": "accesos",
            "titulo": "Identidad y accesos",
            "bajada": "Roles, permisos y responsabilidades por cuenta.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Responsabilidades y control de acceso"
              },
              {
                "tipo": "parrafo",
                "texto": "**El modelo de consumo requiere responsables tanto del servicio como de la plataforma.** Los permisos se asignan por cuenta y función; deben corresponder a las tareas que realizará cada equipo."
              },
              {
                "tipo": "parrafo",
                "texto": "**La identidad identifica a quien actúa; la autorización delimita lo que puede hacer.** Para gestionar el acceso deben quedar relacionados la persona o integración, su función, la cuenta de destino y el alcance requerido. Pertenecer a un equipo no sustituye la comprobación de los permisos efectivos."
              },
              {
                "tipo": "parrafo",
                "texto": "Los roles citados a continuación corresponden a las guías documentadas. Sus nombres no sustituyen la revisión de la configuración vigente. Los criterios de gestión orientan la asignación y revisión de accesos, sin establecer permisos adicionales ni nuevos canales de aprobación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Definición necesaria"
                ],
                "filas": [
                  [
                    "Identidad",
                    "Persona o integración a la que corresponde el acceso"
                  ],
                  [
                    "Propósito",
                    "Tarea operativa que justifica la habilitación"
                  ],
                  [
                    "Alcance",
                    "Cuenta, ambiente y recursos necesarios para realizarla"
                  ],
                  [
                    "Permisos",
                    "Acciones requeridas: consulta, mantenimiento o administración"
                  ],
                  [
                    "Responsabilidad",
                    "Equipo que solicita y responsable que valida el alcance según el proceso vigente"
                  ],
                  [
                    "Vigencia",
                    "Condición de permanencia y revisión ante cambios o retiro"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Gobernanza operativa](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055754), [usuarios y permisos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329) y [solicitud por AGP](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/851476526)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Producto y referentes técnicos",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Producto mantiene el significado y la calidad de las señales, dashboards y alertas. Responde por la definición del SLO, con participación técnica de SRE según el Charter."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La guía asigna **Observability Lead** a TLs o referentes. **Developer** es un rol personalizado descrito como lectura con permisos adicionales de dashboards. Las guías reservan la creación de alertas y webhooks al rol de Observability Lead."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad sobre el servicio.** El equipo de producto define qué operaciones necesita observar, qué significan los indicadores y quién responde cuando una alerta requiere intervención. Mantener acceso a las herramientas debe acompañarse de conocimiento del servicio y de sus procedimientos operativos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Referente de observabilidad.** El referente técnico coordina las necesidades de instrumentación y los recursos que utiliza el equipo para investigar. Cuando necesita crear alertas o webhooks, debe confirmar que dispone del rol y alcance documentados para la cuenta correspondiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Trabajo de desarrollo.** Los permisos deben permitir las consultas y tareas de mantenimiento necesarias para el servicio. La denominación Developer no implica administración de usuarios, credenciales o configuración global; sus permisos adicionales deben comprobarse en la cuenta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad sobre recursos compartidos.** Antes de modificar un dashboard, alerta o integración utilizado por otros equipos, identificar sus consumidores y coordinar el cambio. El permiso técnico para editar un recurso no reemplaza la responsabilidad sobre sus efectos operativos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Cada integrante puede realizar las tareas asociadas a su función y el servicio mantiene referentes identificados para sus indicadores, dashboards y alertas."
                      }
                    ]
                  },
                  {
                    "titulo": "Plataforma y SRE",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Plataforma mantiene librerías, pipelines, collectors y gateways compartidos. SRE acompaña indicadores, objetivos de servicio y revisiones de confiabilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La matriz de acceso asocia el grupo SRE/Platform con **Platform Admin**. Las responsabilidades operativas no deben confundirse con la semántica de los indicadores, que corresponde al producto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Administración de la capacidad.** La operación de los componentes comunes requiere distinguir cambios sobre la plataforma de cambios sobre un servicio consumidor. Una modificación de pipelines o configuración compartida puede afectar a múltiples equipos y debe considerar su alcance antes de ejecutarse."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Uso de privilegios.** El rol administrativo documentado corresponde a funciones de administración. La asignación debe justificarse por las tareas requeridas y por las cuentas que la persona necesita gestionar, sin extender automáticamente ese alcance a toda la organización."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Acompañamiento de SRE.** La colaboración en indicadores, SLO y confiabilidad requiere acceso suficiente para analizar las evidencias del servicio. El equipo de producto conserva la responsabilidad sobre el significado de las operaciones y los resultados de negocio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Coordinación de cambios.** Identificar qué capacidad se modifica, qué consumidores pueden verse afectados y quién verificará el resultado. Los cambios de permisos, destinos o integraciones compartidas deben permitir reconstruir quién actuó y con qué propósito mediante los mecanismos de registro disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La plataforma cuenta con responsables habilitados para operarla y los equipos consumidores conocen el ámbito de intervención y el canal de coordinación correspondiente."
                      }
                    ]
                  },
                  {
                    "titulo": "Seguridad y consulta",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "La matriz contempla **Security User** para Seguridad y **Read-Only User** para consulta. La cuenta y el alcance de cada grupo determinan dónde aplica el permiso."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Las solicitudes se tramitan por el mecanismo corporativo documentado. El acceso a una cuenta no demuestra autorización sobre todas las demás."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Consulta operativa.** El acceso de lectura permite investigar información dentro del alcance habilitado. Debe asignarse a las cuentas necesarias para la tarea; que una persona no pueda modificar recursos no elimina la necesidad de revisar qué datos puede consultar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Funciones de seguridad.** El rol Security User debe interpretarse según su configuración efectiva y el propósito autorizado. Su nombre no permite deducir acceso universal a señales, exportaciones o administración de la plataforma."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Solicitud de acceso.** Utilizar el mecanismo corporativo documentado, indicando identidad, equipo, cuenta y ambiente, actividad requerida y justificación. Para necesidades temporales, explicitar la condición de finalización y coordinar su retiro mediante el proceso vigente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación funcional.** Una vez habilitado el acceso, comprobar que la persona puede realizar la tarea prevista en la cuenta correcta. Si el permiso resulta insuficiente, precisar la acción faltante antes de solicitar un perfil más amplio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las personas autorizadas consultan la información necesaria para su función y las solicitudes mantienen una relación verificable entre necesidad y alcance."
                      }
                    ]
                  },
                  {
                    "titulo": "Arquitectura y decisiones transversales",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Arquitectura participa en coherencia entre dominios, interoperabilidad, proveedores y excepciones al estándar. Las decisiones que afectan capacidades compartidas deben considerar a sus consumidores y responsables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Alcance de participación.** Evaluar cómo una propuesta modifica la organización de cuentas, el aislamiento, las integraciones y la interoperabilidad. La participación en una decisión no requiere por sí misma privilegios administrativos permanentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evaluación de excepciones.** Describir la necesidad, las alternativas, los recursos afectados y el alcance de acceso solicitado. Registrar quién responde por la excepción y cuándo corresponde revisarla, utilizando el proceso corporativo aplicable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Decisiones entre equipos.** Cuando una integración necesita operar sobre varias cuentas o dominios, revisar el alcance con los responsables involucrados. Documentar cómo se mantendrá la separación de responsabilidades y cómo se retirará el acceso si cambia la solución."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las decisiones transversales cuentan con responsables, justificación y límites explícitos, sin convertir una necesidad puntual en acceso general indefinido."
                      }
                    ]
                  },
                  {
                    "titulo": "Identidades de personas e integraciones",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Personas.** El acceso interactivo debe corresponder a una identidad reconocible mediante el mecanismo corporativo habilitado. La trazabilidad debe permitir relacionar las acciones con quien las realiza, evitando que una identidad compartida oculte esa responsabilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Integraciones.** El envío de telemetría y las automatizaciones utilizan credenciales con un propósito técnico. Identificar la aplicación consumidora, cuenta, ambiente y responsable de mantenerlas. Una clave de ingesta no representa el permiso de una persona para administrar la cuenta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Gestión de secretos.** Conservar las claves privadas mediante el mecanismo de secretos aplicable. En inventarios y solicitudes registrar referencias y responsables, sin copiar los valores de las credenciales. La clave pública específica de RUM mantiene un propósito diferente al de las credenciales privadas de backend."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cambios y retiro.** Revisar credenciales cuando cambia la integración, su responsable o su destino. Al retirar una aplicación, identificar qué claves y permisos dejan de ser necesarios y comprobar que no sean utilizados por otro consumidor antes de revocarlos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Cada acceso técnico tiene un consumidor y un responsable identificados; los accesos humanos mantienen una identidad y función verificables."
                      }
                    ]
                  },
                  {
                    "titulo": "Alta, revisión y retiro de accesos",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "La gestión continúa después de la habilitación inicial. La revisión debe considerar cambios de equipo, función, cuenta, integración y necesidad operativa."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Momento",
                          "Acción de gestión",
                          "Evidencia esperada"
                        ],
                        "filas": [
                          [
                            "Solicitud",
                            "Precisar identidad, propósito, cuenta y permisos requeridos",
                            "Solicitud con alcance y justificación"
                          ],
                          [
                            "Validación",
                            "Confirmar la necesidad con los responsables definidos por el proceso vigente",
                            "Decisión registrada sobre el alcance"
                          ],
                          [
                            "Habilitación",
                            "Asignar el perfil aplicable y comprobar la tarea prevista",
                            "Acceso funcional en la cuenta correcta"
                          ],
                          [
                            "Revisión",
                            "Contrastar permisos con la función actual",
                            "Confirmación o ajustes identificados"
                          ],
                          [
                            "Cambio de función",
                            "Revisar accesos anteriores y nuevas necesidades",
                            "Permisos alineados con la responsabilidad vigente"
                          ],
                          [
                            "Retiro",
                            "Revocar accesos que ya no se requieren y gestionar dependencias",
                            "Confirmación de retiro y continuidad de integraciones necesarias"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisión periódica.** Acordar la frecuencia según los criterios corporativos y la sensibilidad del alcance. Complementarla con revisiones ante cambios organizacionales o técnicos, sin esperar al siguiente ciclo para retirar permisos que han dejado de ser necesarios."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Acceso extraordinario.** Si una contingencia requiere permisos adicionales, utilizar el procedimiento vigente y explicitar motivo, alcance y condición de retiro. La urgencia no convierte automáticamente esa necesidad en una asignación permanente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Trazabilidad.** Mantener referencias a solicitudes, validaciones y cambios sin incluir secretos ni contenido innecesario de las señales. El registro debe permitir responder quién tiene acceso, para qué lo necesita y quién coordina su revisión."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Seguridad de la observabilidad](/docs/observabilidad/gobierno?tema=seguridad) · [Organización de cuentas](/docs/observabilidad/gobierno?tema=consumo) · [Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Responsabilidades y control de acceso"
              },
              {
                "tipo": "parrafo",
                "texto": "**El modelo de consumo requiere responsables tanto del servicio como de la plataforma.** Los permisos se asignan por cuenta y función; deben corresponder a las tareas que realizará cada equipo."
              },
              {
                "tipo": "parrafo",
                "texto": "**La identidad identifica a quien actúa; la autorización delimita lo que puede hacer.** Para gestionar el acceso deben quedar relacionados la persona o integración, su función, la cuenta de destino y el alcance requerido. Pertenecer a un equipo no sustituye la comprobación de los permisos efectivos."
              },
              {
                "tipo": "parrafo",
                "texto": "Los roles citados a continuación corresponden a las guías documentadas. Sus nombres no sustituyen la revisión de la configuración vigente. Los criterios de gestión orientan la asignación y revisión de accesos, sin establecer permisos adicionales ni nuevos canales de aprobación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Definición necesaria"
                ],
                "filas": [
                  [
                    "Identidad",
                    "Persona o integración a la que corresponde el acceso"
                  ],
                  [
                    "Propósito",
                    "Tarea operativa que justifica la habilitación"
                  ],
                  [
                    "Alcance",
                    "Cuenta, ambiente y recursos necesarios para realizarla"
                  ],
                  [
                    "Permisos",
                    "Acciones requeridas: consulta, mantenimiento o administración"
                  ],
                  [
                    "Responsabilidad",
                    "Equipo que solicita y responsable que valida el alcance según el proceso vigente"
                  ],
                  [
                    "Vigencia",
                    "Condición de permanencia y revisión ante cambios o retiro"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Gobernanza operativa](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055754), [usuarios y permisos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329) y [solicitud por AGP](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/851476526)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Producto y referentes técnicos"
              },
              {
                "tipo": "parrafo",
                "texto": "Producto mantiene el significado y la calidad de las señales, dashboards y alertas. Responde por la definición del SLO, con participación técnica de SRE según el Charter."
              },
              {
                "tipo": "parrafo",
                "texto": "La guía asigna **Observability Lead** a TLs o referentes. **Developer** es un rol personalizado descrito como lectura con permisos adicionales de dashboards. Las guías reservan la creación de alertas y webhooks al rol de Observability Lead."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad sobre el servicio.** El equipo de producto define qué operaciones necesita observar, qué significan los indicadores y quién responde cuando una alerta requiere intervención. Mantener acceso a las herramientas debe acompañarse de conocimiento del servicio y de sus procedimientos operativos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Referente de observabilidad.** El referente técnico coordina las necesidades de instrumentación y los recursos que utiliza el equipo para investigar. Cuando necesita crear alertas o webhooks, debe confirmar que dispone del rol y alcance documentados para la cuenta correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Trabajo de desarrollo.** Los permisos deben permitir las consultas y tareas de mantenimiento necesarias para el servicio. La denominación Developer no implica administración de usuarios, credenciales o configuración global; sus permisos adicionales deben comprobarse en la cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad sobre recursos compartidos.** Antes de modificar un dashboard, alerta o integración utilizado por otros equipos, identificar sus consumidores y coordinar el cambio. El permiso técnico para editar un recurso no reemplaza la responsabilidad sobre sus efectos operativos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Cada integrante puede realizar las tareas asociadas a su función y el servicio mantiene referentes identificados para sus indicadores, dashboards y alertas."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Plataforma y SRE"
              },
              {
                "tipo": "parrafo",
                "texto": "Plataforma mantiene librerías, pipelines, collectors y gateways compartidos. SRE acompaña indicadores, objetivos de servicio y revisiones de confiabilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "La matriz de acceso asocia el grupo SRE/Platform con **Platform Admin**. Las responsabilidades operativas no deben confundirse con la semántica de los indicadores, que corresponde al producto."
              },
              {
                "tipo": "parrafo",
                "texto": "**Administración de la capacidad.** La operación de los componentes comunes requiere distinguir cambios sobre la plataforma de cambios sobre un servicio consumidor. Una modificación de pipelines o configuración compartida puede afectar a múltiples equipos y debe considerar su alcance antes de ejecutarse."
              },
              {
                "tipo": "parrafo",
                "texto": "**Uso de privilegios.** El rol administrativo documentado corresponde a funciones de administración. La asignación debe justificarse por las tareas requeridas y por las cuentas que la persona necesita gestionar, sin extender automáticamente ese alcance a toda la organización."
              },
              {
                "tipo": "parrafo",
                "texto": "**Acompañamiento de SRE.** La colaboración en indicadores, SLO y confiabilidad requiere acceso suficiente para analizar las evidencias del servicio. El equipo de producto conserva la responsabilidad sobre el significado de las operaciones y los resultados de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Coordinación de cambios.** Identificar qué capacidad se modifica, qué consumidores pueden verse afectados y quién verificará el resultado. Los cambios de permisos, destinos o integraciones compartidas deben permitir reconstruir quién actuó y con qué propósito mediante los mecanismos de registro disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La plataforma cuenta con responsables habilitados para operarla y los equipos consumidores conocen el ámbito de intervención y el canal de coordinación correspondiente."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Seguridad y consulta"
              },
              {
                "tipo": "parrafo",
                "texto": "La matriz contempla **Security User** para Seguridad y **Read-Only User** para consulta. La cuenta y el alcance de cada grupo determinan dónde aplica el permiso."
              },
              {
                "tipo": "parrafo",
                "texto": "Las solicitudes se tramitan por el mecanismo corporativo documentado. El acceso a una cuenta no demuestra autorización sobre todas las demás."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consulta operativa.** El acceso de lectura permite investigar información dentro del alcance habilitado. Debe asignarse a las cuentas necesarias para la tarea; que una persona no pueda modificar recursos no elimina la necesidad de revisar qué datos puede consultar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Funciones de seguridad.** El rol Security User debe interpretarse según su configuración efectiva y el propósito autorizado. Su nombre no permite deducir acceso universal a señales, exportaciones o administración de la plataforma."
              },
              {
                "tipo": "parrafo",
                "texto": "**Solicitud de acceso.** Utilizar el mecanismo corporativo documentado, indicando identidad, equipo, cuenta y ambiente, actividad requerida y justificación. Para necesidades temporales, explicitar la condición de finalización y coordinar su retiro mediante el proceso vigente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación funcional.** Una vez habilitado el acceso, comprobar que la persona puede realizar la tarea prevista en la cuenta correcta. Si el permiso resulta insuficiente, precisar la acción faltante antes de solicitar un perfil más amplio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las personas autorizadas consultan la información necesaria para su función y las solicitudes mantienen una relación verificable entre necesidad y alcance."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Arquitectura y decisiones transversales"
              },
              {
                "tipo": "parrafo",
                "texto": "Arquitectura participa en coherencia entre dominios, interoperabilidad, proveedores y excepciones al estándar. Las decisiones que afectan capacidades compartidas deben considerar a sus consumidores y responsables."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance de participación.** Evaluar cómo una propuesta modifica la organización de cuentas, el aislamiento, las integraciones y la interoperabilidad. La participación en una decisión no requiere por sí misma privilegios administrativos permanentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evaluación de excepciones.** Describir la necesidad, las alternativas, los recursos afectados y el alcance de acceso solicitado. Registrar quién responde por la excepción y cuándo corresponde revisarla, utilizando el proceso corporativo aplicable."
              },
              {
                "tipo": "parrafo",
                "texto": "**Decisiones entre equipos.** Cuando una integración necesita operar sobre varias cuentas o dominios, revisar el alcance con los responsables involucrados. Documentar cómo se mantendrá la separación de responsabilidades y cómo se retirará el acceso si cambia la solución."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las decisiones transversales cuentan con responsables, justificación y límites explícitos, sin convertir una necesidad puntual en acceso general indefinido."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Identidades de personas e integraciones"
              },
              {
                "tipo": "parrafo",
                "texto": "**Personas.** El acceso interactivo debe corresponder a una identidad reconocible mediante el mecanismo corporativo habilitado. La trazabilidad debe permitir relacionar las acciones con quien las realiza, evitando que una identidad compartida oculte esa responsabilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Integraciones.** El envío de telemetría y las automatizaciones utilizan credenciales con un propósito técnico. Identificar la aplicación consumidora, cuenta, ambiente y responsable de mantenerlas. Una clave de ingesta no representa el permiso de una persona para administrar la cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Gestión de secretos.** Conservar las claves privadas mediante el mecanismo de secretos aplicable. En inventarios y solicitudes registrar referencias y responsables, sin copiar los valores de las credenciales. La clave pública específica de RUM mantiene un propósito diferente al de las credenciales privadas de backend."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cambios y retiro.** Revisar credenciales cuando cambia la integración, su responsable o su destino. Al retirar una aplicación, identificar qué claves y permisos dejan de ser necesarios y comprobar que no sean utilizados por otro consumidor antes de revocarlos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Cada acceso técnico tiene un consumidor y un responsable identificados; los accesos humanos mantienen una identidad y función verificables."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Alta, revisión y retiro de accesos"
              },
              {
                "tipo": "parrafo",
                "texto": "La gestión continúa después de la habilitación inicial. La revisión debe considerar cambios de equipo, función, cuenta, integración y necesidad operativa."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Momento",
                  "Acción de gestión",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Solicitud",
                    "Precisar identidad, propósito, cuenta y permisos requeridos",
                    "Solicitud con alcance y justificación"
                  ],
                  [
                    "Validación",
                    "Confirmar la necesidad con los responsables definidos por el proceso vigente",
                    "Decisión registrada sobre el alcance"
                  ],
                  [
                    "Habilitación",
                    "Asignar el perfil aplicable y comprobar la tarea prevista",
                    "Acceso funcional en la cuenta correcta"
                  ],
                  [
                    "Revisión",
                    "Contrastar permisos con la función actual",
                    "Confirmación o ajustes identificados"
                  ],
                  [
                    "Cambio de función",
                    "Revisar accesos anteriores y nuevas necesidades",
                    "Permisos alineados con la responsabilidad vigente"
                  ],
                  [
                    "Retiro",
                    "Revocar accesos que ya no se requieren y gestionar dependencias",
                    "Confirmación de retiro y continuidad de integraciones necesarias"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisión periódica.** Acordar la frecuencia según los criterios corporativos y la sensibilidad del alcance. Complementarla con revisiones ante cambios organizacionales o técnicos, sin esperar al siguiente ciclo para retirar permisos que han dejado de ser necesarios."
              },
              {
                "tipo": "parrafo",
                "texto": "**Acceso extraordinario.** Si una contingencia requiere permisos adicionales, utilizar el procedimiento vigente y explicitar motivo, alcance y condición de retiro. La urgencia no convierte automáticamente esa necesidad en una asignación permanente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Trazabilidad.** Mantener referencias a solicitudes, validaciones y cambios sin incluir secretos ni contenido innecesario de las señales. El registro debe permitir responder quién tiene acceso, para qué lo necesita y quién coordina su revisión."
              },
              {
                "tipo": "parrafo",
                "texto": "[Seguridad de la observabilidad](/docs/observabilidad/gobierno?tema=seguridad) · [Organización de cuentas](/docs/observabilidad/gobierno?tema=consumo) · [Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
              }
            ],
            "fuentes": [
              {
                "titulo": "Gobernanza operativa",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055754"
              },
              {
                "titulo": "usuarios y permisos",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329"
              },
              {
                "titulo": "solicitud por AGP",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/851476526"
              }
            ]
          },
          {
            "id": "seguridad",
            "titulo": "Seguridad de la observabilidad",
            "bajada": "Lineamientos, responsabilidades y verificación de controles sobre la telemetría.",
            "modoLectura": "unico",
            "resumen": [],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Lineamientos de seguridad de la observabilidad"
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo y alcance.** Establecer criterios de protección de la telemetría generada por aplicaciones e integrada mediante Ægis, OES y proveedores de observabilidad. El alcance comprende captura, transporte, acceso, conservación y eliminación de logs, métricas, trazas y eventos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Estado documental.** Esta sección presenta recomendaciones técnicas y una propuesta de verificación. No constituye una política corporativa aprobada. La clasificación oficial, los plazos de retención, los responsables nominales y el proceso de excepciones requieren confirmación por las áreas competentes. Los requisitos vigentes deben acreditarse mediante la política aplicable y su versión."
              },
              {
                "tipo": "parrafo",
                "texto": "**Matriz de controles propuesta.** Los responsables indicados son funciones a confirmar; las evidencias deben estar sanitizadas."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Control",
                  "Ámbito",
                  "Responsable propuesto",
                  "Evidencia",
                  "Referencia y estado"
                ],
                "filas": [
                  [
                    "Minimización y sanitización",
                    "Aplicación / Ægis",
                    "Equipo de producto",
                    "Muestra de señales con datos sintéticos",
                    "Recomendación técnica; clasificación por confirmar"
                  ],
                  [
                    "Protección de conexiones y secretos",
                    "Aplicación / OES / proveedor",
                    "Producto y plataforma",
                    "Configuración revisada sin credenciales",
                    "Recomendación técnica; estándar de seguridad aplicable por confirmar"
                  ],
                  [
                    "Acceso y segregación",
                    "Cuentas y ambientes",
                    "Administradores de cuenta",
                    "Revisión de roles y autorizaciones",
                    "Referencia operativa: Identidad y accesos"
                  ],
                  [
                    "Retención y eliminación",
                    "Destinos de telemetría",
                    "Dueño de datos y plataforma",
                    "Configuración contrastada con política",
                    "Plazos y política pendientes de confirmación"
                  ],
                  [
                    "Gestión de hallazgos",
                    "Cadena de observabilidad",
                    "Producto, plataforma y seguridad",
                    "Registro de hallazgo y verificación de cierre",
                    "Procedimiento corporativo por confirmar"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Referencias documentales: [Compliance en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/862781493), [usuarios y permisos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329) y [responsabilidad compartida](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1661042768). Estas referencias aportan contexto; no acreditan por sí solas la aprobación de esta matriz."
              },
              {
                "tipo": "acordeon",
                "titulo": "Clasificación y tratamiento de datos",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**Recomendación técnica:** inventariar los campos exportados y limitar la captura a los necesarios para el propósito operativo. Excluir contraseñas, tokens, claves y cookies de sesión. Evaluar datos personales, cuerpos de solicitudes y encabezados antes de habilitar su captura."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Definición pendiente:** vincular cada categoría a la clasificación corporativa vigente, con su dueño de datos y condiciones de tratamiento."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Inventario de información.** Identificar qué campos se incorporan a logs, spans, métricas, eventos y señales de frontend. Considerar valores capturados automáticamente, mensajes de excepciones y datos agregados por intermediarios, además de los atributos definidos por el producto."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Propósito y necesidad.** Relacionar cada campo con una pregunta de operación. Cuando basta con registrar el tipo de error, el resultado o una ruta normalizada, evitar incluir el contenido completo de una transacción. La facilidad de captura no justifica su conservación."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Superficie de captura",
                      "Aspecto a revisar",
                      "Tratamiento propuesto"
                    ],
                    "filas": [
                      [
                        "Encabezados y contexto de autenticación",
                        "Tokens, cookies y credenciales",
                        "Excluir los valores secretos de la telemetría"
                      ],
                      [
                        "URL y parámetros",
                        "Identificadores o datos personales en rutas y consultas",
                        "Preferir rutas normalizadas y campos expresamente seleccionados"
                      ],
                      [
                        "Cuerpos y mensajes de error",
                        "Datos de clientes, transacciones o respuestas de terceros",
                        "Limitar la captura al contexto operativo necesario"
                      ],
                      [
                        "Atributos y etiquetas",
                        "Identificadores de personas y valores de alta variabilidad",
                        "Revisar necesidad, sensibilidad y cardinalidad"
                      ],
                      [
                        "Eventos y frontend",
                        "Información del usuario y del hecho de negocio",
                        "Definir los campos permitidos para el caso de uso"
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** Un inventario comprensible de campos, propósito y tratamiento, con las dudas de clasificación identificadas para su resolución por los responsables correspondientes."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Instrumentación segura",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**Recomendación técnica:** aplicar sanitización o enmascaramiento antes de exportar información sensible y verificar el resultado con datos sintéticos. Revisar tanto la instrumentación automática como los atributos personalizados; no asumir que la librería protege todos los campos por defecto."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "La [guía de Ægis TypeScript — staging](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) documenta un helper de sanitización opcional. Su disponibilidad y comportamiento deben comprobarse para la versión utilizada; no se presume equivalencia entre lenguajes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Control en el origen.** Priorizar que los datos innecesarios no se incorporen a la señal. Revisar serializers, interceptores, manejo de excepciones y atributos manuales, así como la configuración de instrumentación automática."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Cobertura del tratamiento.** Comprobar campos anidados, colecciones y distintas formas de representar un mismo dato. Una regla aplicada a un encabezado no demuestra que el valor quede excluido de un mensaje de error o de otro atributo."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Validación con datos sintéticos.** Utilizar valores de prueba reconocibles para comprobar qué se genera y qué llega al destino. Revisar recorridos de éxito, fallas y respuestas de dependencias, sin introducir secretos reales en las pruebas ni en sus evidencias."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Mantenimiento.** Repetir la revisión cuando cambien las versiones de instrumentación, los campos exportados o la configuración de captura. Registrar qué integración y configuración se verificaron para que el resultado tenga un alcance identificable."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** La telemetría conserva el contexto operativo necesario y el tratamiento de los campos revisados se comprueba en las señales recibidas."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Protección del transporte y credenciales",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**Recomendación técnica:** revisar la protección de cada conexión, la validación del destino y el mecanismo autorizado para distribuir secretos. Mantener credenciales fuera del código, de la telemetría y de las evidencias de revisión. Separar configuración y credenciales por ambiente según el modelo autorizado."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Definición pendiente:** confirmar el estándar corporativo de cifrado, rotación y gestión de secretos. Documentar los controles efectivos de cada tramo sin asumir que una conexión interna está protegida automáticamente."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Mapa de conexiones.** Identificar los tramos realmente desplegados entre aplicación, componentes OES y destino de análisis. Para cada uno, registrar origen, destino, ambiente, responsable y mecanismo de protección configurado. Incluir rutas complementarias cuando existan."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Validación del destino.** Revisar endpoints y configuración de conexión para evitar envíos a cuentas o ambientes incorrectos. Los cambios de destino deben considerar también autenticación, permisos y continuidad del envío."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Ciclo de vida de credenciales.** Identificar propósito, consumidor y responsable de cada referencia a secreto. Coordinar actualizaciones y retiro para que la integración mantenga las credenciales necesarias y se eliminen las que ya no utiliza."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Evidencia segura.** Las revisiones pueden mostrar el tipo de configuración, su ámbito y el resultado de una prueba, pero no deben incluir claves privadas. Revisar también mensajes de diagnóstico que puedan revelar credenciales o parámetros sensibles."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** Cada conexión tiene controles y responsables identificados; la protección se verifica sobre la configuración efectiva y no solo sobre el diagrama de arquitectura."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Control de acceso y auditoría",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**Recomendación técnica:** aplicar mínimo privilegio, revisar altas y bajas y comprobar que cada rol acceda al ámbito autorizado. Identificar los registros de auditoría disponibles y su responsable de revisión."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Consultar [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) y [Modelo de consumo y cuentas](/docs/observabilidad/gobierno?tema=consumo). La periodicidad de revisión y la conservación de auditoría requieren respaldo en la política aplicable."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Alcance de consulta.** Revisar qué cuentas y datos puede consultar cada perfil. El acceso de lectura también requiere justificación cuando permite visualizar información sensible."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Acciones de modificación.** Distinguir consulta, edición de dashboards y alertas, administración de usuarios y gestión de integraciones. Verificar las acciones habilitadas en el proveedor, sin deducirlas únicamente del nombre del rol."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Personas e integraciones.** Separar la identidad de quien opera la herramienta de las credenciales utilizadas para enviar señales o automatizar tareas. Ambos tipos de acceso necesitan un propósito, alcance y responsable reconocibles."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Auditoría disponible.** Identificar qué acciones quedan registradas, cómo se consultan y quién revisa los hallazgos. Si una acción relevante no dispone de registro, documentar esa limitación y evaluar su tratamiento con los responsables."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** Los permisos corresponden a funciones vigentes y existe una forma definida de revisar accesos y cambios relevantes dentro de las capacidades disponibles."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Retención y eliminación",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**Recomendación técnica:** registrar los destinos donde se conserva telemetría y contrastar su configuración con la clasificación de los datos. Considerar copias y exportaciones autorizadas al definir el alcance de eliminación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Definición pendiente:** plazos, excepciones y procedimiento de eliminación. Esta documentación no establece duraciones universales ni presupone que todas las señales tienen el mismo tratamiento."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Inventario de destinos.** Considerar el backend principal, exportaciones y otros destinos configurados. Cuando existan buffers persistentes, archivos o copias, revisar si conservan información y bajo qué condiciones."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Criterio de conservación.** Relacionar la necesidad de investigación con la clasificación y los requisitos aplicables. Evitar trasladar automáticamente una misma duración a logs, métricas, trazas y eventos cuando sus datos y propósitos sean distintos."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Alcance de eliminación.** Identificar qué mecanismo ofrece cada destino y qué limitaciones presenta. Verificar el resultado conforme al procedimiento acordado; retirar una consulta o un dashboard no equivale a eliminar los datos subyacentes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Cambios y retiro.** Cuando un servicio migra o deja de operar, definir quién conserva la responsabilidad sobre su histórico y cómo se gestionarán accesos, conservación y eliminación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** Los destinos y condiciones de conservación están identificados, y las acciones de eliminación cuentan con alcance y verificación explícitos."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Responsabilidades y excepciones",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "**Distribución propuesta:** producto verifica la captura y los atributos; plataforma revisa transporte y configuración del servicio; los administradores de cuenta revisan permisos; seguridad y los dueños de datos validan los criterios aplicables."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Toda desviación debería registrar alcance, justificación, riesgo, responsable, control compensatorio y fecha de revisión. El aprobador y el canal deben corresponder al proceso corporativo confirmado; esta sección no autoriza excepciones."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Coordinación entre funciones.** Un hallazgo puede originarse en la aplicación y persistir en varios destinos. La asignación debe abarcar tanto la corrección de la captura como el tratamiento de los datos ya emitidos."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Función propuesta",
                      "Aporte a la revisión"
                    ],
                    "filas": [
                      [
                        "Producto",
                        "Propósito de los campos, instrumentación y corrección en origen"
                      ],
                      [
                        "Plataforma",
                        "Configuración de pipelines, conexiones y destinos compartidos"
                      ],
                      [
                        "Administración de cuenta",
                        "Permisos y opciones de gestión de datos disponibles"
                      ],
                      [
                        "Seguridad y dueño de datos",
                        "Criterios de tratamiento y evaluación de desviaciones"
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Seguimiento de excepciones.** Mantener visible la condición que motiva la excepción y la acción prevista para resolverla. Revisarla cuando cambie el servicio, el dato tratado o el control disponible, además de la fecha acordada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** Cada hallazgo o excepción tiene responsables y acciones identificadas, con una decisión trazable conforme al proceso vigente."
                  }
                ]
              },
              {
                "tipo": "acordeon",
                "titulo": "Verificación de cumplimiento",
                "contenido": [
                  {
                    "tipo": "parrafo",
                    "texto": "Registrar control evaluado, criterio aplicable, evidencia, resultado, responsable y acción correctiva. Diferenciar una comprobación técnica satisfactoria de una certificación de cumplimiento normativo."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "Si se detecta información sensible, coordinar la contención y el tratamiento con los responsables correspondientes. Evitar reproducirla en tickets o capturas y verificar la corrección de la causa de captura."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Preparación.** Delimitar servicio, ambiente, integración y controles a evaluar. Identificar el criterio documental aplicable y señalar los aspectos que todavía requieren confirmación."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Ejecución.** Revisar configuración y realizar comprobaciones con datos sintéticos. Registrar tanto resultados satisfactorios como controles no verificados; la falta de evidencia no debe presentarse como cumplimiento."
                  },
                  {
                    "tipo": "tabla",
                    "encabezados": [
                      "Estado de revisión",
                      "Significado"
                    ],
                    "filas": [
                      [
                        "Verificado",
                        "Existe evidencia suficiente para el criterio y alcance evaluados"
                      ],
                      [
                        "Con hallazgo",
                        "La comprobación identifica una desviación que requiere tratamiento"
                      ],
                      [
                        "Pendiente de verificación",
                        "Falta información, acceso o evidencia para concluir"
                      ],
                      [
                        "No aplicable, justificado",
                        "El control no corresponde al alcance y se registra el motivo"
                      ]
                    ]
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Tratamiento de hallazgos.** Identificar el punto de captura y los destinos afectados, coordinar las medidas de contención y corregir la causa. Gestionar los datos ya emitidos mediante el procedimiento aplicable y comprobar que las nuevas señales no reproduzcan el problema."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Cierre y revisión.** Registrar la corrección, su responsable y la evidencia de validación. Revisar nuevamente los controles afectados cuando cambien la instrumentación, el destino o el tipo de información capturada."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "**Resultado esperado.** Un registro de evaluación que permita conocer qué se comprobó, qué limitaciones existen y qué acciones continúan pendientes."
                  },
                  {
                    "tipo": "parrafo",
                    "texto": "[Procedimiento técnico de validación](/docs/observabilidad/golden-path?tema=validar)."
                  }
                ]
              }
            ],
            "fuentes": []
          },
          {
            "id": "estandares",
            "titulo": "Estándares de instrumentación y datos",
            "bajada": "Librería corporativa, identidad y calidad de señales.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Ægis como estándar de instrumentación"
              },
              {
                "tipo": "parrafo",
                "texto": "**Documentación técnica del estándar Ægis · staging:** [JavaScript / TypeScript](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Python](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Java](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN) · [Go — documentación pendiente de validación](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN). Las guías detallan el uso de la librería; los criterios corporativos de gobierno se mantienen en este apartado."
              },
              {
                "tipo": "parrafo",
                "texto": "**La librería compartida materializa un estándar de integración y contexto.** El uso consistente de Ægis permite mantener convenciones comunes sobre OpenTelemetry y una base de soporte entre equipos."
              },
              {
                "tipo": "parrafo",
                "texto": "El estándar abarca tanto la integración técnica como el significado de los datos emitidos. Una señal debe permitir reconocer su origen, interpretar la operación que representa y utilizarla de forma consistente en consultas, indicadores y alertas."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Propósito",
                  "Resultado que debe comprobarse"
                ],
                "filas": [
                  [
                    "Identidad",
                    "Reconocer el servicio y sus responsables",
                    "Contexto coherente con el producto y ambiente"
                  ],
                  [
                    "Cobertura",
                    "Observar las operaciones relevantes",
                    "Evidencias útiles en escenarios de éxito y error"
                  ],
                  [
                    "Calidad de datos",
                    "Mantener señales interpretables y comparables",
                    "Nombres, tipos, unidades y significado consistentes"
                  ],
                  [
                    "Compatibilidad",
                    "Evolucionar la integración sin perder continuidad",
                    "Señales y recursos operativos funcionan después del cambio"
                  ],
                  [
                    "Extensibilidad",
                    "Resolver necesidades específicas de forma controlada",
                    "Cambios documentados con alcance y responsables"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios siguientes orientan la revisión corporativa. La obligatoriedad de campos, los nombres técnicos y las capacidades disponibles se verifican en la guía y versión de la integración utilizada."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [SDK y autoinstrumentación](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1746272537), [responsabilidad compartida](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1661042768), [variables de Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1177092102) y [compliance](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/862781493)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Contrato de identidad",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Servicio, aplicación, APL, ambiente, marca, país, unidad de negocio, equipo y referente técnico permiten identificar el origen y responsable de la información."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Las guías incluyen variables como `CENCO_SERVICE_NAME`, `CENCO_APP_NAME`, `CENCO_APL` y `CENCO_PRODUCT_TEAM`. El mapeo efectivo debe comprobarse en la versión utilizada y en la señal recibida; existen variantes de nombres entre documentos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identidad estable del servicio.** Utilizar una denominación que represente al servicio a lo largo de sus despliegues. Los identificadores de instancias, solicitudes o ejecuciones no deben sustituir esa identidad, pues fragmentan la lectura del comportamiento histórico."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contexto organizacional.** Relacionar el servicio con la aplicación, unidad y equipo responsables según los campos documentados. Evitar variaciones de escritura o valores contradictorios entre componentes que representan el mismo ámbito."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Ambiente de ejecución.** Confirmar que el valor emitido corresponde al entorno real. La cuenta de destino y el ambiente declarado deben ser coherentes, pero uno no reemplaza la verificación del otro."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Diccionario de identidad.** Registrar el significado y origen de los valores utilizados, indicando quién mantiene su configuración. Esto permite resolver inconsistencias sin depender de interpretar nombres informales."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Elemento",
                          "Criterio de revisión"
                        ],
                        "filas": [
                          [
                            "Servicio y aplicación",
                            "Identifican el componente y su relación con el producto"
                          ],
                          [
                            "APL y contexto organizacional",
                            "Corresponden a los identificadores y ámbitos definidos para el servicio"
                          ],
                          [
                            "Ambiente",
                            "Coincide con la ejecución y el destino previstos"
                          ],
                          [
                            "Equipo y referente",
                            "Permiten localizar la responsabilidad vigente"
                          ],
                          [
                            "Atributos recibidos",
                            "Reflejan el mapeo efectivo de la integración utilizada"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las señales pueden atribuirse a un servicio y ambiente reconocibles, con responsables identificados y valores consistentes entre despliegues."
                      }
                    ]
                  },
                  {
                    "titulo": "Responsabilidad del producto",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "El equipo integra la librería, define indicadores de negocio y valida logs, métricas y trazas en su aplicación. La autoinstrumentación depende del lenguaje, framework y dependencias; no garantiza por sí sola una cobertura completa del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Definición de cobertura.** Identificar operaciones críticas, dependencias y resultados que necesitan observarse. Relacionar cada necesidad con las señales que permiten responderla, en lugar de utilizar la cantidad de datos generados como medida de cobertura."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Instrumentación automática y manual.** Revisar qué información entrega la integración existente antes de agregar señales personalizadas. Las extensiones deben cubrir vacíos identificados y evitar registrar dos veces la misma operación sin un propósito definido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Significado del negocio.** Precisar qué representa un evento o indicador y en qué momento se emite. Distinguir la recepción de una solicitud, su procesamiento y la confirmación del resultado cuando sean hechos diferentes para el servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación funcional.** Ejecutar escenarios representativos de éxito, error y respuesta de dependencias. Comprobar que las señales permiten interpretar el resultado real y que el contexto necesario está disponible en el destino."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Uso operativo.** Mantener consultas, dashboards y alertas alineados con los datos emitidos. Cuando cambie el significado de un indicador, revisar también los recursos que lo consumen."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo conoce la cobertura y las limitaciones de su instrumentación y puede demostrar cómo utiliza las señales para investigar su servicio."
                      }
                    ]
                  },
                  {
                    "titulo": "Calidad y consistencia de los datos",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Nombres y significado.** Utilizar convenciones documentadas y términos consistentes para operaciones y atributos. Evitar que un mismo nombre represente hechos distintos entre componentes o cambie de significado sin una revisión de sus consumidores."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Tipos y unidades.** Mantener estables los tipos de los atributos y explicitar la unidad de los indicadores cuando corresponda. Una duración expresada en distintas unidades puede producir comparaciones incorrectas aunque los valores sean técnicamente válidos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Dimensiones de análisis.** Incorporar atributos que respondan a necesidades concretas de segmentación. Revisar su cantidad de valores posibles y evitar identificadores únicos como dimensiones de métricas cuando no exista un diseño que justifique y controle ese consumo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Información sensible.** Seleccionar únicamente los campos necesarios y aplicar el tratamiento definido para los datos. No incorporar secretos o contenido completo de transacciones como atajo para obtener contexto de diagnóstico."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Aspecto",
                          "Ejemplo de inconsistencia",
                          "Revisión propuesta"
                        ],
                        "filas": [
                          [
                            "Nombre",
                            "Una operación aparece con múltiples variantes de escritura",
                            "Acordar una denominación y revisar consultas existentes"
                          ],
                          [
                            "Tipo",
                            "Un atributo alterna entre número y texto",
                            "Definir su representación y verificar productores"
                          ],
                          [
                            "Unidad",
                            "Un indicador mezcla segundos y milisegundos",
                            "Confirmar unidad y coherencia de visualizaciones"
                          ],
                          [
                            "Dimensión",
                            "Una etiqueta contiene un identificador diferente por solicitud",
                            "Evaluar utilidad y efecto sobre cardinalidad"
                          ],
                          [
                            "Significado",
                            "Un contador mezcla solicitudes recibidas y operaciones completadas",
                            "Separar los hechos y documentar cuándo se registran"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las señales conservan un significado estable y pueden compararse sin ambigüedades de nombres, tipos o unidades."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Seguridad de la observabilidad](/docs/observabilidad/gobierno?tema=seguridad) · [Consumo y cardinalidad](/docs/observabilidad/gobierno?tema=costos)."
                      }
                    ]
                  },
                  {
                    "titulo": "Contexto y correlación entre señales",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Continuidad de la operación.** Revisar que la integración conserve el contexto necesario al atravesar los componentes que participan en una operación. La cobertura debe comprobarse para el runtime, protocolo y dependencias concretos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Relación entre evidencias.** Validar qué campos permiten vincular logs, trazas y otras señales. Compartir servicio y ambiente permite delimitar una búsqueda, pero no demuestra por sí solo que dos registros correspondan a la misma ejecución."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Dependencias y asincronía.** Incluir en la revisión llamadas a servicios, colas y procesos diferidos cuando formen parte del recorrido. Documentar los puntos donde el contexto no se conserva y su efecto sobre la investigación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Interpretación.** Utilizar la correlación como apoyo al análisis, contrastando tiempos, errores y comportamiento funcional. La coincidencia de señales no constituye por sí sola una explicación causal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo puede seguir operaciones representativas y conoce las discontinuidades que limitan la relación entre evidencias."
                      }
                    ]
                  },
                  {
                    "titulo": "Evolución y compatibilidad",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "La versión y forma de integración deben corresponder a la guía del runtime y ambiente. Una actualización o migración debe verificar continuidad del contexto y significado de los indicadores."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Como criterio de revisión, registrar la versión utilizada y la evidencia de validación facilita identificar incompatibilidades y solicitar soporte."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Inventario de integración.** Registrar runtime, framework, versión de la librería y configuración relevante, sin incluir secretos. Identificar también las extensiones locales que puedan afectar el comportamiento del estándar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evaluación del cambio.** Revisar si la actualización modifica campos, cobertura, tipos, contexto o volumen emitido. Considerar su efecto sobre consultas, dashboards y alertas, además de la compilación y arranque de la aplicación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación comparativa.** Contrastar operaciones equivalentes antes y después del cambio. Verificar identidad, señales disponibles, correlación y uso de recursos de la aplicación dentro del alcance evaluado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Despliegue y reversión.** Acordar cómo verificar la integración en cada ambiente y cómo recuperar la configuración anterior si se pierde visibilidad relevante. La estrategia debe considerar tanto la aplicación como los recursos de análisis modificados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La evolución de la librería mantiene la capacidad de investigación del servicio y deja identificados los cambios y limitaciones relevantes."
                      }
                    ]
                  },
                  {
                    "titulo": "Extensiones y excepciones",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Una necesidad que exceda la librería compartida se evalúa según su alcance. Los cambios transversales deben conservar trazabilidad sobre problema, alternativas, impactos y responsable mediante los instrumentos de decisión del Charter."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "El uso de Ægis no constituye por sí solo una aprobación de producción ni una certificación de cumplimiento."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Necesidad específica.** Describir qué pregunta operativa no puede resolverse con la integración disponible. Confirmar la cobertura existente antes de introducir una nueva dependencia o una ruta alternativa de envío."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Extensión local.** Delimitar los atributos o señales agregados, su significado, consumidores y responsable de mantenimiento. Verificar que preservan identidad, calidad y tratamiento de datos del modelo compartido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Capacidad reutilizable.** Si la necesidad se repite entre servicios, evaluar su incorporación al estándar común con sus responsables. Considerar documentación, compatibilidad y soporte para evitar soluciones divergentes al mismo problema."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Excepción al modelo.** Registrar justificación, alternativas, efectos operativos y económicos, responsable y condición de revisión. La aceptación debe seguir el proceso corporativo aplicable; documentar una integración no equivale a autorizarla."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Cada extensión tiene un propósito y propietario identificados, y los cambios transversales se gestionan con participación de quienes mantienen y consumen el estándar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones) · [Validación técnica](/docs/observabilidad/golden-path?tema=validar)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Ægis como estándar de instrumentación"
              },
              {
                "tipo": "parrafo",
                "texto": "**Documentación técnica del estándar Ægis · staging:** [JavaScript / TypeScript](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Python](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Java](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN) · [Go — documentación pendiente de validación](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN). Las guías detallan el uso de la librería; los criterios corporativos de gobierno se mantienen en este apartado."
              },
              {
                "tipo": "parrafo",
                "texto": "**La librería compartida materializa un estándar de integración y contexto.** El uso consistente de Ægis permite mantener convenciones comunes sobre OpenTelemetry y una base de soporte entre equipos."
              },
              {
                "tipo": "parrafo",
                "texto": "El estándar abarca tanto la integración técnica como el significado de los datos emitidos. Una señal debe permitir reconocer su origen, interpretar la operación que representa y utilizarla de forma consistente en consultas, indicadores y alertas."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Propósito",
                  "Resultado que debe comprobarse"
                ],
                "filas": [
                  [
                    "Identidad",
                    "Reconocer el servicio y sus responsables",
                    "Contexto coherente con el producto y ambiente"
                  ],
                  [
                    "Cobertura",
                    "Observar las operaciones relevantes",
                    "Evidencias útiles en escenarios de éxito y error"
                  ],
                  [
                    "Calidad de datos",
                    "Mantener señales interpretables y comparables",
                    "Nombres, tipos, unidades y significado consistentes"
                  ],
                  [
                    "Compatibilidad",
                    "Evolucionar la integración sin perder continuidad",
                    "Señales y recursos operativos funcionan después del cambio"
                  ],
                  [
                    "Extensibilidad",
                    "Resolver necesidades específicas de forma controlada",
                    "Cambios documentados con alcance y responsables"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios siguientes orientan la revisión corporativa. La obligatoriedad de campos, los nombres técnicos y las capacidades disponibles se verifican en la guía y versión de la integración utilizada."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [SDK y autoinstrumentación](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1746272537), [responsabilidad compartida](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1661042768), [variables de Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1177092102) y [compliance](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/862781493)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Contrato de identidad"
              },
              {
                "tipo": "parrafo",
                "texto": "Servicio, aplicación, APL, ambiente, marca, país, unidad de negocio, equipo y referente técnico permiten identificar el origen y responsable de la información."
              },
              {
                "tipo": "parrafo",
                "texto": "Las guías incluyen variables como `CENCO_SERVICE_NAME`, `CENCO_APP_NAME`, `CENCO_APL` y `CENCO_PRODUCT_TEAM`. El mapeo efectivo debe comprobarse en la versión utilizada y en la señal recibida; existen variantes de nombres entre documentos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identidad estable del servicio.** Utilizar una denominación que represente al servicio a lo largo de sus despliegues. Los identificadores de instancias, solicitudes o ejecuciones no deben sustituir esa identidad, pues fragmentan la lectura del comportamiento histórico."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contexto organizacional.** Relacionar el servicio con la aplicación, unidad y equipo responsables según los campos documentados. Evitar variaciones de escritura o valores contradictorios entre componentes que representan el mismo ámbito."
              },
              {
                "tipo": "parrafo",
                "texto": "**Ambiente de ejecución.** Confirmar que el valor emitido corresponde al entorno real. La cuenta de destino y el ambiente declarado deben ser coherentes, pero uno no reemplaza la verificación del otro."
              },
              {
                "tipo": "parrafo",
                "texto": "**Diccionario de identidad.** Registrar el significado y origen de los valores utilizados, indicando quién mantiene su configuración. Esto permite resolver inconsistencias sin depender de interpretar nombres informales."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Elemento",
                  "Criterio de revisión"
                ],
                "filas": [
                  [
                    "Servicio y aplicación",
                    "Identifican el componente y su relación con el producto"
                  ],
                  [
                    "APL y contexto organizacional",
                    "Corresponden a los identificadores y ámbitos definidos para el servicio"
                  ],
                  [
                    "Ambiente",
                    "Coincide con la ejecución y el destino previstos"
                  ],
                  [
                    "Equipo y referente",
                    "Permiten localizar la responsabilidad vigente"
                  ],
                  [
                    "Atributos recibidos",
                    "Reflejan el mapeo efectivo de la integración utilizada"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las señales pueden atribuirse a un servicio y ambiente reconocibles, con responsables identificados y valores consistentes entre despliegues."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Responsabilidad del producto"
              },
              {
                "tipo": "parrafo",
                "texto": "El equipo integra la librería, define indicadores de negocio y valida logs, métricas y trazas en su aplicación. La autoinstrumentación depende del lenguaje, framework y dependencias; no garantiza por sí sola una cobertura completa del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Definición de cobertura.** Identificar operaciones críticas, dependencias y resultados que necesitan observarse. Relacionar cada necesidad con las señales que permiten responderla, en lugar de utilizar la cantidad de datos generados como medida de cobertura."
              },
              {
                "tipo": "parrafo",
                "texto": "**Instrumentación automática y manual.** Revisar qué información entrega la integración existente antes de agregar señales personalizadas. Las extensiones deben cubrir vacíos identificados y evitar registrar dos veces la misma operación sin un propósito definido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Significado del negocio.** Precisar qué representa un evento o indicador y en qué momento se emite. Distinguir la recepción de una solicitud, su procesamiento y la confirmación del resultado cuando sean hechos diferentes para el servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación funcional.** Ejecutar escenarios representativos de éxito, error y respuesta de dependencias. Comprobar que las señales permiten interpretar el resultado real y que el contexto necesario está disponible en el destino."
              },
              {
                "tipo": "parrafo",
                "texto": "**Uso operativo.** Mantener consultas, dashboards y alertas alineados con los datos emitidos. Cuando cambie el significado de un indicador, revisar también los recursos que lo consumen."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo conoce la cobertura y las limitaciones de su instrumentación y puede demostrar cómo utiliza las señales para investigar su servicio."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Calidad y consistencia de los datos"
              },
              {
                "tipo": "parrafo",
                "texto": "**Nombres y significado.** Utilizar convenciones documentadas y términos consistentes para operaciones y atributos. Evitar que un mismo nombre represente hechos distintos entre componentes o cambie de significado sin una revisión de sus consumidores."
              },
              {
                "tipo": "parrafo",
                "texto": "**Tipos y unidades.** Mantener estables los tipos de los atributos y explicitar la unidad de los indicadores cuando corresponda. Una duración expresada en distintas unidades puede producir comparaciones incorrectas aunque los valores sean técnicamente válidos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Dimensiones de análisis.** Incorporar atributos que respondan a necesidades concretas de segmentación. Revisar su cantidad de valores posibles y evitar identificadores únicos como dimensiones de métricas cuando no exista un diseño que justifique y controle ese consumo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Información sensible.** Seleccionar únicamente los campos necesarios y aplicar el tratamiento definido para los datos. No incorporar secretos o contenido completo de transacciones como atajo para obtener contexto de diagnóstico."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Aspecto",
                  "Ejemplo de inconsistencia",
                  "Revisión propuesta"
                ],
                "filas": [
                  [
                    "Nombre",
                    "Una operación aparece con múltiples variantes de escritura",
                    "Acordar una denominación y revisar consultas existentes"
                  ],
                  [
                    "Tipo",
                    "Un atributo alterna entre número y texto",
                    "Definir su representación y verificar productores"
                  ],
                  [
                    "Unidad",
                    "Un indicador mezcla segundos y milisegundos",
                    "Confirmar unidad y coherencia de visualizaciones"
                  ],
                  [
                    "Dimensión",
                    "Una etiqueta contiene un identificador diferente por solicitud",
                    "Evaluar utilidad y efecto sobre cardinalidad"
                  ],
                  [
                    "Significado",
                    "Un contador mezcla solicitudes recibidas y operaciones completadas",
                    "Separar los hechos y documentar cuándo se registran"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las señales conservan un significado estable y pueden compararse sin ambigüedades de nombres, tipos o unidades."
              },
              {
                "tipo": "parrafo",
                "texto": "[Seguridad de la observabilidad](/docs/observabilidad/gobierno?tema=seguridad) · [Consumo y cardinalidad](/docs/observabilidad/gobierno?tema=costos)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Contexto y correlación entre señales"
              },
              {
                "tipo": "parrafo",
                "texto": "**Continuidad de la operación.** Revisar que la integración conserve el contexto necesario al atravesar los componentes que participan en una operación. La cobertura debe comprobarse para el runtime, protocolo y dependencias concretos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Relación entre evidencias.** Validar qué campos permiten vincular logs, trazas y otras señales. Compartir servicio y ambiente permite delimitar una búsqueda, pero no demuestra por sí solo que dos registros correspondan a la misma ejecución."
              },
              {
                "tipo": "parrafo",
                "texto": "**Dependencias y asincronía.** Incluir en la revisión llamadas a servicios, colas y procesos diferidos cuando formen parte del recorrido. Documentar los puntos donde el contexto no se conserva y su efecto sobre la investigación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Interpretación.** Utilizar la correlación como apoyo al análisis, contrastando tiempos, errores y comportamiento funcional. La coincidencia de señales no constituye por sí sola una explicación causal."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo puede seguir operaciones representativas y conoce las discontinuidades que limitan la relación entre evidencias."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Evolución y compatibilidad"
              },
              {
                "tipo": "parrafo",
                "texto": "La versión y forma de integración deben corresponder a la guía del runtime y ambiente. Una actualización o migración debe verificar continuidad del contexto y significado de los indicadores."
              },
              {
                "tipo": "parrafo",
                "texto": "Como criterio de revisión, registrar la versión utilizada y la evidencia de validación facilita identificar incompatibilidades y solicitar soporte."
              },
              {
                "tipo": "parrafo",
                "texto": "**Inventario de integración.** Registrar runtime, framework, versión de la librería y configuración relevante, sin incluir secretos. Identificar también las extensiones locales que puedan afectar el comportamiento del estándar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evaluación del cambio.** Revisar si la actualización modifica campos, cobertura, tipos, contexto o volumen emitido. Considerar su efecto sobre consultas, dashboards y alertas, además de la compilación y arranque de la aplicación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación comparativa.** Contrastar operaciones equivalentes antes y después del cambio. Verificar identidad, señales disponibles, correlación y uso de recursos de la aplicación dentro del alcance evaluado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Despliegue y reversión.** Acordar cómo verificar la integración en cada ambiente y cómo recuperar la configuración anterior si se pierde visibilidad relevante. La estrategia debe considerar tanto la aplicación como los recursos de análisis modificados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La evolución de la librería mantiene la capacidad de investigación del servicio y deja identificados los cambios y limitaciones relevantes."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Extensiones y excepciones"
              },
              {
                "tipo": "parrafo",
                "texto": "Una necesidad que exceda la librería compartida se evalúa según su alcance. Los cambios transversales deben conservar trazabilidad sobre problema, alternativas, impactos y responsable mediante los instrumentos de decisión del Charter."
              },
              {
                "tipo": "parrafo",
                "texto": "El uso de Ægis no constituye por sí solo una aprobación de producción ni una certificación de cumplimiento."
              },
              {
                "tipo": "parrafo",
                "texto": "**Necesidad específica.** Describir qué pregunta operativa no puede resolverse con la integración disponible. Confirmar la cobertura existente antes de introducir una nueva dependencia o una ruta alternativa de envío."
              },
              {
                "tipo": "parrafo",
                "texto": "**Extensión local.** Delimitar los atributos o señales agregados, su significado, consumidores y responsable de mantenimiento. Verificar que preservan identidad, calidad y tratamiento de datos del modelo compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Capacidad reutilizable.** Si la necesidad se repite entre servicios, evaluar su incorporación al estándar común con sus responsables. Considerar documentación, compatibilidad y soporte para evitar soluciones divergentes al mismo problema."
              },
              {
                "tipo": "parrafo",
                "texto": "**Excepción al modelo.** Registrar justificación, alternativas, efectos operativos y económicos, responsable y condición de revisión. La aceptación debe seguir el proceso corporativo aplicable; documentar una integración no equivale a autorizarla."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Cada extensión tiene un propósito y propietario identificados, y los cambios transversales se gestionan con participación de quienes mantienen y consumen el estándar."
              },
              {
                "tipo": "parrafo",
                "texto": "[Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones) · [Validación técnica](/docs/observabilidad/golden-path?tema=validar)."
              }
            ],
            "fuentes": [
              {
                "titulo": "SDK y autoinstrumentación",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1746272537"
              },
              {
                "titulo": "responsabilidad compartida",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1661042768"
              },
              {
                "titulo": "variables de Ægis",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1177092102"
              },
              {
                "titulo": "compliance",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/862781493"
              }
            ]
          },
          {
            "id": "costos",
            "titulo": "Consumo, capacidad y costos",
            "bajada": "Uso responsable y seguimiento de consumo.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Gestión de consumo y costos"
              },
              {
                "tipo": "parrafo",
                "texto": "**El consumo de telemetría utiliza capacidad compartida y debe relacionarse con su valor operativo.** La revisión incluye volumen, calidad, cardinalidad, muestreo y retención, junto con las condiciones de la cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consumo, capacidad y costo son dimensiones relacionadas que deben analizarse por separado.** El consumo describe la telemetría generada y tratada; la capacidad describe los recursos disponibles para procesarla; el costo depende de las condiciones comerciales aplicables. Un aumento de volumen no demuestra por sí solo saturación ni permite calcular un importe sin conocer la base de cobro."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Pregunta de gestión",
                  "Evidencia necesaria"
                ],
                "filas": [
                  [
                    "Consumo",
                    "¿Qué señales genera cada servicio y cómo varían?",
                    "Volumen, frecuencia, tamaño y distribución por tipo de señal"
                  ],
                  [
                    "Capacidad",
                    "¿El pipeline puede procesar la demanda prevista?",
                    "Recursos, errores, descartes y comportamiento bajo carga"
                  ],
                  [
                    "Valor operativo",
                    "¿Qué investigaciones y decisiones permiten las señales?",
                    "Casos de uso, cobertura y consultas utilizadas"
                  ],
                  [
                    "Costo",
                    "¿Qué parte del consumo tiene efecto económico?",
                    "Datos de consumo y condiciones comerciales verificadas"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios siguientes orientan la gestión corporativa. Las frecuencias de revisión, límites y objetivos de consumo se acuerdan para cada ámbito según su operación y las condiciones vigentes."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Uso responsable](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270), [Coralogix Costs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639) y [control de costos histórico](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/810615169)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Factores de consumo",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar volumen y duplicación de logs, tamaño de payloads, dimensiones de métricas, muestreo de trazas y retención según propósito. Eliminar señales redundantes requiere comprobar que se conserva la evidencia necesaria para operar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Demanda del servicio.** Relacionar la generación de señales con solicitudes, transacciones, tareas programadas y actividad de negocio. Diferenciar un crecimiento esperado de tráfico de un cambio en la cantidad de telemetría emitida por operación."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Factor",
                          "Situación que puede elevar el consumo",
                          "Revisión propuesta"
                        ],
                        "filas": [
                          [
                            "Logs",
                            "Mensajes repetidos, detalle excesivo o errores en bucle",
                            "Identificar propósito, nivel y frecuencia de emisión"
                          ],
                          [
                            "Tamaño",
                            "Cuerpos completos o atributos extensos",
                            "Conservar el contexto necesario y excluir contenido redundante"
                          ],
                          [
                            "Métricas",
                            "Muchas combinaciones de etiquetas",
                            "Revisar dimensiones, valores posibles y utilidad analítica"
                          ],
                          [
                            "Trazas",
                            "Mayor tráfico o instrumentación duplicada",
                            "Revisar cobertura, generación de spans y configuración de muestreo"
                          ],
                          [
                            "Transporte",
                            "Envíos duplicados o reintentos durante una falla",
                            "Identificar el origen y comportamiento efectivo del pipeline"
                          ],
                          [
                            "Conservación",
                            "Datos retenidos más allá de su utilidad prevista",
                            "Contrastar configuración con necesidades y criterios aplicables"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Referencia de comparación.** Utilizar períodos y unidades consistentes. Cuando sea posible, comparar volumen por operación además del total, dejando explícito qué operación se utiliza como denominador. Una operación de negocio puede producir varias solicitudes técnicas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo puede explicar los principales factores de su consumo y distinguir cambios de demanda de cambios de instrumentación."
                      }
                    ]
                  },
                  {
                    "titulo": "Visibilidad mediante Coralogix Costs",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "La herramienta interna documenta consolidación entre cuentas, análisis por logs, métricas y trazas, tendencias y proyecciones para SRE y FinOps. Coralogix figura como fuente de consumo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La página identifica DF production y DF staging como cuentas monitoreadas y mantiene pendientes de sincronización automática y agrupación por APL. No debe asumirse cobertura efectiva de todas las cuentas ni cobro por producto completamente automatizado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Alcance de la lectura.** Antes de interpretar un tablero, confirmar cuentas incluidas, período, fecha de actualización, unidades y origen de los datos. Una cuenta ausente del reporte representa una brecha de cobertura, no consumo cero."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Tendencias.** Comparar períodos equivalentes y considerar despliegues, campañas, estacionalidad y fallas que hayan alterado la emisión. Una variación temporal debe investigarse junto con el contexto operativo del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Proyecciones.** Identificar las hipótesis utilizadas y separar el dato observado del valor proyectado. Las estimaciones deben revisarse cuando cambie el patrón de demanda o la configuración de telemetría; no equivalen a una factura confirmada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Uso corporativo.** Aplicar los mismos criterios de lectura a cualquier unidad o cuenta incorporada al seguimiento. Las cuentas citadas en la fuente describen su cobertura documentada, no restringen el modelo de gestión a una unidad organizacional."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Los responsables utilizan la herramienta conociendo su cobertura y limitaciones y pueden identificar qué información falta para una decisión económica."
                      }
                    ]
                  },
                  {
                    "titulo": "Atribución y seguimiento",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Como criterio de gestión, relacionar cada revisión con cuenta, ambiente, servicio, responsable y período. Los atributos consistentes facilitan investigar el origen de una desviación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La atribución requiere validar la granularidad disponible. Una agrupación analítica no equivale automáticamente a una regla de facturación interna."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identificación del origen.** Utilizar el contexto de servicio y ambiente para localizar productores relevantes. Si los datos solo permiten analizar una cuenta completa, registrar ese nivel de agregación sin distribuir importes entre productos mediante supuestos no acordados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad de revisión.** Producto explica cambios de demanda e instrumentación; plataforma aporta el comportamiento de la capacidad compartida; los responsables económicos contrastan el consumo con las condiciones aplicables. La asignación nominal debe quedar definida en cada ámbito."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro de variaciones.** Documentar período, magnitud, causa conocida o hipótesis, responsable y acción prevista. Distinguir una variación justificada de una desviación que requiere corrección."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Hallazgo",
                          "Pregunta de análisis",
                          "Acción posible"
                        ],
                        "filas": [
                          [
                            "Aumento posterior a un despliegue",
                            "¿Cambió la instrumentación o el comportamiento del servicio?",
                            "Comparar señales y configuración antes y después"
                          ],
                          [
                            "Crecimiento proporcional al tráfico",
                            "¿La capacidad soporta el nuevo nivel sostenido?",
                            "Revisar previsión y comportamiento del pipeline"
                          ],
                          [
                            "Consumo sin responsable identificable",
                            "¿Falta identidad o asignación organizacional?",
                            "Corregir contexto y registrar responsable"
                          ],
                          [
                            "Reducción abrupta de señales",
                            "¿Hubo optimización o pérdida de visibilidad?",
                            "Comprobar entrega, cobertura y errores"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las revisiones producen acciones atribuibles y verificables, con una separación clara entre seguimiento técnico y asignación económica."
                      }
                    ]
                  },
                  {
                    "titulo": "Condiciones económicas",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Confirmar contrato, cuotas, retención y condiciones aplicables con los responsables de plataforma y gestión económica. Los importes del documento contractual histórico corresponden a un período finalizado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Esta guía no establece tarifas, presupuestos universales ni un modelo de cargo interno no confirmado por las fuentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Base económica.** Identificar qué magnitudes y capacidades intervienen en el acuerdo aplicable. No convertir bytes, eventos o series en importes mediante una tarifa supuesta ni utilizar valores históricos como precios vigentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Alcance contractual.** Confirmar cuentas y servicios incluidos, condiciones de conservación y tratamiento de excedentes cuando corresponda. Las funcionalidades disponibles en la interfaz no demuestran su inclusión en todas las condiciones comerciales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Conciliación.** Para explicar un importe, alinear período, cuenta, unidad y origen de los datos con la información económica disponible. Registrar diferencias de alcance o actualización antes de concluir que existe un error de cobro."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las decisiones económicas se apoyan en condiciones verificadas y datos comparables, con estimaciones diferenciadas de valores confirmados."
                      }
                    ]
                  },
                  {
                    "titulo": "Planificación de capacidad",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Demanda esperada.** Considerar crecimiento sostenido, picos, campañas, procesos por lotes y nuevos servicios. Identificar qué tramos del pipeline reciben ese incremento y qué responsables deben participar en su evaluación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comportamiento del transporte.** Revisar los indicadores disponibles de recursos, colas, errores, descartes y tiempos de procesamiento. La capacidad debe evaluarse sobre la topología y configuración desplegadas; no se deduce únicamente del volumen recibido por el proveedor."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación bajo carga.** Coordinar pruebas representativas en el entorno adecuado, con criterios de aceptación definidos para la aplicación y el pipeline. Evitar que una prueba de capacidad afecte a consumidores compartidos sin coordinación previa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Límites y respuesta.** Registrar límites conocidos, señales de saturación y acciones operativas aplicables. No presuponer que el escalado, los reintentos o el almacenamiento temporal garantizan entrega ilimitada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La demanda prevista se relaciona con evidencias de capacidad y con acciones identificadas para responder a variaciones relevantes."
                      }
                    ]
                  },
                  {
                    "titulo": "Optimización y verificación del valor",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Priorizar por utilidad.** Comenzar por duplicación, campos innecesarios y emisiones sin uso identificado. Mantener la información necesaria para investigar fallas, comprender dependencias y verificar resultados del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Muestreo y detalle.** Evaluar los cambios según la necesidad de investigación y la configuración disponible. Reducir señales puede limitar la observación de casos poco frecuentes; revisar ese efecto antes de aplicar una reducción general."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Conservación.** Ajustar los períodos según propósito y criterios de tratamiento aprobados. La optimización económica debe coordinarse con las necesidades de investigación y gestión de datos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comparación antes y después.** Medir el efecto del ajuste sobre volumen y recursos y repetir investigaciones representativas. Una reducción de ingesta acompañada de pérdida de contexto no demuestra por sí sola una mejora."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Cada ajuste tiene un propósito, responsable y evidencia de resultado; el equipo conserva la capacidad de operar el servicio y conoce las limitaciones introducidas."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Cardinalidad y capacidad compartida"
              },
              {
                "tipo": "parrafo",
                "texto": "**Las dimensiones de una métrica influyen en el número de combinaciones que puede generar.** Este ejercicio permite comparar el efecto de atributos acotados y de un identificador por petición. Una métrica sin dimensiones parte de una combinación."
              },
              {
                "tipo": "parrafo",
                "texto": "El modelo ilustrativo utiliza **3 países, 8 rutas, 2 resultados y 10.000 identificadores ficticios**. El producto de sus cardinalidades es un límite teórico si todas las combinaciones ocurren; no estima series reales, buckets de histogramas, ingesta ni precio de Coralogix."
              },
              {
                "tipo": "parrafo",
                "texto": "Con país, ruta y resultado son **48 combinaciones**. Al añadir requestId, el máximo del ejemplo asciende a **480.000**. Modelar atributos es una decisión de ingeniería y consumo compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de diseño.** Antes de añadir una dimensión, definir qué comparación permite realizar, cuántos valores puede tomar y si ese conjunto crece continuamente. Revisar el efecto combinado con las dimensiones existentes, no solo cada etiqueta de forma aislada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Interpretación del ejercicio.** El cálculo ilustra combinaciones potenciales. Para evaluar capacidad real se necesitan las series efectivamente emitidas, la configuración de instrumentos y el comportamiento del pipeline. Este ejercicio no representa una cotización ni un límite técnico del proveedor."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Cardinalidad de información](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1755742214)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "País · 3 valores",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Una dimensión acotada permite comparar el comportamiento entre países. Su utilidad depende de la pregunta que estamos respondiendo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Mantener valores consistentes para el mismo país y confirmar que la segmentación aporta una decisión útil. En el ejemplo se consideran tres valores; no se establece una lista corporativa ni un máximo obligatorio."
                      }
                    ]
                  },
                  {
                    "titulo": "Ruta normalizada · 8 valores",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Usar la plantilla de la ruta, por ejemplo `/ordenes/:id`, mantiene una agrupación estable. Una URL distinta por orden puede aumentar la cardinalidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar que identificadores y parámetros variables no se incorporen como valores distintos de esta dimensión. La agrupación debe conservar el significado de la operación sin convertir cada solicitud en una categoría nueva."
                      }
                    ]
                  },
                  {
                    "titulo": "Resultado · 2 valores",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "En este ejemplo simplificado distinguimos éxito y fallo. La semántica real debe definirla el producto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Precisar qué condición representa cada resultado y en qué momento se determina. Si se necesitan categorías adicionales, mantener un conjunto documentado y revisar su efecto sobre las combinaciones y las consultas existentes."
                      }
                    ]
                  },
                  {
                    "titulo": "requestId · 10.000 valores",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Añadir una etiqueta por petición multiplica las combinaciones. Para investigar una petición individual, evaluar contexto de logs y trazas en lugar de incorporar ese identificador a todas las métricas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "El crecimiento continuo de valores exige revisar si la dimensión responde a una necesidad de agregación o a la búsqueda de una ejecución individual. La alternativa elegida debe conservar la capacidad de investigación y respetar los criterios de tratamiento de datos."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Gestión de consumo y costos"
              },
              {
                "tipo": "parrafo",
                "texto": "**El consumo de telemetría utiliza capacidad compartida y debe relacionarse con su valor operativo.** La revisión incluye volumen, calidad, cardinalidad, muestreo y retención, junto con las condiciones de la cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consumo, capacidad y costo son dimensiones relacionadas que deben analizarse por separado.** El consumo describe la telemetría generada y tratada; la capacidad describe los recursos disponibles para procesarla; el costo depende de las condiciones comerciales aplicables. Un aumento de volumen no demuestra por sí solo saturación ni permite calcular un importe sin conocer la base de cobro."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Pregunta de gestión",
                  "Evidencia necesaria"
                ],
                "filas": [
                  [
                    "Consumo",
                    "¿Qué señales genera cada servicio y cómo varían?",
                    "Volumen, frecuencia, tamaño y distribución por tipo de señal"
                  ],
                  [
                    "Capacidad",
                    "¿El pipeline puede procesar la demanda prevista?",
                    "Recursos, errores, descartes y comportamiento bajo carga"
                  ],
                  [
                    "Valor operativo",
                    "¿Qué investigaciones y decisiones permiten las señales?",
                    "Casos de uso, cobertura y consultas utilizadas"
                  ],
                  [
                    "Costo",
                    "¿Qué parte del consumo tiene efecto económico?",
                    "Datos de consumo y condiciones comerciales verificadas"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los criterios siguientes orientan la gestión corporativa. Las frecuencias de revisión, límites y objetivos de consumo se acuerdan para cada ámbito según su operación y las condiciones vigentes."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Uso responsable](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270), [Coralogix Costs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639) y [control de costos histórico](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/810615169)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Factores de consumo"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar volumen y duplicación de logs, tamaño de payloads, dimensiones de métricas, muestreo de trazas y retención según propósito. Eliminar señales redundantes requiere comprobar que se conserva la evidencia necesaria para operar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Demanda del servicio.** Relacionar la generación de señales con solicitudes, transacciones, tareas programadas y actividad de negocio. Diferenciar un crecimiento esperado de tráfico de un cambio en la cantidad de telemetría emitida por operación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Factor",
                  "Situación que puede elevar el consumo",
                  "Revisión propuesta"
                ],
                "filas": [
                  [
                    "Logs",
                    "Mensajes repetidos, detalle excesivo o errores en bucle",
                    "Identificar propósito, nivel y frecuencia de emisión"
                  ],
                  [
                    "Tamaño",
                    "Cuerpos completos o atributos extensos",
                    "Conservar el contexto necesario y excluir contenido redundante"
                  ],
                  [
                    "Métricas",
                    "Muchas combinaciones de etiquetas",
                    "Revisar dimensiones, valores posibles y utilidad analítica"
                  ],
                  [
                    "Trazas",
                    "Mayor tráfico o instrumentación duplicada",
                    "Revisar cobertura, generación de spans y configuración de muestreo"
                  ],
                  [
                    "Transporte",
                    "Envíos duplicados o reintentos durante una falla",
                    "Identificar el origen y comportamiento efectivo del pipeline"
                  ],
                  [
                    "Conservación",
                    "Datos retenidos más allá de su utilidad prevista",
                    "Contrastar configuración con necesidades y criterios aplicables"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Referencia de comparación.** Utilizar períodos y unidades consistentes. Cuando sea posible, comparar volumen por operación además del total, dejando explícito qué operación se utiliza como denominador. Una operación de negocio puede producir varias solicitudes técnicas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo puede explicar los principales factores de su consumo y distinguir cambios de demanda de cambios de instrumentación."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Visibilidad mediante Coralogix Costs"
              },
              {
                "tipo": "parrafo",
                "texto": "La herramienta interna documenta consolidación entre cuentas, análisis por logs, métricas y trazas, tendencias y proyecciones para SRE y FinOps. Coralogix figura como fuente de consumo."
              },
              {
                "tipo": "parrafo",
                "texto": "La página identifica DF production y DF staging como cuentas monitoreadas y mantiene pendientes de sincronización automática y agrupación por APL. No debe asumirse cobertura efectiva de todas las cuentas ni cobro por producto completamente automatizado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance de la lectura.** Antes de interpretar un tablero, confirmar cuentas incluidas, período, fecha de actualización, unidades y origen de los datos. Una cuenta ausente del reporte representa una brecha de cobertura, no consumo cero."
              },
              {
                "tipo": "parrafo",
                "texto": "**Tendencias.** Comparar períodos equivalentes y considerar despliegues, campañas, estacionalidad y fallas que hayan alterado la emisión. Una variación temporal debe investigarse junto con el contexto operativo del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Proyecciones.** Identificar las hipótesis utilizadas y separar el dato observado del valor proyectado. Las estimaciones deben revisarse cuando cambie el patrón de demanda o la configuración de telemetría; no equivalen a una factura confirmada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Uso corporativo.** Aplicar los mismos criterios de lectura a cualquier unidad o cuenta incorporada al seguimiento. Las cuentas citadas en la fuente describen su cobertura documentada, no restringen el modelo de gestión a una unidad organizacional."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Los responsables utilizan la herramienta conociendo su cobertura y limitaciones y pueden identificar qué información falta para una decisión económica."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Atribución y seguimiento"
              },
              {
                "tipo": "parrafo",
                "texto": "Como criterio de gestión, relacionar cada revisión con cuenta, ambiente, servicio, responsable y período. Los atributos consistentes facilitan investigar el origen de una desviación."
              },
              {
                "tipo": "parrafo",
                "texto": "La atribución requiere validar la granularidad disponible. Una agrupación analítica no equivale automáticamente a una regla de facturación interna."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identificación del origen.** Utilizar el contexto de servicio y ambiente para localizar productores relevantes. Si los datos solo permiten analizar una cuenta completa, registrar ese nivel de agregación sin distribuir importes entre productos mediante supuestos no acordados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad de revisión.** Producto explica cambios de demanda e instrumentación; plataforma aporta el comportamiento de la capacidad compartida; los responsables económicos contrastan el consumo con las condiciones aplicables. La asignación nominal debe quedar definida en cada ámbito."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro de variaciones.** Documentar período, magnitud, causa conocida o hipótesis, responsable y acción prevista. Distinguir una variación justificada de una desviación que requiere corrección."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Hallazgo",
                  "Pregunta de análisis",
                  "Acción posible"
                ],
                "filas": [
                  [
                    "Aumento posterior a un despliegue",
                    "¿Cambió la instrumentación o el comportamiento del servicio?",
                    "Comparar señales y configuración antes y después"
                  ],
                  [
                    "Crecimiento proporcional al tráfico",
                    "¿La capacidad soporta el nuevo nivel sostenido?",
                    "Revisar previsión y comportamiento del pipeline"
                  ],
                  [
                    "Consumo sin responsable identificable",
                    "¿Falta identidad o asignación organizacional?",
                    "Corregir contexto y registrar responsable"
                  ],
                  [
                    "Reducción abrupta de señales",
                    "¿Hubo optimización o pérdida de visibilidad?",
                    "Comprobar entrega, cobertura y errores"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las revisiones producen acciones atribuibles y verificables, con una separación clara entre seguimiento técnico y asignación económica."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Condiciones económicas"
              },
              {
                "tipo": "parrafo",
                "texto": "Confirmar contrato, cuotas, retención y condiciones aplicables con los responsables de plataforma y gestión económica. Los importes del documento contractual histórico corresponden a un período finalizado."
              },
              {
                "tipo": "parrafo",
                "texto": "Esta guía no establece tarifas, presupuestos universales ni un modelo de cargo interno no confirmado por las fuentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Base económica.** Identificar qué magnitudes y capacidades intervienen en el acuerdo aplicable. No convertir bytes, eventos o series en importes mediante una tarifa supuesta ni utilizar valores históricos como precios vigentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance contractual.** Confirmar cuentas y servicios incluidos, condiciones de conservación y tratamiento de excedentes cuando corresponda. Las funcionalidades disponibles en la interfaz no demuestran su inclusión en todas las condiciones comerciales."
              },
              {
                "tipo": "parrafo",
                "texto": "**Conciliación.** Para explicar un importe, alinear período, cuenta, unidad y origen de los datos con la información económica disponible. Registrar diferencias de alcance o actualización antes de concluir que existe un error de cobro."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las decisiones económicas se apoyan en condiciones verificadas y datos comparables, con estimaciones diferenciadas de valores confirmados."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Planificación de capacidad"
              },
              {
                "tipo": "parrafo",
                "texto": "**Demanda esperada.** Considerar crecimiento sostenido, picos, campañas, procesos por lotes y nuevos servicios. Identificar qué tramos del pipeline reciben ese incremento y qué responsables deben participar en su evaluación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comportamiento del transporte.** Revisar los indicadores disponibles de recursos, colas, errores, descartes y tiempos de procesamiento. La capacidad debe evaluarse sobre la topología y configuración desplegadas; no se deduce únicamente del volumen recibido por el proveedor."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación bajo carga.** Coordinar pruebas representativas en el entorno adecuado, con criterios de aceptación definidos para la aplicación y el pipeline. Evitar que una prueba de capacidad afecte a consumidores compartidos sin coordinación previa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Límites y respuesta.** Registrar límites conocidos, señales de saturación y acciones operativas aplicables. No presuponer que el escalado, los reintentos o el almacenamiento temporal garantizan entrega ilimitada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La demanda prevista se relaciona con evidencias de capacidad y con acciones identificadas para responder a variaciones relevantes."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Optimización y verificación del valor"
              },
              {
                "tipo": "parrafo",
                "texto": "**Priorizar por utilidad.** Comenzar por duplicación, campos innecesarios y emisiones sin uso identificado. Mantener la información necesaria para investigar fallas, comprender dependencias y verificar resultados del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Muestreo y detalle.** Evaluar los cambios según la necesidad de investigación y la configuración disponible. Reducir señales puede limitar la observación de casos poco frecuentes; revisar ese efecto antes de aplicar una reducción general."
              },
              {
                "tipo": "parrafo",
                "texto": "**Conservación.** Ajustar los períodos según propósito y criterios de tratamiento aprobados. La optimización económica debe coordinarse con las necesidades de investigación y gestión de datos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comparación antes y después.** Medir el efecto del ajuste sobre volumen y recursos y repetir investigaciones representativas. Una reducción de ingesta acompañada de pérdida de contexto no demuestra por sí sola una mejora."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Cada ajuste tiene un propósito, responsable y evidencia de resultado; el equipo conserva la capacidad de operar el servicio y conoce las limitaciones introducidas."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Cardinalidad y capacidad compartida"
              },
              {
                "tipo": "parrafo",
                "texto": "**Las dimensiones de una métrica influyen en el número de combinaciones que puede generar.** Este ejercicio permite comparar el efecto de atributos acotados y de un identificador por petición. Una métrica sin dimensiones parte de una combinación."
              },
              {
                "tipo": "parrafo",
                "texto": "El modelo ilustrativo utiliza **3 países, 8 rutas, 2 resultados y 10.000 identificadores ficticios**. El producto de sus cardinalidades es un límite teórico si todas las combinaciones ocurren; no estima series reales, buckets de histogramas, ingesta ni precio de Coralogix."
              },
              {
                "tipo": "parrafo",
                "texto": "Con país, ruta y resultado son **48 combinaciones**. Al añadir requestId, el máximo del ejemplo asciende a **480.000**. Modelar atributos es una decisión de ingeniería y consumo compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de diseño.** Antes de añadir una dimensión, definir qué comparación permite realizar, cuántos valores puede tomar y si ese conjunto crece continuamente. Revisar el efecto combinado con las dimensiones existentes, no solo cada etiqueta de forma aislada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Interpretación del ejercicio.** El cálculo ilustra combinaciones potenciales. Para evaluar capacidad real se necesitan las series efectivamente emitidas, la configuración de instrumentos y el comportamiento del pipeline. Este ejercicio no representa una cotización ni un límite técnico del proveedor."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Cardinalidad de información](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1755742214)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "País · 3 valores"
              },
              {
                "tipo": "parrafo",
                "texto": "Una dimensión acotada permite comparar el comportamiento entre países. Su utilidad depende de la pregunta que estamos respondiendo."
              },
              {
                "tipo": "parrafo",
                "texto": "Mantener valores consistentes para el mismo país y confirmar que la segmentación aporta una decisión útil. En el ejemplo se consideran tres valores; no se establece una lista corporativa ni un máximo obligatorio."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Ruta normalizada · 8 valores"
              },
              {
                "tipo": "parrafo",
                "texto": "Usar la plantilla de la ruta, por ejemplo `/ordenes/:id`, mantiene una agrupación estable. Una URL distinta por orden puede aumentar la cardinalidad."
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar que identificadores y parámetros variables no se incorporen como valores distintos de esta dimensión. La agrupación debe conservar el significado de la operación sin convertir cada solicitud en una categoría nueva."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Resultado · 2 valores"
              },
              {
                "tipo": "parrafo",
                "texto": "En este ejemplo simplificado distinguimos éxito y fallo. La semántica real debe definirla el producto."
              },
              {
                "tipo": "parrafo",
                "texto": "Precisar qué condición representa cada resultado y en qué momento se determina. Si se necesitan categorías adicionales, mantener un conjunto documentado y revisar su efecto sobre las combinaciones y las consultas existentes."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "requestId · 10.000 valores"
              },
              {
                "tipo": "parrafo",
                "texto": "Añadir una etiqueta por petición multiplica las combinaciones. Para investigar una petición individual, evaluar contexto de logs y trazas en lugar de incorporar ese identificador a todas las métricas."
              },
              {
                "tipo": "parrafo",
                "texto": "El crecimiento continuo de valores exige revisar si la dimensión responde a una necesidad de agregación o a la búsqueda de una ejecución individual. La alternativa elegida debe conservar la capacidad de investigación y respetar los criterios de tratamiento de datos."
              }
            ],
            "fuentes": [
              {
                "titulo": "Uso responsable",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270"
              },
              {
                "titulo": "Coralogix Costs",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639"
              },
              {
                "titulo": "control de costos histórico",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/810615169"
              },
              {
                "titulo": "Cardinalidad de información",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1755742214"
              }
            ]
          },
          {
            "id": "decisiones",
            "titulo": "Responsabilidades y decisiones",
            "bajada": "Excepciones, decisiones y gobierno de alertas.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Decisiones y excepciones al modelo"
              },
              {
                "tipo": "parrafo",
                "texto": "**Los cambios en el consumo, los proveedores o los estándares pueden afectar a otros equipos.** El Charter propone instrumentos proporcionales al alcance de cada decisión."
              },
              {
                "tipo": "parrafo",
                "texto": "**La responsabilidad de una decisión comprende su definición, implementación y verificación.** El equipo debe identificar qué problema resuelve, qué consumidores afecta y quién mantendrá la solución durante su operación. Registrar una propuesta no equivale a aprobarla ni a completar su implementación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Tipo de decisión",
                  "Alcance",
                  "Tratamiento documental"
                ],
                "filas": [
                  [
                    "Implementación dentro del estándar",
                    "Configuración e instrumentación de un servicio",
                    "Registro del producto y evidencia de validación"
                  ],
                  [
                    "Capacidad transversal",
                    "Cambios reutilizables por varios equipos",
                    "Propuesta mediante RFC y revisión con responsables y consumidores"
                  ],
                  [
                    "Decisión de arquitectura",
                    "Elección con consecuencias relevantes para la solución",
                    "ADR con contexto, alternativas y consecuencias"
                  ],
                  [
                    "Excepción",
                    "Desviación de un estándar aplicable",
                    "Registro de alcance, riesgos, responsable y condición de revisión"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Estos instrumentos pueden complementarse: una propuesta transversal puede dar lugar a una decisión de arquitectura y a tareas de implementación. El aprobador y el canal se determinan mediante el proceso corporativo vigente; esta sección no crea nuevas atribuciones de aprobación."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Decisiones de ingeniería](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807253561), [framework de estándares](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809612801), [taxonomía documental](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810235393)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Implementar dentro del estándar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Usar la guía del lenguaje y ambiente, registrar las decisiones propias del producto y validar sus resultados. El Charter explica principios; las guías explican cómo implementarlos y los runbooks cómo operar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitar la decisión.** Identificar servicio, ambiente, integración y necesidad operativa. Confirmar que la guía utilizada cubre el caso y que no se modifica una capacidad compartida ni se introduce una desviación del estándar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad del producto.** Definir indicadores y atributos relevantes, mantener su significado y comprobar que las señales permiten investigar el servicio. El uso de una librería común no transfiere esa responsabilidad a plataforma."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Coordinación técnica.** Involucrar a los responsables de plataforma cuando la configuración afecte transporte, destinos o recursos compartidos. Aclarar las dependencias antes de ejecutar cambios que puedan alterar otros consumidores."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación y operación.** Registrar la configuración relevante sin secretos, los escenarios comprobados y las limitaciones conocidas. Mantener alineados dashboards, alertas y procedimientos con la implementación resultante."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El producto implementa una solución compatible con el estándar y conserva evidencia de su funcionamiento y responsables de mantenimiento."
                      }
                    ]
                  },
                  {
                    "titulo": "Proponer una capacidad compartida",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Documentar un RFC cuando se propone una capacidad o estándar transversal. Explicar problema, consumidores, alternativas e impacto sobre interoperabilidad, operación y costos. El catálogo de RFC del Charter es una estructura de referencia, no evidencia de aprobación de cada entrada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Necesidad compartida.** Describir los casos de uso que justifican una capacidad común y los equipos que podrían consumirla. Distinguir necesidades confirmadas de beneficios todavía hipotéticos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Alternativas.** Comparar la situación actual, una solución local y una incorporación al estándar cuando sean opciones pertinentes. Evaluar compatibilidad, esfuerzo de adopción, dependencia de proveedores y mantenimiento posterior."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Participación.** Identificar a quienes mantienen la capacidad y a los consumidores afectados. Incluir las funciones de arquitectura, seguridad o gestión económica cuando el alcance requiera su evaluación, conforme al proceso vigente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Adopción y continuidad.** Explicar cómo se validará la propuesta, cómo convivirá con integraciones existentes y quién mantendrá documentación y soporte. Considerar la transición y el retiro de mecanismos reemplazados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una propuesta evaluable con alcance, alternativas, responsables y criterios de aceptación, cuyo estado permita distinguir discusión, decisión e implementación."
                      }
                    ]
                  },
                  {
                    "titulo": "Registrar una decisión de arquitectura",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Conservar un ADR con contexto, alternativas, decisión y consecuencias. Permite entender por qué se eligió un camino cuando cambian las personas o herramientas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contexto verificable.** Registrar restricciones y evidencia disponibles al decidir. Separar hechos comprobados de supuestos y señalar qué incertidumbres permanecen."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Consecuencias explícitas.** Describir beneficios, limitaciones, dependencias y compromisos operativos. Una decisión puede resolver una necesidad y a la vez incorporar costos de mantenimiento o restricciones de evolución."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Elemento del registro",
                          "Información esperada"
                        ],
                        "filas": [
                          [
                            "Problema",
                            "Necesidad y alcance de la decisión"
                          ],
                          [
                            "Alternativas",
                            "Opciones consideradas y criterios de comparación"
                          ],
                          [
                            "Decisión",
                            "Camino elegido y justificación"
                          ],
                          [
                            "Responsables",
                            "Participantes y responsables de implementación y operación"
                          ],
                          [
                            "Consecuencias",
                            "Efectos sobre consumidores, compatibilidad, seguridad y consumo"
                          ],
                          [
                            "Verificación",
                            "Evidencias que permitirán comprobar el resultado"
                          ],
                          [
                            "Revisión",
                            "Cambios de contexto que ameritan reconsiderar la decisión"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evolución del registro.** Conservar la relación con propuestas, excepciones y tareas relevantes. Si una nueva decisión reemplaza a otra, mantener la trazabilidad entre ambas para comprender la evolución del modelo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La decisión puede comprenderse y revisarse sin depender de la memoria de quienes participaron originalmente."
                      }
                    ]
                  },
                  {
                    "titulo": "Solicitar una excepción",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Describir motivo, riesgos, alcance, responsable, vigencia y revisión. Escalar cuando se rompe un estándar, se afecta a otros dominios o existe impacto económico relevante. La excepción debe ser trazable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identificación de la desviación.** Precisar qué criterio del estándar no se cumple y por qué las alternativas disponibles no resuelven la necesidad. Una preferencia de implementación debe diferenciarse de una restricción técnica u operativa demostrada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Alcance y tratamiento.** Identificar servicios, ambientes, datos y consumidores afectados. Proponer controles compensatorios y describir sus limitaciones, sin presentarlos como equivalentes al estándar sin evaluación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Decisión y vigencia.** Registrar la resolución del proceso aplicable y sus condiciones. La existencia de una solicitud no autoriza la desviación. Si se acepta, dejar identificados su responsable y la condición de revisión o finalización."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisión y cierre.** Evaluar la excepción cuando cambien sus supuestos o exista una alternativa compatible. Documentar su retiro, regularización o nueva evaluación, incluyendo la verificación de que los consumidores mantienen su capacidad operativa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las desviaciones tienen una justificación visible y un tratamiento definido, con responsabilidad durante toda su vigencia."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Gobierno de alertas y respuesta operativa"
              },
              {
                "tipo": "parrafo",
                "texto": "**Las alertas son parte del servicio consumido y requieren una respuesta definida.** Cada alerta debe contar con señal, condición, responsable, destino y procedimiento."
              },
              {
                "tipo": "parrafo",
                "texto": "El gobierno de alertas conecta la detección técnica con una acción operativa. Producto define el significado del impacto; los responsables de operación acuerdan la respuesta y plataforma participa cuando intervienen capacidades compartidas. La asignación concreta debe reflejar la organización vigente del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Alertas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1395294222), [uso responsable](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270), [Coralogix Costs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Diseñar la condición",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Definir un indicador que represente el impacto, una ventana y un umbral adecuado al servicio. Los umbrales de ejemplo en las guías no son objetivos universales. En el modelo documentado se usan alertas de métricas; las alertas basadas en logs están restringidas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Propósito.** Explicar qué situación requiere intervención y qué consecuencia tiene para el servicio. Evitar condiciones que generen notificaciones sin una acción o una necesidad de investigación identificada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contexto de evaluación.** Revisar ambiente, alcance, ventana y condiciones habituales de tráfico. Considerar cómo se interpreta la ausencia de datos y diferenciarla de un valor que demuestra funcionamiento normal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación.** Comprobar escenarios representativos de activación y recuperación, así como situaciones que no deberían generar una notificación. Los criterios deben corresponder al comportamiento del servicio y a la configuración disponible."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La alerta detecta una situación definida y permite comprender su alcance y la razón de la intervención."
                      }
                    ]
                  },
                  {
                    "titulo": "Preparar la respuesta",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Acordar quién recibe, qué revisa y cómo escala. Las guías actuales describen Microsoft Teams mediante Workflow y llamadas mediante AWS Connect. La existencia de un canal no demuestra que la respuesta funcione: preparar una validación controlada con el equipo receptor."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsable de respuesta.** Identificar equipo receptor y mecanismo de escalamiento conforme a la operación acordada. Mantener esta asignación cuando cambien los equipos o la responsabilidad del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contenido de la notificación.** Incluir identificación del servicio y ambiente, condición observada y referencia al procedimiento. Evitar secretos o datos sensibles en mensajes y enlaces compartidos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Procedimiento operativo.** Indicar qué evidencias revisar, qué acciones están dentro del alcance del equipo y cuándo escalar. Las acciones de contención deben corresponder a procedimientos conocidos y a los permisos disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Prueba de recepción.** Coordinar una verificación con los destinatarios y confirmar recepción, interpretación y acceso a las evidencias necesarias. Registrar los problemas detectados y comprobar su corrección."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La alerta llega a un equipo identificado que comprende qué revisar y cómo coordinar la respuesta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Teams](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1437663281) · [AWS Connect](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1879998531)."
                      }
                    ]
                  },
                  {
                    "titulo": "Cuidar la capacidad compartida",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar volumen, duplicación, payloads, cardinalidad, muestreo y retención. Coralogix Costs documenta consolidación y análisis de consumo; los importes de la página de contrato corresponden a un período fechado y no deben usarse como tarifa vigente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad sobre el ruido.** Revisar alertas repetidas, superpuestas o sin una respuesta útil. Antes de reducir notificaciones, comprobar que el ajuste conserva la detección del impacto relevante."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cambios compartidos.** Identificar consumidores de destinos, integraciones y recursos comunes. Coordinar modificaciones para evitar que un ajuste local interrumpa la respuesta de otros servicios."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Seguimiento.** Relacionar variaciones de consumo con cambios de instrumentación y operación. Asignar responsables a los ajustes y verificar tanto su efecto técnico como la continuidad de las investigaciones necesarias."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Los equipos mantienen señales y notificaciones útiles y coordinan los cambios que afectan la capacidad común."
                      }
                    ]
                  },
                  {
                    "titulo": "Convertir el incidente en aprendizaje",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Actualizar el runbook, revisar si las señales explicaron el incidente y priorizar mejoras. Golden Path desarrolla la implementación y la validación de estos acuerdos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisión de evidencias.** Identificar qué permitió detectar e investigar el problema y qué información faltó. Distinguir fallas de instrumentación, interpretación, notificación o coordinación para orientar la mejora adecuada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Acciones verificables.** Registrar cada mejora con responsable, alcance y criterio de cierre. Una actualización documental debe reflejar el procedimiento realmente disponible para el equipo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Decisiones derivadas.** Utilizar un RFC, ADR o evaluación de excepción cuando la solución requiera cambios transversales o altere el estándar. Mantener la relación entre el incidente, la decisión y su implementación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El aprendizaje se traduce en cambios comprobados de cobertura, procedimientos o responsabilidades que mejoran la respuesta futura."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) · [Consumo y capacidad](/docs/observabilidad/gobierno?tema=costos) · [Implementación de alertas](/docs/observabilidad/golden-path?tema=alertas)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Decisiones y excepciones al modelo"
              },
              {
                "tipo": "parrafo",
                "texto": "**Los cambios en el consumo, los proveedores o los estándares pueden afectar a otros equipos.** El Charter propone instrumentos proporcionales al alcance de cada decisión."
              },
              {
                "tipo": "parrafo",
                "texto": "**La responsabilidad de una decisión comprende su definición, implementación y verificación.** El equipo debe identificar qué problema resuelve, qué consumidores afecta y quién mantendrá la solución durante su operación. Registrar una propuesta no equivale a aprobarla ni a completar su implementación."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Tipo de decisión",
                  "Alcance",
                  "Tratamiento documental"
                ],
                "filas": [
                  [
                    "Implementación dentro del estándar",
                    "Configuración e instrumentación de un servicio",
                    "Registro del producto y evidencia de validación"
                  ],
                  [
                    "Capacidad transversal",
                    "Cambios reutilizables por varios equipos",
                    "Propuesta mediante RFC y revisión con responsables y consumidores"
                  ],
                  [
                    "Decisión de arquitectura",
                    "Elección con consecuencias relevantes para la solución",
                    "ADR con contexto, alternativas y consecuencias"
                  ],
                  [
                    "Excepción",
                    "Desviación de un estándar aplicable",
                    "Registro de alcance, riesgos, responsable y condición de revisión"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Estos instrumentos pueden complementarse: una propuesta transversal puede dar lugar a una decisión de arquitectura y a tareas de implementación. El aprobador y el canal se determinan mediante el proceso corporativo vigente; esta sección no crea nuevas atribuciones de aprobación."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Decisiones de ingeniería](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807253561), [framework de estándares](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809612801), [taxonomía documental](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810235393)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Implementar dentro del estándar"
              },
              {
                "tipo": "parrafo",
                "texto": "Usar la guía del lenguaje y ambiente, registrar las decisiones propias del producto y validar sus resultados. El Charter explica principios; las guías explican cómo implementarlos y los runbooks cómo operar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitar la decisión.** Identificar servicio, ambiente, integración y necesidad operativa. Confirmar que la guía utilizada cubre el caso y que no se modifica una capacidad compartida ni se introduce una desviación del estándar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad del producto.** Definir indicadores y atributos relevantes, mantener su significado y comprobar que las señales permiten investigar el servicio. El uso de una librería común no transfiere esa responsabilidad a plataforma."
              },
              {
                "tipo": "parrafo",
                "texto": "**Coordinación técnica.** Involucrar a los responsables de plataforma cuando la configuración afecte transporte, destinos o recursos compartidos. Aclarar las dependencias antes de ejecutar cambios que puedan alterar otros consumidores."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación y operación.** Registrar la configuración relevante sin secretos, los escenarios comprobados y las limitaciones conocidas. Mantener alineados dashboards, alertas y procedimientos con la implementación resultante."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El producto implementa una solución compatible con el estándar y conserva evidencia de su funcionamiento y responsables de mantenimiento."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Proponer una capacidad compartida"
              },
              {
                "tipo": "parrafo",
                "texto": "Documentar un RFC cuando se propone una capacidad o estándar transversal. Explicar problema, consumidores, alternativas e impacto sobre interoperabilidad, operación y costos. El catálogo de RFC del Charter es una estructura de referencia, no evidencia de aprobación de cada entrada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Necesidad compartida.** Describir los casos de uso que justifican una capacidad común y los equipos que podrían consumirla. Distinguir necesidades confirmadas de beneficios todavía hipotéticos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alternativas.** Comparar la situación actual, una solución local y una incorporación al estándar cuando sean opciones pertinentes. Evaluar compatibilidad, esfuerzo de adopción, dependencia de proveedores y mantenimiento posterior."
              },
              {
                "tipo": "parrafo",
                "texto": "**Participación.** Identificar a quienes mantienen la capacidad y a los consumidores afectados. Incluir las funciones de arquitectura, seguridad o gestión económica cuando el alcance requiera su evaluación, conforme al proceso vigente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Adopción y continuidad.** Explicar cómo se validará la propuesta, cómo convivirá con integraciones existentes y quién mantendrá documentación y soporte. Considerar la transición y el retiro de mecanismos reemplazados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una propuesta evaluable con alcance, alternativas, responsables y criterios de aceptación, cuyo estado permita distinguir discusión, decisión e implementación."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Registrar una decisión de arquitectura"
              },
              {
                "tipo": "parrafo",
                "texto": "Conservar un ADR con contexto, alternativas, decisión y consecuencias. Permite entender por qué se eligió un camino cuando cambian las personas o herramientas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contexto verificable.** Registrar restricciones y evidencia disponibles al decidir. Separar hechos comprobados de supuestos y señalar qué incertidumbres permanecen."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consecuencias explícitas.** Describir beneficios, limitaciones, dependencias y compromisos operativos. Una decisión puede resolver una necesidad y a la vez incorporar costos de mantenimiento o restricciones de evolución."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Elemento del registro",
                  "Información esperada"
                ],
                "filas": [
                  [
                    "Problema",
                    "Necesidad y alcance de la decisión"
                  ],
                  [
                    "Alternativas",
                    "Opciones consideradas y criterios de comparación"
                  ],
                  [
                    "Decisión",
                    "Camino elegido y justificación"
                  ],
                  [
                    "Responsables",
                    "Participantes y responsables de implementación y operación"
                  ],
                  [
                    "Consecuencias",
                    "Efectos sobre consumidores, compatibilidad, seguridad y consumo"
                  ],
                  [
                    "Verificación",
                    "Evidencias que permitirán comprobar el resultado"
                  ],
                  [
                    "Revisión",
                    "Cambios de contexto que ameritan reconsiderar la decisión"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Evolución del registro.** Conservar la relación con propuestas, excepciones y tareas relevantes. Si una nueva decisión reemplaza a otra, mantener la trazabilidad entre ambas para comprender la evolución del modelo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La decisión puede comprenderse y revisarse sin depender de la memoria de quienes participaron originalmente."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Solicitar una excepción"
              },
              {
                "tipo": "parrafo",
                "texto": "Describir motivo, riesgos, alcance, responsable, vigencia y revisión. Escalar cuando se rompe un estándar, se afecta a otros dominios o existe impacto económico relevante. La excepción debe ser trazable."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identificación de la desviación.** Precisar qué criterio del estándar no se cumple y por qué las alternativas disponibles no resuelven la necesidad. Una preferencia de implementación debe diferenciarse de una restricción técnica u operativa demostrada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance y tratamiento.** Identificar servicios, ambientes, datos y consumidores afectados. Proponer controles compensatorios y describir sus limitaciones, sin presentarlos como equivalentes al estándar sin evaluación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Decisión y vigencia.** Registrar la resolución del proceso aplicable y sus condiciones. La existencia de una solicitud no autoriza la desviación. Si se acepta, dejar identificados su responsable y la condición de revisión o finalización."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisión y cierre.** Evaluar la excepción cuando cambien sus supuestos o exista una alternativa compatible. Documentar su retiro, regularización o nueva evaluación, incluyendo la verificación de que los consumidores mantienen su capacidad operativa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las desviaciones tienen una justificación visible y un tratamiento definido, con responsabilidad durante toda su vigencia."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Gobierno de alertas y respuesta operativa"
              },
              {
                "tipo": "parrafo",
                "texto": "**Las alertas son parte del servicio consumido y requieren una respuesta definida.** Cada alerta debe contar con señal, condición, responsable, destino y procedimiento."
              },
              {
                "tipo": "parrafo",
                "texto": "El gobierno de alertas conecta la detección técnica con una acción operativa. Producto define el significado del impacto; los responsables de operación acuerdan la respuesta y plataforma participa cuando intervienen capacidades compartidas. La asignación concreta debe reflejar la organización vigente del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [Alertas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1395294222), [uso responsable](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270), [Coralogix Costs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Diseñar la condición"
              },
              {
                "tipo": "parrafo",
                "texto": "Definir un indicador que represente el impacto, una ventana y un umbral adecuado al servicio. Los umbrales de ejemplo en las guías no son objetivos universales. En el modelo documentado se usan alertas de métricas; las alertas basadas en logs están restringidas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Propósito.** Explicar qué situación requiere intervención y qué consecuencia tiene para el servicio. Evitar condiciones que generen notificaciones sin una acción o una necesidad de investigación identificada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contexto de evaluación.** Revisar ambiente, alcance, ventana y condiciones habituales de tráfico. Considerar cómo se interpreta la ausencia de datos y diferenciarla de un valor que demuestra funcionamiento normal."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación.** Comprobar escenarios representativos de activación y recuperación, así como situaciones que no deberían generar una notificación. Los criterios deben corresponder al comportamiento del servicio y a la configuración disponible."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La alerta detecta una situación definida y permite comprender su alcance y la razón de la intervención."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Preparar la respuesta"
              },
              {
                "tipo": "parrafo",
                "texto": "Acordar quién recibe, qué revisa y cómo escala. Las guías actuales describen Microsoft Teams mediante Workflow y llamadas mediante AWS Connect. La existencia de un canal no demuestra que la respuesta funcione: preparar una validación controlada con el equipo receptor."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsable de respuesta.** Identificar equipo receptor y mecanismo de escalamiento conforme a la operación acordada. Mantener esta asignación cuando cambien los equipos o la responsabilidad del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contenido de la notificación.** Incluir identificación del servicio y ambiente, condición observada y referencia al procedimiento. Evitar secretos o datos sensibles en mensajes y enlaces compartidos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Procedimiento operativo.** Indicar qué evidencias revisar, qué acciones están dentro del alcance del equipo y cuándo escalar. Las acciones de contención deben corresponder a procedimientos conocidos y a los permisos disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Prueba de recepción.** Coordinar una verificación con los destinatarios y confirmar recepción, interpretación y acceso a las evidencias necesarias. Registrar los problemas detectados y comprobar su corrección."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La alerta llega a un equipo identificado que comprende qué revisar y cómo coordinar la respuesta."
              },
              {
                "tipo": "parrafo",
                "texto": "[Teams](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1437663281) · [AWS Connect](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1879998531)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Cuidar la capacidad compartida"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar volumen, duplicación, payloads, cardinalidad, muestreo y retención. Coralogix Costs documenta consolidación y análisis de consumo; los importes de la página de contrato corresponden a un período fechado y no deben usarse como tarifa vigente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad sobre el ruido.** Revisar alertas repetidas, superpuestas o sin una respuesta útil. Antes de reducir notificaciones, comprobar que el ajuste conserva la detección del impacto relevante."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cambios compartidos.** Identificar consumidores de destinos, integraciones y recursos comunes. Coordinar modificaciones para evitar que un ajuste local interrumpa la respuesta de otros servicios."
              },
              {
                "tipo": "parrafo",
                "texto": "**Seguimiento.** Relacionar variaciones de consumo con cambios de instrumentación y operación. Asignar responsables a los ajustes y verificar tanto su efecto técnico como la continuidad de las investigaciones necesarias."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Los equipos mantienen señales y notificaciones útiles y coordinan los cambios que afectan la capacidad común."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Convertir el incidente en aprendizaje"
              },
              {
                "tipo": "parrafo",
                "texto": "Actualizar el runbook, revisar si las señales explicaron el incidente y priorizar mejoras. Golden Path desarrolla la implementación y la validación de estos acuerdos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisión de evidencias.** Identificar qué permitió detectar e investigar el problema y qué información faltó. Distinguir fallas de instrumentación, interpretación, notificación o coordinación para orientar la mejora adecuada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Acciones verificables.** Registrar cada mejora con responsable, alcance y criterio de cierre. Una actualización documental debe reflejar el procedimiento realmente disponible para el equipo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Decisiones derivadas.** Utilizar un RFC, ADR o evaluación de excepción cuando la solución requiera cambios transversales o altere el estándar. Mantener la relación entre el incidente, la decisión y su implementación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El aprendizaje se traduce en cambios comprobados de cobertura, procedimientos o responsabilidades que mejoran la respuesta futura."
              },
              {
                "tipo": "parrafo",
                "texto": "[Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) · [Consumo y capacidad](/docs/observabilidad/gobierno?tema=costos) · [Implementación de alertas](/docs/observabilidad/golden-path?tema=alertas)."
              }
            ],
            "fuentes": [
              {
                "titulo": "Decisiones de ingeniería",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807253561"
              },
              {
                "titulo": "framework de estándares",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809612801"
              },
              {
                "titulo": "taxonomía documental",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810235393"
              },
              {
                "titulo": "Alertas en Coralogix",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1395294222"
              },
              {
                "titulo": "uso responsable",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270"
              },
              {
                "titulo": "Coralogix Costs",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639"
              }
            ]
          }
        ]
      },
      {
        "id": "golden-path",
        "titulo": "Golden Path",
        "resumenCapitulo": "Instrumentar, validar y convertir la evidencia en aprendizaje.",
        "temas": [
          {
            "id": "arquitectura",
            "titulo": "Arquitectura y componentes",
            "bajada": "Arquitectura de referencia, responsabilidades y funcionamiento de OpenTelemetry.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Arquitectura de referencia"
              },
              {
                "tipo": "parrafo",
                "texto": "Una operación de negocio deja evidencia en la aplicación. La instrumentación la convierte en señales, OES las transporta y Coralogix permite consultarlas. Selecciona cada etapa para conocer su función."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de la arquitectura.** Separar la generación de evidencia, su transporte y su análisis, manteniendo una responsabilidad identificable en cada tramo. Para implementar este recorrido se necesita conocer tanto la función de los componentes como su configuración efectiva en el ambiente de destino."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Capa",
                  "Componente",
                  "Responsabilidad principal",
                  "Evidencia de integración"
                ],
                "filas": [
                  [
                    "Producto",
                    "Aplicación",
                    "Ejecutar operaciones y definir su significado",
                    "Operación representativa con resultado conocido"
                  ],
                  [
                    "Instrumentación",
                    "Ægis / OpenTelemetry",
                    "Generar señales con identidad y contexto",
                    "Señales correspondientes a la operación"
                  ],
                  [
                    "Captura local",
                    "OES Client",
                    "Recibir y entregar telemetría desde el entorno",
                    "Recepción y exportación verificadas"
                  ],
                  [
                    "Transporte compartido",
                    "OES Core",
                    "Procesar y encaminar hacia el destino",
                    "Pipeline y destino identificados"
                  ],
                  [
                    "Análisis",
                    "Coralogix",
                    "Permitir consulta y uso operativo",
                    "Evidencia localizada en cuenta y ambiente correctos"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Producto: aplicación → Ægis / OpenTelemetry → Plataforma: OES Client → OES Core → Proveedor: Coralogix.**"
              },
              {
                "tipo": "parrafo",
                "texto": "Este esquema representa el recorrido lógico del backend; la topología y los endpoints se confirman por ambiente. Eventos de negocio y RUM tienen integraciones específicas y no deben asumirse como parte de este mismo circuito."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228), [Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Aplicación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Función:** ejecutar la operación del producto y aportar el contexto necesario para investigarla."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entrada y salida:** una solicitud o tarea produce actividad observable. El equipo de producto identifica operaciones relevantes y evita incluir datos sensibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Límite funcional.** Precisar dónde comienza y termina la operación, qué resultado produce y qué dependencias utiliza. La arquitectura de telemetría debe representar ese recorrido sin confundir la recepción de una solicitud con la finalización del resultado de negocio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Configuración a identificar.** Runtime, framework, ambiente, identidad del servicio e integración utilizada. El contexto de negocio corresponde al producto; el transporte no puede reconstruir información que nunca se generó."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación.** Seleccionar una operación de éxito y otra de error y comprobar qué evidencia produce cada una. Registrar las dependencias o etapas que todavía no cuentan con cobertura."
                      }
                    ]
                  },
                  {
                    "titulo": "Ægis / OpenTelemetry",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Guías del componente · staging:** [JavaScript / TypeScript](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Python](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Java](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN) · [Go — documentación pendiente de validación](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Función:** instrumentar la aplicación mediante la librería corporativa y las capacidades de OpenTelemetry."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcionamiento:** la actividad instrumentada genera señales con identidad de servicio y ambiente. La integración determina qué se captura automáticamente y qué requiere instrumentación explícita."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Relación entre componentes.** OpenTelemetry aporta las capacidades abiertas de instrumentación; Ægis integra su uso en el modelo corporativo. La guía del lenguaje define cómo inicializar y configurar la integración disponible para el servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cobertura.** Revisar llamadas entrantes, dependencias y operaciones propias del producto. Agregar instrumentación explícita cuando exista una necesidad identificada y comprobar que no duplique la captura automática."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación.** Confirmar versión, inicialización, identidad recibida y exportación. Una aplicación que inicia correctamente puede tener una integración incompleta o una operación sin instrumentar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Continuar con la instrumentación](/docs/observabilidad/golden-path?tema=instrumentar)."
                      }
                    ]
                  },
                  {
                    "titulo": "OES Client",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Función:** recibir la telemetría del entorno y conducirla hacia el servicio de observabilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcionamiento:** el agente o Collector utiliza la configuración habilitada para ese ambiente. La dirección de recepción y la conectividad deben verificarse antes de enviar señales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contrato de conexión.** Identificar señales admitidas, protocolo, dirección de recepción y mecanismo de protección configurados. Los valores concretos se obtienen de la integración habilitada, sin deducirlos del nombre del componente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Límite operativo.** Diferenciar problemas de emisión de la aplicación de problemas de recepción o entrega del cliente. La validación requiere revisar ambos extremos del tramo y coordinar con quienes administran su configuración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación.** Confirmar que el cliente utilizado corresponde al entorno real y que entrega las señales al siguiente destino previsto. Registrar errores y limitaciones de conectividad sin exponer credenciales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Habilitar la conexión con OES](/docs/observabilidad/golden-path?tema=oes)."
                      }
                    ]
                  },
                  {
                    "titulo": "OES Core",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Función:** centralizar el procesamiento y encaminamiento del servicio OES."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcionamiento:** recibe el tráfico de los clientes y aplica el pipeline configurado hacia el destino. No sustituye la instrumentación del código ni la definición de señales de negocio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Configuración compartida.** Identificar los pipelines que atienden al servicio y el tratamiento que aplican a sus señales. Las transformaciones, filtros y destinos deben revisarse sobre la configuración vigente, no asumirse como funciones habilitadas en todos los ambientes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Impacto entre consumidores.** Coordinar cambios de procesamiento y encaminamiento con los responsables de plataforma. Un ajuste compartido puede afectar identidad, volumen o disponibilidad de evidencia de varios productos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación.** Relacionar recepción, procesamiento y exportación con el destino acordado. Revisar el comportamiento de la capacidad común cuando aumente el volumen o falle un destino."
                      }
                    ]
                  },
                  {
                    "titulo": "Coralogix",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Función:** hacer disponible la evidencia para investigación, visualización y alertas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcionamiento:** la recepción debe verificarse en la cuenta y ambiente correspondientes. Encontrar una señal requiere también permisos y filtros adecuados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Uso funcional.** La integración se completa cuando el equipo puede consultar una operación y utilizar sus evidencias. La disponibilidad de datos no garantiza que un dashboard o alerta esté configurado para el servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitación del problema.** Si no aparece información, revisar cuenta, intervalo, filtros e identidad antes de atribuir la ausencia al transporte. Contrastar el resultado con las evidencias disponibles de emisión y exportación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación.** Confirmar que el equipo autorizado puede localizar la operación de prueba y distinguir su resultado, ambiente y servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Consultar y operar](/docs/observabilidad/golden-path?tema=operar)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Componentes y responsabilidades"
              },
              {
                "tipo": "parrafo",
                "texto": "La explicación funcional indica para qué existe cada pieza; la explicación técnica muestra cómo participa. Los responsables concretos y los permisos se consultan en [Gobierno](/docs/observabilidad/gobierno?tema=accesos)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Instrumentación y SDK",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcional:** convertir el comportamiento del servicio en evidencia útil."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Técnica:** la instrumentación registra operaciones; el SDK administra las señales antes de exportarlas. El equipo de aplicación integra Ægis, configura la identidad y valida la cobertura del runtime."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Responsabilidad de integración.** Mantener documentadas la versión, la configuración relevante y las extensiones locales. Comprobar qué instrumentación existe antes de añadir otra dependencia para resolver el mismo caso."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de aceptación.** La evidencia recibida permite interpretar la operación y mantiene el contexto esperado. Los detalles del ciclo de vida y exportación se validan conforme a la guía del runtime."
                      }
                    ]
                  },
                  {
                    "titulo": "Receiver, processor y exporter",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcional:** recibir, preparar y entregar señales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Técnica:** un pipeline del Collector reúne receivers, processors opcionales y exporters. El orden de los processors importa; cada componente debe soportar la señal del pipeline. La configuración operativa define transformaciones y destinos."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Componente",
                          "Papel técnico",
                          "Revisión de configuración"
                        ],
                        "filas": [
                          [
                            "Receiver",
                            "Obtiene telemetría y la incorpora al pipeline",
                            "Entrada y tipo de señal compatibles"
                          ],
                          [
                            "Processor",
                            "Procesa las señales en la secuencia configurada",
                            "Transformaciones y descartes previstos"
                          ],
                          [
                            "Exporter",
                            "Entrega señales al destino configurado",
                            "Salida y destino correctos"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Conexión del pipeline.** Comprobar qué componentes están asociados a cada pipeline de logs, métricas o trazas. Declarar un componente no demuestra que participe en el recorrido que se está investigando."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Fuente: [Arquitectura del Collector](https://opentelemetry.io/docs/collector/architecture/)."
                      }
                    ]
                  },
                  {
                    "titulo": "Configuración y operación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Funcional:** mantener una ruta de consumo identificable y operable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Técnica:** documentar ambiente, cuenta de destino, configuración efectiva y equipo responsable de cada tramo. El equipo de producto valida su aplicación y coordina con los responsables de OES los problemas del transporte compartido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro mínimo.** Identificar componente, versión, ubicación de ejecución, entradas, salidas y responsable. Registrar referencias a secretos, sin sus valores. Distinguir configuración prevista de configuración efectivamente desplegada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Gestión de cambios.** Revisar dependencias antes de modificar endpoints, procesamiento o identidad. Mantener evidencia de validación y una forma definida de recuperar la configuración anterior cuando el cambio afecte la visibilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Referencia: [Modelo de consumo y cuentas](/docs/observabilidad/gobierno?tema=consumo)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Flujo de telemetría"
              },
              {
                "tipo": "parrafo",
                "texto": "El recorrido se valida con una operación conocida. Una aplicación instrumentada todavía necesita demostrar que su evidencia llega al destino correcto."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Generar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Ejecutar una operación controlada y registrar servicio, ambiente y hora. Confirmar que la integración está inicializada y que la operación está cubierta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Utilizar datos sintéticos y un resultado conocido. Identificar qué señales se esperan y qué campos permitirán encontrarlas; no todas las operaciones necesitan generar todos los tipos de señal."
                      }
                    ]
                  },
                  {
                    "titulo": "Procesar y exportar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar la configuración efectiva de la integración y del Collector. Un filtro o una política de muestreo puede explicar la ausencia de una señal; un proceso iniciado no demuestra una exportación exitosa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar cada tramo por separado: emisión de la aplicación, recepción local, entrega al componente compartido y exportación final. Registrar el último punto con evidencia disponible para acotar el diagnóstico."
                      }
                    ]
                  },
                  {
                    "titulo": "Recibir y consultar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Buscar la evidencia en la cuenta correcta con un intervalo de tiempo acotado. Contrastar aplicación, transporte y destino para localizar dónde se interrumpe el recorrido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Validar también contenido y contexto: una señal puede llegar con identidad incorrecta o información insuficiente. El cierre de la integración requiere demostrar que el equipo puede interpretar el resultado de la operación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Completar la validación](/docs/observabilidad/golden-path?tema=validar)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Contexto y correlación"
              },
              {
                "tipo": "parrafo",
                "texto": "La correlación permite seguir una misma operación entre componentes. La proximidad temporal, por sí sola, no demuestra que dos señales pertenezcan a la misma solicitud."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Propagación de contexto de OpenTelemetry](https://opentelemetry.io/docs/concepts/context-propagation/)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Seguir una operación distribuida",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "El trace ID identifica la traza; cada span representa una operación y tiene su propio identificador. La propagación de contexto permite mantener la relación entre operaciones de distintos servicios."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Comprobar un recorrido que atraviese límites reales del servicio. Identificar los puntos donde la integración debe transmitir y recuperar contexto, y documentar las discontinuidades observadas."
                      }
                    ]
                  },
                  {
                    "titulo": "Vincular logs y trazas",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Cuando la integración incorpora el contexto activo, los logs pueden incluir trace ID y span ID. Validar esta asociación durante una solicitud real y comprobar los límites entre servicios y procesos asíncronos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La presencia de identificadores debe verificarse en los registros recibidos. Un mensaje fuera del contexto de una operación puede no tener esa asociación; no atribuirlo a una traza solo por cercanía temporal."
                      }
                    ]
                  },
                  {
                    "titulo": "Conservar una identidad coherente",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Servicio y ambiente permiten ubicar la evidencia. Mantener las convenciones corporativas y revisar la cardinalidad de las dimensiones antes de introducir atributos nuevos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Distinguir la identidad estable del servicio de los identificadores de ejecución. Revisar que transformaciones o diferencias entre versiones no produzcan nombres contradictorios durante el recorrido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Consultar el estándar de datos](/docs/observabilidad/gobierno?tema=estandares)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Variantes de implementación"
              },
              {
                "tipo": "parrafo",
                "texto": "La arquitectura lógica se adapta al ciclo de vida de cada ejecución. La guía del runtime determina los pasos y las capacidades disponibles."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Servicios de larga duración",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar el orden de inicialización, la compatibilidad de dependencias y el cierre de la instrumentación. Validar una operación que atraviese las dependencias relevantes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Comprobar el arranque y la terminación del proceso con la integración elegida. Incluir despliegues y reinicios en la revisión del comportamiento, además de la operación habitual."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Guías de instrumentación](/docs/observabilidad/golden-path?tema=instrumentar)."
                      }
                    ]
                  },
                  {
                    "titulo": "Kubernetes",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Distinguir la configuración de la aplicación de la habilitación de OES en el entorno. Confirmar el despliegue del cliente, la conectividad y el destino según el cluster y ambiente; no asumir una topología universal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Registrar dónde se ejecuta cada componente y quién mantiene su configuración. Ante una señal ausente, revisar tanto la integración de la aplicación como la ruta de conexión del entorno."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Conectar con OES](/docs/observabilidad/golden-path?tema=oes)."
                      }
                    ]
                  },
                  {
                    "titulo": "AWS Lambda",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Seleccionar la guía que corresponda al empaquetado y a la integración utilizada. Comprobar inicialización y entrega de señales dentro del ciclo de ejecución de la función."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Validar invocaciones exitosas y fallidas con el artefacto desplegado. Revisar las limitaciones descritas por la guía para inicialización y entrega, evitando trasladar automáticamente la configuración de un servicio permanente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Seleccionar la integración](/docs/observabilidad/golden-path?tema=seleccionar)."
                      }
                    ]
                  },
                  {
                    "titulo": "Frontend y eventos de negocio",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "RUM observa la experiencia del navegador y Ægis Events registra hechos de negocio. Se documentan como rutas complementarias con su propia implementación y validación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Identificar productor, destino, credenciales aplicables y tratamiento de datos de cada ruta. La habilitación del backend no demuestra que estas integraciones estén activas o que utilicen los mismos componentes de transporte."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Implementar eventos y RUM](/docs/observabilidad/golden-path?tema=eventos-rum)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Comportamiento ante fallas"
              },
              {
                "tipo": "parrafo",
                "texto": "La entrega de telemetría depende de capacidad, conectividad y configuración. Las siguientes capacidades del Collector deben verificarse en el despliegue; no representan garantías automáticas de OES."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Resiliencia del Collector](https://opentelemetry.io/docs/collector/resiliency/)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Destino temporalmente inaccesible",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Las colas y los reintentos configurados pueden amortiguar una interrupción. Son finitos: al agotarse la capacidad o el plazo de reintento puede perderse telemetría."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar los límites efectivos y observar la recuperación después de una interrupción controlada. Registrar la pérdida o demora detectada y su efecto sobre las investigaciones del servicio."
                      }
                    ]
                  },
                  {
                    "titulo": "Reinicio del Collector",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Una cola en memoria puede perder datos al reiniciarse. La persistencia requiere configuración explícita y almacenamiento disponible; tampoco elimina todos los escenarios de pérdida."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Confirmar qué mecanismo se utiliza en el despliegue y comprobar su comportamiento durante un reinicio planificado. La continuidad debe respaldarse con evidencia del entorno evaluado."
                      }
                    ]
                  },
                  {
                    "titulo": "Señales descartadas",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Distinguir el descarte intencional por políticas de los errores de entrega. Revisar configuración y métricas internas del Collector para explicar diferencias entre lo generado y lo recibido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Relacionar los hallazgos con el período de la prueba y los cambios de configuración. No asumir equivalencia entre conteos de distintos tramos sin revisar el tratamiento aplicado."
                      }
                    ]
                  },
                  {
                    "titulo": "Efecto sobre la aplicación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Como validación de implementación, probar la indisponibilidad del destino y observar latencia, errores y recursos del servicio. Acordar límites de exportación y cierre; no asumir impacto nulo ni entrega completa durante una falla."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Coordinar estas pruebas en un entorno adecuado y con los responsables de la capacidad compartida. Registrar condiciones, observaciones y límites conocidos para que el equipo operativo comprenda el comportamiento esperado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Diagnosticar la ruta](/docs/observabilidad/golden-path?tema=diagnosticar)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Arquitectura de referencia"
              },
              {
                "tipo": "parrafo",
                "texto": "Una operación de negocio deja evidencia en la aplicación. La instrumentación la convierte en señales, OES las transporta y Coralogix permite consultarlas. Selecciona cada etapa para conocer su función."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de la arquitectura.** Separar la generación de evidencia, su transporte y su análisis, manteniendo una responsabilidad identificable en cada tramo. Para implementar este recorrido se necesita conocer tanto la función de los componentes como su configuración efectiva en el ambiente de destino."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Capa",
                  "Componente",
                  "Responsabilidad principal",
                  "Evidencia de integración"
                ],
                "filas": [
                  [
                    "Producto",
                    "Aplicación",
                    "Ejecutar operaciones y definir su significado",
                    "Operación representativa con resultado conocido"
                  ],
                  [
                    "Instrumentación",
                    "Ægis / OpenTelemetry",
                    "Generar señales con identidad y contexto",
                    "Señales correspondientes a la operación"
                  ],
                  [
                    "Captura local",
                    "OES Client",
                    "Recibir y entregar telemetría desde el entorno",
                    "Recepción y exportación verificadas"
                  ],
                  [
                    "Transporte compartido",
                    "OES Core",
                    "Procesar y encaminar hacia el destino",
                    "Pipeline y destino identificados"
                  ],
                  [
                    "Análisis",
                    "Coralogix",
                    "Permitir consulta y uso operativo",
                    "Evidencia localizada en cuenta y ambiente correctos"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Producto: aplicación → Ægis / OpenTelemetry → Plataforma: OES Client → OES Core → Proveedor: Coralogix.**"
              },
              {
                "tipo": "parrafo",
                "texto": "Este esquema representa el recorrido lógico del backend; la topología y los endpoints se confirman por ambiente. Eventos de negocio y RUM tienen integraciones específicas y no deben asumirse como parte de este mismo circuito."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228), [Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Aplicación"
              },
              {
                "tipo": "parrafo",
                "texto": "**Función:** ejecutar la operación del producto y aportar el contexto necesario para investigarla."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entrada y salida:** una solicitud o tarea produce actividad observable. El equipo de producto identifica operaciones relevantes y evita incluir datos sensibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Límite funcional.** Precisar dónde comienza y termina la operación, qué resultado produce y qué dependencias utiliza. La arquitectura de telemetría debe representar ese recorrido sin confundir la recepción de una solicitud con la finalización del resultado de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Configuración a identificar.** Runtime, framework, ambiente, identidad del servicio e integración utilizada. El contexto de negocio corresponde al producto; el transporte no puede reconstruir información que nunca se generó."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación.** Seleccionar una operación de éxito y otra de error y comprobar qué evidencia produce cada una. Registrar las dependencias o etapas que todavía no cuentan con cobertura."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Ægis / OpenTelemetry"
              },
              {
                "tipo": "parrafo",
                "texto": "**Guías del componente · staging:** [JavaScript / TypeScript](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Python](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Java](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN) · [Go — documentación pendiente de validación](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN)."
              },
              {
                "tipo": "parrafo",
                "texto": "**Función:** instrumentar la aplicación mediante la librería corporativa y las capacidades de OpenTelemetry."
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcionamiento:** la actividad instrumentada genera señales con identidad de servicio y ambiente. La integración determina qué se captura automáticamente y qué requiere instrumentación explícita."
              },
              {
                "tipo": "parrafo",
                "texto": "**Relación entre componentes.** OpenTelemetry aporta las capacidades abiertas de instrumentación; Ægis integra su uso en el modelo corporativo. La guía del lenguaje define cómo inicializar y configurar la integración disponible para el servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cobertura.** Revisar llamadas entrantes, dependencias y operaciones propias del producto. Agregar instrumentación explícita cuando exista una necesidad identificada y comprobar que no duplique la captura automática."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación.** Confirmar versión, inicialización, identidad recibida y exportación. Una aplicación que inicia correctamente puede tener una integración incompleta o una operación sin instrumentar."
              },
              {
                "tipo": "parrafo",
                "texto": "[Continuar con la instrumentación](/docs/observabilidad/golden-path?tema=instrumentar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "OES Client"
              },
              {
                "tipo": "parrafo",
                "texto": "**Función:** recibir la telemetría del entorno y conducirla hacia el servicio de observabilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcionamiento:** el agente o Collector utiliza la configuración habilitada para ese ambiente. La dirección de recepción y la conectividad deben verificarse antes de enviar señales."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contrato de conexión.** Identificar señales admitidas, protocolo, dirección de recepción y mecanismo de protección configurados. Los valores concretos se obtienen de la integración habilitada, sin deducirlos del nombre del componente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Límite operativo.** Diferenciar problemas de emisión de la aplicación de problemas de recepción o entrega del cliente. La validación requiere revisar ambos extremos del tramo y coordinar con quienes administran su configuración."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación.** Confirmar que el cliente utilizado corresponde al entorno real y que entrega las señales al siguiente destino previsto. Registrar errores y limitaciones de conectividad sin exponer credenciales."
              },
              {
                "tipo": "parrafo",
                "texto": "[Habilitar la conexión con OES](/docs/observabilidad/golden-path?tema=oes)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "OES Core"
              },
              {
                "tipo": "parrafo",
                "texto": "**Función:** centralizar el procesamiento y encaminamiento del servicio OES."
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcionamiento:** recibe el tráfico de los clientes y aplica el pipeline configurado hacia el destino. No sustituye la instrumentación del código ni la definición de señales de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Configuración compartida.** Identificar los pipelines que atienden al servicio y el tratamiento que aplican a sus señales. Las transformaciones, filtros y destinos deben revisarse sobre la configuración vigente, no asumirse como funciones habilitadas en todos los ambientes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Impacto entre consumidores.** Coordinar cambios de procesamiento y encaminamiento con los responsables de plataforma. Un ajuste compartido puede afectar identidad, volumen o disponibilidad de evidencia de varios productos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación.** Relacionar recepción, procesamiento y exportación con el destino acordado. Revisar el comportamiento de la capacidad común cuando aumente el volumen o falle un destino."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Coralogix"
              },
              {
                "tipo": "parrafo",
                "texto": "**Función:** hacer disponible la evidencia para investigación, visualización y alertas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcionamiento:** la recepción debe verificarse en la cuenta y ambiente correspondientes. Encontrar una señal requiere también permisos y filtros adecuados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Uso funcional.** La integración se completa cuando el equipo puede consultar una operación y utilizar sus evidencias. La disponibilidad de datos no garantiza que un dashboard o alerta esté configurado para el servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitación del problema.** Si no aparece información, revisar cuenta, intervalo, filtros e identidad antes de atribuir la ausencia al transporte. Contrastar el resultado con las evidencias disponibles de emisión y exportación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación.** Confirmar que el equipo autorizado puede localizar la operación de prueba y distinguir su resultado, ambiente y servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "[Consultar y operar](/docs/observabilidad/golden-path?tema=operar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Componentes y responsabilidades"
              },
              {
                "tipo": "parrafo",
                "texto": "La explicación funcional indica para qué existe cada pieza; la explicación técnica muestra cómo participa. Los responsables concretos y los permisos se consultan en [Gobierno](/docs/observabilidad/gobierno?tema=accesos)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Instrumentación y SDK"
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcional:** convertir el comportamiento del servicio en evidencia útil."
              },
              {
                "tipo": "parrafo",
                "texto": "**Técnica:** la instrumentación registra operaciones; el SDK administra las señales antes de exportarlas. El equipo de aplicación integra Ægis, configura la identidad y valida la cobertura del runtime."
              },
              {
                "tipo": "parrafo",
                "texto": "**Responsabilidad de integración.** Mantener documentadas la versión, la configuración relevante y las extensiones locales. Comprobar qué instrumentación existe antes de añadir otra dependencia para resolver el mismo caso."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de aceptación.** La evidencia recibida permite interpretar la operación y mantiene el contexto esperado. Los detalles del ciclo de vida y exportación se validan conforme a la guía del runtime."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Receiver, processor y exporter"
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcional:** recibir, preparar y entregar señales."
              },
              {
                "tipo": "parrafo",
                "texto": "**Técnica:** un pipeline del Collector reúne receivers, processors opcionales y exporters. El orden de los processors importa; cada componente debe soportar la señal del pipeline. La configuración operativa define transformaciones y destinos."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Componente",
                  "Papel técnico",
                  "Revisión de configuración"
                ],
                "filas": [
                  [
                    "Receiver",
                    "Obtiene telemetría y la incorpora al pipeline",
                    "Entrada y tipo de señal compatibles"
                  ],
                  [
                    "Processor",
                    "Procesa las señales en la secuencia configurada",
                    "Transformaciones y descartes previstos"
                  ],
                  [
                    "Exporter",
                    "Entrega señales al destino configurado",
                    "Salida y destino correctos"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Conexión del pipeline.** Comprobar qué componentes están asociados a cada pipeline de logs, métricas o trazas. Declarar un componente no demuestra que participe en el recorrido que se está investigando."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Arquitectura del Collector](https://opentelemetry.io/docs/collector/architecture/)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Configuración y operación"
              },
              {
                "tipo": "parrafo",
                "texto": "**Funcional:** mantener una ruta de consumo identificable y operable."
              },
              {
                "tipo": "parrafo",
                "texto": "**Técnica:** documentar ambiente, cuenta de destino, configuración efectiva y equipo responsable de cada tramo. El equipo de producto valida su aplicación y coordina con los responsables de OES los problemas del transporte compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro mínimo.** Identificar componente, versión, ubicación de ejecución, entradas, salidas y responsable. Registrar referencias a secretos, sin sus valores. Distinguir configuración prevista de configuración efectivamente desplegada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Gestión de cambios.** Revisar dependencias antes de modificar endpoints, procesamiento o identidad. Mantener evidencia de validación y una forma definida de recuperar la configuración anterior cuando el cambio afecte la visibilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "Referencia: [Modelo de consumo y cuentas](/docs/observabilidad/gobierno?tema=consumo)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Flujo de telemetría"
              },
              {
                "tipo": "parrafo",
                "texto": "El recorrido se valida con una operación conocida. Una aplicación instrumentada todavía necesita demostrar que su evidencia llega al destino correcto."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Generar"
              },
              {
                "tipo": "parrafo",
                "texto": "Ejecutar una operación controlada y registrar servicio, ambiente y hora. Confirmar que la integración está inicializada y que la operación está cubierta."
              },
              {
                "tipo": "parrafo",
                "texto": "Utilizar datos sintéticos y un resultado conocido. Identificar qué señales se esperan y qué campos permitirán encontrarlas; no todas las operaciones necesitan generar todos los tipos de señal."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Procesar y exportar"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar la configuración efectiva de la integración y del Collector. Un filtro o una política de muestreo puede explicar la ausencia de una señal; un proceso iniciado no demuestra una exportación exitosa."
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar cada tramo por separado: emisión de la aplicación, recepción local, entrega al componente compartido y exportación final. Registrar el último punto con evidencia disponible para acotar el diagnóstico."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Recibir y consultar"
              },
              {
                "tipo": "parrafo",
                "texto": "Buscar la evidencia en la cuenta correcta con un intervalo de tiempo acotado. Contrastar aplicación, transporte y destino para localizar dónde se interrumpe el recorrido."
              },
              {
                "tipo": "parrafo",
                "texto": "Validar también contenido y contexto: una señal puede llegar con identidad incorrecta o información insuficiente. El cierre de la integración requiere demostrar que el equipo puede interpretar el resultado de la operación."
              },
              {
                "tipo": "parrafo",
                "texto": "[Completar la validación](/docs/observabilidad/golden-path?tema=validar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Contexto y correlación"
              },
              {
                "tipo": "parrafo",
                "texto": "La correlación permite seguir una misma operación entre componentes. La proximidad temporal, por sí sola, no demuestra que dos señales pertenezcan a la misma solicitud."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Propagación de contexto de OpenTelemetry](https://opentelemetry.io/docs/concepts/context-propagation/)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Seguir una operación distribuida"
              },
              {
                "tipo": "parrafo",
                "texto": "El trace ID identifica la traza; cada span representa una operación y tiene su propio identificador. La propagación de contexto permite mantener la relación entre operaciones de distintos servicios."
              },
              {
                "tipo": "parrafo",
                "texto": "Comprobar un recorrido que atraviese límites reales del servicio. Identificar los puntos donde la integración debe transmitir y recuperar contexto, y documentar las discontinuidades observadas."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Vincular logs y trazas"
              },
              {
                "tipo": "parrafo",
                "texto": "Cuando la integración incorpora el contexto activo, los logs pueden incluir trace ID y span ID. Validar esta asociación durante una solicitud real y comprobar los límites entre servicios y procesos asíncronos."
              },
              {
                "tipo": "parrafo",
                "texto": "La presencia de identificadores debe verificarse en los registros recibidos. Un mensaje fuera del contexto de una operación puede no tener esa asociación; no atribuirlo a una traza solo por cercanía temporal."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Conservar una identidad coherente"
              },
              {
                "tipo": "parrafo",
                "texto": "Servicio y ambiente permiten ubicar la evidencia. Mantener las convenciones corporativas y revisar la cardinalidad de las dimensiones antes de introducir atributos nuevos."
              },
              {
                "tipo": "parrafo",
                "texto": "Distinguir la identidad estable del servicio de los identificadores de ejecución. Revisar que transformaciones o diferencias entre versiones no produzcan nombres contradictorios durante el recorrido."
              },
              {
                "tipo": "parrafo",
                "texto": "[Consultar el estándar de datos](/docs/observabilidad/gobierno?tema=estandares)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Variantes de implementación"
              },
              {
                "tipo": "parrafo",
                "texto": "La arquitectura lógica se adapta al ciclo de vida de cada ejecución. La guía del runtime determina los pasos y las capacidades disponibles."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Servicios de larga duración"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar el orden de inicialización, la compatibilidad de dependencias y el cierre de la instrumentación. Validar una operación que atraviese las dependencias relevantes."
              },
              {
                "tipo": "parrafo",
                "texto": "Comprobar el arranque y la terminación del proceso con la integración elegida. Incluir despliegues y reinicios en la revisión del comportamiento, además de la operación habitual."
              },
              {
                "tipo": "parrafo",
                "texto": "[Guías de instrumentación](/docs/observabilidad/golden-path?tema=instrumentar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Kubernetes"
              },
              {
                "tipo": "parrafo",
                "texto": "Distinguir la configuración de la aplicación de la habilitación de OES en el entorno. Confirmar el despliegue del cliente, la conectividad y el destino según el cluster y ambiente; no asumir una topología universal."
              },
              {
                "tipo": "parrafo",
                "texto": "Registrar dónde se ejecuta cada componente y quién mantiene su configuración. Ante una señal ausente, revisar tanto la integración de la aplicación como la ruta de conexión del entorno."
              },
              {
                "tipo": "parrafo",
                "texto": "[Conectar con OES](/docs/observabilidad/golden-path?tema=oes)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "AWS Lambda"
              },
              {
                "tipo": "parrafo",
                "texto": "Seleccionar la guía que corresponda al empaquetado y a la integración utilizada. Comprobar inicialización y entrega de señales dentro del ciclo de ejecución de la función."
              },
              {
                "tipo": "parrafo",
                "texto": "Validar invocaciones exitosas y fallidas con el artefacto desplegado. Revisar las limitaciones descritas por la guía para inicialización y entrega, evitando trasladar automáticamente la configuración de un servicio permanente."
              },
              {
                "tipo": "parrafo",
                "texto": "[Seleccionar la integración](/docs/observabilidad/golden-path?tema=seleccionar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Frontend y eventos de negocio"
              },
              {
                "tipo": "parrafo",
                "texto": "RUM observa la experiencia del navegador y Ægis Events registra hechos de negocio. Se documentan como rutas complementarias con su propia implementación y validación."
              },
              {
                "tipo": "parrafo",
                "texto": "Identificar productor, destino, credenciales aplicables y tratamiento de datos de cada ruta. La habilitación del backend no demuestra que estas integraciones estén activas o que utilicen los mismos componentes de transporte."
              },
              {
                "tipo": "parrafo",
                "texto": "[Implementar eventos y RUM](/docs/observabilidad/golden-path?tema=eventos-rum)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Comportamiento ante fallas"
              },
              {
                "tipo": "parrafo",
                "texto": "La entrega de telemetría depende de capacidad, conectividad y configuración. Las siguientes capacidades del Collector deben verificarse en el despliegue; no representan garantías automáticas de OES."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Resiliencia del Collector](https://opentelemetry.io/docs/collector/resiliency/)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Destino temporalmente inaccesible"
              },
              {
                "tipo": "parrafo",
                "texto": "Las colas y los reintentos configurados pueden amortiguar una interrupción. Son finitos: al agotarse la capacidad o el plazo de reintento puede perderse telemetría."
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar los límites efectivos y observar la recuperación después de una interrupción controlada. Registrar la pérdida o demora detectada y su efecto sobre las investigaciones del servicio."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Reinicio del Collector"
              },
              {
                "tipo": "parrafo",
                "texto": "Una cola en memoria puede perder datos al reiniciarse. La persistencia requiere configuración explícita y almacenamiento disponible; tampoco elimina todos los escenarios de pérdida."
              },
              {
                "tipo": "parrafo",
                "texto": "Confirmar qué mecanismo se utiliza en el despliegue y comprobar su comportamiento durante un reinicio planificado. La continuidad debe respaldarse con evidencia del entorno evaluado."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Señales descartadas"
              },
              {
                "tipo": "parrafo",
                "texto": "Distinguir el descarte intencional por políticas de los errores de entrega. Revisar configuración y métricas internas del Collector para explicar diferencias entre lo generado y lo recibido."
              },
              {
                "tipo": "parrafo",
                "texto": "Relacionar los hallazgos con el período de la prueba y los cambios de configuración. No asumir equivalencia entre conteos de distintos tramos sin revisar el tratamiento aplicado."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Efecto sobre la aplicación"
              },
              {
                "tipo": "parrafo",
                "texto": "Como validación de implementación, probar la indisponibilidad del destino y observar latencia, errores y recursos del servicio. Acordar límites de exportación y cierre; no asumir impacto nulo ni entrega completa durante una falla."
              },
              {
                "tipo": "parrafo",
                "texto": "Coordinar estas pruebas en un entorno adecuado y con los responsables de la capacidad compartida. Registrar condiciones, observaciones y límites conocidos para que el equipo operativo comprenda el comportamiento esperado."
              },
              {
                "tipo": "parrafo",
                "texto": "[Diagnosticar la ruta](/docs/observabilidad/golden-path?tema=diagnosticar)."
              }
            ],
            "fuentes": [
              {
                "titulo": "OES",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228"
              },
              {
                "titulo": "Ægis",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970"
              },
              {
                "titulo": "Arquitectura del Collector",
                "url": "https://opentelemetry.io/docs/collector/architecture/"
              },
              {
                "titulo": "Propagación de contexto de OpenTelemetry",
                "url": "https://opentelemetry.io/docs/concepts/context-propagation/"
              },
              {
                "titulo": "Resiliencia del Collector",
                "url": "https://opentelemetry.io/docs/collector/resiliency/"
              }
            ]
          },
          {
            "id": "seleccionar",
            "titulo": "Seleccionar la integración",
            "bajada": "Identificar el entorno y la ruta de implementación.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Seleccionar la integración"
              },
              {
                "tipo": "parrafo",
                "texto": "**La ruta de implementación depende del entorno que ejecuta el servicio.** Identificar lenguaje, framework, ambiente y tipo de artefacto permite seleccionar la guía correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "La selección debe realizarse sobre el artefacto que se despliega y su forma de ejecución. Un mismo lenguaje puede requerir una integración diferente en un proceso permanente, una función Lambda o un componente de frontend."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Información necesaria",
                  "Qué permite decidir"
                ],
                "filas": [
                  [
                    "Lenguaje, runtime y versión",
                    "Qué guía e integración deben revisarse"
                  ],
                  [
                    "Framework y dependencias relevantes",
                    "Qué cobertura automática se necesita comprobar"
                  ],
                  [
                    "Forma de ejecución",
                    "Cómo abordar inicialización y entrega de señales"
                  ],
                  [
                    "Empaquetado",
                    "Si el build modifica la carga de dependencias"
                  ],
                  [
                    "Ambiente y destino",
                    "Dónde validar conectividad, identidad y recepción"
                  ],
                  [
                    "Necesidad de observación",
                    "Si corresponde backend, RUM, eventos o varias rutas complementarias"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado de la selección.** Registrar la guía elegida, su versión cuando esté disponible, el entorno al que aplica y los puntos pendientes de confirmación. La selección de una ruta no demuestra compatibilidad: esta se confirma durante la implementación y validación."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Servicios backend",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Continuar con [Instrumentar con Ægis](/docs/observabilidad/golden-path?tema=instrumentar) para consultar las rutas de JavaScript / TypeScript, NestJS, Java, Python y Go. La guía debe corresponder al runtime utilizado; la documentación técnica de Go mantiene el estado pendiente de validación registrado en ese apartado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Identificar la ejecución real.** Confirmar versión del runtime, framework y comando de inicio del servicio desplegado. Revisar si el artefacto ejecutado difiere del utilizado durante el desarrollo local."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Revisar la instrumentación existente.** Identificar librerías, agentes e integraciones de logging ya presentes. Antes de agregar Ægis, determinar qué funciones cubre cada componente y qué configuración debe coordinarse para evitar duplicación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Seleccionar la guía del lenguaje.** Comprobar requisitos de instalación, inicialización y configuración en la documentación correspondiente. No trasladar nombres de paquetes, opciones o métodos entre lenguajes por similitud."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Ruta",
                          "Aspectos que deben confirmarse"
                        ],
                        "filas": [
                          [
                            "JavaScript / TypeScript y NestJS",
                            "Runtime, carga de módulos, framework e integración de logging"
                          ],
                          [
                            "Java",
                            "JDK, mecanismo de dependencias y forma de integración documentada"
                          ],
                          [
                            "Python",
                            "Runtime, framework y configuración de la instrumentación por proceso"
                          ],
                          [
                            "Go",
                            "Versión y capacidades con el mantenedor, debido al estado documental pendiente"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Preparar la validación.** Elegir una operación representativa con sus dependencias y resultado esperado. Identificar las señales necesarias para investigarla y el destino donde deben consultarse."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de salida.** El equipo dispone de una guía aplicable, conoce la integración existente y tiene un caso de prueba definido. Si la compatibilidad no está documentada, registrar la consulta al mantenedor antes de adoptar una configuración por analogía."
                      }
                    ]
                  },
                  {
                    "titulo": "Funciones Lambda",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Distinguir artefactos con y sin bundler antes de aplicar la integración de Ægis. Revisar inicialización, Layer y exportación según la guía del entorno."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Revisar el artefacto desplegado.** Confirmar runtime, arquitectura, handler y forma de empaquetado. La selección debe reflejar cómo se construye y ejecuta la función, no solo la estructura del repositorio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Elegir la variante documentada.** La documentación disponible distingue integración como paquete y una variante con Layer para determinados casos con bundler. Su aplicabilidad debe comprobarse en la guía del lenguaje; no constituye una receta universal para todas las funciones."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Variante",
                          "Referencia",
                          "Verificación previa"
                        ],
                        "filas": [
                          [
                            "Sin bundler",
                            "[Ægis como paquete](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1080557681)",
                            "Dependencias incluidas y forma de inicialización"
                          ],
                          [
                            "Con bundler",
                            "[Integración con bundler](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1183776821)",
                            "Efecto del empaquetado y mecanismo de carga documentado"
                          ],
                          [
                            "Integración mediante Layer, cuando corresponda",
                            "[Catálogo de Layers](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1366065164)",
                            "Compatibilidad con runtime, arquitectura y ambiente"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Comprobar el ciclo de ejecución.** Revisar cómo la guía resuelve inicialización y entrega de telemetría dentro de la invocación. Los valores de ejemplo, identificadores de Layer y configuraciones deben confirmarse para el entorno de destino."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Diferenciar las evidencias.** Las métricas de infraestructura de la función y la instrumentación de sus operaciones cumplen propósitos distintos. La presencia de una no acredita la cobertura de la otra."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de salida.** Existe una variante de integración identificada para el artefacto real y una invocación de prueba que permitirá verificar tanto el resultado funcional como las señales esperadas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Consultar las variantes por lenguaje](/docs/observabilidad/golden-path?tema=instrumentar)."
                      }
                    ]
                  },
                  {
                    "titulo": "Experiencia y eventos",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Consultar [Implementar eventos y RUM](/docs/observabilidad/golden-path?tema=eventos-rum) para frontend y hechos de negocio. Estas capacidades tienen recorridos propios."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**RUM: experiencia del usuario.** Seleccionar esta ruta cuando se necesita observar el comportamiento de la aplicación en el navegador. Confirmar framework, proceso de build, configuración aplicable y datos que se capturarán conforme a la guía."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Ægis Events: hechos de negocio.** Seleccionar esta ruta cuando se necesita registrar un hecho con significado funcional definido. Identificar productor, estructura y momento de emisión, diferenciando una solicitud recibida de un resultado confirmado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Uso complementario.** Un producto puede necesitar backend, RUM y eventos. En ese caso, registrar cada integración y su criterio de validación por separado. Compartir producto o ambiente no demuestra que utilicen el mismo transporte, destino o credencial."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Necesidad",
                          "Ruta a revisar",
                          "Evidencia esperada"
                        ],
                        "filas": [
                          [
                            "Investigar una operación del servidor",
                            "Ægis para backend o Lambda",
                            "Señales que describen la ejecución y sus dependencias"
                          ],
                          [
                            "Comprender una interacción en el navegador",
                            "RUM",
                            "Interacción o error de prueba disponible para consulta"
                          ],
                          [
                            "Verificar un hecho significativo del negocio",
                            "Ægis Events",
                            "Evento que representa el hecho acordado y puede localizarse en su destino"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Tratamiento de datos.** Confirmar campos capturados y propósito de las credenciales. La clave pública específica de RUM no sustituye una credencial privada de backend; los ejemplos de una ruta no deben reutilizarse automáticamente en otra."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de salida.** Cada necesidad tiene una integración identificada, un responsable y una prueba que permite verificar su aporte al producto."
                      }
                    ]
                  },
                  {
                    "titulo": "Confirmar la ruta antes de implementar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro de selección.** Dejar identificados servicio, ambiente, runtime, empaquetado, guía aplicable, señales previstas y responsable técnico. Registrar incompatibilidades o dudas que puedan condicionar la implementación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Destino y acceso.** Confirmar la cuenta y la ruta de transporte habilitada, así como el acceso necesario para consultar las evidencias. La selección del SDK no resuelve por sí sola la conectividad ni los permisos del destino."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Casos no cubiertos.** Consultar con los responsables del estándar cuando no exista una guía aplicable o su contenido esté pendiente de validación. Evaluar una extensión o excepción mediante el proceso de gobierno si la solución propuesta altera el modelo compartido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente paso.** Aplicar la guía seleccionada y validar sobre el artefacto y entorno reales. Mantener evidencia de una operación de éxito y otra de error, según las señales requeridas para el servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Instrumentar con Ægis](/docs/observabilidad/golden-path?tema=instrumentar) · [Conectar con OES](/docs/observabilidad/golden-path?tema=oes) · [Validar la integración](/docs/observabilidad/golden-path?tema=validar) · [Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Seleccionar la integración"
              },
              {
                "tipo": "parrafo",
                "texto": "**La ruta de implementación depende del entorno que ejecuta el servicio.** Identificar lenguaje, framework, ambiente y tipo de artefacto permite seleccionar la guía correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "La selección debe realizarse sobre el artefacto que se despliega y su forma de ejecución. Un mismo lenguaje puede requerir una integración diferente en un proceso permanente, una función Lambda o un componente de frontend."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Información necesaria",
                  "Qué permite decidir"
                ],
                "filas": [
                  [
                    "Lenguaje, runtime y versión",
                    "Qué guía e integración deben revisarse"
                  ],
                  [
                    "Framework y dependencias relevantes",
                    "Qué cobertura automática se necesita comprobar"
                  ],
                  [
                    "Forma de ejecución",
                    "Cómo abordar inicialización y entrega de señales"
                  ],
                  [
                    "Empaquetado",
                    "Si el build modifica la carga de dependencias"
                  ],
                  [
                    "Ambiente y destino",
                    "Dónde validar conectividad, identidad y recepción"
                  ],
                  [
                    "Necesidad de observación",
                    "Si corresponde backend, RUM, eventos o varias rutas complementarias"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado de la selección.** Registrar la guía elegida, su versión cuando esté disponible, el entorno al que aplica y los puntos pendientes de confirmación. La selección de una ruta no demuestra compatibilidad: esta se confirma durante la implementación y validación."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Servicios backend"
              },
              {
                "tipo": "parrafo",
                "texto": "Continuar con [Instrumentar con Ægis](/docs/observabilidad/golden-path?tema=instrumentar) para consultar las rutas de JavaScript / TypeScript, NestJS, Java, Python y Go. La guía debe corresponder al runtime utilizado; la documentación técnica de Go mantiene el estado pendiente de validación registrado en ese apartado."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Identificar la ejecución real.** Confirmar versión del runtime, framework y comando de inicio del servicio desplegado. Revisar si el artefacto ejecutado difiere del utilizado durante el desarrollo local."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Revisar la instrumentación existente.** Identificar librerías, agentes e integraciones de logging ya presentes. Antes de agregar Ægis, determinar qué funciones cubre cada componente y qué configuración debe coordinarse para evitar duplicación."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Seleccionar la guía del lenguaje.** Comprobar requisitos de instalación, inicialización y configuración en la documentación correspondiente. No trasladar nombres de paquetes, opciones o métodos entre lenguajes por similitud."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Ruta",
                  "Aspectos que deben confirmarse"
                ],
                "filas": [
                  [
                    "JavaScript / TypeScript y NestJS",
                    "Runtime, carga de módulos, framework e integración de logging"
                  ],
                  [
                    "Java",
                    "JDK, mecanismo de dependencias y forma de integración documentada"
                  ],
                  [
                    "Python",
                    "Runtime, framework y configuración de la instrumentación por proceso"
                  ],
                  [
                    "Go",
                    "Versión y capacidades con el mantenedor, debido al estado documental pendiente"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Preparar la validación.** Elegir una operación representativa con sus dependencias y resultado esperado. Identificar las señales necesarias para investigarla y el destino donde deben consultarse."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de salida.** El equipo dispone de una guía aplicable, conoce la integración existente y tiene un caso de prueba definido. Si la compatibilidad no está documentada, registrar la consulta al mantenedor antes de adoptar una configuración por analogía."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Funciones Lambda"
              },
              {
                "tipo": "parrafo",
                "texto": "Distinguir artefactos con y sin bundler antes de aplicar la integración de Ægis. Revisar inicialización, Layer y exportación según la guía del entorno."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Revisar el artefacto desplegado.** Confirmar runtime, arquitectura, handler y forma de empaquetado. La selección debe reflejar cómo se construye y ejecuta la función, no solo la estructura del repositorio."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Elegir la variante documentada.** La documentación disponible distingue integración como paquete y una variante con Layer para determinados casos con bundler. Su aplicabilidad debe comprobarse en la guía del lenguaje; no constituye una receta universal para todas las funciones."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Variante",
                  "Referencia",
                  "Verificación previa"
                ],
                "filas": [
                  [
                    "Sin bundler",
                    "[Ægis como paquete](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1080557681)",
                    "Dependencias incluidas y forma de inicialización"
                  ],
                  [
                    "Con bundler",
                    "[Integración con bundler](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1183776821)",
                    "Efecto del empaquetado y mecanismo de carga documentado"
                  ],
                  [
                    "Integración mediante Layer, cuando corresponda",
                    "[Catálogo de Layers](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1366065164)",
                    "Compatibilidad con runtime, arquitectura y ambiente"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Comprobar el ciclo de ejecución.** Revisar cómo la guía resuelve inicialización y entrega de telemetría dentro de la invocación. Los valores de ejemplo, identificadores de Layer y configuraciones deben confirmarse para el entorno de destino."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Diferenciar las evidencias.** Las métricas de infraestructura de la función y la instrumentación de sus operaciones cumplen propósitos distintos. La presencia de una no acredita la cobertura de la otra."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de salida.** Existe una variante de integración identificada para el artefacto real y una invocación de prueba que permitirá verificar tanto el resultado funcional como las señales esperadas."
              },
              {
                "tipo": "parrafo",
                "texto": "[Consultar las variantes por lenguaje](/docs/observabilidad/golden-path?tema=instrumentar)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Experiencia y eventos"
              },
              {
                "tipo": "parrafo",
                "texto": "Consultar [Implementar eventos y RUM](/docs/observabilidad/golden-path?tema=eventos-rum) para frontend y hechos de negocio. Estas capacidades tienen recorridos propios."
              },
              {
                "tipo": "parrafo",
                "texto": "**RUM: experiencia del usuario.** Seleccionar esta ruta cuando se necesita observar el comportamiento de la aplicación en el navegador. Confirmar framework, proceso de build, configuración aplicable y datos que se capturarán conforme a la guía."
              },
              {
                "tipo": "parrafo",
                "texto": "**Ægis Events: hechos de negocio.** Seleccionar esta ruta cuando se necesita registrar un hecho con significado funcional definido. Identificar productor, estructura y momento de emisión, diferenciando una solicitud recibida de un resultado confirmado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Uso complementario.** Un producto puede necesitar backend, RUM y eventos. En ese caso, registrar cada integración y su criterio de validación por separado. Compartir producto o ambiente no demuestra que utilicen el mismo transporte, destino o credencial."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Necesidad",
                  "Ruta a revisar",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Investigar una operación del servidor",
                    "Ægis para backend o Lambda",
                    "Señales que describen la ejecución y sus dependencias"
                  ],
                  [
                    "Comprender una interacción en el navegador",
                    "RUM",
                    "Interacción o error de prueba disponible para consulta"
                  ],
                  [
                    "Verificar un hecho significativo del negocio",
                    "Ægis Events",
                    "Evento que representa el hecho acordado y puede localizarse en su destino"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Tratamiento de datos.** Confirmar campos capturados y propósito de las credenciales. La clave pública específica de RUM no sustituye una credencial privada de backend; los ejemplos de una ruta no deben reutilizarse automáticamente en otra."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de salida.** Cada necesidad tiene una integración identificada, un responsable y una prueba que permite verificar su aporte al producto."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Confirmar la ruta antes de implementar"
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro de selección.** Dejar identificados servicio, ambiente, runtime, empaquetado, guía aplicable, señales previstas y responsable técnico. Registrar incompatibilidades o dudas que puedan condicionar la implementación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Destino y acceso.** Confirmar la cuenta y la ruta de transporte habilitada, así como el acceso necesario para consultar las evidencias. La selección del SDK no resuelve por sí sola la conectividad ni los permisos del destino."
              },
              {
                "tipo": "parrafo",
                "texto": "**Casos no cubiertos.** Consultar con los responsables del estándar cuando no exista una guía aplicable o su contenido esté pendiente de validación. Evaluar una extensión o excepción mediante el proceso de gobierno si la solución propuesta altera el modelo compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente paso.** Aplicar la guía seleccionada y validar sobre el artefacto y entorno reales. Mantener evidencia de una operación de éxito y otra de error, según las señales requeridas para el servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "[Instrumentar con Ægis](/docs/observabilidad/golden-path?tema=instrumentar) · [Conectar con OES](/docs/observabilidad/golden-path?tema=oes) · [Validar la integración](/docs/observabilidad/golden-path?tema=validar) · [Decisiones y excepciones](/docs/observabilidad/gobierno?tema=decisiones)."
              }
            ],
            "fuentes": []
          },
          {
            "id": "instrumentar",
            "titulo": "Instrumentar con Ægis",
            "bajada": "Guías por lenguaje, runtime y artefacto.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Elegir la puerta de entrada"
              },
              {
                "tipo": "parrafo",
                "texto": "**Guías técnicas de Ægis · staging.** Selecciona un lenguaje para abrir la guía de la librería o su integración Lambda. Se conservan las referencias complementarias de Confluence."
              },
              {
                "tipo": "parrafo",
                "texto": "**El equipo sabe qué quiere observar y bajo qué reglas. Ahora debe instrumentar.** Selecciona la ruta que corresponde a tu aplicación. Confirma runtime, versión, arquitectura, ambiente y forma de empaquetado en la guía original antes de aplicar sus ejemplos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de implementación.** Incorporar la integración correspondiente al artefacto desplegado y demostrar que las operaciones relevantes producen evidencia útil. La instalación de una dependencia es solo una parte del trabajo: también deben verificarse inicialización, identidad, cobertura y entrega."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Etapa",
                  "Acción",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Preparar",
                    "Identificar runtime, dependencias e instrumentación existente",
                    "Guía aplicable y versión seleccionada"
                  ],
                  [
                    "Integrar",
                    "Aplicar instalación e inicialización documentadas",
                    "Artefacto que inicia con la integración prevista"
                  ],
                  [
                    "Configurar",
                    "Definir identidad, ambiente y destino habilitado",
                    "Configuración identificable sin secretos expuestos"
                  ],
                  [
                    "Completar cobertura",
                    "Revisar operaciones y atributos propios del producto",
                    "Señales con significado funcional definido"
                  ],
                  [
                    "Validar",
                    "Ejecutar casos representativos de éxito y error",
                    "Evidencia consultable en el destino acordado"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los pasos siguientes organizan la implementación y su revisión. Los comandos, nombres de paquetes, métodos y valores de configuración se toman de la guía vigente del lenguaje; no se presupone equivalencia entre sus APIs."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [FAQ de Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083), [ejemplos de código](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1016430616)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Node.js / TypeScript / NestJS",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Guía Lambda](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_LAMBDA)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Usar Ægis, inicializar una sola instancia y cargar la instrumentación en el momento que requiere el framework. Revisar dependencias de logging y autoinstrumentación para evitar duplicación. Los tokens de paquetes deben gestionarse fuera del repositorio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar.** Identificar versión de Node.js, framework, comando de inicio y forma de construcción del artefacto. Inventariar agentes, librerías de telemetría e integraciones de logging existentes antes de agregar nuevas dependencias."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Integrar.** Aplicar el mecanismo de instalación y carga descrito en la guía. En NestJS, comprobar el punto de inicialización indicado para el framework y revisar que módulos o proveedores no vuelvan a inicializar la misma integración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Configurar.** Definir identidad del servicio, ambiente y destino autorizado utilizando las opciones documentadas. Comprobar la configuración del proceso desplegado; una ejecución local correcta no confirma la configuración del contenedor o servicio final."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Completar cobertura.** Revisar qué operaciones y dependencias quedan instrumentadas automáticamente. Añadir contexto de negocio solo cuando responda a una necesidad concreta, evitando señales duplicadas y campos sensibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validar.** Probar una operación que invoque una dependencia y un caso de error. Revisar identidad, asociación de evidencias y duplicación de mensajes o spans. Registrar las limitaciones observadas del framework o las dependencias utilizadas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** una operación emite logs, métricas y spans con identidad y contexto correctos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[JavaScript / TypeScript](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1126793219) · [NestJS](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993394689)."
                      }
                    ]
                  },
                  {
                    "titulo": "Java",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Consumir Ægis desde el mecanismo de paquetes documentado y verificar compatibilidad de JDK y versión. Integrar logging, trazas y métricas siguiendo los ejemplos de la guía."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar.** Registrar JDK, framework, herramienta de construcción y forma de arranque. Revisar agentes y librerías existentes para identificar posibles solapamientos con la integración elegida."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Integrar.** Utilizar las dependencias y el mecanismo de inicialización publicados para Java. Confirmar que el artefacto generado contiene la configuración necesaria y que el entorno de ejecución corresponde al evaluado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Configurar y ampliar.** Aplicar identidad y destino según la guía. Definir indicadores y operaciones propias del producto sin asumir que la cobertura automática describe por completo sus resultados de negocio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validar.** Ejecutar el artefacto construido y comprobar una operación exitosa, una fallida y las dependencias relevantes. Verificar que los logs y trazas mantienen el contexto esperado y que las métricas utilizan unidades y significado consistentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro de implementación.** Conservar versiones, configuración relevante y evidencia de pruebas sin incluir credenciales. Esta información permite evaluar futuras actualizaciones y solicitar soporte con un alcance concreto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** una operación de la aplicación aparece correlacionada y las métricas representan el comportamiento esperado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Instrumentación Java](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1124761696)."
                      }
                    ]
                  },
                  {
                    "titulo": "Python",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Guía Lambda](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_LAMBDA)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Configurar Ægis una sola vez por proceso. Utilizar logging estructurado, métricas y spans con cierre de contexto; verificar runtime y versión en la guía y el repositorio correspondiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar.** Identificar versión de Python, framework y forma de ejecución, incluidos los procesos o workers utilizados por el servicio. Revisar instrumentación y configuración de logging preexistentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Integrar.** Aplicar la inicialización documentada en el punto correspondiente al ciclo de vida del proceso. Comprobar que importaciones o arranques repetidos no produzcan inicializaciones adicionales no previstas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Completar cobertura.** Identificar operaciones del producto que requieren instrumentación explícita. Revisar propagación de contexto en las rutas utilizadas, incluidas tareas asíncronas cuando formen parte del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validar.** Probar el comando y modelo de ejecución reales, no únicamente un script aislado. Confirmar identidad, asociación de logs con la operación y entrega de señales tanto ante éxito como ante excepciones."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado de revisión.** Documentar qué recorridos se comprobaron y qué límites permanecen en la integración del framework o de sus dependencias."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** contexto de traza en los logs y exportación de una operación de prueba."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Instrumentación Python](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1488617675)."
                      }
                    ]
                  },
                  {
                    "titulo": "Go",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN) · [Guía Lambda](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_LAMBDA)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "Go forma parte de los lenguajes publicados en el menú de Ægis. Seleccionar la integración correspondiente al entorno de ejecución y confirmar la versión, la configuración y las capacidades disponibles con el equipo mantenedor."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Estado de la documentación:** la guía de la librería muestra HTML del portal en lugar del contenido técnico durante la revisión. La guía Lambda está publicada en el menú y su contenido queda pendiente de validación. Estos enlaces se mantienen como referencia, sin instrucciones de instalación verificadas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparación del caso.** Registrar versión de Go, tipo de servicio, forma de empaquetado, dependencias relevantes y señales necesarias. Esta información permite solicitar una integración aplicable al mantenedor del estándar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Confirmaciones necesarias.** Obtener la referencia verificable del módulo, versión compatible, inicialización, configuración y mecanismo de entrega. Confirmar por separado la aplicabilidad a un servicio permanente o a Lambda."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Criterio de implementación.** No trasladar métodos o configuración de las guías de otros lenguajes a Go. Si se requiere una alternativa mientras se completa la documentación, evaluar su alcance mediante el proceso de extensiones y excepciones."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación prevista.** Una vez confirmada la integración, ejecutar casos representativos y registrar las señales efectivamente soportadas y recibidas. La lista de evidencias debe corresponder a esas capacidades confirmadas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** una operación de prueba produce las señales esperadas en el ambiente de destino, según las capacidades confirmadas para la integración Go."
                      }
                    ]
                  },
                  {
                    "titulo": "AWS Lambda sin bundler",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Seguir la guía de Ægis como paquete, distinguir instrumentación de aplicación y métricas de infraestructura AWS. Verificar inicialización y cierre o flush dentro del presupuesto de ejecución."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar el artefacto.** Confirmar que esta variante corresponde al empaquetado real y al lenguaje utilizado. Identificar runtime, arquitectura, handler y dependencias incluidas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Aplicar la integración.** Seguir el mecanismo documentado para cargar la librería y completar la entrega de señales. Mantener diferenciada la configuración de aplicación de la configuración de infraestructura."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Probar en el entorno.** Ejecutar invocaciones representativas sobre el artefacto desplegado, con éxito y error. Revisar el resultado funcional y localizar la telemetría en el destino correspondiente dentro del período de prueba."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registrar límites.** Documentar observaciones sobre inicialización, tiempo de ejecución y entrega. Una invocación exitosa no demuestra por sí sola que todas las señales se hayan exportado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** invocación funcional y telemetría exportada, incluidos los casos de error. No asumir que ver métricas de CloudWatch implica tener trazas de negocio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Ægis como paquete](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1080557681) · [Modelo de Lambda](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1158709269)."
                      }
                    ]
                  },
                  {
                    "titulo": "AWS Lambda con bundler",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Webpack y esbuild pueden cambiar la resolución de módulos. La guía describe una solución con Layer y precarga de Ægis, junto con el cierre de exportación. Confirmar la Layer correspondiente a runtime, arquitectura y ambiente; no copiar un ARN o una versión de ejemplo como valor universal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar el build.** Identificar bundler, configuración de empaquetado y dependencias que se incluyen o resuelven durante la ejecución. Contrastar el artefacto final con los supuestos de la guía."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificar la Layer.** Confirmar la referencia aprobada para la integración y su correspondencia con el entorno. Registrar la versión utilizada y quién mantiene su actualización, sin asumir que una referencia de otro ambiente es intercambiable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Aplicar carga y cierre.** Utilizar los pasos documentados para la variante elegida. Revisar que no convivan mecanismos de inicialización duplicados entre el paquete, la precarga y el código de aplicación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validar después de empaquetar.** Comprobar la integración sobre el artefacto que realmente se despliega. Incluir fallas representativas y revisar identidad y contexto de las señales, además de la ausencia de errores de carga."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Mantener compatibilidad.** Repetir la revisión cuando cambien bundler, runtime, dependencias o Layer. Conservar la relación entre versiones para acotar problemas de una actualización."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** el artefacto empaquetado inicializa y exporta correctamente en una invocación real de prueba."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Lambda con bundler](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1183776821) · [Catálogo de Layers](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1366065164)."
                      }
                    ]
                  },
                  {
                    "titulo": "Frontend / RUM",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Utilizar el SDK de RUM según la integración del framework. Separar clave pública de RUM y credenciales privadas. Preparar source maps desde el flujo de build autorizado y revisar qué datos de experiencia se capturan."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitar el alcance.** Identificar aplicación frontend, framework, ambiente y recorridos que se observarán. RUM es una integración complementaria con su propia configuración; la instrumentación del backend no la habilita automáticamente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Integrar y configurar.** Aplicar la guía correspondiente y revisar el artefacto publicado. Confirmar que la configuración identifica el ambiente correcto y que no incorpora credenciales privadas al código entregado al navegador."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar captura.** Comprobar los campos y eventos generados utilizando datos sintéticos. Ajustar el tratamiento de información según los criterios corporativos aplicables antes de ampliar la captura."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validar experiencia.** Ejecutar una interacción y un error controlados. Verificar que el equipo puede localizar e interpretar la evidencia y que los source maps, cuando se utilicen, corresponden a la versión evaluada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Continuar con eventos y RUM](/docs/observabilidad/golden-path?tema=eventos-rum)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente evidencia:** una interacción de prueba y su error se investigan desde el navegador sin exponer credenciales privadas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[RUM y source maps](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701)."
                      }
                    ]
                  },
                  {
                    "titulo": "Cierre de la implementación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisión común.** La integración queda preparada para su validación operativa cuando el equipo puede identificar qué se instaló, cómo se configuró y qué evidencia produjo. Registrar las comprobaciones pendientes en lugar de asumir cobertura completa."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Aspecto",
                          "Comprobación"
                        ],
                        "filas": [
                          [
                            "Compatibilidad",
                            "Guía y versión corresponden al runtime y artefacto desplegados"
                          ],
                          [
                            "Inicialización",
                            "La integración se carga mediante el mecanismo previsto"
                          ],
                          [
                            "Identidad",
                            "Servicio y ambiente son reconocibles en las señales recibidas"
                          ],
                          [
                            "Cobertura",
                            "Las operaciones de prueba producen las evidencias necesarias"
                          ],
                          [
                            "Entrega",
                            "La información puede consultarse en el destino acordado"
                          ],
                          [
                            "Seguridad",
                            "Las muestras revisadas no contienen secretos ni datos innecesarios"
                          ],
                          [
                            "Operación",
                            "Existe un responsable y se conocen las limitaciones observadas"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Siguiente paso.** Completar la verificación del transporte y de la consulta. Si la señal no aparece, utilizar la evidencia de la prueba para localizar el tramo que requiere revisión."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Conectar con OES](/docs/observabilidad/golden-path?tema=oes) · [Validar la integración](/docs/observabilidad/golden-path?tema=validar) · [Diagnosticar](/docs/observabilidad/golden-path?tema=diagnosticar)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Elegir la puerta de entrada"
              },
              {
                "tipo": "parrafo",
                "texto": "**Guías técnicas de Ægis · staging.** Selecciona un lenguaje para abrir la guía de la librería o su integración Lambda. Se conservan las referencias complementarias de Confluence."
              },
              {
                "tipo": "parrafo",
                "texto": "**El equipo sabe qué quiere observar y bajo qué reglas. Ahora debe instrumentar.** Selecciona la ruta que corresponde a tu aplicación. Confirma runtime, versión, arquitectura, ambiente y forma de empaquetado en la guía original antes de aplicar sus ejemplos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de implementación.** Incorporar la integración correspondiente al artefacto desplegado y demostrar que las operaciones relevantes producen evidencia útil. La instalación de una dependencia es solo una parte del trabajo: también deben verificarse inicialización, identidad, cobertura y entrega."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Etapa",
                  "Acción",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Preparar",
                    "Identificar runtime, dependencias e instrumentación existente",
                    "Guía aplicable y versión seleccionada"
                  ],
                  [
                    "Integrar",
                    "Aplicar instalación e inicialización documentadas",
                    "Artefacto que inicia con la integración prevista"
                  ],
                  [
                    "Configurar",
                    "Definir identidad, ambiente y destino habilitado",
                    "Configuración identificable sin secretos expuestos"
                  ],
                  [
                    "Completar cobertura",
                    "Revisar operaciones y atributos propios del producto",
                    "Señales con significado funcional definido"
                  ],
                  [
                    "Validar",
                    "Ejecutar casos representativos de éxito y error",
                    "Evidencia consultable en el destino acordado"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los pasos siguientes organizan la implementación y su revisión. Los comandos, nombres de paquetes, métodos y valores de configuración se toman de la guía vigente del lenguaje; no se presupone equivalencia entre sus APIs."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [FAQ de Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083), [ejemplos de código](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1016430616)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Node.js / TypeScript / NestJS"
              },
              {
                "tipo": "parrafo",
                "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Guía Lambda](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_LAMBDA)."
              },
              {
                "tipo": "parrafo",
                "texto": "Usar Ægis, inicializar una sola instancia y cargar la instrumentación en el momento que requiere el framework. Revisar dependencias de logging y autoinstrumentación para evitar duplicación. Los tokens de paquetes deben gestionarse fuera del repositorio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar.** Identificar versión de Node.js, framework, comando de inicio y forma de construcción del artefacto. Inventariar agentes, librerías de telemetría e integraciones de logging existentes antes de agregar nuevas dependencias."
              },
              {
                "tipo": "parrafo",
                "texto": "**Integrar.** Aplicar el mecanismo de instalación y carga descrito en la guía. En NestJS, comprobar el punto de inicialización indicado para el framework y revisar que módulos o proveedores no vuelvan a inicializar la misma integración."
              },
              {
                "tipo": "parrafo",
                "texto": "**Configurar.** Definir identidad del servicio, ambiente y destino autorizado utilizando las opciones documentadas. Comprobar la configuración del proceso desplegado; una ejecución local correcta no confirma la configuración del contenedor o servicio final."
              },
              {
                "tipo": "parrafo",
                "texto": "**Completar cobertura.** Revisar qué operaciones y dependencias quedan instrumentadas automáticamente. Añadir contexto de negocio solo cuando responda a una necesidad concreta, evitando señales duplicadas y campos sensibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validar.** Probar una operación que invoque una dependencia y un caso de error. Revisar identidad, asociación de evidencias y duplicación de mensajes o spans. Registrar las limitaciones observadas del framework o las dependencias utilizadas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** una operación emite logs, métricas y spans con identidad y contexto correctos."
              },
              {
                "tipo": "parrafo",
                "texto": "[JavaScript / TypeScript](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1126793219) · [NestJS](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993394689)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Java"
              },
              {
                "tipo": "parrafo",
                "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN)."
              },
              {
                "tipo": "parrafo",
                "texto": "Consumir Ægis desde el mecanismo de paquetes documentado y verificar compatibilidad de JDK y versión. Integrar logging, trazas y métricas siguiendo los ejemplos de la guía."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar.** Registrar JDK, framework, herramienta de construcción y forma de arranque. Revisar agentes y librerías existentes para identificar posibles solapamientos con la integración elegida."
              },
              {
                "tipo": "parrafo",
                "texto": "**Integrar.** Utilizar las dependencias y el mecanismo de inicialización publicados para Java. Confirmar que el artefacto generado contiene la configuración necesaria y que el entorno de ejecución corresponde al evaluado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Configurar y ampliar.** Aplicar identidad y destino según la guía. Definir indicadores y operaciones propias del producto sin asumir que la cobertura automática describe por completo sus resultados de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validar.** Ejecutar el artefacto construido y comprobar una operación exitosa, una fallida y las dependencias relevantes. Verificar que los logs y trazas mantienen el contexto esperado y que las métricas utilizan unidades y significado consistentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro de implementación.** Conservar versiones, configuración relevante y evidencia de pruebas sin incluir credenciales. Esta información permite evaluar futuras actualizaciones y solicitar soporte con un alcance concreto."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** una operación de la aplicación aparece correlacionada y las métricas representan el comportamiento esperado."
              },
              {
                "tipo": "parrafo",
                "texto": "[Instrumentación Java](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1124761696)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Python"
              },
              {
                "tipo": "parrafo",
                "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Guía Lambda](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_LAMBDA)."
              },
              {
                "tipo": "parrafo",
                "texto": "Configurar Ægis una sola vez por proceso. Utilizar logging estructurado, métricas y spans con cierre de contexto; verificar runtime y versión en la guía y el repositorio correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar.** Identificar versión de Python, framework y forma de ejecución, incluidos los procesos o workers utilizados por el servicio. Revisar instrumentación y configuración de logging preexistentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Integrar.** Aplicar la inicialización documentada en el punto correspondiente al ciclo de vida del proceso. Comprobar que importaciones o arranques repetidos no produzcan inicializaciones adicionales no previstas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Completar cobertura.** Identificar operaciones del producto que requieren instrumentación explícita. Revisar propagación de contexto en las rutas utilizadas, incluidas tareas asíncronas cuando formen parte del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validar.** Probar el comando y modelo de ejecución reales, no únicamente un script aislado. Confirmar identidad, asociación de logs con la operación y entrega de señales tanto ante éxito como ante excepciones."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado de revisión.** Documentar qué recorridos se comprobaron y qué límites permanecen en la integración del framework o de sus dependencias."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** contexto de traza en los logs y exportación de una operación de prueba."
              },
              {
                "tipo": "parrafo",
                "texto": "[Instrumentación Python](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1488617675)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Go"
              },
              {
                "tipo": "parrafo",
                "texto": "**Portal técnico · staging:** [Guía de la librería](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN) · [Guía Lambda](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_LAMBDA)."
              },
              {
                "tipo": "parrafo",
                "texto": "Go forma parte de los lenguajes publicados en el menú de Ægis. Seleccionar la integración correspondiente al entorno de ejecución y confirmar la versión, la configuración y las capacidades disponibles con el equipo mantenedor."
              },
              {
                "tipo": "parrafo",
                "texto": "**Estado de la documentación:** la guía de la librería muestra HTML del portal en lugar del contenido técnico durante la revisión. La guía Lambda está publicada en el menú y su contenido queda pendiente de validación. Estos enlaces se mantienen como referencia, sin instrucciones de instalación verificadas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparación del caso.** Registrar versión de Go, tipo de servicio, forma de empaquetado, dependencias relevantes y señales necesarias. Esta información permite solicitar una integración aplicable al mantenedor del estándar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Confirmaciones necesarias.** Obtener la referencia verificable del módulo, versión compatible, inicialización, configuración y mecanismo de entrega. Confirmar por separado la aplicabilidad a un servicio permanente o a Lambda."
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de implementación.** No trasladar métodos o configuración de las guías de otros lenguajes a Go. Si se requiere una alternativa mientras se completa la documentación, evaluar su alcance mediante el proceso de extensiones y excepciones."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación prevista.** Una vez confirmada la integración, ejecutar casos representativos y registrar las señales efectivamente soportadas y recibidas. La lista de evidencias debe corresponder a esas capacidades confirmadas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** una operación de prueba produce las señales esperadas en el ambiente de destino, según las capacidades confirmadas para la integración Go."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "AWS Lambda sin bundler"
              },
              {
                "tipo": "parrafo",
                "texto": "Seguir la guía de Ægis como paquete, distinguir instrumentación de aplicación y métricas de infraestructura AWS. Verificar inicialización y cierre o flush dentro del presupuesto de ejecución."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar el artefacto.** Confirmar que esta variante corresponde al empaquetado real y al lenguaje utilizado. Identificar runtime, arquitectura, handler y dependencias incluidas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Aplicar la integración.** Seguir el mecanismo documentado para cargar la librería y completar la entrega de señales. Mantener diferenciada la configuración de aplicación de la configuración de infraestructura."
              },
              {
                "tipo": "parrafo",
                "texto": "**Probar en el entorno.** Ejecutar invocaciones representativas sobre el artefacto desplegado, con éxito y error. Revisar el resultado funcional y localizar la telemetría en el destino correspondiente dentro del período de prueba."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registrar límites.** Documentar observaciones sobre inicialización, tiempo de ejecución y entrega. Una invocación exitosa no demuestra por sí sola que todas las señales se hayan exportado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** invocación funcional y telemetría exportada, incluidos los casos de error. No asumir que ver métricas de CloudWatch implica tener trazas de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "[Ægis como paquete](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1080557681) · [Modelo de Lambda](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1158709269)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "AWS Lambda con bundler"
              },
              {
                "tipo": "parrafo",
                "texto": "Webpack y esbuild pueden cambiar la resolución de módulos. La guía describe una solución con Layer y precarga de Ægis, junto con el cierre de exportación. Confirmar la Layer correspondiente a runtime, arquitectura y ambiente; no copiar un ARN o una versión de ejemplo como valor universal."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar el build.** Identificar bundler, configuración de empaquetado y dependencias que se incluyen o resuelven durante la ejecución. Contrastar el artefacto final con los supuestos de la guía."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificar la Layer.** Confirmar la referencia aprobada para la integración y su correspondencia con el entorno. Registrar la versión utilizada y quién mantiene su actualización, sin asumir que una referencia de otro ambiente es intercambiable."
              },
              {
                "tipo": "parrafo",
                "texto": "**Aplicar carga y cierre.** Utilizar los pasos documentados para la variante elegida. Revisar que no convivan mecanismos de inicialización duplicados entre el paquete, la precarga y el código de aplicación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validar después de empaquetar.** Comprobar la integración sobre el artefacto que realmente se despliega. Incluir fallas representativas y revisar identidad y contexto de las señales, además de la ausencia de errores de carga."
              },
              {
                "tipo": "parrafo",
                "texto": "**Mantener compatibilidad.** Repetir la revisión cuando cambien bundler, runtime, dependencias o Layer. Conservar la relación entre versiones para acotar problemas de una actualización."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** el artefacto empaquetado inicializa y exporta correctamente en una invocación real de prueba."
              },
              {
                "tipo": "parrafo",
                "texto": "[Lambda con bundler](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1183776821) · [Catálogo de Layers](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1366065164)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Frontend / RUM"
              },
              {
                "tipo": "parrafo",
                "texto": "Utilizar el SDK de RUM según la integración del framework. Separar clave pública de RUM y credenciales privadas. Preparar source maps desde el flujo de build autorizado y revisar qué datos de experiencia se capturan."
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitar el alcance.** Identificar aplicación frontend, framework, ambiente y recorridos que se observarán. RUM es una integración complementaria con su propia configuración; la instrumentación del backend no la habilita automáticamente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Integrar y configurar.** Aplicar la guía correspondiente y revisar el artefacto publicado. Confirmar que la configuración identifica el ambiente correcto y que no incorpora credenciales privadas al código entregado al navegador."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar captura.** Comprobar los campos y eventos generados utilizando datos sintéticos. Ajustar el tratamiento de información según los criterios corporativos aplicables antes de ampliar la captura."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validar experiencia.** Ejecutar una interacción y un error controlados. Verificar que el equipo puede localizar e interpretar la evidencia y que los source maps, cuando se utilicen, corresponden a la versión evaluada."
              },
              {
                "tipo": "parrafo",
                "texto": "[Continuar con eventos y RUM](/docs/observabilidad/golden-path?tema=eventos-rum)."
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente evidencia:** una interacción de prueba y su error se investigan desde el navegador sin exponer credenciales privadas."
              },
              {
                "tipo": "parrafo",
                "texto": "[RUM y source maps](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Cierre de la implementación"
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisión común.** La integración queda preparada para su validación operativa cuando el equipo puede identificar qué se instaló, cómo se configuró y qué evidencia produjo. Registrar las comprobaciones pendientes en lugar de asumir cobertura completa."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Aspecto",
                  "Comprobación"
                ],
                "filas": [
                  [
                    "Compatibilidad",
                    "Guía y versión corresponden al runtime y artefacto desplegados"
                  ],
                  [
                    "Inicialización",
                    "La integración se carga mediante el mecanismo previsto"
                  ],
                  [
                    "Identidad",
                    "Servicio y ambiente son reconocibles en las señales recibidas"
                  ],
                  [
                    "Cobertura",
                    "Las operaciones de prueba producen las evidencias necesarias"
                  ],
                  [
                    "Entrega",
                    "La información puede consultarse en el destino acordado"
                  ],
                  [
                    "Seguridad",
                    "Las muestras revisadas no contienen secretos ni datos innecesarios"
                  ],
                  [
                    "Operación",
                    "Existe un responsable y se conocen las limitaciones observadas"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Siguiente paso.** Completar la verificación del transporte y de la consulta. Si la señal no aparece, utilizar la evidencia de la prueba para localizar el tramo que requiere revisión."
              },
              {
                "tipo": "parrafo",
                "texto": "[Conectar con OES](/docs/observabilidad/golden-path?tema=oes) · [Validar la integración](/docs/observabilidad/golden-path?tema=validar) · [Diagnosticar](/docs/observabilidad/golden-path?tema=diagnosticar)."
              }
            ],
            "fuentes": [
              {
                "titulo": "FAQ de Ægis",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083"
              },
              {
                "titulo": "ejemplos de código",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1016430616"
              }
            ]
          },
          {
            "id": "oes",
            "titulo": "Conectar con OES",
            "bajada": "Habilitación y verificación del transporte de señales.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Conectar con OES"
              },
              {
                "tipo": "parrafo",
                "texto": "**La aplicación instrumentada requiere una ruta de transporte habilitada en su ambiente.** Revisar la topología y las dependencias descritas en la guía del cliente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de la conexión.** Confirmar que la telemetría emitida por el servicio puede recorrer los componentes OES habilitados y consultarse en la cuenta prevista. La integración combina configuración de la aplicación, infraestructura y operación de la capacidad compartida."
              },
              {
                "tipo": "parrafo",
                "texto": "La secuencia Terraform → Flux corresponde al caso documentado de un nuevo cliente en Pulsar. Para otros entornos, confirmar la guía aplicable con los responsables de plataforma; no se presupone la misma topología ni el mismo procedimiento de despliegue."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Definición previa",
                  "Información necesaria"
                ],
                "filas": [
                  [
                    "Servicio consumidor",
                    "Aplicación, servicio, equipo responsable y señales previstas"
                  ],
                  [
                    "Entorno",
                    "Ambiente, cluster o ubicación de ejecución según corresponda"
                  ],
                  [
                    "Ruta",
                    "Componentes OES que participan y responsables de cada tramo"
                  ],
                  [
                    "Conexión",
                    "Protocolo y endpoint habilitados para el ambiente"
                  ],
                  [
                    "Destino",
                    "Cuenta donde se consultará la telemetría"
                  ],
                  [
                    "Configuración protegida",
                    "Referencias a secretos y mecanismo aplicable, sin incluir sus valores"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de avance.** Cada etapa debe producir evidencia del entorno real. Un recurso desplegado o un proceso activo no demuestra por sí solo que las señales se estén entregando."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Habilitar OES Client en Pulsar](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1765572624)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Preparar infraestructura",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Para un nuevo cliente Pulsar, habilitar primero la infraestructura Terraform y sus dependencias de acuerdo con la guía del proyecto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Confirmar el alcance.** Identificar si se incorpora un cliente nuevo o se utiliza uno existente. Revisar qué recursos son propios del servicio y cuáles son compartidos para evitar duplicar infraestructura o modificar componentes de otros consumidores."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Identificar dependencias.** Revisar los recursos y condiciones previas indicados por la guía del entorno. Confirmar responsables, configuración de destino y conectividad necesaria antes de habilitar la emisión."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Aplicar el procedimiento del proyecto.** En el caso documentado de Pulsar, completar la infraestructura y sus dependencias antes de continuar con la configuración de telemetría mediante Flux. Los módulos, variables y valores concretos se obtienen de la guía correspondiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Revisar el resultado.** Confirmar que los recursos previstos existen en el ambiente correcto y que no quedan dependencias pendientes. Registrar la configuración o revisión aplicada sin exponer secretos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El entorno dispone de los recursos necesarios para habilitar el cliente, con alcance y responsables identificados."
                      }
                    ]
                  },
                  {
                    "titulo": "Habilitar telemetría",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Continuar con la habilitación mediante Flux. Confirmar recepción, procesamiento y exportación de Agent y Collector según el protocolo y endpoint del ambiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Identificar la configuración efectiva.** Revisar qué configuración se aplicará al Agent y al Collector y a qué ambiente corresponde. Distinguir el cambio declarado de su aplicación efectiva en el entorno."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Confirmar la entrada.** Verificar que el protocolo y endpoint configurados en la aplicación coinciden con la recepción habilitada. La dirección debe obtenerse del entorno; no debe copiarse un valor de ejemplo como destino universal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Revisar el tratamiento.** Identificar los pipelines previstos para las señales del servicio. Comprobar qué procesamiento y filtros aplican y qué salida utiliza cada recorrido, sin asumir que todos los tipos de señal siguen la misma configuración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Confirmar el destino.** Revisar la cuenta y el ambiente finales, así como el mecanismo de autenticación aplicable. El acceso humano para consultar evidencia se verifica de forma separada de las credenciales de la integración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**5. Coordinar con la aplicación.** Aplicar la configuración de conexión correspondiente y comprobar que la instrumentación está inicializada. La habilitación de OES no genera automáticamente señales de negocio que la aplicación no emite."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Punto de revisión",
                          "Comprobación"
                        ],
                        "filas": [
                          [
                            "Aplicación",
                            "Identidad, ambiente y destino de exportación previstos"
                          ],
                          [
                            "Entrada OES",
                            "Protocolo y dirección compatibles con el emisor"
                          ],
                          [
                            "Pipeline",
                            "Tratamiento y salida identificados para las señales utilizadas"
                          ],
                          [
                            "Configuración aplicada",
                            "El entorno refleja la versión o revisión prevista"
                          ],
                          [
                            "Destino final",
                            "Cuenta correcta y acceso disponible para validar recepción"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La ruta está configurada de forma coherente desde el servicio hasta el destino, preparada para una prueba de entrega."
                      }
                    ]
                  },
                  {
                    "titulo": "Verificar transporte",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Generar tráfico controlado y comprobar la recepción en destino. Revisar conectividad, colas, descartes y errores cuando falte información."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Preparar una prueba reconocible.** Seleccionar una operación con datos sintéticos y resultado conocido. Registrar servicio, ambiente, intervalo de ejecución y señales esperadas, sin incorporar información sensible a la evidencia."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Revisar el recorrido por tramos.** Contrastar emisión de la aplicación, recepción local, entrega a la capacidad compartida y recepción final mediante las evidencias disponibles. Registrar el último punto donde se confirma actividad para acotar el diagnóstico."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Consultar el destino.** Buscar en la cuenta correcta con una ventana de tiempo acotada. Revisar filtros e identidad antes de concluir que existe pérdida de telemetría."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Comprobar la utilidad.** Verificar que la señal recibida conserva el contexto necesario y representa la operación ejecutada. La recepción con un ambiente incorrecto o sin identidad suficiente requiere corrección."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Observación",
                          "Revisión inicial"
                        ],
                        "filas": [
                          [
                            "La aplicación no genera evidencia",
                            "Inicialización y cobertura de la instrumentación"
                          ],
                          [
                            "El emisor informa errores de conexión",
                            "Endpoint, protocolo y conectividad del tramo"
                          ],
                          [
                            "Hay recepción pero no entrega al siguiente destino",
                            "Configuración del pipeline y errores de exportación"
                          ],
                          [
                            "Parte de las señales no aparece",
                            "Tratamiento, filtros, muestreo y posibles descartes"
                          ],
                          [
                            "El destino recibe datos, pero la búsqueda no los encuentra",
                            "Cuenta, ventana temporal, filtros e identidad"
                          ],
                          [
                            "El problema coincide con mayor demanda",
                            "Recursos y comportamiento de la capacidad compartida"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una operación de prueba puede localizarse e interpretarse en el destino acordado y cualquier diferencia observada queda identificada para su tratamiento."
                      }
                    ]
                  },
                  {
                    "titulo": "Gestionar fallas y cambios de conexión",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Acotar el problema.** Registrar momento, ambiente, componentes afectados y errores sanitizados. Separar hechos observados de hipótesis y coordinar con el responsable del tramo donde se encuentra la última evidencia disponible."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar capacidad y recuperación.** Comprobar los mecanismos y límites efectivos del despliegue. No asumir que existen colas persistentes, reintentos ilimitados o garantías de entrega porque el componente esté operativo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Modificar con alcance definido.** Antes de cambiar endpoint, credenciales o procesamiento, identificar consumidores afectados y acordar la validación posterior. Los cambios sobre componentes compartidos deben coordinarse con sus responsables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificar después del cambio.** Repetir una operación representativa y comprobar destino, identidad y recepción. Mantener una forma definida de recuperar la configuración anterior si el cambio introduce una pérdida de visibilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Las fallas y modificaciones tienen un alcance identificable, responsables y evidencia de recuperación."
                      }
                    ]
                  },
                  {
                    "titulo": "Cerrar la habilitación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Conservar un registro de servicio, ambiente, componentes utilizados, configuración aplicada, responsables y resultado de validación. Documentar limitaciones o pendientes que afecten el uso operativo."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Evidencia de cierre",
                          "Qué debe permitir confirmar"
                        ],
                        "filas": [
                          [
                            "Ruta documentada",
                            "Qué componentes y destinos utiliza el servicio"
                          ],
                          [
                            "Configuración aplicada",
                            "Qué revisión se verificó en el entorno"
                          ],
                          [
                            "Prueba de entrega",
                            "Qué operación y señales se comprobaron"
                          ],
                          [
                            "Consulta en destino",
                            "Que el equipo puede localizar e interpretar la evidencia"
                          ],
                          [
                            "Responsabilidad operativa",
                            "Quién mantiene cada tramo y cómo coordinar un problema"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "La habilitación de transporte se complementa con la validación funcional de la instrumentación y la preparación de consultas y alertas del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Validar la integración](/docs/observabilidad/golden-path?tema=validar) · [Consultar y operar](/docs/observabilidad/golden-path?tema=operar) · [Diagnosticar](/docs/observabilidad/golden-path?tema=diagnosticar)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Debugging OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890011658)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Conectar con OES"
              },
              {
                "tipo": "parrafo",
                "texto": "**La aplicación instrumentada requiere una ruta de transporte habilitada en su ambiente.** Revisar la topología y las dependencias descritas en la guía del cliente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de la conexión.** Confirmar que la telemetría emitida por el servicio puede recorrer los componentes OES habilitados y consultarse en la cuenta prevista. La integración combina configuración de la aplicación, infraestructura y operación de la capacidad compartida."
              },
              {
                "tipo": "parrafo",
                "texto": "La secuencia Terraform → Flux corresponde al caso documentado de un nuevo cliente en Pulsar. Para otros entornos, confirmar la guía aplicable con los responsables de plataforma; no se presupone la misma topología ni el mismo procedimiento de despliegue."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Definición previa",
                  "Información necesaria"
                ],
                "filas": [
                  [
                    "Servicio consumidor",
                    "Aplicación, servicio, equipo responsable y señales previstas"
                  ],
                  [
                    "Entorno",
                    "Ambiente, cluster o ubicación de ejecución según corresponda"
                  ],
                  [
                    "Ruta",
                    "Componentes OES que participan y responsables de cada tramo"
                  ],
                  [
                    "Conexión",
                    "Protocolo y endpoint habilitados para el ambiente"
                  ],
                  [
                    "Destino",
                    "Cuenta donde se consultará la telemetría"
                  ],
                  [
                    "Configuración protegida",
                    "Referencias a secretos y mecanismo aplicable, sin incluir sus valores"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Criterio de avance.** Cada etapa debe producir evidencia del entorno real. Un recurso desplegado o un proceso activo no demuestra por sí solo que las señales se estén entregando."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Habilitar OES Client en Pulsar](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1765572624)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Preparar infraestructura"
              },
              {
                "tipo": "parrafo",
                "texto": "Para un nuevo cliente Pulsar, habilitar primero la infraestructura Terraform y sus dependencias de acuerdo con la guía del proyecto."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Confirmar el alcance.** Identificar si se incorpora un cliente nuevo o se utiliza uno existente. Revisar qué recursos son propios del servicio y cuáles son compartidos para evitar duplicar infraestructura o modificar componentes de otros consumidores."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Identificar dependencias.** Revisar los recursos y condiciones previas indicados por la guía del entorno. Confirmar responsables, configuración de destino y conectividad necesaria antes de habilitar la emisión."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Aplicar el procedimiento del proyecto.** En el caso documentado de Pulsar, completar la infraestructura y sus dependencias antes de continuar con la configuración de telemetría mediante Flux. Los módulos, variables y valores concretos se obtienen de la guía correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Revisar el resultado.** Confirmar que los recursos previstos existen en el ambiente correcto y que no quedan dependencias pendientes. Registrar la configuración o revisión aplicada sin exponer secretos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El entorno dispone de los recursos necesarios para habilitar el cliente, con alcance y responsables identificados."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Habilitar telemetría"
              },
              {
                "tipo": "parrafo",
                "texto": "Continuar con la habilitación mediante Flux. Confirmar recepción, procesamiento y exportación de Agent y Collector según el protocolo y endpoint del ambiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Identificar la configuración efectiva.** Revisar qué configuración se aplicará al Agent y al Collector y a qué ambiente corresponde. Distinguir el cambio declarado de su aplicación efectiva en el entorno."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Confirmar la entrada.** Verificar que el protocolo y endpoint configurados en la aplicación coinciden con la recepción habilitada. La dirección debe obtenerse del entorno; no debe copiarse un valor de ejemplo como destino universal."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Revisar el tratamiento.** Identificar los pipelines previstos para las señales del servicio. Comprobar qué procesamiento y filtros aplican y qué salida utiliza cada recorrido, sin asumir que todos los tipos de señal siguen la misma configuración."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Confirmar el destino.** Revisar la cuenta y el ambiente finales, así como el mecanismo de autenticación aplicable. El acceso humano para consultar evidencia se verifica de forma separada de las credenciales de la integración."
              },
              {
                "tipo": "parrafo",
                "texto": "**5. Coordinar con la aplicación.** Aplicar la configuración de conexión correspondiente y comprobar que la instrumentación está inicializada. La habilitación de OES no genera automáticamente señales de negocio que la aplicación no emite."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Punto de revisión",
                  "Comprobación"
                ],
                "filas": [
                  [
                    "Aplicación",
                    "Identidad, ambiente y destino de exportación previstos"
                  ],
                  [
                    "Entrada OES",
                    "Protocolo y dirección compatibles con el emisor"
                  ],
                  [
                    "Pipeline",
                    "Tratamiento y salida identificados para las señales utilizadas"
                  ],
                  [
                    "Configuración aplicada",
                    "El entorno refleja la versión o revisión prevista"
                  ],
                  [
                    "Destino final",
                    "Cuenta correcta y acceso disponible para validar recepción"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La ruta está configurada de forma coherente desde el servicio hasta el destino, preparada para una prueba de entrega."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Verificar transporte"
              },
              {
                "tipo": "parrafo",
                "texto": "Generar tráfico controlado y comprobar la recepción en destino. Revisar conectividad, colas, descartes y errores cuando falte información."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Preparar una prueba reconocible.** Seleccionar una operación con datos sintéticos y resultado conocido. Registrar servicio, ambiente, intervalo de ejecución y señales esperadas, sin incorporar información sensible a la evidencia."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Revisar el recorrido por tramos.** Contrastar emisión de la aplicación, recepción local, entrega a la capacidad compartida y recepción final mediante las evidencias disponibles. Registrar el último punto donde se confirma actividad para acotar el diagnóstico."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Consultar el destino.** Buscar en la cuenta correcta con una ventana de tiempo acotada. Revisar filtros e identidad antes de concluir que existe pérdida de telemetría."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Comprobar la utilidad.** Verificar que la señal recibida conserva el contexto necesario y representa la operación ejecutada. La recepción con un ambiente incorrecto o sin identidad suficiente requiere corrección."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Observación",
                  "Revisión inicial"
                ],
                "filas": [
                  [
                    "La aplicación no genera evidencia",
                    "Inicialización y cobertura de la instrumentación"
                  ],
                  [
                    "El emisor informa errores de conexión",
                    "Endpoint, protocolo y conectividad del tramo"
                  ],
                  [
                    "Hay recepción pero no entrega al siguiente destino",
                    "Configuración del pipeline y errores de exportación"
                  ],
                  [
                    "Parte de las señales no aparece",
                    "Tratamiento, filtros, muestreo y posibles descartes"
                  ],
                  [
                    "El destino recibe datos, pero la búsqueda no los encuentra",
                    "Cuenta, ventana temporal, filtros e identidad"
                  ],
                  [
                    "El problema coincide con mayor demanda",
                    "Recursos y comportamiento de la capacidad compartida"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una operación de prueba puede localizarse e interpretarse en el destino acordado y cualquier diferencia observada queda identificada para su tratamiento."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Gestionar fallas y cambios de conexión"
              },
              {
                "tipo": "parrafo",
                "texto": "**Acotar el problema.** Registrar momento, ambiente, componentes afectados y errores sanitizados. Separar hechos observados de hipótesis y coordinar con el responsable del tramo donde se encuentra la última evidencia disponible."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar capacidad y recuperación.** Comprobar los mecanismos y límites efectivos del despliegue. No asumir que existen colas persistentes, reintentos ilimitados o garantías de entrega porque el componente esté operativo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Modificar con alcance definido.** Antes de cambiar endpoint, credenciales o procesamiento, identificar consumidores afectados y acordar la validación posterior. Los cambios sobre componentes compartidos deben coordinarse con sus responsables."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificar después del cambio.** Repetir una operación representativa y comprobar destino, identidad y recepción. Mantener una forma definida de recuperar la configuración anterior si el cambio introduce una pérdida de visibilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Las fallas y modificaciones tienen un alcance identificable, responsables y evidencia de recuperación."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Cerrar la habilitación"
              },
              {
                "tipo": "parrafo",
                "texto": "Conservar un registro de servicio, ambiente, componentes utilizados, configuración aplicada, responsables y resultado de validación. Documentar limitaciones o pendientes que afecten el uso operativo."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Evidencia de cierre",
                  "Qué debe permitir confirmar"
                ],
                "filas": [
                  [
                    "Ruta documentada",
                    "Qué componentes y destinos utiliza el servicio"
                  ],
                  [
                    "Configuración aplicada",
                    "Qué revisión se verificó en el entorno"
                  ],
                  [
                    "Prueba de entrega",
                    "Qué operación y señales se comprobaron"
                  ],
                  [
                    "Consulta en destino",
                    "Que el equipo puede localizar e interpretar la evidencia"
                  ],
                  [
                    "Responsabilidad operativa",
                    "Quién mantiene cada tramo y cómo coordinar un problema"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "La habilitación de transporte se complementa con la validación funcional de la instrumentación y la preparación de consultas y alertas del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "[Validar la integración](/docs/observabilidad/golden-path?tema=validar) · [Consultar y operar](/docs/observabilidad/golden-path?tema=operar) · [Diagnosticar](/docs/observabilidad/golden-path?tema=diagnosticar)."
              },
              {
                "tipo": "parrafo",
                "texto": "[Debugging OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890011658)."
              }
            ],
            "fuentes": [
              {
                "titulo": "Habilitar OES Client en Pulsar",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1765572624"
              }
            ]
          },
          {
            "id": "validar",
            "titulo": "Validar la implementación",
            "bajada": "Ciclo de desarrollo y evidencias de recepción.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Construir, validar y aprender"
              },
              {
                "tipo": "parrafo",
                "texto": "**La validación comprueba que la implementación produce evidencia útil para operar el servicio.** El ciclo comprende definición, instrumentación, pruebas, consulta y mejora. La recepción de datos debe acompañarse de identidad correcta, significado funcional y una investigación reproducible."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance de la evaluación.** Identificar servicio, ambiente, versión del artefacto e integración utilizados. Las conclusiones corresponden a ese alcance; una prueba local no acredita el comportamiento de un despliegue diferente."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Pregunta de validación"
                ],
                "filas": [
                  [
                    "Funcional",
                    "¿Las señales representan el resultado real de la operación?"
                  ],
                  [
                    "Técnica",
                    "¿Se generan, transportan y consultan en el destino previsto?"
                  ],
                  [
                    "Contexto",
                    "¿Puede relacionarse la evidencia entre componentes?"
                  ],
                  [
                    "Seguridad",
                    "¿Los campos recibidos tienen el tratamiento previsto?"
                  ],
                  [
                    "Operación",
                    "¿El equipo puede investigar y coordinar una respuesta?"
                  ],
                  [
                    "Consumo",
                    "¿El volumen y las dimensiones son coherentes con la prueba?"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Observability Development Lifecycle](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Definir",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Acordar pregunta, recorrido crítico, señales, responsable y criterios de éxito. Para Checkout: distinguir intentos y compras completadas e investigar dónde se produce la demora."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar los casos.** Seleccionar operaciones con resultados conocidos, dependencias relevantes y datos sintéticos. Definir qué señales se esperan de cada escenario, sin exigir que toda operación genere todos los tipos de señal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Establecer criterios observables.** Precisar cuenta, identidad, contexto y consulta que permitirán verificar el caso. Registrar qué se considerará satisfactorio y qué limitaciones impedirían utilizar la evidencia."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Coordinar el entorno.** Confirmar accesos y responsables de aplicación y transporte. Las pruebas que alteren disponibilidad o generen notificaciones deben acordarse con los equipos afectados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entregable:** contrato de señales comprensible por Producto y SRE."
                      }
                    ]
                  },
                  {
                    "titulo": "Instrumentar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Aplicar la guía de Ægis y el contrato de atributos. Confirmar integración OES del ambiente. Para un nuevo cliente Pulsar, la guía ordena **primero infraestructura Terraform y sus dependencias; después habilitación de telemetría mediante Flux**."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entregable:** aplicación instrumentada y pipeline configurado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identificar lo desplegado.** Registrar versiones y referencias de configuración, sin incluir secretos. Confirmar runtime, empaquetado, inicialización y destino antes de interpretar una ausencia de señales."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitar la cobertura.** Identificar qué operaciones se capturan automáticamente y cuáles requieren instrumentación explícita. Documentar dependencias sin cobertura para distinguir una limitación conocida de una falla de entrega."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Habilitar OES Client en Pulsar](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1765572624)."
                      }
                    ]
                  },
                  {
                    "titulo": "Validar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Generar tráfico de prueba y revisar logs, métricas y trazas, tanto de éxito como de error. Ægis LocalStack permite ensayar con Grafana, Loki, Prometheus y Tempo antes de comprobar el destino corporativo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entregable:** evidencia de recepción, contexto propagado y semántica correcta. Pods en Running por sí solos no demuestran que la señal llegue."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Escenario",
                          "Ejecución propuesta",
                          "Evidencia a revisar"
                        ],
                        "filas": [
                          [
                            "Operación exitosa",
                            "Ejecutar un caso con resultado funcional conocido",
                            "Identidad, resultado y señales esperadas"
                          ],
                          [
                            "Error de aplicación",
                            "Provocar un error controlado en un entorno adecuado",
                            "Error observable con contexto suficiente y sin datos sensibles"
                          ],
                          [
                            "Dependencia",
                            "Ejecutar una operación que atraviese otro componente",
                            "Relación de evidencias y límites de cobertura"
                          ],
                          [
                            "Entrega interrumpida",
                            "Coordinar una prueba de indisponibilidad del destino",
                            "Impacto en el servicio, errores y recuperación observada"
                          ],
                          [
                            "Configuración desplegada",
                            "Ejecutar el artefacto real en el ambiente seleccionado",
                            "Correspondencia entre versión, identidad y cuenta"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Recorrido de comprobación.** Registrar hora y resultado de la operación, comprobar las evidencias disponibles de emisión y transporte y consultar el destino. Si falta una señal, identificar el último tramo con evidencia antes de atribuir la causa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Interpretar diferencias.** Revisar filtros, muestreo, intervalo temporal y permisos. Las diferencias de conteos entre tramos deben analizarse considerando el tratamiento aplicado; no demuestran por sí solas pérdida accidental."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Ægis LocalStack](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1125089405)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación técnica de seguridad:** revisar la configuración efectiva; ejecutar una operación con datos sintéticos; inspeccionar las señales recibidas para comprobar exclusión o enmascaramiento de campos sensibles; verificar acceso con los roles autorizados y contrastar retención con la política aplicable. Registrar evidencias sanitizadas y hallazgos sin incluir secretos. Consultar los [lineamientos de seguridad](/docs/observabilidad/gobierno?tema=seguridad)."
                      }
                    ]
                  },
                  {
                    "titulo": "Observar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Comprobar el servicio en APM, explorar trazas y logs en la misma ventana y construir dashboards con métricas. La guía corporativa limita widgets basados en consultas de logs; la infraestructura se consulta mediante dashboards específicos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entregable:** un recorrido repetible desde el indicador hasta la evidencia que explica el caso."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comprobar la investigación.** Pedir al responsable operativo que localice el servicio y reproduzca una consulta del caso de prueba. Verificar que puede interpretar el resultado con los permisos y recursos disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar visualizaciones.** Confirmar unidades, filtros, ambiente y significado de los indicadores. Un dashboard con datos puede estar mostrando otro ámbito o mezclar resultados que no son comparables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registrar límites.** Identificar pasos manuales, señales ausentes o discontinuidades que condicionen la investigación. Mantener esas observaciones junto con la evidencia de validación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[APM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1357840385) · [Dashboards](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1383923802) · [Infraestructura](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1471217856)."
                      }
                    ]
                  },
                  {
                    "titulo": "Aprender",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar si la evidencia permitió identificar la dependencia lenta y decidir una acción. Registrar vacíos, alertas poco útiles y procedimientos confusos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entregable:** una revisión de confiabilidad con aprendizaje compartido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Clasificar hallazgos.** Separar problemas de instrumentación, transporte, calidad de datos, accesos y procedimientos. Asignar cada hallazgo al responsable que puede investigarlo o coordinar su resolución."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Priorizar por efecto.** Considerar qué operaciones no pueden investigarse y qué decisiones quedan sin respaldo. Una prueba fallida debe producir una acción concreta, no únicamente una observación general."
                      }
                    ]
                  },
                  {
                    "titulo": "Mejorar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Convertir los hallazgos en cambios del producto, instrumentación, runbook o plataforma. Reducir señales redundantes y revisar costos junto con su valor."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Entregable:** una mejora verificable y un nuevo ciclo de definición."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Repetir lo afectado.** Después de una corrección, ejecutar los casos necesarios para confirmar su resultado y revisar los consumidores de las señales modificadas. Conservar la relación entre hallazgo, cambio y evidencia de cierre."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Mantener la validación.** Revisar los casos cuando cambien runtime, instrumentación, pipelines, destinos o comportamiento del producto. La evidencia previa conserva su valor para el alcance probado, pero no sustituye la comprobación del cambio."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Cerrar el recorrido con evidencias"
              },
              {
                "tipo": "parrafo",
                "texto": "**El cierre requiere evidencias del alcance evaluado y claridad sobre los pendientes.** Los criterios siguientes permiten revisar si la implementación está preparada para su uso operativo. Esta autoevaluación no constituye una certificación ni una autorización de producción."
              },
              {
                "tipo": "parrafo",
                "texto": "Registrar por criterio el caso ejecutado, ambiente, versión, resultado, responsable y referencia a evidencia sanitizada. Diferenciar **verificado**, **con hallazgo**, **pendiente de verificación** y **no aplicable con justificación**; la ausencia de evidencia no equivale a un resultado satisfactorio."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [ODLC](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610) y [modelo de evolución continua](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808859145)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "La señal responde a una pregunta",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Existe un indicador con significado de negocio y responsable. El equipo puede explicar qué decisión habilita."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evidencia de cierre.** Una operación conocida permite contrastar el resultado funcional con el indicador o señal recibidos. El registro incluye la pregunta operativa y la interpretación esperada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Pendiente relevante.** Datos disponibles cuyo significado, unidad o momento de emisión todavía no estén definidos."
                      }
                    ]
                  },
                  {
                    "titulo": "El contexto viaja con la operación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Una prueba permite relacionar servicio, ambiente, logs y spans. Las métricas mantienen dimensiones controladas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evidencia de cierre.** La investigación permite seguir el recorrido evaluado y distinguir los componentes participantes. Se documentan los límites donde no se conserva contexto y su efecto sobre el análisis."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Pendiente relevante.** Asociaciones basadas únicamente en cercanía temporal o señales con identidad contradictoria."
                      }
                    ]
                  },
                  {
                    "titulo": "Probamos éxito y error",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "El servicio funciona con el artefacto real; la instrumentación informa ambos resultados. Revisamos también comportamiento ante fallas de exportación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evidencia de cierre.** Casos de éxito y error con resultados conocidos, señales localizadas y comportamiento observado del servicio. Si una prueba de falla de transporte no pudo ejecutarse, queda explícitamente pendiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Pendiente relevante.** Validación realizada solo en un script local o sin comprobar la recepción del artefacto desplegado."
                      }
                    ]
                  },
                  {
                    "titulo": "El equipo sabe investigar y responder",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Puede pasar del indicador a una traza o log, identificar el responsable y seguir un runbook. El destino de notificación se valida de manera acordada con quienes lo reciben."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evidencia de cierre.** Consulta reproducible, acceso funcional al destino y procedimiento que indique qué revisar y cómo escalar. Cuando se incluyen alertas, la recepción se comprueba con el equipo destinatario."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Pendiente relevante.** Recursos operativos sin responsable, permisos insuficientes o notificaciones cuya recepción no se ha verificado."
                      }
                    ]
                  },
                  {
                    "titulo": "El consumo tiene propósito",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Se revisaron cardinalidad, volumen, retención, duplicación y sampling. El equipo conoce las fuentes de consumo y puede justificar lo que conserva."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evidencia de cierre.** Revisión del consumo observado durante la prueba, dimensiones utilizadas y configuración de conservación contrastada con los criterios aplicables. Distinguir una medición de prueba de una previsión de demanda productiva."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Pendiente relevante.** Volumen inesperado sin explicación o reducción de señales que impida investigar los casos definidos."
                      }
                    ]
                  },
                  {
                    "titulo": "Lo aprendido vuelve al producto",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Hay acciones de mejora y documentación mantenida. La observabilidad continúa durante todo el ciclo de vida del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evidencia de cierre.** Hallazgos con responsable y acción definida, correcciones verificadas y documentación alineada con la implementación. Los pendientes conservan visibilidad para la decisión operativa correspondiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro final.** Resumir alcance, resultados, limitaciones y referencias a evidencias. La conclusión debe indicar qué se pudo demostrar y qué requiere trabajo adicional, sin ampliar el resultado a ambientes o integraciones no evaluados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Diagnosticar la integración](/docs/observabilidad/golden-path?tema=diagnosticar) · [Consultar y operar](/docs/observabilidad/golden-path?tema=operar) · [Seguridad](/docs/observabilidad/gobierno?tema=seguridad)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Construir, validar y aprender"
              },
              {
                "tipo": "parrafo",
                "texto": "**La validación comprueba que la implementación produce evidencia útil para operar el servicio.** El ciclo comprende definición, instrumentación, pruebas, consulta y mejora. La recepción de datos debe acompañarse de identidad correcta, significado funcional y una investigación reproducible."
              },
              {
                "tipo": "parrafo",
                "texto": "**Alcance de la evaluación.** Identificar servicio, ambiente, versión del artefacto e integración utilizados. Las conclusiones corresponden a ese alcance; una prueba local no acredita el comportamiento de un despliegue diferente."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dimensión",
                  "Pregunta de validación"
                ],
                "filas": [
                  [
                    "Funcional",
                    "¿Las señales representan el resultado real de la operación?"
                  ],
                  [
                    "Técnica",
                    "¿Se generan, transportan y consultan en el destino previsto?"
                  ],
                  [
                    "Contexto",
                    "¿Puede relacionarse la evidencia entre componentes?"
                  ],
                  [
                    "Seguridad",
                    "¿Los campos recibidos tienen el tratamiento previsto?"
                  ],
                  [
                    "Operación",
                    "¿El equipo puede investigar y coordinar una respuesta?"
                  ],
                  [
                    "Consumo",
                    "¿El volumen y las dimensiones son coherentes con la prueba?"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Observability Development Lifecycle](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Definir"
              },
              {
                "tipo": "parrafo",
                "texto": "Acordar pregunta, recorrido crítico, señales, responsable y criterios de éxito. Para Checkout: distinguir intentos y compras completadas e investigar dónde se produce la demora."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar los casos.** Seleccionar operaciones con resultados conocidos, dependencias relevantes y datos sintéticos. Definir qué señales se esperan de cada escenario, sin exigir que toda operación genere todos los tipos de señal."
              },
              {
                "tipo": "parrafo",
                "texto": "**Establecer criterios observables.** Precisar cuenta, identidad, contexto y consulta que permitirán verificar el caso. Registrar qué se considerará satisfactorio y qué limitaciones impedirían utilizar la evidencia."
              },
              {
                "tipo": "parrafo",
                "texto": "**Coordinar el entorno.** Confirmar accesos y responsables de aplicación y transporte. Las pruebas que alteren disponibilidad o generen notificaciones deben acordarse con los equipos afectados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entregable:** contrato de señales comprensible por Producto y SRE."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Instrumentar"
              },
              {
                "tipo": "parrafo",
                "texto": "Aplicar la guía de Ægis y el contrato de atributos. Confirmar integración OES del ambiente. Para un nuevo cliente Pulsar, la guía ordena **primero infraestructura Terraform y sus dependencias; después habilitación de telemetría mediante Flux**."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entregable:** aplicación instrumentada y pipeline configurado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identificar lo desplegado.** Registrar versiones y referencias de configuración, sin incluir secretos. Confirmar runtime, empaquetado, inicialización y destino antes de interpretar una ausencia de señales."
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitar la cobertura.** Identificar qué operaciones se capturan automáticamente y cuáles requieren instrumentación explícita. Documentar dependencias sin cobertura para distinguir una limitación conocida de una falla de entrega."
              },
              {
                "tipo": "parrafo",
                "texto": "[Habilitar OES Client en Pulsar](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1765572624)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Validar"
              },
              {
                "tipo": "parrafo",
                "texto": "Generar tráfico de prueba y revisar logs, métricas y trazas, tanto de éxito como de error. Ægis LocalStack permite ensayar con Grafana, Loki, Prometheus y Tempo antes de comprobar el destino corporativo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entregable:** evidencia de recepción, contexto propagado y semántica correcta. Pods en Running por sí solos no demuestran que la señal llegue."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Escenario",
                  "Ejecución propuesta",
                  "Evidencia a revisar"
                ],
                "filas": [
                  [
                    "Operación exitosa",
                    "Ejecutar un caso con resultado funcional conocido",
                    "Identidad, resultado y señales esperadas"
                  ],
                  [
                    "Error de aplicación",
                    "Provocar un error controlado en un entorno adecuado",
                    "Error observable con contexto suficiente y sin datos sensibles"
                  ],
                  [
                    "Dependencia",
                    "Ejecutar una operación que atraviese otro componente",
                    "Relación de evidencias y límites de cobertura"
                  ],
                  [
                    "Entrega interrumpida",
                    "Coordinar una prueba de indisponibilidad del destino",
                    "Impacto en el servicio, errores y recuperación observada"
                  ],
                  [
                    "Configuración desplegada",
                    "Ejecutar el artefacto real en el ambiente seleccionado",
                    "Correspondencia entre versión, identidad y cuenta"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Recorrido de comprobación.** Registrar hora y resultado de la operación, comprobar las evidencias disponibles de emisión y transporte y consultar el destino. Si falta una señal, identificar el último tramo con evidencia antes de atribuir la causa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Interpretar diferencias.** Revisar filtros, muestreo, intervalo temporal y permisos. Las diferencias de conteos entre tramos deben analizarse considerando el tratamiento aplicado; no demuestran por sí solas pérdida accidental."
              },
              {
                "tipo": "parrafo",
                "texto": "[Ægis LocalStack](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1125089405)."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación técnica de seguridad:** revisar la configuración efectiva; ejecutar una operación con datos sintéticos; inspeccionar las señales recibidas para comprobar exclusión o enmascaramiento de campos sensibles; verificar acceso con los roles autorizados y contrastar retención con la política aplicable. Registrar evidencias sanitizadas y hallazgos sin incluir secretos. Consultar los [lineamientos de seguridad](/docs/observabilidad/gobierno?tema=seguridad)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Observar"
              },
              {
                "tipo": "parrafo",
                "texto": "Comprobar el servicio en APM, explorar trazas y logs en la misma ventana y construir dashboards con métricas. La guía corporativa limita widgets basados en consultas de logs; la infraestructura se consulta mediante dashboards específicos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entregable:** un recorrido repetible desde el indicador hasta la evidencia que explica el caso."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comprobar la investigación.** Pedir al responsable operativo que localice el servicio y reproduzca una consulta del caso de prueba. Verificar que puede interpretar el resultado con los permisos y recursos disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar visualizaciones.** Confirmar unidades, filtros, ambiente y significado de los indicadores. Un dashboard con datos puede estar mostrando otro ámbito o mezclar resultados que no son comparables."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registrar límites.** Identificar pasos manuales, señales ausentes o discontinuidades que condicionen la investigación. Mantener esas observaciones junto con la evidencia de validación."
              },
              {
                "tipo": "parrafo",
                "texto": "[APM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1357840385) · [Dashboards](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1383923802) · [Infraestructura](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1471217856)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Aprender"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar si la evidencia permitió identificar la dependencia lenta y decidir una acción. Registrar vacíos, alertas poco útiles y procedimientos confusos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entregable:** una revisión de confiabilidad con aprendizaje compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Clasificar hallazgos.** Separar problemas de instrumentación, transporte, calidad de datos, accesos y procedimientos. Asignar cada hallazgo al responsable que puede investigarlo o coordinar su resolución."
              },
              {
                "tipo": "parrafo",
                "texto": "**Priorizar por efecto.** Considerar qué operaciones no pueden investigarse y qué decisiones quedan sin respaldo. Una prueba fallida debe producir una acción concreta, no únicamente una observación general."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Mejorar"
              },
              {
                "tipo": "parrafo",
                "texto": "Convertir los hallazgos en cambios del producto, instrumentación, runbook o plataforma. Reducir señales redundantes y revisar costos junto con su valor."
              },
              {
                "tipo": "parrafo",
                "texto": "**Entregable:** una mejora verificable y un nuevo ciclo de definición."
              },
              {
                "tipo": "parrafo",
                "texto": "**Repetir lo afectado.** Después de una corrección, ejecutar los casos necesarios para confirmar su resultado y revisar los consumidores de las señales modificadas. Conservar la relación entre hallazgo, cambio y evidencia de cierre."
              },
              {
                "tipo": "parrafo",
                "texto": "**Mantener la validación.** Revisar los casos cuando cambien runtime, instrumentación, pipelines, destinos o comportamiento del producto. La evidencia previa conserva su valor para el alcance probado, pero no sustituye la comprobación del cambio."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Cerrar el recorrido con evidencias"
              },
              {
                "tipo": "parrafo",
                "texto": "**El cierre requiere evidencias del alcance evaluado y claridad sobre los pendientes.** Los criterios siguientes permiten revisar si la implementación está preparada para su uso operativo. Esta autoevaluación no constituye una certificación ni una autorización de producción."
              },
              {
                "tipo": "parrafo",
                "texto": "Registrar por criterio el caso ejecutado, ambiente, versión, resultado, responsable y referencia a evidencia sanitizada. Diferenciar **verificado**, **con hallazgo**, **pendiente de verificación** y **no aplicable con justificación**; la ausencia de evidencia no equivale a un resultado satisfactorio."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [ODLC](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610) y [modelo de evolución continua](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808859145)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "La señal responde a una pregunta"
              },
              {
                "tipo": "parrafo",
                "texto": "Existe un indicador con significado de negocio y responsable. El equipo puede explicar qué decisión habilita."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evidencia de cierre.** Una operación conocida permite contrastar el resultado funcional con el indicador o señal recibidos. El registro incluye la pregunta operativa y la interpretación esperada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Pendiente relevante.** Datos disponibles cuyo significado, unidad o momento de emisión todavía no estén definidos."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "El contexto viaja con la operación"
              },
              {
                "tipo": "parrafo",
                "texto": "Una prueba permite relacionar servicio, ambiente, logs y spans. Las métricas mantienen dimensiones controladas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evidencia de cierre.** La investigación permite seguir el recorrido evaluado y distinguir los componentes participantes. Se documentan los límites donde no se conserva contexto y su efecto sobre el análisis."
              },
              {
                "tipo": "parrafo",
                "texto": "**Pendiente relevante.** Asociaciones basadas únicamente en cercanía temporal o señales con identidad contradictoria."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Probamos éxito y error"
              },
              {
                "tipo": "parrafo",
                "texto": "El servicio funciona con el artefacto real; la instrumentación informa ambos resultados. Revisamos también comportamiento ante fallas de exportación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evidencia de cierre.** Casos de éxito y error con resultados conocidos, señales localizadas y comportamiento observado del servicio. Si una prueba de falla de transporte no pudo ejecutarse, queda explícitamente pendiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Pendiente relevante.** Validación realizada solo en un script local o sin comprobar la recepción del artefacto desplegado."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "El equipo sabe investigar y responder"
              },
              {
                "tipo": "parrafo",
                "texto": "Puede pasar del indicador a una traza o log, identificar el responsable y seguir un runbook. El destino de notificación se valida de manera acordada con quienes lo reciben."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evidencia de cierre.** Consulta reproducible, acceso funcional al destino y procedimiento que indique qué revisar y cómo escalar. Cuando se incluyen alertas, la recepción se comprueba con el equipo destinatario."
              },
              {
                "tipo": "parrafo",
                "texto": "**Pendiente relevante.** Recursos operativos sin responsable, permisos insuficientes o notificaciones cuya recepción no se ha verificado."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "El consumo tiene propósito"
              },
              {
                "tipo": "parrafo",
                "texto": "Se revisaron cardinalidad, volumen, retención, duplicación y sampling. El equipo conoce las fuentes de consumo y puede justificar lo que conserva."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evidencia de cierre.** Revisión del consumo observado durante la prueba, dimensiones utilizadas y configuración de conservación contrastada con los criterios aplicables. Distinguir una medición de prueba de una previsión de demanda productiva."
              },
              {
                "tipo": "parrafo",
                "texto": "**Pendiente relevante.** Volumen inesperado sin explicación o reducción de señales que impida investigar los casos definidos."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Lo aprendido vuelve al producto"
              },
              {
                "tipo": "parrafo",
                "texto": "Hay acciones de mejora y documentación mantenida. La observabilidad continúa durante todo el ciclo de vida del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evidencia de cierre.** Hallazgos con responsable y acción definida, correcciones verificadas y documentación alineada con la implementación. Los pendientes conservan visibilidad para la decisión operativa correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro final.** Resumir alcance, resultados, limitaciones y referencias a evidencias. La conclusión debe indicar qué se pudo demostrar y qué requiere trabajo adicional, sin ampliar el resultado a ambientes o integraciones no evaluados."
              },
              {
                "tipo": "parrafo",
                "texto": "[Diagnosticar la integración](/docs/observabilidad/golden-path?tema=diagnosticar) · [Consultar y operar](/docs/observabilidad/golden-path?tema=operar) · [Seguridad](/docs/observabilidad/gobierno?tema=seguridad)."
              }
            ],
            "fuentes": [
              {
                "titulo": "Observability Development Lifecycle",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610"
              },
              {
                "titulo": "ODLC",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610"
              },
              {
                "titulo": "modelo de evolución continua",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808859145"
              }
            ]
          },
          {
            "id": "operar",
            "titulo": "Consultar y operar en Coralogix",
            "bajada": "Exploración de señales, APM y dashboards.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Consultar y operar en Coralogix"
              },
              {
                "tipo": "parrafo",
                "texto": "**La consulta parte de la cuenta, servicio, ambiente y ventana temporal del caso.** Correlacionar señales permite recorrer la evidencia de forma repetible."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo operativo.** Utilizar la telemetría para delimitar un comportamiento, investigar sus causas posibles y verificar una acción. La investigación debe conservar el contexto de las consultas y distinguir los hechos observados de las hipótesis."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Paso",
                  "Definición necesaria"
                ],
                "filas": [
                  [
                    "Delimitar",
                    "Servicio, ambiente, cuenta y período del caso"
                  ],
                  [
                    "Observar",
                    "Indicador o resultado que presenta una desviación"
                  ],
                  [
                    "Investigar",
                    "Operaciones, dependencias y registros relacionados"
                  ],
                  [
                    "Contrastar",
                    "Evidencia que confirma o descarta una hipótesis"
                  ],
                  [
                    "Actuar",
                    "Acción dentro del alcance del equipo o escalamiento necesario"
                  ],
                  [
                    "Verificar",
                    "Comportamiento después de la intervención"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Las vistas citadas corresponden a las guías corporativas referenciadas. La disponibilidad de funciones y los permisos deben comprobarse en la cuenta utilizada; este recorrido no presupone acceso administrativo."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Logs y trazas",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Consultar All Logs y All Traces, filtrar el contexto del servicio y relacionar las operaciones mediante sus identificadores de traza."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar la búsqueda.** Confirmar cuenta y ambiente, definir una ventana temporal y anotar su referencia horaria. Comenzar por identidad del servicio y el período conocido antes de ampliar la consulta."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Investigar logs.** Buscar registros que describan el resultado de la operación, errores y contexto relevante. Revisar los campos estructurados disponibles; un mensaje aislado debe interpretarse junto con la operación y las dependencias involucradas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Investigar trazas.** Localizar una ejecución representativa y revisar las operaciones que la componen. Examinar dónde aparecen demoras o errores y qué partes del recorrido carecen de cobertura. Un span lento identifica una observación que debe investigarse, no necesariamente la causa raíz."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Relacionar evidencias.** Utilizar los identificadores de traza y span cuando estén presentes. Servicio, ambiente y tiempo ayudan a acotar la búsqueda, pero no demuestran por sí solos que dos registros pertenezcan a la misma solicitud."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cuando no hay resultados.** Revisar intervalo, filtros, permisos e identidad antes de concluir que no ocurrió actividad. Contrastar con la configuración de captura y muestreo y con las evidencias de transporte disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una consulta reproducible que permita describir qué ocurrió en el recorrido evaluado y qué información falta para completar el diagnóstico."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Logs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1338212357) · [Trazas](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1394475023)."
                      }
                    ]
                  },
                  {
                    "titulo": "APM",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Comprobar identidad y spans de transacciones del servicio. La recepción de logs por sí sola no demuestra que la instrumentación de APM esté completa."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Localizar el servicio.** Confirmar que la identidad recibida corresponde a la aplicación y ambiente investigados. Si no se reconoce el servicio esperado, revisar la instrumentación y los atributos emitidos antes de modificar las consultas de forma arbitraria."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Interpretar el comportamiento.** Relacionar los indicadores disponibles con el tráfico y las operaciones del período. Comparar intervalos equivalentes y considerar despliegues, cambios de demanda y errores que puedan explicar variaciones."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Profundizar en una operación.** Utilizar las trazas disponibles para investigar casos representativos. Contrastar una ejecución afectada con otra de comportamiento esperado, manteniendo contexto comparable y evitando generalizar a partir de un único caso."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar cobertura.** Identificar dependencias o rutas que no aparecen y comprobar si están instrumentadas. La ausencia de una relación en la vista no demuestra que esa dependencia no exista en la arquitectura."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo reconoce el comportamiento del servicio y puede vincular una desviación con ejecuciones concretas, indicando las limitaciones de cobertura."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[APM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1357840385)."
                      }
                    ]
                  },
                  {
                    "titulo": "Dashboards e infraestructura",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Construir indicadores con métricas según las restricciones corporativas. Consultar infraestructura mediante sus dashboards específicos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Definir la pregunta.** Cada visualización debe apoyar una necesidad operativa: reconocer una desviación, delimitar su alcance o comprobar una recuperación. Identificar responsable, fuente de datos y significado del indicador."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar la configuración.** Confirmar cuenta, ambiente, filtros, unidades, agrupaciones e intervalo. Una visualización con datos puede estar consultando otro ámbito o agregando operaciones con significados distintos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comparar períodos.** Considerar tráfico, horarios y cambios del servicio antes de interpretar diferencias. Un promedio puede ocultar casos relevantes; seleccionar la representación según la pregunta y los datos disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Consultar infraestructura.** Revisar los dashboards documentados para el entorno y relacionar los recursos con el servicio afectado. La coincidencia temporal entre uso elevado de recursos y una falla requiere evidencia adicional para atribuir causalidad."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Revisión",
                          "Pregunta que debe resolverse"
                        ],
                        "filas": [
                          [
                            "Identidad",
                            "¿El dashboard representa el servicio y ambiente correctos?"
                          ],
                          [
                            "Semántica",
                            "¿Qué operación y unidad expresa cada indicador?"
                          ],
                          [
                            "Alcance temporal",
                            "¿El intervalo incluye el caso investigado?"
                          ],
                          [
                            "Agregación",
                            "¿La agrupación permite observar la desviación relevante?"
                          ],
                          [
                            "Cobertura",
                            "¿Existen datos faltantes o componentes no incluidos?"
                          ],
                          [
                            "Mantenimiento",
                            "¿Quién revisa la visualización cuando cambia el servicio?"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Un conjunto de visualizaciones interpretables y mantenidas que permite pasar del comportamiento agregado a la evidencia del caso."
                      }
                    ]
                  },
                  {
                    "titulo": "Conducir una investigación operativa",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitar el impacto.** Registrar qué operación está afectada, desde cuándo y con qué alcance conocido. Diferenciar los resultados confirmados de los que todavía requieren revisión."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Construir hipótesis.** Relacionar indicadores, trazas, logs y cambios conocidos. Para cada explicación posible, identificar qué evidencia permitiría confirmarla o descartarla."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Coordinar la acción.** Aplicar los procedimientos disponibles dentro de la responsabilidad del equipo. Cuando intervenga una dependencia o capacidad compartida, escalar con el contexto necesario y una descripción del hallazgo, sin asignar una causa no demostrada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificar el resultado.** Repetir las consultas relevantes después de la intervención y comprobar el comportamiento funcional del servicio. Una disminución de señales de error debe contrastarse con tráfico y recepción de datos para descartar una pérdida de visibilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una decisión respaldada por evidencias y una comprobación explícita de su efecto."
                      }
                    ]
                  },
                  {
                    "titulo": "Registrar evidencias y mantener la operación",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro de investigación.** Conservar servicio, ambiente, cuenta, período, filtros o consulta utilizados, observaciones, hipótesis y acción realizada. Incluir referencias que permitan reproducir el análisis con los permisos correspondientes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Tratamiento de información.** Evitar copiar secretos, payloads completos o datos sensibles a tickets y capturas. Compartir únicamente la evidencia necesaria mediante los mecanismos autorizados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Pendientes.** Registrar vacíos de instrumentación, accesos insuficientes o consultas que requieran mantenimiento, con responsable y acción definida. Una limitación de observabilidad debe permanecer visible aunque el incidente funcional se haya resuelto."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Mejora continua.** Actualizar dashboards, alertas y runbooks cuando los hallazgos cambien la forma de investigar. Verificar que otro integrante del equipo pueda repetir el recorrido documentado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Validar la implementación](/docs/observabilidad/golden-path?tema=validar) · [Configurar alertas](/docs/observabilidad/golden-path?tema=alertas) · [Diagnosticar la integración](/docs/observabilidad/golden-path?tema=diagnosticar)."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Dashboards](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1383923802) · [Infraestructura](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1471217856)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Consultar y operar en Coralogix"
              },
              {
                "tipo": "parrafo",
                "texto": "**La consulta parte de la cuenta, servicio, ambiente y ventana temporal del caso.** Correlacionar señales permite recorrer la evidencia de forma repetible."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo operativo.** Utilizar la telemetría para delimitar un comportamiento, investigar sus causas posibles y verificar una acción. La investigación debe conservar el contexto de las consultas y distinguir los hechos observados de las hipótesis."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Paso",
                  "Definición necesaria"
                ],
                "filas": [
                  [
                    "Delimitar",
                    "Servicio, ambiente, cuenta y período del caso"
                  ],
                  [
                    "Observar",
                    "Indicador o resultado que presenta una desviación"
                  ],
                  [
                    "Investigar",
                    "Operaciones, dependencias y registros relacionados"
                  ],
                  [
                    "Contrastar",
                    "Evidencia que confirma o descarta una hipótesis"
                  ],
                  [
                    "Actuar",
                    "Acción dentro del alcance del equipo o escalamiento necesario"
                  ],
                  [
                    "Verificar",
                    "Comportamiento después de la intervención"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Las vistas citadas corresponden a las guías corporativas referenciadas. La disponibilidad de funciones y los permisos deben comprobarse en la cuenta utilizada; este recorrido no presupone acceso administrativo."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Logs y trazas"
              },
              {
                "tipo": "parrafo",
                "texto": "Consultar All Logs y All Traces, filtrar el contexto del servicio y relacionar las operaciones mediante sus identificadores de traza."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar la búsqueda.** Confirmar cuenta y ambiente, definir una ventana temporal y anotar su referencia horaria. Comenzar por identidad del servicio y el período conocido antes de ampliar la consulta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Investigar logs.** Buscar registros que describan el resultado de la operación, errores y contexto relevante. Revisar los campos estructurados disponibles; un mensaje aislado debe interpretarse junto con la operación y las dependencias involucradas."
              },
              {
                "tipo": "parrafo",
                "texto": "**Investigar trazas.** Localizar una ejecución representativa y revisar las operaciones que la componen. Examinar dónde aparecen demoras o errores y qué partes del recorrido carecen de cobertura. Un span lento identifica una observación que debe investigarse, no necesariamente la causa raíz."
              },
              {
                "tipo": "parrafo",
                "texto": "**Relacionar evidencias.** Utilizar los identificadores de traza y span cuando estén presentes. Servicio, ambiente y tiempo ayudan a acotar la búsqueda, pero no demuestran por sí solos que dos registros pertenezcan a la misma solicitud."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cuando no hay resultados.** Revisar intervalo, filtros, permisos e identidad antes de concluir que no ocurrió actividad. Contrastar con la configuración de captura y muestreo y con las evidencias de transporte disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una consulta reproducible que permita describir qué ocurrió en el recorrido evaluado y qué información falta para completar el diagnóstico."
              },
              {
                "tipo": "parrafo",
                "texto": "[Logs](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1338212357) · [Trazas](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1394475023)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "APM"
              },
              {
                "tipo": "parrafo",
                "texto": "Comprobar identidad y spans de transacciones del servicio. La recepción de logs por sí sola no demuestra que la instrumentación de APM esté completa."
              },
              {
                "tipo": "parrafo",
                "texto": "**Localizar el servicio.** Confirmar que la identidad recibida corresponde a la aplicación y ambiente investigados. Si no se reconoce el servicio esperado, revisar la instrumentación y los atributos emitidos antes de modificar las consultas de forma arbitraria."
              },
              {
                "tipo": "parrafo",
                "texto": "**Interpretar el comportamiento.** Relacionar los indicadores disponibles con el tráfico y las operaciones del período. Comparar intervalos equivalentes y considerar despliegues, cambios de demanda y errores que puedan explicar variaciones."
              },
              {
                "tipo": "parrafo",
                "texto": "**Profundizar en una operación.** Utilizar las trazas disponibles para investigar casos representativos. Contrastar una ejecución afectada con otra de comportamiento esperado, manteniendo contexto comparable y evitando generalizar a partir de un único caso."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar cobertura.** Identificar dependencias o rutas que no aparecen y comprobar si están instrumentadas. La ausencia de una relación en la vista no demuestra que esa dependencia no exista en la arquitectura."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo reconoce el comportamiento del servicio y puede vincular una desviación con ejecuciones concretas, indicando las limitaciones de cobertura."
              },
              {
                "tipo": "parrafo",
                "texto": "[APM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1357840385)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Dashboards e infraestructura"
              },
              {
                "tipo": "parrafo",
                "texto": "Construir indicadores con métricas según las restricciones corporativas. Consultar infraestructura mediante sus dashboards específicos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Definir la pregunta.** Cada visualización debe apoyar una necesidad operativa: reconocer una desviación, delimitar su alcance o comprobar una recuperación. Identificar responsable, fuente de datos y significado del indicador."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar la configuración.** Confirmar cuenta, ambiente, filtros, unidades, agrupaciones e intervalo. Una visualización con datos puede estar consultando otro ámbito o agregando operaciones con significados distintos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comparar períodos.** Considerar tráfico, horarios y cambios del servicio antes de interpretar diferencias. Un promedio puede ocultar casos relevantes; seleccionar la representación según la pregunta y los datos disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Consultar infraestructura.** Revisar los dashboards documentados para el entorno y relacionar los recursos con el servicio afectado. La coincidencia temporal entre uso elevado de recursos y una falla requiere evidencia adicional para atribuir causalidad."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Revisión",
                  "Pregunta que debe resolverse"
                ],
                "filas": [
                  [
                    "Identidad",
                    "¿El dashboard representa el servicio y ambiente correctos?"
                  ],
                  [
                    "Semántica",
                    "¿Qué operación y unidad expresa cada indicador?"
                  ],
                  [
                    "Alcance temporal",
                    "¿El intervalo incluye el caso investigado?"
                  ],
                  [
                    "Agregación",
                    "¿La agrupación permite observar la desviación relevante?"
                  ],
                  [
                    "Cobertura",
                    "¿Existen datos faltantes o componentes no incluidos?"
                  ],
                  [
                    "Mantenimiento",
                    "¿Quién revisa la visualización cuando cambia el servicio?"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Un conjunto de visualizaciones interpretables y mantenidas que permite pasar del comportamiento agregado a la evidencia del caso."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Conducir una investigación operativa"
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitar el impacto.** Registrar qué operación está afectada, desde cuándo y con qué alcance conocido. Diferenciar los resultados confirmados de los que todavía requieren revisión."
              },
              {
                "tipo": "parrafo",
                "texto": "**Construir hipótesis.** Relacionar indicadores, trazas, logs y cambios conocidos. Para cada explicación posible, identificar qué evidencia permitiría confirmarla o descartarla."
              },
              {
                "tipo": "parrafo",
                "texto": "**Coordinar la acción.** Aplicar los procedimientos disponibles dentro de la responsabilidad del equipo. Cuando intervenga una dependencia o capacidad compartida, escalar con el contexto necesario y una descripción del hallazgo, sin asignar una causa no demostrada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificar el resultado.** Repetir las consultas relevantes después de la intervención y comprobar el comportamiento funcional del servicio. Una disminución de señales de error debe contrastarse con tráfico y recepción de datos para descartar una pérdida de visibilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una decisión respaldada por evidencias y una comprobación explícita de su efecto."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Registrar evidencias y mantener la operación"
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro de investigación.** Conservar servicio, ambiente, cuenta, período, filtros o consulta utilizados, observaciones, hipótesis y acción realizada. Incluir referencias que permitan reproducir el análisis con los permisos correspondientes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Tratamiento de información.** Evitar copiar secretos, payloads completos o datos sensibles a tickets y capturas. Compartir únicamente la evidencia necesaria mediante los mecanismos autorizados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Pendientes.** Registrar vacíos de instrumentación, accesos insuficientes o consultas que requieran mantenimiento, con responsable y acción definida. Una limitación de observabilidad debe permanecer visible aunque el incidente funcional se haya resuelto."
              },
              {
                "tipo": "parrafo",
                "texto": "**Mejora continua.** Actualizar dashboards, alertas y runbooks cuando los hallazgos cambien la forma de investigar. Verificar que otro integrante del equipo pueda repetir el recorrido documentado."
              },
              {
                "tipo": "parrafo",
                "texto": "[Validar la implementación](/docs/observabilidad/golden-path?tema=validar) · [Configurar alertas](/docs/observabilidad/golden-path?tema=alertas) · [Diagnosticar la integración](/docs/observabilidad/golden-path?tema=diagnosticar)."
              },
              {
                "tipo": "parrafo",
                "texto": "[Dashboards](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1383923802) · [Infraestructura](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1471217856)."
              }
            ],
            "fuentes": []
          },
          {
            "id": "alertas",
            "titulo": "Configurar alertas y notificaciones",
            "bajada": "Procedimientos de alertas, Teams y AWS Connect.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Configurar alertas y notificaciones"
              },
              {
                "tipo": "parrafo",
                "texto": "**La configuración implementa los acuerdos de respuesta definidos en Gobierno.** Consultar el procedimiento vigente y utilizar el rol autorizado para cada cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de implementación.** Transformar una condición observable en una notificación que llegue al equipo correcto y permita iniciar una acción definida. La validación comprende detección, entrega, interpretación y recuperación; guardar una configuración no demuestra que ese recorrido funcione."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Definición previa",
                  "Información necesaria"
                ],
                "filas": [
                  [
                    "Servicio y ambiente",
                    "Ámbito que observará la alerta"
                  ],
                  [
                    "Propósito",
                    "Situación que requiere intervención y su impacto"
                  ],
                  [
                    "Condición",
                    "Indicador, filtros, ventana y umbral acordados"
                  ],
                  [
                    "Responsabilidad",
                    "Equipo receptor y escalamiento aplicable"
                  ],
                  [
                    "Destino",
                    "Integración habilitada para la respuesta prevista"
                  ],
                  [
                    "Procedimiento",
                    "Evidencias a revisar y acciones permitidas"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los nombres de campos, opciones disponibles y pasos de interfaz se consultan en las guías enlazadas. Los valores de ejemplo no constituyen umbrales corporativos universales."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Definir la alerta",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Seleccionar indicador, condición, ventana y umbral adecuados al servicio. La guía documenta alertas de métricas y restricciones para alertas de logs."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Delimitar el caso.** Describir qué comportamiento necesita detección y por qué requiere una respuesta. Identificar el servicio, ambiente y equipo que investigará la condición."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Confirmar la fuente.** Verificar que el indicador existe y representa el hecho esperado. Revisar unidad, filtros y agrupaciones antes de utilizarlo como condición; una consulta válida puede estar evaluando otro ambiente o agregando operaciones distintas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Definir la evaluación.** Seleccionar una ventana y un umbral coherentes con el comportamiento conocido del servicio. Contrastar períodos normales y situaciones representativas de degradación para evitar decisiones basadas únicamente en un pico aislado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Revisar casos especiales.** Precisar cómo se interpretarán tráfico bajo, falta de datos y recuperación conforme a las opciones disponibles. La ausencia de muestras no debe confundirse automáticamente con funcionamiento normal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**5. Preparar la identificación.** Utilizar una denominación que permita reconocer servicio, ambiente y condición. Asociar el responsable y el procedimiento operativo mediante los mecanismos disponibles."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Elemento",
                          "Comprobación antes de habilitar"
                        ],
                        "filas": [
                          [
                            "Indicador",
                            "Su significado y unidad son conocidos"
                          ],
                          [
                            "Filtros",
                            "Delimitan el servicio y ambiente previstos"
                          ],
                          [
                            "Agrupación",
                            "Produce el alcance de detección esperado"
                          ],
                          [
                            "Ventana y umbral",
                            "Responden al caso operativo acordado"
                          ],
                          [
                            "Falta de datos",
                            "Su tratamiento está revisado o queda explícitamente pendiente"
                          ],
                          [
                            "Recuperación",
                            "Se conoce cómo comprobar el retorno a la condición esperada"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una condición comprensible, con alcance definido y evidencia de que responde a la necesidad del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Alertas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1395294222)."
                      }
                    ]
                  },
                  {
                    "titulo": "Conectar el destino",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Aplicar la guía de Teams mediante Workflow o de llamadas mediante AWS Connect según la respuesta acordada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Confirmar el canal.** Identificar la integración aprobada para el equipo receptor y el caso de uso. Un canal de colaboración y una llamada tienen funciones diferentes; su selección debe corresponder a la respuesta acordada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Revisar permisos y responsables.** Confirmar quién puede configurar la integración en la cuenta y quién mantiene el destino. La guía de roles reserva la creación de alertas y webhooks a Observability Lead; verificar los permisos efectivos antes de realizar cambios."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Aplicar la guía específica.** Para Teams, utilizar el procedimiento documentado mediante Workflow; para llamadas, seguir la integración de AWS Connect. Confirmar los valores del entorno sin reutilizar destinos o credenciales de otros servicios por analogía."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Revisar el mensaje.** Incluir contexto suficiente para que el receptor reconozca la condición y pueda acceder a la evidencia. Evitar secretos, datos sensibles y payloads completos en notificaciones o capturas."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**5. Asegurar mantenimiento.** Identificar al responsable del destino y revisar dependencias de permisos o configuración cuando cambie el equipo. Documentar cómo coordinar un cambio sin interrumpir notificaciones de otros consumidores."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Destino documentado",
                          "Aspecto a verificar"
                        ],
                        "filas": [
                          [
                            "Teams mediante Workflow",
                            "La notificación llega al espacio acordado y puede interpretarse"
                          ],
                          [
                            "Llamadas mediante AWS Connect",
                            "La prueba alcanza al receptor previsto según la integración configurada"
                          ],
                          [
                            "Procedimiento enlazado",
                            "El equipo receptor tiene acceso y conoce los pasos iniciales"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La alerta está asociada al destino correcto y existe un responsable de mantener la integración y su alcance."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Teams](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1437663281) · [AWS Connect](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1879998531)."
                      }
                    ]
                  },
                  {
                    "titulo": "Validar la respuesta",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Realizar una prueba controlada con el equipo receptor, comprobar entrega y escalamiento, y mantener el procedimiento operativo asociado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar la prueba.** Acordar momento, alcance y resultado esperado con los destinatarios. Utilizar un entorno y mecanismo de prueba adecuados para evitar provocar una degradación productiva o activar una respuesta real de forma inesperada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comprobar detección.** Ejecutar un escenario que satisfaga la condición mediante el procedimiento de prueba disponible. Revisar que la alerta evalúa el servicio, ambiente y período previstos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comprobar entrega.** Confirmar la recepción efectiva con el destinatario. Registrar diferencias entre activación y notificación para distinguir problemas de evaluación de problemas del canal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comprobar interpretación.** Pedir al equipo receptor que identifique el caso, abra las evidencias y encuentre el procedimiento. La entrega técnica no acredita que el mensaje sea suficiente ni que el receptor tenga acceso a los recursos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comprobar recuperación.** Validar el comportamiento cuando deja de cumplirse la condición, según las opciones configuradas. Revisar también repeticiones o notificaciones superpuestas que puedan dificultar la respuesta."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Escenario",
                          "Evidencia esperada"
                        ],
                        "filas": [
                          [
                            "Condición cumplida",
                            "Activación correspondiente al ámbito evaluado"
                          ],
                          [
                            "Condición no cumplida",
                            "Ausencia de activación inesperada en el caso probado"
                          ],
                          [
                            "Entrega",
                            "Confirmación del receptor y contexto correcto"
                          ],
                          [
                            "Investigación",
                            "Acceso funcional a consultas y procedimiento"
                          ],
                          [
                            "Recuperación",
                            "Comportamiento coherente con la configuración revisada"
                          ],
                          [
                            "Escalamiento",
                            "Mecanismo conocido y probado cuando forme parte del alcance acordado"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El recorrido desde la condición hasta la respuesta se ha comprobado, con limitaciones y pendientes explícitos."
                      }
                    ]
                  },
                  {
                    "titulo": "Diagnosticar una notificación ausente",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Acotar el punto de falla.** Separar la evaluación del indicador, la activación de la alerta, la integración del destino y la recepción. Registrar el último paso confirmado antes de modificar la configuración."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Observación",
                          "Revisión inicial"
                        ],
                        "filas": [
                          [
                            "La alerta no se activa",
                            "Datos disponibles, filtros, ventana y condición"
                          ],
                          [
                            "La alerta se activa pero no llega el mensaje",
                            "Destino asociado y errores de integración disponibles"
                          ],
                          [
                            "El mensaje llega al lugar incorrecto",
                            "Configuración del destinatario y ambiente"
                          ],
                          [
                            "El receptor no puede investigar",
                            "Permisos y referencias incluidas en la notificación"
                          ],
                          [
                            "Hay notificaciones repetidas",
                            "Condiciones superpuestas y comportamiento configurado de repetición y recuperación"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Coordinar la corrección.** Revisar con el responsable de la cuenta o del canal el tramo afectado. Mantener evidencias sanitizadas y repetir la prueba de recepción después del cambio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La corrección responde a un hallazgo identificado y su efecto se confirma con el equipo receptor."
                      }
                    ]
                  },
                  {
                    "titulo": "Mantener alertas y destinos",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro operativo.** Conservar propósito, servicio, ambiente, responsable, destino, referencia al procedimiento y fecha o alcance de la última validación. Registrar la configuración por mecanismos que no expongan secretos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisiones por cambio.** Revalidar cuando cambien indicadores, identidad del servicio, cuentas, responsables o integraciones de notificación. Revisar también alertas que dejan de representar una situación accionable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Retiro y ajuste.** Antes de deshabilitar una alerta o destino, identificar dependencias y consumidores. Confirmar que la cobertura necesaria se conserva o que la responsabilidad operativa acepta el cambio mediante el proceso aplicable."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cierre de implementación.** Diferenciar pruebas satisfactorias, hallazgos y verificaciones pendientes. Mantener responsables de las acciones abiertas y comprobar su cierre."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Responsabilidades y decisiones](/docs/observabilidad/gobierno?tema=decisiones) · [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) · [Consultar y operar](/docs/observabilidad/golden-path?tema=operar)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Configurar alertas y notificaciones"
              },
              {
                "tipo": "parrafo",
                "texto": "**La configuración implementa los acuerdos de respuesta definidos en Gobierno.** Consultar el procedimiento vigente y utilizar el rol autorizado para cada cuenta."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo de implementación.** Transformar una condición observable en una notificación que llegue al equipo correcto y permita iniciar una acción definida. La validación comprende detección, entrega, interpretación y recuperación; guardar una configuración no demuestra que ese recorrido funcione."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Definición previa",
                  "Información necesaria"
                ],
                "filas": [
                  [
                    "Servicio y ambiente",
                    "Ámbito que observará la alerta"
                  ],
                  [
                    "Propósito",
                    "Situación que requiere intervención y su impacto"
                  ],
                  [
                    "Condición",
                    "Indicador, filtros, ventana y umbral acordados"
                  ],
                  [
                    "Responsabilidad",
                    "Equipo receptor y escalamiento aplicable"
                  ],
                  [
                    "Destino",
                    "Integración habilitada para la respuesta prevista"
                  ],
                  [
                    "Procedimiento",
                    "Evidencias a revisar y acciones permitidas"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Los nombres de campos, opciones disponibles y pasos de interfaz se consultan en las guías enlazadas. Los valores de ejemplo no constituyen umbrales corporativos universales."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Definir la alerta"
              },
              {
                "tipo": "parrafo",
                "texto": "Seleccionar indicador, condición, ventana y umbral adecuados al servicio. La guía documenta alertas de métricas y restricciones para alertas de logs."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Delimitar el caso.** Describir qué comportamiento necesita detección y por qué requiere una respuesta. Identificar el servicio, ambiente y equipo que investigará la condición."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Confirmar la fuente.** Verificar que el indicador existe y representa el hecho esperado. Revisar unidad, filtros y agrupaciones antes de utilizarlo como condición; una consulta válida puede estar evaluando otro ambiente o agregando operaciones distintas."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Definir la evaluación.** Seleccionar una ventana y un umbral coherentes con el comportamiento conocido del servicio. Contrastar períodos normales y situaciones representativas de degradación para evitar decisiones basadas únicamente en un pico aislado."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Revisar casos especiales.** Precisar cómo se interpretarán tráfico bajo, falta de datos y recuperación conforme a las opciones disponibles. La ausencia de muestras no debe confundirse automáticamente con funcionamiento normal."
              },
              {
                "tipo": "parrafo",
                "texto": "**5. Preparar la identificación.** Utilizar una denominación que permita reconocer servicio, ambiente y condición. Asociar el responsable y el procedimiento operativo mediante los mecanismos disponibles."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Elemento",
                  "Comprobación antes de habilitar"
                ],
                "filas": [
                  [
                    "Indicador",
                    "Su significado y unidad son conocidos"
                  ],
                  [
                    "Filtros",
                    "Delimitan el servicio y ambiente previstos"
                  ],
                  [
                    "Agrupación",
                    "Produce el alcance de detección esperado"
                  ],
                  [
                    "Ventana y umbral",
                    "Responden al caso operativo acordado"
                  ],
                  [
                    "Falta de datos",
                    "Su tratamiento está revisado o queda explícitamente pendiente"
                  ],
                  [
                    "Recuperación",
                    "Se conoce cómo comprobar el retorno a la condición esperada"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una condición comprensible, con alcance definido y evidencia de que responde a la necesidad del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "[Alertas en Coralogix](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1395294222)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Conectar el destino"
              },
              {
                "tipo": "parrafo",
                "texto": "Aplicar la guía de Teams mediante Workflow o de llamadas mediante AWS Connect según la respuesta acordada."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Confirmar el canal.** Identificar la integración aprobada para el equipo receptor y el caso de uso. Un canal de colaboración y una llamada tienen funciones diferentes; su selección debe corresponder a la respuesta acordada."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Revisar permisos y responsables.** Confirmar quién puede configurar la integración en la cuenta y quién mantiene el destino. La guía de roles reserva la creación de alertas y webhooks a Observability Lead; verificar los permisos efectivos antes de realizar cambios."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Aplicar la guía específica.** Para Teams, utilizar el procedimiento documentado mediante Workflow; para llamadas, seguir la integración de AWS Connect. Confirmar los valores del entorno sin reutilizar destinos o credenciales de otros servicios por analogía."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Revisar el mensaje.** Incluir contexto suficiente para que el receptor reconozca la condición y pueda acceder a la evidencia. Evitar secretos, datos sensibles y payloads completos en notificaciones o capturas."
              },
              {
                "tipo": "parrafo",
                "texto": "**5. Asegurar mantenimiento.** Identificar al responsable del destino y revisar dependencias de permisos o configuración cuando cambie el equipo. Documentar cómo coordinar un cambio sin interrumpir notificaciones de otros consumidores."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Destino documentado",
                  "Aspecto a verificar"
                ],
                "filas": [
                  [
                    "Teams mediante Workflow",
                    "La notificación llega al espacio acordado y puede interpretarse"
                  ],
                  [
                    "Llamadas mediante AWS Connect",
                    "La prueba alcanza al receptor previsto según la integración configurada"
                  ],
                  [
                    "Procedimiento enlazado",
                    "El equipo receptor tiene acceso y conoce los pasos iniciales"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La alerta está asociada al destino correcto y existe un responsable de mantener la integración y su alcance."
              },
              {
                "tipo": "parrafo",
                "texto": "[Teams](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1437663281) · [AWS Connect](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1879998531)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Validar la respuesta"
              },
              {
                "tipo": "parrafo",
                "texto": "Realizar una prueba controlada con el equipo receptor, comprobar entrega y escalamiento, y mantener el procedimiento operativo asociado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar la prueba.** Acordar momento, alcance y resultado esperado con los destinatarios. Utilizar un entorno y mecanismo de prueba adecuados para evitar provocar una degradación productiva o activar una respuesta real de forma inesperada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comprobar detección.** Ejecutar un escenario que satisfaga la condición mediante el procedimiento de prueba disponible. Revisar que la alerta evalúa el servicio, ambiente y período previstos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comprobar entrega.** Confirmar la recepción efectiva con el destinatario. Registrar diferencias entre activación y notificación para distinguir problemas de evaluación de problemas del canal."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comprobar interpretación.** Pedir al equipo receptor que identifique el caso, abra las evidencias y encuentre el procedimiento. La entrega técnica no acredita que el mensaje sea suficiente ni que el receptor tenga acceso a los recursos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comprobar recuperación.** Validar el comportamiento cuando deja de cumplirse la condición, según las opciones configuradas. Revisar también repeticiones o notificaciones superpuestas que puedan dificultar la respuesta."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Escenario",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Condición cumplida",
                    "Activación correspondiente al ámbito evaluado"
                  ],
                  [
                    "Condición no cumplida",
                    "Ausencia de activación inesperada en el caso probado"
                  ],
                  [
                    "Entrega",
                    "Confirmación del receptor y contexto correcto"
                  ],
                  [
                    "Investigación",
                    "Acceso funcional a consultas y procedimiento"
                  ],
                  [
                    "Recuperación",
                    "Comportamiento coherente con la configuración revisada"
                  ],
                  [
                    "Escalamiento",
                    "Mecanismo conocido y probado cuando forme parte del alcance acordado"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El recorrido desde la condición hasta la respuesta se ha comprobado, con limitaciones y pendientes explícitos."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Diagnosticar una notificación ausente"
              },
              {
                "tipo": "parrafo",
                "texto": "**Acotar el punto de falla.** Separar la evaluación del indicador, la activación de la alerta, la integración del destino y la recepción. Registrar el último paso confirmado antes de modificar la configuración."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Observación",
                  "Revisión inicial"
                ],
                "filas": [
                  [
                    "La alerta no se activa",
                    "Datos disponibles, filtros, ventana y condición"
                  ],
                  [
                    "La alerta se activa pero no llega el mensaje",
                    "Destino asociado y errores de integración disponibles"
                  ],
                  [
                    "El mensaje llega al lugar incorrecto",
                    "Configuración del destinatario y ambiente"
                  ],
                  [
                    "El receptor no puede investigar",
                    "Permisos y referencias incluidas en la notificación"
                  ],
                  [
                    "Hay notificaciones repetidas",
                    "Condiciones superpuestas y comportamiento configurado de repetición y recuperación"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Coordinar la corrección.** Revisar con el responsable de la cuenta o del canal el tramo afectado. Mantener evidencias sanitizadas y repetir la prueba de recepción después del cambio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La corrección responde a un hallazgo identificado y su efecto se confirma con el equipo receptor."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Mantener alertas y destinos"
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro operativo.** Conservar propósito, servicio, ambiente, responsable, destino, referencia al procedimiento y fecha o alcance de la última validación. Registrar la configuración por mecanismos que no expongan secretos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisiones por cambio.** Revalidar cuando cambien indicadores, identidad del servicio, cuentas, responsables o integraciones de notificación. Revisar también alertas que dejan de representar una situación accionable."
              },
              {
                "tipo": "parrafo",
                "texto": "**Retiro y ajuste.** Antes de deshabilitar una alerta o destino, identificar dependencias y consumidores. Confirmar que la cobertura necesaria se conserva o que la responsabilidad operativa acepta el cambio mediante el proceso aplicable."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cierre de implementación.** Diferenciar pruebas satisfactorias, hallazgos y verificaciones pendientes. Mantener responsables de las acciones abiertas y comprobar su cierre."
              },
              {
                "tipo": "parrafo",
                "texto": "[Responsabilidades y decisiones](/docs/observabilidad/gobierno?tema=decisiones) · [Identidad y accesos](/docs/observabilidad/gobierno?tema=accesos) · [Consultar y operar](/docs/observabilidad/golden-path?tema=operar)."
              }
            ],
            "fuentes": []
          },
          {
            "id": "eventos-rum",
            "titulo": "Implementar eventos y RUM",
            "bajada": "Hechos de negocio y experiencia en frontend.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Una compra pagada también cuenta una historia"
              },
              {
                "tipo": "parrafo",
                "texto": "**Ægis Events permite registrar y consultar hechos de negocio definidos por el producto.** Recibe eventos mediante API o librería, los procesa y permite analizarlos en Metabase. Una compra pagada es un ejemplo de resultado funcional; su significado debe distinguirse del intento de pago o de la recepción de una solicitud."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Integración",
                  "Propósito",
                  "Evidencia de implementación"
                ],
                "filas": [
                  [
                    "Ægis Events",
                    "Registrar un hecho de negocio con estructura y significado acordados",
                    "Evento de prueba localizado e interpretado en su destino"
                  ],
                  [
                    "RUM",
                    "Observar interacciones y errores del frontend",
                    "Evidencia del navegador consultable en el ámbito previsto"
                  ],
                  [
                    "Instrumentación backend",
                    "Comprender la ejecución técnica del servicio",
                    "Señales de operaciones y dependencias"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Estas rutas pueden complementar la observabilidad de un producto. Cada una requiere confirmar productor, configuración, credenciales y destino; habilitar una no acredita el funcionamiento de las demás."
              },
              {
                "tipo": "parrafo",
                "texto": "La arquitectura documenta **productor → event-validator → Kinesis / Firehose → MongoDB y S3 → Metabase**. Es una ruta distinta del pipeline OTEL. Las garantías dependen de cada etapa, su configuración y operación; una aceptación de ingesta no prueba por sí sola la persistencia final."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [implementación de eventos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417), [arquitectura de solución](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1517551617)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Definir el hecho",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Elegir un hito como OrdenPagada. Acordar `eventName`, `eventTypeId`, `schemaVersion`, `timestamp`, contexto de origen y payload pertinente. Diferenciar un hecho de negocio de un detalle técnico."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Semántica.** Precisar qué condición confirma el hecho y qué componente tiene autoridad funcional para emitirlo. Evitar que distintos productores utilicen el mismo nombre para resultados diferentes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contrato de datos.** Documentar el significado de los campos y contrastar obligatoriedad, tipos y formatos con el esquema aplicable. Revisar el propósito de cada atributo y excluir información sensible que no sea necesaria."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Momento de emisión.** Definir cuándo se registra el evento respecto del resultado funcional. Identificar qué ocurre si el proceso falla o vuelve a ejecutarse para orientar la revisión de reintentos y duplicados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evolución.** Evaluar cambios de esquema considerando productores y consultas consumidoras. La presencia de `schemaVersion` no sustituye la comprobación de compatibilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Un contrato que permite interpretar el hecho de forma consistente y preparar un evento sintético para su validación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Modelo de datos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1537441855)."
                      }
                    ]
                  },
                  {
                    "titulo": "Habilitar al productor",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Solicitar la API key al equipo correspondiente y confirmar el ecosistema Legacy o Pulsar. Gestionar la credencial como secreto. La habilitación del consumer no sustituye la validación del evento enviado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identificar la integración.** Confirmar aplicación productora, ambiente, mecanismo de envío y guía aplicable. Registrar los responsables del productor y de la capacidad que recibe y procesa los eventos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Configurar el acceso.** Obtener el destino y las referencias a credenciales mediante el procedimiento documentado. Mantener valores privados fuera del repositorio, de las evidencias y del código publicado al navegador."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar el envío.** Verificar que la versión de la librería o el contrato de API corresponde al entorno. Los nombres de métodos, formatos y límites concretos se consultan en la guía; no se deducen del recorrido lógico."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El productor cuenta con configuración identificada y autorización de envío aplicable al ambiente que se validará."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Habilitación de equipos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809711173)."
                      }
                    ]
                  },
                  {
                    "titulo": "Enviar y verificar el resultado",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar validación, límites, idempotencia y respuestas parciales. La librería documenta reintentos y manejo de registros fallidos; un 207 requiere inspeccionar qué eventos fallaron."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Caso válido.** Enviar un evento sintético con resultado funcional conocido y registrar su referencia, ambiente y hora. Revisar la respuesta completa y conservar evidencia sanitizada del resultado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Caso rechazado.** Preparar una prueba controlada que incumpla el contrato y comprobar cómo se informa el rechazo. La aplicación debe poder diferenciar el fallo de envío del resultado de negocio que intenta registrar."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Respuesta parcial.** Cuando se envían varios registros, verificar el resultado individual antes de considerar exitoso el conjunto. Identificar qué registros requieren tratamiento y revisar el comportamiento de la integración frente a su reenvío."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Reintentos y duplicados.** Confirmar las garantías y mecanismos documentados antes de asumir entrega única. Probar el comportamiento aplicable al caso y comprobar su efecto sobre la consulta final."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Escenario",
                          "Comprobación"
                        ],
                        "filas": [
                          [
                            "Evento válido",
                            "Respuesta coherente y posterior localización en destino"
                          ],
                          [
                            "Evento inválido",
                            "Rechazo identificable y tratamiento por el productor"
                          ],
                          [
                            "Resultado parcial",
                            "Distinción entre registros aceptados y fallidos"
                          ],
                          [
                            "Reenvío",
                            "Comportamiento de duplicados verificado según la integración"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El productor interpreta las respuestas y puede gestionar fallas sin confundir aceptación de ingesta con persistencia final."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Librería TypeScript](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1535836164) · [event-validator](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1536688141)."
                      }
                    ]
                  },
                  {
                    "titulo": "Conservar y consultar",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Definir retención según propósito; comprobar persistencia, índices, deduplicación y disponibilidad en Metabase. Los componentes de sincronización mantienen índices y esquema; la consulta final debe verificarse con un evento de prueba."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificación de destino.** Localizar el evento sintético y contrastar nombre, versión, contexto y campos con el contrato. Si no aparece, acotar el diagnóstico por etapa antes de asumir un problema de visualización."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validación de consulta.** Confirmar que los filtros y agrupaciones representan el hecho acordado. Revisar duplicados o registros incompletos que puedan distorsionar conteos y resultados de negocio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Conservación y acceso.** Identificar quién mantiene el conjunto de datos, quién puede consultarlo y qué criterios de tratamiento aplican. No utilizar un período universal para eventos con propósitos distintos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cierre.** Registrar productor, contrato, prueba, evidencia consultable y pendientes. Mantener identificados los consumidores que deben revisarse cuando cambie el esquema o la integración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[event-consumer](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1537015811) · [Sincronización de índices](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1853194329) · [Sincronización de Metabase](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1891663881)."
                      }
                    ]
                  }
                ]
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Implementar RUM"
              },
              {
                "tipo": "parrafo",
                "texto": "**RUM incorpora evidencia de la experiencia real en el navegador.** Su integración y credenciales son específicas de frontend."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo.** Comprobar que una interacción o un error del frontend produce información útil para investigar la experiencia del usuario. La revisión abarca configuración, versión publicada, captura de datos y consulta del caso."
              },
              {
                "tipo": "parrafo",
                "texto": "RUM y los eventos de negocio responden a preguntas diferentes. Una interacción observada en el navegador no confirma por sí sola que el backend haya completado una operación de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Coralogix RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "Integrar frontend",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Aplicar el SDK según la guía del framework y utilizar la clave pública específica de RUM. Mantener las credenciales privadas de backend y administración en el mecanismo de secretos correspondiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar.** Identificar aplicación, framework, ambiente y proceso de construcción y publicación. Registrar qué recorridos requieren observación y quién mantendrá la integración."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Inicializar.** Aplicar el mecanismo documentado para el framework y revisar integraciones preexistentes. Comprobar que la configuración publicada corresponde al entorno real y que no introduce captura duplicada no prevista."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitar captura.** Revisar los campos y eventos generados con datos sintéticos. Confirmar el tratamiento de información y cualquier requisito corporativo de privacidad antes de ampliar el alcance."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificar configuración.** Distinguir los valores destinados al navegador de las credenciales privadas utilizadas por otros procesos. Revisar el artefacto final, además de la configuración local."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una integración identificable por aplicación y ambiente, con alcance de captura revisado y sin credenciales privadas en el frontend."
                      }
                    ]
                  },
                  {
                    "titulo": "Validar experiencia",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Preparar source maps desde el flujo de build autorizado y comprobar errores de JavaScript y solicitudes de red. Revisar los datos capturados según el propósito del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Interacción conocida.** Ejecutar un recorrido representativo en la versión publicada y registrar el período de prueba. Comprobar que la información recibida corresponde a esa aplicación y ambiente."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Error controlado.** Verificar un error en un entorno adecuado y revisar si la evidencia permite identificar el caso. Cuando se utilicen source maps, confirmar su correspondencia con la versión evaluada y el mecanismo de publicación autorizado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Solicitudes de red.** Revisar las evidencias disponibles de llamadas y resultados. Contrastar con el backend cuando sea necesario; la asociación debe comprobarse y no inferirse únicamente por cercanía temporal."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Tratamiento de datos.** Inspeccionar las señales recibidas y comprobar que conservan el contexto necesario sin incluir campos sensibles innecesarios. Registrar hallazgos sin reproducir el dato sensible en capturas o tickets."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Caso de prueba",
                          "Evidencia esperada"
                        ],
                        "filas": [
                          [
                            "Interacción representativa",
                            "Actividad localizable en la aplicación y ambiente previstos"
                          ],
                          [
                            "Error de frontend",
                            "Contexto suficiente para investigar el caso"
                          ],
                          [
                            "Consulta de red",
                            "Información interpretable dentro de la cobertura disponible"
                          ],
                          [
                            "Source maps, si aplican",
                            "Correspondencia con la versión publicada"
                          ],
                          [
                            "Revisión de captura",
                            "Campos contrastados con el tratamiento acordado"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo puede reproducir una investigación de experiencia y conoce la cobertura y las limitaciones de la integración."
                      }
                    ]
                  },
                  {
                    "titulo": "Mantener eventos y experiencia del usuario",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Registro por integración.** Mantener separados contrato de eventos, configuración RUM, responsables y evidencias de prueba. Identificar las dependencias entre frontend, backend y consultas de negocio cuando existan."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisión por cambio.** Revalidar ante cambios de esquema, SDK, framework, configuración de captura o proceso de build. Incluir los consumidores de datos y la correspondencia de versiones en la revisión."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Diagnóstico.** Si falta evidencia, revisar primero generación, configuración y destino. Distinguir un evento rechazado, un dato todavía no localizado y una consulta con filtros incorrectos mediante las evidencias disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Ambas integraciones mantienen responsables y criterios de validación durante su ciclo de vida, con pendientes explícitos cuando no pueda comprobarse una capacidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Seguridad](/docs/observabilidad/gobierno?tema=seguridad) · [Validar la implementación](/docs/observabilidad/golden-path?tema=validar) · [Diagnosticar](/docs/observabilidad/golden-path?tema=diagnosticar)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Una compra pagada también cuenta una historia"
              },
              {
                "tipo": "parrafo",
                "texto": "**Ægis Events permite registrar y consultar hechos de negocio definidos por el producto.** Recibe eventos mediante API o librería, los procesa y permite analizarlos en Metabase. Una compra pagada es un ejemplo de resultado funcional; su significado debe distinguirse del intento de pago o de la recepción de una solicitud."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Integración",
                  "Propósito",
                  "Evidencia de implementación"
                ],
                "filas": [
                  [
                    "Ægis Events",
                    "Registrar un hecho de negocio con estructura y significado acordados",
                    "Evento de prueba localizado e interpretado en su destino"
                  ],
                  [
                    "RUM",
                    "Observar interacciones y errores del frontend",
                    "Evidencia del navegador consultable en el ámbito previsto"
                  ],
                  [
                    "Instrumentación backend",
                    "Comprender la ejecución técnica del servicio",
                    "Señales de operaciones y dependencias"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Estas rutas pueden complementar la observabilidad de un producto. Cada una requiere confirmar productor, configuración, credenciales y destino; habilitar una no acredita el funcionamiento de las demás."
              },
              {
                "tipo": "parrafo",
                "texto": "La arquitectura documenta **productor → event-validator → Kinesis / Firehose → MongoDB y S3 → Metabase**. Es una ruta distinta del pipeline OTEL. Las garantías dependen de cada etapa, su configuración y operación; una aceptación de ingesta no prueba por sí sola la persistencia final."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [implementación de eventos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417), [arquitectura de solución](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1517551617)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Definir el hecho"
              },
              {
                "tipo": "parrafo",
                "texto": "Elegir un hito como OrdenPagada. Acordar `eventName`, `eventTypeId`, `schemaVersion`, `timestamp`, contexto de origen y payload pertinente. Diferenciar un hecho de negocio de un detalle técnico."
              },
              {
                "tipo": "parrafo",
                "texto": "**Semántica.** Precisar qué condición confirma el hecho y qué componente tiene autoridad funcional para emitirlo. Evitar que distintos productores utilicen el mismo nombre para resultados diferentes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contrato de datos.** Documentar el significado de los campos y contrastar obligatoriedad, tipos y formatos con el esquema aplicable. Revisar el propósito de cada atributo y excluir información sensible que no sea necesaria."
              },
              {
                "tipo": "parrafo",
                "texto": "**Momento de emisión.** Definir cuándo se registra el evento respecto del resultado funcional. Identificar qué ocurre si el proceso falla o vuelve a ejecutarse para orientar la revisión de reintentos y duplicados."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evolución.** Evaluar cambios de esquema considerando productores y consultas consumidoras. La presencia de `schemaVersion` no sustituye la comprobación de compatibilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Un contrato que permite interpretar el hecho de forma consistente y preparar un evento sintético para su validación."
              },
              {
                "tipo": "parrafo",
                "texto": "[Modelo de datos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1537441855)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Habilitar al productor"
              },
              {
                "tipo": "parrafo",
                "texto": "Solicitar la API key al equipo correspondiente y confirmar el ecosistema Legacy o Pulsar. Gestionar la credencial como secreto. La habilitación del consumer no sustituye la validación del evento enviado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identificar la integración.** Confirmar aplicación productora, ambiente, mecanismo de envío y guía aplicable. Registrar los responsables del productor y de la capacidad que recibe y procesa los eventos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Configurar el acceso.** Obtener el destino y las referencias a credenciales mediante el procedimiento documentado. Mantener valores privados fuera del repositorio, de las evidencias y del código publicado al navegador."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar el envío.** Verificar que la versión de la librería o el contrato de API corresponde al entorno. Los nombres de métodos, formatos y límites concretos se consultan en la guía; no se deducen del recorrido lógico."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El productor cuenta con configuración identificada y autorización de envío aplicable al ambiente que se validará."
              },
              {
                "tipo": "parrafo",
                "texto": "[Habilitación de equipos](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809711173)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Enviar y verificar el resultado"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar validación, límites, idempotencia y respuestas parciales. La librería documenta reintentos y manejo de registros fallidos; un 207 requiere inspeccionar qué eventos fallaron."
              },
              {
                "tipo": "parrafo",
                "texto": "**Caso válido.** Enviar un evento sintético con resultado funcional conocido y registrar su referencia, ambiente y hora. Revisar la respuesta completa y conservar evidencia sanitizada del resultado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Caso rechazado.** Preparar una prueba controlada que incumpla el contrato y comprobar cómo se informa el rechazo. La aplicación debe poder diferenciar el fallo de envío del resultado de negocio que intenta registrar."
              },
              {
                "tipo": "parrafo",
                "texto": "**Respuesta parcial.** Cuando se envían varios registros, verificar el resultado individual antes de considerar exitoso el conjunto. Identificar qué registros requieren tratamiento y revisar el comportamiento de la integración frente a su reenvío."
              },
              {
                "tipo": "parrafo",
                "texto": "**Reintentos y duplicados.** Confirmar las garantías y mecanismos documentados antes de asumir entrega única. Probar el comportamiento aplicable al caso y comprobar su efecto sobre la consulta final."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Escenario",
                  "Comprobación"
                ],
                "filas": [
                  [
                    "Evento válido",
                    "Respuesta coherente y posterior localización en destino"
                  ],
                  [
                    "Evento inválido",
                    "Rechazo identificable y tratamiento por el productor"
                  ],
                  [
                    "Resultado parcial",
                    "Distinción entre registros aceptados y fallidos"
                  ],
                  [
                    "Reenvío",
                    "Comportamiento de duplicados verificado según la integración"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El productor interpreta las respuestas y puede gestionar fallas sin confundir aceptación de ingesta con persistencia final."
              },
              {
                "tipo": "parrafo",
                "texto": "[Librería TypeScript](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1535836164) · [event-validator](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1536688141)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Conservar y consultar"
              },
              {
                "tipo": "parrafo",
                "texto": "Definir retención según propósito; comprobar persistencia, índices, deduplicación y disponibilidad en Metabase. Los componentes de sincronización mantienen índices y esquema; la consulta final debe verificarse con un evento de prueba."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificación de destino.** Localizar el evento sintético y contrastar nombre, versión, contexto y campos con el contrato. Si no aparece, acotar el diagnóstico por etapa antes de asumir un problema de visualización."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validación de consulta.** Confirmar que los filtros y agrupaciones representan el hecho acordado. Revisar duplicados o registros incompletos que puedan distorsionar conteos y resultados de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Conservación y acceso.** Identificar quién mantiene el conjunto de datos, quién puede consultarlo y qué criterios de tratamiento aplican. No utilizar un período universal para eventos con propósitos distintos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cierre.** Registrar productor, contrato, prueba, evidencia consultable y pendientes. Mantener identificados los consumidores que deben revisarse cuando cambie el esquema o la integración."
              },
              {
                "tipo": "parrafo",
                "texto": "[event-consumer](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1537015811) · [Sincronización de índices](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1853194329) · [Sincronización de Metabase](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1891663881)."
              },
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Implementar RUM"
              },
              {
                "tipo": "parrafo",
                "texto": "**RUM incorpora evidencia de la experiencia real en el navegador.** Su integración y credenciales son específicas de frontend."
              },
              {
                "tipo": "parrafo",
                "texto": "**Objetivo.** Comprobar que una interacción o un error del frontend produce información útil para investigar la experiencia del usuario. La revisión abarca configuración, versión publicada, captura de datos y consulta del caso."
              },
              {
                "tipo": "parrafo",
                "texto": "RUM y los eventos de negocio responden a preguntas diferentes. Una interacción observada en el navegador no confirma por sí sola que el backend haya completado una operación de negocio."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuente: [Coralogix RUM](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Integrar frontend"
              },
              {
                "tipo": "parrafo",
                "texto": "Aplicar el SDK según la guía del framework y utilizar la clave pública específica de RUM. Mantener las credenciales privadas de backend y administración en el mecanismo de secretos correspondiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar.** Identificar aplicación, framework, ambiente y proceso de construcción y publicación. Registrar qué recorridos requieren observación y quién mantendrá la integración."
              },
              {
                "tipo": "parrafo",
                "texto": "**Inicializar.** Aplicar el mecanismo documentado para el framework y revisar integraciones preexistentes. Comprobar que la configuración publicada corresponde al entorno real y que no introduce captura duplicada no prevista."
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitar captura.** Revisar los campos y eventos generados con datos sintéticos. Confirmar el tratamiento de información y cualquier requisito corporativo de privacidad antes de ampliar el alcance."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificar configuración.** Distinguir los valores destinados al navegador de las credenciales privadas utilizadas por otros procesos. Revisar el artefacto final, además de la configuración local."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una integración identificable por aplicación y ambiente, con alcance de captura revisado y sin credenciales privadas en el frontend."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Validar experiencia"
              },
              {
                "tipo": "parrafo",
                "texto": "Preparar source maps desde el flujo de build autorizado y comprobar errores de JavaScript y solicitudes de red. Revisar los datos capturados según el propósito del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Interacción conocida.** Ejecutar un recorrido representativo en la versión publicada y registrar el período de prueba. Comprobar que la información recibida corresponde a esa aplicación y ambiente."
              },
              {
                "tipo": "parrafo",
                "texto": "**Error controlado.** Verificar un error en un entorno adecuado y revisar si la evidencia permite identificar el caso. Cuando se utilicen source maps, confirmar su correspondencia con la versión evaluada y el mecanismo de publicación autorizado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Solicitudes de red.** Revisar las evidencias disponibles de llamadas y resultados. Contrastar con el backend cuando sea necesario; la asociación debe comprobarse y no inferirse únicamente por cercanía temporal."
              },
              {
                "tipo": "parrafo",
                "texto": "**Tratamiento de datos.** Inspeccionar las señales recibidas y comprobar que conservan el contexto necesario sin incluir campos sensibles innecesarios. Registrar hallazgos sin reproducir el dato sensible en capturas o tickets."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Caso de prueba",
                  "Evidencia esperada"
                ],
                "filas": [
                  [
                    "Interacción representativa",
                    "Actividad localizable en la aplicación y ambiente previstos"
                  ],
                  [
                    "Error de frontend",
                    "Contexto suficiente para investigar el caso"
                  ],
                  [
                    "Consulta de red",
                    "Información interpretable dentro de la cobertura disponible"
                  ],
                  [
                    "Source maps, si aplican",
                    "Correspondencia con la versión publicada"
                  ],
                  [
                    "Revisión de captura",
                    "Campos contrastados con el tratamiento acordado"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo puede reproducir una investigación de experiencia y conoce la cobertura y las limitaciones de la integración."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Mantener eventos y experiencia del usuario"
              },
              {
                "tipo": "parrafo",
                "texto": "**Registro por integración.** Mantener separados contrato de eventos, configuración RUM, responsables y evidencias de prueba. Identificar las dependencias entre frontend, backend y consultas de negocio cuando existan."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisión por cambio.** Revalidar ante cambios de esquema, SDK, framework, configuración de captura o proceso de build. Incluir los consumidores de datos y la correspondencia de versiones en la revisión."
              },
              {
                "tipo": "parrafo",
                "texto": "**Diagnóstico.** Si falta evidencia, revisar primero generación, configuración y destino. Distinguir un evento rechazado, un dato todavía no localizado y una consulta con filtros incorrectos mediante las evidencias disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Ambas integraciones mantienen responsables y criterios de validación durante su ciclo de vida, con pendientes explícitos cuando no pueda comprobarse una capacidad."
              },
              {
                "tipo": "parrafo",
                "texto": "[Seguridad](/docs/observabilidad/gobierno?tema=seguridad) · [Validar la implementación](/docs/observabilidad/golden-path?tema=validar) · [Diagnosticar](/docs/observabilidad/golden-path?tema=diagnosticar)."
              }
            ],
            "fuentes": [
              {
                "titulo": "implementación de eventos",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417"
              },
              {
                "titulo": "arquitectura de solución",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1517551617"
              },
              {
                "titulo": "Coralogix RUM",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701"
              }
            ]
          },
          {
            "id": "diagnosticar",
            "titulo": "Diagnosticar y migrar",
            "bajada": "Resolución de síntomas y transición desde New Relic.",
            "modoLectura": "resumen-completa",
            "resumen": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Cuando la señal no aparece"
              },
              {
                "tipo": "parrafo",
                "texto": "**Diagnóstico por lenguaje · staging:** [JavaScript / TypeScript](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Python](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Java](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN) · [Go — documentación pendiente de validación](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN). Consulta configuración y prevención de logs duplicados en TypeScript, y las secciones FAQ en Python y Java."
              },
              {
                "tipo": "parrafo",
                "texto": "**El diagnóstico identifica el tramo donde se pierde o deja de ser interpretable la evidencia.** Delimitar primero el síntoma y contrastar generación, transporte y consulta antes de modificar la configuración. La migración requiere además comprobar que el nuevo recorrido conserva las capacidades operativas necesarias."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dato inicial",
                  "Utilidad para la investigación"
                ],
                "filas": [
                  [
                    "Servicio, ambiente y cuenta",
                    "Delimitar el destino y los filtros correctos"
                  ],
                  [
                    "Intervalo de la prueba",
                    "Relacionar actividad y errores del mismo período"
                  ],
                  [
                    "Runtime, integración y versión",
                    "Seleccionar la guía aplicable"
                  ],
                  [
                    "Artefacto y configuración desplegados",
                    "Distinguir el estado real de la configuración prevista"
                  ],
                  [
                    "Operación conocida",
                    "Precisar qué resultado y señales se esperan"
                  ],
                  [
                    "Último tramo con evidencia",
                    "Acotar dónde continuar la revisión"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Registrar hechos observados, hipótesis y verificaciones pendientes por separado. Las revisiones siguientes orientan el diagnóstico; no establecen valores universales de configuración ni justifican cambios sobre capacidad compartida sin coordinación."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [FAQ de Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083), [FAQ de OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1611497480), [debugging OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890011658)."
              },
              {
                "tipo": "pasos",
                "pasos": [
                  {
                    "titulo": "No veo logs ni trazas",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Confirmar tráfico, cuenta, ambiente, servicio y rango temporal. Revisar All Logs y All Traces según las guías. Luego verificar inicialización, atributos, endpoint, protocolo y conectividad del entorno. No confundir un filtro incorrecto con una caída de OES."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**1. Confirmar actividad.** Ejecutar una operación controlada con resultado conocido y datos sintéticos. Registrar cuándo ocurrió y qué señales debería producir según la cobertura implementada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**2. Revisar la consulta.** Comprobar cuenta, permisos, intervalo y filtros. Ampliar la búsqueda de forma acotada para detectar una identidad inesperada, sin interpretar una consulta vacía como ausencia definitiva de datos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**3. Revisar el emisor.** Confirmar que la instrumentación está inicializada en el artefacto desplegado y que la operación está cubierta. Inspeccionar errores de configuración o entrega sin exponer secretos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**4. Seguir el transporte.** Contrastar la salida de la aplicación, recepción del cliente y exportación hacia el destino mediante las evidencias disponibles. Coordinar el análisis del tramo compartido con sus responsables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** La investigación identifica el último punto confirmado y una acción concreta para el tramo siguiente, o demuestra que la causa estaba en el alcance de la consulta."
                      }
                    ]
                  },
                  {
                    "titulo": "Veo señales, pero no el servicio en APM",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Comprobar qué spans genera la aplicación, su identidad y su clasificación de operación. Ver logs no demuestra una instrumentación de transacciones completa. Revisar los requisitos de APM y los ejemplos del framework."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Delimitar las señales presentes.** Identificar si se reciben logs, métricas o trazas y de qué componente provienen. La existencia de señales de infraestructura no acredita la instrumentación de operaciones de la aplicación."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar una ejecución.** Localizar una traza del servicio y contrastar sus atributos y operaciones con la guía de APM y la integración utilizada. Registrar diferencias de identidad o cobertura antes de cambiar el nombre del servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Comparar configuración.** Revisar runtime, versión y forma de inicialización frente al ejemplo aplicable. No trasladar opciones de otro framework sin comprobar compatibilidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Se distingue entre falta de cobertura de transacciones, identidad incorrecta y limitaciones de consulta o configuración de APM."
                      }
                    ]
                  },
                  {
                    "titulo": "Faltan algunas trazas",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar sampling, propagación y errores de exportación. La documentación describe muestreo diferenciado; los porcentajes deben comprobarse con la configuración vigente. La ausencia de una traza individual no prueba que la transacción no haya ocurrido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Caracterizar la ausencia.** Precisar si faltan ejecuciones completas, operaciones de una dependencia o determinados períodos. Comparar casos afectados con otros equivalentes que sí estén disponibles."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Revisar selección y contexto.** Identificar el muestreo aplicado y los límites donde debe propagarse contexto. Distinguir una ejecución no conservada de una traza incompleta por falta de instrumentación o continuidad."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Contrastar entrega.** Revisar errores y descartes del período. Los conteos de aplicación y backend solo son comparables si se conoce el tratamiento intermedio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** El equipo puede explicar la ausencia mediante evidencia o delimitar una hipótesis pendiente, sin asumir que todas las operaciones deben conservar una traza completa."
                      }
                    ]
                  },
                  {
                    "titulo": "Aparece ResourceExhausted o un timeout",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Revisar tamaño de payload, volumen, cardinalidad, colas, límites de concurrencia y estado del pipeline. Una protección de exportación puede descartar o demorar señales. Mantener el servicio operativo no garantiza conservar toda la telemetría."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Identificar el origen.** Registrar qué componente informa el error, hacia qué destino y durante qué operación. El texto del error por sí solo no determina cuál recurso o límite está involucrado."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Relacionar con cambios.** Revisar incrementos de demanda, despliegues, nuevos atributos y modificaciones de configuración. Comparar el comportamiento antes y después del inicio del síntoma."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evaluar el impacto.** Comprobar si existe demora, descarte o afectación del servicio. Coordinar con plataforma la revisión de recursos y límites del tramo compartido; evitar aumentar tiempos de espera o capacidad sin identificar el problema."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Validar el ajuste.** Repetir una prueba representativa y revisar recuperación de entrega y comportamiento de la aplicación. Registrar cualquier pérdida o limitación observada."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una causa o hipótesis acotada por componente, con una corrección verificable y responsables definidos."
                      }
                    ]
                  },
                  {
                    "titulo": "Estamos migrando desde New Relic",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "Inventariar SDK, variables, Layers, handler e indicadores antes de ejecutar el procedimiento específico. Validar la semántica de métricas y continuidad de visibilidad. Las guías de Lambda contienen variantes en el nombre de la variable del handler: confirmar el valor real en la configuración y el módulo utilizado antes de restaurarlo."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar el inventario.** Identificar dependencias del proveedor anterior y recursos operativos utilizados por el equipo. Incluir instrumentación, configuración, consultas, dashboards, alertas e integraciones de notificación; el retiro del SDK no completa la migración operativa."
                      },
                      {
                        "tipo": "tabla",
                        "encabezados": [
                          "Elemento",
                          "Revisión de transición"
                        ],
                        "filas": [
                          [
                            "SDK y agentes",
                            "Dependencias existentes y mecanismo de reemplazo"
                          ],
                          [
                            "Variables y secretos",
                            "Configuración que se conserva, reemplaza o retira"
                          ],
                          [
                            "Layers y handler, cuando aplican",
                            "Referencias reales del artefacto y procedimiento del runtime"
                          ],
                          [
                            "Señales e identidad",
                            "Cobertura, contexto y significado que deben conservarse"
                          ],
                          [
                            "Recursos operativos",
                            "Consultas, dashboards y alertas que deben adaptarse"
                          ],
                          [
                            "Histórico",
                            "Acceso necesario y tratamiento acordado de datos previos"
                          ]
                        ]
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Definir aceptación y reversión.** Seleccionar operaciones representativas y criterios para comprobar visibilidad en el nuevo destino. Acordar cómo recuperar la configuración anterior si la transición impide investigar el servicio."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Aplicar la guía del entorno.** Ejecutar el procedimiento correspondiente al runtime y empaquetado. No retirar componentes compartidos ni reutilizar nombres de variables de otro caso sin verificar sus consumidores y función."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Controlar la coexistencia.** Si se necesita envío simultáneo, delimitar alcance y duración y revisar duplicación de datos, notificaciones y consumo. Su necesidad y condiciones deben acordarse con los responsables."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificar equivalencia operativa.** Comparar resultados de casos de éxito y error y confirmar que el equipo puede investigar en el nuevo destino. Los indicadores no tienen que presentar nombres idénticos, pero su significado y las diferencias deben quedar comprendidos."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Cerrar el retiro.** Eliminar la integración anterior conforme al procedimiento acordado cuando se cumplan los criterios definidos. Revisar credenciales, alertas y dependencias remanentes y documentar las condiciones de acceso al histórico."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Resultado esperado.** Una transición comprobada que mantiene las capacidades de investigación necesarias y deja trazabilidad de cambios, limitaciones y recursos retirados."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Procedimiento de migración Lambda](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1088356451) · [FAQ de remoción de Layers](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1723072539)."
                      }
                    ]
                  },
                  {
                    "titulo": "Escalar con evidencias y verificar el cierre",
                    "contenido": [
                      {
                        "tipo": "parrafo",
                        "texto": "**Preparar el caso.** Compartir servicio, ambiente, período, versiones, configuración relevante sanitizada, síntoma y último tramo confirmado. Indicar pruebas realizadas y sus resultados para evitar repetir verificaciones sin información adicional."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Asignar por alcance.** Producto revisa instrumentación y significado de señales; plataforma participa en el transporte compartido y la configuración bajo su responsabilidad. Los problemas de acceso o consulta se coordinan con los administradores correspondientes."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Evitar exposición de información.** No incluir tokens, claves, cookies ni payloads sensibles en tickets o capturas. Utilizar referencias y ejemplos sintéticos para describir el comportamiento."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Verificar la corrección.** Repetir el caso que originó el diagnóstico y confirmar identidad, entrega y consulta. Distinguir una recuperación temporal de una causa corregida y registrar los pendientes que permanezcan."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "**Mantener el conocimiento.** Actualizar el procedimiento con el hallazgo y la configuración evaluada. Vincular decisiones o excepciones cuando la solución modifique el modelo compartido."
                      },
                      {
                        "tipo": "parrafo",
                        "texto": "[Validar la implementación](/docs/observabilidad/golden-path?tema=validar) · [Conectar con OES](/docs/observabilidad/golden-path?tema=oes) · [Responsabilidades y decisiones](/docs/observabilidad/gobierno?tema=decisiones)."
                      }
                    ]
                  }
                ]
              }
            ],
            "completa": [
              {
                "tipo": "encabezado",
                "nivel": 3,
                "texto": "Cuando la señal no aparece"
              },
              {
                "tipo": "parrafo",
                "texto": "**Diagnóstico por lenguaje · staging:** [JavaScript / TypeScript](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN) · [Python](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN) · [Java](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN) · [Go — documentación pendiente de validación](https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN). Consulta configuración y prevención de logs duplicados en TypeScript, y las secciones FAQ en Python y Java."
              },
              {
                "tipo": "parrafo",
                "texto": "**El diagnóstico identifica el tramo donde se pierde o deja de ser interpretable la evidencia.** Delimitar primero el síntoma y contrastar generación, transporte y consulta antes de modificar la configuración. La migración requiere además comprobar que el nuevo recorrido conserva las capacidades operativas necesarias."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Dato inicial",
                  "Utilidad para la investigación"
                ],
                "filas": [
                  [
                    "Servicio, ambiente y cuenta",
                    "Delimitar el destino y los filtros correctos"
                  ],
                  [
                    "Intervalo de la prueba",
                    "Relacionar actividad y errores del mismo período"
                  ],
                  [
                    "Runtime, integración y versión",
                    "Seleccionar la guía aplicable"
                  ],
                  [
                    "Artefacto y configuración desplegados",
                    "Distinguir el estado real de la configuración prevista"
                  ],
                  [
                    "Operación conocida",
                    "Precisar qué resultado y señales se esperan"
                  ],
                  [
                    "Último tramo con evidencia",
                    "Acotar dónde continuar la revisión"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "Registrar hechos observados, hipótesis y verificaciones pendientes por separado. Las revisiones siguientes orientan el diagnóstico; no establecen valores universales de configuración ni justifican cambios sobre capacidad compartida sin coordinación."
              },
              {
                "tipo": "parrafo",
                "texto": "Fuentes: [FAQ de Ægis](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083), [FAQ de OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1611497480), [debugging OES](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890011658)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "No veo logs ni trazas"
              },
              {
                "tipo": "parrafo",
                "texto": "Confirmar tráfico, cuenta, ambiente, servicio y rango temporal. Revisar All Logs y All Traces según las guías. Luego verificar inicialización, atributos, endpoint, protocolo y conectividad del entorno. No confundir un filtro incorrecto con una caída de OES."
              },
              {
                "tipo": "parrafo",
                "texto": "**1. Confirmar actividad.** Ejecutar una operación controlada con resultado conocido y datos sintéticos. Registrar cuándo ocurrió y qué señales debería producir según la cobertura implementada."
              },
              {
                "tipo": "parrafo",
                "texto": "**2. Revisar la consulta.** Comprobar cuenta, permisos, intervalo y filtros. Ampliar la búsqueda de forma acotada para detectar una identidad inesperada, sin interpretar una consulta vacía como ausencia definitiva de datos."
              },
              {
                "tipo": "parrafo",
                "texto": "**3. Revisar el emisor.** Confirmar que la instrumentación está inicializada en el artefacto desplegado y que la operación está cubierta. Inspeccionar errores de configuración o entrega sin exponer secretos."
              },
              {
                "tipo": "parrafo",
                "texto": "**4. Seguir el transporte.** Contrastar la salida de la aplicación, recepción del cliente y exportación hacia el destino mediante las evidencias disponibles. Coordinar el análisis del tramo compartido con sus responsables."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** La investigación identifica el último punto confirmado y una acción concreta para el tramo siguiente, o demuestra que la causa estaba en el alcance de la consulta."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Veo señales, pero no el servicio en APM"
              },
              {
                "tipo": "parrafo",
                "texto": "Comprobar qué spans genera la aplicación, su identidad y su clasificación de operación. Ver logs no demuestra una instrumentación de transacciones completa. Revisar los requisitos de APM y los ejemplos del framework."
              },
              {
                "tipo": "parrafo",
                "texto": "**Delimitar las señales presentes.** Identificar si se reciben logs, métricas o trazas y de qué componente provienen. La existencia de señales de infraestructura no acredita la instrumentación de operaciones de la aplicación."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar una ejecución.** Localizar una traza del servicio y contrastar sus atributos y operaciones con la guía de APM y la integración utilizada. Registrar diferencias de identidad o cobertura antes de cambiar el nombre del servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Comparar configuración.** Revisar runtime, versión y forma de inicialización frente al ejemplo aplicable. No trasladar opciones de otro framework sin comprobar compatibilidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Se distingue entre falta de cobertura de transacciones, identidad incorrecta y limitaciones de consulta o configuración de APM."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Faltan algunas trazas"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar sampling, propagación y errores de exportación. La documentación describe muestreo diferenciado; los porcentajes deben comprobarse con la configuración vigente. La ausencia de una traza individual no prueba que la transacción no haya ocurrido."
              },
              {
                "tipo": "parrafo",
                "texto": "**Caracterizar la ausencia.** Precisar si faltan ejecuciones completas, operaciones de una dependencia o determinados períodos. Comparar casos afectados con otros equivalentes que sí estén disponibles."
              },
              {
                "tipo": "parrafo",
                "texto": "**Revisar selección y contexto.** Identificar el muestreo aplicado y los límites donde debe propagarse contexto. Distinguir una ejecución no conservada de una traza incompleta por falta de instrumentación o continuidad."
              },
              {
                "tipo": "parrafo",
                "texto": "**Contrastar entrega.** Revisar errores y descartes del período. Los conteos de aplicación y backend solo son comparables si se conoce el tratamiento intermedio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** El equipo puede explicar la ausencia mediante evidencia o delimitar una hipótesis pendiente, sin asumir que todas las operaciones deben conservar una traza completa."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Aparece ResourceExhausted o un timeout"
              },
              {
                "tipo": "parrafo",
                "texto": "Revisar tamaño de payload, volumen, cardinalidad, colas, límites de concurrencia y estado del pipeline. Una protección de exportación puede descartar o demorar señales. Mantener el servicio operativo no garantiza conservar toda la telemetría."
              },
              {
                "tipo": "parrafo",
                "texto": "**Identificar el origen.** Registrar qué componente informa el error, hacia qué destino y durante qué operación. El texto del error por sí solo no determina cuál recurso o límite está involucrado."
              },
              {
                "tipo": "parrafo",
                "texto": "**Relacionar con cambios.** Revisar incrementos de demanda, despliegues, nuevos atributos y modificaciones de configuración. Comparar el comportamiento antes y después del inicio del síntoma."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evaluar el impacto.** Comprobar si existe demora, descarte o afectación del servicio. Coordinar con plataforma la revisión de recursos y límites del tramo compartido; evitar aumentar tiempos de espera o capacidad sin identificar el problema."
              },
              {
                "tipo": "parrafo",
                "texto": "**Validar el ajuste.** Repetir una prueba representativa y revisar recuperación de entrega y comportamiento de la aplicación. Registrar cualquier pérdida o limitación observada."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una causa o hipótesis acotada por componente, con una corrección verificable y responsables definidos."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Estamos migrando desde New Relic"
              },
              {
                "tipo": "parrafo",
                "texto": "Inventariar SDK, variables, Layers, handler e indicadores antes de ejecutar el procedimiento específico. Validar la semántica de métricas y continuidad de visibilidad. Las guías de Lambda contienen variantes en el nombre de la variable del handler: confirmar el valor real en la configuración y el módulo utilizado antes de restaurarlo."
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar el inventario.** Identificar dependencias del proveedor anterior y recursos operativos utilizados por el equipo. Incluir instrumentación, configuración, consultas, dashboards, alertas e integraciones de notificación; el retiro del SDK no completa la migración operativa."
              },
              {
                "tipo": "tabla",
                "encabezados": [
                  "Elemento",
                  "Revisión de transición"
                ],
                "filas": [
                  [
                    "SDK y agentes",
                    "Dependencias existentes y mecanismo de reemplazo"
                  ],
                  [
                    "Variables y secretos",
                    "Configuración que se conserva, reemplaza o retira"
                  ],
                  [
                    "Layers y handler, cuando aplican",
                    "Referencias reales del artefacto y procedimiento del runtime"
                  ],
                  [
                    "Señales e identidad",
                    "Cobertura, contexto y significado que deben conservarse"
                  ],
                  [
                    "Recursos operativos",
                    "Consultas, dashboards y alertas que deben adaptarse"
                  ],
                  [
                    "Histórico",
                    "Acceso necesario y tratamiento acordado de datos previos"
                  ]
                ]
              },
              {
                "tipo": "parrafo",
                "texto": "**Definir aceptación y reversión.** Seleccionar operaciones representativas y criterios para comprobar visibilidad en el nuevo destino. Acordar cómo recuperar la configuración anterior si la transición impide investigar el servicio."
              },
              {
                "tipo": "parrafo",
                "texto": "**Aplicar la guía del entorno.** Ejecutar el procedimiento correspondiente al runtime y empaquetado. No retirar componentes compartidos ni reutilizar nombres de variables de otro caso sin verificar sus consumidores y función."
              },
              {
                "tipo": "parrafo",
                "texto": "**Controlar la coexistencia.** Si se necesita envío simultáneo, delimitar alcance y duración y revisar duplicación de datos, notificaciones y consumo. Su necesidad y condiciones deben acordarse con los responsables."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificar equivalencia operativa.** Comparar resultados de casos de éxito y error y confirmar que el equipo puede investigar en el nuevo destino. Los indicadores no tienen que presentar nombres idénticos, pero su significado y las diferencias deben quedar comprendidos."
              },
              {
                "tipo": "parrafo",
                "texto": "**Cerrar el retiro.** Eliminar la integración anterior conforme al procedimiento acordado cuando se cumplan los criterios definidos. Revisar credenciales, alertas y dependencias remanentes y documentar las condiciones de acceso al histórico."
              },
              {
                "tipo": "parrafo",
                "texto": "**Resultado esperado.** Una transición comprobada que mantiene las capacidades de investigación necesarias y deja trazabilidad de cambios, limitaciones y recursos retirados."
              },
              {
                "tipo": "parrafo",
                "texto": "[Procedimiento de migración Lambda](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1088356451) · [FAQ de remoción de Layers](https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1723072539)."
              },
              {
                "tipo": "encabezado",
                "nivel": 4,
                "texto": "Escalar con evidencias y verificar el cierre"
              },
              {
                "tipo": "parrafo",
                "texto": "**Preparar el caso.** Compartir servicio, ambiente, período, versiones, configuración relevante sanitizada, síntoma y último tramo confirmado. Indicar pruebas realizadas y sus resultados para evitar repetir verificaciones sin información adicional."
              },
              {
                "tipo": "parrafo",
                "texto": "**Asignar por alcance.** Producto revisa instrumentación y significado de señales; plataforma participa en el transporte compartido y la configuración bajo su responsabilidad. Los problemas de acceso o consulta se coordinan con los administradores correspondientes."
              },
              {
                "tipo": "parrafo",
                "texto": "**Evitar exposición de información.** No incluir tokens, claves, cookies ni payloads sensibles en tickets o capturas. Utilizar referencias y ejemplos sintéticos para describir el comportamiento."
              },
              {
                "tipo": "parrafo",
                "texto": "**Verificar la corrección.** Repetir el caso que originó el diagnóstico y confirmar identidad, entrega y consulta. Distinguir una recuperación temporal de una causa corregida y registrar los pendientes que permanezcan."
              },
              {
                "tipo": "parrafo",
                "texto": "**Mantener el conocimiento.** Actualizar el procedimiento con el hallazgo y la configuración evaluada. Vincular decisiones o excepciones cuando la solución modifique el modelo compartido."
              },
              {
                "tipo": "parrafo",
                "texto": "[Validar la implementación](/docs/observabilidad/golden-path?tema=validar) · [Conectar con OES](/docs/observabilidad/golden-path?tema=oes) · [Responsabilidades y decisiones](/docs/observabilidad/gobierno?tema=decisiones)."
              }
            ],
            "fuentes": [
              {
                "titulo": "FAQ de Ægis",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083"
              },
              {
                "titulo": "FAQ de OES",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1611497480"
              },
              {
                "titulo": "debugging OES",
                "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890011658"
              }
            ]
          }
        ]
      }
    ],
    "bibliotecaDeFuentes": {
      "titulo": "Biblioteca de Observabilidad",
      "totalReferencias": 126,
      "alcance": [
        {
          "tipo": "parrafo",
          "texto": "Síntesis realizada el **8 de septiembre de 2026** sobre el texto accesible de **118 páginas** de la carpeta Observability y su estructura de descendientes. También se inspeccionó la estructura del catastro OES, que se mantiene como inventario vivo en Confluence."
        },
        {
          "tipo": "parrafo",
          "texto": "**Alcance de lectura:** textos y tablas de las páginas. No se revisaron exhaustivamente imágenes, diagramas embebidos, adjuntos, videos ni repositorios externos enlazados. La página de conectividad de Events contiene principalmente un diagrama; el apartado Troubleshooting / Grafana no contiene texto útil y los dummies internos son referencias breves."
        },
        {
          "tipo": "parrafo",
          "texto": "**Criterio editorial:** el Charter organiza principios y gobierno; Ægis, OES y Coralogix organizan implementación y operación. New Relic y la experiencia de Grafana OSS se conservan como contexto histórico o de transición. Una etiqueta editorial de referencia no confirma vigencia operativa ni aprobación formal."
        },
        {
          "tipo": "parrafo",
          "texto": "**Diferencias que requieren verificar la fuente antes de implementar:** versiones y runtimes, nombres de variables y atributos, protocolos y endpoints por ambiente, handler de migración Lambda, cuotas, precios y muestreo. El contrato de costos tiene un período finalizado; las pruebas UAT describen escenarios de prueba, no capacidad garantizada de producción. Las páginas de concepto y presentación de Events no sustituyen su guía de implementación."
        }
      ],
      "fuentes": [
        {
          "titulo": "Observability Engineering Charter",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808236552",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 14 - Transformación organizacional y adopción",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810366465",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 13 - Framework de Estándares Técnicos",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809612801",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 12 - Modelo de evolución continua",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808859145",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 11 - Framework de decisiones de Ingeniería",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807253561",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 10 - Modelo de madurez de la Ingenieria",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809154049",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 9 - Observability Development Lifecycle (ODLC)",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808793610",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 8 - Modelo operativo de Observabilidad",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1807286351",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 7 - Modelo de gobernanza operativo",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055754",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 6 - Guardrails de Ingeniería",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808760842",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 5 - Principios de Ingenieria",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809055746",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 4 - ¿Qué significa realmente “hacer observabilidad” en esta organización?",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808138264",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 3 - Misión",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808760833",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 2 - Visión",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808138255",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capítulo 1 - Porque existe la observabilidad",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808531457",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Capitulo 0 - Resumen Ejecutivo",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1808105475",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Taxonomía de documentos",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810235393",
          "grupo": "Principios",
          "estado": "Referencia"
        },
        {
          "titulo": "Introducción a OES",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883163228",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "FAQ's - Preguntas recurrentes a la arquitectura que soporta la ingesta de información (OES)",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1611497480",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Repositorio OES",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/883523616",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Configuración de Agent y Collector en OES",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/882639018",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Instrumentación de infra-as-code mediante OES",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890798088",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Guía para debugging en OES",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/890011658",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Paso a paso para habilitar un OES Client para bootstrapping Pulsar",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1765572624",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Observability Enablement Suite (OES)",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/831094883",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Implementación de OES Clients en Pulsar",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/842793139",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Implementación de OES Cluster en Pulsar",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/846233602",
          "grupo": "OES",
          "estado": "Referencia"
        },
        {
          "titulo": "Introducción",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/992378970",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Open Telemetry SDK y Capas de autoinstrumentación",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1746272537",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Variables y estandares de cumplimiento tanto para Ægis como corporativo",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1177092102",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis/OTEL SDK y responsabilidad compartida en la instrumentación",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1661042768",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis LocalStack",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1125089405",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "FAQ's - Preguntas Frecuentes sobre Ægis",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993198083",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "NestJS con Ægis",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993394689",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Javascript o Typescript con Ægis",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1126793219",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Instrumentación Java de Ægis",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1124761696",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis como paquete en AWS Lambda",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1080557681",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis como paquete para NodeJS Bundler en AWS Lambda",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1183776821",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Python: Simplifying Observability with OpenTelemetry for Logs, Metrics, and Traces",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1488617675",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Dummies",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1016430616",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis AWS Lambda Layer API",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1366065164",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Lambda Layer Publish",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1412988929",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Flujo para publicar una nueva AWS Lambda Layer que integre Ægis posterior publicación de un nuevo release",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1381564427",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Speech de presentación Ægis",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/993231027",
          "grupo": "Ægis",
          "estado": "Referencia"
        },
        {
          "titulo": "Proximamente",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1124630591",
          "grupo": "Ægis",
          "estado": "Referencia breve"
        },
        {
          "titulo": "Aegis JS Dummy",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/886603778",
          "grupo": "Internal",
          "estado": "Referencia breve"
        },
        {
          "titulo": "Aegis Java Dummy",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/886636545",
          "grupo": "Internal",
          "estado": "Referencia breve"
        },
        {
          "titulo": "Integración para observabilidad en Lambdas en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/962723841",
          "grupo": "Internal",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Events - Solución",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1517551617",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Events - Librería typescript",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1535836164",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Events - Modelo de datos",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1537441855",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "event-consumer",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1537015811",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "event-validator",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1536688141",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "aegis-events-index-sync",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1853194329",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "aegis-events-metabase-sync",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1891663881",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "Habilitación de equipos",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1809711173",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "Guía de implementación",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1810661417",
          "grupo": "Ægis Events",
          "estado": "Referencia"
        },
        {
          "titulo": "Ægis Events - Concepto",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1512734768",
          "grupo": "Ægis Events",
          "estado": "Concepto / prueba"
        },
        {
          "titulo": "Introducción Ægis-Events",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1562869775",
          "grupo": "Ægis Events",
          "estado": "Concepto / prueba"
        },
        {
          "titulo": "Pruebas de carga event-validator UAT",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1739817008",
          "grupo": "Ægis Events",
          "estado": "Concepto / prueba"
        },
        {
          "titulo": "Ægis Events - Diagrama conectividad",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1804599335",
          "grupo": "Ægis Events",
          "estado": "Diagrama pendiente de revisión visual"
        },
        {
          "titulo": "Onboarding Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/860815601",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Open Telemetry en perspectiva Coralogix VS New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1735557170",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Cuentas en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112320",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Guía de uso de Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1335099470",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Integraciones en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/860881189",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Integración para Lambdas en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1158709269",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Coralogix Costs",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1875738639",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Uso de métricas en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1156841607",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Guia visual de Logs, Métricas y Trazas",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1127677961",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Con peras y manzanas, ¿Que es la cardinalidad de información?",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1755742214",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Usuarios y permisos en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/801112329",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Uso Responsable de Coralogix – Lineamientos de Observabilidad",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1141899270",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Logs en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1338212357",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "APM en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1357840385",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Trazas en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1394475023",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Infrastructura en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1471217856",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Alertas en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1395294222",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Custom Dashboard en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1383923802",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Configurar MCP de Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1668382754",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Cumplimiento / Compliance en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/862781493",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Integración mediante OTEL Stack hacia Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/856096827",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Coralogix RUM",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/983793701",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Integración APM hacia Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/860913989",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Guia para solicitar permisos via AGP para Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/851476526",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Dataprime Query Language",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1555693588",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Como enviar alertas desde el monitoreo de Coralogix hacía Microsoft Teams",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1437663281",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Como configurar alertas para llamadas a través de integración con AWS Connect",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1879998531",
          "grupo": "Coralogix",
          "estado": "Referencia"
        },
        {
          "titulo": "Control de costos en Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/810615169",
          "grupo": "Coralogix",
          "estado": "Contrato histórico"
        },
        {
          "titulo": "Ægis y solución para remover New Relic Lambda Layers en AWS Lambda",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1088356451",
          "grupo": "Migración",
          "estado": "Transición"
        },
        {
          "titulo": "Especificaciones sobre migrar desde el SDK de New Relic hacia Coralogix con Ægis",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1068957704",
          "grupo": "Migración",
          "estado": "Transición"
        },
        {
          "titulo": "Manifiesto de adopción de Coralogix desde New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1058537473",
          "grupo": "Migración",
          "estado": "Transición"
        },
        {
          "titulo": "FAQs - Sobre remoción de Layers de New Relic y migración de Lambdas hacia Coralogix",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1723072539",
          "grupo": "Migración",
          "estado": "Transición"
        },
        {
          "titulo": "Historia de la implementación de Grafana OSS y evolución hacia Coralogix y OpenTelemetry.",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/1839628378",
          "grupo": "Grafana OSS",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Grafana",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/611156191",
          "grupo": "Troubleshooting",
          "estado": "Sin contenido textual"
        },
        {
          "titulo": "New Relic Bundle",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579633661",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "New Relic Workflows",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/732463767",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "New Relic, policies, alerts and conditions",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/732430871",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Cuentas de New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579404267",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Solicitud role distinto a basic en New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579437526",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "ABM de usuarios New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579960947",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Licenciamiento en New Relic para los distintos equipos",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579437514",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Crear una nueva cuenta en New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579437550",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Errores conocidos en New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/579437560",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Creación de Grupo para Azure AD SCIM",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/659947962",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Gestión de costo eficiencia en New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/675283035",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Drop rules para reducción de ingesta en New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/678494267",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Instrumentación de New Relic en AWS Lambda",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/692847163",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Instrumentación del APM para Microservicios",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/692814351",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Kong metrics & logs",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/644808868",
          "grupo": "New Relic",
          "estado": "Contexto histórico"
        },
        {
          "titulo": "Medios para poder notificar alertas mediante Dispatcher",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/732463782",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Dispatcher de notificaciones para Monitoreo",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/731578881",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Integración a llamadas de voz via Amazon Connect",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/580681863",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Integración de Amazon Connect via Dispatcher para Workflows de New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/580780137",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Integración de MS Teams via Dispatcher para Workflows de New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/731481187",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Integración de MS Teams via Webhooks para Workflows de New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/732463718",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Integración de Telegram via Dispatcher para Workflows de New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/731513511",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Integración de Notificaciones a la APP de New Relic para Workflows de New Relic",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/pages/580616297",
          "grupo": "Monitoreo y notificaciones",
          "estado": "Contexto operativo / transición"
        },
        {
          "titulo": "Catastro de proyectos que cuentan con stack de OES",
          "url": "https://cencosud.atlassian.net/wiki/spaces/SREDF/database/1761017878",
          "grupo": "OES",
          "estado": "Inventario vivo"
        },
        {
          "titulo": "Ægis JavaScript / TypeScript — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_MAIN",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Verificado el 9 de septiembre de 2026"
        },
        {
          "titulo": "Ægis JavaScript / TypeScript · Lambda — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-typescript/README_LAMBDA",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Verificado el 9 de septiembre de 2026"
        },
        {
          "titulo": "Ægis Python — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_MAIN",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Verificado el 9 de septiembre de 2026"
        },
        {
          "titulo": "Ægis Python · Lambda — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-python/README_LAMBDA",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Verificado el 9 de septiembre de 2026"
        },
        {
          "titulo": "Ægis Java — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-java/README_MAIN",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Verificado el 9 de septiembre de 2026"
        },
        {
          "titulo": "Ægis Go — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_MAIN",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Contenido no disponible en la revisión"
        },
        {
          "titulo": "Ægis Go · Lambda — Portal técnico",
          "url": "https://sre-portal-docs-front-stg-mtda7wna.sre.ecomm-stg.cencosud.com/docsify/index.html#/portal-docs/aegis/aegis-go/README_LAMBDA",
          "grupo": "Documentación técnica de Ægis",
          "estado": "Staging · Contenido pendiente de validación"
        }
      ]
    }
  }
} as const
