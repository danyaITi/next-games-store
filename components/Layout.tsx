import Head from 'next/head'
import Header from './header'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Games</title>
			</Head>

			<Header />

			{children}
		</>
	)
}

export default Layout
