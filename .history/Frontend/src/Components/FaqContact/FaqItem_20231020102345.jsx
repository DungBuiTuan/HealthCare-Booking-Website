import {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ item }) => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleAccordion = () =>{
        setIsOpen(!isOpen);
    }

  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9D3C2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
        <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
            {item.question}
        </h4>
        <div className=''>
            {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </div>
        </div>
    </div>
  )
}

export default FaqItem