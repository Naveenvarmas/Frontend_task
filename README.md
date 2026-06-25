# Community Feed App

A mini community feed application built with **React**, **React Router**, and **Zustand**. This project was developed as part of the **Pynker Frontend Engineering Task**.

## Features

* Community Feed displaying all posts
* View post details with comments
* Like a post with instant UI updates using Zustand
* User Profile page showing user information and all their posts
* Client-side routing using React Router
* Local JSON data (no backend required)

## Tech Stack

* React
* React Router DOM
* Zustand
* Vite
* CSS
* Local JSON

## Project Structure

```
src/
├── components/
│   └── PostCard.jsx
├── pages/
│   ├── Feed.jsx
│   ├── PostDetail.jsx
│   └── UserProfile.jsx
├── store/
│   └── postStore.js
├── data/
│   └── data.json
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd community-feed
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

## Application Pages

### Feed Page

* Displays all community posts.
* Shows author name, post content, like count, and comment count.
* Clicking a post opens the Post Detail page.
* Clicking the author's name opens the User Profile page.

### Post Detail Page

* Displays the selected post and its comments.
* Supports liking a post.
* Like count is managed globally using Zustand and persists while navigating.

### User Profile Page

* Displays user information.
* Shows all posts created by the selected user.

## State Management

Zustand is used to manage shared application state. The posts are stored globally, allowing the updated like count to remain synchronized across the Feed and Post Detail pages.

## Author

Naveen Varma
