import { IconMail, IconPhone, IconWorld } from "@tabler/icons-react";
import { ContactType } from "../types";

export const ContactComponent = (contact: ContactType) => {
    return (
        <div className="contact">
            <p className="contact__email">
                <IconMail />
                {contact.email}
                </p>
            <p className="contact__cel">
                <IconPhone />
                {contact.cel}
                </p>
            <p className="contact__homepage">
                <IconWorld />
                {contact.homepage}
                </p>
        </div>
    );
};