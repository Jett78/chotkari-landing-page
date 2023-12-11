import Footer from "@/components/Footer2";
import Navbar from "@/components/Navbar2";
import PrivacyPolicyComponent from '@/components/PrivacyPolicy'


export default function PrivacyPolicyPage() {
    return (
        <>

            <div style={{ backgroundColor: '#006696', marginBottom: '1rem', borderRadius: '24px' }}>
                <Navbar />
            </div>
            <div className="ck-inner-hero-section" >
                <PrivacyPolicyComponent />



            </div>
            <Footer />
        </>
    )
}