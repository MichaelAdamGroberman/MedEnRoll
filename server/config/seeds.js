const db = require('./connection');
const { User, Patient, MedicalProvider } = require('../models');

db.once('open', async () => {
  await MedicalProvider.deleteMany();

  const medicalProviders = await MedicalProvider.insertMany([
    { name: 'Doctor 1', description: "First Doctor" },
    { name: 'Doctor 2', description: "Second Doctor" },
    { name: 'Doctor 3', description: "Third Doctor" },
    { name: 'Doctor 4', description: "Forth Doctor" },
    { name: 'Doctor 5', description: "Fifth Doctor" }
  ]);

  console.log('Medical providers seeded');

  await Patient.deleteMany();
  const regDate = new Date();

  const patients = await Patient.insertMany([
    {
      registrationDate: regDate,
      firstName: 'PFirst1',     
      lastName: 'PLast',     
      gender: 'Male',
      maritialStatus: 'Single',     
    },{
      registrationDate: regDate,
      firstName: 'PFirst2',     
      lastName: 'PLast2',     
      gender: 'Female',
      maritialStatus: 'Married',       
    },{
      registrationDate: regDate,
      firstName: 'PFirst3',     
      lastName: 'PLast3',     
      gender: 'Male', 
      maritialStatus: 'Married',     
    },{
      registrationDate: regDate,
      firstName: 'PFirst4',     
      lastName: 'PLast4',     
      gender: 'Male',
      maritialStatus: 'Single',     
    },
  ]);

  console.log('Patients seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('Users seeded');

  process.exit();
});
