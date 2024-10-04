
const Button = ({text, link}) => {
    try {
        return (
            <a href ={link}>{text}</a>
          )
        
    } catch (error) {
        console.log(error)
    }
  
}

export default Button