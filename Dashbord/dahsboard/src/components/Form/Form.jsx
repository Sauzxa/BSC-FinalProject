import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './Form.css'
function Form ({handleClick2}) {
  return (
    <ToastContainer className="position-static">
      <Toast>
        <Toast.Header>
          <img  src="holder.js/20x20?text=%20" onClick={handleClick2} className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted"></small>
        </Toast.Header>
        <Toast.Body>
            <div className='imput'>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' placeholder='username' />
            </div>
            <div className='imput'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password' name='password' />
            </div>
        </Toast.Body>
      </Toast>
      
    </ToastContainer>
  );
}

export default Form;