import React from 'react'
import Link from 'next/link'

import NavLight from '../components/navbar/nav-light'
import FormThree from '../components/form/form-three'
import PropertySlider from '../components/property-slider'
import SellPropertyOne from '../components/sell-property-one'
import BestLoctionOne from '../components/best-loction-one'
import TeamOne from '../components/team-one'
import ClientOne from '../components/client-one'
import PricingOne from '../components/pricing-one'
import FooterTop from '../components/footer-top'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import BlogOne from '../components/blog-one'
import TopPlaceOne from '../components/top-place-one'
import PropertyType from '../components/property-type'
import ExplorePropertyOne from '../components/explore-property-one'

export default function Page() {
  return (
    <>
    <NavLight/> 

    <div className="hero-banner vedio-banner">
        <div className="overlay"></div>	

    <video playsInline autoPlay loop muted className="w-full h-auto">
    <source src="/img/banners.mp4" type="video/mp4" /></video>


        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-11 col-sm-12">
                    <div className="inner-banner-text text-center">
                        <p className="lead-i text-light">Affidabilità, competenza e innovazione dal 1995</p>
                        <h2 className="text-light" style={{ fontSize: "55px" }}>Le aste giudiziarie a portata di tap</h2>
                        
                    </div>
                    <FormThree/>
                </div>
            </div>
        </div>
    </div>

     <section>
             <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-xl-6 col-lg-7 col-md-10">
                         <div className="sec-heading text-center">
                             <h2>Choose Property Type</h2>
                             <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                         </div>
                     </div>
                 </div>
                 <PropertyType/>
             </div>
         </section>
         <div className="clearfix"></div>

      <section className="pt-0">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-lg-7 col-md-10">
                            <div className="small-heads">
                                <h2 className="fs-5 mb-0">Explore Top Places</h2>
                                <p>Best Places</p>
                            </div>
                        </div>
                    </div>
                   <TopPlaceOne/>
                </div>
            </section>
            <div className="clearfix"></div>

    
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Find Best Locations</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BestLoctionOne/>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <Link href="/listings-list-with-sidebar" className="btn btn-primary px-md-5 rounded">Browse More Locations</Link>
                    </div>
                </div>
            </div>
        </section>
        <hr className="opacity-25"></hr>

    <section className="pt-0">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                    <div className="sec-heading center">
                        <h2>Recent Property For Rent</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                    </div>
                </div>
            </div>
            <PropertySlider/>
        </div>
    </section>

    <section className="bg-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                    <div className="sec-heading center">
                        <h2>Featured Property For Sale</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                    </div>
                </div>
            </div>
            <SellPropertyOne border={false}/>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                    <Link href="/listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">Browse More Properties</Link>
                </div>
            </div>
        </div>		
    </section>


        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Properties in Best Places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <ExplorePropertyOne/>
            </div>	
        </section>

    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                    <div className="sec-heading center">
                        <h2>Explore Featured Agents</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                    </div>
                </div>
            </div>
            <TeamOne/>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                    <Link href="/listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">Explore More Agents</Link>
                </div>
            </div>
        </div>
    </section>
    <div className="clearfix"></div>

    <section className="gray-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                    <div className="sec-heading center">
                        <h2>Good Reviews by Customers</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                    </div>
                </div>
            </div>
            <ClientOne/>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                    <div className="sec-heading center">
                        <h2>See our packages</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                    </div>
                </div>
            </div>
            <PricingOne/>
        </div>	
    </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center">
                                <h2>Latest Updates By Asta Go</h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                            </div>
                        </div>
                    </div>
                    <BlogOne/>
                </div>		
            </section>

    <FooterTop bg="theme-bg"/>

    <Footer/>
    
    <ScrollToTop/>
    </>
  )
}
