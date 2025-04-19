import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/bestsellers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>{'Hello "/products/bestsellers"!'}</div>
}
