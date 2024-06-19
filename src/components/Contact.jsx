const Contact = () => {
  return (
    <section name='Contact' className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-dark via-[black] to-dark text-head p-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center space-y-8">
        <img
          src="/Josiah.png"
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />
        <h1 className="text-3xl font-bold text-center">
          Build your website in record time
        </h1>
        <p className="text-center text-gray-300">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          nullam nunc justo sagittis suscipit ultrices.
        </p>
        <form className="w-full flex flex-col items-center space-y-4">
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-400 py-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter a valid email address"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue hover:bg-orange-600 text-white font-bold py-2 rounded transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <footer className="mt-8 text-center text-gray-400">
        Пример текста. Кликните, чтобы выбрать элемент.
      </footer>
    </section>

    // <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
    //     <div className='flex flex-col mx-auto justify-center max-w-screen-lg p-4 h-full'>
    //         <div className='pb-8'>
    //             <p className='text-4xl border-b-4 font-bold inline border-gray-500 text-white'>contact</p>
    //             <p className='py-6 text-white'>submit the form to get in touch with me</p>
    //         </div>

    //         <div className='flex justify-center items-center'>
    //             <form className='flex flex-col w-[100%] md:w-[60%] gap-4'>
    //                 <input type='text '
    //                 name='name'
    //                 placeholder='Enter your name'
    //                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
    //                 />
    //                 <input type='text '
    //                 name='email'
    //                 placeholder='Enter your email'
    //                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
    //                 />

    //                 <textarea name='message' rows={10} className='p-2 bg-transparent text-white focus:outline-none rounded-md border-2'></textarea>

    //                 <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-3 my-8 flex items-center hover:scale-118 duration-300 m-auto rounded-md px-10'>lets talk</button>
    //             </form>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Contact;
