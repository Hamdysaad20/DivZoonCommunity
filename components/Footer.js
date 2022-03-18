function Layout(props) {
  return (
    <footer style={{}} className='dark:bg-[#0d151d] bg-gray-100 bottom-0 '>
      <div className=' mt-4 '>
        <div className='relative  justify-center text-center mt-4 h-[250px] max-w-[300px] xl:ml-3    rounded-md     z-50   dark:bg-[#16222e] bg-gray-200 shadow-sm py-2'>
          <h2 className='text-xs font-thin text-gray-400'>
            .{" "}
            <span className='noselect  cursor-pointer hover:text-gray-800 dark:hover:text-gray-300'>
              الخصوصية
            </span>
            .{" "}
            <span className='noselect cursor-pointer hover:text-gray-800   dark:hover:text-gray-300'>
              الشروط{" "}
            </span>
            .{" "}
            <span className='noselect cursor-pointer hover:text-gray-800  dark:hover:text-gray-300'>
              الاعلانات
            </span>
          </h2>
          <hr className='noselect dark:bg-slate-900 absolute right-0 left-0 bottom-9' />
          <h1 className=' cursor-pointer noselect absolute right-0 left-0 bottom-2   duration-300 text-gray-500  dark:hover:text-gray-200 hover:text-gray-800 font-medium '>
            Created By Divzoon &copy;
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Layout;
