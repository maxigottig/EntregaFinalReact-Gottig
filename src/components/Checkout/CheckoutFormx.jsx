import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Form, Button, Row, Col } from "react-bootstrap";
import { ItemsContext } from "../../context/ItemsContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  address: "",
};

export const CheckoutForm = () => {
  const [purchaseID, setPurchaseID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (purchaseID) {
      setShowModal(true);
    }
  }, [purchaseID]);

  const handleCloseModal = () => {
    setItems([]);
    setItemsCount([]);
    setShowModal(false);
    navigateTo('/'); // Redirect to the home page ("/")
  };

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    firstName: false,
    lastName: false,
    address: false,
  });

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

    // Verificación de campos
    if (name === 'email') {
      const isValid = /^\S+@\S+\.\S+$/.test(value); // Verifica si es un correo electrónico válido
      setErrors((prevErrors) => ({ ...prevErrors, email: !isValid }));
    }

    if (name === 'phone') {
      const isValid = /^[0-9]+$/.test(value); // Verifica si solo contiene dígitos
      setErrors((prevErrors) => ({ ...prevErrors, phone: !isValid }));
    }

    if (name === 'firstName') {
      const isValid = value.trim() !== ''; // Verifica si no está vacío
      setErrors((prevErrors) => ({ ...prevErrors, firstName: !isValid }));
    }

    if (name === 'lastName') {
      const isValid = value.trim() !== ''; // Verifica si no está vacío
      setErrors((prevErrors) => ({ ...prevErrors, lastName: !isValid }));
    }

    if (name === 'address') {
      const isValid = value.trim() !== ''; // Verifica si no está vacío
      setErrors((prevErrors) => ({ ...prevErrors, address: !isValid }));
    }
  };

  const { items, setItems, itemsCount, setItemsCount } = useContext(ItemsContext);

  const itemCountMap = new Map();
  items.forEach((item) => {
    const itemId = item[0].id;
    const itemCount = itemCountMap.get(itemId) || 0;
    itemCountMap.set(itemId, itemCount + 1);
  });

  const uniqueItems = Array.from(itemCountMap.entries()).map(([itemId, itemCount]) => {
    const item = items.find((item) => item[0].id === itemId);
    return { item, count: itemCount };
  }).filter(({ count }) => count > 0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some((value) => value.trim() === '');
    if (isEmpty) {
      return; // Detener el envío del formulario
    }


    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) {
      return; 
    }

    const products = uniqueItems.reduce((obj, { item, count }) => {
      const { id, name, price } = item[0];
      obj[id] = { name, price, count };
      return obj;
    }, {});

    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      ...values,
      products,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };


  return (
    
    <div style={styles.containerShop} >

      <Form className="FormContainer mt-3" onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <div className="fs-3 text-start mx-2 mb-4">Contact Information</div>
          <Form.Control
            type="text"
            placeholder="Email Address *"
            style={{ margin: 10, maxWidth: 400, borderRadius: 0 }}
            name="email"
            value={values.email}
            onChange={handleOnChange}
            className={errors.email ? 'is-invalid' : ''}
            required
          />
          {errors.email && (
            <div className="invalid-feedback fs-6 m-2">
              Please enter a valid email address.
            </div>
          )}

          <Form.Control
            type="text"
            placeholder="Phone Number *"
            style={{ margin: 10, maxWidth: 400, borderRadius: 0 }}
            name="phone"
            value={values.phone}
            onChange={handleOnChange}
            className={errors.phone ? 'is-invalid' : ''}
            required
          />
          {errors.phone && (
            <div className="invalid-feedback fs-6 m-2">
              Please enter a valid phone number.
            </div>
          )}
          <hr className="my-4" />
          <div className="fs-3 text-start mx-2 mb-4">Shipping Information</div>
        </Form.Group>

        <Form.Group className="mb-3" >
          <div style={{ maxWidth: 400 }}>
            <Row className="text-start ">

              <Col >
                <Form.Control
                  type="text"
                  placeholder="First Name *"
                  style={{ margin: 10, borderRadius: 0 }}
                  name="firstName"
                  value={values.firstName}
                  onChange={handleOnChange}
                  className={errors.firstName ? 'is-invalid' : ''}
                  required
                />
                {errors.firstName && (
                  <div className="invalid-feedback fs-6 m-2">
                    Please enter your first name.
                  </div>
                )}
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Last Name *"
                  style={{ margin: 10, borderRadius: 0 }}
                  name="lastName"
                  value={values.lastName}
                  onChange={handleOnChange}
                  className={errors.lastName ? 'is-invalid' : ''}
                  required
                />
                {errors.lastName && (
                  <div className="invalid-feedback fs-6 m-2">
                    Please enter your last name.
                  </div>
                )}
              </Col>
            </Row>

            <Form.Control
              type="text"
              placeholder="Street Address *"
              style={{ marginRight: 10, marginLeft: 10, borderRadius: 0 }}
              name="address"
              value={values.address}
              onChange={handleOnChange}
              className={errors.address ? 'is-invalid' : ''}
              required
            />
            {errors.address && (
              <div className="invalid-feedback fs-6 m-2">
                Please enter your address.
              </div>
            )}

          </div>

        </Form.Group>
        <Button className="btnASendAction d-flex px-5 my-4 mx-2" variant="dark" type="submit">
          Send order
        </Button>
      </Form>
      {purchaseID && (

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Thank you for your purchase! </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "green", color: "whitesmoke" }}>
            <span>Your purchase ID is:</span>
            <h4>{purchaseID}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal} >
              <Link to='/' style={{ textDecoration: 'none' }}> Go to Home</Link>
            </Button>
          </Modal.Footer>
        </Modal>



      )}

    </div >
  );
};

