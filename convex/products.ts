import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const getByCategory = query({
  args: { categoryId: v.id('categories') },
  handler: async (ctx, args) => {
    return []
    const productIds = await ctx.db
      .query('productCategories')
      .withIndex('by_category', (q) => q.eq('categoryId', args.categoryId))
      .collect()
    return await Promise.all(productIds.map((id) => ctx.db.get(id.productId)))
  },
})

export const add = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    stock: v.number(),
    categoryId: v.id('categories'),
  },
  handler: async (ctx, args) => {
    return ''
    const productId = await ctx.db.insert('products', {
      name: args.name,
      description: args.description,
      price: args.price,
      stock: args.stock,
    })
    await ctx.db.insert('productCategories', {
      productId,
      categoryId: args.categoryId,
    })
    return productId
  },
})
