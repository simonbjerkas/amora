import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    // Add other user fields as needed, e.g., address, auth identifiers
  }).index('by_email', ['email']),

  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    stock: v.number(),
    imageUrl: v.optional(v.string()),
    // Add other product fields like SKU, dimensions, weight, etc.
  }),

  categories: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
  }).index('by_name', ['name']),

  productCategories: defineTable({
    productId: v.id('products'),
    categoryId: v.id('categories'),
  })
    .index('by_product', ['productId'])
    .index('by_category', ['categoryId'])
    .index('by_product_category', ['productId', 'categoryId']),

  orders: defineTable({
    userId: v.id('users'),
    totalAmount: v.number(),
    status: v.union(
      // Example statuses
      v.literal('pending'),
      v.literal('processing'),
      v.literal('shipped'),
      v.literal('delivered'),
      v.literal('cancelled'),
    ),
    // Add other order fields like shipping address, billing address, timestamps
  })
    .index('by_user', ['userId']) // Index for finding orders by user
    .index('by_status', ['status']), // Index for querying orders by status

  orderItems: defineTable({
    orderId: v.id('orders'),
    productId: v.id('products'),
    quantity: v.number(),
    priceAtPurchase: v.number(),
  })
    .index('by_order', ['orderId'])
    .index('by_product', ['productId']),
})
