const { AuthenticationError } = require('apollo-server-express');
const { User, Patient, MedicalProvider, Appointment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    patients: async () => {
      return await Patient.find();
    },
    providers: async () => {
      return await MedicalProvider.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    patient: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id); 
        const result = await Patient.findOne({userId: user._id });
        return result;
      }      
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    /********* User Related *************** */
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    /********* Patient Related *************** */
    addOrUpdatePatient: async (parent, args, context) => {
      if (context.user) {
        const filter = {userId: context.user._id};
        const update = {...args,  userId: context.user._id  };
        return await Patient.findOneAndUpdate(filter, update, { new: true, upsert: true });
      }
      throw new AuthenticationError('Not logged in');
    },
    /********* Appointment Related *************** */
    addAppointment: async (parent, args, context) => {
      if (context.user) {
        const filter = {userId: context.user._id};
        const appointment = {...args }; //Appointment data
        return await Patient.findOneAndUpdate(filter, 
        {
          "$push": {appointments: appointment}
        }, { new: true, upsert: true });
      }
      throw new AuthenticationError('Not logged in');
    },
     /********* Login Related *************** */
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;
