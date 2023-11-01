import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='bg-slate-200 py-8'>
      <div className='max-w-6xl mx-auto flex flex-wrap justify-between items-center'>
        <div className='w-full sm:w-1/2 mb-4 sm:mb-0'>
          <h2 className='text-xl font-bold text-slate-700'>Contact Us</h2>
          <p className='text-slate-700'>
            If you have any questions or need assistance, feel free to contact us:
          </p>
        </div>
        <div className='w-full sm:w-1/2'>
          <div className='flex flex-wrap gap-4'>
            <div className='flex items-center'>
              <FaPhone className='text-slate-600' />
              <p className='text-slate-700 ml-2'>+91 8541939746</p>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='text-slate-600' />
              <p className='text-slate-700 ml-2'>akshanshsourabh.com</p>
            </div>
            <div className='flex items-center'>
              <a
                href='https://www.facebook.com/yourpage'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-600 hover:text-blue-500'
              >
                <FaFacebook />
              </a>
              <a
                href='https://www.instagram.com/aksxansh'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-600 ml-2 hover:text-pink-500'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
