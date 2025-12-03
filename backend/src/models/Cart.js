import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    },
    price: Number
  }],
  subtotal: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Calculate subtotal before saving
cartSchema.pre('save', async function(next) {
  if (this.items && this.items.length > 0) {
    this.subtotal = this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  } else {
    this.subtotal = 0;
  }
  next();
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
