import { SidebarItem } from "../../../components/SideBarItem";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex flex-row">
      <div className="w-72 border-r fixed border-[#344C64] bg-[#35374B] h-screen">
        <div className="mt-24">
          <SidebarItem href={"/web/dashboard"} icon={<HomeIcon />} title="Home" />
          <SidebarItem href={"/web/transfer"} icon={<TransferIcon />} title="Transfer" />
          <SidebarItem href={"/web/transactions"} icon={<TransactionsIcon />} title="Transactions" />
          <SidebarItem href={"/web/p2p"} icon={<Kela />} title="Send p2p" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#eddcd2] to-[#fff1e6] ml-72 w-[calc(100vw-18rem)]">
        {children}
      </div>

 
    </div>
  );
}

// Icons Fetched from https://heroicons.com/
function HomeIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
  </svg>

}
function TransferIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
    <path d="M10 2a.75.75 0 0 1 .75.75v5.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0L6.2 7.26a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z" />
    <path d="M5.273 4.5a1.25 1.25 0 0 0-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 0 1 .894.553l.448.894a1 1 0 0 0 .894.553h3.438a1 1 0 0 0 .86-.49l.606-1.02A1 1 0 0 1 14 11h3.47a1.318 1.318 0 0 0-.015-.062l-1.523-5.52a1.25 1.25 0 0 0-1.205-.918h-.977a.75.75 0 0 1 0-1.5h.977a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h.977a.75.75 0 0 1 0 1.5h-.977Z" />
  </svg>

}

function TransactionsIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd" />
  </svg>

}


function Kela() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
    <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
  </svg>


}