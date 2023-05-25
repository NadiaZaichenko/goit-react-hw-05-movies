import PropTypes from 'prop-types';
import { useFormik } from "formik";
import { Input, Form, Button } from "./SearchFrom.styled";

const SearchForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            value: '',
        },
        onSubmit: values => {
            onSubmit(values.value);
            localStorage.setItem()
            // formik.resetForm();
          },
      })

      const { handleSubmit, handleChange, values } = formik;

      return (
        <Form onSubmit={handleSubmit}>
            <Input 
            type='text'
            name='value'
            onChange={handleChange}
            value={values.value}
            placeholder="Search movies"/>
            <Button type='submit'>Find</Button>
        </Form>
      )
};
SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};


export default SearchForm;