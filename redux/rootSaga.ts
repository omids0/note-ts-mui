import {all} from 'redux-saga/effects'
import {rootSaga as noteSaga} from './sagas'

function* rootSaga() {
    yield all([noteSaga()])
}

export default rootSaga