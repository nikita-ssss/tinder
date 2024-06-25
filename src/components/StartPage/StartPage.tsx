import { useState } from "react";
// import { authCheck } from "../../service/authCheck";
import { createUser as create } from "../../service/createUser";

export default function StartPage() {
    const [pageCounter, setPageCounter] = useState(0);
    // const [newUser, setNewUser] = useState(false);
    const [createUser, setCreateUser] = useState(false);

    const onChangePageCounter = () => {
        setPageCounter((prevPageCounter) => prevPageCounter + 1);
        // authStatus(pageCounter);
    };

    // const authStatus = async (id: number) => {
    //     const userStatus = await authCheck().checkAuth(id);
    //     setNewUser(userStatus);
    // };

    const createUserMethod = async (telegramId: number, username: string) => {
        const user = await create().createRandomUser({ telegramId, username });
        setCreateUser(user);
        console.log(user);
    };

    const data = [
        {
            numPage: 1,
            img: "/images/illustrations/startPage/start-page-1.png",
            title: "Lorem ipsum dolor sit amet",
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicingelit. Veritatis sapiente iure, debitis",
        },
        {
            numPage: 2,
            img: "/images/illustrations/startPage/start-page-1.png",
            title: "Lorem ipsum dolor sit amet 2",
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicingelit. Veritatis sapiente iure, debitis 2",
        },
        {
            numPage: 3,
            img: "/images/illustrations/startPage/start-page-1.png",
            title: "Lorem ipsum dolor sit amet 3",
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicingelit. Veritatis sapiente iure, debitis 3",
        },
    ];

    return (
        <div className="start-page">
            <div className="user-status">{`Новый пользователь? ${createUser}`}</div>
            <div className="start-page__wrapper">
                <button onClick={() => createUserMethod(2, "gjfhgjfj")} className="start-page__close">
                    <img src="/images/icons/close.svg" alt="" />
                </button>
                <img src={data[pageCounter].img} alt="" className="start-page__image" />
                <div className="start-page__title">{data[pageCounter].title}</div>
                <div className="start-page__descr">{data[pageCounter].descr}</div>
                <div className="start-page__next">
                    <div className="start-page__next-counter">{data[pageCounter].numPage} / 3</div>
                    <button onClick={onChangePageCounter} className="start-page__next-button">
                        Дальше
                        <img src="/images/icons/arrow-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
