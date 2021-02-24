const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        cars(id: ID): [Car]
        owners: [Owner]
    }

    type Car {
        "An owner's car"
        id: ID!
        owner: Owner!
        make: String!
        model: String!
        "Per the requirements in the README, the year is a String"
        year: String! 
        vin: String!
        photoUrl: String!
        isAvailable: Boolean!
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