import { SHOW_MODAL_WALLET } from './type';

const defaultProps = {
    showModalWallet: false,
};

const appReducer = (state = defaultProps, action) => {
    switch (action.type) {
        case SHOW_MODAL_WALLET:
            // console.log(action.value);

            return {
                ...state,
                showModalWallet: action.value,
            };

        default:
            return state;
    }
};

export default appReducer;
