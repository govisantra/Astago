// app/blog-detail/[id]/page.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FooterTop from '../../../components/footer-top'
import Footer from '../../../components/footer'
import BlogSidebar from '../../../components/blog-sidebar'
import Navbar from '../../../components/navbar/navbar'
import ScrollToTop from '../../../components/scroll-to-top'

import { blogData } from '../../../data/data'

// ✅ Define props interface
interface PageProps {
  params: {
    id: string;
  };
}

// ✅ Static params for SSG
export async function generateStaticParams() {
  return blogData.map((item) => ({
    id: item.id.toString(),
  }));
}

// ✅ Page component
export default function Page({ params }: PageProps) {
  const data = blogData.find((item: any) => item.id === parseInt(params.id));

  if (!data) {
    return <div className="container py-5"><h2>Blog post not found.</h2></div>;
  }

  return (
    <div className="blog-page">
      <Navbar transparent={false} />

      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Blog Detail</h2>
              <span className="ipn-subtitle">See Our Latest Articles & News</span>
            </div>
          </div>
        </div>
      </div>

      <section className="gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-details single-post-item format-standard">
                <div className="post-details">
                  <div className="post-featured-img">
                    <Image
                      className="img-fluid"
                      src={data.image}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      alt=""
                    />
                  </div>
                  <div className="post-top-meta">
                    <ul className="meta-comment-tag">
                      <li>
                        <Link href="#"><span className="icons"><i className="ti-user"></i></span>by Rosalina Doe</Link>
                      </li>
                      <li>
                        <Link href="#"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <h2 className="post-title">{data.title}</h2>
                  <p>{data.content}</p>

                  {/* ... Additional content as in your original JSX */}

                  <div className="post-bottom-meta">
                    <div className="post-tags">
                      <h4 className="pbm-title">Related Tags</h4>
                      <ul className="list">
                        <li><Link href="#">organic</Link></li>
                        <li className='mx-2'><Link href="#">Foods</Link></li>
                        <li><Link href="#">tasty</Link></li>
                      </ul>
                    </div>
                    <div className="post-share">
                      <h4 className="pbm-title">Social Share</h4>
                      <ul className="list mt-3">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-vk"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-tumblr"></i></Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* ... Prev/Next Post navigation, author box, comment form, etc. (keep unchanged) */}

                </div>
              </div>
              {/* Author box, comments, and form would go here (unchanged from your original code) */}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <FooterTop bg="theme-bg" />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
