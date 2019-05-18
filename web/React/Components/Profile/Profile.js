const { Component } = React;

function Profile(props) {

    const [Load, setLoad] = useState(true);
    return (
        <div class="full is-fullhd">
            <NavBar props={props} />
            {Load ? null : <Loader />}
        </div>
    );
}