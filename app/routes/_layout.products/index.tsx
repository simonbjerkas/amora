import { convexQuery } from '@convex-dev/react-query'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'
import { Id } from 'convex/_generated/dataModel'

export const Route = createFileRoute('/_layout/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: categories } = useSuspenseQuery(
    convexQuery(api.categories.get, {}),
  )
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
      <ProductList
        categoryId={categories[0]._id}
        category={categories[0].name}
      />
    </div>
  )
}

function ProductList({
  categoryId,
  category,
}: {
  categoryId: Id<'categories'>
  category: string
}) {
  const { data: products, isPending } = useQuery(
    convexQuery(api.products.getByCategory, { categoryId }),
  )
  if (isPending) return <div>Loading...</div>
  if (!products) return null

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {products.map(
          (product) => product && <li key={product._id}>{product.name}</li>,
        )}
      </ul>
    </div>
  )
}
