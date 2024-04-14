import { Link } from 'react-router-dom';

const NotFound = ({ }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <section className="page_404">
                    <div className='c'>
                        <div className='_404'>ERROR 404</div>
                        <hr />
                        <div className='_1'>THE PAGE WAS NOT FOUND</div>
                        <br />
                        <Link to="/" className="link-button">Go to Home</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NotFound;
