import '../assets/Label.input.css';
const LabelInput = ( {handleChange, type="text", children}) => {
    return (
        <label >
            <span>
                {children}
            </span>
            <input type={type} onChange={handleChange} />
        </label>
    );
};
export default LabelInput;