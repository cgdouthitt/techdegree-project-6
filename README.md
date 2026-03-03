# **Portfolio Website – Express & Pug**

A dynamic portfolio website built with Node.js, Express, and Pug.
This application renders project data from a JSON file and displays individual project pages using dynamic routing.

## 🚀 Features:

- Dynamic project rendering from a data.json file

- Clean server-side rendering with Pug templates

- Individual project detail pages

- Custom 404 page handling

- Global error handling middleware

- Static asset serving (CSS, images, JS)

- Organized Express routing structure

## 🛠 Tech Stack:

- Node.js

- Express

- Pug (Template Engine)

- HTML5 / CSS3

- JavaScript

## 📂 Project Structure:

```
.
├── app.js
├── data.json
├── package.json
├── public/
│   └── (static assets)
├── views/
│   ├── index.pug
│   ├── about.pug
│   ├── project.pug
│   ├── error.pug
│   └── page-not-found.pug
```

## ⚙️ Installation & Setup

## 1. Clone the Repository

```
git clone https://github.com/cgdouthitt/Profile.git
cd Profile
```

## 2. Install Dependencies

```
npm install
```

## 3. Start the Server

```
node app.js
```

The app will run on:

```
http://localhost:3000
```

## 🧠 How It Works

- Project data is stored in data.json.

- The home route (/) passes the projects array into the Pug template.

- Dynamic routing (/projects/:id) renders individual project pages.

- Middleware handles:
  - JSON parsing

  - URL encoding

  - Static file serving

- Custom error handlers manage:
  - 404 errors

  - Global server errors
