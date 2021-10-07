import SearchBar from "../components/SearchBar";

export default function Main() {
	return (
		<div className="bg-night text-center text-white h-screen w-full">
			<div className="hero">
				<div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
					<h1 className="rainbow-text font-semibold text-5xl md:text-7xl lg:text-9xl">Code Examples</h1>
					<p className=" font-base text-base text-white">Short code snippets written by our open source community!</p>
				</div>
				<SearchBar />
			</div>
		</div>
	);
}
