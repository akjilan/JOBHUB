import React from 'react';

const Footer = () => {
  // Sample data for job application links
  const columns = [
    {
      title: 'Explore',
      links: ['Jobs', 'Companies', 'Salaries', 'Interviews'],
    },
    {
      title: 'Quick Links',
      links: ['Create Resume', 'Job Alerts', 'Company Reviews'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Disclaimer'],
    },
    {
      title: 'Connect',
      links: ['Contact Us', 'Facebook', 'Twitter', 'LinkedIn'],
    },
  ];

  return (
    <footer className=" w-full px-2 md:px-10 xl:px-32 md:ps-24 mx-auto bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
        {columns.map((column, index) => (
          <div key={index} className="mb-4 flex flex-col">
          
           <h4 className="text-xl font-semibold mb-2">{column.title}</h4>

            <ul>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:text-gray-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Mini Footer */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 Your Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
