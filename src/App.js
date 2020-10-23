import React from 'react';
import './App.css';
import ReactVirtualizedTable from './search-table';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh', minWidth: '20vw' }}
    >
      <Grid item>
      <ReactVirtualizedTable />
      </Grid>
    </Grid>
  );
}

export default App;
