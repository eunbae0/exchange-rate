type Props = {
	children: React.ReactNode;
};

const MobileLayout = ({ children }: Props) => {
	return <div className="w-[414px] mx-auto my-0">{children}</div>;
};

export default MobileLayout;
