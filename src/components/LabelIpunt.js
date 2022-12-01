import '../assets/Label.input.css';
const LabelInput = ( {type="text", children}) => {
    return (
        <label >
            {children}
            <input type={type} />
        </label>
    );
};
export default LabelInput;