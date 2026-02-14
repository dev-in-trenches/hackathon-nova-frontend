'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export type Column<T> = {
  key: string
  header: React.ReactNode
  width?: string
  render: (row: T) => React.ReactNode
}

type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
  total?: number
  selected?: string[]
  getRowId?: (row: T) => string
  onSelectedChange?: (ids: string[]) => void
  isLoading?: boolean
  href?: (row: T) => string
}

export function DataTable<T>({
  data,
  columns,
  selected,
  total = 0,
  isLoading,
  href,
  getRowId,
  onSelectedChange,
}: DataTableProps<T>) {
  const selectable = !!selected && !!onSelectedChange && !!getRowId

  const allSelected = selectable && selected.length === data?.length

  const someSelected = selectable && selected.length > 0 && !allSelected

  const toggleAll = () => {
    if (!selectable) return
    onSelectedChange!(allSelected ? [] : data?.map(getRowId!))
  }

  const toggleOne = (id: string) => {
    if (!selectable) return
    onSelectedChange!(
      selected!.includes(id) ? selected!.filter((i) => i !== id) : [...selected!, id]
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full border">
        <div className="relative max-h-[600px] w-full overflow-auto">
          <table className="w-full min-w-max border-collapse whitespace-nowrap">
            <thead className="sticky top-0 bg-muted z-5">
              <tr>
                {selectable && (
                  <th className="px-4 py-3 w-[48px]">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      ref={(el) => {
                        if (el) el.indeterminate = someSelected
                      }}
                      onChange={toggleAll}
                      className="h-4 w-4"
                    />
                  </th>
                )}

                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-sm text-left font-semibold"
                    style={{ minWidth: col.width }}
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="h-[600px] relative text-center cursor-not-allowed"
                  >
                    <div className="flex justify-center absolute w-full z-5">
                      <p>Loading...</p>
                    </div>
                  </td>
                </tr>
              ) : data?.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="h-40 text-center text-sm text-muted-foreground"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p>No data available</p>
                    </div>
                  </td>
                </tr>
              ) : (
                data?.map((row) => {
                  const rowId = selectable ? getRowId!(row) : null
                  const checked = selectable && selected!.includes(rowId!)

                  return (
                    <tr
                      key={rowId ?? JSON.stringify(row)}
                      className={cn('hover:bg-muted/50 border-t', checked && 'bg-muted')}
                    >
                      {selectable && (
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleOne(rowId!)}
                            className="h-4 w-4"
                          />
                        </td>
                      )}

                      {columns.map((col) => {
                        const content = col.render(row)

                        return (
                          <td key={col.key} className="px-4 py-3 text-sm">
                            {href ? (
                              <a href={href(row)} className="block w-full h-full">
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      {total > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Total {total}</p>
        </div>
      )}
    </div>
  )
}
