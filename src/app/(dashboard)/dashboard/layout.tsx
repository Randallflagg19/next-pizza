export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			DASHBOARD Header
			<body>{children}</body>
		</html>
	)
}
