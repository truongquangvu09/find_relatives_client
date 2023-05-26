import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeedIcon from '@mui/icons-material/Feed';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PaidIcon from '@mui/icons-material/Paid';

import classNames from 'classnames/bind';
import styles from './admin.module.scss';
import SearchRegistrationManage from './page/SearchRegistrationManage';
import PostManage from './page/PostManage';
import TvShowManage from './page/TvShowManage';
import NewsManage from './page/NewsManage';
import AccountManage from './page/AccountManage';
import DonateManage from './page/DonateManage';

const cx = classNames.bind(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className={cx('tab-wrapper')}
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 700,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: 300 }}
      >
        <Tab
          className={cx('tab')}
          sx={{ display: 'inline', textAlign: 'start' }}
          icon={<PostAddIcon className={cx('icon')} sx={{ fontSize: 20 }} />}
          label="Đơn đăng kí"
          {...a11yProps(0)}
        />
        <Tab
          className={cx('tab')}
          sx={{ display: 'inline', textAlign: 'start' }}
          icon={<FeedIcon className={cx('icon')} sx={{ fontSize: 20 }} />}
          label="Bài đăng"
          {...a11yProps(1)}
        />
        <Tab
          className={cx('tab')}
          sx={{ display: 'inline', textAlign: 'start' }}
          icon={<LiveTvIcon className={cx('icon')} sx={{ fontSize: 20 }} />}
          label="Truyền hình"
          {...a11yProps(2)}
        />
        <Tab
          className={cx('tab')}
          sx={{ display: 'inline', textAlign: 'start' }}
          icon={<NewspaperIcon className={cx('icon')} sx={{ fontSize: 20 }} />}
          label="Tin tức"
          {...a11yProps(3)}
        />
        <Tab
          className={cx('tab')}
          sx={{ display: 'inline', textAlign: 'start' }}
          icon={
            <PersonOutlineIcon className={cx('icon')} sx={{ fontSize: 20 }} />
          }
          label="Tài khoản"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SearchRegistrationManage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PostManage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TvShowManage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NewsManage />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AccountManage />
      </TabPanel>
    </Box>
  );
}

export default Admin;
