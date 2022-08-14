import '../Styles/Stories.scss';
import HorizontalScroll from "react-scroll-horiztonal";
import Story from "./Story";

function Stories() {
    return (
        <div className="stories">
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </HorizontalScroll>
        </div>
    )
}

export default Stories;