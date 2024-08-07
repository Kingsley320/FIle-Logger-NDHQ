import { Schema, model, models} from 'mongoose';
const msg = "Field Required";

const logSchema = new Schema({
  entryOperator: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: [true, "Entry operator is required. Please sign in"]
  },
  title: {
    type: String,
    required: [true, msg],
    // unique: true,
    // maxLength: 8,
  },
  // fileName: {b
  //   type: String,
  //   required: [true, msg],
  // },
  type: {
    type: String,
    required: true,
    enum: ["FILE", "MAIL"]
  },
  description: {
    type: String,
    require: [true, msg],
  },
  whereFrom: {
    type: String,
    required: [true, msg],
    enum: ["POOL", "DIR", "DD", "AD"],
    default: "POOL"
  },
  goingTo: {
    type: String,
    required: [true, msg],
    enum: ["POOL", "DIR", "DD", "AD"],
    default: "POOL"
  },
  status: {
    type: String,
    required: [true, msg],
    enum: ["Received", "Pending", "Unreceived"],
    default: "Pending",
  },
  dateCreated:{
    type: Date,
    required: [true, msg],
    default: Date.now(),
  },
  dateModified:{
    type: Date,
    required: [true,msg],
    default: Date.now(),
}
});

const Log = models.Log || model("Log", logSchema);
export default Log;