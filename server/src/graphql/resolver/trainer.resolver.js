const { TrainerService } = require('../../services')

const TrainerResolver = {
  getTrainers: async () => {
    return await TrainerService.getTrainers()
  },

  getTrainer: async (args) => {
    return await TrainerService.getTrainer(args)
  },

  createTrainer: async (args) => {
    return await TrainerService.createTrainer(args)
  },

  deleteTrainer: async (args) => {
    return await TrainerService.deleteTrainer(args)
  },

  deleteTrainers: async () => TrainerService.deleteTrainers(),

  updateTrainer: async (id, input) => {
    return await TrainerService.updateTrainer(id, input)
  },

}

module.exports = TrainerResolver