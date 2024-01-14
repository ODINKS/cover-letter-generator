import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image'


const Header = (props) => {
    const {title, email} = props
  return (
    <>
        <header className='border border-slate-200 w-full flex flex-wrap lg:flex-nowrap justify-between px-6'>
            <div className='self-center'>
                <Link href={'/'} className='flex gap-x-3 font-semibold'>
                        {parse(title)}
                </Link>
            </div>

            <div className='flex lg:justify-between gap-x-5 py-3'>
                
                    <Image src="https://res.cloudinary.com/dtduf2ehv/image/upload/v1705113902/j4utweqw9tl7lzlhkkff.jpg" alt="Logo" width={0} height={0} className='w-[3rem] h-[3rem] rounded-full border border-slate-300' />
                <span className='self-center'>
                    {email}
                </span>
            </div>
        </header>
    </>
  )
}

export default Header
