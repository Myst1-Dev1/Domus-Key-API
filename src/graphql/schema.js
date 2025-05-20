import { gql } from 'graphql-tag';

export const immobileTypes = gql`
    type Immobile {
        id: ID!
        img: String!
        perspectiveImgs: [String!]!
        title: String!
        location: String!
        description: String!
        price: Float!
        bedNumbers: Int!
        bathNumbers: Int!
        propertySize: Float!
        latitude: String!
        longitude: String!
        immobileType: String!
        ownerImg: String!
        ownerName: String!
    }

    type Query {
        immobiles: [Immobile!]!
        immobile(id: ID!): Immobile
    }

    type Mutation {
        createImmobile(
            img: String!
            perspectiveImgs: [String!]!
            title: String!
            location: String!
            description: String!
            price: Float!
            bedNumbers: Int!
            bathNumbers: Int!
            propertySize: Float!
            latitude: String!
            longitude: String!
            immobileType: String!
            ownerImg: String!
            ownerName: String!
        ) : Immobile

        deleteImmobile(id: ID!): Boolean

        updateImmobile(
            id: ID!
            img: String!
            title: String!
            location: String!
            description: String!
            price: Float!
            bedNumbers: Int!
            bathNumbers: Int!
            propertySize: Float!
            latitude: String!
            longitude: String!
            immobileType: String!
            ownerImg: String!
            ownerName: String!
        ) : Immobile
    }
`