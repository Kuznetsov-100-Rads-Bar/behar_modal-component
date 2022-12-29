# Modal component for ReactJS

This module has been created for project 14 Pass a jQuery library to React
This is a simple modal component functioning at external module

## Installation

```sh
npm i behar_modal-component --save
```

## Usage

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
            /* a function that is called when the modal is closed. In this case, the onClose function updates the value of showModal to false
            by calling the setShowModal function with an argument of false.*/
            onClose={(event) => setShowModal(false)}
        />
    );
}

export default myComponent;
```
