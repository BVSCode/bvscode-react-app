import React from 'react';
import logo from './bvslogo.png';

export default function Footer() {
    return <div>
        <footer className="text-gray-600 body-font mt-8 px-10 bg-white">
            <div className="px-2 py-4 mx-auto flex items-center sm:flex-row flex-col">
                <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src={logo} alt="BVSCode Logo" className="rounded h-12" />
                    <span className="ml-3 text-xl">BVSCode</span>
                </span>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">
                    Copyright © 2022 BVSCode.com
                </p>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://www.facebook.com/bhaveshkumar/" target="_blank" rel="noreferrer" className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/_b_h_a_v_e_s_h___k_u_m_a_r_/" target="_blank" rel="noreferrer" className="ml-3 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    </div>;
}
