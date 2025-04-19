import { createFileRoute } from '@tanstack/react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useMutation, useQuery } from '@tanstack/react-query'
import { convexQuery, useConvexMutation } from '@convex-dev/react-query'
import { api } from 'convex/_generated/api'
import { Id } from 'convex/_generated/dataModel'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

const categoryFormSchema = z.object({
  categoryName: z.string().min(2, {
    message: 'Category name must be at least 2 characters.',
  }),
})

const productFormSchema = z.object({
  productName: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  productDescription: z.string().min(2, {
    message: 'Product description must be at least 2 characters.',
  }),
  productPrice: z.coerce.number().min(0, {
    message: 'Product price must be at least 0.',
  }),
  productStock: z.coerce.number().min(0, {
    message: 'Product stock must be at least 0.',
  }),
  categoryId: z.string().min(1, {
    message: 'Category is required.',
  }),
})

export function RouteComponent() {
  // const { mutate: addCategory } = useMutation({
  //   mutationFn: useConvexMutation(api.categories.add),
  // })
  // const { mutate: addProduct } = useMutation({
  //   mutationFn: useConvexMutation(api.products.add),
  // })
  const { data: categories } = useQuery(convexQuery(api.categories.get, {}))

  const categoryForm = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      categoryName: '',
    },
  })

  const productForm = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      productName: '',
      productDescription: '',
      productPrice: 0,
      productStock: 0,
      categoryId: '',
    },
  })

  function onCategorySubmit(values: z.infer<typeof categoryFormSchema>) {
    // addCategory({ name: values.categoryName })
    categoryForm.reset()
  }

  function onProductSubmit(values: z.infer<typeof productFormSchema>) {
    // addProduct({
    //   name: values.productName,
    //   description: values.productDescription,
    //   price: values.productPrice,
    //   stock: values.productStock,
    //   categoryId: values.categoryId as Id<'categories'>,
    // })
    productForm.reset()
  }

  return (
    <main className="my-8 flex flex-col gap-4">
      <Form {...categoryForm}>
        <form
          onSubmit={categoryForm.handleSubmit(onCategorySubmit)}
          className="space-y-8"
        >
          <FormField
            control={categoryForm.control}
            name="categoryName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input placeholder="Home decoration" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the category.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <Form {...productForm}>
        <form
          onSubmit={productForm.handleSubmit(onProductSubmit)}
          className="space-y-8"
        >
          <FormField
            control={productForm.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Home decoration" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={productForm.control}
            name="productDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Input placeholder="Home decoration" {...field} />
                </FormControl>
                <FormDescription>
                  This is the description of the product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={productForm.control}
            name="productStock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Stock</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={productForm.control}
            name="productPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={productForm.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories?.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}
