import { SkillType } from "../types";

export const SkillComponent = (skill: SkillType) => {
    return (
        <div className="skill">
            {skill.name}
        </div>
    );
}