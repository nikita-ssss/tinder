export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__list">
                    <a href="#" className="navbar__item navbar__item_active">
                        <img
                            src="/images/icons/navbar_home.svg"
                            alt=""
                            className="navbar__icon"
                        />
                    </a>
                    <a href="#" className="navbar__item">
                        <img
                            src="/images/icons/navbar_heart.svg"
                            alt=""
                            className="navbar__icon"
                        />
                    </a>
                    <a href="#" className="navbar__item">
                        <div className="navbar__message-new">123</div>
                        <img
                            src="/images/icons/navbar_message.svg"
                            alt=""
                            className="navbar__icon"
                        />
                    </a>
                    <a href="#" className="navbar__item navbar__item_profile">
                        <img
                            src="/images/icons/navbar_profile.png"
                            alt=""
                            className="navbar__icon"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
