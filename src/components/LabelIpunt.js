import '../assets/Label.input.css';
const LabelInput = ( {handleChange, type="text", children}) => {
    return (
        <label >
            {children}
            <input type={type} onChange={handleChange} />
        </label>
    );
};
export default LabelInput;