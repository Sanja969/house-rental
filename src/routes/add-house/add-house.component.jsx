import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './add-house.styles.scss';
import { saveHouse } from '../../redux/home';
import { useNavigate  } from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';

const AddHouse = () => {
  const navbar = useSelector(state => state.navbar);
  const user = useSelector(state => state.user);

  const navigate = useNavigate();

  const gotToHome = () => {
    navigate('/');
  };

  const dispatch = useDispatch();

  const defaultFormFields = {
    name: '',
    description: '',
    image_data: '',
    city: '',
    adress: '',
    price: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    image_data,
    city,
    adress,
    price,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createHouse = (name, description, image_data, city, adress, price) => dispatch(saveHouse({
    name,
    description,
    image_data,
    city,
    adress,
    price,
    user_id:user.id,
    available:true,
  }));

  const submitHouse = () => {
    createHouse(name, description, image_data, city, adress, price);
    resetFormFields();
    gotToHome();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={navbar? 'add-home-box active' : 'add-home-box'}>
      <h3 className="">ADD NEW HOUSE</h3>
      <form className="">
        <FormInput type="text" name="name" label="House name" onChange={handleChange} value={name} required formType='add_house' />
        <FormInput type="text" name="description" label="Description" onChange={handleChange} value={description} required formType='description' />
        <FormInput type="url" name="image_data" label="Image src" onChange={handleChange} value={image_data} required formType='add_house' />
        <FormInput type="text" name="price" label="Price" onChange={handleChange} value={price} required formType='add_house' />
        <FormInput type="text" name="city" label="City" onChange={handleChange} value={city} required formType='add_house' />
        <FormInput type="text" name="adress" label="Adress" onChange={handleChange} value={adress} required formType='add_house' />
        <Button type="submit" buttonType="inverted" onClick={submitHouse}>SUBMIT</Button>
      </form>
    </div>

  );
};

export default AddHouse;