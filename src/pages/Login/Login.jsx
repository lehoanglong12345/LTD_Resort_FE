import React, { useState } from 'react'
import styles from './Login.module.scss'
import classNames from "classnames/bind";
import logo from '../../img/logo.png'
import facebookIcon from '../../img/facebook.png'
import googleIcon from '../../img/google.png'
import gif_cat from '../../img/cat.gif'
import carousel1 from '../../img/carousel1.png'
import carousel2 from '../../img/carousel2.png'
import carousel3 from '../../img/carousel3.png'
import { Form, Button, Checkbox, Input, Divider, Modal } from 'antd'
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from '../../utils/AuthUser';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

const Login = () => {

  const slides = [
    { url: carousel1, title: 'Carousel 1' },
    { url: carousel2, title: 'Carousel 2' },
    { url: carousel3, title: 'Carousel 3' },
  ]

  const loginFormLayout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 24
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginBySocial = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }
  
  const navigate = useNavigate();

  const { http, setToken } = AuthUser();  
  const [form] = Form.useForm();
  const ROLE_ADMIN = "ROLE_ADMIN";
  const ROLE_EMPLOYEE = "ROLE_EMPLOYEE";
  const ROLE_CUSTOMER = "ROLE_CUSTOMER";

  const onFinish = (values) => {
    const formData = new FormData();
    
    formData.append('email', values.email);
    formData.append('password', values.password);

    http.post('/auth/login', formData)
      .then((resolve) => {
        console.log(resolve);
        const user = resolve.data.user;
        setToken(user, resolve.data.access_token, user.role_name);
          if (user.role_name === ROLE_ADMIN) {
          navigate('/admin')
        } else if (user.role_name === ROLE_EMPLOYEE) {
          navigate('/employee');
        } else if (user.role_name === ROLE_CUSTOMER) {
          navigate('/find-rooms');
        }
        toast.success(`Welcome back ${resolve.data.user.username}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
      .catch((reject) => {
        console.log(reject);
        toast.error('Email or password is incorrect..', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    toast.error('Please input all fields', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper__left")}>
        <div className={cx("login-container")}>
          <div className={cx("login-container__logo")}>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <div className={cx("login-container__main")}>
            <div>
              <h1 className={cx("title")}>Login</h1>
              <p className={cx("title-description")}>Login to access your LTD account</p>
            </div>
            <div className={cx("form-container")}>
              <Form
                {...loginFormLayout}
                form={form}
                layout='vertical'
                name='login_form'
                labelAlign='left'
                labelWrap='true'
                size='large'
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Email is required!',
                    },
                    {
                      type: 'email',
                      message: 'Invalid email address!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder='john.doe@gmail.com'
                    autoComplete='email'
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Password is required!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder='******'
                    autoComplete='current-password'
                  />
                </Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    span: 12,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <p className={cx("forgot__password")}>
                  <Link to="/forgot-password" className={cx("forgot__password__link")}>
                    Forgot Password
                  </Link>
                </p>
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button type="primary" htmlType="submit" className={cx("button")}>
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className={cx("signup")}>
              <div className={cx("signup__title")}>Don't have an account yet?</div>
              <div>
                <Link to="/register" className={cx("signup__link")}>
                  Sign up here
                </Link>
              </div>
            </div>
            <Divider
              plain
              orientation='center'
              className={cx("seperate-line")}
            >
              Or login with
            </Divider>
            <div className={cx("social-media")}>
              <a href="/" className={cx("social-media__link")}>
                <Button 
                  className={cx("social-media__button")}
                  onClick={(e) => handleLoginBySocial(e)}
                >
                  <img src={facebookIcon} className={cx("social-media__icon")} alt='facebook icon' />
                </Button>
              </a>
              <a href="/" className={cx("social-media__link")}>
                <Button 
                  className={cx("social-media__button")}
                  onClick={(e) => handleLoginBySocial(e)}
                >
                  <img src={googleIcon} className={cx("social-media__icon")} alt='google icon' />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("wrapper__right")}>
        <ImageSlider slides={slides} parentWidth={600} />
      </div>
      <Modal
        title="Tính năng đang phát triển"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" key="back" onClick={handleOk}>OK</Button>,
        ]}
      >
        <div className={cx("wrapper__modal")}>
            <h1 style={{textAlign: 'center'}}>Chúng tôi sẽ sớm hoàn thành tính năng này (◍•ᴗ•◍)♡ ✧*</h1>
            <img src={gif_cat} alt="Cat meowwing" width={80} />
        </div>
      </Modal>
    </div>
  )
}

export default Login
