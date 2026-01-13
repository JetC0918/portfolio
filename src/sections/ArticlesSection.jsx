
import './Sections.css';

const articles = [
    { id: '01', title: 'Why I left Tencent to build Independent AI Apps', date: '2025/12/31', link: '#' },
    { id: '02', title: 'I hired 6 AI employees to work with me', date: '2025/12/29', link: '#' },
    { id: '03', title: 'My new book "This is MCP" is published', date: '2025/07/17', link: '#' },
    { id: '04', title: 'How to be an Independent Developer in AI Era', date: '2025/07/03', link: '#' }
];

export function ArticlesSection() {
    return (
        <section className="section articles-section">
            <div className="section-header">
                <h2 className="section-title">Recent Articles</h2>
                <a href="#" className="section-more">Read More ↗</a>
            </div>

            <div className="articles-list">
                {articles.map((article) => (
                    <a href={article.link} key={article.id} className="article-item">
                        <span className="article-id">{article.id}</span>
                        <h3 className="article-title">{article.title}</h3>
                        <span className="article-date">{article.date}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
