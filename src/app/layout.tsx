import type { Metadata } from "next";

import "./globals.css";

import MobileLayout from "./MobileLayout";

export const metadata: Metadata = {
	title: "환율 정보",
	description: "show exchange rate",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body>
				<MobileLayout>{children}</MobileLayout>
			</body>
		</html>
	);
}
