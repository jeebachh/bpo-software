import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
        <Typography>
         <Avatar
            sx={{
             
              height: 100,
              width: 100
            }}
          >
            <img width="100%" src="https://www.pinclipart.com/picdir/middle/548-5485695_efw16-icon-follow-up-icon-png-clipart.png"
             alt="Card image cap" />
        
          </Avatar>
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
          Follow Up
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            100
          </Typography>
        </Grid>
        
      </Grid>
      <Box sx={{ pt: 3 }}>
        
      </Box>
    </CardContent>
  </Card>
);
