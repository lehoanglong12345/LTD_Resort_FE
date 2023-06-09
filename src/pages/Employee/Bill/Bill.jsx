import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Diamond } from "@mui/icons-material";
import { tokens } from "../../../utils/theme";
import {
  mockDatabillService,
  mockDatabillRoomDetail,
  mockDatabillServiceDetail,
  mockDataRoom,
  mockDataService,
} from "../../../data/mockData";
import Header from "../../../components/Header/Header";
import { useTheme } from "@mui/material";
import { Form, Modal, Steps } from "antd";
import { MdHotel, MdRoomService } from "react-icons/md";
import Draggable from "react-draggable";
import styles from "./Bill.module.scss";
import classNames from "classnames/bind";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import AuthUser from "../../../utils/AuthUser";

const cx = classNames.bind(styles);

const Bill = () => {
  const location = useLocation();
  const { state } = location;
  const { http } = AuthUser();
  const Layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [current, setCurrent] = useState(0);
  const [openModalRoom, setOpenModalRoom] = useState(false);
  const [openModalService, setOpenModalService] = useState(false);
  const [openModalExtra, setOpenModalExtra] = useState(false);
  const [Customer, setCustomer] = useState();
  const [total, setTotal] = useState();

  const [room, setRoom] = useState([]);
  const [service, setService] = useState([]);
  const [extraService, setExtraService] = useState([]);
  const [roomDetails, setRoomDetails] = useState([]);
  const [serviceDetail, setServiceDetail] = useState([]);
  const [extraServiceDetail, setExtraServiceDetail] = useState([]);

  const [imageUrl, setImageUrl] = useState("");
  const [form] = Form.useForm();
  const [values, setValues] = useState({
    room_name: "",
    floor: "",
    area: "",
    type: "",
  });

  const onChange = (value) => {
    setCurrent(value);
  };

  const fetchRoom = async (id) => {
    await http
      .get(`/auth/show-bill-room-detail/${id}`)
      .then((resolve) => {
        const newData = resolve.data.bill_room_detail.map((item, index) => {
          return { ...item, id: index.toString() };
        });

        setRoomDetails(newData);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
  const fetchExtra = async (id) => {
    await http
      .get(`/auth/show-bill-extra-service-details/${id}`)
      .then((resolve) => {
        const newData = resolve.data.bill_extra_service_details.map(
          (item, index) => {
            return { ...item, id: index.toString() };
          }
        );

        setExtraServiceDetail(newData);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };


  const handleDoubleClickCell_1 = (params) => {
    const { row } = params;
    setValues(row);
    fetchRoom(row.id);
    form.setFieldValue("id", row.id);
    form.setFieldValue("total_amount", row.total_amount);
    form.setFieldValue("total_room", row.total_room);
    form.setFieldValue("total_people", row.total_people);
    form.setFieldValue("payment_method", row.payment_method);
    form.setFieldValue("name_bank", row.name_bank);
    form.setFieldValue("pay_time", row.pay_time);
    form.setFieldValue("checkin_time", row.checkin_time);
    form.setFieldValue("checkout_time", row.checkout_time);
    form.setFieldValue("cancel_time", row.cancel_time);
    form.setFieldValue("discount", row.discount);
    setOpenModalRoom(true);
  };

  // const handleDoubleClickCell_2 = (params) => {
  //   const { row } = params;
  //   console.log(row);
  //   setValues(row);
  //   fetchRoom(row.code);
  //   form.setFieldValue("id", row.code);
  //   form.setFieldValue("total_amount", row.total_amount);
  //   form.setFieldValue("total_room", row.total_room);
  //   form.setFieldValue("total_people", row.total_people);
  //   form.setFieldValue("payment_method", row.payment_method);
  //   form.setFieldValue("name_bank", row.name_bank);
  //   form.setFieldValue("pay_time", row.pay_time);
  //   form.setFieldValue("checkin_time", row.checkin_time);
  //   form.setFieldValue("checkout_time", row.checkout_time);
  //   form.setFieldValue("cancel_time", row.cancel_time);
  //   form.setFieldValue("discount", row.discount);
  //   setOpenModalService(true);
  // };

  const handleDoubleClickCell_3 = (params) => {
    const { row } = params;

    setValues(row);
    fetchExtra(row.id);

    form.setFieldValue("discount", row.discount);
    setOpenModalExtra(true);
  };

  const handleOk = () => {
    setOpenModalRoom(false);
    setOpenModalService(false);
    setOpenModalExtra(false);
  };

  // Handle click button "X" of modal
  const handleCancel = () => {
    setOpenModalRoom(false);
    setOpenModalService(false);
    setOpenModalExtra(false);
  };

  // Successful case
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  // Failed case
  const onFinishFailed = (error) => {
    console.log("Failed:", error);
  };

  //data columns
  const columnsRoom = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "time_start",
      headerName: "Time Start",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "time_end",
      headerName: "Time End",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "total_people",
      headerName: "Total People",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "total_amount",
      headerName: "Total Amount",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "payment_method",
      headerName: "Payment Method",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  const columnsRoomDetail = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "room_name",
      headerName: "Room name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "room_type",
      headerName: "Room Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "area",
      headerName: "Area",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "floor",
      headerName: "Floor",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "point_ranking",
      headerName: "Point Ranking",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  const columnsService = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "service",
      headerName: "Service Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "service_type",
      headerName: "Type Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "book_time",
      headerName: "Book Time",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "total_amount",
      headerName: "Total Amount",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  const columnsServiceDetail = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "service_name",
      headerName: "Service name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  const columnsServiceExtra = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "total_amount",
      headerName: "Total Amount",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "payment_method",
      headerName: "Payment Method",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "discount",
      headerName: "Discount",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "tax",
      headerName: "Tax",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  const columnsServiceExtraDetail = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "extra_service_name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];

  const items = [
    {
      title: "Room",
      content: (
        <DataGrid
          onCellDoubleClick={handleDoubleClickCell_1}
          rows={room ? room : mockDataRoom}
          columns={columnsRoom}
          className={cx("table")}
        />
      ),
      icon: <MdHotel />,
    },
    {
      title: "Service",
      content: (
        <DataGrid
          rows={service ? service : mockDatabillService}
          columns={columnsService}
          className={cx("table")}
        />
      ),
      icon: <MdRoomService />,
    },
    {
      title: "Extra Service",
      content: (
        <DataGrid
          onCellDoubleClick={handleDoubleClickCell_3}
          rows={extraService ? extraService : mockDatabillService}
          columns={columnsServiceExtra}
          className={cx("table")}
        />
      ),
      icon: <MdRoomService />,
    },
  ];

  // ---------------------------      Modal Draggable      ---------------------------
  const draggleRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
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
      const id = state?.id;
      await http
        .get(`/employee/show-customer/${id}`)
        .then((resolve) => {
          setCustomer(resolve.data.data);

        })
        .catch((reject) => {
          console.log(reject);
        });
      await http
        .get(`/employee/get-total-amount/${id}`)
        .then((resolve) => {
          setTotal(resolve.data.total_amount);
        
        })
        .catch((reject) => {
          console.log(reject);
        });
      await http
        .get(`/employee/show-bill-customer/${id}`)
        .then((resolve) => {

          if (resolve.status === 200) {
            setRoom(resolve.data.bill_room);
            setService(resolve.data.bill_service);
            setExtraService(resolve.data.bill_extra_service);
          }
        })
        .catch((reject) => {
          console.log(reject);
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchImage = async () => {
      if (Customer?.avatar) {
        const storage = getStorage();
        const storageRef = ref(storage, Customer.avatar);
        const downloadUrl = await getDownloadURL(storageRef);
        setImageUrl(downloadUrl);
      }
    };

    fetchImage();
  }, [Customer?.avatar]);

  if (!imageUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("contact-wrapper")}>
      <Header title="INFO" subtitle="List of " />
      <div className={cx("account-info-wrapper")}>
        <div className={cx("account-info-wrapper__right")}>
          <img src={imageUrl} alt="Avatar" />;
        </div>
        <div className={cx("account-info-wrapper__left")}>
          <div style={{ width: "50%" }}>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Total Amount</div>
                <div className={cx("content-text")}>{total}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>User name</div>
                <div className={cx("content-text")}>{Customer?.username}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Email</div>
                <div className={cx("content-text")}>{Customer?.email}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Customer Name</div>
                <div className={cx("content-text")}>{Customer?.name}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Gender</div>
                <div className={cx("content-text")}>{Customer?.gender}</div>
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Date of birth</div>
                <div className={cx("content-text")}>{Customer?.birthday}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>ID Card</div>
                <div className={cx("content-text")}>{Customer?.CMND}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Address</div>
                <div className={cx("content-text")}>{Customer?.address}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Phone number</div>
                <div className={cx("content-text")}>{Customer?.phone}</div>
              </div>
            </div>
            <div className={cx("info-container")}>
              <div className={cx("info-container__left")}>
                <div className={cx("title-text")}>Ranking point</div>
                <div className={cx("content-text")}>
                  {Customer?.ranking_point}
                </div>
                <div className={cx("content-text")}>
                  {/* {(() => {
                    if (state?.ranking_name === 1) {
                      return (
                        <Diamond
                          style={{
                            fontSize: 40,
                            marginRight: "-6px",
                            color: "#A77044",
                          }}
                        />
                      );
                    } else if (state?.ranking_id === 2) {
                      return (
                        <Diamond
                          style={{
                            fontSize: 40,
                            marginRight: "-6px",
                            color: "#D7D7D7",
                          }}
                        />
                      );
                    } else if (state?.ranking_id === 3) {
                      return (
                        <Diamond
                          style={{
                            fontSize: 40,
                            marginRight: "-6px",
                            color: "#FEE101",
                          }}
                        />
                      );
                    } else if (state?.ranking_id === 4) {
                      return (
                        <Diamond
                          style={{
                            fontSize: 40,
                            marginRight: "-6px",
                            color: "#79CCE4",
                          }}
                        />
                      );
                    } else if (state?.ranking_id === 5) {
                      return (
                        <Diamond
                          style={{
                            fontSize: 40,
                            marginRight: "-6px",
                            color: "#225684",
                          }}
                        />
                      );
                    }
                  })()} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <Steps
          current={current}
          items={items}
          type="navigation"
          onChange={onChange}
        />
        {items[current].content}
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
            ROOM INFO
          </div>
        }
        className={cx("modal")}
        open={openModalRoom}
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
            id: values?.id,
            total_amount: values?.total_amount,
            total_room: values?.total_room,
            total_people: values?.total_people,
            payment_method: values?.payment_method,
            tax: values?.tax,
            name_bank: values?.name_bank,
            pay_time: values?.pay_time,
            checkin_time: values?.checkin_time,
            checkout_time: values?.checkout_time,
            cancel_time: values?.cancel_time,
            discount: values?.discount,
          }}
        >
          <div className={cx("form-attributes")}>
            <Form.Item
              name="id"
              label="ID Bill"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="total_amount"
              label="Total Amount"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="total_people"
              label="Total People"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="payment_method"
              label="Payment"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="tax"
              label="Tax(%)"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="pay_time"
              label="Pay time"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="discount"
              label="Discount"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <DataGrid
            rows={roomDetails}
            columns={columnsRoomDetail}
            className={cx("table")}
          />

          {/* // Lọc dữ liệu từ mảng "mockDatabillRoomDetail" theo điều kiện id_bill
          trùng với values.id const filteredData =
          mockDatabillRoomDetail.filter((item) => item.id_bill === values.id);
          // Lấy danh sách các id_room từ dữ liệu đã lọc const roomIds =
          filteredData.map((item) => item.id_room); // Lấy thông tin chi tiết về
          các phòng từ bảng "dataroom" dựa trên roomIds const roomDetails =
          mockDataRoom.filter((item) => roomIds.includes(item.id)); */}

          {/* {values.total_people ? (
            <DataGrid
              rows={roomDetails}
              columns={columnsRoomDetail}
              className={cx("table")}
            />
          ) : (
            <DataGrid
              rows={mockDataService.filter((item) =>
                mockDatabillServiceDetail
                  .filter((item) => item.id_bill === values.id)
                  .map((item) => item.id_service)
                  .includes(item.id)
              )}
              columns={columnsServiceDetail}
              className={cx("table")}
            />
          )} */}
        </Form>
      </Modal>
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
            SERVICE INFO
          </div>
        }
        className={cx("modal")}
        open={openModalService}
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
            id: values?.id,
            total_amount: values?.total_amount,
            total_room: values?.total_room,
            total_people: values?.total_people,
            payment_method: values?.payment_method,
            tax: values?.tax,
            name_bank: values?.name_bank,
            pay_time: values?.pay_time,
            checkin_time: values?.checkin_time,
            checkout_time: values?.checkout_time,
            cancel_time: values?.cancel_time,
            discount: values?.discount,
          }}
        >
          <div className={cx("form-attributes")}>
            <Form.Item
              name="id"
              label="ID Bill"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="total_amount"
              label="Total Amount"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="total_room"
              label="Total Room"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="total_people"
              label="Total People"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="payment_method"
              label="Payment"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="tax"
              label="Tax(%)"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="pay_time"
              label="Pay time"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="discount"
              label="Discount"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
        </Form>
      </Modal>
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
            EXTRA SERVICE INFO
          </div>
        }
        className={cx("modal")}
        open={openModalExtra}
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
            id: values?.id,
            total_amount: values?.total_amount,
            total_room: values?.total_room,
            total_people: values?.total_people,
            payment_method: values?.payment_method,
            tax: values?.tax,
            name_bank: values?.name_bank,
            pay_time: values?.pay_time,
            checkin_time: values?.checkin_time,
            checkout_time: values?.checkout_time,
            cancel_time: values?.cancel_time,
            discount: values?.discount,
          }}
        >
          <div className={cx("form-attributes")}>
            <Form.Item
              name="id"
              label="ID Bill"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="total_amount"
              label="Total Amount"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="payment_method"
              label="Payment"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="tax"
              label="Tax(%)"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <div className={cx("form-attributes")}>
            <Form.Item
              name="discount"
              label="Discount"
              hasFeedback
              valuePropName="children"
              className={cx("form-attributes__item")}
            >
              <div disabled={true} className={cx("input")} />
            </Form.Item>
          </div>
          <DataGrid
            rows={extraServiceDetail}
            columns={columnsServiceExtraDetail}
            className={cx("table")}
          />
        </Form>
      </Modal>
    </div>
  );
};

export default Bill;
