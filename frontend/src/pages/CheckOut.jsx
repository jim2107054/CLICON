import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import OrderSummery from "../components/OrderSummery";
import { FiDollarSign } from "react-icons/fi";
import { BiLogoVenmo } from "react-icons/bi";
import { IoLogoPaypal } from "react-icons/io5";
import { FaAmazon } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, placeOrder, Total } = useAppContext();
  const [checkboxClicked, setCheckboxClicked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "Bangladesh",
    state: "Dhaka",
    city: "Dhaka",
    zipCode: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone must be at least 10 digits";
    }
    return newErrors;
  };

  const handlePlaceOrder = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      const orderData = {
        ...formData,
        paymentMethod,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country} - ${formData.zipCode}`
      };
      
      const order = placeOrder(orderData);
      navigate("/check-out-success", { state: { orderId: order.id } });
    } else {
      setErrors(newErrors);
      alert("Please fill in all required fields correctly");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add items to your cart to proceed with checkout</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-btnColor text-white px-8 py-3 rounded-md hover:scale-105 transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const [checkboxClicked2, setCheckboxClicked2] = useState(false);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 px-10 lg:px-36 py-10">
        {/*------------Billing Information-------------*/}
        <div className="flex flex-col px-1 py-2 w-full lg:w-5/6">
          {/*--------User Information----------*/}
          <div>
            <p className="text-xl font-medium text-gray-900 mb-5">
              Billing Information
            </p>
            {/*--------User Information----------*/}
            <div>
              {/*--------First 3 info----------*/}
              <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-1 w-1/4">
                  <label className="text-sm mt-1 text-gray-800 font-medium">
                    User Name
                  </label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs">{errors.firstName}</span>
                  )}
                </div>
                <div className="flex mt-7 flex-col w-1/4">
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs">{errors.lastName}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label className="text-sm mt-1 text-gray-800 font-medium">
                    Company Name <span>(Optional)</span>
                  </label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              {/*--------Address----------*/}
              <div className="flex flex-col mt-2 w-full">
                <label className="text-sm my-1 text-gray-800 font-medium">
                  Address
                </label>
                <input
                  className="h-10 px-5 rounded border border-gray-700 w-full"
                  type="text"
                />
              </div>
              {/*--------Address info----------*/}
              <div className="grid grid-cols-4 gap-3 mt-2">
                {/*--------country----------*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="#">Country</label>
                  <select className="h-10 px-5 rounded border border-gray-700 w-full">
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                  </select>
                </div>
                {/*--------Region/state----------*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="#">Region/State</label>
                  <select className="h-10 px-5 rounded border border-gray-700 w-full">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
                {/*--------city----------*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="#">City</label>
                  <select className="h-10 px-5 rounded border border-gray-700 w-full">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
                {/*--------zip code----------*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="#">Zip Code</label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              {/*--------Email and Phone Number----------*/}
              <div className="grid grid-cols-2 gap-3 mt-2">
                {/*--------Email----------*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="#">Email</label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                {/*--------Phone Number----------*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="#">Phone Number</label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              {/*--------Check box----------*/}
              <div className="flex items-center mt-2">
                <input
                  onClick={() => setCheckboxClicked(!checkboxClicked)}
                  type="checkbox"
                  className="h-4 w-4 bg-btnColor text-btnColor border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-base text-gray-800 font-light">
                  Ship into different address
                </label>
              </div>
              {checkboxClicked && (
                <>
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col gap-1 w-1/2">
                      <label className="text-sm mt-1 text-gray-800 font-medium">
                        Full Name
                      </label>
                      <input
                        className="h-10 px-5 rounded border border-gray-700 w-full"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    {/*--------Address----------*/}
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm my-1 text-gray-800 font-medium">
                        Address
                      </label>
                      <input
                        className="h-10 px-5 rounded border border-gray-700 w-full"
                        type="text"
                      />
                    </div>
                  </div>

                  {/*--------Address info----------*/}
                  <div className="grid grid-cols-4 gap-3 mt-2">
                    {/*--------country----------*/}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="#">Country</label>
                      <select className="h-10 px-5 rounded border border-gray-700 w-full">
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                      </select>
                    </div>
                    {/*--------Region/state----------*/}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="#">Region/State</label>
                      <select className="h-10 px-5 rounded border border-gray-700 w-full">
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rangpur">Rangpur</option>
                      </select>
                    </div>
                    {/*--------city----------*/}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="#">City</label>
                      <select className="h-10 px-5 rounded border border-gray-700 w-full">
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rangpur">Rangpur</option>
                      </select>
                    </div>
                    {/*--------zip code----------*/}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="#">Zip Code</label>
                      <input
                        className="h-10 px-5 rounded border border-gray-700 w-full"
                        type="text"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                  {/*--------Email and Phone Number----------*/}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {/*--------Email----------*/}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="#">Email</label>
                      <input
                        className="h-10 px-5 rounded border border-gray-700 w-full"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    {/*--------Phone Number----------*/}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="#">Phone Number</label>
                      <input
                        className="h-10 px-5 rounded border border-gray-700 w-full"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/*--------Payment Method----------*/}
            <div className="flex flex-col border border-gray-700 rounded mt-5">
              <p className="text-xl px-5 font-medium text-gray-800">
                Payment Option
              </p>
              <div className="flex border border-gray-700 gap-3 mt-2">
                <div className="flex flex-col w-1/5 items-center gap-2 py-5">
                  <FiDollarSign className="text-2xl text-btnColor" />
                  <p className="text-center font-medium">Cash on Delivery</p>
                  <input className="h-4 w-4" type="checkbox" />
                </div>
                <div className="bg-gray-400 w-[1px] my-2"></div>
                <div className="flex flex-col w-1/5 items-center gap-2 py-5">
                  <BiLogoVenmo className="text-2xl text-blue-400" />
                  <p className="text-center font-medium">Venmo</p>
                  <input className="h-4 w-4" type="checkbox" />
                </div>
                <div className="bg-gray-400 w-[1px] my-2"></div>
                <div className="flex flex-col w-1/5 items-center gap-2 py-5">
                  <IoLogoPaypal className="text-2xl text-blue-500" />
                  <p className="text-center font-medium">Paypal</p>
                  <input className="h-4 w-4" type="checkbox" />
                </div>
                <div className="bg-gray-400 w-[1px] my-2"></div>
                <div className="flex flex-col w-1/5 items-center gap-2 py-5">
                  <FaAmazon className="text-2xl" />
                  <p className="text-center font-medium">Amazon Pay</p>
                  <input className="h-4 w-4" type="checkbox" />
                </div>
                <div className="bg-gray-400 w-[1px] my-2"></div>
                <div className="flex flex-col w-1/5 items-center gap-2 py-5">
                  <FaRegCreditCard className="text-2xl text-orange-500" />
                  <p className="text-center font-medium">Debid/Credit Card</p>
                  <input className="h-4 w-4" type="checkbox" />
                </div>
              </div>
              <div className="flex flex-col px-5 my-5 w-full">
                <div className="flex flex-col mt-2 w-full">
                  <label className="text-sm my-1 text-gray-800 font-medium">
                    Name on Card
                  </label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="text-sm my-1 text-gray-800 font-medium">
                    Card Number
                  </label>
                  <input
                    className="h-10 px-5 rounded border border-gray-700 w-full"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {/*--------expire date----------*/}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="#">Email</label>
                    <input
                      className="h-10 px-5 rounded border border-gray-700 w-full"
                      type="date"
                      placeholder="DD/YY"
                    />
                  </div>
                  {/*--------CVC Number----------*/}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="#">CVC Number</label>
                    <input
                      className="h-10 px-5 rounded border border-gray-700 w-full"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*--------Additional Information----------*/}
            <div className="flex flex-col gap-2 my-10">
              <p className="text-xl font-medium">Additional Information</p>
              <p className="text-base font-medium">
                Order Notes{" "}
                <span className="font-medium text-gray-500">(Optional)</span>
              </p>
              <textarea
                className="h-24 px-5 rounded border border-gray-700 w-full"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>
        </div>
        {/*------------Order Summery-------------*/}
        <div>
          <div className="flex flex-col w-full">
            {/*--------First Div----------*/}
            <div className="flex flex-col rounded border-2 border-gray-300 w-full">
              <p className="px-5 text-xl font-medium mt-2 mb-4">
                Order Summery
              </p>
              {/*--------Items with price,quantity,image----------*/}
              <div>
                <OrderSummery
                  image={shopItems[0].image}
                  title={shopItems[0].title}
                  quantity={1}
                  price={shopItems[0].price}
                />
                <OrderSummery
                  image={shopItems[1].image}
                  title={shopItems[1].title}
                  quantity={2}
                  price={shopItems[1].price}
                />
                <OrderSummery
                  image={shopItems[2].image}
                  title={shopItems[2].title}
                  quantity={4}
                  price={shopItems[2].price}
                />
              </div>
              <div className="flex flex-col mt-5 gap-2 px-5">
                <div className="flex justify-between">
                  <p className="justify-between gap-10">Sub-total</p>
                  <p className="justify-between gap-10">$320</p>
                </div>
                <div className="flex justify-between">
                  <p className="justify-between gap-10">Shipping</p>
                  <p className="justify-between gap-10">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="justify-between gap-10">Discount</p>
                  <p className="justify-between gap-10">$32</p>
                </div>
                <div className="flex justify-between">
                  <p className="justify-between gap-10">Tax</p>
                  <p className="justify-between gap-10">$320</p>
                </div>
              </div>
              <hr className="my-2 text-gray-300 h-0.5 mx-2" />
              <div className="flex mb-5 px-5 justify-between">
                <p className="justify-between gap-10">Total</p>
                <p className="justify-between font-semibold gap-10">
                  $357.99 <span>USD</span>
                </p>
              </div>
              <button className="flex items-center md:gap-3 px-0 md:px-5 border bg-btnColor h-12 justify-center mx-4 mb-5 text-white font-medium rounded hover:scale-105 duration-500 transition-all">
                PLACE ORDER <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
