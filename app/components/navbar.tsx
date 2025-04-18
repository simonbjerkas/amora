import { Link, useRouterState } from '@tanstack/react-router'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'

import {
  HomeIcon,
  InfoIcon,
  PackageIcon,
  UserIcon,
  MenuIcon,
  MailIcon,
} from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { Cart } from './cart'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const links = [
  {
    label: 'Home',
    to: '/',
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    label: 'Products',
    to: '/products',
    icon: <PackageIcon className="h-4 w-4" />,
  },
  {
    label: 'About',
    to: '/about',
    icon: <InfoIcon className="h-4 w-4" />,
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: <MailIcon className="h-4 w-4" />,
  },
]

export function Navbar() {
  const {
    location: { pathname },
  } = useRouterState()
  const isActive = (path: string) => pathname === path
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo size="sm" />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex flex-row gap-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.to}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'hover:bg-accent hover:text-accent-foreground flex flex-row items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    )}
                  >
                    {link.icon}
                    <span className="relative">
                      {link.label}
                      <span
                        className={cn(
                          'bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all',
                          isActive(link.to) && 'w-full',
                        )}
                      />
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <section className="flex flex-row items-center gap-2">
          <Cart />
          <Button size="sm" className="rounded-full">
            <UserIcon className="mr-2 h-4 w-4" />
            <p className="mr-2">Login</p>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Navigation menu</SheetDescription>
            </SheetHeader>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="mt-8 flex h-full flex-col">
                <div className="flex-1 space-y-4 p-6">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="group hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-lg px-3 py-4 text-sm font-medium transition-all"
                    >
                      <div className="bg-accent/50 group-hover:bg-accent flex h-8 w-8 items-center justify-center rounded-full transition-colors">
                        {link.icon}
                      </div>
                      <span className="relative">
                        {link.label}
                        <span
                          className={cn(
                            'bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full',
                            isActive(link.to) && 'w-full',
                          )}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border-t p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                        <UserIcon className="text-primary h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Guest User</span>
                        <span className="text-muted-foreground text-xs">
                          Sign in to your account
                        </span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </section>
      </div>
    </header>
  )
}
