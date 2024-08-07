import { Schema, model, models } from "mongoose";
const bcrypt = require("bcrypt");
const msg = "Field Required";

const employeeSchema = new Schema({
  fileNo: {
    type: String,
    // required: [true, msg],
    unique: [true, "File Number already exists"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
  surName: {
    type: String,
    // required: [true, msg],
  },
  otherNames: {
    type: String,
    // required: [true, msg],
  },
  // password: {
  //   type: String,
  //   // required: true,
  //   minLength: 6,
  // },
  gender: {
    type: String,
    enum: ["M", "F"],
  },
  maritalStatus: {
    type: String,
    enum: ["M", "S"],
  },
  stateOfOrigin: {
    type: String,
    // required: [true, msg],
    default: "Not Yet Gotten",
  },
  gradeLevel: {
    type: String,
    // required: [true, msg],
  },
  dob: {
    type: Date,
    // required: [true, msg],
    default: "2024-04-08T10:31:36.368Z",
  },
  dofa: {
    type: Date,
    // required: [true, msg],
    default: "2024-04-08T10:31:36.368Z",
  },
  dopa: {
    type: Date,
    // required: [true, msg],
    default: "2024-04-08T10:31:36.368Z",
  },
  confirmDate: {
    type: Date,
    // required: [true, msg],
    default: "2024-04-08T10:31:36.368Z",
  },
  rank: {
    type: String,
    // required: [true, msg],
    default: "Not Yet Gotten",
  },
  location: {
    type: String,
    // required: [true, msg],
    default: "Not Yet Gotten",
  },
  department: {
    type: String,
    // required: [true, msg],
    default: "Not Yet Gotten",
  },
  retirementDueDate: {
    type: String,
    // required: [true, msg],
    default: "Not Yet Gotten",
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateModified: {
    type: Date,
    required: [true, msg],
    default: Date.now(),
  },
});

// Hash password before Saving
// employeeSchema.pre("save", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// Static method to login Employee
// employeeSchema.statics.login = async function (fileNo, password) {
//   const employee = await this.findOne({
//     fileNo,
//   });
//   if (employee) {
//     const auth = await bcrypt.compare(password, employee.password);
//     if (auth) {
//       return employee;
//     }
//     throw Error("Incorrect Password");
//   }
//   throw Error("Employee Does Not Exist");
// };

const Employee = models.Employee || model("Employee", employeeSchema);
export default Employee;