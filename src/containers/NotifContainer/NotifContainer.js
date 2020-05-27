import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import './NotifContainer.scss';

const NotifContainer = (props) => {
    return(
        <Feed size='small' className='feed-notif'>
            {props.map((item,i) =>
                <Feed.Event key={i}>
                    <Feed.Label>
                        <Icon color='red' circular name={item.icon || 'bell'} />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Date>{item.date}</Feed.Date>
                        <Feed.Summary>
                            {item.data}
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            )}
        </Feed>
    )
}

export default NotifContainer;