const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        default: '',       
    },
    lastName: {
        type: String,
        default: '',        
    },
    email: {
        type: String,
        default: '',        
    },
    phone: {
        type: String,
        default: '',        
    },
    linkedIn: {
        type: String,
        default: '',       
    },
    gitHub: {
        type: String,
        default: '',        
    },
    careerObjective: {
        type: String,
        default: '',        
    },
    address: {
        type: String,
        default: '',        
    },
    education: {
        type: Array,
        default: [], 
    },
    skills: {
        type: Array,
        default: [],
    },
    experience: {
        type: Array,
        default: [], 
    },
    projects: {
        type: Array,
        default: [], 
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);