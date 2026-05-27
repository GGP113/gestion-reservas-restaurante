# Panel de Gestión de Reservas - Restaurante

Esta es una aplicación web interactiva diseñada exclusivamente para la creación, visualización y control de reservas en tiempo real para un restaurante.

---

## 🚀 Stack Tecnológico

El proyecto está construido utilizando las siguientes herramientas y tecnologías:

* **Frontend:** React (JavaScript / JSX)
* **Enrutamiento:** React Router DOM (Manejo de rutas privadas y anidadas para el Dashboard)
* **Estilos:** CSS3 nativo (Diseño personalizado Pop-Art y componentes integrados de Uiverse.io)
* **Gestión de Estado Local:** Web Storage API (Uso de LocalStorage para almacenar clientes y turnos)
* **Persistencia de Datos:** MockAPI (Consumo de servicios RESTful asíncronos)

---

## 🌐 Enlace al Servicio de API

La aplicación se conecta a una API simulada en MockAPI para gestionar de extremo a extremo el flujo CRUD de las reservas mediante peticiones HTTP asíncronas:

* **URL Base de la API:** `https://6a14f77791ff9a63de073671.mockapi.io/api/gestion-reserva/`
* **Endpoint del Recurso:** `https://6a14f77791ff9a63de073671.mockapi.io/api/gestion-reserva/reserva`

### Esquema del Recurso (`reserva`):
* `id`: Object ID (Generado automáticamente por MockAPI)
* `fechaHora`: String (Fecha seleccionada por el usuario)
* `cantidadPersonas`: Number (Cantidad de asistentes para la reserva)

### Operaciones Soportadas:
* `GET`: Para listar las tarjetas de reservas en tiempo real en la vista correspondiente.
* `POST`: Para registrar nuevas reservas capturadas desde el formulario.
* `PUT`: Para modificar los datos existentes enviando el ID en la URL (`/reserva/:id`).
* `DELETE`: Para cancelar reservas individuales o limpiar el historial completo al cerrar sesión.

---

## 🛠️ Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar el repositorio y arrancar la aplicación en tu entorno local:

### 1. Clonar el repositorio
Abre tu terminal y descarga el proyecto con el siguiente comando:
```bash
git clone [https://github.com/GGP113/gestion-reservas-restaurante.git](https://github.com/GGP113/gestion-reservas-restaurante.git)