# Mark Prodehl 3D Portfolio

## Link To The Deployed App

https://markprodehl-portfolio.web.app/

## Description
This is my personal 3D portfolio built using React, ThreeJS, React-three-fiber, Framer Motion, Tailwind, and various other libraries. The portfolio demonstrates my ability to design modern 3D web applications and showcases an overview my experience and skills. It also has a built in form for visitors to get in touch with me via email.

## Features

This project is built using the following technologies:

1. **React:** The main framework used for building the UI of the portfolio.
2. **Vite:** Used as the build tool and development server.
3. **TailwindCSS:** Used for styling the components in the portfolio.
4. **ThreeJS:** JavaScript library that allows for the creation of 3D graphics in the browser.
5. **Framer Motion:** Used to add animations to the portfolio to enhance user experience.
6. **React-Three-Fiber & Drei:** These are used to include three.js in the React application for 3D elements.
7. **React Tilt:** Provides a 'tilt' effect to the UI elements.
8. **EmailJS:** Used to enable the functionality of sending emails directly from the contact form in the portfolio.
9. **React Responsive:** Used for making the portfolio responsive across different devices.
10. **React Vertical Timeline Component:** Used for displaying the timeline in a vertical format.

And several other utility and helper libraries.

## Installation

### Prerequisites
- Node.js installed
- npm (Node Package Manager) installed
- We'll need to install `legacy-peer-deps` to support some older versions of react. Instructions on how to do this can be found below

### Steps
1. Clone the repository to your local machine. You can use the following command for this:
    ```
    git clone git@github.com:markprodehl/markprodehl-portfolio.git
    ```
2. Navigate to the project folder:
    ```
    cd markprodehl-portfolio
    ```
3. Install the dependencies:
    ```
    npm install
    ```
    Or if you run into any issues
    ```
    `npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`
    ```
    If you need to install other dependencies run
    ```
    npm install --legacy-peer-deps
    ```
    
4. Create a `.env` file in the root directory of your project. Inside this file, you need to set up the EmailJS configuration:
    
    ```
    VITE_APP_EMAILJS_SERVICE_ID=your-service-id
    VITE_APP_EMAILJS_TEMPLATE_ID=your-template-id
    VITE_APP_EMAILJS_PUBLIC_KEY=your-public-key
    ```
5. Once your environment variables are set up, you can start the project using:
    ```
    npm start
    ```

## Usage
The website will open in your default browser and you can navigate through the different sections. Visitors can fill in the contact form to send an email directly from the website.

## Contribution
Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Email: markprodehl@gmail.com  
LinkedIn: [Mark's LinkedIn](https://www.linkedin.com/in/mark-software-engineer/)
