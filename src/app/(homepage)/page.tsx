import {
	resume,
	work,
	education,
	skills,
	contact
} from "@/data";

import {
	JobComponent,
	EducationComponent,
	SkillComponent,
	ContactComponent,
} from "../components";

import { List } from "../lib";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import Link from "next/link";
import { IconBrandGithub, IconPointFilled, IconWorld } from "@tabler/icons-react";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main main__small">
				<section id="contact" className="section">
					<h2 className="heading">Contact</h2>
					<ContactComponent {...contact} />
				</section>
				<section id="resume" className="section">
					<h2 className="heading">Resume</h2>
					<div className="resume">
						<p className="resume__text">{resume.text}</p>
					</div>
				</section>
				<section id="work" className="section">
					<h2 className="heading">Work Experience</h2>
					<List list={work} Item={JobComponent} separator={<Separator />} />
				</section>
				<section id="education" className="section">
					<h2 className="heading">Education</h2>
					<List list={education} Item={EducationComponent} separator={<Separator />} />
				</section>

				<section id="skills" className="section">
					<h2 className="heading">Skills</h2>
					<div className="skills-list">
						<List list={skills} Item={SkillComponent} />
					</div>
				</section>
			</main>
			<main className="main">
				<div className="group primary">
					<section id="contact" className="section">
						<h2 className="heading">Contact</h2>
						<ContactComponent {...contact} />
					</section>
					<section id="education" className="section">
						<h2 className="heading">Education</h2>
						<List list={education} Item={EducationComponent} separator={<Separator />} />
					</section>

					<section id="skills" className="section">
						<h2 className="heading">Skills</h2>
						<div className="skills-list">
							<List list={skills} Item={SkillComponent} />
						</div>
					</section>
				</div>
				<div className="group secondary">
					<section id="resume" className="section">
						<h2 className="heading">Resume</h2>
						<div className="resume">
							<p className="resume__text">{resume.text}</p>
						</div>
					</section>

					<section id="work" className="section">
						<h2 className="heading">Work Experience</h2>
						<List list={work} Item={JobComponent} separator={<Separator />} />
					</section>
				</div>
			</main>
			<footer className="footer">
				<div className="footer__content">
					<div className="footer__copy">
						<span>Copyright &copy; 2025</span>
						<IconPointFilled size={15} />
						<span>Paulo Wells</span>
						<IconPointFilled size={15} />
						<span>Rio de Janeiro, RJ - Brazil</span>
					</div>
					<ul className="footer__link-list">
						<li className="footer__link-list__item">
							<IconBrandGithub />
							<Link href="https://github.com/wellspr">github.com/wellspr</Link>
						</li>
						<li className="footer__link-list__item">
							<IconWorld />
							<Link href="https://paulowells.com">paulowells.com</Link>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
