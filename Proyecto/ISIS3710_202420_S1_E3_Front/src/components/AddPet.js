import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next'; // Importar el hook para internacionalización
import './AddPet.css';  // Archivo CSS para estilos adicionales

const AddPet = () => {
  const { t } = useTranslation();  // Hook de traducción

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [neutered, setNeutered] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [microchipped, setMicrochipped] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!name || !species || !breed || !age || !size || !gender || !photos.length) {
      setErrorMessage(t('AddPet.error'));
      return;
    }

    // Simulación de envío de datos
    console.log({
      name,
      species,
      breed,
      age,
      size,
      location,
      gender,
      neutered,
      vaccinated,
      microchipped,
      availabilityStatus,
      description,
      photos
    });

    // Mostrar mensaje de éxito
    setSuccessMessage(t('AddPet.success'));
    setErrorMessage('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{t('AddPet.title')}</h2>
      <p className="text-center mb-4">{t('AddPet.subtitle')}</p>
      <form data-testid="send-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name">{t('AddPet.name')}</label>
            <input
              type="text"
              className="form-control"
              id="name"
              data-testid="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="species">{t('AddPet.species')}</label>
            <select
              className="form-control"
              id="species"
              data-testid="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Perro">{t('AddPet.dog')}</option>
              <option value="Gato">{t('AddPet.cat')}</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="breed">{t('AddPet.breed')}</label>
            <input
              type="text"
              className="form-control"
              id="breed"
              data-testid="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="age">{t('AddPet.age')}</label>
            <input
              type="text"
              className="form-control"
              id="age"
              data-testid="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="size">{t('AddPet.size')}</label>
            <select
              className="form-control"
              id="size"
              data-testid="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Pequeño">{t('AddPet.small')}</option>
              <option value="Mediano">{t('AddPet.medium')}</option>
              <option value="Grande">{t('AddPet.large')}</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="location">{t('AddPet.location')}</label>
            <input
              type="text"
              className="form-control"
              id="location"
              data-testid="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="gender">{t('AddPet.gender')}</label>
            <select
              className="form-control"
              id="gender"
              data-testid="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Macho">{t('AddPet.male')}</option>
              <option value="Hembra">{t('AddPet.female')}</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="neutered">{t('AddPet.neutered')}</label>
            <select
              className="form-control"
              id="neutered"
              data-testid="neutered"
              value={neutered}
              onChange={(e) => setNeutered(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Sí">{t('AddPet.yes')}</option>
              <option value="No">{t('AddPet.no')}</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="vaccinated">{t('AddPet.vaccinated')}</label>
            <select
              className="form-control"
              id="vaccinated"
              data-testid="vaccinated"
              value={vaccinated}
              onChange={(e) => setVaccinated(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Sí">{t('AddPet.yes')}</option>
              <option value="No">{t('AddPet.no')}</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="microchipped">{t('AddPet.microchipped')}</label>
            <select
              className="form-control"
              id="microchipped"
              data-testid="microchipped"
              value={microchipped}
              onChange={(e) => setMicrochipped(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Sí">{t('AddPet.yes')}</option>
              <option value="No">{t('AddPet.no')}</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="availabilityStatus">{t('AddPet.availabilityStatus')}</label>
            <select
              className="form-control"
              id="availabilityStatus"
              data-testid="availabilityStatus"
              value={availabilityStatus}
              onChange={(e) => setAvailabilityStatus(e.target.value)}
              required
            >
              <option value="">{t('AddPet.selectOption')}</option>
              <option value="Disponible">{t('AddPet.available')}</option>
              <option value="Reservado">{t('AddPet.reserved')}</option>
            </select>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="description">{t('AddPet.description')}</label>
          <textarea
            className="form-control"
            id="description"
            data-testid="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="photos">{t('AddPet.photos')}</label>
          <div className="photo-upload-container">
            <input
              type="file"
              id="photos"
              data-testid="photos"
              className="form-control"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              required
            />
          </div>
        </div>

        {errorMessage && <p data-testid="text-danger" className="text-danger">{errorMessage}</p>}
        {successMessage && <p data-testid="text-success" className="text-success">{successMessage}</p>}

        <button
        type="submit" className="btn btn-primary btn-block">{t('AddPet.submit')}</button>
      </form>
    </div>
  );
};

export default AddPet;
