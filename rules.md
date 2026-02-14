# Hackathon Nova - Admin Design & Architecture Rules

## Design System

### Color Palette (CSS Variables)

All colors are defined in \`app/globals.css\` under :root:

### Typography

- **Font**: Open Sans (defined in \`app/layout.tsx\`)
- **Base size**: text-sm (14px)
- **Headings**:
  - h1: text-xl font-semibold
  - h2: text-lg font-semibold
  - h3: text-base font-semibold

### Spacing System

- **Compact by default**: Use smaller padding/margins
- Header height: h-14 (56px)
- Sidebar width: w-56 (224px) / w-16 (64px) collapsed
- Content padding: p-4 (16px)
- Card padding: default from UCard
- Gap between elements: gap-2 or gap-3

### Visual Style

- **No rounded corners**: --radius is set to 0
- **Border-based + Grid style**: Use borders for separation, grid for internal alignment
- **Minimal colors**: Use CSS variables defined above

---

## Component Architecture

### Component Location

```
components/
├── ui/                    # Base UI components (Radix primitives)
│   ├── button/
│   ├── card/
│   ├── dialog/
│   ├── input/
│   ├── label/
│   └── select/
├── form/                  # Form components (integrates with @tanstack/react-form)
│   ├── context.tsx       # createFormHookContexts
│   ├── f-input.tsx       # FInput component
│   ├── f-select.tsx      # FSelect component
│   ├── index.ts         # exports useAppForm, FInput, FSelect
│   └── input/
│       └── input-wrapper.tsx
├── layout/                # Layout providers
│   ├── query-provider.tsx
│   ├── toast-provider.tsx
│   ├── context-provider.tsx
│   ├── client-provider.tsx
│   └── sidebar/
│       ├── index.tsx
│       ├── main.tsx
│       └── context.tsx
└── demo/                  # Demo components
    └── form-demo.tsx
```

### Naming Convention

| Prefix | Type | Description                                      | Example                 |
| ------ | ---- | ------------------------------------------------ | ----------------------- |
| **U**  | UI   | Base components using Radix primitives           | \`UInput\`, \`USelect\` |
| **F**  | Form | Components integrating with @tanstack/react-form | \`FSelect\`, \`FInput\` |

### UI Component Pattern (Base Components)

Each UI component should follow this pattern:

```tsx
// components/ui/component-name/component-name.tsx
import { cn } from '@/lib/utils'

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean // Add error prop for form inputs
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, error, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('border border-border bg-card', error && 'border-destructive', className)}
      {...props}
    />
  )
)
ComponentName.displayName = 'ComponentName'

export { ComponentName }
```

---

## Best Practices

### 1. DRY - Don't Repeat Yourself

**Form components MUST reuse UI components:**

- \`FSelect\` imports \`USelect, USelectContent, USelectItem\` from \`@/components/ui/select\`
- Do NOT recreate Radix primitives in form components
- Reuse \`USelectItem\` from UI select

### 2. Always use CSS Variables

Don't use hardcoded colors. Use:

```tsx
// Good
className = 'bg-primary text-foreground border-border'

// Bad
className = 'bg-green-700 text-slate-950 border-slate-200'
```

### 3. Keep Components Small

- One component per file
- Use composition
- Extract repeated patterns

### 4. Use TypeScript

- Always define prop types
- Use interfaces for complex objects

### 5. Client vs Server Components

- Use \`"use client"\` only when needed (hooks, event handlers, interactivity)
- Default to server components
- Layouts can be client components if they need state

### 6. Import Order

```tsx
// 1. React/Next imports
import { useState } from 'react'
import Link from 'next/link'

// 2. External libraries
import { cn } from '@/lib/utils'

// 3. Internal components
import { UButton, UInput } from '@/components/ui'
import { FSelect } from '@/components/form'
import Sidebar from './sidebar'
```

### 7. File Naming

- Components: \`component-name.tsx\` (lowercase with hyphens)
- Index files: \`index.ts\` (export from parent folder)
- Pages: \`page.tsx\`

---

## Quick Reference

### Common CSS Classes

| Element | Classes                                    |
| ------- | ------------------------------------------ |
| Card    | \`border border-border bg-card\`           |
| Input   | \`h-9 px-3 border-border focus:ring-ring\` |
| Button  | \`h-9 px-4 text-sm font-medium\`           |
| Sidebar | \`fixed w-56 h-screen border-r\`           |
| Header  | \`sticky top-0 h-14 border-b\`             |

### Icon Library

Using \`lucide-react\`:

```tsx
import { Bell, Search, User, Settings } from 'lucide-react'
```
