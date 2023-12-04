import './styles/main-content.css'
import waitlist1 from '../../public/waitlist-1.svg'
import waitlist2 from '../../public/waitlist-social-2.svg'
import waitlist3 from '../../public/waitlist-3.svg'
import Image from 'next/image'
export default function MainContent() {
    return (
        <main className='ck-main-content-container' id='how-to'>
            <h1 className=" font-bold tracking-tight text-center sm:text-4xl .ck-main-h1">How to join?</h1>
            <p className="mt-5 text-lg leading-8 text-center .ck-main-p">With chotkari, joining our community is also chotkari.</p>
            <div className='ck-waitlist-steps-container'>
                <div className='ck-waitlist-steps'>
                    <span>Step 01</span>
                    <div className='ck-waitlist-inner-div-1'>
                        <p>chotkari.com</p>
                        <Image src={waitlist1} height={0} width={0} alt='chotkati-waitlist-1' />

                    </div>
                    <p>Go to chotkari.com/waitinglist</p>
                </div>
                <div className='ck-waitlist-steps'>
                    <span>Step 02</span>
                    <div className='ck-waitlist-inner-div-2'>
                        <p>Social Media</p>
                        <Image src={waitlist2} height={0} width={0} alt='chotkati-waitlist-1' />

                    </div>
                    <p>Follow us on all social media</p>

                </div>
                <div className='ck-waitlist-steps'>
                    <span>Step 03</span>
                    <div className='ck-waitlist-inner-div-3'>
                        <p>Community</p>
                        <Image src={waitlist3} height={0} width={0} alt='chotkati-waitlist-1' />


                    </div>
                    <p>Join our community</p>

                </div>

            </div>
        </main>
    )
}