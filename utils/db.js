const { MongoClient } = require('mongodb');


// constructor that creates a client to MongoDB
class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, { useUnifiedTopology: true });
    this.client.connect();
    this.db = this.client.db(this.database);
  }

  // connection to MongoDB
  isAlive() {
    if (this.db) return true;
    return false;
  }

  // documents in the collection users
  async nbUsers() {
    const collection = await this.db.collection('users').countDocuments();
    return collection;
  }

  // documents in the collection files
  async nbFiles() {
    const collection = await this.db.collection('files').countDocuments();
    return collection;
  }
}

const dbClient = new DBClient();
export default dbClient;