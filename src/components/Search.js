import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContex";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('misha-diakovych')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Please, enter data user!')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter nice user..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={ onSubmit }
            />
        </div>
    )
}
