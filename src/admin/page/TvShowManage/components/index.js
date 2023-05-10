import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridCellModes } from '@mui/x-data-grid';

function EditToolbar(props) {
  const { selectedCellParams, cellMode, cellModesModel, setCellModesModel } =
    props;

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

function TvShowManageTable() {
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
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
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
  { field: 'id', headerName: 'ID', editable: true, width: 90 },
  {
    field: 'Video',
    headerName: 'Video',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Nội dung',
    width: 170,
    editable: true,
  },
  {
    field: 'DisplayMode',
    headerName: 'Chế độ hiển thị',
    width: 90,
    editable: true,
  },
  {
    field: 'UploadDate',
    headerName: 'Ngày tải lên',
    width: 100,
    editable: true,
  },
  {
    field: 'NumberOfViews',
    headerName: 'Số lượt xem',
    width: 90,
    editable: true,
  },
  {
    field: 'NumberOfComments',
    headerName: 'Số bình luận',
    width: 90,
    editable: true,
  },
  {
    field: '',
    width: 110,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 2,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 3,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 4,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 5,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 6,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 7,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 8,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 9,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
  {
    id: 10,
    Video: 'https://www.youtube.com/watch?v=1QLjTEC89_I',
    title: 'NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM',
    DisplayMode: 'Hiện',
    UploadDate: '1/6/2022',
    NumberOfViews: '0',
    NumberOfComments: '0',
    status: '',
  },
];

export default TvShowManageTable;
