# One to rule them all

## Introduction

Dealing with errors in our React apps seems pretty tedious and tricky, to help with that
i have come with idea of utility to create easily and customizable saga to catch all of failures in our app,
it comes really handy to deal with HTTP requests.

### Action structure

```javascript
export const resourceFetchFailed = ({httpStatus, message, requestPayload}) => ({
  type: actionTypes.RESOURCE_FETCH_FAILED,
  error: {
    httpStatus,
    message
  }
});
```

Action above has few properties that tells us about what should we do with that situation.

error - contains all informations about error like message, httpStatus etc.

### What will happen?

For given action, our utility will show a toast with error message.

### Usage

store.js

```javascript
import {createErrorSaga} from "redux-saga-errors";

function* rootSaga() {
  yield createErrorSaga();
  yield all([...otherSagas]);
}
```

App.js

```javascript
import * as React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        // Other components land here
      </React.Fragment>
    );
  }
}

export default App;
```

### Requirements

- Redux-Saga
- React-Toastify

### Contributions
