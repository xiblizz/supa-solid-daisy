import { Motion } from "@motionone/solid"

function Fade(props) {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: .2, easing: "ease-out" }}
        >
            {props.children}
        </Motion.div>
    )
}

export default Fade;