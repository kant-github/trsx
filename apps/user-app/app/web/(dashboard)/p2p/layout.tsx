import { TopBarItem } from "../../../../components/TopBarItem";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="mt-28">
            <div className="flex flex-row gap-x-8 ml-12">
                <TopBarItem title="transfer" href="/web/p2p/transfer" />
                <TopBarItem title="history" href="/web/p2p/history" />
            </div>
            <div className="bg-gradient-to-r from-[#eddcd2] to-[#fff1e6]">
                {children}
            </div>
        </div>
    );
}
