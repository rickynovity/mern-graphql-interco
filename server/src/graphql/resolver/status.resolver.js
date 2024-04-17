const { StatusService } = require('../../services')

const StatusResolver = {
  getAllStatus: async () => {
    return await StatusService.getAllStatus()
  },

  getStatus: async (args) => {
    return await StatusService.getStatus(args)
  },

  createStatus: async (args) => {
    return await StatusService.createStatus(args)
  },

  deleteStatus: async (args) => {
    return await StatusService.deleteStatus(args)
  },

  deleteAllStatus: async () => StatusService.deleteAllStatus(),

  updateStatus: async (id, input) => {
    return await StatusService.updateStatus(id, input)
  },

}

module.exports = StatusResolver