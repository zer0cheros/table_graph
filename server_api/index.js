import express from "express";
import stats from '../src/data/finland-stats.json' assert { type:"json" }
import cors from 'cors' 

const app = express();
const port = 8000;
app.use(cors({origin: 'http://localhost:3000'}))

app.get("/", (req, res) => {
  res.send("Hello from server_api");
});

app.get('/api/stats', (req, res)=>{
  res.status(200).json(stats)
})

app.listen(port, () => {
  console.log(`server_api listening at http://localhost:${port}`);
});
