import React from "react";
import { useTranslation } from "react-i18next"; // Importar el hook para internacionalización
import { useLocation, useNavigate } from "react-router-dom";

const PetDetails = () => {
  const { t } = useTranslation(); // Hook de traducción
  const location = useLocation();
  const navigate = useNavigate();

  // Verifica si hay estado y si 'pet' existe
  if (!location.state || !location.state.pet) {
    navigate("/pets"); // Redirige a la lista de mascotas si no hay datos de la mascota
    return null; // Retorna null para evitar renderizar el componente
  }

  const pet = location.state?.pet;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.mainInfo}>
          <img src={pet.photo} alt={pet.name} style={styles.profileImage} />
          <div>
            <h2 style={styles.petName}>{pet.name}</h2>
            <p style={styles.petId}>Pet ID: {pet.id}</p>
            <p style={styles.location}>{pet.location}</p>
          </div>
        </div>
        <button
          style={styles.backButton}
          onClick={() => navigate("/pets")}
        >
          {t("Regregsar a listado")}
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.imageSection}>
          <img src={pet.photo} alt={pet.name} style={styles.mainImage} />
          <div style={styles.thumbnailContainer}>
            {Array.isArray(pet.images) &&
              pet.images.length > 1 &&
              pet.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${pet.name} ${index}`}
                  style={styles.thumbnail}
                />
              ))}
          </div>
        </div>

        <div style={styles.descriptionSection}>
          <h3 style={styles.descriptionTitle}>{t("Descripcion")}</h3>
          <p style={styles.descriptionText}>{pet.description}</p>
        </div>
      </div>

      {/* Details Grid */}
      <div style={styles.detailsGrid}>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.gender")}</p>
          <h4>{pet.gender}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.species")}</p>
          <h4>{pet.species}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.breed")}</p>
          <h4>{pet.breed}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.age")}</p>
          <h4>{pet.age} {t("PetDetails.years")}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.size")}</p>
          <h4>{pet.size}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.vaccinated")}</p>
          <h4>{pet.vaccinated === "Yes" ? t("PetDetails.yes") : t("PetDetails.no")}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.neutered")}</p>
          <h4>{pet.neutered === "Yes" ? t("PetDetails.yes") : t("PetDetails.no")}</h4>
        </div>
        <div style={styles.detailBox}>
          <p>{t("PetDetails.microchipped")}</p>
          <h4>{pet.microchipped === "Yes" ? t("PetDetails.yes") : t("PetDetails.no")}</h4>
        </div>
      </div>

      {/* Actions */}
      <div style={styles.actions}>
        <button
          style={styles.adoptButton}
          onClick={() => navigate("/adopcion-formulario")}
        >
          {t("Adoptar")}
        </button>
        <button
          style={styles.editButton}
          onClick={() => navigate(`/pets/edit/${pet.id}`, { state: { pet } })}
        >
          {t("PetDetails.edit")}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fdf7f1",
    borderRadius: "15px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  mainInfo: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "20px",
  },
  petName: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  },
  petId: {
    color: "#888",
    margin: "5px 0",
  },
  location: {
    color: "#555",
    margin: "5px 0",
  },
  backButton: {
    backgroundColor: "#f3eae3",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  content: {
    display: "flex",
    marginBottom: "20px",
    gap: "20px",
  },
  imageSection: {
    flex: "2",
  },
  mainImage: {
    width: "100%",
    height: "300px",
    borderRadius: "15px",
    objectFit: "cover",
  },
  thumbnailContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  thumbnail: {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  descriptionSection: {
    flex: "1",
    backgroundColor: "#f3eae3",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  descriptionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  descriptionText: {
    fontSize: "16px",
    color: "#555",
  },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginTop: "20px",
  },
  detailBox: {
    textAlign: "center",
    backgroundColor: "#f3eae3",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  actions: {
    textAlign: "center",
    marginTop: "20px",
  },
  adoptButton: {
    backgroundColor: "#836953",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    marginRight: "10px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "#5e5768",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default PetDetails;
