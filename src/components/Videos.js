import React from 'react'

export default function Videos() {
  return (
    <div>
        <div className="jsx-2880253090 border my-3 lg:px-1 lg:w-2/3 xl:my-3 xl:px-1 xl:w-2/3 ml-3 mr-3 lg:ml-16 m-auto">
            <div className="jsx-2880253090 h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] xl:h-[70vh] mx-auto">
                <iframe title="YouTube Video"
                    src="https://www.youtube.com/embed/TcoTvrpWgkM" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="" className="jsx-2880253090 w-full h-full">
                </iframe>
            </div>
        </div>

        <div className="lg:mr-96">
            <h1 className="jsx-2880253090 text-2xl lg:text-3xl font-semibold mx-4 lg:mx-16 mt-5 mb-2">Install &amp; Configure VS
                Code
                With C Compiler: C Tutorial In Hindi #3</h1>

            <div className="lg:mx-16 mx-5 py-5">
                <p className="text-xl">
                    In this tutorial we are going to discuss about ide along with compiler and the difference between the
                    two.
                    We will also see the installation of these two in windows as most of the viewers are using windows. I
                    will
                    also show you how to set the path for compiler and by the end of the tutorial you will have an ide
                    linked
                    with a compiler that will help you write your programs efficiently.
                </p>
                <h4 className="my-5 font-semibold text-2xl">What is an IDE?</h4>
                <p className="text-xl">
                    IDE stands for<strong> Integrated development environment. </strong>
                    It is nothing more than an enhanced version of a text editor that helps you write more efficient and
                    nicer code. It helps to differentiate different parts of your codes with different colors and notifying
                    you if you are missing some semicolon or bracket at some place by highlighting that area. A lot of IDEs
                    are available such as <strong>DEVC++</strong> or <strong>Code Blocks</strong> but we are going to use
                    <strong> VS Code </strong> for this tutorial series.
                </p>
                <h4 className="my-5 font-semibold text-2xl">
                    Compiler:
                </h4>
                <p className="text-xl">
                    A compiler is used to run the program of a certain language by converting the code into the language
                    that our computer could understand. Without a compiler we can not run our code. Every programming
                    language is required a different compiler for its functioning because the syntax of every language is
                    different from the other There are a lot of compilers available, but we are going to use
                    <strong> MinGW </strong> for this course because it will fulfill all of our requirements and also it is
                    recommended by Microsoft itself.
                </p>
                <h4 className="my-5 font-semibold text-2xl">VS Code Installation:</h4>
                <p className="text-xl">
                    Let’s start the installation process. First, we are going to see the installation of VS Code. For that
                    search "VS Code download" on google or directly visit the URL:
                </p>
                <p className="text-xl">
                    <em>
                        <strong>
                            {/* <a className="text-blue-700 underline" target="blank"
                            href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a> */}
                        </strong>
                    </em>
                </p>
                <p className="text-xl">
                    This will open this page:
                </p>
                <p>
                    <br />
                    <img className="w-4/5 h-auto" src="otherElement/ws.png" alt="" />
                </p>
                <h4 className="my-5 font-semibold text-2xl">Code as described/written in the video</h4>
                <div>
                    <pre
                        className="bg-gray-900 overflow-auto px-3 py-3 my-5 rounded"><code><span className="text-white">No Source Code associated with This Video</span></code></pre>
                </div>
            </div>
        </div>
    </div>
  )
}
