import './Button.css'

const Button = ({className = '', content = '',onClick = () => {} } ) => {
    return (
        <button 
            className={`DS_button ${className}`} onClick={onClick}>  {content} </button>
    )
    }

export default Button


{/* Example
    <Button 
        className="DS_styleTest"
        content ="Login"
        onClick={اسم التابع اللي بدنا نمررو واذا مابدنا نعمل الزر يعمل شي ما تمررو هاد الوسيط}
        /> 
    */}