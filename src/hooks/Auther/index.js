import { useDispatch, useSelector } from 'react-redux';
import { addAuther, deleteAuther } from '../../store/auther';

function useAutherData() {
    const dispatch = useDispatch();
    const autherData = useSelector((state) => state.auther?.autherData);
    const addAutherAction = (params) => dispatch(addAuther(params));
    const deleteAutherAction = (params) => dispatch(deleteAuther(params));

    return {
        autherData,
        addAutherAction,
        deleteAutherAction
    }
}

export default useAutherData