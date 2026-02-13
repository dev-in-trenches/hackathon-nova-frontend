# Hackathon Nova - Admin Design & Architecture Rules

## Design System

### Color Palette (CSS Variables)

All colors are defined in \`app/globals.css\` under :root. Change these variables to customize the theme:

```css
:root {
  /* Core Colors */
  --color-primary: #1e293b; /* Main brand color */
  --color-secondary: #64748b; /* Secondary elements */
  --color-accent: #0f172a; /* Accent/highlight */
  --color-muted: #f1f5f9; /* Muted backgrounds */
  --color-border: #e2e8f0; /* Borders */
}
```

**Semantic colors** (automatically derived):

- \`--background\`: Page background (#ffffff)
- \`--foreground\`: Text color (#0f172a)
- \`--card\`: Card background
- \`--primary\`: Uses \`--color-primary\`
- \`--secondary\`: Uses \`--color-secondary\`
- \`--muted\`: Uses \`--color-muted\`
- \`--destructive\`: Error/delete actions (#ef4444)

### Typography

- **Font**: Inter (defined in \`app/layout.tsx\`)
- **Base size**: text-sm (14px)
- **Headings**:
  - h1: text-xl font-semibold
  - h2: text-lg font-semibold
  - h3: text-base font-semibold

### Spacing System

- **Compact by default**: Use smaller padding/margins
- Header height: h-14 (56px)
- Sidebar width: w-56 (224px) / w-14 (56px) collapsed
- Content padding: p-4 (16px)
- Card padding: p-3 (12px)
- Gap between elements: gap-2 or gap-3

### Visual Style

- **No rounded corners**: --radius is set to 0
- **Border-only style**: No shadows, use borders for separation
- **Minimal colors**: Only use the 5 core colors defined above

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
│   ├── select.tsx         # Reuses ui/select internally (DRY)
│   └── index.ts
├── admin/                 # Admin-specific components
│   ├── sidebar.tsx
│   ├── admin-layout.tsx
│   └── sidebar-context.tsx
└── layout/                # Layout providers
    ├── query-provider.tsx
    ├── toast-provider.tsx
    └── context-provider.tsx
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

### Form Component Pattern (DRY - Reuse UI Components)

**CRITICAL**: Form components MUST reuse UI components internally. Do NOT duplicate Radix primitives.

```tsx
// components/form/select.tsx
import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import {
  USelect,
  USelectContent,
  USelectItem,
  USelectTrigger,
  USelectValue,
} from '@/components/ui/select'

interface FSelectProps {
  name: string
  label?: string
  error?: boolean
  placeholder?: string
  className?: string
  children: React.ReactNode
}

const FSelect = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, FSelectProps>(
  ({ name, label, error, placeholder, children, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-sm font-medium mb-1.5 block">{label}</label>}
        <Select name={name}>
          <SelectTrigger ref={ref} error={error} className={className}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>{children}</SelectContent>
        </Select>
      </div>
    )
  }
)
FSelect.displayName = 'FSelect'

const FSelectItem = SelectItem // Reuse UI SelectItem

export { FSelect, FSelectItem }
```

### Base Styles for Form Inputs

All form inputs must use these base styles:

```tsx
// Input base styles
'flex h-9 w-full px-3 py-2 text-sm bg-transparent border border-border'
'placeholder:text-muted-foreground'
'focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring'
'disabled:cursor-not-allowed disabled:opacity-50'
```

Error state:

```tsx
'border-destructive focus:border-destructive focus:ring-destructive'
```

---

## Best Practices

### 1. DRY - Don't Repeat Yourself

**Form components MUST reuse UI components:**

- \`FSelect\` imports \`Select, SelectContent, SelectTrigger, SelectValue\` from \`@/components/ui/select\`
- Do NOT recreate Radix primitives in form components
- Reuse \`SelectItem\` from UI select

### 2. Always use CSS Variables

Don't use hardcoded colors. Use:

```tsx
// Good
className = 'bg-primary text-foreground border-border'

// Bad
className = 'bg-slate-900 text-slate-950 border-slate-200'
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

---

## Adding New Components

### Adding a UI Component (Base)

1. Create folder: \`components/ui/new-component/\`
2. Create \`new-component.tsx\` with base styles
3. Create \`index.ts\` with export
4. Add to \`components/ui/index.ts\`

### Adding a Form Component

1. Create folder: \`components/form/\` (if not exists)
2. Create \`new-component.tsx\`
3. **Import and reuse UI component internally**:
   ```tsx
   import { UComponent } from '@/components/ui/new-component'
   ```
4. Add \`name\`, \`label\`, \`error\` props
5. Add to \`components/form/index.ts\`

### Example: Creating FInput

```tsx
// components/form/input.tsx
import * as React from 'react'
import { Input as UInput } from '@/components/ui/input'

interface FInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: boolean
}

const FInput = React.forwardRef<HTMLInputElement, FInputProps>(
  ({ name, label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-sm font-medium mb-1.5 block">{label}</label>}
        <UInput name={name} error={error} className={className} ref={ref} {...props} />
      </div>
    )
  }
)
FInput.displayName = 'FInput'

export { FInput }
```

---

## Migration Notes

### v1.0.0 - Component Architecture Update

- **UI Components** (\`U\*\`): Base components using Radix primitives
- **Form Components** (\`F\*\`): Wrapper components with form integration
- **DRY Rule**: Form components MUST reuse UI components internally
- **Error Prop**: All form inputs support \`error\` prop for validation states
