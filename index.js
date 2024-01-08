import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

require('dotenv').config();

const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_DATABASE,
});

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let countries = [];

app.get("/", async (req, res) => {
  await getCountryCode();

  res.render('index', {
    countries: countries,
    total: countries.length
  });
});

app.post("/add", async (req, res) => {
  const { body } = req;

  if (body.country) {
    try {
      const result = await pool.query(`SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';`, [body.country.toLowerCase()]);

      if (result.rows.length > 0) {
        if (countries.includes(result.rows[0]['country_code'])) {
          res.render('index', {
            error: 'Country has been added, try again.',
            countries: countries,
            total: countries.length
          });
        }

        await insertNewCode(result.rows[0]['country_code']);
        res.redirect('/');
      } else {
        res.render('index', {
          error: `Couldn't find any country with the name of ${body.country}`,
          countries: countries,
          total: countries.length
        });
        console.error(`Couldn't find any country with the name of ${body.country}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
});

async function insertNewCode(countryCode) {
  try {
    const result = await pool.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [countryCode]);

    console.log(`Inserted country code ${countryCode}. Rows affected: ${result.rowCount}`);
  } catch (err) {
    console.error(err);
  }
}

async function getCountryCode() {
  try {
    const result = await pool.query('SELECT country_code FROM visited_countries');

    countries = result.rows.map(element => element.country_code);

    return countries;
  } catch (err) {
    console.error('Error retrieving country codes:', err);
    throw err;
  }
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});