import { User } from "../../types/User";

export const initalUserState: User = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" },
  },
  phone: "",
  website: "",
  company: { name: "", catchPhrase: "", bs: "" },
};
