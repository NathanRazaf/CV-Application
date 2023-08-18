import '../styles/SubmitButton.css';
function SubmitButton({onSubmit}) {
  return (
    <button className="submit" onClick={onSubmit}>Submit</button>
  )
}

export default SubmitButton;