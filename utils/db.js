const { MongoClient } = require('mongodb');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${host}:${port}`;

// constructor that creates a client MongoDB
class DBClient {
  constructor() {
    MongoClient.connect(url, (err, client) => {
      if (!err) {
        this.db = client.db(database);
      } else {
        this.db = false;
      }
    });
  }

  // connect to MongoDB
  isAlive() {
    if (this.db) return true;
    return false;
  }

  // docs in the collection users
  async nbUsers() {
    this.this.db.collection('users').countDocuments();
  }

  // docs in the collection files
  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
