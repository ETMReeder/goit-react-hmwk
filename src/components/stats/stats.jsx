import css from './stats.module.css';
import data from './data.json';

export const Stats = () => {
    return (
        <div className={css.container}>
            <div className={css.statsContainer}>
                <div className={css.statsTitleContainer}>
                    <h3 className={css.statsTitle}>
                        UPLOAD STATS
                    </h3>
                </div> 
                <div className={css.statsContainers}>
                    <div className={css.statsDivs}>
                        <p className={css.statsLabel}>
                            {data[0].label}
                        </p>
                        <p className={css.statsPercent}>
                            {data[0].percentage}
                        </p>
                    </div>
                    <div className={css.statsDivs}>
                        <p className={css.statsLabel}>
                            {data[1].label}
                        </p>
                        <p className={css.statsPercent}>
                            {data[1].percentage}
                        </p>
                    </div>
                    <div className={css.statsDivs}>
                        <p className={css.statsLabel}>
                            {data[2].label}
                        </p>
                        <p className={css.statsPercent}>
                            {data[2].percentage}
                        </p>
                    </div>
                    <div className={css.statsDivs}>
                        <p className={css.statsLabel}>
                            {data[3].label}
                        </p>
                        <p className={css.statsPercent}>
                            {data[3].percentage}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
            );
            
}