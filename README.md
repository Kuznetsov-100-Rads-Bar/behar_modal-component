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
            onClose={(event) => setShowModal(false)}
        />
    );
}

export default myComponent;
```
