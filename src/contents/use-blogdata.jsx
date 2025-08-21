import { useState, createContext, useEffect, useContext} from "react";

// Create a context to hold the editing blog data
// This context will be used to share the state across components
const EditContext = createContext()

export function EditContextProvider({ children }) {
    const [editingBlogData, setEditingBlogData] = useState(null);
    const [commentData, setCommentData]= useState(null);
    // useContext:used to access the context in child components
    // useState: used to manage the state of the editing blog data
    // useCallback: used to memoize the function that updates the editing blog data
    // useEffect: used to fetch the blog data when the component mounts
    return (
        // .provider is used to pass down the state and function to children components
        <EditContext.Provider value={
            {
                editingBlogData,
                setEditingBlogData,

                commentData,
                setCommentData
            }
        }>
            {children}
        </EditContext.Provider>
    )

}

export function useBlogData() {
    // const [personalState, setPersonalState] = useState(0);
    const values = useContext(EditContext);
    // costum hook to access the EditContext values
    // This hook can be used in any component to access the editing blog data and the function
    // we can use hook multiple times in different components
    // to update the editing blog data
    return {
        EditiBlogData:values.editingBlogData,
        setEditingBlogData: values.setEditingBlogData,};
}

export default EditContext;