import { ShoppingCartIcon, ShoppingBagIcon } from 'lucide-react'

import { Button } from './ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from './ui/sheet'

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full">
          <ShoppingCartIcon className="mr-2 h-4 w-4" />
          <p className="mr-2">Cart</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div>hei</div>
          </div>
        </div>
        <SheetFooter>
          <Button variant="outline" size="sm" className="rounded-full">
            <ShoppingBagIcon className="mr-2 h-4 w-4" /> Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
