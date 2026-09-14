export function TablaSimple({ columnas, filas }: { columnas: string[]; filas: string[][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted text-xs text-muted-foreground">
          <tr>
            {columnas.map((columna) => (
              <th key={columna} className="px-4 py-3 font-medium">
                {columna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila[0]} className="border-t border-border align-top">
              {fila.map((celda, index) => (
                <td key={celda + index} className={index === 0 ? 'px-4 py-3 font-medium text-foreground' : 'px-4 py-3 text-muted-foreground'}>
                  {celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
