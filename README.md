# Music Player Web Application

This is a full-stack web application that allows users to upload, manage, and stream music online. It supports various functionalities, including secure user authentication, music playback with advanced controls, and music management features such as uploading and deleting tracks.

## Features

### 1. **Music Playback**
   - **Play, Pause, Next, Previous**: Users can play, pause, skip to the next song, or return to the previous one.
   - **Audio Seek**: Users can control playback progress with a seek bar.
   - **Volume Control**: Adjustable volume via an interactive slider.
   - **Repeat and Shuffle**: Includes options to shuffle the playlist or repeat a song.
   - **Automatic Play Next**: Automatically plays the next song when the current one ends.

### 2. **Music Management**
   - **Upload Music**: Authenticated users can upload new music tracks to the platform.
     - **Metadata**: Along with the audio file, users can provide information such as song title, artist name, and cover image.
   - **Delete Music**: Users can delete tracks they have uploaded from the application.
   - **Music Storage**: Tracks are stored securely, and their data is persisted for future access.

### 3. **Playlist and Favorites**
   - **Now Playing**: Displays the current playing song with its title, artist, and album art.
   - **Favorites**: Users can mark songs as favorites and quickly access them from a dedicated section.
   - **Playlists**: Allows users to create, edit, and delete playlists of their favorite songs.

### 4. **User Authentication**
   - **Secure Sign-Up and Login**: Users can create accounts and log in using a secure authentication system.
   - **Password Encryption**: All passwords are securely hashed using modern encryption standards.
   - **Token-Based Authentication**: Users receive a token upon login, allowing them to stay authenticated across sessions.
   - **Protected Routes**: Certain functionalities, such as uploading or deleting music, are restricted to authenticated users.

### 5. **User Profiles**
   - **User Dashboard**: A personalized dashboard for users to manage their music uploads, playlists, and favorite tracks.
   - **Profile Management**: Users can update their profile information and change their password.

### 6. **Responsive Design**
   - **Mobile and Desktop Support**: The app is designed to work seamlessly across various screen sizes, from desktops to mobile devices.
   - **Cross-Browser Compatibility**: Supports modern web browsers to ensure accessibility for all users.

### 7. **Error Handling and Feedback**
   - **Friendly UI Feedback**: Users receive visual feedback for actions like play, pause, upload, and delete.
   - **Error Handling**: Comprehensive error handling for failed music uploads, playback errors, and authentication failures.
   
### 8. **Search and Filters**
   - **Search Functionality**: Users can search for songs by title, artist, or other metadata.
   - **Filtering**: Ability to filter songs based on criteria such as popularity, upload date, or user favorites.

## Technology Stack

- **Frontend**: Built with React.js, the app provides an interactive and smooth user experience for playing and managing music.
- **Backend**: Node.js and Express are used to handle API requests, user authentication, and database interactions.
- **Database**: MongoDB is used to store user and music metadata, including track details, user profiles, and authentication tokens.
- **File Storage**: Music files and images are securely stored, either in a cloud storage solution or on the server, depending on the configuration.
- **Authentication**: Token-based authentication (JWT) ensures secure access to the platform, with bcrypt used for password hashing.

## Installation & Setup

1. **Clone the repository**: Use the following command to clone the project to your local machine.
   
2. **Install Dependencies**: Run the package manager to install all necessary dependencies for both the frontend and backend.

3. **Environment Variables**: Set up environment variables to store sensitive information such as database URIs, JWT secrets, and cloud storage credentials.

4. **Run the Application**: The application can be run in a development environment using the provided script.

5. **Database Setup**: Ensure MongoDB is properly set up and connected. Seed initial data if necessary.

## Future Enhancements

- **Song Recommendations**: Implement a recommendation engine based on user preferences and playback history.
- **Social Sharing**: Allow users to share their playlists or favorite tracks on social media.
- **Offline Listening**: Enable users to download songs for offline listening.
- **Collaborative Playlists**: Support for shared playlists where multiple users can contribute.

## Contribution

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request for review.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as needed.
