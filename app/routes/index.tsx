import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="bg-background relative">
          <div className="absolute inset-0">
            <div className="from-primary/5 via-secondary/5 to-accent/5 absolute inset-0 bg-gradient-to-r" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />
          </div>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
              <div className="text-center">
                <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="from-primary via-accent to-destructive block bg-gradient-to-r bg-clip-text text-transparent">
                    Amora
                  </span>
                </h1>
                <p className="text-muted-foreground mt-6 text-lg leading-8">
                  Discover our collection of handpicked decor items that will
                  transform your space into a cozy haven.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 rounded-full"
                  >
                    Shop Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent/20 hover:bg-accent/10 rounded-full"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div className="from-primary/20 to-accent/20 aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr opacity-20" />
          </div>
          <div
            className="absolute -bottom-24 left-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div className="from-accent/20 to-destructive/20 aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
}
