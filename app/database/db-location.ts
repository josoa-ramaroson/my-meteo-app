
import * as SQLite from 'expo-sqlite';
import { TLocation } from '../types';

export class LocationsDB {

    private static dbConnection = (async () => await SQLite.openDatabaseAsync("locations.db"))();
    static async createTable() {
        const db = (await this.dbConnection)

        //  DROP TABLE IF EXISTS locations;
        db.
            execAsync(` CREATE TABLE IF NOT EXISTS 
            locations
            (
                id INTEGER PRIMARY KEY NOT NULL, 
                place_id TEXT,
                description TEXT,
                city TEXT,
                country TEXT,
                latitude DOUBLE,
                longitude DOUBLE
            )
            `);

        // Insert sample data
        // await db.runAsync(`INSERT INTO locations (place_id, description, city, country, latitude, longitude)
        //         VALUES 
        //         ('place_id_1GDG', 'description A', 'City A', 'Country X', 1.2345, 5.6789),
        //         ('place_id_2GFDREZ', 'description B', 'City B', 'Country Y', 2.3456, 6.7890),
        //         ('place_id_3EZREZDSQFQF', 'description C', 'City C', 'Country Z', 3.4567, 7.8901);
        //         `)

    }

    static async getAllLocations(): Promise<TLocation[]> {
        const db = (await this.dbConnection)
        const result: TLocation[] = await db.getAllAsync("SELECT * FROM locations");

        return result;
    }

    static async getAllCity() {
        const db = (await this.dbConnection)
        const result = db.getAllAsync("SELECT city, place_id FROM locations");
        return result;
    }

    static async saveLocation(location: TLocation) {

        const db = (await this.dbConnection)
        console.log('====================================');
        console.log(location);
        console.log('=================================  ===');
        await db.runAsync(`INSERT INTO locations (place_id, description, city, country, latitude, longitude)
            VALUES 
            ('${location.place_id}', '${location.description}', '${location.city}', '${location.country}', ${location.latitude}, ${location.longitude})
            `)
    }
    static async deleteLocation(place_id: string) {
        const db = (await this.dbConnection)

        await db.runAsync(`DELETE FROM locations WHERE place_id = "${place_id}"`)
    }
}
