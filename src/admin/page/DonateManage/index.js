import React from 'react';
import DonateTable from './tableData';
import style from './donatemanage.module.css';
import { Button } from '@mui/material';

function DonateManage() {
  return (
    <div className={style['donate-container']}>
      <div className={style['donate-content']}>
        <div className={style['buton-excel']}>
          <Button variant="contained" >In excel</Button>
        </div>
        <DonateTable></DonateTable>
      </div>

    </div>
  );
}

export default DonateManage;
