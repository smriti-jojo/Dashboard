import React from 'react';
import Sidebar from '../components/Sidebar.tsx';
import Navbar from '../components/Navbar.tsx';
import Tabs from '../components/Tabs.tsx';
import InfoIcon from '@mui/icons-material/Info';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button, Card } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import OrderDetailCard from '../components/OrderDetailCard.tsx';
import Map from '../components/Map.tsx';
import TuneIcon from '@mui/icons-material/Tune';
import TrackingTable from '../components/TrackingTable.tsx';
import { ReactNode } from 'react';
import HorizontalTimeline from '../components/Timeline.tsx';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface OrderDetailType {
  title: string;
  value: string;
  comparisonLabel: string;
  comparisonValue: string;
  comparisonIcon: ReactNode;
  mainIcon: ReactNode;
}

interface DeliveryDetailType {
  title: string;
  value: string;
  comparisonLabel: string;
  comparisonValue: string;
  mainIcon: ReactNode;
  status?:string
}

interface OrderDataType {
  orderId: string;
  category: string;
  arrivalTime: string;
  weight: string;
  route: string;
  fee: string;
  status: string;
}

const Overviews: React.FC = () => {
  const OrderDetail: OrderDetailType[] = [
    {
      title: 'Total shipment',
      value: '10.105',
      comparisonLabel: 'vs Last Week',
      comparisonValue: '-2.1%',
      comparisonIcon: <InfoIcon fontSize="small" />,
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
    },
    {
      title: 'Total Order',
      value: '10.105',
      comparisonLabel: 'vs Last Week',
      comparisonValue: '-2.1%',
      comparisonIcon: <InfoIcon fontSize="small" />,
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
    },
    {
      title: 'Revenue',
      value: '10.105',
      comparisonLabel: 'vs Last Week',
      comparisonValue: '-2.1%',
      comparisonIcon: <InfoIcon fontSize="small" />,
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
    },
    {
      title: 'Delivered',
      value: '10.105',
      comparisonLabel: 'vs Last Week',
      comparisonValue: '-2.1%',
      comparisonIcon: <InfoIcon fontSize="small" />,
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
    },
  ];

  const DeliveryDetail: DeliveryDetailType[] = [
    {
      title: 'Shipment Number',
      value: '#001234ABCD',
      comparisonLabel: '82 Wane Dou Lane',
      comparisonValue: '15 Vcar Lane',
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
      status:"Shipped"
    },
    {
      title: 'Shipment Number',
      value: '#001234ABCD',
      comparisonLabel: '44 Broomfield Place',
      comparisonValue: '44 Helland Bridge',
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
      status:"In Transit"
    },
    {
      title: 'Shipment Number',
      value: '#001234ABCD',
      comparisonLabel: '82 Wane Dou Lane',
      comparisonValue: '15 Vcar Lane',
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
      status:"delivered"
    },
    {
      title: 'Shipment Number',
      value: '#001234ABCD',
      comparisonLabel: '82 Wane Dou Lane',
      comparisonValue: '15 Vcar Lane',
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
    },
    {
      title: 'Shipment Number',
      value: '#001234ABCD',
      comparisonLabel: '82 Wane Dou Lane',
      comparisonValue: '15 Vcar Lane',
      mainIcon: <LocalShippingIcon className="!text-blue-600" />,
    },
  ];

  const ordersData: OrderDataType[] = [
    {
      orderId: '#001234ABCD',
      category: 'Electronic',
      arrivalTime: '7/1/2023',
      weight: '25kg',
      route: '87 Wern Ddu Lane → 15 Vicar Lane',
      fee: '$1,050',
      status: 'Delivered',
    },
    {
      orderId: '#0023456LKH',
      category: 'Furniture',
      arrivalTime: '7/1/2023',
      weight: '50kg',
      route: '40 Broomfield Place → 44 Helland Bridge',
      fee: '$2,200',
      status: 'Pending',
    },
    {
      orderId: '#0023456LKJ',
      category: 'Clothing',
      arrivalTime: '7/1/2023',
      weight: '5kg',
      route: '11 Walden Road → 39 Grenoble Road',
      fee: '$80',
      status: 'Shipping',
    },
  ];

  return (
    <>
      {/* Order Cards */}
      <div className=" flex gap-5 w-full overflow-auto ">
        {OrderDetail.map((item, index) => (
          <OrderDetailCard
            key={index}
            title={item.title}
            value={item.value}
            comparisonLabel={item.comparisonLabel}
            comparisonValue={item.comparisonValue}
            comparisonIcon={item.comparisonIcon}
            mainIcon={item.mainIcon}
          />
        ))}
      </div>
      
      {/* Delivery & Map Section */}
      <div className="flex gap-4 my-[3%] border-2 border-slate-200 shadow-md rounded-lg bg-white">
        {/* Left - Delivery */}
        <div className="w-[55%]">
          <Card className="p-4 mb-6 shadow-none border-none rounded-none">
            <div className="flex justify-between items-center mb-4 px-[5%]">
              <h2 className="text-lg font-semibold flex items-center">
                <LocalShippingIcon className="mr-3" /> Ongoing Delivery
              </h2>
              <Button
                variant="outlined"
                className="!text-black !border-black"
                size="small"
                startIcon={<TuneIcon />}
              >
                Filter
              </Button>
            </div>

            {/* <div className="flex flex-col gap-3 w-full overflow-x-auto h-[355px]">
              {DeliveryDetail.map((item, index) => (
                <OrderDetailCard
                  key={index}
                  title={item.title}
                  value={item.value}
                  comparisonLabel={item.comparisonLabel}
                  comparisonValue={item.comparisonValue}
                  type="delivery"
                />
              ))}
            </div> */}
             <div className="flex flex-col gap-3 w-full  overflow-x-auto h-[355px]">
             {DeliveryDetail.map((item, index) => (
            <div className=" flex flex-col border-2 w-full border-gray-300 rounded-md px-5 py-3 bg-gradient-to-r from-[#a8c8e0] via-[#f0f4f8] to-[#d1dde3] shadow-md">
             <div className='flex justify-between w-full'>
              <div className='bg-white  w-[35%] h-[3rem] rounded-lg shadow-md'>

                <h1 className='font-bold flex justify-center  text-gray-600'>{item.title}</h1>
                <h2 className='font-bold flex justify-center text-[16px]'>{item.value}</h2>
              </div>

              <div className='h-[30%]'>
                <Button variant='contained' className='!rounded-xl !text-[9px] !bg-orange-400 !text-white !font-bold !mb-3' size='small'>Delivery Status:</Button>
                <HorizontalTimeline/>
              </div>
              </div>
              
              <div className='mt-2 '>
              <div className="flex gap-2"><div className="text-slate-500"><RadioButtonCheckedIcon className='!text-green-500 mr-2 ' fontSize='small'/><span className='text-[10px] font-bold'>{item.comparisonLabel}</span> <ArrowForwardIcon fontSize='small'/></div>
        <div>
          <LocationOnIcon fontSize='small'/><span className='text-[10px] font-bold'> {item.value}</span>
         
          </div>
          </div>
          </div>
          
                          </div>
                           ) )}
                          </div>
           
          </Card>
        </div>

        {/* Right - Map */}
        <div className="w-[45%]">
          <Card className="p-4 mb-6 shadow-none border-none rounded-none">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">On the way</h2>
              <span className="text-sm text-gray-500">13/4/2025</span>
            </div>

            <Map />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm text-gray-700 mt-4">
              <div><strong>Category:</strong> Electronic</div>
              <div><strong>Distance:</strong> 60.41 km</div>
              <div><strong>Estimation:</strong> 1d 16h</div>
              <div><strong>Weight:</strong> 25kg</div>
              <div><strong>Fee:</strong> $1,050</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Tracking Table */}
      <div className="pb-[3%]">
        <TrackingTable
          orders={ordersData}
          title="Tracking Orders"
          onSearch={(val: string) => console.log('Search:', val)}
          onFilter={() => console.log('Filter clicked')}
          onExport={() => console.log('Export clicked')}
        />
      </div>
    </>
  );
};

export default Overviews;
