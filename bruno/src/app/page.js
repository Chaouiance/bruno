import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FrameComponent2 from "../../components/Frame-component2";
import SectionReassurance from "../../components/section-reassurance";
import SectionConsultants from "../../components/section-consultants";
import SectionSolutions from "../../components/section-solutions";
import SectionConsultants1 from "../../components/section-consultants1";
import SectionQuote from "../../components/section-quote";
import SectionConversion from "../../components/section-conversion";



export default function Home() {
  return (

    <> 
   <Header/>
   <FrameComponent2/>
   <SectionReassurance/>
   <SectionConsultants/>
   <SectionSolutions/>
  
   <SectionConsultants1/>
   <SectionQuote/>
   <SectionConversion/>

    <Footer/>


    </>





  )

}

   