import './formInput.css'
import PropTypes from 'prop-types';

function FormInput(props) {
  const {label, onChange,id, error, ...inputProps}=props
  return (
    <div className='formInput'>
        <label>{label}</label> 
        <input {...inputProps} onChange={onChange} id={id}/>
        <span>{error}</span>
    </div>
  )
} 
    


FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,

};
export default FormInput