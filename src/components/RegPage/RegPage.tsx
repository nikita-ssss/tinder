// import { useState } from "react";
import { Input, Select } from "antd";

export default function RegPage() {
    // const [errors, setErrors] = useState({
    //     telegram_id: false,
    //     username: false,
    //     birthDate: false,
    // });

    // const validateData = (field: number, e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (field === 1 && e.target.value === "") {
    //         setErrors((prevValue) => ({ ...prevValue, telegram_id: true }));
    //     }
    //     if (field === 2 && e.target.value === "") {
    //         setErrors((prevValue) => ({ ...prevValue, username: true }));
    //     }
    //     if (field === 3 && e.target.value === "") {
    //         setErrors((prevValue) => ({ ...prevValue, birthDate: true }));
    //     }
    // };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="reg-page">
            <div className="reg-page__wrapper">
                <form className="reg-page__form">
                    <div className="reg-page__field">
                        <label htmlFor="telegram_id" className="reg-page__label">
                            Telegram ID
                        </label>
                        <Input className="reg-page__input" placeholder="Telegram ID" disabled />
                    </div>
                    <div className="reg-page__field">
                        <label htmlFor="username" className="reg-page__label">
                            Имя
                        </label>
                        <Input status="error" className="reg-page__input" placeholder="Имя" />
                    </div>
                    <div className="reg-page__field">
                        <label htmlFor="birthDate" className="reg-page__label">
                            Дата рождения
                        </label>
                        <Input className="reg-page__input" placeholder="Дата рождения" />
                    </div>
                    <div className="reg-page__field">
                        <label htmlFor="birthDate" className="reg-page__label">
                            Пол
                        </label>
                        <Select
                            className="reg-page__input"
                            defaultValue="Ваш пол"
                            style={{ width: "100%", height: "100%", borderRadius: "12px", color: "#000" }}
                            onChange={handleChange}
                            options={[
                                { value: "man", label: "Мужской" },
                                { value: "woman", label: "Женский" },
                            ]}
                        />
                    </div>

                    <button type="submit" className="reg-page__button">
                        Дальше
                    </button>
                </form>
            </div>
        </div>
    );
}
