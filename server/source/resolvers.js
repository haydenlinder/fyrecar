const { cars, owners } = require('./data')

const resolvers = {
    Query: {
        cars(parent, args) {
            return args.id ? cars.filter(car => car.id == args.id) : cars
        },
        owners(parent, args) {
            return owners
        },
    },
    Owner: {
        cars(parent) {
            return cars.filter(car => car.ownerId === parent.id)
        }
    },
    Car: {
        owner(parent) {
            return owners.find(owner => owner.id === parent.ownerId)
        }
    }
}

module.exports = resolvers