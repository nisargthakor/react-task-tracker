import PropTypes from 'prop-types'


const Button = ({color,text,onClick}) => {
  return <button onClick={onClick} style={{background:color}} className="btn">{text}</button>
}

Button.defaultProps={
  color:'stillBlue',
  text:'ADD'
}

Button.propTypes={
 text:PropTypes.string
}
export default Button