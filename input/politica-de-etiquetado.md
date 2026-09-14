# Política de Etiquetado — Línea Base Gobierno Cloud (Cencosud)

Fuente: https://cct.cencosud.com/es/linea-base-gobierno-cloud/politica-de-etiquetado/

Con motivo de avanzar en el gobierno de las nubes públicas de Cencosud, se ha definido una política de etiquetado (tags) de recursos, lo que contribuye a la estandarización de estos en las cuentas de la organización. Esta política especifica reglas de etiquetado aplicables a ciertos recursos. Dicha estandarización permite tener alcance sobre los recursos para garantizar la posibilidad de gestionar y ejecutar actividades de identificación, distribución de costos, automatización y mantenimiento.

## Categorías

Se identifican cuatro categorías dentro de la política de etiquetado:

- **Obligatorios**
- **Adicionales**
- **Automatización**
- **Backup**

### Tags Obligatorios
Deben ser completados de forma obligatoria con valores representativos al recurso según corresponda. Definen si un recurso se encuentra en cumplimiento o no de la presente política.

### Tags Adicionales
Facilitan la gestión e identificación de los recursos ante la necesidad de operar los mismos. No son auditados desde los controles de la presente política.

### Tags Automatización
Permiten identificar y agrupar recursos con el fin de ejecutar automatizaciones que facilitan el mantenimiento y la gestión, maximizando las ventajas de la nube.

### Tags Backup
Se cuenta con 4 categorías de retención (Bronze, Silver, Gold, Platinum) que se diferencian en la cantidad de días y frecuencia de retención según tipo de recurso.

---

## Limitantes de las diferentes nubes evaluadas

### AWS
| Límite | Valor |
|---|---|
| Número máximo de etiquetas por recurso | 50 (*) |
| Relación clave / valor de etiqueta (key Tag) | 1 tag con un único valor |
| Máx. caracteres por clave (key Tag) | 128 caracteres |
| Máx. caracteres por valor (Tag value) | 256 caracteres |
| Distingue mayúsculas y minúsculas | Sí |

(*) Classic Load Balancer soporta 10 etiquetas.

### GCP
| Límite | Valor |
|---|---|
| Número máximo de etiquetas (labels) por recurso | 64 |
| Relación clave / valor (keylabel) | 1 tag con un único valor |
| Máx. caracteres por tag (keylabel) | 63 caracteres |
| Máx. caracteres por valor (labelvalue) | 63 caracteres |
| Formato | Solo letras minúsculas, números, guiones y guiones bajos. No se admiten espacios, puntuación, acentos ni caracteres especiales. |

### AZURE
| Límite | Valor |
|---|---|
| Número máximo de etiquetas por recurso (tags) | 15 de forma manual, ilimitado si se generan con JSON |
| Relación clave / valor (key Tag) | 1 tag con un único valor |
| Máx. caracteres por clave (key Tag) | 512 caracteres |
| Máx. caracteres por valor (Tag value) | 256 caracteres |
| Caracteres no permitidos | `< > % & \ ? /` |

### OCI
| Límite | Valor |
|---|---|
| Número máximo de etiquetas por recurso | 10 free-form tags y 64 defined tags |
| Relación clave / valor | 1 tag con un único valor; las defined tags requieren namespace |
| Máx. caracteres por namespace | 100 caracteres |
| Máx. caracteres por clave | 100 caracteres |
| Máx. caracteres por valor | 256 caracteres |
| Formato | Solo caracteres ASCII imprimibles, sin espacios ni puntos; tamaño total de datos de etiquetas por recurso: 5 KB (JSON) |
| Case sensitivity | Las free-form tags distinguen mayúsculas y minúsculas |

---

## Políticas de etiquetado

### AWS — Tags Obligatorios

