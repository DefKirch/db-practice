"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Walk the dog",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Do the dishes",
          deadline: "tonight",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Study",
          deadline: "next week",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
