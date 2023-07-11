import "./Header.css";
export default function Header(){
    return(
        <header>
            <div className="logo">
                <span>Task Mangement</span>
            </div>
            <div className="theme-container">
                <span>โหมดกลางคืน</span>
                <span className="icon">สลับ</span>
            </div>
        </header>
    )
}