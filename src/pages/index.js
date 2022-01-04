import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import SearchBar from 'src/components/dashboard/search';
import ModalExample  from "src/components/dashboard/CreateServeyModal"
import PopupGfg from 'src/components/dashboard/disposition';

const Dashboard = () => (
  <>
    <Head>
      <title>
        2Sheet
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        
        flexGrow:1,
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
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <PopupGfg />
          </Grid>
           <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={6}
            xs={12}
          >
            <TasksProgress />
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
          
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
