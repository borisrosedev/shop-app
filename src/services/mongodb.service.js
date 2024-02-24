export class MongodbService {


    static async loginUser(data){
        const response = await fetch(
            import.meta.env.VITE_API_URL + "/api/users/login",
            {
              method: "POST",
              headers: {
                "cotent-type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
        const user = await response.json();
    }


    static async storeProduct(data){
        const response = await fetch(import.meta.env.VITE_MONGO_API_URL+'/api/products', {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const newProduct = await response.json();
        return newProduct
    }

    static async fetchProducts(){
    
        try {
            const response = await fetch(import.meta.env.VITE_MONGO_API_URL+'/api/products'); 
            const products = await response.json();
            return products          
        } catch(e){
            console.log('❌ impossible accès à la bdd mongo')
            return []
        }
       
  
    }


}