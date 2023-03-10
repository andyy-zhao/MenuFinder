let restaurants

export default class RestaurantDAO {
    static async injectDB(conn) {
        if (restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTLIST).collection("RestaurantList")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in restaurantsDAO: ${e}`,
            )
        }
    }

    static async getRestaurants({
        filters = null
    } = {}) {
        let query 
        if (filters) {
            
        }
    }
}