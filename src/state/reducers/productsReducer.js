import uuid from "uuid/v4";

const productsDefaultState = {
  data: [
    {
      id: uuid(),
      brand: "Raymond",
      name: `
      Transparent Barrier Film 2`,
      price: 13,
      picture: "product-11.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Raymond",
      name: `
      Walmart
      Ride on Toy, 3 Wheel Motorcycle Trike for Kids by Rockin' R`,
      price: 350,
      picture: "product-10.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Raymond",
      name: `
      Products & Games Ride On Kids Toy Bike Motor Bike Boys Girl`,
      price: 300,
      picture: "product-9.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "bugatti",
      name: `Baby Sofa Seat or Rocking Chair for Kids`,
      price: 220,
      picture: "product-8.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "playskool products",
      name: ` Best Educational Products for Kids `,
      price: 690,
      picture: "product-7.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Lovely Too",
      name: `
      Kids Makeup Products Girls Games Baby Cosmetics Pretend`,
      price: 1000,
      picture: "product-5.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Generic",
      name: `
      Learning Baby Products
      Baby Tablet Educational Products Girls Toy For 1-6`,
      price: 500,
      picture: "product-6.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "PUMA",
      name: `SRECAP Yamaha R1 Plastic Bike with Rechargeable Battery Operated Ride-on for Kids (Red , 2-6 Years)`,
      price: 770,
      picture: "product-1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Woodland",
      name: `
      HolidayLife Musical Products Kids Baby Roll Drum`,
      price: 400,
      picture: "product-4.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Woodland",
      name: `Musical Drum and Keyboard for Baby,`,
      price: 100,
      picture: "product-4.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Woodland",
      name: `Paw Patrol MARSHALL CARRY CASE MUSICAL INSTRUMENT`,
      price: 150,
      picture: "product-3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Bojo",
      name: `
      Kids Toy Box Subscription 2-12 yrs`,
      price: 550,
      picture: "product-2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Bead Game",
      name: `
      
      Packaging Films
      `,
      price: 300,
      picture: "product-1.png",
      description: `Printing, Packaging, Metalizing & Lamination, Flexible Packaging, High
        shrink film, Thermal lamination, Isotropic films- Lidding for dairy
        products, High friction films.`,
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
  ],
  cart: [],
  total: 0,
};

const productsReducer = (state = productsDefaultState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        data: action.data,
      };
    case "SET_SELECTED_PRODUCT":
      return {
        ...state,
        dataselected: action.data,
      };
    case "ADD_NEW_PHONE":
      return {
        ...state,
        products: [...state.products, action.toy],
      };
    case "ADD_TO_CART":
      const addedFasion = state.products.find((toy) => action.id === toy.id);
      const existingFasion = state.cart.find(
        (existingFasion) => action.id === existingFasion.id
      );

      if (existingFasion) {
        addedFasion.quantity += 1;
        return {
          ...state,
          total: state.total + addedFasion.price,
        };
      } else {
        addedFasion.quantity = 1;
        const newTotal = state.total + addedFasion.price;
        return {
          ...state,
          cart: [...state.cart, addedFasion],
          total: newTotal,
        };
      }
    case "REMOVE_FROM_CART":
      const toyToRemove = state.cart.find((toy) => action.id === toy.id);
      const removeFasion = state.cart.filter((toy) => action.id !== toy.id);

      const newTotal = state.total - toyToRemove.price * toyToRemove.quantity;
      return {
        ...state,
        cart: removeFasion,
        total: newTotal,
      };
    case "DECREMENT":
      const toy = state.cart.find((toy) => action.id === toy.id);

      if (toy.quantity > 1) {
        toy.quantity -= 1;
        const newTotal = state.total - toy.price;
        return {
          ...state,
          total: newTotal,
        };
      } else {
        return state;
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default productsReducer;
