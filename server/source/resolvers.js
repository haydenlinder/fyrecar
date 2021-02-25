fs = require('fs')
const data = require('./data')

const { cars, owners } = data

const resolvers = {
    Query: {
        cars(parent, args) {
            return args.id ? cars.filter(car => car.id == args.id) : cars
        },
        owners(parent, args) {
            return args.id ? owners.filter(owner => owner.id == args.id) : owners
        },
    },
    Mutation: {
        car(parent, args) {
            const newCar = {...args}
            newCar.isAvailable = false
            newCar.schedule = new Date()
            newCar.isIdle = true
            newCar.id = cars[cars.length-1].id + 1
            data.cars.push(newCar)
            const newData = "const data = " + JSON.stringify(data) + "\nmodule.exports = data"
            fs.writeFileSync('./source/data.js', newData)
            return newCar
        }
    },
    Owner: {
        cars(parent) {
            return cars.filter(car => car.ownerId == parent.id)
        }
    },
    Car: {
        owner(parent) {
            return owners.find(owner => owner.id == parent.ownerId)
        }
    }
}

module.exports = resolvers