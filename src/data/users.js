const users = [
    {
      id: 1,
      name: "Ram",
      email: "ram@gmail.com",
      age: 24,
      address: {
        city: "Bengaluru",
        pin: "560089",
      },
      bank: [
        {
          accNo: 12334,
          bName: "SBI",
          type: "Savings",
        },
        {
          accNo: 4334,
          bName: "HDFC",
          type: "current",
        },
      ],
    },
    {
      id: 2,
      name: "John",
      email: "john@gmail.com",
      age: 26,
      address: {
        city: "Mysore",
        pin: "560078",
      },
      bank: [
        {
          accNo: 56894,
          bName: "BOI",
          type: "Savings",
        },
        {
          accNo: 79545,
          bName: "ICICI",
          type: "current",
        },
      ],
    },
  ];
  
  export default users;
  