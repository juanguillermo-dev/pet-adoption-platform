import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook para internacionalización
import './AddPet.css';

const AddProd = () => {
  const { t } = useTranslation(); // Hook de traducción

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [seller, setSeller] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!name || !category || !seller || !price || image.length === 0) {
      setErrorMessage(t('AddProd.error'));
      return;
    }

    // Simulación de envío de datos
    console.log({
      name,
      category,
      seller,
      price,
      image
    });

    // Mostrar mensaje de éxito
    setSuccessMessage(t('AddProd.success'));
    setErrorMessage('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{t('AddProd.title')}</h2>
      <p className="text-center mb-4">{t('AddProd.subtitle')}</p>
      <form data-testid="send-form" onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name">{t('AddProd.name')}</label>
            <input
              type="text"
              className="form-control"
              id="name"
              data-testid="nombreProducto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="category">{t('AddProd.category')}</label>
            <input
              type="text"
              className="form-control"
              id="category"
              data-testid="categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="price">{t('AddProd.price')}</label>
            <input
              type="text"
              className="form-control"
              id="price"
              data-testid="precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="seller">{t('AddProd.seller')}</label>
            <input
              type="text"
              className="form-control"
              id="seller"
              data-testid="vendedor"
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="image">{t('AddProd.photos')}</label>
            <div className="photo-upload-container">
              <input
                type="file"
                id="image"
                data-testid="imagen"
                accept="image/*"
                onChange={handlePhotoUpload}
                required
              />
            </div>
          </div>
        </div>
        
        {errorMessage && <p data-testid="text-danger" className="text-danger">{errorMessage}</p>}
        {successMessage && <p data-testid="text-success" className="text-success">{successMessage}</p>}

        <button type="submit" className="btn btn-primary btn-block">{t('AddProd.submit')}</button>
      </form>
    </div>
  );
};

export default AddProd;
