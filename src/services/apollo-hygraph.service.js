import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
const hygraphClient = new GraphQLClient(import.meta.VITE_HYGRAPH_URL);

class ApolloHygraphService {
  name = "ApolloHygraphService";

  static async addProduct(data){
    try {
      const data = await hygraphClient.request(
        gql`
          mutation {
            createProduct(data:{name: ${JSON.stringify(data.name)}, url: ${JSON.stringify(data.url)}, price: ${JSON.stringify(data.price)}, description: ${JSON.stringify(data.description)} }){
              name 
              url
              price
              description
            }
          }
        `,
      );
      return data
    } catch (e) {
      // handle error
      console.log('❌ Erreur', e)
    }


  }

  static async fetchProducts(data){
    try {
      const data = await hygraphClient.request(
        gql`
          query {
            products {
              name
              url 
            }
          }
        `,
      );
      return data
    } catch (e) {
      // handle error
      console.log('❌ Erreur', e)
    }
  }




}
