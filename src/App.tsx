import { useState } from "react";

// *** Type - Article | Social Link ***
type SocialLink = {
	name: string;
	href: string;
	icon: string;
};

const article = {
	title: "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
	description:
		"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
	author: "Michelle Appleton",
	avatar: "./images/avatar-michelle.jpg",
	date: "28 Jun 2020",
};
// *** End of Type - Article | Social Link ***

// *** Data ***
const socialLinks: SocialLink[] = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/",
		icon: "./images/icon-facebook.svg",
	},
	{
		name: "Twitter",
		href: "https://twitter.com/",
		icon: "./images/icon-twitter.svg",
	},
	{
		name: "Pinterest",
		href: "https://www.pinterest.com/",
		icon: "./images/icon-pinterest.svg",
	},
];
// *** End of Data ***

function App() {
	const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

	return (
		<main className="flex min-h-screen items-center justify-center bg-bg-body px-6 py-8">
			<article className="flex w-81.75 max-w-182.5 h-128 flex-col rounded-xl bg-bg-card shadow-[0_40px_40px_-10px_rgba(201,213,225,0.5)] min-[765px]:h-70 min-[765px]:w-full min-[765px]:flex-row relative">
				{/* Main Image */}
				<img
					src="./images/drawers.jpg"
					alt="Stylish drawers in a home interior"
					className="h-50 w-full shrink-0 rounded-t-xl object-cover object-left min-[765px]:h-full min-[765px]:w-71.25 min-[765px]:rounded-l-xl min-[765px]:rounded-tr-none"
				/>
				{/* End of Main Image */}

				{/* Main Content */}
				<div className="flex min-w-0 flex-1 flex-col justify-center px-8 py-8 min-[765px]:px-10 min-[765px]:py-0">
					<h1 className="mb-3 text-[16px] leading-6 font-bold tracking-[0.2px] min-[765px]:text-[20px] min-[765px]:leading-7 min-[765px]:tracking-[0.25px]">
						{article.title}
					</h1>

					<p className="mb-8 text-[13px] leading-5 font-medium tracking-[0.12px] text-secondary min-[765px]:mb-5">
						{article.description}
					</p>

					{/* Author | Social Media Links*/}
					<footer className="relative flex items-center">
						<img
							src={article.avatar}
							alt={article.author} // *** Michelle Appleton ***
							width={40}
							height={40}
							className="h-10 w-10 rounded-full object-cover"
						/>

						<div className="ml-4 text-[13px] leading-5">
							<p className="text-[15.21px] font-bold">
								{article.author}
							</p>
							<time
								dateTime="2020-06-28"
								className="text-tertiary"
							>
								{article.date}
							</time>
						</div>

						<button
							type="button"
							aria-label={
								isShareOpen
									? "Close share options"
									: "Share article"
							}
							aria-expanded={isShareOpen}
							aria-controls="share-panel"
							onClick={() => setIsShareOpen(!isShareOpen)}
							className={`relative z-20 ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
								isShareOpen
									? "bg-primary text-white"
									: "bg-bg-body text-secondary hover:bg-primary hover:text-white"
							}`}
						>
							<img
								src="./images/icon-share.svg"
								alt=""
								aria-hidden="true"
								className={`w-3.75 h-3.75 ${
									isShareOpen ? "brightness-0 invert" : ""
								}`}
							/>
						</button>

						<div
							id="share-panel"
							aria-label="Share this article"
							aria-hidden={!isShareOpen}
							className={`share-panel absolute z-10 flex h-13.75 w-62 items-center justify-center gap-4 rounded-xl bg-primary shadow-[0_10px_10px_rgba(201,213,225,0.5)] transition-[opacity,visibility] duration-300 ${
								isShareOpen
									? "visible opacity-100"
									: "invisible opacity-0"
							} bottom-[calc(100%+24px)] -right-17 min-[765px]:-right-27 max-[765px]:-right-8 max-[765px]:-bottom-4 max-[765px]:h-16 max-[765px]:w-81.75 max-[765px]:justify-start max-[765px]:rounded-t-none max-[765px]:px-8`}
						>
							<span className="mr-1 text-[13px] font-medium tracking-[5px] text-tertiary uppercase">
								Share
							</span>

							{socialLinks.map(({ name, href, icon }) => (
								<a
									key={name}
									href={href}
									aria-label={`Share on ${name}`}
									target="_blank"
									rel="noreferrer noopener"
									className="transition-transform duration-200 hover:scale-110"
								>
									<img
										src={icon}
										alt=""
										aria-hidden="true"
										className="h-5 w-5"
									/>
								</a>
							))}
						</div>
					</footer>
					{/* End of Author | Social Media Links*/}
				</div>
				{/* End of Main Content */}
			</article>
		</main>
	);
}

export default App;
