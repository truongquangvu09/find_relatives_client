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

function PostsManage() {
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
    field: 'img',
    headerName: 'Ảnh',
    width: 90,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Tiêu đề',
    width: 150,
    editable: true,
  },
  {
    field: 'information',
    headerName: 'Thông tin',
    width: 270,
    editable: true,
  },
  {
    field: 'story',
    headerName: 'Câu chuyện',
    editable: true,
    width: 300,

  },
  {

    field: '',
    width: 150,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <Button variant="contained" startIcon={<DeleteIcon />} onClick={(event) => {
          this.handleClick(event, cellValues);
        }}>
          Delete
        </Button>
      );
    }
  },
];

const rows = [
    { id: 1, img: 'anh1', title: 'Nguyễn Thi Phương Dung tìm chú Bùi Tiết', information:
      'Họ và tên: Bùi Tiết Năm sinh: 1949 Quê quán: Ninh ThuậnTên cha: Bùi Năng Tên mẹ: Bùi Thị Lạc Tên anh-chị-em: Bùi Thương và chị dâu Nguyễn Thị Minh Thư (Giác) Năm thất lạc: 1970', story: 'Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể: ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.' },
      { id: 2, img: 'anh1', title: 'Nguyễn Thi Phương Dung tìm chú Bùi Tiết', information:
      'Họ và tên: Bùi Tiết Năm sinh: 1949 Quê quán: Ninh ThuậnTên cha: Bùi Năng Tên mẹ: Bùi Thị Lạc Tên anh-chị-em: Bùi Thương và chị dâu Nguyễn Thị Minh Thư (Giác) Năm thất lạc: 1970', story: 'Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể: ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.' },
      { id: 3, img: 'anh1', title: 'Nguyễn Thi Phương Dung tìm chú Bùi Tiết', information:
      'Họ và tên: Bùi Tiết Năm sinh: 1949 Quê quán: Ninh ThuậnTên cha: Bùi Năng Tên mẹ: Bùi Thị Lạc Tên anh-chị-em: Bùi Thương và chị dâu Nguyễn Thị Minh Thư (Giác) Năm thất lạc: 1970', story: 'Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể: ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.' },
      { id: 4, img: 'anh1', title: 'Nguyễn Thi Phương Dung tìm chú Bùi Tiết', information:
      'Họ và tên: Bùi Tiết Năm sinh: 1949 Quê quán: Ninh ThuậnTên cha: Bùi Năng Tên mẹ: Bùi Thị Lạc Tên anh-chị-em: Bùi Thương và chị dâu Nguyễn Thị Minh Thư (Giác) Năm thất lạc: 1970', story: 'Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể: ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.' },
      { id: 5, img: 'anh1', title: 'Nguyễn Thi Phương Dung tìm chú Bùi Tiết', information:
      'Họ và tên: Bùi Tiết Năm sinh: 1949 Quê quán: Ninh ThuậnTên cha: Bùi Năng Tên mẹ: Bùi Thị Lạc Tên anh-chị-em: Bùi Thương và chị dâu Nguyễn Thị Minh Thư (Giác) Năm thất lạc: 1970', story: 'Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể: ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.' },
  ];



export default PostsManage;