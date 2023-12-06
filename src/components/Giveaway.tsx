import Image from 'next/image'
import './styles/giveaway-sec.css'
import tablet from '../../public/tablet.svg'
import smartwatch from '../../public/smart watch 1.svg'
import earbuds from '../../public/earbuds-removebg-preview 1.svg'
export default function GiveawayDescription() {
    return (
        <section className="ck-giveaway-section-container" id='giveaway'>
            <div className='ck-giveaway-steps-container'>
                <div className="ck-giveaway-info">
                    <h1 className="font-bold tracking-tight text-justify sm:text-4xl  ck-giveaway-h1">Early Bird Giveaway worth Rs. 1,50,000+</h1>
                    <p className="mt-5 text-lg leading-8 text-justify ck-giveaway-p">Be the part of our Waitlist and make yourself eligible
                        for the Exciting Giveaway </p>
                </div>
                <div className='ck-prizes-div'>
                    <div className='ck-prizes-detail'>
                        <span>1 Tablet</span>
                        <div className='ck-giveaway-inner-div-1'>

                            <Image src={tablet} height={0} width={0} alt='chotkati-waitlist-1' />

                        </div>
                    </div>
                    <div className='ck-prizes-detail'>
                        <span>2 Smart Watches</span>
                        <div className='ck-giveaway-inner-div-2'>

                            <Image src={smartwatch} height={0} width={0} alt='chotkati-waitlist-1' />

                        </div>

                    </div>
                    <div className='ck-prizes-detail'>
                        <span>5 Ear Buds</span>
                        <div className='ck-giveaway-inner-div-3'>

                            <Image src={earbuds} height={0} width={0} alt='chotkati-waitlist-1' />


                        </div>


                    </div>
                </div>
            </div>
        </section>
    )

}