import { personal } from "@/data";
//import Image from "next/image";

export const Header = ({
    photo = false,
}: {
    photo?: boolean
}) => {
    return (
        <header className="header">
            {
                photo &&
                <div className="header__photo">
                    {/* <Image src="" fill alt="profile_photo" /> */}
                    <div className="header__photo__image"></div>
                </div>
            }
            <div className="header__details">
                <h2 className="header__details__name">{personal.name.first} {personal.name.last}</h2>
                <h3 className="header__details__title">{personal.title}</h3>
            </div>
        </header>
    );
}