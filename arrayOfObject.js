const data = [
  {
    table_code: "b44fba6f-dff9-11ec-89fc-c9e316c0834f",
    package_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    reservation_id: "75f30f1f-3596-11ed-8e55-00505642dda1",
    reservation_no: "BUF/CB001/IX/2022/0002",
    customer_name: "Afandi",
    hp: "0833783834454",
    party_size: 50,
    menu_reservation: [
      {
        order_menu_code: "OM/CB001/39",
        name: "2c302d53-13aa-11ed-89fc-c9e316c0834f",
        qty: 9,
        note: "asdasd",
      },
      {
        order_menu_code: "OM/CB001/52",
        name: "a0d98189-21e8-11ed-859a-00505642dda1",
        qty: 10,
        note: "Tesing",
      },
    ],
    reservation_time: "2022-09-20 16:46:00",
    dp: 2175000,
    reservation_status: "NEED APPROVAL",
    type_reservation: "prasmanan",
    alamat: "",
    "room.name": "VIP B",
    "packagemenu.package_id": "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    "packagemenu.name": "Segar Manis",
    "packagemenu.price": 87000,
  },
];
const dataTemp = [
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "asd",
    menu_code: "OM/CB001/48",
    order_menu_id: "11850542-13d0-11ed-89fc-c9e316c0834f",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "asdasda",
    menu_code: "OM/CB001/49",
    order_menu_id: "1d82e998-13d0-11ed-89fc-c9e316c0834f",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "walid",
    menu_code: "OM/CB001/39",
    order_menu_id: "2c302d53-13aa-11ed-89fc-c9e316c0834f",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "tes 2",
    menu_code: "OM/CB001/45",
    order_menu_id: "5c260aa0-13cf-11ed-89fc-c9e316c0834f",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "tes 2",
    menu_code: "OM/CB001/46",
    order_menu_id: "7ebe1b55-13cf-11ed-89fc-c9e316c0834f",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "tes 2",
    menu_code: "OM/CB001/47",
    order_menu_id: "92de0975-13cf-11ed-89fc-c9e316c0834f",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Soft Drink",
    category_id: "2f47a268-d743-11ec-89fc-c9e316c0834f",
    menu_name: "Test",
    menu_code: "OM/CB001/52",
    order_menu_id: "a0d98189-21e8-11ed-859a-00505642dda1",
  },
  {
    packagemenu_id: "a72ea73c-7ba4-4a7c-90f5-1a5694c7c443",
    name: "Segar Manis",
    price: 87000,
    category_name: "Minuman",
    category_id: "503a1acf-13a9-11ed-89fc-c9e316c0834f",
    menu_name: null,
    menu_code: null,
    order_menu_id: null,
  },
];

let assignOne = data[0].menu_reservation;
let assignTwo = dataTemp;
// console.log(assignOne, "data pertama");

let response = {};
let tanker = [];
// let menu = [];

for (let i = 0; i < assignOne.length; i++) {
  menu = [];
  for (let j = 0; j < assignTwo.length; j++) {
    if (assignOne[i].order_menu_code === assignTwo[j].menu_code) {
      menu.push({
        cat_id: assignTwo[j].category_id,
        cat_name: assignTwo[j].category_name,
        menu_id: assignOne[i].name,
        menu_name: assignTwo[j].menu_name,
        qty: assignOne[i].qty,
        note: assignOne[i].note,
      });
    }
  }
  tanker[i] = menu;
}

response = {
  result: tanker,
};
console.log(response, "abca");
response.result.forEach((val) => {
  console.log(val,"semua");
});

// console.log(datacrush,"ini data")