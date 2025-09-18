# Shoes Ecommerce App

<div align="center">

![thumbnail](/public/app-thumbnail.png)

</div>

<p align="center">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" alt="TailwindCSS"/>
  <img src="https://img.shields.io/badge/-Stripe-008CDD?style=flat&logo=stripe&logoColor=white" alt="Stripe"/>
  <img src="https://img.shields.io/badge/Better--Auth-secure-green" alt="Better Auth"/>
  <img src="https://img.shields.io/badge/Zustand-state%20management-blue" alt="Zustand"/>
  <img src="https://img.shields.io/badge/Drizzle-ORM-orange" alt="Drizzle"/>

</p>

## 📋 <a name="table">Table of Contents</a>

1. 👋 [Welcome](#welcome)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🌐 [Web version](#web)
5. 🤸 [Quick Start](#quick-start)

## <a name="welcome"> 👋 Welcome </a>

Thanks for checking out this ecommerce website. This app built
with [Next.js](https://nextjs.org/) was from one of JavaScript Mastery Youtube
channel [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) (Shout out to
Adrian and JSMastery team😃 ) highly recommend if you want to upgrade your skills as a full stack developer. Check it out 😮 and let me know what you think.

## <a name="tech-stack">⚙️ Tech Stack </a>

- [Next.js](https://nextjs.org/)
- [Better-Auth](https://www.better-auth.com/)
- [Drizzle](https://orm.drizzle.team/)
- [Neon](https://neon.com/)
- [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
- [Stripe](https://stripe.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## <a name="features">🔋 Features</a>

👉 **Google OAuth Authentication**: allowing users to securely sign in their google accounts

👉 **Github OAuth Authentication**: allowing users to securely sign in their Github accounts

👉 **Local account authentication**: allowing users to securely create account and signin

👉 **Cart and Favourite**: allows users to add to cart or to their favorites any shoe avaliable

👉 **Filter functionality**: Filter shoes by different categories

👉 **Checkout**: proceed to checkout with stripe payment

## <a name="web">🌐 WebSite URL </a>

- 🔗 [Shoes](https://shoe-ecommerce-app-chi.vercel.app)

## <a name="quick-start"> 🤸 Quick Start </a>

Follow this steps to setup the project locally on your machine.

**Prerequsites**

Make sure you have the following installed on your machine

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/download)
- [Next.js](https://nextjs.org/docs)

**Cloning the Repository**

```bash
git clone https://github.com/Miki0035/shoe-ecommerce-app

cd shoe-ecommerce-app
```

**Installing dependencies**

Run the following command to install all dependencies

```bash
npm install
```

**Environment variables**

In the root of your project

    - create '.env.local' file and inside and the following variables

    - DATABASE_URL=your_neon_db_url/any_database_connection_string

    - NEXT_PUBLIC_APP_URL=http://localhost:3000

    -BETTER_AUTH_SECRET=provided_from_better-auth
    -NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000/api/auth
    -GITHUB_CLIENT_ID= github client id
    -GITHUB_CLIENT_SECRET= github secret
    -GOOGLE_CLIENT_ID=google_client_id
    -GOOGLE_CLIENT_SECRET=google_client_secret
    -NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=stripe_publishable_key
    -STRIPE_SECRET_KEY=stripe_secret_key

**Running the Project**

Finally run

```bash
npm run dev
```

In your browser go to 'localhost:3000' 👍
