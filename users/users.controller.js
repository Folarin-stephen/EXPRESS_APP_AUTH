const db = require('./users.db');
const inventories = require('../data/inventories.json')

const getUsers = (req, res) => {
    req.user = db;
    res.status(200).json({
        data: req.user,
        error: null
    })


    const GetInventories = (req, res) => {
const query = req.query
let inventoriesDuplicate = inventories
if (query.price) {
    inventoriesDuplicate = inventoriesDuplicate.filter(std => std.price.includes(query.price))
}

if (req.limit) {
    inventoriesDuplicate = inventoriesDuplicate.slice(0, req.limit -1)
}

if (req.search) {
    inventoriesDuplicate = inventoriesDuplicate.filter(std => std.search.includes(query.search))
}
    res.status(200).json({
        data: inventoriesDuplicate,
        error: null
    })
}
}
const GetInventories = (req, res) => {
    const query = req.query
    let inventoriesDuplicate = inventories
    if (query.price) {
        inventoriesDuplicate = inventoriesDuplicate.filter(std => std.price.includes(query.price))
    }
    
    if (req.limit) {
        inventoriesDuplicate = inventoriesDuplicate.slice(0, req.limit -1)
    }
    
    if (req.search) {
        inventoriesDuplicate = inventoriesDuplicate.filter(std => std.search.includes(query.search))
    }
        res.status(200).json({
            data: inventoriesDuplicate,
            error: null
        })
    }

const createUser = (req, res) => {
const user = req.body;
user.api_key =`${user.username}_${user.password}`

if (user.username === 'stephen') {
    user.user_type = 'admin'
} else {
    user.user_type = 'user'
}

db.users.push(user)

return res.status(201).json({
    message: 'User Created Successfully',
    users: db.users
})
}


module.exports = {
    createUser,
    getUsers,
    GetInventories
}