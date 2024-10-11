"use client";

import { useState } from "react"; // Import useState
import "./Blog.css";

const posts = [
    { id: 1, title: "First Post", content: "This is the content of the first post. It covers the basics of our blog." },
    { id: 2, title: "Second Post", content: "In this post, we explore the journey of creating engaging content." },
    { id: 3, title: "Third Post", content: "Here we discuss the importance of design in user experience." },
    { id: 4, title: "Fourth Post", content: "This article delves into effective marketing strategies for blogs." },
    { id: 5, title: "Fifth Post", content: "Join us as we review the latest trends in web development." },
    { id: 6, title: "Sixth Post", content: "In this post, we share tips for maintaining work-life balance." },
    { id: 7, title: "Seventh Post", content: "Exploring the benefits of using React for building user interfaces." },
    { id: 8, title: "Eighth Post", content: "Understanding SEO: How to optimize your blog for search engines." },
    { id: 9, title: "Ninth Post", content: "A look at the future of technology and its impact on society." },
    { id: 10, title: "Tenth Post", content: "Tips for growing your audience and increasing engagement." },
    { id: 11, title: "Eleventh Post", content: "Best practices for writing compelling blog headlines." },
    { id: 12, title: "Twelfth Post", content: "The role of analytics in shaping your blog strategy." },
];

const postsPerPage = 4;

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentPosts = posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog Posts</h1>
            <div className="posts-container">
                {currentPosts.map(post => (
                    <div key={post.id} className="post-card">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button 
                    className="pagination-button" 
                    disabled={currentPage === 1} 
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="pagination-info">Page {currentPage} of {totalPages}</span>
                <button 
                    className="pagination-button" 
                    disabled={currentPage === totalPages} 
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
