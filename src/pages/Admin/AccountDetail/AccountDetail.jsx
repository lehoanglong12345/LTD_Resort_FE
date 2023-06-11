import React, { useState, useEffect } from "react";

import { Button, Form, Input, message } from "antd";
import { BiEdit, BiSave } from "react-icons/bi";
import styles from "./AccountDetail.module.scss";
import classNames from "classnames/bind";
import AuthUser from "../../../utils/AuthUser";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

const AccountDetail = () => {
  const { http } = AuthUser();
  const [admin, setAdmin] = useState();
  const [edit, setEdit] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    const updatedAdmin = {
      ...admin,
      name: form.getFieldValue("fullName"),
      gender: form.getFieldValue("gender"),
      birthday: form.getFieldValue("birthday"),
      address: form.getFieldValue("address"),
      CMND: form.getFieldValue("CMND"),
      phone: form.getFieldValue("phone"),
      position_name: form.getFieldValue("position_name"),
      department_name: form.getFieldValue("department_name"),
    };
    setAdmin(updatedAdmin);

    const formData = new FormData();

    formData.append("avatar", "gs://ltd-resort.appspot.com/avatars/aloy.png");
    formData.append("full_name", admin.name);
    formData.append("gender", admin.gender);
    formData.append("birthday", admin.birthday);
    formData.append("CMND", admin.CMND);
    formData.append("address", admin.address);
    formData.append("phone", admin.phone);
    formData.append(
      "image",
      "https://via.placeholder.com/640x480.png/00cc22?text=quo"
    );

    http
      .patch(`/admin/update-admin`, formData)
      .then(() => {
        Swal.fire(
          "Update!",
          "You have successfully update your profile",
          "success"
        ).then(() => {
          navigate(0);
        });
      })
      .catch((reject) => {
        console.log(reject);
        toast.error("Oops. Try again", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  // Failed case
  const onFinishFailed = (error) => {
    console.log("Failed:", error);
    message.error("Please fill in all required fields!");
  };

  const handleEditSaveClick = () => {
    if (edit) {
      console.log("edit");
      form.setFieldValue("fullName", admin?.name);
      form.setFieldValue("gender", admin?.gender);
      form.setFieldValue("birthday", admin?.birthday);
      form.setFieldValue("address", admin?.address);
      form.setFieldValue("CMND", admin?.CMND);
      form.setFieldValue("phone", admin?.phone);
      form.setFieldValue("position_name", admin?.position_name);
      form.setFieldValue("department_name", admin?.department_name);

      setEdit(!edit);
    } else {
      setEdit(!edit);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await http
        .get(`/admin/account-admin`)
        .then((resolve) => {
          console.log(resolve);
          setAdmin(resolve.data.customer);
        })
        .catch((reject) => {
          console.log(reject);
        });
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={cx("account-info-wrapper")}>
        <div className={cx("account-info-wrapper__top")}>
          <h1 className={cx("header")}>Account Information</h1>
          {/* <button className={cx("btn-change")} onClick={handleChange}>
            <EditOutlined />
            <span>Change</span>
          </button> */}
        </div>

        <Form
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
        >
          <Form.Item wrapperCol={24}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {edit ? (
                <Button
                  htmlType="submit"
                  type="submit"
                  onClick={handleEditSaveClick}
                  className={cx("button")}
                  icon={<BiSave />}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={handleEditSaveClick}
                  className={cx("button")}
                  icon={<BiEdit />}
                >
                  Save
                </Button>
              )}
            </div>
          </Form.Item>
          <div className={cx("info")}>
            <div className={cx("info__img")}>
              <img src={admin?.image} alt="Avatar" />
            </div>
            <div className={cx("info__admin")}>
              <div
                style={{
                  width: "50%",
                }}
              >
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Name</div>
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                    va={admin?.name}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>{admin?.name}</div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Gender</div>
                  <Form.Item
                    name="gender"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>{admin?.gender}</div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Birthday</div>
                  <Form.Item
                    name="birthday"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>
                        {admin?.birthday}
                      </div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                        value={admin?.birthday}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Address</div>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>{admin?.address}</div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                        value={admin?.address}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>ID Card</div>
                  <Form.Item
                    name="CMND"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>{admin?.CMND}</div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Phone</div>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>{admin?.phone}</div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Position</div>
                  <Form.Item
                    name="position_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>
                        {admin?.position_name}
                      </div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                        value={admin?.position_name}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className={cx("info-container__left")}>
                  <div className={cx("title-text")}>Department</div>
                  <Form.Item
                    name="department_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className={cx("form-attributes__item")}
                  >
                    {edit ? (
                      <div className={cx("content-text")}>
                        {admin?.department_name}
                      </div>
                    ) : (
                      <Input
                        placeholder={"Please fill full name"}
                        className={cx("content-text")}
                        value={admin?.department_name}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccountDetail;
