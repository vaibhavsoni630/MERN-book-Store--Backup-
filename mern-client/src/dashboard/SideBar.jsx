import { Sidebar } from 'flowbite-react';
import { BiBuoy, BiHelpCircle, BiUser } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../contacts/AuthProvider';

function SideBar() {
  const {user}=useContext(AuthContext)

  return (
    <div className='bg-teal-100'>
          <Sidebar aria-label="Sidebar with content separator example" className=' h-screen '>
                 <Sidebar.Logo  className='my-10' >
                  {user?.displayName || "Guest User"}
                 </Sidebar.Logo>
               <Sidebar.Items className=' my-12'>
                 <Sidebar.ItemGroup className=' my-8'>
                <Sidebar.Item className=" my-12" href="/admin/dashboard" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item className=" my-12" href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                  UploadBook
                </Sidebar.Item>
                <Sidebar.Item className=" my-12" href="/admin/dashboard/manage" icon={HiInbox}>
                  Manage Books
                </Sidebar.Item>
                
                
                <Sidebar.Item className=" my-12" href="/logout" icon={HiTable}>
                  Log Out
                </Sidebar.Item>
                <Sidebar.Item className=" my-12" href="/help" icon={BiUser}>
                  Contact us
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              
            </Sidebar.Items>
          </Sidebar>
    </div>
  )
}

export default SideBar