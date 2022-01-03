import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/5th page/latest-orders';
import { DashboardLayout } from '../components/dashboard-layout';
import SearchBar from 'src/components/5th page/search';
import ModalExample  from "src/components/5th page/CreateServeyModal"

const create = () => (
  <>
    <Head>
      <title>
        5th page
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
            xl={12}
            lg={12}
            sm={12}
            xs={12}
           
          >
            < ModalExample />
            </Grid>
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

create.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default create;
