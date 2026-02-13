'use client'

import { useState } from 'react'
import {
  UButton,
  UCard,
  UCardContent,
  UCardDescription,
  UCardFooter,
  UCardHeader,
  UCardTitle,
  UCardGrid,
  UDialog,
  UDialogContent,
  UDialogDescription,
  UDialogFooter,
  UDialogHeader,
  UDialogTitle,
  UDialogTrigger,
  UInput,
  ULabel,
  USelect,
  USelectContent,
  USelectItem,
  USelectTrigger,
  USelectValue,
} from '@/components/ui'
import { Search } from 'lucide-react'
import FormDemo from '@/components/demo/form-demo'

export default function Index() {
  const [selectValue, setSelectValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Component Demo</h1>
        <p className="text-muted-foreground">Border + Grid based styling</p>
      </div>

      {/* Button */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Button</h2>
        <UCard>
          <UCardContent className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              <UButton>Default</UButton>
              <UButton variant="destructive">Destructive</UButton>
              <UButton variant="outline">Outline</UButton>
              <UButton variant="secondary">Secondary</UButton>
              <UButton variant="ghost">Ghost</UButton>
              <UButton variant="link">Link</UButton>
            </div>
            <div className="flex flex-wrap gap-2">
              <UButton size="sm">Small</UButton>
              <UButton size="default">Default</UButton>
              <UButton size="lg">Large</UButton>
              <UButton size="icon">
                <Search className="w-4 h-4" />
              </UButton>
            </div>
            <div className="flex flex-wrap gap-2">
              <UButton loading={loading} onClick={handleLoading}>
                Loading
              </UButton>
              <UButton disabled>Disabled</UButton>
            </div>
          </UCardContent>
        </UCard>
      </section>

      {/* Card */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Card</h2>
        <UCardGrid>
          <UCard>
            <UCardHeader>
              <UCardTitle>Card Title</UCardTitle>
              <UCardDescription>Card description goes here</UCardDescription>
            </UCardHeader>
            <UCardContent>
              <p className="text-sm">Card content with border + grid layout</p>
            </UCardContent>
            <UCardFooter>
              <UButton size="sm">Action</UButton>
            </UCardFooter>
          </UCard>
          <UCard>
            <UCardHeader>
              <UCardTitle>Another Card</UCardTitle>
            </UCardHeader>
            <UCardContent>
              <p className="text-sm">Using grid for internal alignment</p>
            </UCardContent>
          </UCard>
          <UCard>
            <UCardContent>
              <p className="text-sm font-medium">Card without header</p>
              <p className="text-sm text-muted-foreground">Simple card content</p>
            </UCardContent>
          </UCard>
        </UCardGrid>
      </section>

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Input</h2>
        <UCard>
          <UCardContent className="grid gap-4">
            <div className="grid gap-2">
              <ULabel htmlFor="input-1">Default Input</ULabel>
              <UInput id="input-1" placeholder="Enter text..." />
            </div>
            <div className="grid gap-2">
              <ULabel htmlFor="input-2">With Icon</ULabel>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <UInput id="input-2" placeholder="Search..." className="pl-9" />
              </div>
            </div>
            <div className="grid gap-2">
              <ULabel htmlFor="input-3">Disabled</ULabel>
              <UInput id="input-3" placeholder="Disabled" disabled />
            </div>
          </UCardContent>
        </UCard>
      </section>

      {/* Select */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Select</h2>
        <UCard>
          <UCardContent className="grid gap-4">
            <div className="grid gap-2">
              <ULabel>Basic Select</ULabel>
              <USelect value={selectValue} onValueChange={setSelectValue}>
                <USelectTrigger>
                  <USelectValue placeholder="Select an option" />
                </USelectTrigger>
                <USelectContent>
                  <USelectItem value="option-1">Option 1</USelectItem>
                  <USelectItem value="option-2">Option 2</USelectItem>
                  <USelectItem value="option-3">Option 3</USelectItem>
                </USelectContent>
              </USelect>
            </div>
          </UCardContent>
        </UCard>
      </section>

      {/* Form */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Form (TanStack Form)</h2>
        <FormDemo />
      </section>

      {/* Dialog */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Dialog</h2>
        <UCard>
          <UCardContent>
            <UDialog>
              <UDialogTrigger asChild>
                <UButton>Open Dialog</UButton>
              </UDialogTrigger>
              <UDialogContent>
                <UDialogHeader>
                  <UDialogTitle>Dialog Title</UDialogTitle>
                  <UDialogDescription>
                    This dialog demonstrates grid-based layout for header and footer sections.
                  </UDialogDescription>
                </UDialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <ULabel htmlFor="dialog-input">Name</ULabel>
                    <UInput id="dialog-input" placeholder="Enter name" />
                  </div>
                </div>
                <UDialogFooter>
                  <UButton variant="outline">Cancel</UButton>
                  <UButton>Confirm</UButton>
                </UDialogFooter>
              </UDialogContent>
            </UDialog>
          </UCardContent>
        </UCard>
      </section>
    </div>
  )
}
