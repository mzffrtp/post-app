
const modalReducer = (state = { modal: false }, action) => {
    console.log("state-->", state);

    switch (action.type) {
        case "MODAL":
            return {
                modal: action.payload,
            }

        default:
            return state
    }
}

export default modalReducer