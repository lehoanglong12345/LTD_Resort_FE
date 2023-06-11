import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { tokens } from "../../../utils/theme";
import { mockDataService, mockDataServiceType } from "../../../data/mockData";
import Header from "../../../components/Header/Header";
import { useTheme, Button } from "@mui/material";
import { Form, Input, Modal, Select } from "antd";
import { GrAdd } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Draggable from "react-draggable";
import ImageGallery from "../ImageGallery/ImageGallery";
import styles from "./ExtraService.module.scss";
import classNames from "classnames/bind";
import AuthUser from "../../../utils/AuthUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const ExtraService = () => {
  const Layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const { http } = AuthUser();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const [values, setValues] = useState({});
  const [listService, setListService] = useState([]);
  const [listType, setListType] = useState([]);
  const [service, setService] = useState();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [base, setBase] = useState();
  const [id, setID] = useState();
  const [images, setImages] = useState([]);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />

        <Button startIcon={<GrAdd />} onClick={handleCreate}>
          Create
        </Button>
      </GridToolbarContainer>
    );
  }

  //data columns
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "extra_service_name", headerName: "Service", flex: 0.5 },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    
    {
      field: "accessLevel",
      headerName: "Access Level",
      width: 200,
      renderCell: (params) => {
        const handleEditClick = () => {
          handleEdit(params);
        };
        return (
          <Box display="flex" borderRadius="4px">
            <Button startIcon={<AiFillEdit />} onClick={handleEditClick}>
              {" "}
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleOk = () => {
    setOpenModal(false);
  };

  // Handle click button "X" of modal
  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleCreate = () => {
    console.log("create");
    setOpenModal(true);
    form.setFieldValue("name", "");
    form.setFieldValue("description", "");
    form.setFieldValue("price", "");
    form.setFieldValue("status", null);
    form.setFieldValue("point", "");
    form.setFieldValue("type", null);
    setdisabledCreate(false);
    setValues({});
    setBase(false);
  };

  const fetchService = async (id) => {
    await http
      .get(`/admin/show-extra-service/${id}`)
      .then((resolve) => {
        console.log(resolve);
        setService(resolve.data.data);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };

  const handleDoubleClickCell = (params) => {
    const { row } = params;
    console.log(row);
    form.setFieldValue("extra_service_name", row.extra_service_name);
    form.setFieldValue("description", row.description);
    form.setFieldValue("price", row.price);
    setdisabledCreate(true);

    setOpenModal(true);
  };

  const handleEdit = (params) => {
    setdisabledCreate(false);
    const { row } = params;
    console.log(row);
    setValues(row);
    fetchService(row.id);
    setID(row.id);
    form.setFieldValue("name", row.service_name);
    form.setFieldValue("description", row.description);
    form.setFieldValue("price", row.price);
    form.setFieldValue("status", row.status);
    form.setFieldValue("point", row.point_ranking);
    form.setFieldValue("type", row.id_type);
    setdisabledCreate(false);
    setOpenModal(true);
    setBase(true);
  };

  // Successful case
  const onFinish = (values) => {
    const { name, description, status, price, point, type } = values;
    const formData = new FormData();
    if (base) {
      console.log("Success: edit", values);

      formData.append("service_name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", images);
      formData.append("point_ranking", point);

      console.log("form ", formData);
      http
        .patch(`/admin/update-service/${id}`, formData)
        .then(() => {
          Swal.fire(
            "Update!",
            "You have successfully add your profile",
            "success"
          ).then(() => {
            navigate(0);
          });
        })
        .catch((reject) => {
          console.log("Error response:", reject.response);
          console.log("Error status code:", reject.response.status);
          console.log("Error message:", reject.message);
          console.log(reject);
        });
    } else {
      console.log("Success: add", values);

      formData.append("service_name", name);
      formData.append("description", description);
      formData.append("status", status);
      formData.append("image", images);
      formData.append("price", price);
      formData.append("point_ranking", point);
      formData.append("service_type_id", type);

      console.log("form add", formData);

      http
        .post(`/admin/store-service`, formData)
        .then(() => {
          Swal.fire(
            "Update!",
            "You have successfully add your profile",
            "success"
          ).then(() => {
            navigate(0);
          });
        })
        .catch((reject) => {
          console.log("Error response:", reject.response);
          console.log("Error status code:", reject.response.status);
          console.log("Error message:", reject.message);
          console.log(reject);
        });
    }
  };

  // Failed case
  const onFinishFailed = (error) => {
    console.log("Failed:", error);
  };

  // ---------------------------      Modal Draggable      ---------------------------
  const draggleRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [disabledCreate, setdisabledCreate] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await http
        .get(`/employee/show-list-extra-service`)
        .then((resolve) => {
          if (resolve.data.status === "200") {
            console.log(resolve);
            setListService(resolve.data.data);
          }
          else{
            setListService([]);
          }
        })
        .catch((reject) => {
          console.log(reject);
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx("contact-wrapper")}>
      <Header title="EXTRA SERVICE" subtitle="List of Extra Service" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          onCellDoubleClick={handleDoubleClickCell}
          rows={listService}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
          className={cx("table")}
        />
      </Box>
      <Modal
        title={
          <div
            style={{
              width: "100%",
              cursor: "move",
              textAlign: "center",
              marginBottom: 24,
            }}
            onMouseOver={() => {
              setDisabled(false);
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
          >
            Service Room Info
          </div>
        }
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <Form
          {...Layout}
          form={form}
          layout="horizontal"
          name="profile_form"
          labelAlign="right"
          labelWrap="true"
          size="large"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={cx("modal-form")}
          initialValues={{
            extra_service_name: values?.extra_service_name,
            description: values?.description,
            price: values?.price,
          }}
        >
          <div className={cx("service-attributes")}>
            <Form.Item
              name="extra_service_name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Name Service is required!",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder={"Please fill floor service"}
                disabled={disabledCreate}
              />
            </Form.Item>
          </div>
          <div className={cx("service-attributes")}>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Price is required!",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder={"Please fill the price"}
                disabled={disabledCreate}
              />
            </Form.Item>
          </div>
          <div className={cx("service-attributes")}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Description is required!",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder={"Please write the description"}
                disabled={disabledCreate}
              />
            </Form.Item>
          </div>
          
        

          <Form.Item
            wrapperCol={24}
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {disabledCreate ? (
                <Button type="primary" disabled></Button>
              ) : (
                <Button type="primary" htmlType="submit">
                  {base ? <>Edit</> : <>Add</>}
                </Button>
              )}
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ExtraService;
