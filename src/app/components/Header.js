import Link from 'next/link';
import parse from 'html-react-parser';


const Header = (props) => {
    const {title, email} = props
  return (
    <>
        <header className='border border-slate-200 w-full lg:flex lg:justify-between px-6'>
            <div className='self-center'>
                <Link href={'/'} className='flex gap-x-3 font-semibold'>
                        {parse(title)}
                </Link>
            </div>

            <div className='flex lg:justify-between gap-x-5 py-3'>
                
                    <img src="https://res.cloudinary.com/dtduf2ehv/image/upload/v1705113902/j4utweqw9tl7lzlhkkff.jpg" alt="Logo" className='w-[3rem] h-[3rem] rounded-full border border-slate-300' />
                <span className='self-center'>
                    {email}
                </span>
            </div>
        </header>
    </>
  )
}

export default Header
