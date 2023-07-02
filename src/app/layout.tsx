import { Inter } from 'next/font/google';
import { css } from '@linaria/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Estate Explorer',
	description: 'The best place to find your new home',
	viewport: 'width=device-width, initial-scale=1',
};

const inter = Inter({ subsets: ['latin'] });

const bodyClassName = css`
	display: flex;
	flex-direction: column;
`;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={inter.className}>
			<body className={bodyClassName}>{children}</body>
		</html>
	);
};

export default RootLayout;
