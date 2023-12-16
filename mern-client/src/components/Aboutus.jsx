import React from 'react'

function Aboutus() {
  return (
    <div className='w-screen'>
      <h2 className='text-5xl font-bold text-center  mt-20'>About us</h2>
      <div className=" mx-10 my-8  text-lg">
        <p>Welcome to our online haven for book enthusiasts, where the realms of literature come alive! We are thrilled to introduce you to our passion project - a unique and user-friendly online bookstore designed and developed by the talented full-stack developer, Vaibhav Soni.</p>
        <ul className='my-8 flex flex-col gap-10'>
          <li>
            <h4 className=' text-2xl font-semibold'>Our Vision:</h4>
            <p className='text-gray-800'>At the core of our endeavor is a shared love for books and a commitment to creating a seamless and enjoyable experience for book lovers worldwide. We believe in the power of literature to inspire, educate, and connect people across cultures and borders.</p>
          </li>
          <li>
            <h4 className=' text-2xl font-semibold'> Innovation and User-Friendly Design:</h4>
            <p className='text-gray-800'>Vaibhav Soni, our visionary full-stack developer, has meticulously crafted this platform to be a haven for both casual readers and ardent bookworms. With a keen eye for innovation and a deep understanding of user experience, Vaibhav has ensured that navigating through our bookstore is a joyous journey. The user interface is intuitive, making it easy to upload, edit, and delete books with just a few clicks.</p>
          </li>
          <li>
            <h4 className=' text-2xl font-semibold'>  Seamless Integration with Google:</h4>
            <p className='text-gray-800'>We understand the importance of convenience in today's fast-paced world. That's why we've integrated seamless Google Sign-In functionality. Whether you're a Google enthusiast or prefer the ease of signing in with Gmail, we've got you covered. Vaibhav's expertise in full-stack development shines through in the smooth integration of these features, ensuring a hassle-free experience for our users.</p>
          </li>
          <li>
            <h4 className=' text-2xl font-semibold'>  Diverse Collection:</h4>
            <p className='text-gray-800'>Our bookstore boasts a diverse and extensive collection of books across genres, ensuring that there's something for everyone. From timeless classics to contemporary bestsellers, we're committed to curating a selection that caters to varied tastes and interests.</p>
          </li>
          <li>
            <h4 className=' text-2xl font-semibold'>  Meet the Architect: Vaibhav Soni</h4>
            <p className='text-gray-800'>Vaibhav Soni, the mastermind behind this project, is a seasoned full-stack developer with a passion for creating seamless, innovative, and user-friendly applications. His expertise in both front-end and back-end development has been instrumental in bringing this bookstore to life. Vaibhav's commitment to excellence is evident in every line of code and every pixel of design.</p>
          </li>

        <li className='text-2xl'>Thank you for choosing our bookstore. Happy reading!</li>

          
        </ul>


      </div>
    </div>
  )
}

export default Aboutus
