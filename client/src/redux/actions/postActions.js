import axios from "axios"

export const gaetPostsAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get("http://localhost:8000/getPosts");
        dispatch({
            type: "GET_POSTS", payload: data
        })
    } catch (error) {
        console.log("error-->", error);
        alert(error)
    }
}

export const createPostAction = (postData) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8000/createPost", postData);
        console.log("createdpost data-->", postData);
        dispatch({
            type: "CREATE_POST", payload: data
        })

    } catch (error) {
        console.log("error-->", error);
        alert(error)
    }
}

export const updatedPostAction = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`http://localhost:8000/updatePost/${id}`, updatedPost);
        console.log("update data-->", data);
        dispatch({
            type: "UPDATE_POST", payload: data
        })
    } catch (error) {
        console.log("error-->", error);
        alert(error)
    }
}

export const deletePostAction = (id) => async (dispatch) => {
    console.log("deletepost action helen id", id);

    try {
        await axios.delete(`http://localhost:8000/deletePost/${id}`);
        dispatch({
            type: "DELETE_POST", payload: id
        })
    } catch (error) {
        console.log("error-->", error);
        alert(error)
    }
}