const getFile = (e) => {
    if (e.target.files && e.target.files[0]) {
        return e.target.files[0];
    }
};

export default getFile;