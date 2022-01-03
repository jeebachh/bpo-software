  import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Budget = (props) => (
  <Card
   
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
           alignItems="center"
          >
           Total leads
          </Typography>
          <Typography
            color="textPrimary"
            position="center"
            variant="h4"
          >
            3567
          </Typography>
        </Grid>
        
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
       
      </Box>
    </CardContent>
  </Card>
);
