import {configureStore} from '@reduxjs/toolkit';
import formDataSlice from './dataUploader/formDataSlice';

export default configureStore({
    reducer: {
        dataUploader: formDataSlice,
    },
})
