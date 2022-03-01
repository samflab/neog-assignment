import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const api = "https://621a23a981d4074e85ba63d2.mockapi.io/address";
  const [address, setAddress] = useState([]);

  const addressObj = {
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address1: "",
    city: "",
    country: "",
    zip: "",
  };

  const [form, setForm] = useState(addressObj);

  const editAddress = (item) => {
    try {
      const {
        id,
        firstname,
        lastname,
        phone,
        email,
        address1,
        city,
        country,
        zip,
      } = item;
      // console.log(item, id, firstname);
      setForm((form) => ({
        ...form,
        id,
        firstname,
        lastname,
        phone,
        email,
        address1,
        city,
        country,
        zip,
      }));
      // console.log(form);
    } catch (err) {
      console.log("Error ->", err);
    }
  };

  const getAddress = async () => {
    try {
      const res = await axios.get(api);
      setAddress(res.data);
    } catch (err) {
      console.error("Error ->", err);
    }
  };

  const deleteAddress = async (item) => {
    try{
      const response = await axios.delete(`${api}/${item.id}`)
      const updateAddress = address.filter((ele) =>
      ele.id !== response.data.id
    );
    setAddress(updateAddress);
    }
    catch(err){
      console.error("Error ->", err)
    }
  }

  const postAddress = async (e) => {
    e.preventDefault();
    let response;
    // const updateAddress;
    try {
      if (form.id) {
        response = await axios.put(`${api}/${form.id}`, form);
        const updateAddress = address.map((ele) =>
          ele.id === response.data.id ? response.data : ele
        );
        setAddress(updateAddress);
        setForm(addressObj);

      } else {
        response = await axios.post(api, form);
      }
      console.log(response);
      if (response.status === 201) {
        setAddress([...address, response.data]);

        setForm(addressObj);
      }
    } catch (err) {
      console.error("Error -> ", err);
    }
  };

  const inputHandler = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="App">
      <h3>Your addresses:</h3>
      <a href="#form">
        <button className="basic-btn success">Add New Address</button>
      </a>
      <div className="card-container">
        {address.map((e) => {
          return (
            <div key={e.id} className="card-width">
              <div className="img-container">
                <div className="card-header">
                  <h3 className="card-title">
                    {e.firstname} {e.lastname}
                  </h3>
                </div>
                <div className="card-content">
                  <p className="card-body">Email: {e.email}</p>
                  <p className="card-body">Phone: {e.phone}</p>
                  <p className="card-body">Address: {e.address1}</p>
                  <p className="card-body">
                    City: {e.city} Country: {e.country}
                  </p>
                  <p className="card-body">Zip: {e.zip}</p>

                  <button
                    className="wishlist btn"
                    onClick={() => editAddress(e)}
                  >
                    Edit
                  </button>
                  <button className="buy btn" onClick={()=>deleteAddress(e)}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <form id="form">
        <div>
          <label htmlFor="firstname" required>
            First Name
          </label>
          <input
            onChange={(e) => inputHandler("firstname", e.target.value)}
            type="text"
            placeholder="First name"
            id="firstname"
            className="email-inp"
           
            value={form.firstname}
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            onChange={(e) => inputHandler("lastname", e.target.value)}
            type="text"
            placeholder="Last name"
            id="lastname"
            className="email-inp"
            value={form.lastname}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={(e) => inputHandler("phone", e.target.value)}
            type="tel"
            placeholder="Phone number"
            id="phone"
            className="email-inp"
            value={form.phone}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => inputHandler("email", e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            className="email-inp"
            pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={form.email}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => inputHandler("address1", e.target.value)}
            type="text"
            placeholder="Address"
            id="address"
            className="email-inp"
            value={form.address1}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            onChange={(e) => inputHandler("city", e.target.value)}
            type="text"
            placeholder="city"
            id="city"
            className="email-inp"
            value={form.city}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            onChange={(e) => inputHandler("country", e.target.value)}
            type="text"
            placeholder="country"
            id="country"
            className="email-inp"
            value={form.country}
          />
        </div>

        <div>
          <label htmlFor="zip">Zipcode</label>
          <input
            onChange={(e) => inputHandler("zip", e.target.value)}
            type="text"
            placeholder="zip"
            id="zip"
            className="email-inp"
            value={form.zip}
          />
        </div>

        <input
          type="submit"
          className="default"
          onClick={(e) => postAddress(e)}
          value="Submit"
        />
      </form>
    </div>
  );
}

export default App;
