interface PageHeadingProps {
  title: string
  description?: string
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}
