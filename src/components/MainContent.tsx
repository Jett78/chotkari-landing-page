import './styles/main-content.css'
import waitlist1 from '../../public/waitlist-1.svg'
import waitlist2 from '../../public/waitlist-social-2.svg'
import waitlist3 from '../../public/waitlist-3.svg'
import greenVec from '../../public/green-vec.svg'
import redVec from '../../public/red-Vector.svg'
import blueVec from '../../public/blue-Vector.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function MainContent() {
    return (

        <main className='ck-main-content-container' id='how-to'>
            <h1 className=" text-center ck-top-heading">How to join?</h1>
            <p className="mt-5 text-center ck-main-p">With chotkari, joining our community is also chotkari.</p>
            <div className='ck-waitlist-steps-container'>
                <Link href={"#join-waitlist"}>
                    <div className='ck-waitlist-steps'>
                        <h6 className='ck-steps-p'>Step 01</h6>
                        <div className='ck-waitlist-inner-div-1' >
                            <Image src={greenVec} height={0} width={0} alt='go to' className='ck-pointer-icon-1' />
                            <p>chotkari.com</p>
                            <Image src={waitlist1} height={0} width={0} alt='chotkati-waitlist-1' />

                        </div>
                        <p className='ck-main-p'>Go to chotkari.com/waitinglist</p>
                    </div>
                </Link>
                <Link href={'#footer'}>
                    <div className='ck-waitlist-steps'>
                        <h6 className='ck-steps-p'>Step 02</h6>
                        <div className='ck-waitlist-inner-div-2'>
                            <Image src={redVec} height={0} width={0} alt='go to' className='ck-pointer-icon-2' />

                            <p>Social Media</p>
                            <Image src={waitlist2} height={0} width={0} alt='chotkati-waitlist-1' />

                        </div>
                        <p className='ck-main-p'>Follow us on all social media</p>

                    </div>
                </Link>
                <Link href={'https://www.facebook.com/groups/1032095298118218'} target='_blank'>
                    <div className='ck-waitlist-steps'>
                        <h6 className='ck-steps-p'>Step 03</h6>
                        <div className='ck-waitlist-inner-div-3'>
                            <Image src={blueVec} height={0} width={0} alt='go to' className='ck-pointer-icon-3' />

                            <p>Community</p>
                            <Image src={waitlist3} height={0} width={0} alt='chotkati-waitlist-1' />


                        </div>
                        <p className='ck-main-p'>Join our community</p>

                    </div>
                </Link>
            </div>
        </main>
    )
}