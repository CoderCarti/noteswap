import React from 'react'
import { useNavigate } from 'react-router-dom'
import gadonski from '../src/assets/gadonski_img.png'
import { FaFilePdf, FaStickyNote, FaImage } from "react-icons/fa";

const Homepage = () => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-row p-6 gap-6 max-w-7xl mx-auto">
      {/* Left Sidebar - Fixed width */}
      <div className='w-80 flex flex-col gap-4'>
        {/* Profile Card */}
        <div className='flex rounded-2xl p-5 flex-col bg-white shadow-md'> 
          <img
            src={gadonski}
            alt="Profile"
            className='w-20 h-20 mx-auto rounded-full object-cover shadow-lg'
          />
          <h1 className='text-xl font-semibold text-center mt-3'>Christian Gadon</h1>
          <p className='text-gray-600 text-center text-sm'>Studied at National University (PH)</p>
          <p className='text-gray-600 text-center text-sm'>General Trias, Calabarzon</p>
        </div>
        
        {/* About Me */}
        <div className='flex rounded-2xl p-5 flex-col bg-white shadow-md'>
          <h1 className='text-xl font-semibold mb-2'>About Me</h1>
          <p className='text-sm text-gray-600'>
            I am a software developer with a passion for creating innovative solutions. 
            I love coding, learning new technologies, and sharing knowledge with others.
          </p>
        </div>
        
        {/* Filters */}
        <div className='flex rounded-2xl p-5 flex-col bg-white shadow-md gap-4'>
          <select className='p-2 rounded-lg border border-gray-300 text-sm'>
            <option value="recent">Select Filter</option>
            <option value="popular">Medical Technology</option>
            <option value="all">Information Technology</option>
            <option value="all">Tourism</option>
            <option value="all">Architecture</option>
          </select>
          <select className='p-2 rounded-lg border border-gray-300 text-sm'>
            <option value="recent">Select Year</option>
            <option value="popular">1st Year</option>
            <option value="recent">2nd Year</option>
            <option value="all">3rd Year</option>
            <option value="all">4th Year</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col gap-6'>
        {/* Post Creator */}
        <div className='rounded-2xl p-6 bg-white shadow-md'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img
                src={gadonski}
                alt="Profile"
                className='w-12 h-12 rounded-full object-cover shadow-md'
              />
              <input 
                className='flex-1 p-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
                placeholder='Post your notes here...'
                type='text'
              />
            </div>
            
            {/* Post action buttons */}
            <div className='flex justify-between items-center pl-20'>
              <div className='flex gap-6'>
                <button className='flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors cursor-pointer'>
                  <FaFilePdf className='text-base' />
                  <span className='text-sm'>PDF</span>
                </button>
                <button className='flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors cursor-pointer'>
                  <FaStickyNote className='text-base' />
                  <span className='text-sm'>Notes</span>
                </button>
                <button className='flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors cursor-pointer'>
                  <FaImage className='text-base' />
                  <span className='text-sm'>Photo</span>
                </button>
              </div>
              <button className='bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors cursor-pointer'>
                Post
              </button>
            </div>
          </div>
        </div>
        
        {/* Posts Feed */}
        <div className='rounded-2xl p-6 bg-white shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Recent Posts</h2>
          {/* Posts would be rendered here */}
          <div className='flex flex-col gap-4'>
            <div className='p-4 border-b border-gray-200'>
              <h3 className='text-lg font-semibold'>Post Title 1</h3>
              <p className='text-sm text-gray-600'>This is a brief description of the post content.</p>
            </div>
            <div className='p-4 border-b border-gray-200'>
              <h3 className='text-lg font-semibold'>Post Title 2</h3>
              <p className='text-sm text-gray-600'>This is a brief description of the post content.</p>
            </div>
            <div className='p-4 border-b border-gray-200'>
              <h3 className='text-lg font-semibold'>Post Title 3</h3>
              <p className='text-sm text-gray-600'>This is a brief description of the post content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Fixed width */}
      <div className='w-80 flex flex-col gap-4'>
        {/* Quick Access */}
        <div className='flex rounded-2xl p-5 flex-col bg-white shadow-md'>
          <h1 className='text-xl font-semibold mb-2'>Discover</h1>
          </div>
      </div>
    </div>
  )
}

export default Homepage