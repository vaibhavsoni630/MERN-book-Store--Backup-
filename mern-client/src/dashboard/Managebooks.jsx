import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTrash} from "react-icons/fa6"

function Managebooks() {

  const [allboks ,setAllbooks] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/all-books").then(res =>res.json()).then(data => setAllbooks(data))
  })

  // for delete the book
  const handleDelete =(id) =>{
    let answer = window.confirm('Are you sure to delete this Book?')
    if (answer){
      fetch(`http://localhost:3000/book/${id}`,{
        method:"DELETE",
      
      }).then(res=>res.json()).json(data => { alert("Book deleted successfully") 
      // setAllbooks(data)
    })

    }
  }

  return (
    <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* table to manage books*/}
      <Table hoverable className=' lg:w-[1100px]'>
        <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allboks.map((book , index) => <Table.Body className="divide-y"key={book._id} >

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.book_title}
            </Table.Cell>
            <Table.Cell>{book.authorname}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=> handleDelete(book._id)} className='text-red-600 hover:text-black' title={"Delete Book"}><FaTrash/></button>
            </Table.Cell>
          </Table.Row>
          </Table.Body> )
        }
        
          
      </Table>
    </div>
  )
}

export default Managebooks