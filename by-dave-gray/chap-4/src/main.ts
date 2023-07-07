type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;

// Literal types
let myName: "";
let username: "Dave" | "John" | "Amy";
username = "Dave";
