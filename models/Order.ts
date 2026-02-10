import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      phone: String,
      address: String,
      city: String,
      pincode: String,
    },
    items: [
      {
        id: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: Number,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
