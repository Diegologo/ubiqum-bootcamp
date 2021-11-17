const Event = ({ date, description }) => {
    return (
        <div>
            <p>{date}<br/>{description}</p>
        </div>
    )
}

const Events = () =>{
    return (
        <div>
            <h2>Upcoming Events</h2>
            <hr/>
            <Event
                date={'August 4'}
                description={'NYSL Fundraiser'}
            />
            <Event
                date={'August 16'}
                description={'Season Kick-off: Meet the Teams'}
            />
            <Event
                date={'September 1'}
                description={'First Game of the Season (Check Game Schedule for details)'}
            />
            <hr/>
        </div>
    )
};



const Contact = () =>{
    return(
        <div id="contact" style={{textAlign:'center'}}>
            <h3>Contact Information</h3>
            <p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
            <p>We will reply to your email as soon as we can.</p>
        </div>
    )
};

export default Events;
export {Contact};