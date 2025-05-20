import { Immobile } from '../models/Immobile.js';

export const resolvers = {
    Query: {
        immobiles: async() => await Immobile.find({}),
        immobile: async(_, {id}) => await Immobile.findById(id),
    },

    Mutation: {
        createImmobile: async(_, args) => {
            const newImmobile = new Immobile(args);

            return await newImmobile.save();
        },

        updateImmobile: async(_, { id, ...updatedFields }) => {
            return await Immobile.findByIdAndUpdate(id, updatedFields, { new: true });
        },

        deleteImmobile: async(_, {id}) => {
            const deletedImmobile = await Immobile.findByIdAndDelete(id);

            return !!deletedImmobile;
        }
    }
}