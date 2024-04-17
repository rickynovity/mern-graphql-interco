const { OK, KO } = require('../../graphql/resolver/helpers');
const Category = require('./schema')

const CategoryService = {
  getCategories: async () => {
    try {
      const totalCategories = await Category.countDocuments();
      console.log('All categories : ', totalCategories);
      return await Category.find()
    } catch (error) {
      throw new Error(`Error retrieving categories: ${error.message}`)
    }
  },

  getCategory: async (id) => {
    try {
      // return await  Category.findOne(id)
      console.log('SERVICE_FIND_ONE : ', id);
      return await Category.findById(id)
    } catch (error) {
      throw new Error(`Error retrieving category: ${error.message}`)
    }
  },

  createCategory: async (categoryData) => {
    try {
      if (!categoryData) {
        console.log('❌ Error : categoryData cannot be null');
        throw new Error('categoryData cannot be null');
      }
      console.log('SERVICE_CREATE : ', categoryData)
      return await Category.create(categoryData)
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`)
    }
  },

  deleteCategory: async (id) => {
    try {
      const categoryBeforeDeletion = await Category.findById(id);
      const deleteResult = await Category.findByIdAndDelete(id)
      if (!deleteResult) {
        throw new Error('No category was deleted');
      }
      return OK({ category: categoryBeforeDeletion });
    } catch (error) {
      return KO(`Error deleting category with id ${id}: ${error.message}`)
    }
  },

  deleteCategories: async () => {
    try {
      // Récupérer les catégories avant de les supprimer
      const categoriesBeforeDeletion = await Category.find({});
      // Logging des catégories avant la suppression
      // console.log('Categories before deletion:', categoriesBeforeDeletion);
      const deleteResult = await Category.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error('No categories were deleted');
      }
      return OK({ categories: categoriesBeforeDeletion });
    } catch (error) {
      return KO(`Error deleting categories: ${error.message}`);
    }
  },

  updateCategory: async (id, newData) => {
    try {
      return await Category.findByIdAndUpdate(id, newData, { new: true })
    } catch (error) {
      throw new Error(`Error updating category with id ${id}: ${error.message}`)
    }
  }
}

module.exports = CategoryService
