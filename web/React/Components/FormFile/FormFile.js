const { Component, useState } = React;

function FormFile(props) {

    const [Tags, setTags] = useState([]);
    const [File, setFile] = useState({ name: '' });
    const { SerachOpc, Add, SearchFile, UploadFile } = Messages();
    const User = JSON.parse(localStorage.getItem('User'));

    function Submit() {
        if (Tags.length <= 0) {
            document.getElementById('tag').className += ' is-danger';
        } else {
            props.Action(File);
            return true;
        }
    }

    function AddTag() {
        var tag = document.getElementById('tag').value;
        if (tag != '' && tag != undefined && tag != null) {
            if (!Tags.includes(tag)) {
                var temp = Tags.slice(0);
                temp.push(tag);
                setTags(temp);
            }
            document.getElementById('tag').value = '';
            document.getElementById('tag').className = 'input';
        }
    }

    function RemoveTag(index) {
        var temp = Tags.slice(0);
        temp.splice(index, 1);
        setTags(temp);
    }

    return (
        <form action="javascript:;" onSubmit={Submit.bind(this)} method="POST">
            <div class="field">
                <p class="control">
                    <input class="input" type="text" placeholder="Titulo del documento" required id="titulo" />
                </p>
            </div>
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Descripción del documento"></textarea>
                </div>
            </div>
            <div class="field">
                <div class="control has-icons-left">
                    <div class="select is-fullwidth">
                        <select required>
                            {
                                SerachOpc.map((item, i) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div class="icon is-small is-left">
                        <i class="fas fa-filter"></i>
                    </div>
                </div>
            </div>
            <div class="field has-addons is-fullwidth">
                <div class="control is-fullwidth" style={{ width: '100%' }}>
                    <input class="input" type="text" placeholder="Tag" id="tag" />
                </div>
                <div class="control">
                    <a class="button is-info" onClick={AddTag.bind(this)}>
                        {Add}
                    </a>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="tags">
                        {
                            Tags.map((item, i) => {
                                return (
                                    <span class="tag is-success">
                                        {item}
                                        <a class="delete is-small" onClick={RemoveTag.bind(this, i)}></a>
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="file has-name is-boxed is-fullwidth">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" onChange={() => setFile(document.getElementById('file').files[0])} id="file" required accept=".pdf" />
                            <span class="file-cta has-text-centered">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    {SearchFile}
                                </span>
                            </span>
                            <span class="file-name has-text-centered">
                                {File.name}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-info is-fullwidth" type="submit">{UploadFile}</button>
                </p>
            </div>
        </form>
    );
}