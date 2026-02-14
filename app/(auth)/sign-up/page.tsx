import SignUpForm from './_module/sign-up-form'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold">Hackathon Nova</h1>
          <p className="text-sm text-muted-foreground mt-1">Create your account</p>
        </div>
        <SignUpForm />
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/sign-in" className="text-primary hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}
