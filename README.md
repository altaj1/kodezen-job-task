# Color List Task Application

This application is a task to create a Color List component with sortable functionality using React, `react-sortable-hoc`, and `array-move`. The UI is designed based on the given Figma design and follows the BEM naming convention.

## Features

- A static array of colors that are sortable within themselves.
- A 3-tab interface where the **Color** tab is always selected.
- Hovering over a color item shows a 3-dot menu.
  - **Edit**: Allows editing of the color title in a drawer that slides in from the right.
  - **Duplicate**: Creates a duplicate of the color item with the title appended with "Copy".
  - **Delete**: Removes the selected color item.
- Clicking outside the 3-dot menu closes the menu.
- An **Add** button that adds a new color item to the list with default properties.
- Follows the BEM (Block-Element-Modifier) CSS naming convention.
- Pixel-perfect design as per the provided Figma.

## Technologies Used

- **React**: For building the user interface.
- **react-sortable-hoc**: For drag-and-drop sorting functionality.
- **array-move**: For handling item position changes in the array after sorting.
- **CSS (BEM)**: For styling the components without using any CSS libraries (e.g., Tailwind, Bootstrap).

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

