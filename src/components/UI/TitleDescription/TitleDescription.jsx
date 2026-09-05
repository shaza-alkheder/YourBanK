import './TitleDescription.css'

function TitleDescription({ Welcome,className = "", titleParts = [], description }) {
    return (
        <div className={`DS_TitleDescription ${className}`}>
            {Welcome ?<p className="DS_Welcome" > {Welcome} </p>  : "" }
            <h2 className="DS_title">
                {titleParts.map((part, index) => (
                    <span key={index} className={part.className || ""}>
                        {part.text}{" "} 
                    </span>
                ))}
            </h2>

            {description ?<p className="DS_description" > {description} </p>  : "" }
    
        </div>
    );
}

export default TitleDescription;


{/*                                                                                          :  الكمبوننت بيقبل 3 وسطاء 
                اول واحد هو كلاس للديف الاب هو منعطيه العرض مشان نحدد الشكل اللي بدنا ياه مشان تنسيق العنوان والوصف
تاني وسيط هو اوبجكت بيحتوي على كلاس مشان حدد لون الجزء اذا لونو اخضرليموني ببعت كلاس اللون الموجود بملف التنسيق 
                                                                            اذا لونو ابيض ف مافي داعي بيتنسق تلقائيا
                                                                        العنصر التاني هو محتوي هاد الجزء من العنوان 
                                                                                            تالت وسيط هو محتوى الوصف 
هاد مثال عن استدعاء الكمبوننت

    <TitleDescription 
    className="DS_style"
    titleParts={[    
        {
            text: "Welcome to YourBank Empowering Your",
            className: ""
        },
        {
            text: "Financial Journey",
            className: "DS_ColorLimeGreen"
        }
    ]}
    description="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
/> 
*/}