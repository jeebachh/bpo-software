import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import ModalExample from "src/components/dashboard/uploadmodel"
const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title=" Agent details" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Agent nane
              </TableCell>
              <TableCell>
                Agent code
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    langauge knowing
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                total leads
              </TableCell>
              <TableCell>
                calls
              </TableCell>
              <TableCell>
               follow up
              </TableCell>
              <TableCell>
                reamaining
              </TableCell>
              <TableCell>
               retry call
              </TableCell>
              <TableCell>
                sales
              </TableCell>
              <TableCell>
               stutus
              </TableCell>
              <TableCell>
                details
              </TableCell>
              <TableCell>
               < ModalExample />
              </TableCell>
            </TableRow>
          </TableHead>
         <TableBody>
          {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
         <TableCell>
               {order.customer.name}
              </TableCell>
              <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell> <TableCell>
               {order.customer.name}
              </TableCell>
              <TableCell>
              <Button  color="primary">Active</Button>
              /<Button color="danger">Inctive</Button>
              </TableCell> 
              <TableCell>
               {order.customer.name}
              </TableCell>
              <TableCell>
               {order.img}
              </TableCell>
              
              </TableRow>))}
         </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
     
    </Box>
  </Card>
);
