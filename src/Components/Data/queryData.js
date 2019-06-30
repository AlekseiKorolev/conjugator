const sqlite = require('sqlite3');

const db = new sqlite.Database('../../database/db.sqlite');

      db.serialize(() =>{
			db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)');
			db.run('INSERT INTO Average VALUES ($index ,$year, $temperature)',{ $index: 1, $year: 1978, $temperature: 23}, error => {
          console.log(error);
        })
      })
