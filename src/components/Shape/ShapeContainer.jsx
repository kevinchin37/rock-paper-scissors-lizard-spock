import Shape from './Shape';
import classes from './ShapeContainer.module.css';

const ShapeContainer = () => {
    return (
        <div className={classes.shapes}>
            <div className={classes['shapes-grid']}>
                <Shape className={classes['rock-grid']} type="rock"/>
                <Shape className={classes['scissors-grid']} type="scissors"/>
                <Shape className={classes['paper-grid']} type="paper"/>
                <Shape className={classes['lizard-grid']} type="lizard"/>
                <Shape className={classes['spock-grid']} type="spock"/>
            </div>
        </div>
    );
}

export default ShapeContainer;