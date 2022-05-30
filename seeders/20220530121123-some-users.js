"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Leo Messi",
          email: "leo@messi.com",
          phone: 3165,
          password: "Password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thijmen Kirch",
          email: "thijmen@kirch.nl",
          phone: 3164,
          password: "Wachtwoord123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
