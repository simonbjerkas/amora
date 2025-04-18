import { v } from 'convex/values'
import { query } from './_generated/server'

export const getByCategory = query({
  args: { categoryId: v.id('categories') },
  handler: async (ctx, args) => {
    const productIds = await ctx.db
      .query('productCategories')
      .withIndex('by_category', (q) => q.eq('categoryId', args.categoryId))
      .collect()
    return await Promise.all(productIds.map((id) => ctx.db.get(id.productId)))
  },
})
