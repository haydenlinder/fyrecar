const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        cars(id: ID): [Car]
        owners: [Owner]
    }

    type Mutation {
        car(
            ownerId: ID!
            make: String!
            model: String!
            year: String! 
            vin: String!
            photoUrl: String!
        ): Car
    }

    type Car {
        "An owner's car"
        id: ID!
        owner: Owner!
        ownerId: ID!
        make: String!
        model: String!
        "Per the requirements in the README, the year is a String"
        year: String! 
        vin: String!
        photoUrl: String!
        isAvailable: Boolean!
        isIdle: Boolean!
        schedule: String!
    }

    type Owner {
        id: ID!
        firstName: String!
        lastName: String!
        cars: [Car]
    }
`

module.exports = typeDefs