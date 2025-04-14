import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Chip, Checkbox, TextField, Button, Tooltip
} from '@mui/material';
import { Search } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import TrolleyIcon from '@mui/icons-material/Trolley';

type OrderStatus = 'Delivered' | 'Pending' | 'Shipping';

export interface Order {
  orderId: string;
  category: string;
  arrivalTime: string;
  weight: string;
  route: string;
  fee: string;
  status: OrderStatus;
}

const statusColorMap: Record<OrderStatus, 'success' | 'warning' | 'info'> = {
  Delivered: 'success',
  Pending: 'warning',
  Shipping: 'info',
};

interface TrackingTableProps {
  orders: Order[];
  title?: string;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
  onExport?: () => void;
}

const TrackingTable: React.FC<TrackingTableProps> = ({
  orders,
  title = "Tracking Order",
  onSearch,
  onFilter,
  onExport
}) => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const isAllSelected = selectedOrders.length === orders.length;

  const toggleSelectAll = () => {
    setSelectedOrders(isAllSelected ? [] : orders.map(order => order.orderId));
  };

  const toggleSelectOne = (orderId: string) => {
    setSelectedOrders(prev =>
      prev.includes(orderId) ? prev.filter(id => id !== orderId) : [...prev, orderId]
    );
  };

  return (
    <div className="p-6">
      <TableContainer component={Paper} className="shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-semibold flex items-center">
            <TrolleyIcon className='!mr-4' /> {title}
          </h2>
          <div className="flex gap-2 items-center">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search"
              onChange={(e) => onSearch?.(e.target.value)}
              InputProps={{
                startAdornment: <Search className="text-white mr-2 !rounded-full " fontSize="small" />,
                
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '9999px',
                  paddingRight: '8px',
                  backgroundColor:'black',
              
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& input::placeholder': {
                  color: 'white', 
                  opacity: 1,    
                },
                '& .MuiInputBase-input': {
      color: 'white', 
    },
              }}
              
            />
            <Tooltip title="Filter">
              <Button variant='outlined' className='!text-black !border-black !rounded-full !bg-black' size='small' onClick={onFilter}>
                <TuneIcon className='!rounded-full  !bg-white'/><span className='!ml-2 !text-white !font-bold !py-1'>Filter</span> 
              </Button>
            </Tooltip>
            <Tooltip title="Export">
              <Button variant='outlined' className='!text-black !border-black !rounded-full !bg-black' size='small' onClick={onExport}>
                <FileUploadIcon className='!rounded-full  !bg-white' /><span className='!ml-2 !text-white !font-bold !py-1'>Export</span> 
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isAllSelected}
                  onChange={toggleSelectAll}
                  color="primary"
                />
              </TableCell>
              <TableCell  className='!text-slate-500 !font-bold'>Order ID</TableCell>
              <TableCell className='!text-slate-500 !font-bold'>Category</TableCell>
              <TableCell className='!text-slate-500 !font-bold'>Arrival Time</TableCell>
              <TableCell className='!text-slate-500 !font-bold'>Weight</TableCell>
              <TableCell className='!text-slate-500 !font-bold'>Route</TableCell>
              <TableCell className='!text-slate-500 !font-bold'>Fee</TableCell>
              <TableCell className='!text-slate-500 !font-bold'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.orderId} hover>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedOrders.includes(order.orderId)}
                    onChange={() => toggleSelectOne(order.orderId)}
                    color="primary"
                  />
                </TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.category}</TableCell>
                <TableCell>{order.arrivalTime}</TableCell>
                <TableCell>{order.weight}</TableCell>
                <TableCell>{order.route}</TableCell>
                <TableCell>{order.fee}</TableCell>
                <TableCell>
                  <Chip label={order.status} color={statusColorMap[order.status]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TrackingTable;
