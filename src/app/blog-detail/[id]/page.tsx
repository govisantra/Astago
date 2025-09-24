// app/blog-detail/[id]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import FooterTop from '../../../components/footer-top';
import Footer from '../../../components/footer';
import BlogSidebar from '../../../components/blog-sidebar';
import Navbar from '../../../components/navbar/navbar';
import ScrollToTop from '../../../components/scroll-to-top';

import { blogData } from '../../../data/data';

type PageProps = {
  params: {
    id: string;
  };
};

// ✅ Tell Next.js what pages to statically generate
export async function generateStaticParams() {
  return blogData.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function Page({ params }: PageProps) {
  const blog = blogData.find((item) => item.id === parseInt(params.id));

  // Show 404 if not found
  if (!blog) {
    notFound(); // ✅ Proper 404 handling in App Router
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
                      src={blog.image}
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

                  <h2 className="post-title">{blog.title}</h2>

                  <p>{blog.content}</p>
                </div>
              </div>

              {/* You can re-add other sections: author box, comments, etc. */}
            </div>

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
