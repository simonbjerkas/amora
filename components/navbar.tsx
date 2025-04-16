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

const links = [
  {
    label: 'Home',
    to: '/',
    icon: <HomeIcon />,
  },
  {
    label: 'About',
    to: '/about',
    icon: <InfoIcon />,
  },
  {
    label: 'Products',
    to: '/products',
    icon: <PackageIcon />,
  },
]

export function Navbar() {
  return (
    <header className="bg-accent py-8">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-4">
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuItem>
                  <Link to={link.to}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'flex flex-row items-center gap-2',
                      )}
                    >
                      {link.icon}
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <section className="flex flex-row gap-4">
          <Button variant="outline">
            <ShoppingCartIcon /> Cart
          </Button>
          <Button>
            <UserIcon /> Login
          </Button>
        </section>
      </div>
    </header>
  )
}

function Logo() {
  return <Link to="/">Amora</Link>
}
