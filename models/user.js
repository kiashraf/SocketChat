const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    fullName: { type: String, default: '' },
    password: { type: String, default: '' },
    facebook: { type: String, default: '' },
    fbTokens: Array,
    userImage: { type: String, default: '' },
    google: { type: String, default: '' },
    googleTokens: Array

});
userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}
userSchema.methods.validUserPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema);