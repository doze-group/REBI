const { Component } = React;

function Loader(props) {
    return (
        <div class="container full is-fullhd">
            <div class="columns full">
                <div class="column is-flex is-horizontal-center is-vertical-center">
                    <img src="https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif" />
                </div>
            </div>
        </div>
    );
}