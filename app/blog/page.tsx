
import type { Metadata } from "next";

import { getAbsoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "JulTech Blog | SEO, AEO, AI Visibility, and Multilingual Search",
	description:
		"Explore JulTech insights on SEO, AEO, AI visibility, multilingual websites, and modern search strategy for businesses that want to be found and trusted online.",
	keywords: [
		"JulTech blog",
		"SEO blog",
		"AEO blog",
		"AI visibility",
		"AI search optimization",
		"multilingual SEO",
		"Google AI Overviews",
		"business visibility",
	],
	alternates: {
		canonical: getAbsoluteUrl("/blog"),
	},
	openGraph: {
		title: "JulTech Blog | SEO, AEO, AI Visibility, and Multilingual Search",
		description:
			"Clear guidance on modern search, AI answer visibility, multilingual optimization, and the systems businesses need to be discovered and trusted.",
		url: getAbsoluteUrl("/blog"),
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "JulTech Blog | SEO, AEO, AI Visibility, and Multilingual Search",
		description:
			"Insights on SEO, AEO, AI visibility, multilingual optimization, and modern search strategy.",
	},
};

export { default } from "./BlogPageServer";
