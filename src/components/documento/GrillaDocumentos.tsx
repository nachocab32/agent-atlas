import { FileText } from 'lucide-react'
import { madurezGuiaLabel } from '@/data/documentos'
import { TarjetaCatalogo } from '@/shared/ui'
import type { DocumentoGuia } from '@/types/documento'

interface GrillaDocumentosProps {
  documentos: DocumentoGuia[]
  onSeleccionarDocumento: (documento: DocumentoGuia) => void
}

// Sin ícono propio por documento en los datos (ver ASUNCIÓN 3): se usa un
// ícono genérico de documento para todas las tarjetas de Guías.
export function GrillaDocumentos({ documentos, onSeleccionarDocumento }: GrillaDocumentosProps) {
  if (documentos.length === 0) {
    return <p className="text-sm text-muted-foreground">No hay documentos que calcen con este filtro.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-[var(--space-control)] sm:grid-cols-2">
      {documentos.map((documento) => (
        <TarjetaCatalogo
          key={documento.id}
          icono={FileText}
          titulo={documento.titulo}
          descripcion={documento.descripcion}
          metadata={`${documento.categorias.join(', ')} · ${documento.owner} · ${madurezGuiaLabel[documento.madurez]}`}
          onSeleccionar={() => onSeleccionarDocumento(documento)}
        />
      ))}
    </div>
  )
}
