import React, { useState } from "react";
import { Button,  Label, Select, TextInput, Textarea } from "flowbite-react";

function Uploadbook() {
    const bookCategories =[
      "Fiction",
      "Romance",
      "Biography",
      "science",
      "Self Help",
      "poetry",
      "Mystery",
      "Thriller",
      "Non Fiction",
      "Children's Book",
      "business",
      "sports",
      "Health & Wellness",
      "technology"
    ]

    const [selectBookCategory , setSelectBookCategory ] = useState(bookCategories[0])

    const handleChangeSelectedValue =(event)=>{
        console.log("selected value is ", event.target.value)
        setSelectBookCategory(event.target.value)
    }
    
    // book submission handle
    const handleBookSubmit = (event)=>{
        event.preventDefault()
        const form =event.target
        const book_title =form.book_title.value
        const authorname=form.authorname.value
        const imageurl = form.imageurl.value
        const category = form.categoryName.value
        const book_description = form.book_description.value
        const bookpdf_url = form.bookpdf_url.value
        
        const bookObj = {
            book_title , authorname, imageurl, category, book_description, bookpdf_url
        }

        console.log(bookObj)

        // send data to database
        fetch("http://localhost:3000/addbook",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body : JSON.stringify(bookObj)
        }).then(res => res.json()).then(data =>{
            alert('Your book has been added successfully')
            // console.log(data)
            form.reset()

        })
    }

     return (
          <div className="px-4 my-12">
               <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

               <form onSubmit={handleBookSubmit}
                    className="flex lg:w-[1100px] flex-col flex-wrap gap-4
        "
               >
                    {/* first row */}
                    <div className="flex gap-8">
                         <div className="lg:w-1/2">
                              <div className="mb-2 block">
                                   <Label htmlFor="book_title" value="Book Title" />
                              </div>
                              <TextInput id="Book Title" 
                              name="book_title" type="text" placeholder="Enter the book name" required />
                         </div>
                         <div className="lg:w-1/2">
                              <div className="mb-2 block">
                                   <Label htmlFor="authorname" value="Author Name" />
                              </div>
                              <TextInput id="authorname" 
                              name="authorname" type="text" placeholder="Enter the author name" required />
                         </div>
                    </div>

                    {/* second row */}
                    <div className="flex gap-8">
                         <div className="lg:w-1/2">
                              <div className="mb-2 block">
                                   <Label htmlFor="imageurl" value="Image url" />
                              </div>
                              <TextInput id="imageurl"
                              name="imageurl" type="text" placeholder="Paste the url" required />
                         </div>
                         <div className="lg:w-1/2">
                              <div className="mb-2 block">
                                   <Label htmlFor="inputState" value="Book category" />
                              </div>
                              <Select id="inputState" name="categoryName" className="w-full  rounded" value={selectBookCategory} onChange={handleChangeSelectedValue}>
                                {
                                    bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
                                }
                              </Select>
                              
                         </div>
                    </div>

                    {/* bookDescription */}
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor=    "book_description" value="Book Description" />
                        </div>
                        <div>
      
                        <Textarea 
                        name="book_description"
                        id="book_description" 
                        type="text" placeholder="what your book told about" className=" w-full" required rows={5} />
                        </div>
                        
                    </div>   

                     {/*Book pdf link  */}
                     <div>
                        <div className="mb-2 block">
                        <Label htmlFor="bookpdf_url" value="Book pdf URL" />
                        </div>
                        <TextInput id="bookpdf_url" type="text" placeholder="Paste the Book pdf url" required shadow />
                    </div>

                    {/* btn */}
                    <Button type="submit">Upload Book</Button>
               </form>
          </div>
     );
}

export default Uploadbook;
