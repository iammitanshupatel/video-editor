# Video Editing Interface with Trimming Functionality

## Overview

This project is a responsive video editing interface that allows users to load a video, trim it by adjusting start and end points, and preview the changes. The UI includes video controls, a trimming timeline, and is fully responsive across different screen sizes (desktop, tablet, mobile).

### Features:
- **Responsive Video Player**: Scales based on screen size, maintaining a 16:9 aspect ratio.
- **Video Trimming**: Users can set trim points using a timeline slider, with real-time updates to the video preview.
- **State Management**: Uses Redux for managing global state, and Context API for managing local UI state.
- **Clean UI**: Implemented with Tailwind CSS for a responsive and modern design.
  
## Technologies Used

- **React**: For building the user interface.
- **Remotion**: For handling video rendering and playback controls.
- **Redux Toolkit**: For global state management, including handling video source and trimming points.
- **TypeScript**: Provides strong typing across components and state.
- **Tailwind CSS**: For responsive styling and layout.
- **Context API**: Manages local UI states (e.g., visibility of trimming controls).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository**:

   `git clone https://github.com/iammitanshupatel/video-editor.git`

2. **Navigate to the Project Directory**:

    `cd video-editing-interface`

3. **Install Dependencies**:

    Using npm:
    `npm install`
    or using yarn:
    `yarn install`

4. **Run the Development Server**:

    Using npm:
    `npm start`
    or using yarn:
    `yarn start`
    The application will be available at http://localhost:3000.
    