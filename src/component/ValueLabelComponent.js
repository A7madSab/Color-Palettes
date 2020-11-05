import Tooltip from "@material-ui/core/Tooltip"

const ValueLabelComponent = ({ children, open, value }) => {
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    )
}

export default ValueLabelComponent