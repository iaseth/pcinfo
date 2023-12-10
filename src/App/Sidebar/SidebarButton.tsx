import { RedIcon } from "redicons";
import { TabData } from "../tabs";



type SidebarButtonProps = {
	tab: TabData
};

export default function SidebarButton ({
	tab
}: SidebarButtonProps) {
	return (
		<button className="block w-full px-4 py-5 bg-zinc-950 text-left flex space-x-3">
			<RedIcon name={tab.icon} size={24} />
			<h4>{tab.title}</h4>
		</button>
	);
}
