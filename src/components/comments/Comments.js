import Image from 'next/image';
import './Comments.css';
import BrandonKelley from '../../images/brandon-kelley.png'; // Placeholder image for users without avatars

const Comments = ({ comments }) => {
    if (!comments || comments.length === 0) {
        return '';
    }

    return (
        <>
            <section className='wpa-wrapper-sides-spacing'>
                <div className='wpa-comments-main wpa-h3-font-size'>
                    <div className="wpa-right-menu-buttons wpa-content-end wpa-leave-btn">
                        <button>LEAVE A REPLY</button>
                    </div>
                    {comments.map(comment => (
                        <div key={comment.id} className='wpa-comments-common'>
                            <div className='wpa-comments-wrapper'>
                                <div className='wpa-flex wpa-gap-70 wpa-content-top-bottom-spacing-30 wpa-user-comments'>
                                    <div className='wpa-comments-common-icon wpa-border'>
                                        <Image src={BrandonKelley} alt={comment.author.node.name} />
                                    </div>
                                    <div className='wpa-comments-common-content wpa-h5-font-size wpa-paragraph-text'>
                                        <div className='wpa-flex wpa-space-between'>
                                            <h5>{comment.author.node.name}</h5>
                                            <h6>{new Date(comment.date).toLocaleDateString()}</h6>
                                        </div>
                                        {/* <p>{comment.content}</p> */}
                                        <p dangerouslySetInnerHTML={{ __html: comment.content }} />
                                        <div className='wpa-button-reply'><button type='button'>Reply</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='wpa-comment-form wpa-h3-font-size'>
                    <h3>Leave a Comment</h3>
                    <form>
                        <div className='wpa-form-inner'>
                            <div className='wpa-form-group wpa-flex wpa-menu-items-gap'>
                                <input type='text' placeholder='Name' className='wpa-input-padding-20' />
                                <input type='text' placeholder='Website' className='wpa-input-padding-20' />
                            </div>
                            <div className='wpa-form-group wpa-flex wpa-content-top-bottom-spacing-30 wpa-menu-items-gap'>
                                <textarea type='email' placeholder='Message' className='wpa-input-padding-20' />
                            </div>
                        </div>
                        <div className="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500 wpa-comments-btn wpa-conversation-btn">
                            <button type="button">START CONVERSATION</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Comments;
