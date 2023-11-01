'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      id: "28dbee4a-b305-4cce-bc3b-1944b2ce0377",
      name: "Folarin Stephen",
      phone_number: "08069081214"
      email: "folarinsteven007@gmail.com",
      date_of_birth: "15091993",
      gender: "male"
     }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {id: "28dbee4a-b305-4cce-bc3b-1944b2ce0377"})
  }
};