| Tag | Descripción |
|---|---|
| **Name** | Nombre coloquial para reconocer el recurso. Estándar de nombres de Cencosud o cualquier nombre distinto de «a-definir», «N/A». Ejemplos: `g900603sv001`, `servidorweb` |
| **propietario** | Responsable funcional del recurso. Email del usuario dueño o lista de distribución que reciba correos externos a Cencosud. Ejemplo: `cct@cencosud.com` |
| **creado-por** | Responsable técnico del recurso. Email del usuario dueño o lista de distribución que reciba correos externos a Cencosud. Ejemplo: `cct@cencosud.com` |
| **aplicacion** | Nombre coloquial de la aplicación a la que pertenece el recurso. |
| **apl** | Código de aplicación en RUA (https://rua.cencosud.corp/login). Todos los recursos de la misma aplicación deben tener exactamente el mismo valor. Debe comenzar con `apl`. Ejemplo: `apl123` |
| **proyecto** | Nombre del proyecto o número de EPM, en minúscula. Sin EPM, usar nombre de fantasía en minúsculas. Ejemplos: `epm1111`, `epm_1111`, `go2cloud`, `piloto aviatrix` |
| **ambiente** | Letras minúsculas, sin números. Valores aceptados: `productivo`, `prod`, `production`, `prd`, `pre-prod`, `pre`, `qa`, `test`, `tst`, `desarrollo`, `dev`, `desa`, `sandbox`, `staging`, `tmp`, `dmz` |
| **pais** | Abreviatura del país en minúscula. Valores aceptados: `ar`, `br`, `cl`, `co`, `pe`, `uy`, `regional` |
| **unidad-negocio** | Minúscula. Ejemplos: `sm`, `mdh`, `txd`, `shp`, `crm`, `commerce`, `rf`, etc. Para áreas corporativas: `corp`. |
| **bandera** | Minúscula. Ejemplos: `easy`, `paris`, `jumbo`, `spid35`, `bretas`, etc. Puede usarse una opción genérica por unidad de negocio (ej. `sm`, `mdh`). Para áreas corporativas, la bandera es el área (ej. `tecnologia`, `rrhh`, `fidelidad`, `finanzas`, `seguridad`). |
| **cuenta** | Número de cuenta AWS donde se creó el recurso (12 dígitos). Solo AWS. Ejemplos: `123456789123`, `123456723456` |
| **plataforma** | Plataforma del SO o motor de BD. Obligatorio para: EC2:Instance, RDS:DBInstance, WorkSpaces, ECS:Cluster, EKS:Cluster. Valores: EC2/WorkSpaces/ECS → `windows`, `linux`, `macos`; RDS → `mysql`, `aurora`, `sqlserver`, `postgresql`, `oracle`; EKS → `eks` |
| **version-so** | Distribución/versión de SO, motor de BD o clúster EKS. Se usa junto con `plataforma`, obligatorio para los mismos recursos. Ejemplos: EC2/WorkSpaces/ECS → `rhel 7`, `sles 15`, `ubuntu`, `amazon`, `server 2016`, `server 2019`; RDS → `8.0`; EKS → `1.29` |

#### Tags obligatorios por recurso AWS

| Recurso | Name | propietario | creado-por | cuenta | aplicacion | apl | ambiente | pais | unidad-negocio | bandera | proyecto | plataforma | version-so |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| ec2:instance | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ec2:snapshot | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| ec2:volume | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| eks:cluster | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| ecs:cluster | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| elasticloadbalancing | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | |
| ElasticLoadBalancingV2 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | |
| rds:DBInstance | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| redshift:cluster | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| s3:bucket | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| workspaces | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| dynamodb:table | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| cloudfront:Distribution | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Otros Servicios | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |

> Nota: la tabla de origen no distingue explícitamente qué columna corresponde a cada check por fila más allá del orden de encabezados; se preservó el orden y cantidad de marcas tal como aparece en la fuente.

#### Tags Adicionales AWS

| Tag | Descripción |
|---|---|
| **nombre** | Idem `Name`. |
| **rol-server-en-APL** | Rol del servidor. Ejemplos: `application server`, `DB server`. |
| **proyecto** | Nombre del proyecto o número de EPM, en minúscula. Ejemplos: `epm1111`, `epm_1111`, `go2cloud`, `piloto aviatrix`. |
| **map-migrated** | Tag requerido para la aplicación de créditos. Ejemplo: `d-server-00uumcy7r66lvd` |
| **oit** | Requerido por el equipo de operaciones. Se filtra por APL y se hace match con cada servidor. |
| **Patch-Group** | Habilita la aplicación de fixes de SO y recolección de inventarios. Windows → `PatchGroupWindows`; Linux → `PatchGroupLinux`. Respetar mayúsculas/minúsculas. |

#### Tags de Automatización AWS

| Tag | Descripción |
|---|---|
| **AWS-Schedule** | Asocia instancias al régimen de encendido/apagado automatizado vía Instance Scheduler. Gatilla inicio o apagado. Valores por defecto según país: Argentina `ar-office-hours`, Brasil `br-office-hours`, Chile `cl-office-hours`, Colombia `co-office-hours`, Perú `pe-office-hours` |

#### Recycle Bin de AWS

| Tag | Descripción |
|---|---|
| **recycle-bin** | Para aplicar las políticas de Recycle Bin sobre el recurso, completar con `yes` en minúsculas. Si no se completa o se usa otro valor, la política no se activa. |

---

### GCP — Labels Obligatorios

| Label | Descripción |
|---|---|
| **name** | Nombre coloquial para reconocer el recurso, distinto de «a-definir», «n/a». Ejemplos: `g900603sv001`, `servidorweb` |
| **propietario** | Responsable funcional. Nombre de red válido (se valida su existencia). Ejemplo: `cabreram` |
| **creado-por** | Responsable técnico. Nombre de red válido (se valida su existencia). Ejemplo: `cabreram` |
| **aplicacion** | Nombre coloquial de la aplicación. |
| **apl** | Código de aplicación en RUA (https://rua.cencosud.corp/login). Mismo valor para todos los recursos de la app. Debe comenzar con `apl`. Ejemplo: `apl123` |
| **proyecto** | Nombre del proyecto o EPM, minúscula, guiones en vez de espacios. Ejemplos: `epm1111`, `epm_1111`, `go2cloud`, `piloto-aviatrix` |
| **ambiente** | Minúscula, sin números. Valores aceptados: `productivo`, `test`, `desarrollo`, `sandbox`, `dev`, `pre`, `prd`, `prod`, `tst`, `staging`, `pre-prod`, `desa`, `tmp`, `dmz` |
| **pais** | Abreviatura en minúscula. Valores aceptados: `ar`, `br`, `cl`, `co`, `pe`, `uy`, `regional` |
| **unidad-negocio** | Minúscula. Ejemplos: `sm`, `mdh`, `txd`, `shp`, `crm`, `commerce`, `rf`, etc. Áreas corporativas: `corp`. |
| **bandera** | Minúscula. Ejemplos: `easy`, `paris`, `jumbo`, `spid35`, `bretas`, etc. Opción genérica por unidad de negocio posible (ej. `sm`, `mdh`). Áreas corporativas → área (`tecnologia`, `rrhh`, `fidelidad`, `finanzas`, `seguridad`). |
| **plataforma** | Obligatorio para VM Instance, Cloud SQL, GKE Cluster y Cloud Run. Valores: VM Instance → `windows`, `linux`; Cloud SQL → `mysql`, `sqlserver`, `postgresql`, `oracle`, `firestore`, `bigquery`; GKE → `gke` |
| **version-so** | Junto con `plataforma`, obligatorio para VM Instance, Cloud SQL, GKE Cluster y Cloud Run. Ejemplos: VM Instance → `rhel-7`, `sles-15`, `ubuntu`; Cloud SQL → `8-0`; GKE → `1-26` |

#### Labels obligatorios por recurso GCP

| Recurso | Name | propietario | creado-por | aplicacion | apl | ambiente | pais | unidad-negocio | bandera | proyecto | plataforma | version-so |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Compute VM Instance | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Compute Snapshot | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Compute Persistent Disk | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| GKE Cluster | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Cloud Run | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Cloud Load Balancing | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | |
| Cloud SQL | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| BigQuery | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Cloud Storage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Cloud Datastore | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Cloud KMS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Filestore | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Cloud Functions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Memorystore | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Otros Servicios | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |

---

### AZURE — Tags Obligatorios

| Tag | Descripción |
|---|---|
| **Name** | Nombre coloquial, distinto de «a-definir», «N/A». Ejemplos: `g900603sv001`, `servidorweb` |
| **propietario** | Responsable funcional. Email, lista de distribución o grupo que reciba correos externos a Cencosud. Ejemplo: `cct@cencosud.com` |
| **creado-por** | Responsable técnico. Email, lista de distribución o grupo que reciba correos externos a Cencosud. Ejemplo: `cct@cencosud.com` |
| **aplicacion** | Nombre coloquial de la aplicación. |
| **apl** | Código de aplicación en RUA (https://rua.cencosud.corp/login). Mismo valor para todos los recursos de la app. Debe comenzar con `apl`. Ejemplo: `apl123` |
| **proyecto** | Nombre del proyecto o EPM, minúscula. Ejemplos: `epm1111`, `epm_1111`, `go2cloud`, `piloto aviatrix` |
| **ambiente** | Minúscula, sin números. Ejemplos: `productivo`, `test`, `desarrollo`, `sandbox`, `dev`, `staging`, `pre-prod`, etc. |
| **pais** | Abreviatura en minúscula. Ejemplos: `ar`, `br`, `cl`, `co`, `pe`, `uy`, `regional` |
| **unidad-negocio** | Minúscula. Ejemplos: `sm`, `mdh`, `txd`, `shp`, `crm`, `commerce`, `rf`, etc. Áreas corporativas: `corp`. |
| **bandera** | Minúscula. Ejemplos: `easy`, `paris`, `jumbo`, `spid35`, `bretas`, etc. Opción genérica por unidad de negocio posible (ej. `sm`, `mdh`). Áreas corporativas → área (`tecnologia`, `rrhh`, `fidelidad`, `finanzas`, `seguridad`). |
| **plataforma** | Obligatorio para Azure VM, Azure SQL Database y AKS Cluster. Ejemplos: Azure VM → `windows`, `linux`; Azure SQL Database → `mysql`, `maria`, `postgres`, `sqlserver`, etc.; AKS → `aks` |
| **version-so** | Junto con `plataforma`, obligatorio para Azure VM, Azure SQL Database y AKS Cluster. Ejemplos: Azure VM → `rhel 7`, `sles 15`, `ubuntu`; Azure SQL Database → `8.0`; AKS → `1.22` |

#### Tags obligatorios por recurso AZURE

| Recurso | Name | propietario | creado-por | aplicacion | apl | ambiente | pais | unidad-negocio | bandera | proyecto | plataforma | version-so |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Azure VM Instance | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Azure Snapshot | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Azure Disks | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Azure Kubernetes Service (AKS) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Azure Load Balancer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | |
| Azure SQL Database | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Azure Cosmos DB | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Azure Blob Storage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Azure Synapse Analytics | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Azure Front Door | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Otros Servicios | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |

---

### OCI — Tags Obligatorios

| Tag | Descripción |
|---|---|
| **name** | Nombre coloquial (minúscula), distinto de «a-definir», «N/A». Ejemplos: `g900603sv001`, `servidorweb` |
| **propietario** | Responsable funcional. Email, lista de distribución o grupo que reciba correos externos a Cencosud. Ejemplo: `cct@cencosud.com` |
| **creado-por** | Responsable técnico. Email, lista de distribución o grupo que reciba correos externos a Cencosud. Ejemplo: `cct@cencosud.com` |
| **aplicacion** | Nombre coloquial de la aplicación. |
| **apl** | Código de aplicación en RUA (https://rua.cencosud.corp/login). Mismo valor para todos los recursos de la app. Debe comenzar con `apl`. Ejemplo: `apl123` |
| **proyecto** | Nombre del proyecto o EPM, minúscula. Ejemplos: `epm1111`, `epm_1111`, `go2cloud`, `piloto aviatrix` |
| **ambiente** | Minúscula, sin números. Ejemplos: `productivo`, `desarrollo`, `sandbox`, `dev`, `pre`, `prd`, `prod`, `tst`, `staging`, `pre-prod`, `desa`, `tmp`, `dmz`, etc. |
| **pais** | Abreviatura en minúscula. Ejemplos: `ar`, `br`, `cl`, `co`, `pe`, `uy`, `regional` |
| **unidad-negocio** | Minúscula. Ejemplos: `sm`, `mdh`, `txd`, `shp`, `crm`, `commerce`, `rf`, etc. Áreas corporativas: `corp`. |
| **bandera** | Minúscula. Ejemplos: `easy`, `paris`, `jumbo`, `spid35`, `bretas`, etc. Opción genérica por unidad de negocio posible (ej. `sm`, `mdh`). Áreas corporativas → área (`tecnologia`, `rrhh`, `fidelidad`, `finanzas`, `seguridad`). |
| **plataforma** | Obligatorio para Compute Instance y Oracle Base Database. Ejemplos: Compute Instance → `windows`, `linux`; Database → `oracle`, `mysql`, `exadata`, `exacc` |
| **version-so** | Junto con `plataforma`, obligatorio para Compute Instance y Oracle Base Database. Ejemplos: Compute Instance → `rhel 7`, `sles 15`, `ubuntu`; Database → `19.10.0.0.0`, `12.1.0.2.220118`, `22.1.10.0.0.230422` |

#### Tags obligatorios por recurso OCI

| Recurso | Name | propietario | creado-por | aplicacion | apl | ambiente | pais | unidad-negocio | bandera | proyecto | plataforma | version-so |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Compute Instance | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Block Volume | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Volume Backups | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Oracle DB System | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | |
| Oracle Exadata (on Dedicated Infrastructure) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| Oracle Exadata Cloud@Customer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PostgreSQL DB System | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| MySQL DB System | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| OCI Object Storage & Archive Storage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| OCI File Storage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| Otros Servicios | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | |

---

## Contacto

Si requiere apoyo técnico para realizar las configuraciones: **cct@cencosud.com**
