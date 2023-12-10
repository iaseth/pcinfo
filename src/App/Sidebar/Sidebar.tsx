


interface SidebarProps {}

export default function Sidebar ({}: SidebarProps) {
	return (
		<aside className="fixed top-0 left-0 h-screen w-64 bg-zinc-900 border-r border-blue-500">
			<header className="px-3 py-5 bg-zinc-800 text-center">
				<h4>PC Info</h4>
			</header>
		</aside>
	);
}
