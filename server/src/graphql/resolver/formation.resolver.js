const { FormationService } = require('../../services')

const FormationResolver = {
  getFormations: async () => {
    return await FormationService.getFormations()
  },

  getFormation: async (args) => {
    return await FormationService.getFormation(args)
  },

  createFormation: async (args) => {
    return await FormationService.createFormation(args)
  },

  deleteFormation: async (args) => {
    return await FormationService.deleteFormation(args)
  },

  deleteFormations: async () => FormationService.deleteFormations(),

  updateFormation: async (id, input) => {
    return await FormationService.updateFormation(id, input)
  },

}

module.exports = FormationResolver