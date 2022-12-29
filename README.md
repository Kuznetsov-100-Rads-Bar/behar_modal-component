# Modal component for ReactJS

This module has been created for project 14 Pass a jQuery library to React
This is a simple modal component functioning at external module

## Installation

```sh
npm i behar_modal-component --save
```

## Usage

/*This code is a JavaScript module written in the syntax of the ECMAScript (ES) language and uses the JSX syntax extension.
 which means it can be imported and used by other parts of the application.*/

```js
import React, { useState } from 'react';
import { Modal } from 'behar_modal-component';

function myComponent() {
    const [showModal, setShowModal] = useState(false);
    return (
        <Modal
            visible={showModal}
            title={"My modal header title"}
            content={"My modal body content"}
            onClose={(event) => setShowModal(false)}
        />
    );
}

export default myComponent;
```
/*
The first line import React, { useState } from 'react'; imports the React module and a hook called useState from the react library. The React library is a popular JavaScript library for building user interfaces, and the useState hook is a way to add state to functional components in React.

The second line import { Modal } from 'behar_modal-component'; imports the Modal component from a library called behar_modal-component. This Modal component is a pre-built component that can be used to display a modal window in a user interface.

The myComponent function is a functional component in React. It uses the useState hook to define a piece of state called showModal with an initial value of false. The hook also provides a function called setShowModal that can be used to update the value of showModal.

Inside the myComponent function, a JSX element is returned that represents a Modal component. This Modal component has several properties, or "props":

    visible: a boolean value that determines whether the modal is visible or not. In this case, the value of visible is controlled by the value of the showModal state.
    title: a string value that specifies the title of the modal.
    content: a string value that specifies the content of the modal.
    onClose: a function that is called when the modal is closed. In this case, the onClose function updates the value of showModal to false by calling the setShowModal function with an argument of false.
*/
