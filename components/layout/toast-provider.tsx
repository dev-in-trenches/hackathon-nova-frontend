'use client'

import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const toastOptions: ToasterProps = {
  className: 'group toast toast-group',
  toastOptions: {
    classNames: {
      toast: 'group toast group-[.toast]:bg-card group-[.toast]:text-foreground',
      description: 'group-[.toast]:text-muted-foreground',
      actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
      cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      closeButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
    },
  },
}

export default function LToastProvider() {
  return <Sonner position="top-right" {...toastOptions} />
}
