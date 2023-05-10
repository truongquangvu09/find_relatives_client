import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridCellModes } from '@mui/x-data-grid';

function EditToolbar(props) {
  const { selectedCellParams, cellMode, cellModesModel, setCellModesModel } = props;

  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === 'edit') {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleMouseDown = (event) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        variant="outlined"
      >
        {cellMode === 'edit' ? 'Save' : 'Edit'}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === 'view'}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}

EditToolbar.propTypes = {
  cellMode: PropTypes.oneOf(['edit', 'view']).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};

function NewsManageTable() {
  const [selectedCellParams, setSelectedCellParams] = React.useState(null);
  const [cellModesModel, setCellModesModel] = React.useState({});

  const handleCellFocus = React.useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return 'view';
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || 'view';
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback(
    (params, event) => {
      if (cellMode === 'edit') {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode],
  );

  const handleCellEditStop = React.useCallback((params, event) => {
    event.defaultMuiPrevented = true;
  }, []);

  return (
    <div style={{ height: 425, width: 1100 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        onCellEditStop={handleCellEditStop}
        onCellModesModelChange={(model) => setCellModesModel(model)}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

const columns = [
  { field: 'id', headerName: 'ID',editable: true, width: 90 },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 420,
    editable: true,
  },
  {
    field: 'display',
    headerName: 'Display',
    width: 110,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date Created',
    width: 110,
    editable: true,
  },
  {

    field: '',
    width: 150,
    editable: true,
    renderCell: () => {
      return (
        <Button variant="contained" startIcon={<DeleteIcon />} onClick={(event) => {
          // handleClick(event, cellValues);
        }}>
          Delete
        </Button>
      );
    }
  },
];

const rows = [
  { id: 1, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 2, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 3, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 4, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 5, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 6, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 7, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 8, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 9, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
  { id: 10, image: '', title: 'Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700', display: 'Show', date: '05/05/2023', status: '' },
];



export default NewsManageTable;