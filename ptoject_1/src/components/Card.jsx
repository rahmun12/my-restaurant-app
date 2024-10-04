
const Card = ({ src }) => {
    try {
        return (
            <div>
                <img src={src} alt='' />
                <h1>ini rutinitas</h1>
                <p>Software Developer</p>
                <p>5 years experience</p>
            </div>
        )
        // eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error)
    }

}

export default
    Card