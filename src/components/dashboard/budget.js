import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Budget = (props) => (
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
            <img width="100%" src="data:image/png;base64,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"
             alt="Card image cap" />
        
          </Avatar>
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Totol leads
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            2400
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
