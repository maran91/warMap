type Error = {
    message: string;
    errors: { [key: string]: string[] };
};

const handleError = (error: Error) => {
    let errors: { [key: string]: string[] } = {};
    if (error) {
        if (error.message && !error.errors) {
            errors["general"] = [error.message];
        } else {
            errors = error.errors;
        }
    }
    throw errors;
};
export default handleError;
