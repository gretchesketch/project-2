const User = require('./User');
const Dog = require('./Dog');

User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Dog.belongsTo(Dog, {
  foreignKey: "user_id"
});

module.exports = { User, Dog };
