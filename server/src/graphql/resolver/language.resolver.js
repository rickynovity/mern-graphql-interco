const { LanguageService } = require('../../services')

const LanguageResolver = {
  getLanguages: async () => {
    return await LanguageService.getLanguages()
  },

  getLanguage: async (args) => {
    return await LanguageService.getLanguage(args)
  },

  createLanguage: async (args) => {
    return await LanguageService.createLanguage(args)
  },

  deleteLanguage: async (args) => {
    return await LanguageService.deleteLanguage(args)
  },

  deleteLanguages: async () => LanguageService.deleteLanguages(),

  updateLanguage: async (id, input) => {
    return await LanguageService.updateLanguage(id, input)
  },

}

module.exports = LanguageResolver