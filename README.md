# Noteballs - Simple Real-Time Notes Application with VueJS and Bulma

Developed with VueJS and Bulma CSS Framework for creating and posting notes. Before you begin, be sure to follow the instructions below to properly set up your project.


## Functionalities
- **Sign Up/Login:** Ability to create new users and log in. If you prefer to log in with an existing user in the database (Login: hercilioluzs@gmail.com, Password: 161091).

- **Notes Creation:** Add your notes easily.

- **Notes List:** View all your notes in an organized chronological list, with the latest posted always at the top, taking into account even milliseconds to avoid conflicts of notes posted at the same hour, minutes, and seconds.

- **Firebase Integration:** The notes are stored in real-time on Firebase for a seamless user experience. For example, if there are two users viewing the list of notes and one of them adds a note, it will appear in real-time without the need for page refresh.

## Main Dependencies

- **@vueuse/core**: Vue library for reactive functions and composable functions, making development more efficient.

- **bulma**: Lightweight CSS framework based on Flexbox, used to style the application in a pleasant and responsive way.

- **firebase**: Library that provides integration with Firebase, allowing real-time data storage and authentication.

- **pinia**: State manager for Vue 3, helping to efficiently control global state.

- **vue**: Vue core library, used to build reactive user interfaces.

- **vue-router**: Route manager for Vue 3, facilitating navigation between pages.


## Test on Vercel

To test how the application works on Vercel, access the following link: [Noteballs on Vercel](https://noteballs-flax.vercel.app/#/auth)
