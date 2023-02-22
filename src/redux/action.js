import { SHOW_MODAL_WALLET } from './type';

const showModalWallet = (state) => {
    return {
        type: SHOW_MODAL_WALLET,
        value: state,
    };
};

const actions = {
    showModalWallet,
};

export default actions;
