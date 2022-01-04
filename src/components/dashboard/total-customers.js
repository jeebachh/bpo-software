import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
  <Card {...props}>
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
          >
            <Avatar
            sx={{
             
              height: 100,
              width: 100
            }}
          >
            
        
          
           <img width="100%" src="data:image/png;base64,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"
           alt="Card image cap" />
           </Avatar>
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL calls
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
           400
          </Typography>
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        
        
      </Box>
    </CardContent>
  </Card>
);
