import './Button.css'

const Button = ({className = '', content = '',onClick = () => {} } ) => {
    return (
        <button 
            className={`DS_button ${className}`} onClick={onClick}>  {content} </button>
    )
    }

export default Button


// هيأت الوسطاء مشان اذا مابدي ابعت شي واحد منن 
// 1 الوسطاء كلاس بيحتوي ع تنسيق للزر للخلفية والبادينغ 
//2  تاني وسيط منبعت فيه محتوى الزر
// 3 تالت وسيط مشان اذا كان بدنا بس ننقر عالزر  يتنفذ تابع ف منمرر التابع ك وسيط
// مثال
{/* <Button 
        className="DS_styleTest"
        content ="Login"
        onClick={اسم التابع اللي بدنا نمررو واذا مابدنا نعمل الزر يعمل شي ما تمررو هاد الوسيط}
        /> 
    */}