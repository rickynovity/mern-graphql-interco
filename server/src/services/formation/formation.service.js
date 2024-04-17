const { OK, KO } = require('../../graphql/resolver/helpers');
const Formation = require('./schema')

const FormationService = {
  getFormations: async () => {
    try {
      const totalFormations = await Formation.countDocuments();
      console.log('All formations : ', totalFormations);
      return await Formation.find()
    } catch (error) {
      throw new Error(`Error retrieving formations: ${error.message}`)
    }
  },

  getFormation: async (id) => {
    try {
      // return await  Formation.findOne(id)
      console.log('SERVICE_FIND_ONE : ', id);
      return await Formation.findById(id)
    } catch (error) {
      throw new Error(`Error retrieving formation: ${error.message}`)
    }
  },

  createFormation: async (formationData) => {
    try {
      if (!formationData) {
        console.log('❌ Error : formationData cannot be null');
        throw new Error('formationData cannot be null');
      }
      console.log('SERVICE_CREATE : ', formationData)
      return await Formation.create(formationData)
    } catch (error) {
      throw new Error(`Error creating Formation: ${error.message}`)
    }
  },

  deleteFormation: async (id) => {
    try {
      const FormationBeforeDeletion = await Formation.findById(id);
      const deleteResult = await Formation.findByIdAndDelete(id)
      if (!deleteResult) {
        throw new Error('No formation was deleted');
      }
      return OK({ formation: FormationBeforeDeletion });
    } catch (error) {
      return KO(`Error deleting formation with id ${id}: ${error.message}`)
    }
  },

  deleteFormations: async () => {
    try {
      const FormationsBeforeDeletion = await Formation.find({});
      const deleteResult = await Formation.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error('No formations were deleted');
      }
      return OK({ formations: FormationsBeforeDeletion });
    } catch (error) {
      return KO(`Error deleting formations: ${error.message}`);
    }
  },

  updateFormation: async (id, newData) => {
    try {
      return await Formation.findByIdAndUpdate(id, newData, { new: true })
    } catch (error) {
      throw new Error(`Error updating formation with id ${id}: ${error.message}`)
    }
  }
}

module.exports = FormationService
