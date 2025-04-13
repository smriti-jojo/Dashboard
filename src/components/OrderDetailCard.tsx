import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface OrderDetailCardProps {
  title: string;
  value: string | number;
  comparisonLabel: string;
  comparisonValue: string | number;
  comparisonIcon?: React.ReactNode;
  mainIcon?: React.ReactNode ;
  type?:string;
}

const OrderDetailCard: React.FC<OrderDetailCardProps> = ({
  title,
  value,
  comparisonLabel,
  comparisonValue,
  comparisonIcon,
  mainIcon,
  type
}) => {
  return (
    <div className={`flex  bg-white px-3 justify-around h-[110px] rounded-md ${type=="delivery"?"w-full border-2 border-slate-400  py-2":"w-[250px]"}`}>
      <div className="flex flex-col justify-center">
        <div className="flex gap-2">
          <div className="text-slate-500">{title}</div>
          <div>{comparisonIcon || ""}</div>
        </div>
        <div className="font-bold text-lg">{value}</div>
      
        {type=='delivery'? (
          <div className="flex gap-2"><div className="text-slate-500"><RadioButtonCheckedIcon className='!text-green-500 mr-2' fontSize='small'/><span>{comparisonLabel}</span> <ArrowForwardIcon fontSize='small'/></div>
        <div>
          <LocationOnIcon/><span> {comparisonValue}</span>
          </div>
          </div>)
        :  <div className="flex gap-2"><div className="text-slate-500 text-sm">{comparisonLabel}</div>
          <Button
            variant="contained"
            size="small"
            className="!rounded-full !bg-green-200 !text-green-500 !font-bold !w-[7px] !h-[17px] !mt-1"
          >
            {comparisonValue} <ArrowOutwardIcon fontSize="small" />
          </Button>

        </div>
}
      </div>
      <div className="mt-4 p-1 border-2 border-slate-200 rounded-md h-[36px] shadow-sm ">
        {mainIcon || <LocalShippingIcon className="!text-blue-600" fontSize='large'/>}
      </div>
    </div>
  );
};

export default OrderDetailCard;
