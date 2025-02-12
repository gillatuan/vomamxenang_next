import { gql } from "@apollo/client";

export const Profile_Get = gql`
  query FindOne($id: String!) {
    findOne(id: $id) {
      email
      phone
      address
    }
  }
`;
