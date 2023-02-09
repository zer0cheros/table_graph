

const mysql = require('serverless-mysql')({
    config: {
      host: 'localhost',
      user: 'chris',
      password: '',
      database: 'db'
    }
  });
  
  async function createEnergyConsumptionTable() {
    try {
      const energyConsumptionData = [
        { country: 'Finland', consumption: 57.8, flag: 'https://flagpedia.net/data/flags/w580/fi.png' },
        { country: 'Sweden', consumption: 68.5, flag: 'https://flagpedia.net/data/flags/w580/se.png' },
        { country: 'Norway', consumption: 81.5, flag: 'https://flagpedia.net/data/flags/w580/no.png' },
        { country: 'Iceland', consumption: 14.3, flag: 'https://flagpedia.net/data/flags/w580/is.png' },
        { country: 'Spain', consumption: 196.0, flag: 'https://flagpedia.net/data/flags/w580/es.png' },
        { country: 'France', consumption: 152.6, flag: 'https://flagpedia.net/data/flags/w580/fr.png' },
        { country: 'Germany', consumption: 251.0, flag: 'https://flagpedia.net/data/flags/w580/de.png' },
        { country: 'Greece', consumption: 44.5, flag: 'https://flagpedia.net/data/flags/w580/gr.png' },
        { country: 'Italy', consumption: 202.0, flag: 'https://flagpedia.net/data/flags/w580/it.png' },
        { country: 'Denmark', consumption: 43.0, flag: 'https://flagpedia.net/data/flags/w580/dk.png' },
        { country: 'Latvia', consumption: 10.5, flag: 'https://flagpedia.net/data/flags/w580/lv.png' },
        { country: 'Poland', consumption: 123.5, flag: 'https://flagpedia.net/data/flags/w580/pl.png' }
      ];
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS energy_consumption (
          id INT AUTO_INCREMENT PRIMARY KEY,
          country VARCHAR(255) NOT NULL,
          consumption FLOAT NOT NULL,
          flag VARCHAR(255) NOT NULL
        )
      `;
  
      await mysql.query(createTableQuery);
  
      for (const data of energyConsumptionData) {
        const insertDataQuery = `
          INSERT INTO energy_consumption (country, consumption, flag)
          VALUES ('${data.country}', ${data.consumption}, '${data.flag}')
        `;
  
        await mysql.query(insertDataQuery);
      }
  
      console.log('Data inserted successfully!');
    } catch (error) {
      console.error(error);
    } finally {
      await mysql.end();
    }
  }

createEnergyConsumptionTable() 