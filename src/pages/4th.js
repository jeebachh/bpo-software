import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from 'src/components/4th page/dashboard/budget';
import { LatestOrders } from '../components/4th page/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/4th page/dashboard/tasks-progress';
import { TotalCustomers } from '../components/4th page/dashboard/total-customers';
import { TotalProfit } from '../components/4th page/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import SearchBar from 'src/components/4th page/dashboard/search';
import ShowCalendar from "src/components/4th page/Event"

const Createservey1= () => (
  <>
    <Head>
      <title>
        4th Page
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={4}
        >
          
          <Grid
            item
            xl={12}
            lg={12}
            sm={12}
            xs={12}
           
          >
            <SearchBar  />
          </Grid>
          
          
          
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%'  }} />
          </Grid>
         
          
          
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <LatestOrders />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <ShowCalendar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Createservey1.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Createservey1;
