import { tokens } from "../utils/theme";

export const mockDataTeam = [
  {
    id: 1,
    full_name: "Jon Snow",
    gender: "Male",
    birthday: "2002-01-14",
    email: "jonsnow@gmail.com",
    CMND: "201839482",
    address: "Đà Nẵng",
    account_bank: "000029583293",
    name_bank: "Vietcombank",
    dayStart: "2012-01-14",
    dayQuit: "2020-01-14",
    position: "Boss",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    full_name: "Cersei Lannister",
    gender: "Female",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    full_name: "Jaime Lannister",
    gender: "Female",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    full_name: "Anya Stark",
    gender: "Male",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    full_name: "Daenerys Targaryen",
    gender: "Female",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    full_name: "Ever Melisandre",
    gender: "Female",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    full_name: "Ferrara Clifford",
    gender: "Male",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    full_name: "Rossini Frances",
    gender: "Male",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    full_name: "Harvey Roxie",
    gender: "Male",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDatabillRoom = [
  {
    id: 1,
    id_customer: 1,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 2,
    id_customer: 1,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 3,
    id_customer: 2,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 4,
    id_customer: 4,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 5,
    id_customer: 3,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    position: "Boss",
    discount: "35",
  },
  {
    id: 6,
    id_customer: 2,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 7,
    id_customer: 10,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 8,
    id_customer: 2,
    total_amount: "12",
    total_room: "4",
    total_people: "2",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
];

export const mockDatabillService = [
  {
    id: 1,
    id_customer: 3,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 2,
    id_customer: 2,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 3,
    id_customer: 4,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 4,
    id_customer: 6,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 5,
    id_customer: 2,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    position: "Boss",
    discount: "35",
  },
  {
    id: 6,
    id_customer: 3,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 7,
    id_customer: 1,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
  {
    id: 8,
    id_customer: 3,
    total_amount: "12",
    payment_method: "null",
    tax: "000029583293",
    name_bank: "Vietcombank",
    pay_time: "2012-01-14",
    checkin_time: "2020-01-14",
    checkout_time: "2020-01-14",
    cancel_time: "2020-01-14",
    discount: "35",
  },
];

export const mockDatabillRoomDetail = [
  {
    id: 1,
    id_bill: 5,
    id_room: 1,
  },
  {
    id: 2,
    id_bill: 5,
    id_room: 3,
  },
  {
    id: 3,
    id_bill: 4,
    id_room: 2,
  },
]

export const mockDatabillServiceDetail = [
  {
    id: 1,
    id_bill: 1,
    id_service: 1,
  },
  {
    id: 2,
    id_bill: 1,
    id_service: 2,
  },
  {
    id: 3,
    id_bill: 2,
    id_service: 2,
  },
]

export const mockDataCustomer = [
  {
    id: 1,
    full_name: "Jon Snow",
    email: "jonsnow@gmail.com",
    gender: "male",
    birthday: "2002-01-14",
    address: "Đà Nẵng",
    phone: "(665)121-5454",
    ranking_point: "RANKING_BRONZE",
    date: "03/12/2022",
  },
  {
    id: 2,
    full_name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    gender: "male",
    birthday: "2002-03-22",
    address: "Thanh Hoá",
    phone: "(421)314-2288",
    ranking_point: "RANKING_PLATINUM",
    date: "06/15/2021",
  },
  {
    id: 3,
    full_name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    gender: "female",
    birthday: "2002-01-14",
    address: "Huế",
    phone: "(422)982-6739",
    ranking_point: "RANKING_BRONZE",
    date: "05/02/2022",
  },
  {
    id: 4,
    full_name: "Anya Stark",
    email: "anyastark@gmail.com",
    gender: "female",
    birthday: "2002-01-20",
    address: "Đà Nẵng",
    cost: "80.55",
    phone: "(921)425-6742",
    ranking_point: "RANKING_DIAMOND",
    date: "03/21/2022",
  },
  {
    id: 5,
    full_name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    gender: "male",
    birthday: "2102-01-14",
    address: "Đà Nẵng",
    cost: "1.24",
    phone: "(421)445-1189",
    ranking_point: "RANKING_SILVER",
    date: "01/12/2021",
  },
  {
    id: 6,
    full_name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    gender: "female",
    birthday: "2002-01-14",
    address: "Nhà",
    cost: "63.12",
    phone: "(232)545-6483",
    ranking_point: "RANKING_DIAMOND",
    date: "11/02/2022",
  },
  {
    id: 7,
    full_name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    gender: "female",
    birthday: "2002-13-14",
    address: "Đà Nẵng",
    cost: "52.42",
    phone: "(543)124-0123",
    ranking_point: "RANKING_GOLD",
    date: "02/11/2022",
  },
  {
    id: 8,
    full_name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    gender: "male",
    birthday: "2002-01-14",
    address: "...",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockDataRoom = [
  {
    id: 1,
    room_name: "B201",
    id_area: 1,
    id_floor: 1,
    id_type: 1,
  },
  {
    id: 2,
    room_name: "C302",
    id_area: 2,
    id_floor: 4,
    id_type: 2,
  },
  {
    id: 3,
    room_name: "C302",
    id_area: 2,
    id_floor: 4,
    id_type: 2,
  },
  
];

export const mockDataRoomFloor = [
  {
    id: 1,
    floor_name: "1",
    
  },
  {
    id: 2,
    floor_name: "2",
    
  },
  {
    id: 3,
    floor_name: "3",
    
  },
  {
    id: 4,
    floor_name: "4",
    
  },
  
];

export const mockDataRoomArea = [
  {
    id: 1,
    area_name: "A",
    
  },
  {
    id: 2,
    area_name: "B",
    
  },
  {
    id: 3,
    area_name: "C",
    
  },
  
];

export const mockDataRoomType = [
  {
    id: 1,
    type_name: "Water",
    size: "2",
    capacity : "4",
    describe: "Trang",
    image: ",",
    price: "500000",
    point_ranking: "10000",
  },
  {
    id: 2,
    type_name: "Fire",
    size: "4",
    capacity : "5",
    describe: "Duc",
    image: "0",
    price: "20000",
    point_ranking: "110000",

  },
  {
    id: 3,
    type_name: "Deluxe",
    size: "4",
    capacity : "2",
    describe: "Long",
    image: "0",
    price: "500000000",
    point_ranking: "10002130",

  },
  
];

export const mockDataService = [
  {
    id: 1,
    service_name: "Sapa",
    description: "Khoa",
    status: true,
    price: "500",
    point_ranking: "5000",
    id_type: 2,
  },
  {
    id: 2,
    service_name: "Drink",
    description: "Quynh",
    status: false,
    price: "55500",
    point_ranking: "512000",
    id_type: 1,

  },
  {
    id: 3,
    service_name: "Football",
    description: "Vinh",
    status: true,
    price: "10000",
    point_ranking: "500000",
    id_type: 3,

  },
  
];

export const mockDataServiceType = [
  {
    id: 1,
    type_name: "On Ground",
  },
  {
    id: 2,
    type_name: "Bar",
  },
  {
    id: 3,
    type_name: "Back up",
  },
  
];

export const mockDataEquipment = [
  {
    id: 1,
    equipment_name: "Pan",
    description: "Thai",
    price: "2999",
    number: "2",
    image: "no",
  },
  {
    id: 2,
    equipment_name: "TV",
    description: "Huu",
    price: "300",
    number: "2",
    image: "no",

  },
  {
    id: 3,
    equipment_name: "Sword",
    description: "Dat",
    price: "30000",
    number: "10",
    image: "no",

  },
  
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    burger: 96,
    kebab: 72,
    donut: 140,
  },
  {
    country: "AE",
    "hot dog": 55,
    burger: 28,
    kebab: 58,
    donut: 29,
  },
  {
    country: "AF",
    "hot dog": 109,
    burger: 23,
    kebab: 34,
    donut: 152,
  },
  {
    country: "AG",
    "hot dog": 133,
    burger: 52,
    kebab: 43,
    donut: 83,
  },
  {
    country: "AI",
    "hot dog": 81,
    burger: 80,
    kebab: 112,
    donut: 35,
  },
  {
    country: "AL",
    "hot dog": 66,
    burger: 111,
    kebab: 167,
    donut: 18,
  },
  {
    country: "AM",
    "hot dog": 80,
    burger: 47,
    kebab: 158,
    donut: 49,
  },
];

export const mockBarWorker = [
  { month: 'Tháng 1', employeesWorking: 2, employeesResigned: 1 },
  { month: 'Tháng 2', employeesWorking: 3, employeesResigned: 2 },
  { month: 'Tháng 3', employeesWorking: 4, employeesResigned: 0 },
  { month: 'Tháng 4', employeesWorking: 5, employeesResigned: 1 },
  { month: 'Tháng 5', employeesWorking: 42, employeesResigned: 10 },
  { month: 'Tháng 6', employeesWorking: 44, employeesResigned: 20 },
  { month: 'Tháng 7', employeesWorking: 44, employeesResigned: 25 },
  { month: 'Tháng 8', employeesWorking: 41, employeesResigned: 12 },
  { month: 'Tháng 9', employeesWorking: 41, employeesResigned: 14 },
  { month: 'Tháng 10', employeesWorking: 43, employeesResigned: 12 },
  { month: 'Tháng 11', employeesWorking: 41, employeesResigned: 10 },
  { month: 'Tháng 12', employeesWorking: 14, employeesResigned: 12 },
  // và tiếp tục cho các tháng khác
];
export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];
export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "January",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];


export const mockLineBill = [
  {
    id: "Room",
    data: [
      {
        x: "January",
        y: 101,
      },
      {
        x: "February",
        y: 75,
      },
      {
        x: "March",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "August",
        y: 232,
      },
      {
        x: "September",
        y: 281,
      },
      {
        x: "October",
        y: 1,
      },
      {
        x: "November",
        y: 35,
      },
      {
        x: "December",
        y: 14,
      },
    ],
  },
  {
    id: "Service",
    data: [
      {
        x: "January",
        y: 212,
      },
      {
        x: "February",
        y: 190,
      },
      {
        x: "March",
        y: 270,
      },
      {
        x: "April",
        y: 9,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 175,
      },
      {
        x: "July",
        y: 33,
      },
      {
        x: "August",
        y: 189,
      },
      {
        x: "September",
        y: 97,
      },
      {
        x: "October",
        y: 87,
      },
      {
        x: "November",
        y: 299,
      },
      {
        x: "December",
        y: 251,
      },
    ],
  },
  {
    id: "Extra",
    data: [
      {
        x: "January",
        y: 191,
      },
      {
        x: "February",
        y: 136,
      },
      {
        x: "March",
        y: 91,
      },
      {
        x: "April",
        y: 190,
      },
      {
        x: "May",
        y: 211,
      },
      {
        x: "June",
        y: 152,
      },
      {
        x: "July",
        y: 189,
      },
      {
        x: "August",
        y: 152,
      },
      {
        x: "September",
        y: 8,
      },
      {
        x: "October",
        y: 197,
      },
      {
        x: "November",
        y: 107,
      },
      {
        x: "December",
        y: 170,
      },
    ],
  },
];
