import { Link } from '@tanstack/react-router'
import { HeartIcon } from 'lucide-react'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-muted-foreground text-sm">
              Bringing beauty and comfort to your home with our carefully
              curated collection of decor items.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Shop</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Company</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Connect</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-12 border-t pt-8 text-center text-sm">
          <p className="flex items-center justify-center">
            Created with <HeartIcon className="text-primary mx-1 h-4 w-4" /> by{' '}
            <a
              href="https://github.com/amora-dev"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary ml-1 font-medium"
            >
              Amora
            </a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Amora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
