import { Link } from '@tanstack/react-router'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import {
  HomeIcon,
  InfoIcon,
  PackageIcon,
  ShoppingCartIcon,
  UserIcon,
} from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

const links = [
  {
    label: 'Home',
    to: '/',
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    label: 'About',
    to: '/about',
    icon: <InfoIcon className="h-4 w-4" />,
  },
  {
    label: 'Products',
    to: '/products',
    icon: <PackageIcon className="h-4 w-4" />,
  },
]

export function Navbar() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo size="sm" />

        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                <Link to={link.to}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'hover:bg-accent hover:text-accent-foreground flex flex-row items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    )}
                  >
                    {link.icon}
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <section className="flex flex-row gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <ShoppingCartIcon className="mr-2 h-4 w-4" /> Cart
          </Button>
          <Button size="sm" className="rounded-full">
            <UserIcon className="mr-2 h-4 w-4" /> Login
          </Button>
        </section>
      </div>
    </header>
  )
}
