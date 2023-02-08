import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
//import stats from '@/data/finland-stats.json';
import { Line } from 'react-chartjs-2';
import { Chart, ChartOptions, ChartData, registerables } from 'chart.js';

Chart.register(...registerables);

const options: ChartOptions<'line'> = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false
    }
  }
};

export default function FinlandPage() {
  const populationData: ChartData<'line'> = {
    labels: stats.map(stat => stat.year), // <- x axeln
    datasets: [
      {
        label: 'Population',
        data: stats.map(stat => stat.population) // <- y axeln
      }
    ]
  };
  const temperatureData: ChartData<'line'> = {
    labels: stats.map(stat => stat.year), // <- x axeln
    datasets: [
      {
        label: 'Temperature',
        data: stats.map(stat => stat.averageTemperature) // <- y axeln
      }
    ]
  };
  return (
    <Box sx={{width: '100%', maxWidth: '1280px', m: '0 auto', p: 2}}>
      <Typography component="h1" variant="h4" sx={{mb: 4}}>Finland</Typography>

      <Grid container spacing={4} sx={{mb: 4}}>
        <Grid item xs={6}>
          <Paper sx={{p: 2}} variant="outlined">
            <Typography component="h3" variant="h5" sx={{mb:2}}>Population</Typography>
            <Line options={options} data={populationData} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{p: 2}} variant="outlined">
            <Typography component="h3" variant="h5" sx={{mb:2}}>Average Temperature</Typography>
            <Line options={options} data={temperatureData} />
          </Paper>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{p: 2}} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Avg.temp</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stats.map(stat => (
              <TableRow key={stat.year}>
                <TableCell>{stat.year}</TableCell>
                <TableCell>{(stat.population / 1000000).toFixed(2)}M</TableCell>
                <TableCell>{stat.averageTemperature} °C</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}