# GroupHive

GroupHive is a real-time chat application built using React, Material-UI (MUI), and Firebase. It provides users with the ability to log in, log out, create new chat rooms, and engage in live conversations within those rooms. 

## Features

- User Authentication: Users can securely log in and log out of the application using their credentials.
- Real-time Chat: Users can create new chat rooms or join existing ones to engage in real-time conversations with other users.
- Firebase Backend: The app uses Firebase as its backend, enabling seamless real-time data synchronization and storage.

## Live Demo

A live demo of GroupHive can be accessed at [https://grouphive-8d8f9.web.app/](https://grouphive-8d8f9.web.app/).

## Installation

To run GroupHive locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/group-hive.git`
2. Navigate to the project directory: `cd group-hive`
3. Install the dependencies: `npm install`
4. Create a Firebase project and obtain the Firebase configuration credentials.
5. Create a `.env` file in the project root and add the Firebase configuration as follows:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

6. Run the development server: `npm start`
7. Open your browser and navigate to `http://localhost:3000/` to access the app.

## Technologies Used

- React: Frontend library for building user interfaces.
- Material-UI (MUI): A popular UI framework for creating sleek and responsive designs.
- Firebase: A comprehensive backend-as-a-service platform for real-time data synchronization and storage.

## Contributions

Contributions to GroupHive are welcome! If you find any issues or want to enhance the app with new features, feel free to create a pull request.

## Acknowledgments

- Special thanks to the developers of React, MUI, and Firebase for providing excellent tools for building web applications.
