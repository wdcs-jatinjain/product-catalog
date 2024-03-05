import * as Yup from "yup";
const AddRoleValidationSchema = Yup.object().shape({

  name: Yup.string()
    .min(4, "Name should be at least 4 characters long.")
    .matches(/^[a-zA-Z\s]*$/, "Numbers are not allowed in the name.")
    .required("Role Name is required."),
 
});
export default AddRoleValidationSchema;
