# ChatBox
### A Web-Based Chatting Application

ChatBox is a Web-Based Chat-Application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, and chat with other users in real time.

## See Live

```bash
https://chatbox-xnii.onrender.com/
```





![image](https://github.com/user-attachments/assets/312913c7-bc93-42bd-abe2-194310e3d91c)

![image](https://github.com/user-attachments/assets/cca3fba1-85b7-44b6-bcd2-85520891050c)

![image](https://github.com/user-attachments/assets/4821b9ed-e079-4482-8dd0-8e70294c31e5)

![image](https://github.com/user-attachments/assets/2c8c9a15-59bb-48fc-9a18-dd5e6d25626d)





## ✨  Features

• User authentication: Users can register and log in securely.

• Real-time messaging: Users can chat with each other in real-time.

• Responsive design: The app is responsive and works well on both desktop and mobile devices.

• Live notifications for new incoming messages.

• Online user facility indicating which users are currently online.


## 🛠️ Technogies Used

• MongoDB: NoSQL database for storing user data and chat messages.

• Express.js: Web application framework for Node.js used to build the backend server.

• React.js: JavaScript library for building user interfaces.

• Node.js: JavaScript runtime environment for running server-side code.

• Socket.io: Real-time engine for WebSockets to enable real-time communication between clients and server.

• Tailwind/CSS: Markup and styling for the front end.


## 🚀 Installation

1.Clone the repository:

```bash
https://github.com/AnoushkaSamanta/ChatBox.git
```

2.Navigate to the project directory:

```bash
cd ChatBox
```

3.Install dependencies for both frontend and backend

 For frontend dependencies Go to the frontend folder Package.json file and see all dependencies for installation
 ```bash
 npm i 
 npm i all_dependencies_name
```

 For Backend Dependencies Go to the Chat-Application folder & refer directly available package.json file:
 ```bash
 npm i 
 npm i all_dependencies_name
```

4.Set up environment variables:

 Create a .env file in the Chat Application folder directory.
 
Define the following variables in the .env file:
```bash
PORT = 5000
MONGODB_URI = <your_mongodb_uri>
JWT_SECRET = <your_jwt_secret>
```

5.Navigate to frontend folder.
 ```bash
cd frontend
npm run dev
```
6.Navigate to backend folder.
```bash
cd backend
npx nodemon server.js
```

## 💻 Usage

• Register for an account or log in if you already have one.

• Once logged in, you'll be redirected to the chat interface.

• Start messaging with other users who are online in real-time.

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features you'd like to see added.
 
