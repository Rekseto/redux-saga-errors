import {takeEvery} from "redux-saga/effects";
import {toast} from "react-toastify";

function createErrorSaga(toastPosition = toast.POSITION.TOP_RIGHT) {
  return function* errorSaga() {
    yield takeEvery(action => action.type.endsWith("FAILED"), function*(action) {
      yield toast.error(action.error.message, {
        position: toastPosition
      });
    });
  };
}
export default createErrorSaga;
