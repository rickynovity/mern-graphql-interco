const { OK, KO } = require('../../graphql/resolver/helpers');
const Language = require('./schema')

const LanguageService = {
  getLanguages: async () => {
    try {
      const totalLanguages = await Language.countDocuments();
      console.log('All languages : ', totalLanguages);
      return await Language.find()
    } catch (error) {
      throw new Error(`Error retrieving languages: ${error.message}`)
    }
  },

  getLanguage: async (id) => {
    try {
      // return await  Language.findOne(id)
      console.log('SERVICE_FIND_ONE : ', id);
      return await Language.findById(id)
    } catch (error) {
      throw new Error(`Error retrieving Language: ${error.message}`)
    }
  },

  createLanguage: async (languageData) => {
    try {
      if (!languageData) {
        console.log('❌ Error : languageData cannot be null');
        throw new Error('languageData cannot be null');
      }
      console.log('SERVICE_CREATE : ', languageData)
      return await Language.create(languageData)
    } catch (error) {
      throw new Error(`Error creating language: ${error.message}`)
    }
  },

  deleteLanguage: async (id) => {
    try {
      const LanguageBeforeDeletion = await Language.findById(id);
      const deleteResult = await Language.findByIdAndDelete(id)
      if (!deleteResult) {
        throw new Error('No language was deleted');
      }
      return OK({ language: LanguageBeforeDeletion });
    } catch (error) {
      return KO(`Error deleting language with id ${id}: ${error.message}`)
    }
  },

  deleteLanguages: async () => {
    try {
      const LanguagesBeforeDeletion = await Language.find({});
      const deleteResult = await Language.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error('No languages were deleted');
      }
      return OK({ languages: LanguagesBeforeDeletion });
    } catch (error) {
      return KO(`Error deleting languages: ${error.message}`);
    }
  },

  updateLanguage: async (id, newData) => {
    try {
      return await Language.findByIdAndUpdate(id, newData, { new: true })
    } catch (error) {
      throw new Error(`Error updating language with id ${id}: ${error.message}`)
    }
  }
}

module.exports = LanguageService
