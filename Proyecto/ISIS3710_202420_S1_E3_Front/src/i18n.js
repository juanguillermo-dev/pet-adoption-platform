import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "AddPet": {
            "title": "Register new pet for adoption",
            "subtitle": "Please complete the following information to register a new pet",
            "name": "Name",
            "species": "Species",
            "breed": "Breed",
            "age": "Age",
            "size": "Size",
            "location": "Location",
            "gender": "Gender",
            "neutered": "Neutered",
            "vaccinated": "Vaccinated",
            "microchipped": "Microchipped",
            "availabilityStatus": "Availability Status",
            "description": "Description",
            "photos": "Photos",
            "submit": "Register Pet",
            "error": "All fields are required, including at least one photo.",
            "success": "The pet has been successfully registered.",
            "selectOption": "Select an option",
          },
          "HomePage": {
            "welcomeTitle": "Welcome a new member",
            "welcomeMessage": "A perfect excuse to bring a new furry friend to your family, filling your life with happiness and love.",
            "loveStats": "Creating love",
            "adoptedStats": "Adopted",
            "rescuedStats": "Rescued",
            "viewProducts": "View Products",
            "adoptionQuestion": "What is stopping you from being happy with your new friend?",
            "adoptionInvite": "Sign up to help with adoptions, don't hesitate!",
            "adoptPets": "Adoptable Pets",
            "productTitle": "Discover the variety of products we have for your pet",
            "productDescription": "Provide your pet with the best, from food to accessories for a full and happy life.",
            "productsOnSale": "Products for Sale",
            "fosterHomeTitle": "Do you want to become a foster home?",
            "fosterHomeInvite": "Help the furry ones in their transition to a permanent home.",
            "registerFosterHome": "Register as Foster Home"
          },
          "PetList": {
            "cats": "Cats",
            "dogs": "Dogs",
            "location": "Location",
            "enterLocation": "Enter location",
            "size": "Size",
            "small": "Small",
            "medium": "Medium",
            "large": "Large",
            "breed": "Breed",
            "selectOption": "Select an option",
            "color": "Color",
            "other": "Other",
            "gender": "Gender",
            "male": "Male",
            "female": "Female",
            "age": "Age",
            "young": "Young (less than 1 year)",
            "adult": "Adult (1-5 years)",
            "senior": "Senior (more than 5 years)",
            "applyFilters": "Apply filters",
            "clearFilters": "Clear filters",
            "searchByName": "Search by name",
            "findAdoptablePets": "Find adoptable pets",
            "addPet": "Add your furry friend",
            "moreInfo": "More info",
            "prev": "Prev",
            "next": "Next"
          },
          "AddProd": {
            "title": "Register new product for sale",
            "subtitle": "Please complete the following information to register a new product",
            "name": "Name",
            "category": "Category",
            "price": "Price",
            "seller": "Seller",
            "photos": "Photos",
            "submit": "Register Product",
            "error": "All fields are required, including at least one photo.",
            "success": "The product has been successfully registered."
          },
          "PetDetails": {
            "petID": "Pet ID",
            "away": "away",
            "backToList": "Back to list",
            "edit": "Edit",
            "storyTitle": "{{name}}'s Story",
            "gender": "Gender",
            "species": "Species",
            "breed": "Breed",
            "age": "Age",
            "years": "years",
            "size": "Size",
            "vaccinated": "Vaccinated",
            "neutered": "Neutered",
            "microchipped": "Microchipped",
            "yes": "Yes",
            "no": "No",
            "adoptInterest": "Interested in adopting?",
            "relatedPets": "Pets you may be interested in"
          },
          "NavBar": {
            "adoption": "Adoption",
            "products": "Products",
            "foundations": "Foundations",
            "fosterHomes": "Foster Homes",
            "login": "Login",
            "register": "Register"
          },
          "Footer": {
            "adoption": "Adoption",
            "dogs": "Dogs",
            "cats": "Cats",
            "otherAnimals": "Other animals",
            "families": "Family groups",
            "care": "Care",
            "products": "Products",
            "food": "Food",
            "toys": "Toys",
            "beds": "Beds",
            "accessories": "Accessories",
            "medicine": "Medicine",
            "howToHelp": "How to help?",
            "foundations": "Foundations",
            "fosterRegister": "Register as foster home",
            "fosterRequests": "Foster home requests"
          },
          "LoginModal": {
            "title": "Log in PawPal",
            "username": "Full Name",
            "usernamePlaceholder": "Enter your full name",
            "password": "Password",
            "passwordPlaceholder": "Enter your password",
            "forgotPassword": "Forgot Password?",
            "keepLoggedIn": "Keep me logged in",
            "loginButton": "Log In",
            "orSignUp": "Or Sign Up with",
            "noAccount": "Don’t have an account?",
            "signUp": "Sign up",
            "error": "Incorrect username or password"
          },
          "RegisterModal": {
            "title": "Create Your Account",
            "fullName": "Full Name",
            "email": "Email",
            "password": "Password",
            "terms": "I accept the",
            "termsConditions": "Terms and Conditions",
            "createAccount": "Create Account",
            "orSignUpWith": "Or Sign up with",
            "userExists": "User already exists.",
            "emailExists": "Email already in use.",
            "invalidEmail": "Invalid email address.",
            "acceptTerms": "You must accept the terms and conditions.",
            "success": "User successfully created!"
          },
          "AdoptionForm": {
            "title": "Adoption Form",
            "mascotasEnCasa": "Do you have other pets at home? What kind?",
            "personasHogar": "How many people live in your household? Are there children? If so, what ages?",
            "alergias": "Does anyone in your household have allergies to animals?",
            "mascotasAntes": "Have you had pets before? (If yes, what type of pets and for how long?)",
            "motivoAdopcion": "Why do you want to adopt a pet?",
            "costosVeterinarios": "Are you willing to cover regular and emergency veterinary costs?",
            "visitaSeguimiento": "Can we make a follow-up visit to your home?",
            "submit": "Submit Application",
            "errorCompleteFields": "Please complete all fields before submitting the form.",
            "successMessage": "The form has been successfully submitted."
          },
          "FundDetail": {
            "notFound": "Foundation not found",
            "noName": "Name not available",
            "noCity": "City not available",
            "noDescription": "Description not available",
            "noEmail": "Email not available",
            "noPhone": "Phone not available",
            "noAddress": "Address not available",
            "noSocial": "Social media not available"
          },
          "HogarPaso": {
            "title": "Foster Homes",
            "petitionInfo": "Did you find an animal that is injured, sick, or in need of special care? Request help from our foster homes!",
            "careInfo": "Foster homes are essential for the rehabilitation of animals that need special care. Take care of a pet and help it find its future home!",
            "sendPetitionButton": "Send a Petition",
            "registerHomeButton": "Register Your Home"
          },
          "FormsPeticion": {
            "title": "Foster Home Request",
            "description": "Fill out this form to request help from a foster home that has the capacity to receive the pet you have found. All fields are mandatory.",
            "fields": {
              "name": "Full Name",
              "email": "Email Address",
              "phone": "Contact Phone",
              "address": "Full Address",
              "description": "Description or photo of the animal",
              "foundAnimal": "How did you find the animal?",
              "sickInjured": "Is the animal injured or sick?",
              "specialConditions": "Are there any special conditions to consider?",
              "veterinarian": "Has the animal been taken to a veterinarian? If yes, which one?"
            },
            "submitButton": "Submit Request",
            "errors": {
              "required": "This field is required.",
              "phone": "The phone number must contain only numbers.",
              "description": "You must provide a description or image of the animal."
            }
          },
          "FormsInscripcion": {
            "title": "Foster Home Registration Form",
            "description": "Fill out this form to register as a foster home and provide help to pets in need of special care. All fields are mandatory.",
            "fields": {
              "name": "Full Name",
              "email": "Email Address",
              "phone": "Contact Phone",
              "address": "Full Address",
              "otherPets": "Do you have other pets at home?",
              "experience": "Do you have previous experience providing special care to pets?",
              "careDuration": "How long are you willing to care for pets in your home?",
              "capacity": "How many pets can you adequately accommodate in your home at one time?"
            },
            "submitButton": "Submit Application",
            "errors": {
              "required": "This field is required.",
              "phone": "The phone number must contain only numbers."
            }
          }
        }
      },
      es: {
        translation: {
          "AddPet": {
            "title": "Registrar nueva mascota para adopción",
            "subtitle": "Por favor completa la siguiente información para registrar una nueva mascota",
            "name": "Nombre",
            "species": "Especie",
            "breed": "Raza",
            "age": "Edad",
            "size": "Tamaño",
            "location": "Ubicación",
            "gender": "Género",
            "neutered": "Esterilizado",
            "vaccinated": "Vacunado",
            "microchipped": "Microchip",
            "availabilityStatus": "Estatus de disponibilidad",
            "description": "Descripción",
            "photos": "Fotos",
            "submit": "Registrar Mascota",
            "error": "Todos los campos son obligatorios, incluyendo al menos una foto.",
            "success": "La mascota ha sido registrada exitosamente.",
            "selectOption": "Selecciona una opción",
          },
          "HomePage": {
            "welcomeTitle": "Dale la bienvenida a un nuevo miembro.",
            "welcomeMessage": "Una excusa perfecta para traer a tu familia un nuevo amigo peludo que llene tu vida de felicidad y amor.",
            "loveStats": "Elaborando amor",
            "adoptedStats": "Adoptados",
            "rescuedStats": "Rescatados",
            "viewProducts": "Ver Productos",
            "adoptionQuestion": "¿Qué te detiene a ser feliz con tu nuevo amigo?",
            "adoptionInvite": "Regístrate para ayudar en adopciones, ¡No lo pienses más!",
            "adoptPets": "Mascotas en Adopción",
            "productTitle": "Descubre la variedad de productos que tenemos para tu mascota",
            "productDescription": "Bríndale lo mejor a tu mascota, desde comida hasta accesorios para una vida plena y feliz.",
            "productsOnSale": "Productos en Venta",
            "fosterHomeTitle": "¿Quieres ser hogar de paso?",
            "fosterHomeInvite": "Ayuda a los peludos en su transición hacia un hogar definitivo.",
            "registerFosterHome": "Regístrate para Hogares de Paso"
          },
          "AddProd": {
            "title": "Registrar nuevo producto para venta",
            "subtitle": "Por favor completa la siguiente información para registrar un nuevo producto",
            "name": "Nombre",
            "category": "Categoría",
            "price": "Precio",
            "seller": "Vendedor",
            "photos": "Fotos",
            "submit": "Registrar Producto",
            "error": "Todos los campos son obligatorios, incluyendo al menos una foto.",
            "success": "El producto ha sido registrado exitosamente."
          },
          "PetDetails": {
            "petID": "ID de la mascota",
            "away": "de distancia",
            "backToList": "Volver al listado",
            "edit": "Editar",
            "storyTitle": "Historia de {{name}}",
            "gender": "Género",
            "species": "Especie",
            "breed": "Raza",
            "age": "Edad",
            "years": "años",
            "size": "Tamaño",
            "vaccinated": "Vacunado",
            "neutered": "Esterilizado",
            "microchipped": "Microchip",
            "yes": "Sí",
            "no": "No",
            "adoptInterest": "Si te interesa adoptar",
            "relatedPets": "Mascotas que te pueden interesar"
          },
          "PetList": {
            "cats": "Gatos",
            "dogs": "Perros",
            "location": "Ubicación",
            "enterLocation": "Ingresa ubicación",
            "size": "Tamaño",
            "small": "Pequeño",
            "medium": "Mediano",
            "large": "Grande",
            "breed": "Raza",
            "selectOption": "Selecciona una opción",
            "color": "Color",
            "other": "Otro",
            "gender": "Género",
            "male": "Macho",
            "female": "Hembra",
            "age": "Edad",
            "young": "Joven (menos de 1 año)",
            "adult": "Adulto (1-5 años)",
            "senior": "Mayor (más de 5 años)",
            "applyFilters": "Aplicar filtros",
            "clearFilters": "Borrar filtros",
            "searchByName": "Buscar por nombre",
            "findAdoptablePets": "Busca mascotas en adopción",
            "addPet": "Agrega tu peludo",
            "moreInfo": "Más información",
            "prev": "Prev",
            "next": "Next"
          },
          "NavBar": {
            "adoption": "Adopción",
            "products": "Productos",
            "foundations": "Fundaciones",
            "fosterHomes": "Hogares de Paso",
            "login": "Iniciar sesión",
            "register": "Registro"
          },
          "Footer": {
            "adoption": "Adopción",
            "dogs": "Perros",
            "cats": "Gatos",
            "otherAnimals": "Otros animales",
            "families": "Grupos familiares",
            "care": "Cuidados",
            "products": "Productos",
            "food": "Alimento",
            "toys": "Juguetes",
            "beds": "Camas",
            "accessories": "Accesorios",
            "medicine": "Medicina",
            "howToHelp": "¿Cómo ayudar?",
            "foundations": "Fundaciones",
            "fosterRegister": "Inscribir hogar de paso",
            "fosterRequests": "Peticiones a hogar de paso"
          },
          "LoginModal": {
            "title": "Iniciar sesión en PawPal",
            "username": "Nombre completo",
            "usernamePlaceholder": "Ingresa tu nombre completo",
            "password": "Contraseña",
            "passwordPlaceholder": "Ingresa tu contraseña",
            "forgotPassword": "¿Olvidaste tu contraseña?",
            "keepLoggedIn": "Mantenerme conectado",
            "loginButton": "Iniciar sesión",
            "orSignUp": "O regístrate con",
            "noAccount": "¿No tienes una cuenta?",
            "signUp": "Regístrate",
            "error": "Nombre de usuario o contraseña incorrectos"
          },
          "RegisterModal": {
            "title": "Crea Tu Cuenta",
            "fullName": "Nombre Completo",
            "email": "Correo Electrónico",
            "password": "Contraseña",
            "terms": "Acepto los",
            "termsConditions": "Términos y Condiciones",
            "createAccount": "Crear Cuenta",
            "orSignUpWith": "O regístrate con",
            "userExists": "El usuario ya existe.",
            "emailExists": "El correo ya está en uso.",
            "invalidEmail": "Correo electrónico no válido.",
            "acceptTerms": "Debes aceptar los términos y condiciones.",
            "success": "¡Usuario creado exitosamente!"
          },
          "AdoptionForm": {
            "title": "Formulario de Adopción",
            "mascotasEnCasa": "¿Tiene otras mascotas en casa? ¿De qué tipo?",
            "personasHogar": "¿Cuántas personas viven en su hogar? ¿Hay niños? Si es así, ¿de qué edades?",
            "alergias": "¿Alguien en su hogar tiene alergias a los animales?",
            "mascotasAntes": "¿Ha tenido mascotas antes? (Si es así, ¿qué tipo de mascotas y por cuánto tiempo?)",
            "motivoAdopcion": "¿Por qué desea adoptar una mascota?",
            "costosVeterinarios": "¿Está dispuesto a cubrir los costos de atención veterinaria regular y de emergencia?",
            "visitaSeguimiento": "¿Podemos hacer una visita de seguimiento a su hogar?",
            "submit": "Enviar Solicitud",
            "errorCompleteFields": "Por favor, complete todos los campos antes de enviar el formulario.",
            "successMessage": "El formulario ha sido enviado correctamente."
          },
          "FundDetail": {
            "notFound": "Fundación no encontrada",
            "noName": "Nombre no disponible",
            "noCity": "Ciudad no disponible",
            "noDescription": "Descripción no disponible",
            "noEmail": "Correo no disponible",
            "noPhone": "Teléfono no disponible",
            "noAddress": "Dirección no disponible",
            "noSocial": "Redes sociales no disponibles"
          },
          "HogarPaso": {
            "title": "Hogares de Paso",
            "petitionInfo": "¿Encontraste un animal que se encuentra herido, enfermo o en necesidad de cuidados especiales? ¡Solicita ayuda a nuestros hogares de paso!",
            "careInfo": "Los hogares de paso son esenciales para la rehabilitación de aquellos animales que necesitan cuidados especiales. ¡Cuida a una mascota y ayúdala a encontrar su futuro hogar!",
            "sendPetitionButton": "Envía una Petición",
            "registerHomeButton": "Inscribe tu Hogar"
          },
          "FormsPeticion": {
            "title": "Solicitud a Hogar de Paso",
            "description": "Llene este formulario para solicitar ayuda de un hogar de paso que tenga capacidad para recibir a la mascota que ha encontrado. Todos los campos son obligatorios.",
            "fields": {
              "name": "Nombre completo",
              "email": "Correo electrónico",
              "phone": "Teléfono de contacto",
              "address": "Dirección completa",
              "description": "Descripción o foto del animal",
              "foundAnimal": "¿Cómo encontró al animal?",
              "sickInjured": "¿El animal está herido o enfermo?",
              "specialConditions": "¿Hay alguna condición especial que deba tenerse en cuenta?",
              "veterinarian": "¿El animal ha sido llevado al veterinario? ¿A cuál?"
            },
            "submitButton": "Enviar Solicitud",
            "errors": {
              "required": "Este campo es obligatorio.",
              "phone": "El teléfono debe contener solo números.",
              "description": "Debes proporcionar una descripción o imagen del animal."
            }
          },
          "FormsInscripcion": {
            "title": "Formulario de inscripción como hogar de paso",
            "description": "Llene este formulario para inscribirse como hogar de paso y proporcionar ayuda a mascotas que necesiten cuidados especiales. Todos los campos son obligatorios.",
            "fields": {
              "name": "Nombre completo",
              "email": "Correo electrónico",
              "phone": "Teléfono de contacto",
              "address": "Dirección completa",
              "otherPets": "¿Tiene otras mascotas en casa?",
              "experience": "¿Tiene experiencia previa prestando cuidados especiales a mascotas?",
              "careDuration": "¿Por cuánto tiempo estará dispuesto a cuidar las mascotas en su hogar?",
              "capacity": "¿Cuántas mascotas puede acoger adecuadamente en su hogar en un momento dado?"
            },
            "submitButton": "Enviar Solicitud",
            "errors": {
              "required": "Este campo es obligatorio.",
              "phone": "El teléfono debe contener solo números."
            }
          }
        }
      }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;