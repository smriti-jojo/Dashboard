import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DropdownSelect from './DropdownSelect.tsx';
import Overviews from '../pages/Overviews.tsx';

import {
  SelectChangeEvent,
  Button,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface TabValueProps {
  label: string;
  component: string | React.FC;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ flexGrow: 1, width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function IndependentTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [duration, setDuration] = React.useState<string>('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDropdownChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };

  const durationOptions = [
    { label: "Days ", value: 10 },
    { label: "Month", value: 20 },
    { label: "Year", value: 30 },
  ];

  const TabValue: TabValueProps[] = [
    {
      label: 'Overviews',
      component: Overviews,
    },
    {
      label: 'Tracking',
      component: 'In progress',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header Section with Tabs + Duration Dropdown + Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '8px',
        }}
      >
        <AppBar
          position="static"
          sx={{
            bgcolor: '#bbc4cc',
            boxShadow: 'none',
            borderRadius: '8px',
            width: '250px',
            marginLeft:'14px'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="none"
            textColor="inherit"
            aria-label="button-style tabs"
            sx={{ display: 'flex', gap: 2  }}
          >
            {TabValue.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                {...a11yProps(index)}
                sx={{
                  flex: 1,
                  color: 'black',
                  fontWeight: value === index ? 'bold' : 'normal',
                  backgroundColor: value === index ? 'white' : '',
                  borderRadius: '8px',
                  
                }}
              />
            ))}
          </Tabs>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '30%',
          }}
        >
          <DropdownSelect
            value={duration}
            onChange={handleDropdownChange}
            placeholder="Week"
            options={durationOptions}
          />
          <Button variant="contained" sx={{ width: '200px', height: '40px' }}>
            <AddIcon className="mr-2" fontSize="small" />
            New Shipments
          </Button>
        </Box>
      </Box>

      {/* Tab Panels-rendered component on tab label selection */}
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          marginTop: '16px',
          
        }}
      >
        {TabValue.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {typeof tab.component === 'string'
              ? tab.component
              : <tab.component/>}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
