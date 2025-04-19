import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/sale')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>{'Hello "/products/sale"!'}</div>
}
