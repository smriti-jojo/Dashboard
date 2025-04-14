// import * as React from 'react';
// import { Box, Typography } from '@mui/material';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Example icon for a step

// const steps = [
//   { label: 'Shipped', color: 'secondary', icon: <AccessTimeIcon fontSize="small" /> },
//   { label: 'In Transit', color: 'success', icon: <AccessTimeIcon fontSize="small" /> },
//   { label: 'Delivered', color: 'primary', icon: <AccessTimeIcon fontSize="small" /> },
// ];

// const HorizontalTimeline = () => {
//   return (
//     <Box display="flex" alignItems="center" justifyContent="center" gap={1}  sx={{ fontSize: '10px' }}>
//       {steps.map((step, index) => (
//         <Box key={step.label} display="flex" alignItems="center" gap={1}>
//           {/* Step Dot and Icon */}
//           <Box display="flex" flexDirection="column" alignItems="center">
//             <TimelineDot color={step.color} variant="filled" sx={{ fontSize: '10px', p: 0.5 }}>
//               {step.icon}
//             </TimelineDot>
//             <Typography variant="caption" sx={{ mt: 0.5, fontSize: '7px' }}>{step.label}</Typography>
//           </Box>

//           {/* Connector placed in the middle */}
//           {index < steps.length - 1 && (
//             <TimelineConnector sx={{ width: 16, height: 2, bgcolor: 'black' }} />
//           )}
//         </Box>
//       ))}
//     </Box>
//   );
// }

// export default HorizontalTimeline;

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Example icon for a step
import { motion } from 'framer-motion'; // Import Framer Motion
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const steps = [
  { label: 'Shipped', color: 'primary', icon: <LocalShippingIcon fontSize="small" /> },
  { label: 'In Transit', color: 'secondary', icon: <RocketLaunchIcon fontSize="small" /> },
  { label: 'Delivered', color: 'success', icon: <CheckCircleOutlineIcon fontSize="small" /> },
];

const HorizontalTimeline = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={1} sx={{ fontSize: '10px' }}>
      {steps.map((step, index) => (
        <Box key={step.label} display="flex" alignItems="center" gap={1}>
      
          <Box display="flex" flexDirection="column" alignItems="center">
            <motion.div
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.6, delay: index * 0.3 }} 
            >
                {index==1?<TimelineDot color={step.color} variant="filled" sx={{ fontSize: '10px', p: 0.5 }} className='!animate-bounce'>
                {step.icon}
              </TimelineDot>:<TimelineDot color={step.color} variant="filled" sx={{ fontSize: '10px', p: 0.5 }}>
                {step.icon}
              </TimelineDot>}
              
            </motion.div>
            <Typography variant="caption" sx={{ mt: 0.5, fontSize: '7px' }}>
              {step.label}
            </Typography>
          </Box>

          
          {index < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }} 
              animate={{ opacity: 1, scaleX: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }} 
              style={{ width: 40, height: 2, backgroundColor: 'black' }} 
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalTimeline;
