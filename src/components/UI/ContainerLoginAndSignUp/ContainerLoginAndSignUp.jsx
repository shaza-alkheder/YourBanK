import "./ContainerLoginAndSignUp.css"

const ContainerLoginAndSignUp = ({children}) => {
    return (
        <div className="O-A-continerLogInAndSignUp">
            <img src="/assets/img/bgImage/bgLoginSignup.webp" className="O-A-bgImageLoginSignUp" alt="" />
            <img src="/public/assets/img/bgImage/bgCornerLoginSignUp.webp" className="O-A-bgCornerImageLoginSignUp" alt="" />
            {children}
        </div>
    )
}

export default ContainerLoginAndSignUp