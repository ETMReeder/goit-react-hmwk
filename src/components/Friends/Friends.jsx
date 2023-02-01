import css from './Friends.module.css';
import friends from './friendslist.json';

export const Friends = () => { 
    console.log (friends)
    return (
        <div className={css.friendsContainer}>
            <ul className={css.friendslist}>
                <div classname={css.friendBox}>
                    <li className={css.friend}>
                        <div style={friends[0].isOnline ? { color: 'green' } : { color: 'red'}}>●</div>
                        <img className={css.friendAvatar} src={friends[0].avatar} width="48px"/>
                        <p className={css.friendName}>{friends[0].name}</p>
                    </li>
                </div>
                <div classname={css.friendBox}>
                    <li className={css.friend}>
                        <div style={friends[1].isOnline ? { color: 'green' } : { color: 'red'}}>●</div>
                        <img className={css.friendAvatar} src={friends[1].avatar} width="48px"/>
                        <p className={css.friendName}>{friends[1].name}</p>
                    </li>
                </div>
                <div classname={css.friendBox}>
                    <li className={css.friend}>
                        <div style={friends[2].isOnline ? { color: 'green' } : { color: 'red'}}>●</div>
                        <img className={css.friendAvatar} src={friends[2].avatar} width="48px"/>
                        <p className={css.friendName}>{friends[2].name}</p>
                    </li>
                </div>
                <div classname={css.friendBox}>
                    <li className={css.friend}>
                        <div style={friends[3].isOnline ? { color: 'green' } : { color: 'red'}}>●</div>
                        <img className={css.friendAvatar} src={friends[3].avatar} width="48px"/>
                        <p className={css.friendName}>{friends[3].name}</p>
                    </li>
                </div>
                <div classname={css.friendBox}>
                    <li className={css.friend}>
                        <div style={friends[4].isOnline ? { color: 'green' } : { color: 'red'}}>●</div>
                        <img className={css.friendAvatar} src={friends[4].avatar} width="48px"/>
                        <p className={css.friendName}>{friends[4].name}</p>
                    </li>
                </div>
            </ul>
        </div>
    );
}
