'use strict';

const md5 = require('md5');
const moment = require('moment');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   //console.log(moment(Sequelize.NOW()).format('YYYY-MM-DD HH:mm:ss'));
    return queryInterface.bulkInsert('Users', [{
        username: 'Kimoo',
        password: md5('123456')
        //createdAt:moment(Sequelize.NOW()).format('YYYY-MM-DD HH:mm:ss'),
       // updatedAt:moment(Sequelize.NOW()).format('YYYY-MM-DD HH:mm:ss'),
       
      },
      {
        username: 'Reci',
        password: md5('123321')
        //:moment(Sequelize.NOW()).format('YYYY-MM-DD HH:mm:ss'),
        //updatedAt:moment(Sequelize.NOW()).format('YYYY-MM-DD HH:mm:ss'),
      }
    ], {})
   /*  .then(data => {
      return queryInterface.bulkInsert('Contents', [{
          user_id: 1,
          title: 'aaaaa',
          content: '1111111',
          comment_count: 2,
          createdAt:Sequelize.literal('NOW()'),
        updatedAt:Sequelize.literal('NOW()'),
        },
        {
          user_id: 2,
          title: 'bbbbbb',
          content: '22222222',
          comment_count: 1,
          createdAt:Sequelize.literal('NOW()'),
          updatedAt:Sequelize.literal('NOW()'),
        
        },
        {
          user_id: 1,
          title: 'ccccccc',
          content: '3333333',
          comment_count: 1,
          createdAt:Sequelize.literal('NOW()'),
          updatedAt:Sequelize.literal('NOW()'),
         
        },
        {
          user_id: 2,
          title: 'ddddd',
          content: '444444',
          comment_count: 3,
          createdAt:Sequelize.literal('NOW()'),
          updatedAt:Sequelize.literal('NOW()'),
         
        },
        {
          user_id: 1,
          title: 'eeeee',
          content: '5555555',
          comment_count: 4,
          createdAt:Sequelize.literal('NOW()'),
          updatedAt:Sequelize.literal('NOW()'),
         
        }
      ], {}) */
      /* .then(data => {
        return queryInterface.bulkInsert('Comments', [{
            content_id: 1,
            user_id: 1,
            content: '评论内容11111111',
            createdAt:Sequelize.literal('NOW()'),
            updatedAt:Sequelize.literal('NOW()'),
            
          },
          {
            content_id: 1,
            user_id: 2,
            content: '评论内容22222',
            createdAt:Sequelize.literal('NOW()'),
            updatedAt:Sequelize.literal('NOW()'),
           
          },
          {
            content_id: 2,
            user_id: 1,
            content: '评论内容33333333',
            createdAt:Sequelize.literal('NOW()'),
            updatedAt:Sequelize.literal('NOW()'),
             
          }
        ]); */
      //})
   // }
    //);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};