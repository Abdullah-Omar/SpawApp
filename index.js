const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./util/database-sequelize');

const people = require('./Models/people');

const City = require('./Models/City');
const People = require('./Models/people');

People.belongsTo(City, { constraints: true, onUpdate: 'Cascade' })
City.hasMany(People, {constraints: true, onUpdate: 'Cascade'})

City.update({id: 5},{where: {id:2}})
.then(dat=>{
    console.log(dat);
    

})
.catch(err=>{
    console.log(err);
    

})


sequelize.sync()
.then(result=>{
    console.log(sequelize.models);
})
.catch(err=>{

});