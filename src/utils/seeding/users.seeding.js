const users = [
  {
    id: 1,
    name: "Anamika",
    mobileNo: "9898989898",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Navdeep",
    mobileNo: "9897968087",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul",
    mobileNo: "9812345678",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Priya",
    mobileNo: "9876543210",
    role: "Admin",
    status: "Active",
  },
  {
    id: 5,
    name: "Rohan",
    mobileNo: "9834567890",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 6,
    name: "Simran",
    mobileNo: "9845671234",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Amit",
    mobileNo: "9856712345",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 8,
    name: "Neha",
    mobileNo: "9865432190",
    role: "Admin",
    status: "Active",
  },
  {
    id: 9,
    name: "Karan",
    mobileNo: "9876543121",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Pooja",
    mobileNo: "9887654321",
    role: "Admin",
    status: "Active",
  },
];

export const initUsers = () => {
  const existingUser = localStorage.getItem("users");
  if (existingUser) return;

  localStorage.setItem("users", JSON.stringify(users));
};
