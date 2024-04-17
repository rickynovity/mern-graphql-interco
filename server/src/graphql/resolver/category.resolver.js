const { CategoryService } = require('../../services')

const CategoryResolver = {
  getCategories: async () => {
    return await CategoryService.getCategories()
  },

  getCategory: async (args) => {
    return await CategoryService.getCategory(args)
  },

  createCategory: async (args) => {
    return await CategoryService.createCategory(args)
  },

  deleteCategory: async (args) => {
    return await CategoryService.deleteCategory(args)
  },

  deleteCategories: async () => CategoryService.deleteCategories(),

  updateCategory: async (id, input) => {
    return await CategoryService.updateCategory(id, input)
  },

}

module.exports = CategoryResolver